---
# Cye — rebuilt to match the updated Figma design (node 14:1061).
# Two-step case study: Step 1 (Strategy & Brand), Step 2 (Website).
# Copy is verbatim from the design. NOTE: two short screen-recording videos
# in the design are omitted here (Figma can't export video) — see README notes.
title: Cye
disciplines:
  - "Branding"
  - "Web Design (UX/UI)"
studio: Moveo
role: Design Lead
years: "2025-2026"
order: 3
roles: ["Concept", "Brand Design", "UX/UI Design", "Product"]
client: "Cye"
agency: "Moveo Creative"
credits:
  - { role: "PM", names: "Maya Greengruss, Neta Raval" }
  - { role: "Dev", names: "Shelly Diber" }
  - { role: "Design", names: "Sivan Chini" }
hero: ./images/hero.png
thumbnail: ./images/hero.png

sections:
  - type: context
    label: Project Context
    lead: true
    text: |
      Cye is a cybersecurity company (founded 2012, Israel) that pairs an AI-native platform with an elite team of human experts, delivering cyber exposure management - CTEM with cyber risk quantification in financial terms - to enterprises worldwide.

      Cye came to us because their brand and website no longer reflected the company: a conventional B2B SaaS marketing site that read like every other security vendor and contradicted Cye's AI-native position. We ran two connected workstreams - a full rebrand, and a new website designed to behave like an LLM chat app.

  # ===================== STEP 1 =====================
  - type: heading
    text: "Step 1 - Strategy & Brand"

  - type: process
    label: Process, Goals & Values
    title: Process
    text: >-
      The brand workstream moved from foundation to system: brand goals and
      values, a design concept ("The Right Action"), visual directions & a full
      brand language - color, typography, iconography, photography, and platform
      representation - and its applications across product, social, and slides.

  - type: process
    title: Goal
    text: >-
      Create a clear, confident brand window that accurately reflects who Cye is
      today, establishing it as a credible, enterprise-grade partner with the
      experience and reliability of a market leader.

  - type: process
    title: Values
    text: "Clarity, Confidence, Mastery, Partnership, Reliability, and Creativity"

  - type: heading
    text: "Challenges & Solutions"

  - type: process
    label: A positioning challenge
    title: Challenge
    text: >-
      The identity had to project the maturity and reliability of an enterprise
      market leader in the CTEM category, while still signaling the creative
      agility of an AI-native company solving concrete risk - without either
      register undercutting the other or drifting into generic AI-startup
      visuals.

  - type: process
    title: Design Concept
    text: >-
      What Cye does, is providing a clear overview of complex environments,
      identifying the most relevant risks, and directs toward the right course
      of action, translating the risks into costs. That way the user (any user)
      can understand and get clarity on the out comes of each cyber security
      decision, and act accordingly. "The Right Action" concept is expressed
      through the metaphor of "The Radar System". Like tactical navigation, Cye
      scans the whole attack surface, isolates the risks that actually matter,
      and points to what to do next - Scan, Identify, Understand, Act.

  - type: process
    title: Visual Solution
    text: >-
      A restrained, enterprise-grade system - Aeonik type, a deep slate-and-cyan
      core palette with sharper accent colors - paired with the radar motif and
      its motion. The result reads as both credible and forward-looking, mature
      but not static, native to an AI product rather than applied on top of one.

  # ----- Brand system showcase -----
  - type: images
    items: [./images/system.png]
    alt: "Cye brand system overview"
  - type: images
    items: [./images/colors-main.png]
    alt: "Cye core colour palette"
  - type: images
    items: [./images/colors-secondary.png]
    alt: "Cye secondary colour palette"
  - type: images
    items: [./images/icons-light.png]
    alt: "Cye icon set on light"
  - type: images
    items: [./images/icons-dark.png]
    alt: "Cye icon set on dark"
  - type: images
    items:
      - ./images/typography-1.png
      - ./images/typography-2.png
    alt: "Cye typography — Aeonik"

  # ===================== STEP 2 =====================
  - type: heading
    text: "Step 2 — Website (UX/UI: A Site That Behaves Like an LLM)"

  - type: process
    label: Process, Goals & Audiences
    title: Process
    text: >-
      The website workstream began with research - a competitive analysis of
      cybersecurity sites and market research on leading AI apps - then moved to
      website goals and persona types, homepage structure and wireframe, the
      Smart Search feature (capability needs, capability list, main screen,
      active chat, content-to-chat), design and dev.

  - type: process
    title: Goals
    text: >-
      [1] Lead engagement and conversion; [2] Market positioning - Cye as a
      strategic partner for cybersecurity decision-making; [3] content
      accessibility and clarity - users easily find and understand what's
      relevant to them; [4] a search-based, AI-driven experience that adapts to
      user intent; [5] a scalable, future-ready platform.

  - type: process
    title: Audiences
    text: >-
      Primary: [1] Enterprise security leader (CISO / Head of Security); [2]
      Technical evaluator (security architect / risk officer). Secondary: [3]
      Group / multi-entity security leader (Group CISO); [4] Reseller partner,
      [5] MSSP partner. Tertiary: [6] Private-equity operating partner.

  # TODO (video): a screen recording sits here in the Figma design.
  # Drop the video file in ./images/ and tell me the name to embed it.

  - type: challenge
    label: "A UX challenge"
    challenge: >-
      The defining decision was to make a B2B cybersecurity website behave like
      an LLM chat app - Claude, ChatGPT, Gemini, Perplexity - not a traditional
      SaaS marketing site, without losing the authority and proof enterprise
      security buyers require before they trust a vendor, and while maintaining
      the "promotional website" role of the website (this is not a product, but
      a new way to help users access information in a wabsite).
    solution: >-
      Content becomes chat. Key static pages are re-expressed as structured
      in-chat responses, surfaced when a user asks - company overview,
      differentiation, methodology, credibility signals, and proof points
      delivered in context rather than hunted for across a menu. The chat
      "knows" when to bring up the CTA to get in touch and get a quote in the
      right time. Key content types, which were traditionally key pages in the
      website, become designed elements, surfaced in the right moment of the
      conversation.

  - type: challenge
    label: "A personalization challenge"
    challenge: >-
      The site serves several audiences at different priorities - each arriving
      with different questions and depth. The experience had to fit each of
      them.
    solution: >-
      The Smart Search feature detects intent from the first query and adapts
      tone, depth, and routing to the inferred persona, while keeping one
      consistent brand and system across the site.

  - type: example
    label: "Example 02"
    title: "In-Chat Artifacts"
    text: >-
      As the conversation develops, answers arrive as structured artifacts
      rather than paragraphs: an exposure overview, a financial-impact breakdown
      in dollar terms, ranked mitigation cards, a "what-if" simulation, and an
      exportable board-ready report — each attaching a clear next step toward a
      demo or contact.

  - type: example
    label: "Example 01"
    title: "Prompt-First Homepage"
    text: >-
      The homepage leads with the question, not the menu: a central
      natural-language input with three to five guided prompts mapped to real
      triggers — an audit, a board request, an incident. Free text is parsed for
      intent and routed to the matching response, so first-time and infrequent
      visitors always have a way in.

  # TODO (video): a second screen recording sits here in the Figma design.

  - type: images
    items: [./images/phones.png]
    alt: "Cye site on mobile — prompt-first flow"
  - type: images
    items: [./images/site-wide.png]
    alt: "Cye redesigned site — wide view"
---
