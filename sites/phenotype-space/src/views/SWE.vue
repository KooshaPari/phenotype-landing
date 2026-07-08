<script setup lang="ts">
interface Project { name: string; description: string; url: string }
const projects: Project[] = [
  { name: "AgilePlus", description: "Spec-governance engine — turn prompts into PRs.", url: "https://github.com/KooshaPari/AgilePlus" },
  { name: "sharecli", description: "Rust process hypervisor for build/test orchestration.", url: "https://github.com/KooshaPari/sharecli" },
  { name: "substrate", description: "Headless agent dispatch mesh across CLI providers.", url: "https://github.com/KooshaPari/substrate" },
  { name: "SessionLedger", description: "Rust session-bundle compiler with desktop viewer.", url: "https://github.com/KooshaPari/SessionLedger" },
  { name: "Tracera", description: "Spec-to-code traceability for Rust + TypeScript.", url: "https://github.com/KooshaPari/Tracera" },
];
</script>

<template>
  <section>
    <h1>SWE</h1>
    <p class="lede">Software projects from the phenotype org. Most are Rust or TypeScript.</p>

    <div class="grid">
      <article v-for="p in projects" :key="p.name" class="card">
        <h2>{{ p.name }}</h2>
        <p>{{ p.description }}</p>
        <a :href="p.url" target="_blank" rel="noopener">Source &rarr;</a>
      </article>
    </div>
  </section>
</template>

<style scoped>
h1 { font-size: 2.5rem; margin: 0 0 0.5rem; }
.lede { color: var(--muted); margin-bottom: 2rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
.card { padding: 1.5rem; border: 1px solid #1c1f25; border-radius: 12px; background: #11141a; }
.card h2 { margin: 0 0 0.5rem; font-size: 1.15rem; }
.card p { color: var(--muted); margin: 0 0 1rem; }
.card a { color: var(--accent); text-decoration: none; font-size: 0.9rem; }
</style>
