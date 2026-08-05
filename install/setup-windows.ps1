<#
  setup-windows.ps1 — wire context-universal into your Claude Code global (or project) CLAUDE.md.

  Usage (from anywhere):
    powershell -ExecutionPolicy Bypass -File install\setup-windows.ps1
    powershell -ExecutionPolicy Bypass -File install\setup-windows.ps1 -Target project   # writes ./CLAUDE.md in the current dir

  It inserts (or updates) a marked "context-universal" block. Any other content in your
  CLAUDE.md is preserved. Re-run after `git pull` to refresh paths. Idempotent.
#>
param(
  [ValidateSet('global','project')] [string]$Target = 'global'
)
$ErrorActionPreference = 'Stop'

# Repo root = parent of this install/ folder, forward-slashed for cross-tool paths.
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path -replace '\\','/'
$snippetPath = Join-Path $PSScriptRoot 'global-CLAUDE.snippet.md'
if (-not (Test-Path $snippetPath)) { throw "snippet not found: $snippetPath" }
$block = (Get-Content $snippetPath -Raw -Encoding UTF8) -replace '__CU_ROOT__', $repoRoot

if ($Target -eq 'global') {
  $claudeDir = Join-Path $env:USERPROFILE '.claude'
  if (-not (Test-Path $claudeDir)) { New-Item -ItemType Directory -Path $claudeDir -Force | Out-Null }
  $targetFile = Join-Path $claudeDir 'CLAUDE.md'
} else {
  $targetFile = Join-Path (Get-Location) 'CLAUDE.md'
}

$beginRe = '<!-- BEGIN context-universal'
$endRe   = '<!-- END context-universal -->'

if (Test-Path $targetFile) {
  $existing = Get-Content $targetFile -Raw -Encoding UTF8
  if ($existing -match [regex]::Escape($beginRe)) {
    # Replace the existing managed block (MatchEvaluator keeps $ chars in $block literal).
    $pattern = '(?s)' + [regex]::Escape($beginRe) + '.*?' + [regex]::Escape($endRe)
    $merged = [regex]::Replace($existing, $pattern, { param($m) $block })
    $action = 'updated existing block in'
  } else {
    # Append below whatever is already there.
    $merged = $existing.TrimEnd() + "`r`n`r`n" + $block
    $action = 'appended block to'
  }
} else {
  $merged = $block
  $action = 'created'
}

# Write UTF-8 WITHOUT BOM (PS 5.1's -Encoding utf8 adds a BOM and mangles multibyte chars otherwise).
[System.IO.File]::WriteAllText($targetFile, $merged, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "context-universal: $action $targetFile"
Write-Host "  repo root -> $repoRoot"
Write-Host "  Effective in NEW Claude Code sessions. Update anytime with: git pull; re-run this script."
