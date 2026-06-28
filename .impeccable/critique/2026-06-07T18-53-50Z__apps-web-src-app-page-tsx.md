---
target: /
total_score: 29
p0_count: 0
p1_count: 4
timestamp: 2026-06-07T18-53-50Z
slug: apps-web-src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Diagnostic stepper is visually clear; Progress component is `aria-hidden` so screen readers never hear what step you're on |
| 2 | Match System / Real World | 4 | Language is exceptional — "Où en êtes-vous aujourd'hui ?" matches exactly how Cynthia opens a real appointment |
| 3 | User Control and Freedom | 3 | Strong within the diagnostic (Retour, Recommencer, escape to univers); booking funnel exit paths unverified |
| 4 | Consistency and Standards | 3 | Visual system is tight, but 5 eyebrows on one page violates the design system's own Eyebrow Scarcity Rule; raw "→" in result-detail-link breaks the icon system |
| 5 | Error Prevention | 3 | Diagnostic is options-only (no wrong input possible); booking form error prevention unverified from home page |
| 6 | Recognition Rather Than Recall | 3 | All service paths visible; "VAE" label in nav assumes prior knowledge |
| 7 | Flexibility and Efficiency | 2 | Two paths to any service (diagnostic or browse) is good; no keyboard shortcuts, no state persistence in diagnostic |
| 8 | Aesthetic and Minimalist Design | 3 | Well-structured sections, but 5 eyebrows create noise and ImageSlot placeholders leave a visual void at the emotional peak |
| 9 | Error Recovery | 3 | N/A on marketing home; diagnostic has clean restart |
| 10 | Help and Documentation | 2 | No contextual help or FAQ on home page; "Pas envie ? Voir tout le menu" is the only guidance aid |
| **Total** | | **29/40** | **Good — targeted fixes needed** |

---

## Anti-Patterns Verdict

**LLM assessment**: The first-order slop test passes. The warm ivory + lotus-plum palette is not obvious from the category (coaching sites default to blues and greens), and the diagnostic interaction pattern is genuinely distinctive. The second-order test mostly passes too — this is not in the editorial-magazine lane (Cormorant is used correctly as an italic accent word, not as a full display typeface). The copy quality is high and specific throughout.

However, one first-order tell is firing loudly: **five eyebrows on a single page**. The absolute ban says "tiny uppercase tracked eyebrow above every section" is AI scaffolding. Having five (hero, univers, confiance, cynthia, final-cta) means every section opens identically, and the eyebrow pattern carries zero meaning. A reader who never sees Cormorant italic used for full headlines would still look at the repeated LABEL + RULE pattern and clock this immediately.

**Deterministic scan**: The bundled detector returned 0 findings across `page.tsx`, all components, and `gem.css`. No gradient text, no stripe backgrounds, no side-stripe borders, no sketchy SVG patterns. The ghost-card issue (below) is a structural finding the detector's current rules don't cover.

---

## Overall Impression

The bones are excellent. The diagnostic is the right product decision for this brand — interactive, empathetic, 30 seconds to a recommendation. The copy is unusually specific and human. The design system is coherent and well-documented. The ghost-card pattern and the eyebrow overuse are both fixable in an afternoon. The real gap is imagery: the founder section is the emotional peak of the page and it currently shows a 520-pixel gradient rectangle where Cynthia's face should be. A brand site where "Cynthia is the brand" without any photos of Cynthia is not finished yet.

The biggest single opportunity: cut the eyebrows to one and add real imagery. Both changes together would lift this from "strong prototype" to "confident, shippable site."

---

## What's Working

**1. The diagnostic as the hero.** Putting the interactive tool in the hero rather than below-fold is the right call. It immediately communicates "this organisation meets you where you are" rather than "here's our services list." The three-step flow is clear, the back/skip affordances are present, and the result card is genuinely useful.

**2. Copy voice.** "Comme Cynthia le ferait en rendez-vous : on regarde d'abord où vous en êtes" is the kind of brand-specific, founder-voice copy that separates a real site from a template. The "Je suis dans le FLOU" naming system for the service categories is authentic and memorable.

**3. Visual hierarchy within sections.** Each section has one clear h2 and a supporting lead paragraph. The heading scale (clamp 30px→40px for section headings, clamp 40px→58px for hero) creates clean visual distinction without typography feeling oversized. The Montserrat + Cormorant pairing is working — the italic em-word in headings is warm without being gratuitous.

---

## Priority Issues

### [P1] Five eyebrows on one page — absolute ban violation
**What**: The home page uses `.eyebrow` (uppercase tracked Montserrat + lotus rule-line) five times: hero, univers section, confiance section, cynthia section, and final CTA.

