#!/usr/bin/env bash
# Justification (scripting policy): ≤5-line glue calling `gh` CLI; a Rust port would re-implement the gh
# auth/pagination machinery for no real benefit. Migrate if logic grows beyond a single command.
set -euo pipefail
cd "$(dirname "$0")/.."
gh repo list KooshaPari --limit 200 \
  --json name,description,url,homepageUrl,primaryLanguage,stargazerCount,pushedAt,isArchived,isFork,repositoryTopics \
  > data/repos.json
echo "wrote data/repos.json ($(jq 'length' data/repos.json) repos)"
