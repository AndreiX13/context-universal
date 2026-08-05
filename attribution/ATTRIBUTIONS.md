# Attributions & Licenses

This repo is a consolidation of ten source repos. Nothing here claims sole authorship of the
vendored material. Full license texts of every vendored source are in
[`licenses/`](licenses/). If you carry any file onward, keep its notice.

## What was vendored, and under what license

| In this repo | From | License | Notes |
|---|---|---|---|
| `skills/interface-design`, `commands/design-review`, `commands/design-deslop` | interface-design — Damola Akinleye | **MIT** | frontmatter normalized; author-specific install/marketing README dropped |
| `skills/web-design` (+ 24-theme `references/tokens.css`) | Hallmark — Together AI / Nutlope | **MIT** | renamed from `hallmark`; "Powered by Together AI" branding removed; `tokens.css` relocated into the skill and its path fixed |
| `skills/karpathy-coder`, `zero-hallucination-coder`, `skill-security-auditor`, `write-a-skill`, `agent-harness`, `a11y-audit`, `deep-research`, `capture`, `reflect`, `weekly-review`, `deep-work`; `agents/personas/*` | claude-skills — Alireza Rezvani | **MIT** | frontmatter normalized to this repo's schema; Tessl/store/build-pipeline cruft removed |
| `skills/copywriting`, `cro`, `seo-audit`, `ai-seo`, `analytics`, `emails`, `marketing-psychology`, `product-marketing`, `pricing`, `customer-research` | marketingskills — Corey Haines | **MIT** | `?ref=` backlinks and paid-product plugs removed; broken `tools/` links neutralized |
| `skills/android-reverse-engineering`, `commands/decompile` | android-reverse-engineering-skill — Simone Avogadro | **Apache-2.0** | path flattened for Windows; broad `trigger:` folded into description; scope = specialized |
| `tools/verifica-diacritice.py`; the RO rules in `canon/*` (`honesty`, brand locks, diacritics, em-dash) | standard-design — repo owner | owner's own | the owner's studio standard; used directly and as the basis for canon |
| `docs/flutter-best-practices.md` | distilled from awesome-flutter — Solido | **CC0** | re-written distillation, not the list itself |

## The `canon/` directory

`canon/*` is **authored for this repo** — a deduplicated synthesis. Where four source repos said the
same thing (e.g. the `cubic-bezier(0.23,1,0.32,1)` motion curve appears in interface-design,
standard-design, modern-frontend and Hallmark), canon states it once. Each canon file lists its
sources at the bottom. `canon/spacing-8pt.md` is newly authored (no source repo had it).

## ⚠️ Two items need a licensing decision before public / commercial redistribution

1. **modern-frontend-skills — NO LICENSE FILE.** The repo shipped no license, and its `install`
   link/authorship is inconsistent (git remote `AndreiX13/…` vs README `alvinindra/…`). Its content
   is also built on named third parties (Emil Kowalski, Locomotive, Awwwards). **Nothing from it was
   copied verbatim** — it was used only as one input while *authoring* `canon/motion.md` and
   `canon/anti-slop.md`, which are this repo's own words. Before publishing, either (a) get an
   explicit license from the author, or (b) confirm the canon text is genuinely independent (it is
   synthesis, not copy). Until then, treat any future verbatim vendoring of that repo as blocked.

2. **awesome-claude-code — CC BY-NC-ND 4.0** (NonCommercial + NoDerivatives). Its curated list may
   **not** be copied in modified form or used commercially. **It was not copied.** `docs/claude-code-
   resources.md` is a taxonomy re-written from scratch in our own words. Do not paste that repo's
   table or descriptions into this repo.

## Referenced, not vendored

- **pdf-inspector** — Firecrawl, **MIT**. A standalone product (Rust/Python/WASM), not a skill. Use
  it as an external tool (`pip install pdf-inspector` / `npm i @firecrawl/pdf-inspector` /
  `cargo add pdf-inspector`) for PDF→Markdown / OCR-routing. Its `CLAUDE.md` is a good example of a
  per-repo agent-instructions file. Not bundled (it's ~11 MB of binaries).

---
*If you spot a missing attribution, add it here — the rule is: never vendor without recording source
and license.*
