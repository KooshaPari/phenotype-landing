<script setup lang="ts">
</script>

<template>
  <section class="me">
    <h1>Me</h1>
    <p class="lede">
      Koosha Pari — engineer, builder, keyboard enthusiast. I run a small
      multi-project org (phenotype) where I experiment with software, firmware,
      and hardware in public.
    </p>
    <p>
      <!-- TODO(Kooshapari): replace placeholder bio with a real paragraph or two. -->
      I split my time between distributed-systems work, mechanical-keyboard
      design, and a fleet of small Rust/TypeScript tools. The
      <a href="https://github.com/KooshaPari" target="_blank" rel="noopener">github</a>
      is the source of truth.
    </p>
  </section>
</template>

<style scoped>
.me { max-width: 60ch; }
h1 { font-size: 2.5rem; margin: 0 0 0.5rem; }
.lede { color: var(--fg); }
p { color: var(--muted); line-height: 1.65; }
a { color: var(--accent); }
</style>
