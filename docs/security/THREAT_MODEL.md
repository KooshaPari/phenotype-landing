---
title: "Threat Model"
version: 0.1.0
lastUpdated: 2026-06-16
---

# Threat Model

> **Source of truth:** phenotype-landing (Astro monorepo: all Phenotype org landing pages — odin, thegent, projects, byteport, agileplus, phenokits, hwledger)
> **Scope:** Static-site build, content source files, CI/CD pipeline, hosting, analytics, dependency manifest

## Assets

1. **Static-site build artifacts (`dist/`)** — Output of the Astro build; deployed to GitHub Pages (or equivalent) for each landing page. If mutable in the build pipeline, an attacker can inject a phishing clone of a landing page.
2. **Markdown / MDX content sources** — Authored content per landing page (odin, thegent, projects, byteport, agileplus, phenokits, hwledger). If mutable by an adversary, content (download links, PGP keys, contact info) can be swapped.
3. **Astro build pipeline** — Runs in GitHub Actions; reads `package.json`, `astro.config.mjs`, and content files. If `package.json` is compromised, an attacker can run arbitrary code at build time.
4. **CI secrets** — `ASTRO_DEPLOY_KEY`, `GITHUB_TOKEN`, `CLOUDFLARE_API_TOKEN` (if used). Compromise allows an adversary to push to the gh-pages branch or update DNS.
5. **Pinned npm dependencies** — All `package.json` deps resolved at build time. A compromised npm package (supply-chain attack) can inject malicious JS into every landing page.

## Threats (STRIDE)

| Category | Threat | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| **Spoofing** | An adversary registers a typosquatted domain (e.g., `phenokit.dev` vs `phenokits.dev`) and serves a near-identical landing page that prompts for a wallet seed or GH token. | Medium | High | All landing pages set `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`. The org's primary domain is registered with HSTS preload. `/.well-known/security.txt` is published on every landing page. |
| **Tampering** | The `dist/` build output is modified between the GitHub Actions build and the CDN upload. | Low | High | Build output is checksummed (SHA-256) and the CDN validates the checksum on each upload. `package-lock.json` is committed at the repo root; CI uses `npm ci` (not `npm install`) to prevent drift. |
| **Repudiation** | A contributor publishes a landing page change and later denies doing so. | Low | Medium | All commits are signed (gitsign, keyless via GitHub OIDC). The git history is the audit trail. |
| **Information Disclosure** | A landing page inadvertently leaks internal infrastructure (e.g., a development endpoint, a debug build flag, a hidden analytics key). | Medium | Medium | `astro build` runs with `NODE_ENV=production`; debug-only paths are stripped. CI includes a `secret-scan` step that fails the build on known patterns. Public SRI hashes are emitted for all `<script>` and `<link rel="stylesheet">` tags. |
| **Denial of Service** | The Astro build is triggered by a malicious PR that introduces an infinite loop or memory blowup. | Low | Low | GitHub Actions has a 6-hour timeout per job. The build command is wrapped in a sub-process with `ulimit -v 4GB`. |
| **Elevation of Privilege** | A malicious npm postinstall script gains shell access at build time and modifies the build output or exfiltrates secrets. | Low | Critical | `npm ci --ignore-scripts` is the default in CI. For packages that require postinstall scripts, an explicit allowlist is maintained in `package.json#onlyBuiltDependencies`. Each postinstall is reviewed for side effects (network calls, file writes outside `dist/`). |

## Residual Risk and Revision Cadence

The most material residual risk is **supply-chain compromise via a typosquatted or hijacked npm package** — a single compromised dep in `package.json` can inject malicious JS into all 7 landing pages at once. For a small monorepo without a dedicated `npm audit` step in CI, the strongest available mitigation is `package-lock.json` + `npm ci` + the postinstall allowlist, but these do not catch a malicious update that has already been published to npm. The next highest residual is **typosquatted external domain** — there is no automated way to detect a lookalike domain without registering it pre-emptively. This threat model should be revised quarterly (February, May, August, November) or whenever a new landing page is added, the hosting target changes, or the npm package allowlist grows beyond 20 entries. The revision trigger is any PR that adds a new dependency, switches the hosting target, or introduces a new public-facing endpoint.
