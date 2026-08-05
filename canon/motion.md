# Canon — Motion

> Single source of truth for animation. Four of the source repos (`interface-design`,
> `standard-design`, `modern-frontend`, `hallmark`) independently converged on the same
> curves, the same sub-300ms budget, and the same `scale(0.97)` press. This file is that
> consensus. Skills reference here instead of re-stating it. When a skill and this file
> disagree, this file wins.

## The one rule

**Pick the easing before the duration.** Easing decides how it *feels*; duration only decides
how long. Most "off" motion is the wrong curve, not the wrong length.

- `ease-out` → things entering, exiting, or responding to a press (the default for UI).
- `ease-in-out` → things that *move* from one on-screen position to another.
- `linear` → continuous motion only (spinners, marquees, progress).
- **Never `ease-in` on UI.** It delays the exact moment the user is looking hardest. At equal
  duration, `ease-out` *feels* faster.

## Curve tokens (copy verbatim)

```css
--ease-out:      cubic-bezier(0.23, 1, 0.32, 1);   /* default: enter / exit / press */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);    /* long, confident reveals */
--ease-in-out:   cubic-bezier(0.77, 0, 0.175, 1);  /* on-screen A→B movement */
--ease-drawer:   cubic-bezier(0.32, 0.72, 0, 1);   /* bottom sheets, drawers (iOS) */
```

Framer Motion equivalents when springs fit better: baseline `{stiffness: 100, damping: 20}`,
notification pop `{380, 22}`, tight control `{300, 30}`.

Flutter (Safe Life): these live as tokens in one file (`sl_motion.dart`), never scattered
inline. The built-in Material curves are too weak — replace them with the beziers above.

## Duration budget

| Interaction | Duration |
|---|---|
| Press / tap feedback | 100–160 ms |
| Tooltip, small popover | 125–200 ms |
| Dropdown, select, menu | 150–250 ms |
| Modal, drawer, bottom sheet | 200–500 ms |

**Everything that is UI is under 300 ms.** Longer belongs only to deliberate, rare, hero-scale
reveals.

## Press feedback

The response comes on **press**, not on release (Apple, *Designing Fluid Interfaces*). Every
pressable shrinks to **`scale(0.95–0.98)`** while held.

- Cancel on `onTapCancel` / pointer-leave — a press that slides off must not fire.
- Never fires on a disabled control.
- **Stays active under reduced motion** — a 2–3% scale doesn't trigger motion sickness and is the
  main "this is alive" signal.
- When an element has surrounding structure (ring, frame, badge), **only the core shrinks**, not
  the whole assembly.

## Enter / exit

- Enter from `scale(0.95)` + `opacity: 0`. **Never from `scale(0)`** — that reads as a magic-trick
  pop, not an arrival.
- Popovers/menus animate from their **trigger's origin** (`--radix-popper-transform-origin`).
  Modals stay **centered** — they have no origin.
- Only ever animate **`transform` and `opacity`**. Never `transition: all`. Never animate
  `width/height/margin/padding/top/left` (they trigger layout and jank).
- Prefer CSS transitions over keyframes so an interaction can be **interrupted** mid-flight.
- Hardware-accel: use `transform: translateX()` not layout properties; in Framer prefer
  `animate={{ transform: ... }}` over `{{ x }}` for the same reason.

## Stagger & restraint

- Stagger groups by **30–80 ms** per item. More than ~5 items: cap the stagger or it drags.
- **Frequency gate.** If an action happens 100+ times a day, or is keyboard-initiated (command
  palette, list nav), **do not animate it** — instant is the feature. Reserve motion for the rare
  and the first-time.
- Tooltips: **800 ms** hover-delay before showing, but **0 ms** on keyboard focus, and **instant**
  on re-hover within a short window.
- Success is silent by default — prefer an optimistic update + Undo over a celebratory toast or a
  confirm dialog.

## Reduced motion

`prefers-reduced-motion` means **fewer and gentler, not zero.**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

Then re-enable the essentials deliberately: keep **opacity and color** transitions and the press
`scale`; drop **position/parallax/scroll-driven** movement. Motion that only communicates state
(focus ring, error shake→fade) stays; motion that only decorates goes.

---
*Synthesized from: interface-design (Damola Akinleye, MIT) · standard-design/01-miscare (owner) ·
modern-frontend/references/animation (attribution unresolved — see attribution/ATTRIBUTIONS.md) ·
hallmark/motion (Together AI, MIT). The Emil Kowalski motion craft underlies several of these.*
