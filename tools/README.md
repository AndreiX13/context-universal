# tools

Native, dependency-light utilities for maintaining this repo.

## `validate-skills.mjs`

Lints every `skills/<name>/SKILL.md` against the one schema in [`../AUTHORING.md`](../AUTHORING.md).
Zero dependencies, runs natively on Windows (no bash/WSL needed).

```bash
node tools/validate-skills.mjs          # human-readable
node tools/validate-skills.mjs --json   # machine-readable (CI)
```

Checks: frontmatter present · `name` matches folder + kebab-case · `description` length & trigger
phrasing · forbidden top-level keys · `metadata` keys limited to `source`/`scope` · `scope` valid ·
body under 500 lines. Exit `0` clean, `1` on any error.

## `verifica-diacritice.py` **[RO]**

Proves a font actually covers Romanian `ș`/`ț` with **comma-below** (U+0218–021B), not the Turkish
cedilla. The one check in the whole standard that returns a binary yes/no. Requires `fonttools`
(`pip install fonttools`).

```bash
python tools/verifica-diacritice.py <fonts-directory>
```

Exits non-zero if any glyph is missing — CI-friendly. Run it whenever a brand font changes.
