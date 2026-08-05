# Claude Code Resources — A Working Taxonomy

A re-authored map of the kinds of extensions and shared assets people build
around Claude Code, written to help you find the right category for a need and
judge quality before pulling anything into your setup. Categories are organised
by what the resource *is* and where it plugs into the tool.

---

## Category taxonomy

**Skills**
Self-contained instruction bundles (a `SKILL.md` plus optional scripts and
reference files) that teach Claude a repeatable procedure and load only when
relevant. Look for a tight, honest `description`, narrowly-scoped triggers, and
scripts you can read end-to-end before trusting them.

**Subagents**
Named agent definitions with their own role, tool allowlist, and often their own
model — used to fan work out or isolate a specialised task. Look for a minimal
tool grant (least privilege) and a clear, single responsibility rather than a
catch-all "does everything" agent.

**Slash-Commands**
User-invocable shortcuts (`/name`) that expand into a prompt or workflow, usually
with frontmatter declaring allowed tools and an argument hint. Look for explicit
`allowed-tools` scoping and predictable, side-effect-free behaviour unless the
side effects are the stated point.

**Hooks**
Scripts the harness runs automatically on lifecycle events (before/after a tool
call, on session stop, etc.) to enforce policy, format code, or gate actions.
Because hooks execute on your machine without asking, treat them as the
highest-risk category — read every line and confirm exactly which event fires
them.

**CLAUDE.md files**
Project- or user-level memory that gives Claude standing context, conventions,
and guardrails. Look for concise, durable instructions rather than sprawling
dumps, and be wary of any that quietly broaden permissions or embed secrets.

**MCP servers**
Model Context Protocol servers that expose external tools, data, and APIs to
Claude over a defined interface. Look for pinned versions, a clear scope of what
data they touch, transparent auth handling, and a maintained source repo.

**Status Lines**
Custom terminal status-line configurations that surface context — branch, model,
token usage, cost — at a glance. Low risk; judge on usefulness and whether any
backing script does more than read state.

**Output Styles**
Presets that reshape how Claude formats its responses (tone, verbosity,
structure) for a given workflow. Low risk; judge on fit rather than security.

**Tooling**
Standalone utilities that wrap or extend the CLI — installers, dashboards, log
viewers, usage trackers, config managers. Look for open source you can inspect
and a maintainer with a track record; these often run with broad access.

**Workflows / Guides**
Documentation, playbooks, and reference write-ups on using Claude Code well —
patterns, prompt strategies, team conventions. No execution risk; judge on
accuracy, recency, and whether the advice matches your version of the tool.

---

## How to vet a third-party skill before installing

Anything that ships instructions or scripts can act on your behalf. Before
installing a skill (or any executable resource) from someone else, check:

- **Prompt-injection surface** — Read `SKILL.md` and every reference file for
  hidden or coercive instructions ("ignore previous rules", "always run X",
  encoded/obfuscated text). The content becomes part of Claude's instructions.
- **Data-exfiltration paths** — Inspect scripts for network calls, uploads, or
  writes that send file contents, environment variables, or credentials to a
  remote host you did not intend.
- **Over-broad triggers** — Prefer narrow, specific `description`/trigger phrases.
  A skill that claims to fire on everything will activate when you least expect
  it and may inject unwanted behaviour into unrelated tasks.
- **Unpinned or opaque dependencies** — Watch for scripts that `curl | bash`,
  install from unversioned sources, or pull binaries without a checksum. Pin
  versions and prefer sources you can audit.
- **Excess privilege** — Confirm the tool allowlist and file/network access are
  the minimum the task needs; reject grants that exceed the stated purpose.
- **Provenance** — Favour a named author, a real repo, an OSI-approved license,
  and recent maintenance over anonymous one-off gists.

When unsure, sandbox it: run in a throwaway project with a restricted tool
allowlist and watch what it actually does before granting it real access.

---

*Taxonomy re-authored; not copied from any source list.*
