# Canon — Honesty

> The most original rule set in the whole collection, from standard-design/03-onestitate. It is not
> about design polish — it's about a product not lying to its user. It matters most in a safety
> product, but it applies to anything that shows state, data, or guidance.

## Nothing looks live unless it is

- **If it isn't live, don't make it look live.** Stale state must declare how stale it is
  ("updated 3 min ago"), never present cached data as current.
- A pulsing dot, a "live" label, a moving spinner on static content — all lie about freshness.

## Every state = mark + text

- **Never color alone. Never even icon alone.** Every state carries a **visible mark AND words.** A
  red dot is not a status; "Offline — last seen 09:12" is.
- This is also an accessibility floor (color-blind users, screen readers) — but the point is
  honesty: the state is legible without decoding.

## One role per element

- A status pill states **state**. A button states **action.** No element does both; no redundancy;
  no truncation that hides the real value.
- Don't draw a **dead button** — a control that looks pressable but does nothing. Every affordance
  must act. Every instruction ("call dispatch") must have an on-screen object to act on.

## Signals, not verdicts

- On public-source, scraped, or inferred data, present **signals with their source and date** —
  never a categorical verdict. "Registered 2019 · 2 filings on record (public registry, checked
  2026-08-05)", not "Legitimate ✓".
- Let the user judge; give them the evidence, not your conclusion dressed as fact.

## No technical leakage on screen

- Internal statuses (`in_transit`, `pending_2fa`, enum values, stack traces) never reach the user.
  Translate them to a plain present-tense sentence in the user's language; the technical detail goes
  to the log.
- Find leaks with **grep, not memory** — search the codebase for the raw enum strings before
  shipping.

## Why this is a rule, not a preference

A user makes decisions on what the screen tells them. In a safety context those decisions have real
stakes. A screen that overstates certainty, hides staleness, or shows a dead control is not a polish
bug — it's the product being dishonest at the moment it's trusted most.

---
*From: standard-design/03-onestitate (owner). Generalized from Safe Life to any product that shows
state or data.*
