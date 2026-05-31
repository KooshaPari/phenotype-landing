// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build
export default defineConfig({
  site: 'https://projects.kooshapari.com',
  base: process.env.GITHUB_PAGES === 'true' ? '/projects-landing' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
