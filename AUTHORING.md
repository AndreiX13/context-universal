# Authoring Standard

The source repos shipped **three mutually inconsistent** SKILL.md frontmatter schemas. This repo
uses exactly one. Everything here is enforced by `tools/validate-skills.mjs`.

## Frontmatter — the only allowed schema

```yaml
---
name: skill-name          # REQUIRED. kebab-case, must equal the folder name.
description: >-           # REQUIRED. When to use this — trigger conditions + phrases + scope.
  One or more sentences. Say what the user says when they need it. End with scope
  boundaries: "Not for X" / "For Y, use <other-skill>."
metadata:                # OPTIONAL but expected on vendored skills.
  source: "upstream name (LICENSE)"   # provenance + license, or "authored for this repo"
  scope: universal        # universal | ro | specialized
---
```

Nothing else. **Do not add** `version`, `author`, `license`, `tags`, `compatible_tools`, `context`,
`updated`, or `triggers` as top-level keys — that was the drift that made the sources incompatible.
`name` + `description` is the Anthropic Agent Skills spec; the single `metadata` block carries only
provenance and scope.

### `scope` values
- **universal** — safe to load in any project.
- **ro** — Romanian-language-specific; don't apply to English output.
- **specialized** — niche; load only on explicit request (e.g. `android-reverse-engineering`). Keep
  its triggers narrow so it never fires during unrelated work.

### Writing the `description`
This is what drives discovery, so it's worth care:
- Lead with the capability, then **"Use when…"** with real trigger phrases the user would type.
- End with **scope boundaries**: "Not for …", "For …, see <skill>." This prevents mis-fires and
  documents the skill graph.

## Structure

```
skills/<name>/
  SKILL.md          # required, < 500 lines
  references/       # optional — deep material, loaded on demand
  scripts/          # optional — stdlib-only, CLI-first tools
  assets/           # optional — templates the skill emits
```

- **Progressive disclosure.** SKILL.md is a thin orchestrator; anything long moves to `references/`
  and is loaded only when needed ("index-then-pick"). Over-eager loading is the main avoidable cost.
- **Required body sections:** an H1 title, a short overview, the core content, an **Anti-Patterns**
  section, and **Cross-References** to related skills and to `canon/`.
- **Reference canon, don't restate it.** Motion/color/type/spacing/copy/anti-slop rules live in
  `canon/`. A skill points there rather than copying — one source of truth.
- **Practitioner voice.** "You are an expert in X. Your goal is Y." Opinionated and actionable, not
  encyclopedic. Bottom-line first.

## Scripts contract

If a skill ships scripts:
- **Stdlib-only, no network, no secrets, no LLM calls.** Runnable on a bare interpreter.
- **CLI-first:** `--help`, machine-readable `--json` output, exit codes `0` ok / `1` findings /
  `2` error. Score on a 0–100 scale where relevant.
- Ship both `.sh` and `.ps1` when the script is part of a Windows-facing workflow.
- Invoke via `${CLAUDE_PLUGIN_ROOT}/...` so paths resolve regardless of install location.

## Quality gate before you add a skill

1. `node tools/validate-skills.mjs` passes (frontmatter, name/folder match, `<500` lines).
2. For third-party skills: `skill-security-auditor` returns PASS (no prompt-injection, data-exfil,
   over-broad triggers, or unpinned deps).
3. Provenance recorded in `attribution/ATTRIBUTIONS.md`.
4. The `write-a-skill` skill can scaffold a new one to this standard.

## Meta-patterns worth reusing (from the sources)

- **Phase 0 triage** — detect what you're dealing with before committing to expensive work.
- **Two-tier, cost-capped output** — always emit the flat inventory; go deep only on the ~N that
  matter, and say what you capped.
- **Hub-and-spoke context** — a shared context file (like `product-marketing`) that other skills
  read first. `canon/` + this `CLAUDE.md` are the repo-wide version of that idea.
- **No silent caps** — if you bound coverage (top-N, sampling, no-retry), log what was dropped.

---
*Normalized from claude-skills' SKILL-AUTHORING-STANDARD.md + CONVENTIONS.md + SKILL_PIPELINE.md
(Alireza Rezvani, MIT), the marketingskills validator (Corey Haines, MIT), and the
android-reverse-engineering plugin structure (Simone Avogadro, Apache-2.0).*
