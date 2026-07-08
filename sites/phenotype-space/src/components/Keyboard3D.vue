<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// TODO(Kooshapari): drop /public/keyboard.glb here. Until then, the viewer
// renders a 4x4 fallback cluster so the page is never empty.
const MODEL_URL = "/keyboard.glb";

const container = ref<HTMLDivElement | null>(null);
const status = ref<"loading" | "ready" | "fallback">("loading");

function buildFallback(scene: THREE.Scene) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x3b3f48, roughness: 0.6 });
  const cap = new THREE.MeshStandardMaterial({ color: 0x1c1f25, roughness: 0.4 });
  for (let x = 0; x < 4; x++) {
    for (let z = 0; z < 4; z++) {
      const base = new THREE.Mesh(new THREE.BoxGeometry(1, 0.4, 1), mat);
      base.position.set(x - 1.5, 0, z - 1.5);
      const key = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.8), cap);
      key.position.set(x - 1.5, 0.3, z - 1.5);
      group.add(base, key);
    }
  }
  scene.add(group);
  status.value = "fallback";
}

let renderer: THREE.WebGLRenderer | null = null;
let frameId = 0;

onMounted(() => {
  const el = container.value;
  if (!el) return;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e1116);

  const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 100);
  camera.position.set(3, 3, 3);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(el.clientWidth, el.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  el.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const key = new THREE.DirectionalLight(0xffffff, 1.0);
  key.position.set(5, 8, 5);
  scene.add(key);

  new GLTFLoader().load(
    MODEL_URL,
    (gltf) => {
      scene.add(gltf.scene);
      status.value = "ready";
    },
    undefined,
    () => buildFallback(scene)
  );

  const render = () => {
    controls.update();
    renderer!.render(scene, camera);
    frameId = requestAnimationFrame(render);
  };
  render();

  window.addEventListener("resize", () => {
    if (!renderer) return;
    camera.aspect = el.clientWidth / el.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(el.clientWidth, el.clientHeight);
  });
});

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId);
  renderer?.dispose();
  renderer = null;
});
</script>

<template>
  <div class="wrap">
    <div ref="container" class="canvas" />
    <p v-if="status === 'fallback'" class="note">
      Showing fallback cluster — drop /public/keyboard.glb to load the real model.
    </p>
  </div>
</template>

<style scoped>
.wrap { position: relative; width: 100%; height: 100%; }
.canvas { width: 100%; height: 100%; }
.note { position: absolute; bottom: 8px; left: 12px; color: var(--muted); font-size: 0.75rem; margin: 0; }
</style>
