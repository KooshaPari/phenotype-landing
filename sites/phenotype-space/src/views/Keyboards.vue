<script setup lang="ts">
import { defineAsyncComponent } from "vue";

// Lazy-load the 3D viewer so Three.js only ships when this view is visited.
// TODO(Kooshapari): drop /public/keyboard.glb here — the recon inventory
// targeted /Users/kooshapari/Downloads/WITF-Primary v2.glb, but that path is
// sandboxed. Until a real .glb is in /public/, the viewer shows a 4x4 fallback.
const Keyboard3D = defineAsyncComponent(() => import("../components/Keyboard3D.vue"));
</script>

<template>
  <section>
    <h1>Keyboards</h1>
    <p class="lede">
      WITF — "Whatever I Type Fast." A lineup of split / ortholinear / columnar
      keyboards tuned for code editing. 3D-printed and milled cases, tactile
      switches, QMK / Vial firmware. The viewer below renders the WITF-Primary
      v2 model (currently showing a fallback cluster — see the TODO above).
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
