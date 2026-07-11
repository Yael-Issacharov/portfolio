// =============================================================================
// CONTENT SCHEMA
// Defines exactly what a project file (src/content/projects/<name>/index.md)
// may contain. If a project file has a typo or a missing field, the site build
// stops and tells you which file and field to fix — so a mistake can never
// quietly ship a broken page.
//
// You normally don't edit this file. It's the "rulebook" for your content.
// The README ("How to add a new project") shows the copy-paste templates.
// =============================================================================

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // One folder per project; the content lives in index.md inside it.
  loader: glob({ pattern: '**/index.md', base: './src/content/projects' }),

  schema: ({ image }) => {
    // The flexible section types a project body can use, in any order.
    // Each section may carry an optional `label` — the small UPPERCASE
    // text that appears in the left margin (desktop) / above it (mobile).

    const label = z.string().optional();

    const section = z.discriminatedUnion('type', [
      // A standalone section title (e.g. "Challenges & Solutions").
      z.object({ type: z.literal('heading'), text: z.string() }),

      // A plain paragraph. Set lead:true for the heavier intro style.
      z.object({
        type: z.literal('context'),
        label,
        text: z.string(),
        lead: z.boolean().default(false),
      }),

      // A titled paragraph (default title "Process").
      z.object({
        type: z.literal('process'),
        label,
        title: z.string().default('Process'),
        text: z.string(),
      }),

      // A numbered list (default title "Goals").
      z.object({
        type: z.literal('goals'),
        label,
        title: z.string().default('Goals'),
        items: z.array(z.string()),
      }),

      // A numbered list (default title "Personas").
      z.object({
        type: z.literal('personas'),
        label,
        title: z.string().default('Personas'),
        items: z.array(z.string()),
      }),

      // A Challenge + Solution pair.
      z.object({
        type: z.literal('challenge'),
        label,
        challenge: z.string(),
        solution: z.string(),
      }),

      // A short design philosophy statement.
      z.object({
        type: z.literal('philosophy'),
        label,
        title: z.string().default('Philosophy'),
        text: z.string(),
      }),

      // A titled example: title + text + optional images.
      z.object({
        type: z.literal('example'),
        label,
        title: z.string(),
        text: z.string(),
        images: z.array(image()).default([]),
      }),

      // A grey placeholder block — marks where an asset (e.g. a video) will go.
      z.object({
        type: z.literal('placeholder'),
        label,
        ratio: z.string().default('16 / 9'), // aspect ratio of the box
        note: z.string().default('Video'),   // small centred caption
      }),

      // A grid of captioned images (each with its own caption underneath).
      z.object({
        type: z.literal('gallery'),
        label,
        items: z
          .array(
            z.object({
              image: image(),
              alt: z.string().default(''),
              caption: z.string().default(''),
            })
          )
          .min(1),
      }),

      // One or more images on their own.
      //   1 image   -> shown full width
      //   2 or more -> shown side by side in a centered row (keeps each
      //                image's real shape — good for phone screenshots)
      // Options:
      //   frame: true -> sit the image(s) on a soft grey backdrop (like a
      //                  device/showcase frame)
      //   tiles: true -> lay a group out as equal, evenly-cropped tiles
      //                  instead of preserving each shape
      z.object({
        type: z.literal('images'),
        label,
        items: z.array(image()).min(1),
        alt: z.string().default(''),
        caption: z.string().default(''),
        frame: z.boolean().default(false),
        tiles: z.boolean().default(false),
      }),
    ]);

    return z.object({
      // ----- Meta (shown on the card + at the top of the project page) -----
      title: z.string(),
      subtitle: z.string().optional(),   // a descriptive line under the title (project page)
      disciplines: z.array(z.string()), // e.g. ["Website Design (UX/UI)", "Branding"]
      studio: z.string(),
      role: z.string(),                  // short role for the card + meta row
      years: z.string(),                 // e.g. "2025-2026" or "Ongoing"
      order: z.number(),                 // gallery order (1 = first)

      // Optional richer header details (shown only on the project page).
      roles: z.array(z.string()).default([]),        // detailed role breakdown
      awards: z.array(z.string()).default([]),       // e.g. ["A'Design Award 2021"]
      collaborators: z.array(z.string()).default([]),// e.g. ["Carmen Balada (ceramist)"]
      client: z.string().optional(),
      agency: z.string().optional(),

      // Optional extra collaborators, shown under the meta on the project page.
      // e.g. - { role: "PM", names: "Dana Even Zahav, Shay Segal" }
      credits: z
        .array(z.object({ role: z.string(), names: z.string() }))
        .default([]),

      // Make this project span the full width of the gallery grid (desktop).
      featured: z.boolean().default(false),

      // ----- Images -----
      hero: image().optional(),          // big image at the top of the project page
      thumbnail: image().optional(),     // image on the home gallery card

      // ----- Body: the flexible sections, rendered in this exact order -----
      sections: z.array(section).default([]),
    });
  },
});

export const collections = { projects };
