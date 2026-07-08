<template>
  <section class="me">
    <h1>Me</h1>
    <p class="lede">
      Koosha Pari — engineer, builder, keyboard enthusiast. I run a small
      multi-project org (phenotype) where I experiment with software, firmware,
      and hardware in public.
    </p>
    <p>
      I split my time between distributed-systems work, mechanical-keyboard
      design, and a fleet of small Rust + TypeScript tools. The
      <a href="https://github.com/KooshaPari" target="_blank" rel="noopener">github</a>
      is the source of truth.
    </p>

    <nav class="social">
      <a href="https://github.com/KooshaPari" target="_blank" rel="noopener">GitHub</a>
      <a href="https://kooshapari.com" target="_blank" rel="noopener">Blog</a>
      <a href="https://x.com/kooshapari" target="_blank" rel="noopener">X / Twitter</a>
    </nav>
  </section>
</template>

<style scoped>
.me { max-width: 60ch; }
h1 { font-size: 2.5rem; margin: 0 0 0.5rem; }
.lede { color: var(--fg); }
p { color: var(--muted); line-height: 1.65; }
a { color: var(--accent); }
.social { display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap; }
.social a {
  padding: 0.5rem 1rem; border: 1px solid #1c1f25; border-radius: 8px;
  text-decoration: none; font-size: 0.9rem;
}
.social a:hover { border-color: var(--accent); }
</style>