**Why it matters**: The absolute ban is explicit: "One named eyebrow per page maximum. Its meaning comes from rarity. A page with an eyebrow on every section has no eyebrows — it has filler." When every section opens with the same small-uppercase pattern, the pattern carries no signal. This is the single most common AI tell on landing pages and it's firing across the whole home page.

**Fix**: Remove four eyebrows. Keep exactly one — the hero "Bilans · VAE · Formations" makes the most sense as the one explicit brand category label. Replace the others with the section heading alone (the h2 already carries the meaning). The cynthia section and final CTA are the two weakest uses; delete those first.

**Suggested command**: `/impeccable polish`

---

### [P1] Ghost-card pattern on `.diag` and `.rdv-card`
**What**: `.diag` has `border: 1px solid var(--line-1)` combined with `box-shadow: var(--shadow-3)` (blur=40px). `.rdv-card` has the same border combined with `box-shadow: var(--shadow-2)` (secondary layer blur=24px). Both violate the Ghost-Card Prohibition: never combine a 1px border with box-shadow blur ≥ 16px.

**Why it matters**: The ghost-card pattern is in the absolute ban list for a reason — it reads as a default AI card style, not a deliberate design choice. The shadow alone communicates elevation; adding a border on top dilutes both signals and creates visual ambiguity about which is doing the work.

**Fix**: On `.diag`, remove the `border: 1px solid var(--line-1)` — `shadow-3` is strong enough as the elevation signal. On `.rdv-card`, do the same: remove the border, keep `shadow-2`. If a boundary is still needed for the diagnostic card (e.g., on canvas-soft backgrounds), use a 1px border at `var(--lotus-200)` or remove border entirely and let shadow-3 define the edge.

**Suggested command**: `/impeccable polish`

---

### [P1] Contrast failure on `ink-500` / ink-muted text
**What**: `var(--ink-500)` is oklch(58% 0.006 60), approximately #877F79. This color is used for body-size text in multiple places: `.stat .lbl` (13.5px), `.diag-hint` (16px italic), `.diag-skip` (13px), `.ftr-blurb` (via ink-700 — fine), `.result-detail-link` hover state, and the footer `.ftr a` color at rest (ink-800, which IS fine). The 13.5–16px applications of ink-500 on white yield approximately 3.8:1 — below the WCAG AA 4.5:1 requirement.

**Why it matters**: The primary audience includes adults 40+ in career transition. Below-threshold contrast is not just a checkbox failure — it's a legibility failure for the people this site most needs to reach. "Ink-muted for elegance" is the exact failure mode the design guidance warns against.

**Fix**: For any text-size usage of ink-muted, step up to oklch(48% 0.006 60) or use `var(--ink-700)` (oklch 40%). Update the `--ink-500` CSS custom property or create a distinct semantic token `--fg-hint` at the corrected lightness. Verify with a contrast checker before shipping.

**Suggested command**: `/impeccable audit`

---

### [P1] No real imagery — founder section is an emotional void
**What**: `<ImageSlot>` placeholder (520px tall paper-soft gradient + italic "Portrait de Cynthia Roux" caption) occupies the full left column of the founder section. Per PRODUCT.md: "Cynthia is the brand." The brand.md register reference states: "Zero imagery on a brief that implies imagery is a bug, not a design choice."

**Why it matters**: The cynthia section is designed to be the trust peak of the page — the moment where the user meets the person making the promise. A gradient rectangle cannot do that work. The caption below the ImageSlot reads "« Cynthia Roux — épicurienne de l'éducation. »" — there is a real person here. Show her.

**Fix**: Obtain a high-quality portrait of Cynthia and replace `<ImageSlot>`. The component already has the correct layout (0.82fr/1.18fr grid, 16px border-radius, 520px height). If photography is pending, restructure the section temporarily to work text-forward (pull-quote centred, values chips, CTA) rather than leaving a large empty placeholder. A broken layout is better than a visible placeholder.

**Suggested command**: `/impeccable harden`

---

### [P2] No `text-wrap: balance` on headings + no `prefers-reduced-motion` on animations
**What (a)**: Hero h1, section h2, and fiche h1 headings have no `text-wrap: balance`. French compound words ("certifié", "aujourd'hui", "l'éducation") cause jagged line breaks on mid-size viewports that look unintentional.

**What (b)**: `@keyframes fadeUp` (used in `.q-anim` for diagnostic transitions), `drawerFade`, and `drawerIn` have no `@media (prefers-reduced-motion: reduce)` override. This violates WCAG 2.1 SC 2.3.3 and the design guidance.

**Why it matters**: The reduced-motion issue affects users with vestibular disorders — for whom unexpected animation is a medical concern, not a preference. The text-wrap issue is a visual quality problem that appears reliably at 768–900px widths.

