<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="hero">
    <h1>phenotype</h1>
    <p class="lede">
      A lab for software, silicon, and keyboards. Built by
      <a href="https://kooshapari.com" target="_blank" rel="noopener">KooshaPari</a>.
    </p>
    <div class="cta">
      <RouterLink to="/swe" class="card">SWE</RouterLink>
      <RouterLink to="/keyboards" class="card">Keyboards</RouterLink>
      <RouterLink to="/me" class="card">Me</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hero { padding: 3rem 0; }
h1 { font-size: 3.5rem; margin: 0 0 0.5rem; }
.lede { color: var(--muted); font-size: 1.15rem; max-width: 50ch; }
.cta { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 3rem; }
.card {
  display: block; padding: 1.75rem; border: 1px solid #1c1f25; border-radius: 12px;
  text-decoration: none; color: var(--fg); background: #11141a;
  transition: border-color 0.15s, transform 0.15s;
}
.card:hover { border-color: var(--accent); transform: translateY(-2px); }
</style>
