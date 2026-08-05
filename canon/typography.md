# Canon — Typography

> Single source of truth for type. Merged from standard-design/05-tipografie, interface-design,
> hallmark/typography, and modern-frontend. Language-specific rules (Romanian diacritics) are
> flagged **[RO]** and apply only to Romanian text.

## Hierarchy is a set, not a size

Hierarchy = **weight + size + leading**, decided together. Changing size alone is the flat,
generated look. Three tiers from a single 14px size, done right:

```
value  →  600 weight · primary text color
label  →  500 weight · secondary color
meta   →  400 weight · muted color
```

Weight and color do more work than size. Demote deliberately; one focal point per view.

## Scale

- Type scale is a **ratio**, not by-feel. Dense UI `1.2`, product `1.25`, expressive `1.333`.
- **Minimum 1.25 between steps.** A worked product scale at 14px / 1.25:
  `caption 11 · body 14 · h4 16 · h3 18 · h2 22 · h1 28 · display 44+`.
- Fluid hero sizing with `clamp()`; never a fixed pixel hero that breaks on mobile.

## The 11px floor

- **11px is the floor** for any *functional* text — links, buttons, nav, labels, table cells,
  input text. Below that is a legibility problem, not a style choice.
- Only non-interactive legal fine print may drop to 10px.

## Tracking & leading

- **Tracking depends on size.** Large display wants *negative* tracking (`-0.02em` to `-0.04em` on
  display); small text wants slightly *positive*. A single fixed `letter-spacing` is wrong
  somewhere. Compute it from the element's own size (e.g. `-0.02em` derived per style) so it scales.
- **Leading runs inverse to size** — tight on headlines, open on body.
- Body measure **58–66ch**; all-caps display line-height floor `1.0`.
- `text-wrap: balance` on headings, `text-wrap: pretty` on body.
- `-webkit-font-smoothing: antialiased` on dark backgrounds.

## Fonts

- **Banned as brand/identity fonts:** Inter, Roboto, Open Sans, Lato, Poppins, Montserrat, DM Sans,
  Manrope, Plus Jakarta, system-ui-only. See [`canon/anti-slop.md`](anti-slop.md).
- **Max 3 families** (display + body + one outlier).
- **Embed brand fonts, never load from a CDN.** A dropped CDN must not silently downgrade a product
  to the generic system stack.
- **`tabular-nums`** mandatory on any changing number (money, counts, timers, tables) so digits
  don't jitter. Mono (e.g. IBM Plex Mono / Geist Mono) for metadata and code.
- Respect the user's OS text-size setting — size type in relative units, not hard px, for
  user-facing body copy.

## Brand fonts — Safe Life / owner lock **[RO]**

- Display: **Bricolage Grotesque** · UI/text: **Atkinson Hyperlegible Next** · mono: **IBM Plex Mono**.
- Bricolage at 24px+ needs `-0.02em` computed from the style's size (Material 3's `letterSpacing: 0`
  left it looking spaced out).

## Romanian diacritics **[RO]**

- Romanian `ș` / `ț` use **comma-below** (U+0218–021B), **not cedilla** (U+015E–0163). "Sedila e
  turcească." A font that only has the cedilla forms is wrong for Romanian.
- **Verify, don't assume.** Run `tools/verifica-diacritice.py <fonts-dir>` whenever a font changes —
  it inspects the cmap and gives a binary pass/fail. It's the one check in the whole standard that
  returns a definite yes/no.

---
*Synthesized from: standard-design/05 (owner) · interface-design (Damola Akinleye, MIT) ·
hallmark/typography (Together AI, MIT) · modern-frontend (attribution unresolved).*
