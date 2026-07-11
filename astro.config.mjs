// @ts-check
import { defineConfig } from 'astro/config';

// ┌──────────────────────────────────────────────────────────────────────┐
// │  DEPLOY SETTINGS — this is the only place you edit for GitHub Pages.   │
// │                                                                        │
// │  1) GITHUB_USERNAME : your GitHub username (lowercase).                │
// │  2) REPO_NAME       : the repository name you create on GitHub.        │
// │                                                                        │
// │  Your live URL will be:  https://<GITHUB_USERNAME>.github.io/<REPO>/   │
// │  (README → "How to deploy" walks you through this step by step.)       │
// └──────────────────────────────────────────────────────────────────────┘
const GITHUB_USERNAME = 'yael-issacharov'; // your GitHub Pages subdomain (lowercase)
const REPO_NAME = 'portfolio'; // the repository name on GitHub

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: `/${REPO_NAME}`,
  trailingSlash: 'ignore',

  // Static output — no server, no database. Just files GitHub Pages serves.
  output: 'static',

  // We deliberately do NOT add @astrojs/sitemap: the site must stay
  // unlisted (see the noindex tags in BaseLayout.astro and public/robots.txt).
  image: {
    // Allow high-res source images; Astro downscales + compresses per breakpoint.
    responsiveStyles: true,
  },
});
