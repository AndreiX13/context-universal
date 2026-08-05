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

## How to use it

Two ways. **Option A is recommended** — lowest token cost, works everywhere, nothing to install.

### Option A — Ambient context (global `CLAUDE.md` pointer)

A small always-on block in your Claude Code memory keeps the prime directives active in **every**
project and points at `canon/` + `skills/`, which the agent opens **on demand**. The heavy content is
never force-loaded, so the baseline stays tiny.

**Windows (automatic):**
```powershell
git clone https://github.com/AndreiX13/context-universal.git
cd context-universal
powershell -ExecutionPolicy Bypass -File install\setup-windows.ps1
```

**macOS / Linux / Git Bash:**
```bash
git clone https://github.com/AndreiX13/context-universal.git
cd context-universal
bash install/setup.sh
```

The setup script writes (or updates) a marked `context-universal` block in your global
`~/.claude/CLAUDE.md`, filling in the absolute path to wherever you cloned the repo. It's idempotent —
re-run it any time — and it never touches other content in that file.

- **Global** (default) → applies in every project.
- **This project only** → run `... setup-windows.ps1 -Target project` (or `bash install/setup.sh project`)
  from a project root; it writes a local `./CLAUDE.md` instead.
- **Manual** → copy the block from [`install/global-CLAUDE.snippet.md`](install/global-CLAUDE.snippet.md)
  into `~/.claude/CLAUDE.md` and replace `__CU_ROOT__` with the repo's absolute path.

> Keep the repo where you cloned it — the pointer uses absolute paths. If you move it, just re-run the
> setup script. Changes take effect in **new** Claude Code sessions.

### Option B — As a Claude Code plugin

`/plugin` is a command **inside the interactive Claude Code CLI** — it is *not* a PowerShell or bash
command. Open a terminal, start the CLI with `claude`, then type these at its prompt:

```text
/plugin marketplace add AndreiX13/context-universal
/plugin install context-universal@context-universal
```

The repo is private; git clones it with your saved GitHub credentials. This surfaces the 24 skill
descriptions and the slash-commands to the agent (skill bodies still load only when triggered).

### What it costs (tokens)

Progressive disclosure keeps it cheap — it does **not** load the whole repo every message:

| Always loaded (small) | Loaded only when relevant |
|---|---|
| the 6 directives + the canon index (Option A), or the 24 short skill descriptions (Option B) | a specific `canon/*.md`, a skill body, its `references/` |

### Update

```bash
git pull
```

Option A: re-run the setup script afterward to refresh paths. Option B: update via `/plugin`.

### Validate (after editing or adding skills)

```bash
node tools/validate-skills.mjs
```

Zero dependencies, runs natively on Windows. Checks every skill against the one schema in
[`AUTHORING.md`](AUTHORING.md). Current state: **24 skills · 0 errors.**

## Provenance

Consolidated from `standard-design` (owner), `interface-design`, `anti-ai-slop` (Hallmark),
`claude-skills`, `marketingskills`, `android-reverse-engineering-skill`, `modern-frontend-skills`,
`awesome-flutter`, `awesome-claude-code`, and `pdf-inspector`. Full sources, licenses, and two
open licensing questions: [`attribution/ATTRIBUTIONS.md`](attribution/ATTRIBUTIONS.md).

*v0.1.0 · curated best-of. Quality over quantity — the same ethos as the anti-slop canon it enforces.*
