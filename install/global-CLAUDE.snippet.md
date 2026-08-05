<!-- BEGIN context-universal · managed block — do not edit by hand; re-run install/setup to update -->
# Global Context — context-universal

My universal operating context lives at `__CU_ROOT__`. This block keeps the always-on rules active
in **every** project and points to the deeper material, which you open **on demand** — the canon and
skills are on disk, not inlined here, so the baseline stays small.

> Open the referenced files with your file-reading tool when a task calls for them; don't rely on
> memory of their contents. To update the rules, `git pull` in the repo above.

## Prime directives (always on)
1. **A rule without proof is an opinion.** Prefer what's verified; check checkable claims.
2. **grep, not memory.** Search the codebase before asserting a value, a leak, an enum, or "there are none."
3. **Done = verified in the running thing** (app, test, render) — not "it compiles / reads well."
4. **Honesty over polish.** Never make something look live, safe, certain, or complete when it isn't.
5. **Made, not generated.** If another AI on a similar prompt would produce ~the same thing, it isn't done.
6. **The raw count is not a task list.** "Look here," not "make N edits." Don't break a deliberate choice.

## Quality bar — read the relevant canon file on demand
Any visual or written deliverable answers to these; when a skill or habit disagrees, **canon wins.**

- not looking AI-generated → `__CU_ROOT__/canon/anti-slop.md`
- animation / press feedback → `__CU_ROOT__/canon/motion.md`
- type hierarchy, fonts, RO diacritics → `__CU_ROOT__/canon/typography.md`
- color, neutrals, depth, dark mode → `__CU_ROOT__/canon/color.md`
- spacing, 8pt grid, proximity, whitespace → `__CU_ROOT__/canon/spacing-8pt.md`
- microcopy, marketing copy, errors, em-dash → `__CU_ROOT__/canon/copy.md`
- state display, signals-not-verdicts, no dead controls → `__CU_ROOT__/canon/honesty.md`

## Design router
Classify the surface, then load the specialist from `__CU_ROOT__/skills/`; both then obey canon.
- Product / app UI (dashboards, admin, settings, tables) → `skills/interface-design/SKILL.md`
- Marketing / landing / brand pages → `skills/web-design/SKILL.md`

## Skills & docs (load a SKILL.md on demand when its job matches)
`__CU_ROOT__/skills/` — engineering discipline, design, research & knowledge-work, marketing, and one
gated specialized skill (`android-reverse-engineering`, explicit request only). Docs in `__CU_ROOT__/docs/`.

## Language
English base. Rules flagged **[RO]** in canon (comma-below `ș`/`ț`, stricter em-dash cadence, Safe Life
brand locks) apply only to Romanian text / the owner's projects. Reply in the language the user writes in.
<!-- END context-universal -->
