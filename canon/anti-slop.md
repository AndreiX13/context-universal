# Canon — Anti-Slop

> The quality bar that makes output look **made, not generated.** Merged from Hallmark's 58-gate
> slop test, modern-frontend's `forbidden.md`, standard-design's *anti-generic-AI* catalog, and
> interface-design's *deslop* pass. This is the checklist; the `web-design` skill carries the long
> per-gate reference for landing pages, but every skill and every deliverable answers to this file.

## How to read this list

It is a list of **symptoms, not a task list.** A detector (or this doc) flagging 95 things does
not mean 95 fixes — it usually means ~18 real issues repeated. Group findings, verify the concrete
value, and **do not break a motivated, deliberate choice to please a context-blind rule.** A bold
decision the designer made on purpose is not slop. Slop is the *default nobody chose.*

**The core test:** *if another AI given a similar prompt would produce substantially the same
output, you have failed.* Everything below is a way that failure shows up.

## Visual tells (the fastest giveaways)

- **Purple→blue / pink gradient hero.** The single most-recognized AI aesthetic. One anchor hue,
  one accent, no gradient background on heroes.
- **`background-clip: text` gradient headline.** Banned outright. Signals "AI-generated" faster
  than almost anything.
- **Three equal columns, icon-above-heading feature grid.** The carbon-copy feature section. Break
  the symmetry or change the shape.
- **Card-in-card.** A card nested inside another card. Use one card + hairline-divided rows.
- **Colored side-stripe cards** (a thick accent bar down the left edge). One of the most
  recognizable generated-UI marks.
- **Centered-everything `100vh` hero.** Auto-fails. Centre at most two elements; break alignment
  for the rest.
- **Glassmorphism, aurora/mesh blobs, floating orbs, pulsing dots, glossy-orb buttons.** All
  decoration nobody chose.
- **Wide-blur drop shadows** standing in for structure. Prefer a hairline border (`1px` low-opacity)
  or a tight 1–2px shadow. Pick one depth strategy and don't mix.

## Color

- **OKLCH only.** One accent, maximum two. The accent occupies **≤3% of any viewport**.
- **No pure `#000` / `#fff`** — they read flat and synthetic.
- **No zero-chroma greys.** Tint every neutral toward the anchor hue (minimum ~0.005 chroma). Warm
  neutrals over cold greys unless the brand is deliberately clinical.
- Full color rules → [`canon/color.md`](color.md).

## Icons & chrome

- **Don't mix icon libraries.** Pick one set, use it throughout.
- **No emoji as feature / step / tier icons** (✨🚀⚡🔥🎯✅). The sparkle-emoji shortcut is the
  cliché of the era.
- **No re-drawn UI chrome** — no hand-built fake browser bars, phone frames, or code-window
  headers around your content. It's a photo of a picture frame inside a real frame.

## Typography

- **Banned as brand/identity fonts:** Inter, Roboto, Open Sans, Lato, Poppins, Montserrat, DM Sans,
  Manrope, Plus Jakarta, and system-ui-as-the-only-stack. A dropped font CDN must not leave you on
  the generic system stack — **embed brand fonts, never load them from a CDN.**
- **Max 3 families** (display + body + one outlier). Four is slop.
- **No italicized word inside an otherwise-upright heading** (`Built to <em>think</em>`) — one of
  the most reliable AI tells.
- **Eyebrows OFF by default** — the tag-left / heading-right two-column section header is the single
  most reliable AI-templated tell for editorial SaaS pages. Not bypassable by "match the reference."
- Full type rules → [`canon/typography.md`](typography.md).

## Copy

- **Banned opening lines:** "Built for the modern team," "Unleash your X," "Where X meets Y,"
  "Empower your…," "Reimagine the way you…," "Supercharge your workflow," "Innovative solutions,"
  "Seamless integration," "In today's digital landscape," "Next-generation."
- **No fabricated proof.** "+47% conversion," "trusted by 50,000+ teams," "10× faster" are slop the
  moment they're invented. Use a real number or an em-dash placeholder + "metric to confirm."
- **No "Click here," no "Oops!/Uh oh!,"** no exclamation marks in errors, no humor on a frustration
  path. Errors state *what happened / why / what to do.*
- Full copy rules → [`canon/copy.md`](copy.md).

## Motion tells

- **No `transition: all`.** No universal `hover:scale-105` on everything. No bounce/overshoot/elastic
  easing on serious UI. Full rules → [`canon/motion.md`](motion.md).

## Structure (the deepest tell)

Two different briefs must not yield the same **hero → 3-feature → CTA → footer** rhythm. Vary the
*macrostructure*, not just the colors. A colour-swap of the same skeleton is still slop.

## Fake data

- No `John Doe` / `Acme` / `Nexus` placeholder names. No suspiciously round numbers
  (`99.99%`, `50%`, `$1,000`). Use realistic values (`47.2%`, `$4,239.71`) and real-looking
  placeholder assets (`picsum.photos/seed/…`, `i.pravatar.cc`).

## The four self-checks before you ship

1. **Swap test** — would another AI on a similar prompt produce roughly this? If yes, fail.
2. **Squint test** — blur your eyes: the hierarchy should survive and nothing should jump out wrong.
3. **Signature test** — point to 5 specific elements that could only belong to *this* product.
4. **Token test** — read the CSS variable names aloud. `--ink` / `--parchment` (a world) beats
   `--gray-700` / `--surface-2` (a template).

---
*Synthesized from: hallmark/slop-test + anti-patterns (Together AI, MIT) · modern-frontend/forbidden
(attribution unresolved) · standard-design/02-anti-generic-ai (owner) · interface-design/design-deslop
(Damola Akinleye, MIT).*
