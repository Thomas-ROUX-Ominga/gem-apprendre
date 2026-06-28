---
name: "Gem'Apprendre"
description: "Professional coaching and training for orientation, career transition, and skill development — Groupe GEM, south of France"
colors:
  signature: "#8a3d67"
  signature-mid: "#bc5e8e"
  signature-deep: "#471c32"
  signature-surface: "#faeaf1"
  signature-soft: "#f4d6e3"
  terra: "#d9744e"
  terra-deep: "#9e4a2d"
  terra-surface: "#fbefe8"
  canvas: "#fbf8f2"
  canvas-soft: "#f3efe6"
  canvas-deep: "#ece6d8"
  white: "#ffffff"
  ink: "oklch(22% 0.005 60)"
  ink-secondary: "oklch(40% 0.006 60)"
  ink-muted: "oklch(58% 0.006 60)"
  ink-light: "oklch(78% 0.005 60)"
  success: "#2f8f5e"
  danger: "#b4392b"
  warning: "#9f6c12"
  info: "#2d6ba8"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(40px, 4.4vw, 58px)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Montserrat, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(30px, 3.4vw, 40px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Montserrat, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Montserrat, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.62
  body:
    fontFamily: "Montserrat, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.18em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
rounded:
  xs: "4px"
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  pill: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "24px"
  6: "32px"
  7: "48px"
  8: "64px"
  9: "96px"
  10: "128px"
components:
  button-primary:
    backgroundColor: "{colors.signature}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
    typography: "body"
  button-primary-hover:
    backgroundColor: "{colors.signature-deep}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  button-secondary-hover:
    textColor: "{colors.signature}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.md}"
    padding: "10px 6px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "28px 24px"
  input:
    backgroundColor: "{colors.white}"
    rounded: "11px"
    padding: "13px 15px"
    textColor: "{colors.ink}"
  chip:
    backgroundColor: "{colors.signature-surface}"
    textColor: "{colors.signature}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
  diagnostic-option:
    backgroundColor: "{colors.white}"
    rounded: "14px"
    padding: "16px 18px"
  diagnostic-option-hover:
    backgroundColor: "{colors.signature-surface}"
    textColor: "{colors.signature}"
---

# Design System: Gem'Apprendre

## 1. Overview

**Creative North Star: "La Passerelle"**

La Passerelle is the bridge. Design carries people from uncertainty to clarity — each surface a deliberate stopping point on a journey they didn't know how to start. The system is not decorative. Every spacing decision, every type choice, every state transition exists to answer one implicit question from the user: "Am I in the right place, and what do I do next?"

The visual register is warm, professional, and specific to a person (Cynthia Roux) and a place (the south of France). Warmth is expressed through material — a canvas background that reads like good paper, two type families in deliberate contrast, an accent that appears when there is something to confirm or act on. The system never shouts and never hides. It guides.

This system explicitly rejects three aesthetic families. It is not the generic HR/EdTech SaaS register: flat blues, stock-photo grids, metric dashboards with gradient numbers, and "empower your team" copy. It is not cold institutional design: form-first layouts, no personality, a palette that reads like a government document. And it is not the cheap local directory: inconsistent radii, garish accent clashes, visual noise that erodes the trust a Qualiopi certification demands. If a new screen could plausibly come from any of those three, it is wrong for this system.

**Key Characteristics:**
- Warm canvas as the body ground; depth expressed through tonal stepping, not box-shadow
- La Signature (the lotus accent) appears at most 15% of any surface; its scarcity is its authority
- Two type families: Montserrat for structure, Cormorant Garamond italic for the one human moment per heading
- Interaction is unhurried: 0.15–0.2s ease-out transitions, 1px vertical nudge on primary button, no scale transforms
- Mobile is not a degradation; the diagnostic card and booking funnel serve anxious users on their phones first

## 2. Colors: La Signature Palette

A warm, anchored palette built around one accent and one canvas. La Signature (the lotus accent) is the single voice of action and meaning. Provence Clay (terracotta) provides warmth and proof. The canvas family differentiates depth through tonal steps, not shadow.

### Primary — La Signature
- **La Signature** (#8a3d67 / oklch(38% 0.11 340)): The brand accent and the one voice for action. Primary buttons, active navigation states, stepper dots, testimonial citations, result card highlights. Used where a trusted advisor would say: "this is the step to take." Never decorative.
- **Signature Mid** (#bc5e8e): The expressive variant. Eyebrow rule-lines, icon strokes on hover states, the brand wordmark's italic "Gem" word. Present on hover as a lighter signal of La Signature.
- **Signature Deep** (#471c32): Near-black plum. Primary button hover state, deep emphasis text on lotus backgrounds. Establishes depth without reaching for pure black.
- **Signature Surface** (#faeaf1): Background tint for selected interactive states, result cards, diagnostic option hover. The lotus answer to white.
- **Signature Soft** (#f4d6e3): Selection highlight for checkboxes and radios, badge backgrounds at lower emphasis.

### Secondary — Provence Clay
- **Provence Clay** (#d9744e): Supporting accent for proof and warmth: stats block number color, Qualiopi seal background, warm decorative accents. Not used on interactive elements — terracotta signals content, not action.
- **Terra Deep** (#9e4a2d): Darker clay for depth in terra contexts. Large stat number alternative on dark backgrounds (--lotus-200 plays this role on the qualiopi bar).
- **Terra Surface** (#fbefe8): Lowest-emphasis terra tint, rarely needed; not interchangeable with canvas.

### Neutral — The Canvas Family
- **Warm Canvas** (#fbf8f2): The body ground. Everything renders on this. Warm but not cream — a specific, committed surface that reads as the brand's own material, not generic paper.
- **Canvas Soft** (#f3efe6): Section alternates (`.section-soft`), grouping backgrounds within a section. One step deeper than canvas.
- **Canvas Deep** (#ece6d8): Bordered containers at maximum warmth — the fiche pains block, the footer body. One step beyond canvas-soft.
- **Pure White** (#ffffff): Card surfaces that need contrast lift against canvas. Not interchangeable with canvas; their difference is the depth signal.
- **Ink** (oklch 22%, warm graphite): Primary body text. Very dark warm graphite, not pure black. Use for all body copy and headings on light backgrounds.
- **Ink Secondary** (oklch 40%): Card body copy, supporting text, paragraph prose within sections.
- **Ink Muted** (oklch 58%): Meta text, timestamps, monospace codes, form hints. Must clear 4.5:1 on white — verify before using at body size.
- **Ink Light** (oklch 78%): Borders, dividers, horizontal rules. Not for text.

### Named Rules
**The La Signature Rule.** La Signature (lotus) occupies at most 15% of any given surface. Its scarcity is its authority. When every button, every icon, every section heading reaches for lotus, none of them carry meaning. Reserve it for the moment the user needs to act or be confirmed.

**The Canvas Hierarchy Rule.** Never place a white card on a white background, and never use canvas where white is needed for contrast. Canvas (#fbf8f2) is the body ground. White (#fff) is for cards that float above canvas. Canvas Soft and Canvas Deep are section-level tonal steps, not card backgrounds.

**The Two-Accent Rule.** La Signature and Provence Clay are peers, not partners. Do not mix them on the same interactive element. Terra signals proof and credential; lotus signals action and progression. The diagnostic result card uses lotus because it recommends. The stats block uses terra because it proves.

## 3. Typography: Montserrat + Cormorant

**Display Font:** Cormorant Garamond (with Georgia, serif)
**Body Font:** Montserrat (with Helvetica Neue, Arial, sans-serif)
**Label/Mono Font:** JetBrains Mono

**Character:** The pairing reads "competent and human." Montserrat provides structure, hierarchy, and legibility at any size — it is the system's default voice. Cormorant Garamond enters for warmth: the single italic word inside a Montserrat headline, pull quotes, founder passages, the brand wordmark's first word. The contrast is axis-correct (geometric humanist sans + traditional old-style serif) and deliberate: when Cormorant appears, it signals that something human and personal is being said.

### Hierarchy
- **Display** (Cormorant Garamond, italic, weight 500, clamp(40px, 4.4vw, 58px), line-height 1.04, tracking -0.025em): Hero headlines only. Used exclusively for the italic em-word embedded within a Montserrat headline. Never a standalone full headline in Cormorant.
- **Headline** (Montserrat, 700, clamp(30px, 3.4vw, 40px), line-height 1.12, tracking -0.025em): Section headings. May include one Cormorant italic em-word for warmth. Requires `text-wrap: balance` on mobile.
- **Title** (Montserrat, 700, 1.3125rem / 21px, line-height 1.25, tracking -0.015em): Card headings, diagnostic question text, booking funnel step labels.
- **Lead** (Montserrat, 400, 1.125rem / 18px, line-height 1.62): Hero sub-headlines, section introductory paragraphs. One lead paragraph per hero or section; does not stack.
- **Body** (Montserrat, 400, 1rem / 16px, line-height 1.6): All prose. Maximum line length 65–75ch; apply `max-width: 65ch` or equivalent on text-only columns.
- **Label** (Montserrat, 600, 0.75rem / 12px, tracking 0.18em, uppercase): Eyebrow rule pattern (one per page max), badge text, category tags inside cards.
- **Mono** (JetBrains Mono, 400, 0.6875rem / 11px): Qualiopi certification codes, footer copyright line, technical identifiers. Never for UI labels.

### Named Rules
**The Cormorant Restraint Rule.** Cormorant Garamond appears only italic (font-style: italic). Never upright. It fills only the one emphasized word or phrase within a Montserrat heading — the word that carries the human moment. If a heading has no such moment, Montserrat alone is the answer. Applying Cormorant to a full standalone heading dissolves the contrast the pairing is built on.

**The Eyebrow Scarcity Rule.** The eyebrow (Label-size uppercase Montserrat + 28px lotus rule-line preceding it) appears at most once per page. Its meaning comes from rarity. A page with an eyebrow on every section has no eyebrows — it has filler. When a second section needs visual entry, use the heading alone.

**The Scale Contract.** Between adjacent type levels, maintain at minimum a 1.25 weight or size step. A 16px body next to a 17px "title" is not a hierarchy; it is noise. The scale steps in the token file exist for a reason — use them rather than splitting the difference.

## 4. Elevation

The primary depth language is warm tonal layering, not box-shadow. Surfaces are differentiated by canvas warmth: canvas (#fbf8f2) is the ground; canvas-soft (#f3efe6) is one step deeper; canvas-deep (#ece6d8) is the maximum warm tint. This layering reads as material depth — like paper laid on paper — and avoids the "floating card" visual pattern that makes generic design systems look weightless.

Box-shadows are reserved for two cases: (1) elements that genuinely float above the page in the spatial model (the diagnostic card, the booking funnel card, the mobile drawer), and (2) state responses on interactive cards (a card gains shadow on hover to confirm its interactivity). Shadows never appear as decoration at rest.

### Shadow Vocabulary
- **Ambient-low** (`0 1px 0 rgba(45,40,35,0.05), 0 1px 2px rgba(45,40,35,0.06)`): The border-substitute. Used on white cards resting on canvas where a 1px border would be too harsh. Also the hover baseline for section cards.
- **Ambient-mid** (`0 2px 4px rgba(45,40,35,0.07), 0 8px 24px -8px rgba(45,40,35,0.14)`): Interactive card hover state. Appears only as a response to hover/focus, never at rest.
- **Elevated** (`0 12px 40px -12px rgba(45,40,35,0.22)`): Genuinely floating surfaces: the diagnostic card on the home hero, the booking funnel card, the mobile navigation drawer. Maximum one elevated element visible per viewport.

### Named Rules
**The Tonal Depth Rule.** Reach for a canvas tint step before reaching for box-shadow. If the depth you need can be expressed by stepping from canvas to canvas-soft, that is the answer. Box-shadow answers "this element floats above the page." Tonal layering answers "this region is different from that one." Most hierarchy questions are the second kind.

**The Ghost-Card Prohibition.** Never combine `border: 1px solid X` with `box-shadow` of blur ≥ 16px on the same card. Pick one: a single 1px border at the brand's line-1 color, or a defined shadow at ≤ 8px blur. The paired "ghost card" pattern is a design tell.

## 5. Components

### Buttons
Unhurried and specific. No gradient fills, no dramatic scale transforms. The shift on hover is color depth and a 1px vertical nudge — enough to confirm the action, not enough to perform it.

- **Shape:** Gently rounded (10px radius / `--r-md`). Not pill-shaped except for ghost-tier contexts where a full radius fits the copy style.
- **Primary:** La Signature background (#8a3d67), white text, 14px Montserrat 600, 14px/22px padding. Hover: Signature Deep (#471c32) + `translateY(-1px)`.
- **Secondary:** White background, ink-900 text, 1px border (ink-700 / 24% opacity). Hover: border shifts to Signature Mid (#bc5e8e), text shifts to Signature (#8a3d67). No transform.
- **Ghost:** Transparent background, ink-700 text, 10px/6px padding. Hover: text shifts to Signature. Navigation-only; not for primary conversion contexts.

### Chips / Value Tags
- **Background:** Signature Surface (#faeaf1)
- **Text:** Signature (#8a3d67), 12px Montserrat 600, tracking 0.06em
- **Border:** 1px solid Signature Mid / 18% opacity
- **Radius:** Pill (999px)

### Cards / Containers
Cards exist on white (#fff) against the canvas body. They are not for decoration — use a card when the content genuinely needs to be scanned as a discrete unit.

- **Corner Style:** Gently curved (16px / `--r-lg`). Never above 24px. Cards at 22px radius (like the diagnostic card) are elevated-context exceptions.
- **Background:** White (#fff) for interactive cards on canvas body; Canvas Soft (#f3efe6) for section-level groupings.
- **Elevation:** Ambient-low shadow at rest (border-substitute on canvas). Ambient-mid shadow on hover for interactive cards.
- **Border:** 1px solid ink-700 / 14% opacity at rest. Shifts to Signature Mid / 40% opacity on hover for interactive cards.
- **Internal Padding:** 26–28px (`--sp-5` to `--sp-6` range). Diagnostic card uses 30px/34px (more breathing room for the interactive flow).

### Inputs / Fields
- **Style:** White background, 1px border (ink-700 / 24% opacity), 11px radius. Consistent with card geometry (between `--r-md` and `--r-lg`).
- **Focus:** Border shifts to Signature Mid (#a24f7a); soft glow ring (3px, Signature Mid / 16% opacity). No box-shadow stacking.
- **Error:** Border shifts to Danger (#b4392b); no glow.
- **Placeholder:** Ink-light (oklch 78%). Verify 4.5:1 on white before shipping; this hue is near the borderline.
- **Textarea:** Same treatment, min-height 72px, vertical-only resize.

### Navigation
- **Style:** Sticky header with 14px backdrop blur, Canvas / 86% opacity background. 1px bottom border (ink-700 / 14%). Reinforces the warm canvas identity even when content scrolls behind.
- **Links:** 13px Montserrat 600, 9px/13px padding, 8px radius. Default: ink-800. Hover: canvas-soft background + ink-900 text.
- **CTA:** La Signature primary button at right. Only one conversion action in the header.
- **Mobile (≤ 1000px):** Desktop nav hidden; 42×42px burger trigger reveals a right-side drawer (96vw max width). Mobile bottom bar appears at ≤ 820px with a persistent booking CTA.

### Signature Component: La Passerelle Diagnostic
The diagnostic card is the product in miniature — the bridge metaphor made interactive. It floats above the canvas (elevated shadow), walks the user through 3 branching questions, and delivers a personalized recommendation without a page reload. Its geometry is intentionally more open than standard cards (22px radius, 30px/34px internal padding) to signal that this is a different kind of surface: not content to be read, but a conversation to have.

- **Progress:** Pip-and-bar stepper using Signature active states. Completed pips use Signature Soft (#f4d6e3) fill. Active pip uses Signature (#8a3d67) fill with white numeral.
- **Options:** 14px radius interactive buttons with keyboard key indicator (A/B/C). Hover: border shifts to Signature Mid, background to Signature Surface, key indicator shifts to Signature fill.
- **Animation:** Answer screens fade-up at 0.32s (cubic-bezier 0.2, 0.8, 0.2, 1). Result state animates in at 0.4s. Reduced-motion: instant swap, no fade.
- **Result card:** Signature Surface gradient background, distinct tier label in uppercase Label style, why-reasons list with check icons in Signature Mid.

## 6. Do's and Don'ts

### Do:
- **Do** use La Signature (lotus) for primary buttons, active states, and progress indicators only. Its authority is its scarcity. When in doubt, ask: "would a trusted advisor say 'this is the step'?" If yes, lotus. If no, ink.
- **Do** differentiate depth by canvas tint (canvas → canvas-soft → canvas-deep) before reaching for box-shadow. Tonal layering reads as professional; gratuitous shadow reads as SaaS.
- **Do** use Cormorant Garamond only in italic, only for the one expressive word within a Montserrat heading. If there is no human moment to express, keep the heading in Montserrat alone.
- **Do** apply `text-wrap: balance` on all h1–h3. French words are long; unbalanced wraps on narrow mobile screens are the most common presentation failure on this site.
- **Do** verify ink-muted (oklch 58%) clears 4.5:1 contrast against white before using it for body-size text. It is borderline on white; step to ink-secondary if it fails.
- **Do** surface the Qualiopi seal on every page that discusses pricing or CPF eligibility. It is the primary financing trust signal for the audience of adults in career transition.
- **Do** write verb+object button labels in French: "Prendre rendez-vous", "Voir le programme", "Télécharger le guide". Never "En savoir plus" standing alone as the only CTA on a page.
- **Do** link text that has standalone meaning when read out of context: "Voir le bilan de compétences" beats "Cliquez ici". Screen readers announce links without surrounding copy.

### Don't:
- **Don't** use the generic HR/EdTech SaaS visual language: flat blues, stock-photo grids, metric-dashboard stats blocks with gradient number highlights. This system serves a specific person (Cynthia) and a specific community. The category aesthetic erases that specificity.
- **Don't** design for a cold institutional register: form-first layouts, black-and-white palette, bureaucratic information architecture with everything labeled and categorized. This is a human coaching service, not an administration.
- **Don't** produce the cheap local directory aesthetic: inconsistent radii, garish accent color clashes, cluttered navigation, font-weight chaos. The Qualiopi certification demands that trust be legible at a glance.
- **Don't** use `background-clip: text` with a gradient (gradient text). La Signature is a single solid color. Its meaning comes from consistency and restraint, not visual decoration.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, list items, or callouts. Rewrite with a background tint (Signature Surface), a full border, or a leading icon.
- **Don't** add a Label-size uppercase eyebrow above every section. One per page maximum. If a second section needs visual entry, use the section heading alone.
- **Don't** pair La Signature and Provence Clay on the same interactive element. Lotus signals action; terra signals proof. They are peers, not complements on a single component.
- **Don't** use `border-radius` above 24px on cards or containers. 16px is the system ceiling for standard cards; 24px is for modal-tier floating surfaces. Anything above reads as unintended cartoon softness.
- **Don't** gate content visibility on a motion-triggered class. The diagnostic card, booking funnel, and all section content must render fully visible without JavaScript animation prerequisites. Reveal animations are an enhancement, never a gate.
- **Don't** combine `border: 1px solid X` with `box-shadow` blur ≥ 16px on the same element (the ghost-card pattern). Pick one: a 1px border at the system's line-1 color, or a defined shadow at ≤ 8px blur.
