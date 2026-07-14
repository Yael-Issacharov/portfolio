# Yael Issacharov — portfolio site

Personal design portfolio (Yael Issacharov, Head of Design at Moveo Creative). Static Astro site,
**content is folder-driven**: each project = one folder with `index.md` + `images/`, and the home gallery
builds itself from those folders. English / LTR. Deliberately kept out of search (noindex + robots.txt)
but publicly reachable by link.

## Run / build
- ⚠️ **No system Node.** Standalone Node at `~/.local/node/node-v24.16.0-darwin-arm64/bin`, `gh` at
  `~/.local/bin`. Prepend to PATH first:
  ```bash
  export PATH="$HOME/.local/node/node-v24.16.0-darwin-arm64/bin:$HOME/.local/bin:$PATH"
  ```
- `npm install` (first time) · `npm run dev` (→ `http://localhost:4321/portfolio/` — note the `/portfolio/`
  base path) · `npm run build` (→ `dist/`) · `npm run preview`.

## Stack
Astro `^5.6` (static, content collections + `astro:assets`) · self-hosted Inter (`@fontsource-variable/inter`)
· `sharp` for image processing · TypeScript · **no UI framework** (pure `.astro`).

## Architecture — key files to edit
- **Project content (most edits):** `src/content/projects/<n-slug>/index.md` + sibling `images/`.
  The folder's numeric prefix is dropped from the URL; **actual order = the `order:` frontmatter field**
  (folder numbers have drifted from `order:` values — always trust `order:`).
- **Content schema:** `src/content.config.ts` — Zod schema (glob `**/index.md`). Frontmatter fields (title,
  subtitle, disciplines, studio, role, years, order, featured, hero, thumbnail, credits, awards, …) and a
  discriminated-union `sections[]` body model (`heading, context, process, goals, personas, challenge,
  philosophy, example, placeholder, gallery, images`). A schema violation fails the build with the exact file/field.
- **Pages:** `src/pages/index.astro` (self-building home gallery) · `src/pages/projects/[slug].astro`
  (per-project template, `getStaticPaths`) · `src/pages/about.astro` (Resume) · `src/pages/design-system.astro`
  (hidden `/design-system` token/component reference).
- **Layout:** `src/layouts/BaseLayout.astro` — shell; injects the `noindex` meta + floating `Nav`.
- **Components:** `src/components/` — `ProjectCard, ProjectSection, ProjectMeta, Gallery, ImageBlock, Nav,
  Footer, Eyebrow, DisciplineTag`.
- **Personal details (name/contact/philosophy):** `src/data/site.ts` — NOT design; the single place for
  author name, `heroIntro[]`, `contact`, `philosophy`.
- **Helpers:** `src/lib/projects.ts` — `slugForEntry()`, `getSortedProjects()` (sorts by `order`).

## Conventions
- **Design tokens are the single source of truth:** `src/styles/tokens.css` holds ALL colors, fonts, type
  scale, spacing (`--space-1..9`), radii, + responsive overrides (breakpoints `max-width:767px` mobile,
  `1023px` tablet). `src/styles/global.css` is the other global. Components use scoped `<style>` referencing
  CSS vars — **don't hardcode colors/sizes**.
- Fonts: heading = Helvetica Neue system stack; body = self-hosted Inter (no external font requests).
  Values come straight from Figma.
- Images: drop full-res into the project's `images/`, reference `./images/hero.jpg` in frontmatter; Astro's
  `<Image>` downscales/compresses/lazy-loads per breakpoint.
- The `pdf/` sibling project reads this repo's content + fonts to build the A4 PDF portfolio (see `../pdf/CLAUDE.md`).

## Deploy — GitHub Pages via Actions (repo `github.com/Yael-Issacharov/portfolio`, `main` = prod)
- `.github/workflows/deploy.yml` builds (`withastro/action@v3`) + publishes (`actions/deploy-pages@v4`) on
  every push to `main`. **Just push — nothing is built by hand.**
- `astro.config.mjs`: `site: https://yael-issacharov.github.io`, `base: /portfolio`, `output: 'static'`.
  Live: `https://yael-issacharov.github.io/portfolio/`. Sitemap deliberately omitted (stays unlisted).

## Current status (2026-07)
- **7 projects:** Tambour, Cye, Wallyx, Nave, Marc., Snap-Off Knife, Uno.
- Open TODOs: `src/data/site.ts` `philosophy.text` still a `TODO:` placeholder; `Footer.astro:27` TODO
  contact-links fallback; `1-tambour/index.md` has a TODO + Figma-placeholder images/text (some intentional
  typos left verbatim).
- Aside: an untracked `portfolio_handoff 2/` bundle sits at repo root — a handoff, not part of the build.
- No tests/linter.
