#!/usr/bin/env bash
# setup.sh — wire context-universal into your Claude Code global (or project) CLAUDE.md.
#
# Usage:
#   bash install/setup.sh            # global: ~/.claude/CLAUDE.md
#   bash install/setup.sh project    # project: ./CLAUDE.md in the current dir
#
# Inserts/updates a marked "context-universal" block; preserves any other content. Idempotent.
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd "$here/.." && pwd)"
snippet="$here/global-CLAUDE.snippet.md"
[ -f "$snippet" ] || { echo "snippet not found: $snippet" >&2; exit 1; }

# Fill the repo path placeholder.
block="$(sed "s#__CU_ROOT__#${repo_root}#g" "$snippet")"

target_kind="${1:-global}"
if [ "$target_kind" = "project" ]; then
  target="$(pwd)/CLAUDE.md"
else
  mkdir -p "$HOME/.claude"
  target="$HOME/.claude/CLAUDE.md"
fi

begin='<!-- BEGIN context-universal'
end='<!-- END context-universal -->'

if [ -f "$target" ] && grep -qF "$begin" "$target"; then
  # Replace existing managed block: keep everything before BEGIN and after END.
  awk -v b="$begin" -v e="$end" '
    index($0,b){skip=1}
    !skip{print}
    index($0,e){skip=0; next}
  ' "$target" > "$target.tmp"
  { cat "$target.tmp"; printf '%s\n' "$block"; } > "$target"
  rm -f "$target.tmp"
  action="updated block in"
elif [ -f "$target" ]; then
  printf '\n%s\n' "$block" >> "$target"
  action="appended block to"
else
  printf '%s\n' "$block" > "$target"
  action="created"
fi

echo "context-universal: $action $target"
echo "  repo root -> $repo_root"
echo "  Effective in NEW Claude Code sessions. Update anytime with: git pull; re-run this script."
