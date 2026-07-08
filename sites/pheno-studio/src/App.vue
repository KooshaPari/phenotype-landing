<script setup lang="ts">
const variants = [
  { name: "phenotype.space",         description: "Multi-page SPA: SWE, Keyboards, Me.",                  url: "https://phenotype.space",         tag: "primary",  disabled: false },
  { name: "kooshapari.com",          description: "Personal site + blog.",                                url: "https://kooshapari.com",          tag: "portfolio", disabled: false },
  { name: "agileplus.pheno.studio",  description: "Spec-kitty frontend knockoff — feature workbench.",    url: "https://agileplus.pheno.studio",  tag: "spec",     disabled: true },
  { name: "projects.kooshapari.com", description: "Auto-generated org portfolio (Astro).",                url: "https://projects.kooshapari.com", tag: "portfolio", disabled: false },
  { name: "agileplus.kooshapari.com",description: "AgilePlus product landing.",                           url: "https://agileplus.kooshapari.com",tag: "spec",     disabled: false },
  { name: "pheno.studio",            description: "You are here. Card selector across all variants.",     url: "https://pheno.studio",            tag: "studio",   disabled: false },
];
</script>

<template>
  <div class="layout">
    <header>
      <h1>pheno.studio</h1>
      <p>A launchpad for everything phenotype — pick a destination to compare side-by-side.</p>
    </header>

    <p class="note">
      Note: <code>agileplus.pheno.studio</code> source isn't on disk yet — the link goes to the
      deployed service if it exists, otherwise the card is disabled.
    </p>

    <main class="grid">
      <component
        v-for="v in variants"
        :key="v.url"
        :is="v.disabled ? 'div' : 'a'"
        v-bind="v.disabled ? {} : { href: v.url, target: '_blank', rel: 'noopener' }"
        class="card"
        :class="{ disabled: v.disabled }"
        :aria-disabled="v.disabled ? 'true' : 'false'"
      >
        <span class="tag" :class="v.tag">{{ v.tag }}</span>
        <h2>{{ v.name }}</h2>
        <p>{{ v.description }}</p>
        <span class="go">{{ v.disabled ? "Source missing on disk" : "Visit →" }}</span>
      </component>
    </main>

    <footer>&copy; 2026 KooshaPari / phenotype</footer>
  </div>
</template>

<style>
:root { color-scheme: dark; --bg: #0b0d10; --fg: #e6e6e6; --muted: #8a8f98; --accent: #a371f7; --panel: #11141a; --line: #1c1f25; }
* { box-sizing: border-box; }
html, body, #app { margin: 0; padding: 0; min-height: 100%; }
body { background: var(--bg); color: var(--fg); font-family: ui-sans-serif, system-ui, sans-serif; }
.layout { max-width: 1100px; margin: 0 auto; padding: 3rem 2rem; }
header h1 { font-size: 2.5rem; margin: 0 0 0.5rem; letter-spacing: -0.02em; }
header p  { color: var(--muted); margin: 0 0 1.5rem; }
.note { color: var(--muted); margin: 0 0 2rem; padding: 0.75rem 1rem; border: 1px solid var(--line); border-radius: 8px; background: var(--panel); font-size: 0.85rem; }
.note code { color: var(--accent); }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
.card { display: block; padding: 1.5rem; border: 1px solid var(--line); border-radius: 12px; background: var(--panel); text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.15s; }
.card:hover { border-color: var(--accent); transform: translateY(-2px); }
.card.disabled { opacity: 0.4; pointer-events: none; border-style: dashed; }
.card.disabled:hover { border-color: var(--line); transform: none; }
.card h2 { margin: 0.5rem 0 0.4rem; font-size: 1.1rem; }
.card p  { color: var(--muted); margin: 0 0 1.2rem; font-size: 0.9rem; }
.go { color: var(--accent); font-size: 0.85rem; }
.tag { display: inline-block; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; border-radius: 4px; background: #1c1f25; color: var(--muted); }
.tag.primary   { background: #2a1f3d; color: #c0a4f7; }
.tag.spec      { background: #1f2f3d; color: #95c4f7; }
.tag.studio    { background: #2d1f1f; color: #f7a495; }
.tag.portfolio { background: #1f2d1f; color: #95f7a4; }
footer { color: var(--muted); margin-top: 3rem; font-size: 0.85rem; text-align: center; }
</style>