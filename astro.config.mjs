
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sudevifoods.github.io',  // Replace with your GitHub username
  base: '/sudevi-spice-collection',  // Replace with your repository name
  integrations: [tailwind()],
  output: 'static',
  vite: {
    ssr: {
      noExternal: ['@radix-ui/*', 'class-variance-authority']
    }
  }
});
