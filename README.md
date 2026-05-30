# phenotype-landing

Monorepo of Phenotype org public landing sites (Astro + Bun), consolidated from individual repos.

## Sub-packages

| Directory | Site / purpose |
|-----------|----------------|
| `agileplus-landing` | AgilePlus product landing |
| `byteport-landing` | BytePort landing |
| `hwledger-landing` | HW Ledger landing |
| `phenokits-landing` | Phenokits catalog landing |
| `projects-landing` | Projects hub landing |
| `thegent-landing` | TheGent landing |
| `odin-landing` | Odin static landing (HTML/CSS, no Astro build) |

Each `*-landing` directory is an independent deployable; see its own `README.md` for dev commands.

## Root CI

`.github/workflows/ci.yml` runs Astro typecheck + build for the six Bun/Astro packages on `main` and PRs.

## License

MIT — see [LICENSE](LICENSE).
