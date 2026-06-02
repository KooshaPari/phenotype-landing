> **Work state:** ACTIVE · **Progress:** `███████░░░ 70%`
> Astro+Bun monorepo of 7 org landing sites (agileplus, byteport, hwledger, phenokits, projects, thegent, odin), consolidated via git subtree. Sites build; content varies per site. · updated 2026-06-02

# phenotype-landing

Monorepo of Phenotype org public landing sites (Astro + Bun), consolidated from individual repos via `git subtree` (squashed merges; reversible on a branch).

## Layout

All deployable sites live under `sites/<name>/`. Each directory is an independent Astro (or static) package with its own `package.json`, lockfile, and CI in that subtree.

| Path | Site / purpose |
|------|----------------|
| `sites/agileplus-landing` | AgilePlus product landing |
| `sites/byteport-landing` | BytePort **marketing** landing (not the BytePort app repo) |
| `sites/hwledger-landing` | HW Ledger landing |
| `sites/phenokits-landing` | Phenokits catalog landing |
| `sites/projects-landing` | Projects hub landing |
| `sites/thegent-landing` | TheGent landing |
| `sites/odin-landing` | Odin static landing (HTML/CSS, no Astro build) |

**Not absorbed:** `AppGen` — Expo/React Native app scaffold (`expo`, `react-native`), not an Astro landing.

## Per-site development

```bash
cd sites/<name>
bun install
bun run dev    # or see site README
```

## Root CI

`.github/workflows/ci.yml` runs Astro typecheck + build for the six Bun/Astro packages under `sites/` on `main` and PRs.

## Subtree updates (optional)

To pull upstream from a source landing repo after merge:

```bash
git subtree pull --prefix=sites/<name> https://github.com/KooshaPari/<name>.git main --squash
```

## License

MIT — see [LICENSE](LICENSE).
