import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import tailwind from '@astrojs/tailwind';
import { resolveSiteBase } from './resolve-base.mjs';

export default defineConfig({
  site: 'https://phenotype.space',
  base: resolveSiteBase('site-base'),
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@phenotype/design-tokens/tokens.css': fileURLToPath(
          new URL('../design-tokens/tokens.css', import.meta.url),
        ),
      },
    },
  },
});
