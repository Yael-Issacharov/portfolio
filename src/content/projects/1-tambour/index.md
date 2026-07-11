---
# ==========================================================================
#  TAMBOUR  —  reference project.
#  Copy from the Figma file, used verbatim. TODO markers show where the
#  Figma had placeholder text. To add another project, copy this whole
#  folder, rename it, edit the fields below, and drop new images in /images.
#  (See the README "How to add a new project".)
# ==========================================================================

title: Tambour
disciplines:
  - "Concept"
  - "UX/UI Design"
  - "Web Design"
studio: Moveo Creative
role: Lead Designer
years: "2023-2026"
order: 1
credits:
  - { role: "PM", names: "Dana Even Zahav, Shay Segal" }
  - { role: "Dev", names: "Noam, Shelly" }
  - { role: "Design", names: "Nitzan Bar, Sivan Chini" }
featured: true            # spans the full gallery width on desktop
hero: ./images/hero.jpg
thumbnail: ./images/cover.jpg

sections:
  # ---- Intro --------------------------------------------------------------
  - type: context
    label: Project Context
    lead: true
    text: |
      Tambour is Israel's largest paint and coatings company, founded in 1936 - a brand so embedded in daily life that its name became the everyday Hebrew word for paint.
      They approached us because their website no longer reflected how the company had evolved or served its business goals: years of incremental additions had left a cumbersome user journey and a confusing information architecture, cluttered with overlapping, repetitive links.

  - type: process
    label: Project Context
    title: Process
    text: >-
      The project ran in three phases. [1] Scoping: defining goals, mapping
      audiences and user journeys, building the sitemap, UX research,
      wireframes, and a tech spec. [2] From there, a visual concept. [3] Then
      the design and development of the new site.

  - type: goals
    title: Goals
    items:
      - "Position Tambour as a the industry leader in color, construction, and gypsum products"
      - "make the site useful and easy to navigate"
      - "establish Tambour as a thought leader/trendsetter in color"
      - "convey stability and strong local service"
      - "lay groundwork for e-commerce"

  - type: personas
    title: Personas
    items:
      - "influencers (architects/designers)"
      - "professionals (contractors/painters)"
      - "industry buyers (procurement/technical staff)"
      - "private consumers"

  - type: images
    items:
      - ./images/overview.jpg
    alt: "Overview of the redesigned Tambour website"

  # ---- Challenges & Solutions --------------------------------------------
  - type: heading
    text: "Challenges & Solutions"

  - type: challenge
    label: "A systemic structural challenge"
    challenge: >-
      How can a brand that is recognized in nearly every household in Israel
      as the leading paint brand of Israel, expand its identity to include two
      additional business domains, construction finishing materials and
      drywall, without losing its market positioning as the leading authority
      in paint?
    solution: >-
      The entire website was restructured through content segmentation, from
      the sitemap to content pages, product catalog, and editorial content,
      according to Tambour's three business domains: Paint, Construction
      Finishing Materials, and Drywall.

  # A framed colour page, a row of catalog screens on mobile, and the
  # colour-fan page shown on mobile + desktop together.
  - type: images
    frame: true
    items:
      - ./images/hue-page.jpg
    alt: "Colour page — Dark Blue"

  - type: images
    frame: true
    items:
      - ./images/catalog-mobile.jpg
      - ./images/catalog-mobile.jpg
      - ./images/catalog-mobile.jpg
      - ./images/catalog-mobile.jpg
    alt: "Product catalog on mobile"

  - type: images
    frame: true
    items:
      - ./images/color-chart-mobile.jpg
      - ./images/hamenifa-desktop.jpg
    alt: "The colour fan on mobile and the colour index page on desktop"

  - type: challenge
    label: "A conceptual challenge"
    challenge: >-
      Tambour was in the midst of a rebranding process when we began the
      project (brand and visual identity created by Shay Chayon Studio). My
      goal was to extend the new brand language into the digital experience by
      creating a conceptual framework that would define how the brand behaves
      in the digital web format while maintaining a strong connection to its
      identity.
    solution: |
      Three directions were presented. The selected concept, "Manufacturing Processes," is based on what all of Tambour's products have in common: the process behind them - the research, development, and manufacturing in each one, driven by expertise, quality, and constant improvement. That product journey mirrors Tambour's own: a company broadening its range while holding to the same commitment to craft and growth.
      How the concept was expressed through the brand - from the concept presentation.

  - type: images
    items:
      - ./images/concept.jpg
    alt: "How the concept was expressed through the brand"

  - type: challenge
    label: "A UX challenge"
    challenge: >-
      The website serves four distinct user groups. Our goals were to make
      information accessible to each and provide practical tools throughout.
      While the design audience needed inspiration and discovery; professional
      and industrial users needed focused, efficient journeys with quick access
      to technical information - following UX best practices while minimizing
      friction and steps to complete common tasks.
    solution: >-
      Different UX and visual approaches were applied to sections targeting
      different audiences, while maintaining a consistent semantic and brand
      connection across the website.

  - type: example
    label: "Example 01"
    title: "Color Fan and Color Pages"
    text: >-
      A user journey that begins with selecting a color from Tambour's physical
      color fan and continues by ordering a sample through the digital color fan
      on the website. The challenge was to keep the interface simple and aligned
      with Tambour's technical and operational capabilities, while creating a
      richer color exploration experience. The digital interface offered
      benefits that the physical color fan could not, such as narrowing down
      color selections and previewing them alongside contextual imagery.

  - type: example
    label: "Example 02"
    title: "Product Catalog and Product Pages"
    text: >-
      TODO: Add the description for the Product Catalog and Product Pages
      example. (This text was placeholder "Lorem Ipsum" in the Figma file.)

  - type: images
    frame: true
    items:
      - ./images/open-chart.jpg
    alt: "The full colour chart, open"

  - type: images
    tiles: true
    label: "Gallery"
    items:
      - ./images/gallery-a.jpg
      - ./images/gallery-b.jpg
      - ./images/gallery-c.jpg
    alt: "Selected screens from the Tambour website"

  - type: images
    items:
      - ./images/closing.jpg
    alt: "Closing image"
---
