
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourusername.github.io',  // Replace with your GitHub username
  base: '/your-repo-name',  // Replace with your repository name
  integrations: [tailwind()],
  output: 'static',
  vite: {
    ssr: {
      noExternal: ['@radix-ui/*', 'class-variance-authority']
    }
  }
});
