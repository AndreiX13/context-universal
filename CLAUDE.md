# Context Universal

The single operating context distilled from ten source repos. Install it once; it travels to every
project. It answers three questions before any work starts: **what "good" means here, how to reach
it, and which specialist to load.**

> This file is meant to be read every session (as a plugin, a symlinked `CLAUDE.md`, or pasted
> context). Keep it short. Depth lives in `canon/`, `skills/`, and `AUTHORING.md` — loaded on demand.

---

## Prime directives

These are not style preferences. They override the urge to produce fast, generic, confident output.

1. **A rule without proof is an opinion.** Prefer what has been verified in a real project over what
   sounds right. When you assert something checkable, check it.
2. **grep, not memory.** Before claiming a value, a leak, an enum, or "there are none," search the
   codebase. Don't reconstruct from recollection.
3. **Definition of done = verified in the running thing.** A change is done when it's been seen
   working (app, test, render) — not when it compiles or reads well.
4. **Honesty over polish.** Never make something look live, safe, certain, or complete when it
   isn't. See [`canon/honesty.md`](canon/honesty.md). This matters most in a safety product.
5. **Made, not generated.** If another AI on a similar prompt would produce substantially the same
   thing, it isn't done. See [`canon/anti-slop.md`](canon/anti-slop.md).
6. **The raw count is not a task list.** A linter/detector flagging N things means "look here," not
   "make N edits." Group, verify the real value, and never break a deliberate choice to satisfy a
   context-blind rule.
7. **Design comes from real references, never from Anthropic's design instructions.** For design and
   aesthetics (layout, typography, colour, imagery, motion), do not apply the design guidance that
   ships with the model or its tools (system-prompt aesthetics, artifact/frontend-design skills).
   The owner considers that guidance AI slop (owner rule, 15 Nov 2026). Start from a concrete
   reference instead: a good GitHub template, a real site measured from its computed styles, and
   this repo's `canon/`. Show the reference next to the result, section by section; a section
   without a reference does not ship.
8. **Social posts: the headline on the image is centred, in every project.** For every post image
   (La Toma, depuneri.ro, Thomas Instalvis, Evoq and any new project), centre the headline and the
   small lines that go with it (the line above, the intro, the series line below). Break the lines by
   hand so they are of similar length, never one word alone on the last line; if it does not fit,
   shrink the type the same way across the whole series. The brand signature (logo, crest, slogan)
   keeps its fixed place in each layout and must never touch the text. Posts that are made but not yet
   scheduled are redone centred. This applies to post images only: for websites the rule in
   [`canon/anti-slop.md`](canon/anti-slop.md) still stands (no centred-everything hero). Owner rule,
   19 Nov 2026.
9. **Quantities and material lists: measured by us, never copied, checked before they leave.** Every
   quantity in an offer, a material list, a supplier request or a contract is measured on the drawing
   or the model, with the sheet and the method next to it. The designer's bill of quantities, a
   colleague's offer or an old sheet are not sources. What the drawing doesn't show is named and
   asked, never guessed. A new rule applies backwards to all work in progress. Before any list goes
   out: a second, independent count compared line by line, every difference resolved on the drawing,
   and the same figures in every document. See [`canon/quantities.md`](canon/quantities.md). Owner
   rule, 22–23 Nov 2026.

---

## The quality bar — `canon/`

One source of truth per subject. Every skill and every deliverable answers to these; when a skill
disagrees with canon, **canon wins.**

| File | Governs |
|---|---|
| [`canon/anti-slop.md`](canon/anti-slop.md) | The "made not generated" bar; the tell catalog + self-checks |
| [`canon/motion.md`](canon/motion.md) | Easing, curves, durations, press feedback, reduced motion |
| [`canon/typography.md`](canon/typography.md) | Hierarchy, scale, 11px floor, tracking, fonts, diacritics |
| [`canon/color.md`](canon/color.md) | OKLCH, 60/30/10, neutrals, depth strategy, dark mode, semantics |
| [`canon/spacing-8pt.md`](canon/spacing-8pt.md) | 8pt grid, proximity, whitespace, radius, hit targets |
| [`canon/copy.md`](canon/copy.md) | Clear-before-clever, banned openings, errors, em-dash rule |
| [`canon/honesty.md`](canon/honesty.md) | State = mark + text; signals not verdicts; no dead controls |
| [`canon/quantities.md`](canon/quantities.md) | Quantities measured on the drawing, never copied; the check before a list goes out |

