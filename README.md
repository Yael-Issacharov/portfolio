# Yael Issacharov — Portfolio

A personal design portfolio. It's a **static website** built with [Astro](https://astro.build)
and hosted for free on **GitHub Pages**. It's built to be easy to run yourself:
to add work you copy a folder, edit one file, drop in images, and push. No CMS,
no database, no build steps to run by hand.

- **Add a project:** [How to add a new project](#how-to-add-a-new-project)
- **Publish changes:** [How to deploy](#how-to-deploy)
- **Change colors / fonts / spacing:** [Editing the design](#editing-the-design)
- **Why it's not on Google:** [Privacy](#privacy)
- **Keeping it safe:** [Security & maintenance](#security--maintenance)

---

## The one-minute mental model

- Each project is **one folder** in `src/content/projects/`, containing **one text
  file** (`index.md`) and an **`images/` folder** next to it.
- The **home page builds itself** from those folders — you never edit it to add work.
- **All the visual styling** (colors, fonts, sizes, spacing) lives in **one file**:
  `src/styles/tokens.css`. Change a value there and the whole site updates.
- There's a hidden **`/design-system`** page that shows every color, font size, and
  component in one place — your visual reference.

---

## How to add a new project

1. In `src/content/projects/`, **copy the `1-tambour` folder** and rename it.
   The number at the front controls the order on the home page
   (`1-` shows first, `2-` next, and so on). Example: `2-stratasys`.
2. Open the new folder's **`index.md`** and edit the details at the top
   (title, disciplines, studio, role, years, `order`).
3. Put your images in the folder's **`images/`** subfolder, and point `hero`,
   `thumbnail`, and any section images at them (e.g. `./images/hero.jpg`).
4. Write the project's **sections** (see [Section templates](#section-templates)
   below — copy-paste the ones you need, in any order).
5. **Save, commit, and push.** The new project appears on the home page
   automatically. (See [How to deploy](#how-to-deploy).)

> If you make a typo in a project file, the site will refuse to build and tell you
> **exactly which file and field** to fix — so a mistake can't quietly ship a
> broken page.

### The fields at the top of a project file

```yaml
title: Stratasys
disciplines: ["Web Design (UX/UI)"]   # one or more, shown as tags
studio: Moveo Creative
role: Design Lead
years: "Ongoing"                       # e.g. "2025-2026" or "Ongoing" (keep the quotes)
order: 2                                # 1 = first on the home page
featured: false                        # true = the card spans the full width
hero: ./images/hero.jpg                # big image at the top of the project page
thumbnail: ./images/thumbnail.jpg      # image on the home gallery card
```

### Section templates

Under `sections:` you list the parts of the project body. Use only the ones you
need, in any order. **Copy a block below and change the words.** Indentation
matters — keep the two-space indenting exactly as shown.

```yaml
sections:
  # A paragraph. (Add `lead: true` for the slightly heavier intro style.)
  - type: context
    label: Project Context        # optional small label in the left margin
    text: |
      Your paragraph here. Press enter for a
      new line inside the same paragraph.

  # A titled paragraph.
  - type: process
    title: Process
    text: Your text here.

  # A numbered list. (Also available as `type: personas`.)
  - type: goals
    title: Goals
    items:
      - "First item"
      - "Second item"

  # A Challenge + Solution pair.
  - type: challenge
    label: "A UX challenge"       # optional
    challenge: The problem, in a sentence or two.
    solution: How you solved it.

  # A short philosophy statement.
  - type: philosophy
    title: Philosophy
    text: A sentence about your approach.

  # A titled example, optionally with images.
  - type: example
    label: "Example 01"           # optional
    title: A feature you built
    text: What it is and why it matters.
    images:
      - ./images/example-1.jpg

  # A standalone section title.
  - type: heading
    text: "Challenges & Solutions"

  # Image(s) on their own.
  #   one image  -> shown full width
  #   two or three -> shown side by side
  - type: images
    items:
      - ./images/wide-shot.jpg
    alt: "Short description of the image"
```

**Images:** drop them into the project's `images/` folder at full resolution —
the site automatically shrinks and compresses them for each screen size and
lazy-loads the ones below the fold. You don't need to resize anything yourself.

---

## How to deploy

### First time only (about 5 minutes)

1. **Create a repository on GitHub** for this site (e.g. named `portfolio`).
2. Open **`astro.config.mjs`** and set two values near the top:
   ```js
   const GITHUB_USERNAME = 'your-username';  // your GitHub username, lowercase
   const REPO_NAME = 'portfolio';            // must match the repo name you created
   ```
   Your live address will be `https://your-username.github.io/portfolio/`.
3. Push this project to that repository.
4. On GitHub, go to the repo's **Settings → Pages**, and under **"Build and
   deployment" → Source**, choose **"GitHub Actions"**. (You only do this once.)

That's it. The included workflow (`.github/workflows/deploy.yml`) does the rest.

### Every time after that

Just **push your changes to the `main` branch.** GitHub automatically rebuilds
and republishes the site in a minute or two. You can watch progress on the repo's
**Actions** tab. Nothing to run on your computer.

### Previewing locally (optional)

If you want to see changes before pushing:

```bash
npm install     # first time only
npm run dev      # then open the http://localhost:4321/portfolio/ address it prints
```

---

## Editing the design

**All** colors, fonts, sizes, and spacing live in one file:
**`src/styles/tokens.css`**. Change a value there and it updates everywhere —
no need to hunt through pages. Open **`/design-system`** in your browser to see
everything rendered live; reload it after an edit to check your change.

Inside `tokens.css`, look for the labeled sections:

- **Colors** → the `COLORS` block. Example — to make secondary text darker:
  ```css
  --color-text-secondary: rgba(0, 0, 0, 0.7); /* was 0.55 */
  ```
- **Fonts** → `FONT FAMILIES`. Example — swap the body font:
  ```css
  --font-body: 'Georgia', serif;
  ```
- **Type sizes** → `TYPE SCALE`. Example — bigger project titles:
  ```css
  --h1-size: 60px; /* was 52px */
  ```
- **Spacing** → the `SPACING` block (`--space-1` … `--space-9`).

The three responsive layouts (desktop / tablet / mobile) are at the **bottom** of
`tokens.css`, each in its own clearly-labeled block — only the values that change
between screen sizes live there.

Your **contact links and the "philosophy" blurb** aren't design — they live in
**`src/data/site.ts`**. Edit that file to add your email, Instagram, and LinkedIn.

---

## Privacy

This site is set up to **stay out of search engines**:

- Every page includes `<meta name="robots" content="noindex, nofollow">`.
- `public/robots.txt` asks all crawlers not to index anything.
- No sitemap is generated.

**Important caveat:** this hides the site from Google and Bing, but it is **not
private**. GitHub Pages sites are public, so **anyone who has the link can open
it** — there's no password. "noindex" means "don't list me in search results,"
not "keep me secret."

**If you ever want real gating** (a login or password), GitHub Pages can't do
that. You'd move the site to a host that supports access control — for example
**Netlify** or **Vercel** (both support password protection on paid plans), or
**Cloudflare Pages** with **Cloudflare Access** in front of it. The site itself
wouldn't need to change much; only where it's hosted.

---

## Security & maintenance

This is a **static site**: it's just files. There's no database, no login, and no
place for visitors to type anything in — so the usual website attack surfaces
(hacked logins, database breaches, form spam) simply don't exist here. The main
thing to protect is **your GitHub account**, because that's what controls the site.

- **Turn on two-factor authentication (2FA) on GitHub.** This is the single most
  important safeguard. GitHub → your profile → **Settings → Password and
  authentication → Two-factor authentication**. With 2FA on, someone who steals
  your password still can't get in.
- **Enable Dependabot alerts.** This site uses a few open-source building blocks;
  occasionally one needs a security update. In the repo: **Settings → Advanced
  Security** (or **Code security**) → turn on **Dependabot alerts**. When GitHub
  notices one, it opens a pull request that updates the package for you — you
  review it and click **Merge**, and the deploy runs automatically. That's the
  whole update process.
- **Dependencies are kept minimal** (Astro plus the Inter font) so there's very
  little to ever maintain.
- **Never commit secrets.** This repository is public. Don't put passwords, API
  keys, or private files in it. (The `.gitignore` already excludes `.env` files.)

---

## Project structure (for reference)

```
portfolio/
├─ src/
│  ├─ content/projects/        ← one folder per project (this is what you edit)
│  │  └─ 1-tambour/
│  │     ├─ index.md            ← the project's text + section list
│  │     └─ images/             ← its images
│  ├─ styles/tokens.css         ← ALL colors/fonts/spacing (single source of truth)
│  ├─ data/site.ts              ← your contact links + philosophy blurb
│  ├─ components/               ← reusable pieces (card, nav, footer, sections…)
│  ├─ layouts/                  ← the page shell (adds the noindex tags)
│  └─ pages/                    ← home, about, project template, /design-system
├─ public/robots.txt            ← tells search engines to stay away
├─ astro.config.mjs             ← your GitHub username + repo name
└─ .github/workflows/deploy.yml ← auto-deploy on push
```

---

### A few notes on the reference build (Tambour)

- The Tambour text is taken **verbatim from the Figma file**. A couple of spots
  are marked `TODO` where the Figma still had placeholder text (the "Example 02"
  description) — fill those in when ready. There are also a couple of small typos
  in the source copy (e.g. "as a the industry leader") left exactly as written;
  fix them in `index.md` whenever you like.
- The Tambour **images are placeholders** pulled from the Figma mockup. Replace
  them with your real screenshots by dropping new files into
  `src/content/projects/1-tambour/images/`.
- The **About page** and the home **hero/philosophy** text weren't in the Figma
  file, so they're built from the same design system with `TODO` placeholders —
  edit them in `src/data/site.ts`.
