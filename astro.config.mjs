import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Detect GitHub Pages configuration dynamically
const rawRepo = process.env.GITHUB_REPOSITORY || '';
const [owner, repo] = rawRepo.split('/');

let base = '/';
let site = 'https://hoanggia776123-svg.github.io';

if (process.env.BASE_PATH) {
  base = process.env.BASE_PATH;
} else if (rawRepo) {
  // If repository matches <owner>.github.io, it is a root user/org site.
  // Otherwise, it is a project site and requires the /<repo>/ base.
  const isUserSite = repo && owner && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
  base = isUserSite ? '/' : `/${repo}/`;
  site = `https://${owner}.github.io`;
}

if (process.env.SITE_URL) {
  site = process.env.SITE_URL;
}

export default defineConfig({
  site: site,
  base: base,
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