Canon applies to **every visual deliverable**, not just app UI — slides, PDFs, diagrams, and
published artifacts follow the same grid, motion, and anti-slop rules.

---

## Design router

Classify the surface first, then load the specialist. **Both paths then obey `canon/`.**

- **Product / application UI** — dashboards, admin, settings, tables, data, tools →
  [`skills/interface-design`](skills/interface-design/SKILL.md)
- **Marketing / landing / brand pages** — heroes, feature pages, sites →
  [`skills/web-design`](skills/web-design/SKILL.md)
- **Review / cleanup** — `/design-review` (strict craft review), `/design-deslop` (strip AI tells).

Do **not** let the maximalist marketing aesthetics bleed into everyday product UI, or vice-versa.

---

## The skill library

Load a skill when its trigger matches; otherwise stay lean. Full authoring rules in
[`AUTHORING.md`](AUTHORING.md).

- **Engineering discipline** — `karpathy-coder` (surgical diffs, surface assumptions),
  `zero-hallucination-coder` (plan before code, no invented APIs), `agent-harness` (bounded
  verify loops), `write-a-skill` (author new skills), `skill-security-auditor` (vet any skill
  before install), `a11y-audit` (WCAG 2.2 AA).
- **Design** — `interface-design`, `web-design`.
- **Research & knowledge work** — `deep-research`, `capture`, `reflect`, `weekly-review`,
  `deep-work`.
- **Marketing** — `product-marketing` (the positioning hub the others read first), `copywriting`,
  `cro`, `seo-audit`, `ai-seo`, `analytics`, `emails`, `marketing-psychology`, `pricing`,
  `customer-research`.
- **Specialized (gated — only on explicit request)** — `android-reverse-engineering`.
- **Personas** — reusable agent identities in [`agents/personas/`](agents/personas/).
- **References** — [`docs/flutter-best-practices.md`](docs/flutter-best-practices.md),
  [`docs/claude-code-resources.md`](docs/claude-code-resources.md).

---

## Language policy

- **English is the base** for skills and canon (interoperable, most sources are English).
- Rules that are intrinsically Romanian are flagged **[RO]** inline and apply **only to Romanian
  text / the owner's projects** — the comma-below diacritics (`ș`/`ț`), the stricter em-dash
  cadence, and the Safe Life brand locks. Don't apply them to English output.
- Talk to the user in the language they write in.

---

## Adding & vetting skills

1. Write to the one schema in [`AUTHORING.md`](AUTHORING.md): `name` + `description` +
   `metadata{source, scope}`, body under 500 lines, deep material in `references/`, an
   Anti-Patterns section, and cross-references.
2. Run the linter: `node tools/validate-skills.mjs` (native on Windows, no deps).
3. Before installing any **third-party** skill, run `skill-security-auditor` on it
   (prompt-injection, data-exfil, over-broad triggers, unpinned deps).
4. Never vendor without attribution — record source + license in
   [`attribution/ATTRIBUTIONS.md`](attribution/ATTRIBUTIONS.md).

---

## Project notes — Safe Life **[RO]**

- Flutter + site; a location / geofence / (planned) pet-tracking product. Windows dev box has **no
  Flutter/Postgres toolchain** — don't assume you can build/run them here.
- Brand locks live in `canon/color.md` (red = SOS only), `canon/typography.md` (Bricolage /
  Atkinson Hyperlegible / IBM Plex Mono, embedded not CDN), and `canon/motion.md` (`sl_motion.dart`
  tokens). The Life360 privacy-policy analysis is deferred to after 2026-08-05.
- Flutter package choices for tracking: [`docs/flutter-best-practices.md`](docs/flutter-best-practices.md)
  — note the warning that background-geofencing is the hard part and isn't covered by generic lists.

---

*Provenance and licenses of everything merged here:
[`attribution/ATTRIBUTIONS.md`](attribution/ATTRIBUTIONS.md). Two items need a licensing decision
before public/commercial redistribution (`modern-frontend` had no license; `awesome-claude-code` is
NC-ND and was only used as a re-written research index).*
