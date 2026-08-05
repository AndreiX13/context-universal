#!/usr/bin/env node
// validate-skills.mjs — lint every skills/<name>/SKILL.md against the repo's one authoring schema.
// Zero dependencies, runs natively on Windows (node tools/validate-skills.mjs). No YAML lib needed.
// Exit 0 = clean, 1 = errors found. Pass --json for machine-readable output.

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_DIR = join(ROOT, "skills");
const JSON_OUT = process.argv.includes("--json");

const NAME_RE = /^[a-z0-9]([a-z0-9-]{0,62}[a-z0-9])?$/;
const ALLOWED_META = new Set(["source", "scope"]);
const ALLOWED_SCOPE = new Set(["universal", "ro", "specialized"]);
const FORBIDDEN_TOP = ["version", "author", "license", "tags", "compatible_tools", "context", "updated", "triggers"];

// Minimal frontmatter reader: returns { raw, topKeys[], meta{}, body } or null.
function parseFrontmatter(text) {
  const lines = text.split(/\r?\n/);
  if (lines[0].trim() !== "---") return null;
  let end = -1;
  for (let i = 1; i < lines.length; i++) if (lines[i].trim() === "---") { end = i; break; }
  if (end === -1) return null;
  const fmLines = lines.slice(1, end);
  const topKeys = [];
  const meta = {};
  let inMeta = false;
  const top = {};
  for (const ln of fmLines) {
    if (/^\S/.test(ln) && ln.includes(":")) {           // top-level key
      inMeta = false;
      const key = ln.slice(0, ln.indexOf(":")).trim();
      const val = ln.slice(ln.indexOf(":") + 1).trim();
      topKeys.push(key);
      top[key] = val;
      if (key === "metadata") inMeta = true;
    } else if (inMeta && /^\s+\S/.test(ln) && ln.includes(":")) { // metadata child
      const key = ln.slice(0, ln.indexOf(":")).trim();
      const val = ln.slice(ln.indexOf(":") + 1).trim().replace(/^["']|["']$/g, "");
      meta[key] = val;
    }
  }
  return { top, topKeys, meta, bodyLineCount: lines.length - end - 1, totalLines: lines.length };
}

const results = [];
let errorCount = 0, warnCount = 0;

const dirs = existsSync(SKILLS_DIR)
  ? readdirSync(SKILLS_DIR).filter((d) => statSync(join(SKILLS_DIR, d)).isDirectory())
  : [];

for (const dir of dirs.sort()) {
  const skillPath = join(SKILLS_DIR, dir, "SKILL.md");
  const errors = [], warnings = [];
  if (!existsSync(skillPath)) { errors.push("missing SKILL.md"); results.push({ skill: dir, errors, warnings }); errorCount++; continue; }

  const text = readFileSync(skillPath, "utf8");
  const fm = parseFrontmatter(text);
  if (!fm) { errors.push("no YAML frontmatter (--- ... ---)"); results.push({ skill: dir, errors, warnings }); errorCount++; continue; }

  // name
  const name = (fm.top.name || "").replace(/^["']|["']$/g, "");
  if (!name) errors.push("missing 'name'");
  else {
    if (name !== dir) errors.push(`name "${name}" != folder "${dir}"`);
    if (!NAME_RE.test(name)) errors.push(`name "${name}" fails kebab-case regex`);
  }

  // description
  const hasDesc = fm.topKeys.includes("description");
  if (!hasDesc) errors.push("missing 'description'");
  else {
    const descMatch = text.match(/description:\s*([\s\S]*?)\n(?:[a-z_]+:|---)/i);
    const descLen = descMatch ? descMatch[1].replace(/\s+/g, " ").trim().length : 0;
    if (descLen < 20) warnings.push(`description very short (${descLen} chars)`);
    if (descLen > 1024) errors.push(`description too long (${descLen} > 1024)`);
    if (descMatch && !/\b(use when|when the user|not for|for .*see|use this)\b/i.test(descMatch[1]))
      warnings.push("description lacks explicit trigger/scope phrasing");
  }

  // forbidden top-level keys
  for (const k of FORBIDDEN_TOP)
    if (fm.topKeys.includes(k)) errors.push(`forbidden top-level key '${k}' (fold into metadata or remove)`);

  // metadata
  if (!fm.topKeys.includes("metadata")) warnings.push("no metadata block (source/scope recommended)");
  else {
    for (const k of Object.keys(fm.meta))
      if (!ALLOWED_META.has(k)) warnings.push(`unexpected metadata key '${k}'`);
    if (fm.meta.scope && !ALLOWED_SCOPE.has(fm.meta.scope))
      errors.push(`scope '${fm.meta.scope}' not one of universal|ro|specialized`);
    if (!fm.meta.source) warnings.push("metadata.source missing (provenance/license)");
  }

  // body length
  if (fm.totalLines > 500) warnings.push(`SKILL.md is ${fm.totalLines} lines (> 500; move depth to references/)`);

  errorCount += errors.length; warnCount += warnings.length;
  results.push({ skill: dir, errors, warnings });
}

if (JSON_OUT) {
  console.log(JSON.stringify({ skills: results.length, errorCount, warnCount, results }, null, 2));
} else {
  for (const r of results) {
    const tag = r.errors.length ? "FAIL" : r.warnings.length ? "warn" : "ok  ";
    console.log(`[${tag}] ${r.skill}`);
    for (const e of r.errors) console.log(`        ERROR: ${e}`);
    for (const w of r.warnings) console.log(`        warn:  ${w}`);
  }
  console.log(`\n${results.length} skills · ${errorCount} errors · ${warnCount} warnings`);
}

process.exit(errorCount > 0 ? 1 : 0);
