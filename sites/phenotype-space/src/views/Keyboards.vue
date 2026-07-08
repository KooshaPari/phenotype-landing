<script setup lang="ts">
import Keyboard3D from "../components/Keyboard3D.vue";
</script>

<template>
  <section>
    <h1>Keyboards</h1>
    <p class="lede">
      <!-- TODO(Kooshapari): describe the WITF / PhenoKeys lineup. -->
      3D-printed and milled. Layouts tuned for fast code editing, with a heavy
      emphasis on tactile switches and split ergonomic geometry. Below: a
      work-in-progress render of the WITF-Primary v2.
    </p>

    <div class="viewer">
      <Keyboard3D />
    </div>
  </section>
</template>

<style scoped>
h1 { font-size: 2.5rem; margin: 0 0 0.5rem; }
.lede { color: var(--muted); max-width: 60ch; margin-bottom: 2rem; }
.viewer { width: 100%; height: 480px; border: 1px solid #1c1f25; border-radius: 12px; overflow: hidden; background: #0e1116; }
</style>
