# Canon — Color

> Single source of truth for color and depth. Merged from hallmark/color, interface-design,
> standard-design, and modern-frontend. Semantic-color rules for Safe Life are flagged **[RO]**.

## Space & distribution

- **Work in OKLCH.** Perceptually even lightness/chroma; predictable dark-mode derivation.
- **60 / 30 / 10** — 60% dominant surface, 30% secondary, 10% accent. One accent used with intent.
- **The accent occupies ≤3% of any viewport.** If it's everywhere, it's not an accent.

## Neutrals

- **No pure `#000` / `#fff`.** They read flat and synthetic.
- **Tint every neutral toward the anchor hue** (minimum ~0.005 chroma). Warm neutrals by default;
  cold greys only when the product is deliberately clinical.
- Text has four levels, not two: primary · secondary · tertiary · muted.

## Depth — pick ONE strategy, don't mix

Choose a single depth language for the whole surface:

1. **Borders only** — hairline `1px` low-opacity dividers.
2. **Subtle shadows** — tight, short-offset.
3. **Layered shadows** — the elevation recipe below.
4. **Surface-color shifts** — each level a few % lighter.

Never combine two. Mixing is a top generated-UI tell.

- **Borders:** low-opacity rgba, not solid hex. `rgba(255,255,255,0.06–0.12)` on dark,
  `rgba(0,0,0,0.06–0.12)` on light. A hairline border usually beats a wide-blur shadow.
- **Surface elevation:** each step only a few % lightness. Dark: base → +7% → +9% → +12%.
  Sidebars are the **same canvas + a border**, not a different color. Inputs sit slightly *darker*
  (inset). Dropdowns one level above their parent.
- **Elevation shadow recipe** (when you choose layered shadows):
  ```css
  /* light */ box-shadow: 0 0 0 1px rgba(0,0,0,.06), 0 1px 2px -1px rgba(0,0,0,.06), 0 2px 4px rgba(0,0,0,.04);
  /* dark  */ box-shadow: 0 0 0 1px rgba(255,255,255,.08);   /* collapses to a single ring */
  ```

## Dark mode

- Lean on **borders**, not shadows (shadows barely read on dark).
- **Desaturate semantic colors** — full-chroma red/green vibrate on dark. Shift lightness, not hue.
- Warm-not-white body text on near-black (`#e8ddd3`-ish over `#0a0a0a`), never `#fff` on `#000`.
- No flat-black + neon glow; no purple/blue AI glow.

## Semantic color

- Color is never the only signal. **Every state = mark + text** (see [`canon/honesty.md`](honesty.md)).
- Reserve semantic hues for meaning, not decoration.

### Safe Life lock **[RO]**
- **Red is EXCLUSIVELY the SOS button + countdown.** Nothing else may be red.
- **Green = confirmed safety.** **Amber = system warning.**
- Light/warm client identity (dark mode was rejected as a generic-AI signature for this product).
- No package/stock icons or emoji as decoration.

---
*Synthesized from: hallmark/color (Together AI, MIT) · interface-design (Damola Akinleye, MIT) ·
standard-design (owner) · modern-frontend (attribution unresolved).*