**Fix (a)**: Add to gem.css:
```css
h1, h2, h3 { text-wrap: balance; }
```
**Fix (b)**: Add to gem.css:
```css
@media (prefers-reduced-motion: reduce) {
  .q-anim { animation: none; }
  .drawer { animation: none; }
  .drawer-panel { animation: none; }
}
```

**Suggested command**: `/impeccable animate` (for the motion fix) + `/impeccable audit` (for the contrast + reduced-motion sweep)

---

## Persona Red Flags

### Jordan (Confused First-Timer) — anxious adult seeking career transition help

Jordan arrives from Google, searching "bilan de compétences financement CPF" at 11pm. She is 38, has been in the same job for 12 years, and is scared.

- **The opening works.** "Où en êtes-vous aujourd'hui ?" is the right first question. Jordan does not need to be welcomed; she needs to be seen.
- **The diagnostic succeeds.** Three simple questions, visible back button, 30-second framing. Jordan gets to a recommendation without confusion.
- **The vocabulary gap.** "VAE" appears in the nav and in service cards with no inline gloss. Jordan doesn't know what "Validation des Acquis de l'Expérience" means. The univers card says "Bilan de compétences sur-mesure et VAE accompagnée" — she skips the second half and goes to the first.
- **After the result.** Jordan sees "En savoir plus sur ce parcours →". The raw arrow character and the vague label ("ce parcours") leave her uncertain. A specific label ("Voir le détail du bilan de compétences") removes the ambiguity.
- **The ImageSlot.** Jordan reaches the Cynthia section and sees a gradient box. She reads "Portrait de Cynthia Roux" in italic and feels the absence. This is exactly the moment she needed to trust a human, and there is no human.

### Sam (Accessibility-Dependent) — keyboard-only with screen reader

- **No skip link.** Sam tabs through the entire header navigation (5 links + CTA) before reaching main content. No `<a href="#main-content">Skip to content</a>`. This is a WCAG 2.4.1 failure.
- **Diagnostic Progress hidden.** `<div className="diag-progress" aria-hidden="true">` hides the step counter from the screen reader. Sam completes the diagnostic without ever hearing "Step 2 of 3."
- **Focus indicators.** The CSS has no explicit `:focus-visible` styles on `.opt` (diagnostic options), `.btn`, or `.nav a`. Browser defaults may be invisible with the site's warm-paper palette.
- **Drawer dismiss.** The overlay div has `onClick={() => setOpen(false)}` — keyboard users must find the X button inside the panel. If the X button loses focus after drawer open, Sam is trapped.
- **Ink-muted contrast.** Every piece of supporting text at ink-500 is below threshold, and Sam's screen magnifier at 150% zoom brings this into view.

### Casey (Distracted Mobile User) — phone, thumb, interrupted

- **Bottom bar is there.** The `BottomBar` component with "Prendre RDV" appears at ≤820px. Thumb-zone CTA exists. ✓
- **Diagnostic state loss.** Casey reaches Q2, gets a call. Returns. Diagnostic has reset to start. No `localStorage` persistence.
- **Two-column diagnostic options at tablet.** `.diag-options.cols-2` shows 2-column options at 601–999px. At 700px this makes tappable regions approximately 140px wide — borderline but acceptable with 16px/18px padding. Acceptable but tight for one-handed use.
- **The Cynthia section scroll.** The 520px ImageSlot placeholder scrolls by quickly. On mobile, Casey has no idea this was supposed to show a person. She reads the pull quote underneath a gradient box and moves on.

---

## Minor Observations

- The footer uses `<h6>` headings ("Je suis dans le FLOU", "Je me forme") inside the footer grid that descend from no `<h1>` or `<h2>` in the footer. Heading hierarchy should be `<h2>` → `<h3>` or use `<p>` with a styled label class, not `<h6>` at the top of the footer.
- The stats block shows "100% de satisfaction" twice (different programs). Visually repetitive. Consider differentiating: one can state the programs covered ("20 actions de formation").
- `dangerouslySetInnerHTML` is used for diagnostic question text and result titles. While the data is internal, this warrants a code comment noting that sanitization is required if this data ever becomes dynamic/user-controlled.
- The `result-detail-link` uses a raw "→" character. Replace with `<Icon name="arrow-right" />` to match the rest of the system.

---

## Questions to Consider

- "The founder section is built around a person who isn't yet visible — at what point will photography be ready, and should the page structure change in the interim?"
- "Five eyebrows on one page: does removing four of them break the visual cadence you expected, or does it feel like relief?"
- "The diagnostic resets on page reload — is state persistence a nice-to-have, or does losing a half-completed answer feel like abandonment to the target user?"
