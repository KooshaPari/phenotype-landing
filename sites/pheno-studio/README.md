# pheno.studio

Card-grid selector for every deployed variant of the phenotype org.

Each card links to a live surface. The list is hard-coded in
`src/App.vue`; update it when a new variant is deployed.

## Develop

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # type-check + production build -> dist/
```

## Deploy

`vercel.json` ships SPA-friendly rewrites (all paths → `index.html`).
