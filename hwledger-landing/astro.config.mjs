// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hwledger.kooshapari.com',
  base: process.env.GITHUB_PAGES === 'true' ? '/hwledger-landing' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
