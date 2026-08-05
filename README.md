# context-universal

**One operating context, distilled from ten repos.** Install it once and every project inherits the
same quality bar and the same curated skill set — instead of ten overlapping repos that each say
half of the same thing.

The ten sources secretly shared DNA (the *same* motion curve, the *same* anti-slop philosophy, the
*same* skill format). This repo makes that explicit: **one source of truth per subject**, plus a
best-of skill library on top.

---

## What's inside

```
CLAUDE.md              # the universal context — read every session (start here)
AUTHORING.md           # the one skill-authoring schema (resolves 3 conflicting source schemas)
canon/                 # ONE source of truth per subject — skills defer to these
  anti-slop · motion · typography · color · spacing-8pt · copy · honesty
skills/                # 24 curated skills (23 universal + 1 gated specialized)
commands/              # /design-review · /design-deslop · /decompile
agents/personas/       # 9 reusable agent identities
tools/                 # validate-skills.mjs (Node, Windows-native) · verifica-diacritice.py
docs/                  # flutter-best-practices · claude-code-resources
attribution/           # sources, licenses, and 2 items to resolve before publishing
.claude-plugin/        # marketplace.json + plugin.json (installable)
```

## The canon (the point of the whole thing)

Every skill and every deliverable answers to `canon/`. When a skill disagrees with canon, canon
wins. It applies to **any** visual output — app UI, slides, PDFs, diagrams, artifacts.

- **anti-slop** — the "made, not generated" bar; the tell catalog + four self-checks
- **motion** — easing, the four curve tokens, the sub-300ms budget, press feedback, reduced motion
- **typography** — hierarchy as weight+size+leading, the 11px floor, banned fonts, RO diacritics
- **color** — OKLCH, 60/30/10, tinted neutrals, one depth strategy, dark mode
- **spacing-8pt** — *newly authored*: the 8pt grid, proximity, whitespace, concentric radius
- **copy** — clear-before-clever, banned openings, error structure, the em-dash rule
- **honesty** — state = mark + text; signals not verdicts; no dead controls (safety-product ethics)

## The skills

- **Engineering discipline** — karpathy-coder · zero-hallucination-coder · agent-harness ·
  write-a-skill · skill-security-auditor · a11y-audit
- **Design** — interface-design (product UI) · web-design (marketing/landing)
- **Research & knowledge work** — deep-research · capture · reflect · weekly-review · deep-work
- **Marketing** — product-marketing (hub) · copywriting · cro · seo-audit · ai-seo · analytics ·
  emails · marketing-psychology · pricing · customer-research
- **Specialized (gated)** — android-reverse-engineering

## Install

Once published to GitHub:

```bash
/plugin marketplace add AndreiX13/context-universal
/plugin install context-universal@context-universal
```

Or use it as ambient context: symlink / copy `CLAUDE.md` into a project, or point your agent at
`canon/` and `skills/`.

## Validate

```bash
node tools/validate-skills.mjs
```

Zero dependencies, runs natively on Windows. Checks every skill against the one schema in
`AUTHORING.md`. Current state: **24 skills · 0 errors.**

## Provenance

Consolidated from `standard-design` (owner), `interface-design`, `anti-ai-slop` (Hallmark),
`claude-skills`, `marketingskills`, `android-reverse-engineering-skill`, `modern-frontend-skills`,
`awesome-flutter`, `awesome-claude-code`, and `pdf-inspector`. Full sources, licenses, and two
open licensing questions: [`attribution/ATTRIBUTIONS.md`](attribution/ATTRIBUTIONS.md).

*v0.1.0 · curated best-of. Quality over quantity — the same ethos as the anti-slop canon it enforces.*
