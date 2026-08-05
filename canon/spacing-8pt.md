# Canon — Spacing, the 8pt Grid & Whitespace

> **New in this repo.** None of the ten source repos wrote this down, yet it is the owner's stated
> priority (8pt grid, proximity, hierarchy, balanced whitespace — "reclaimed page gaps"). This is
> the authored module that fills that gap. It governs every visual deliverable — UI, slides, docs,
> diagrams, artifacts.

## The grid

- **Base unit = 4px. Space in multiples of 4, prefer multiples of 8.**
  `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`. No `13px`, no `27px`, no `hero padding: 70px`.
- Expose it as tokens and use them by name — never inline arbitrary pixel gaps:
  ```css
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
  ```
- **Minimum padding is 8px; the comfortable range is 12–16px.** Cramped padding (`< 8px`) is a real
  defect, not a style. Big containers breathe more (24–48px), controls breathe less (8–12px).
- **Symmetric padding.** Equal left/right and top/bottom unless there's a reason (e.g. optical
  centering of text against an icon). Asymmetric padding that wasn't decided reads as a bug.

## Proximity — the most-ignored rule

**Related things sit close; unrelated things sit apart. Distance encodes relationship.**

- A label and its value are ONE unit — small gap between them, larger gap to the next pair. Getting
  this backward (equal gaps everywhere) is why a layout feels like undifferentiated soup.
- Group by a step change in spacing, not by drawing a box around everything. A hairline divider or a
  bigger gap beats another border. (Boxing every group is the "equal boxes" AI tell — see
  [`canon/anti-slop.md`](anti-slop.md).)
- The gap *inside* a group must be visibly smaller than the gap *between* groups. If they're equal,
  there are no groups.
- **Watch the affordance trap:** removing a box to reduce clutter can leave a "dead gap" that loses
  the relationship. Replace the box's job (grouping) with proximity + a divider, or fold helper text
  into the field — don't just delete the container.

## Whitespace is structure, not leftover

- Whitespace is a **positive design element** that creates grouping, rhythm, and focus. It is not
  empty space to be filled, and not something to trim to "fit more above the fold."
- **Breathe unevenly.** Even spacing everywhere is monotonous; deliberate variation in the gaps
  creates rhythm and tells the eye where sections begin and end.
- Give the primary element room. Crowding the one thing that matters to squeeze in secondary content
  inverts the hierarchy.
- Macro whitespace (between sections) sets the page's calm; micro whitespace (line-height, gaps
  inside a control) sets its legibility. Tune both.

## Rhythm & proportion

- Establish a **vertical rhythm**: consistent spacing steps stacking down the page, with a bigger
  step between major sections. Proportions speak — a 280px sidebar and a 360px sidebar say different
  things; choose on purpose.
- **Density is a decision expressed in px**, not an accident. State whether a surface is dense
  (compact tables, 8–12px gaps) or airy (marketing, 24–48px gaps) and hold it consistently.

## Radius follows spacing

- **Concentric radius:** an outer radius equals the inner radius plus the padding between them
  (`outerRadius = innerRadius + padding`). Nested rounded elements that ignore this look wrong even
  when you can't say why.
- Keep a small radius scale (`4 · 8 · 12 · 16`) on the same grid; don't invent one-off radii.

## Alignment & hit targets

- Align to the grid; then apply **optical** corrections — nudge ~1–2px where mathematical alignment
  looks wrong (icons beside text, punctuation, visual centers). Optical beats mathematical.
- **Interactive hit target ≥ 44×44px** (40 minimum). Small tap targets are an accessibility defect.
  Safe Life: the SOS button is **≥ 220dp**. **[RO]**

## Applies to non-UI deliverables too

Slides, PDFs, diagrams, and published artifacts follow the same grid: consistent margins on the
8pt scale, grouped content by proximity, generous and *even-where-it-should-be / uneven-where-it-
communicates* whitespace, one clear focal point per view.

---
*Authored for this repo. Seeds: standard-design's `cramped-padding` findings + hierarchy notes,
interface-design's spacing/concentric-radius/hit-area rules, and the owner's stated priorities.*
