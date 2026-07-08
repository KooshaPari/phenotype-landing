<script setup lang="ts">
import { RouterLink } from "vue-router";

const lanes = [
  { to: "/swe", title: "Software", body: "Rust + TypeScript tools — spec engines, dispatch, observability." },
  { to: "/keyboards", title: "Keyboards", body: "3D-printed and milled layouts for fast code editing." },
  { to: "/me", title: "About", body: "Who runs phenotype, and where to find him on the web." },
];
</script>

<template>
  <section class="hero">
    <h1>phenotype</h1>
    <p class="tagline">
      Phenotype — KooshaPari's org for software + keyboards + maker projects.
    </p>
    <p class="lede">
      A lab for software, silicon, and keyboards. Built by
      <a href="https://kooshapari.com" target="_blank" rel="noopener">KooshaPari</a>.
    </p>
    <RouterLink to="/swe" class="cta">View Projects &rarr;</RouterLink>

    <div class="lanes">
      <RouterLink v-for="l in lanes" :key="l.to" :to="l.to" class="lane">
        <h2>{{ l.title }}</h2>
        <p>{{ l.body }}</p>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hero { padding: 3rem 0; max-width: 720px; }
h1 { font-size: 3.5rem; margin: 0 0 0.5rem; letter-spacing: -0.03em; }
.tagline { font-size: 1.15rem; color: var(--fg); margin: 0 0 0.75rem; max-width: 52ch; }
.lede { color: var(--muted); font-size: 1.05rem; max-width: 52ch; margin: 0 0 2rem; }
.cta {
  display: inline-block; padding: 0.7rem 1.25rem; border: 1px solid var(--accent);
  border-radius: 8px; color: var(--accent); text-decoration: none; font-weight: 600;
  margin-bottom: 3rem;
}
.cta:hover { background: var(--accent); color: var(--bg); }
.lanes { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }
.lane {
  display: block; padding: 1.5rem; border: 1px solid #1c1f25; border-radius: 12px;
  text-decoration: none; color: var(--fg); background: #11141a;
  transition: border-color 0.15s, transform 0.15s;
}
.lane:hover { border-color: var(--accent); transform: translateY(-2px); }
.lane h2 { margin: 0 0 0.5rem; font-size: 1.1rem; }
.lane p { color: var(--muted); margin: 0; font-size: 0.92rem; line-height: 1.5; }
</style>
