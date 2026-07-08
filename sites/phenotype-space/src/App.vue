<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="layout">
    <header class="header">
      <RouterLink to="/" class="brand">phenotype.space</RouterLink>
      <nav class="nav">
        <RouterLink to="/swe">SWE</RouterLink>
        <RouterLink to="/keyboards">Keyboards</RouterLink>
        <RouterLink to="/me">Me</RouterLink>
      </nav>
    </header>

    <main class="main">
      <RouterView />
    </main>

    <footer class="footer">
      <span>&copy; 2026 KooshaPari / phenotype</span>
    </footer>
  </div>
</template>

<style>
:root {
  color-scheme: dark;
  --bg: #0b0d10;
  --fg: #e6e6e6;
  --muted: #8a8f98;
  --accent: #a371f7;
}
* { box-sizing: border-box; }
html, body, #app { margin: 0; padding: 0; height: 100%; }
body {
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--fg);
}
.layout { display: flex; flex-direction: column; min-height: 100%; }
.header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.25rem 2rem; border-bottom: 1px solid #1c1f25;
}
.brand { font-weight: 700; font-size: 1.1rem; color: var(--fg); text-decoration: none; letter-spacing: -0.01em; }
.nav { display: flex; gap: 1.5rem; }
.nav a { color: var(--muted); text-decoration: none; font-size: 0.95rem; }
.nav a:hover, .nav a.router-link-active { color: var(--fg); }
.main { flex: 1; padding: 2rem; max-width: 1100px; width: 100%; margin: 0 auto; }
.footer { padding: 1.5rem 2rem; border-top: 1px solid #1c1f25; color: var(--muted); font-size: 0.85rem; }
h1 { letter-spacing: -0.02em; }
</style>
