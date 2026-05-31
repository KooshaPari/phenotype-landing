#!/usr/bin/env node
// Build-time fetch of KooshaPari repos -> data/repos.json
// Justification (scripting policy): runs inside the Astro/Node build runtime; replaces
// the prior shell+gh dependency so Vercel builds (which have no `gh` CLI) can refresh
// data on every deploy. A standalone Rust binary would require a separate toolchain
// install on Vercel, which is a net loss here.
//
// Auth: uses GITHUB_TOKEN env if present (raises rate limit to 5000/hr and grants
// access to private repos if the token has scope). Falls back to unauthenticated
// public API (60 req/hr per IP) which is sufficient for ~100 repos in one paginated
// batch.

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", "data", "repos.json");
const USER = "KooshaPari";
const PER_PAGE = 100;

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "projects-landing-build",
};
if (token) headers.Authorization = `Bearer ${token}`;

async function fetchPage(page) {
  const url = `https://api.github.com/users/${USER}/repos?per_page=${PER_PAGE}&page=${page}&sort=pushed`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API ${res.status} on page ${page}: ${body.slice(0, 200)}`);
  }
  return res.json();
}

async function fetchRepoTopics(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  const res = await fetch(url, { headers });
  if (!res.ok) return [];
  const json = await res.json();
  return (json.topics || []).map((name) => ({ name }));
}

async function main() {
  const all = [];
  for (let page = 1; page <= 10; page++) {
    const batch = await fetchPage(page);
    all.push(...batch);
    if (batch.length < PER_PAGE) break;
  }

  // Reshape to match the existing `gh repo list ... --json` schema that
  // src/pages/index.astro consumes. Keeps the build contract stable.
  // Note: Fetch topics separately since the list endpoint doesn't include them.
  const reshaped = await Promise.all(all.map(async (r) => {
    const topics = await fetchRepoTopics(USER, r.name);
    return {
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepageUrl: r.homepage || null,
      primaryLanguage: r.language ? { name: r.language, color: "" } : null,
      stargazerCount: r.stargazers_count ?? 0,
      pushedAt: r.pushed_at,
      isArchived: !!r.archived,
      isFork: !!r.fork,
      repositoryTopics: topics,
    };
  }));

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(reshaped, null, 2) + "\n", "utf8");
  console.log(`wrote ${OUT} (${reshaped.length} repos, auth=${token ? "yes" : "no"})`);
}

main().catch((err) => {
  console.error("fetch-repos failed:", err.message);
  // Do NOT fail the build — fall back to the committed snapshot. Vercel build logs
  // will show the warning, and the next cron-triggered deploy will retry.
  console.error("falling back to committed data/repos.json snapshot");
  process.exit(0);
});
