# Canon — Copy & Writing

> Single source of truth for words — UI microcopy, marketing copy, docs, error messages. Merged
> from standard-design/06-copy, hallmark/copy, and marketingskills/copywriting. Romanian-specific
> cadence is flagged **[RO]**. This governs prose the same way `motion.md` governs animation.

## Four principles

1. **Clear before clever.** If a reader has to re-read it, it failed. Clarity is the first pass and
   it's non-negotiable.
2. **Benefits, not features.** Say what the reader gets, not what the system has.
3. **Specific, not vague.** Vague: *"Save time with your workflow."* Specific: *"Cut the weekly
   report from 4 hours to 15 minutes."* Every claim gets a concrete object.
4. **Customer's language, one idea per section.** Use the words your users use (mine reviews /
   support tickets / interviews). One main idea per block — don't stack three.

## The seven editing passes

Edit in sequence, each pass on **one** dimension only; clarity first. *Editing is not rewriting* —
if you're rewriting, the draft wasn't done.
`1 clarity → 2 specificity → 3 concision → 4 flow → 5 tone → 6 correctness → 7 punctuation.`

## Banned openings & clichés

Never open with, and never lean on: *"Built for the modern team," "Unleash your X," "Where X meets
Y," "Empower your…," "Reimagine the way you…," "Supercharge your workflow," "Innovative solutions,"
"Seamless integration," "In today's digital landscape," "Next-generation."* Startup-cliché word
bank to avoid as filler: *Acme, Nexus, Unleash, Seamless, Supercharge, Transform, Elevate, Empower,
Delight, Magical.* ("Seamless" has no antonym — it signals non-specificity.)

## Honest copy — no fabricated proof

Invented numbers are slop the moment they're written: *"+47% conversion," "trusted by 50,000+
teams," "10× faster," "5-star rated."* Use a **real** figure or an em-dash placeholder plus
"*metric to confirm*." Never fabricate testimonials, logos, or counts. On public-source / scraped
data, show **signals with source + date, never categorical verdicts.**

## Microcopy & errors

- No **"Click here."** Label the action (*"Download the report"*).
- No **"Oops! / Uh oh! / Something went wrong."** No exclamation marks in errors. No humor on a
  frustration path.
- **Error structure:** *what happened · why · what to do next.* Active voice. Never blame the user
  for their own input.
- **Every instruction needs an object to act on.** Don't tell the user to "call dispatch" if there's
  no call button on screen; don't draw a dead button that does nothing.

## Punctuation

- Curly quotes `" "` / `' '`, real em-dash `—` (never `--`), real ellipsis `…` (never `...`).
- **The em-dash rule.** Detectors tolerate "a few per page"; the bar here is **≈ zero.** Overuse of
  `—` is one of the most reliable AI tells. Rewrite with the substitution table:
  - `X — explanation` → `X, explanation` (comma) or `X: explanation` (colon)
  - `X — Y` (two clauses) → `X. Y.` (two sentences)
  - Verify: `grep -c '—' file` should return 0 (or single digits with a reason).
  - **[RO]** In Romanian prose the em-dash reads even more artificial — hold the line at zero. This
    rule applies to this repo's own docs, not just product copy.

## Voice

Second person, direct, confident without hype. Match the product's register (a safety product is
calm and plain, not playful). One role per sentence — a status states state, a button states
action; don't make one string do both.

---
*Synthesized from: standard-design/06 (owner) · hallmark/copy (Together AI, MIT) ·
marketingskills/copywriting (Corey Haines, MIT).*
