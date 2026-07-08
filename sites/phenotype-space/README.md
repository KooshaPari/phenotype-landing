# phenotype.space

Multi-page Vue 3 + Vite SPA for the phenotype org. Routes:

- `/` — landing
- `/swe` — software projects portfolio
- `/keyboards` — 3D keyboard viewer (Three.js GLTFLoader)
- `/me` — about KooshaPari

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build -> dist/
```

## Keyboard .glb

Drop a `.glb` (e.g. `WITF-Primary v2.glb`) into `public/` as `keyboard.glb`
to be loaded by `Keyboard3D.vue`. If missing, a fallback 4x4 key cluster is
rendered so the page is never empty.

## Deploy

`vercel.json` ships SPA-friendly rewrites (all paths → `index.html`).
Vercel auto-detects the `vite` framework.

## Stack

- Vue 3.5 (script setup, `<style scoped>`)
- Vue Router 4 (history mode)
- Vite 6
- TypeScript 5.6 + vue-tsc
- Three.js 0.169 (GLTFLoader + OrbitControls from `three/examples/jsm/`)
