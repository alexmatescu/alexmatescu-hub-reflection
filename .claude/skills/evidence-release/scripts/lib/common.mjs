// evidence-release / scripts/lib/common.mjs
//
// Shared deterministic utilities for the evidence-release pipeline.
// No network calls, no LLM calls, no guessing. Every function here either
// reads bytes/filesystem facts verbatim or fails loudly.
//
// Node >=18, ESM only (.mjs). No third-party dependencies — this project's
// package.json does not include a YAML/CSV/zip library, and evidence-release
// must not add one without the user's approval, so this file implements the
// small, bounded subset of YAML/CSV it actually needs.

import { createHash } from "node:crypto";
import { createReadStream, promises as fs } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

// ---------------------------------------------------------------------------
// Process execution
// ---------------------------------------------------------------------------

/**
 * Run a command and capture stdout/stderr/exit code. Never throws on a
 * non-zero exit — callers decide what a non-zero code means.
 */
export function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { ...opts });
    let stdout = "";
    let stderr = "";
    child.stdout?.on("data", (d) => (stdout += d.toString("utf8")));
    child.stderr?.on("data", (d) => (stderr += d.toString("utf8")));
    child.on("error", reject);
    child.on("close", (code) => resolve({ code, stdout, stderr }));
  });
}

// ---------------------------------------------------------------------------
// Hashing
// ---------------------------------------------------------------------------

/** SHA-256 of a file's bytes on disk, streamed (no full-file buffering). */
export function sha256File(filePath) {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    const stream = createReadStream(filePath);
    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => resolve(hash.digest("hex")));
    stream.on("error", reject);
  });
}

export function sha256Buffer(buf) {
  return createHash("sha256").update(buf).digest("hex");
}

// ---------------------------------------------------------------------------
// Image dimensions — pure header parsing, no image library.
// Returns { width, height } or null if the format isn't recognized/complete.
// Reads only a bounded prefix of the file (headerBuf), never the whole image,
// except for JPEG where SOF markers can appear after a large EXIF blob (still
// bounded by maxBytes).
// ---------------------------------------------------------------------------

export async function readHeaderBuffer(filePath, maxBytes = 262144) {
  const handle = await fs.open(filePath, "r");
  try {
    const buf = Buffer.alloc(maxBytes);
    const { bytesRead } = await handle.read(buf, 0, maxBytes, 0);
    return buf.subarray(0, bytesRead);
  } finally {
    await handle.close();
  }
}

function dimsFromPNG(buf) {
  if (buf.length < 24) return null;
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (!buf.subarray(0, 8).equals(sig)) return null;
  if (buf.toString("ascii", 12, 16) !== "IHDR") return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function dimsFromGIF(buf) {
  if (buf.length < 10) return null;
  const header = buf.toString("ascii", 0, 6);
  if (header !== "GIF87a" && header !== "GIF89a") return null;
  return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
}

function dimsFromJPEG(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 4 <= buf.length) {
    if (buf[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buf[offset + 1];
    // Standalone markers with no length field.
    if (marker === 0xd8 || marker === 0xd9 || (marker >= 0xd0 && marker <= 0xd7)) {
      offset += 2;
      continue;
    }
    if (offset + 4 > buf.length) break;
    const segLen = buf.readUInt16BE(offset + 2);
    const isSOF =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc;
    if (isSOF) {
      if (offset + 9 > buf.length) return null; // truncated header buffer
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      return { width, height };
    }
    if (marker === 0xda) break; // start of scan — no more markers before pixel data
    offset += 2 + segLen;
  }
  return null; // SOF not found within the bounded header buffer
}

function dimsFromWEBP(buf) {
  if (buf.length < 30) return null;
  if (buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") {
    return null;
  }
  const fourcc = buf.toString("ascii", 12, 16);
  if (fourcc === "VP8X") {
    // width/height are 24-bit little-endian, minus one, starting at byte 24/27
    const width = (buf[24] | (buf[25] << 8) | (buf[26] << 16)) + 1;
    const height = (buf[27] | (buf[28] << 8) | (buf[29] << 16)) + 1;
    return { width, height };
  }
  if (fourcc === "VP8 " && buf.length >= 30) {
    // Lossy: signature bytes at 23-25 (0x9d 0x01 0x2a), width/height 14-bit each at 26-29
    if (buf[23] === 0x9d && buf[24] === 0x01 && buf[25] === 0x2a) {
      const width = buf.readUInt16LE(26) & 0x3fff;
      const height = buf.readUInt16LE(28) & 0x3fff;
      return { width, height };
    }
  }
  // VP8L (lossless) not implemented — deliberately returns null (UNKNOWN)
  // rather than a guessed value.
  return null;
}

/**
 * Best-effort, format-verified image dimensions. Returns null (never a
 * guess) when the format is unsupported or the header buffer was truncated
 * before the dimension-bearing chunk.
 */
export function parseImageDimensions(headerBuf) {
  return (
    dimsFromPNG(headerBuf) ||
    dimsFromGIF(headerBuf) ||
    dimsFromJPEG(headerBuf) ||
    dimsFromWEBP(headerBuf) ||
    null
  );
}

// ---------------------------------------------------------------------------
// Minimal YAML subset parser — NOT a general YAML parser.
//
// Supports exactly the shape evidence-package.yaml uses:
//   - top-level `key: value`
//   - one level of nesting via indented `key: value` under a bare `key:`
//   - simple lists via indented `- value` lines under a bare `key:`
//   - quoted ('...' or "...") and unquoted scalars, booleans, numbers, null
//   - '#' full-line and trailing comments outside quotes
//
// Anything beyond this (anchors, multi-line scalars, flow collections,
// nesting deeper than 2 levels) is rejected with an explicit error rather
// than silently mis-parsed. If evidence-package.yaml ever needs more than
// this, switch to a real YAML library (with approval) instead of extending
// this parser silently.
// ---------------------------------------------------------------------------

function stripComment(line) {
  let inQuote = null;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuote) {
      if (c === inQuote) inQuote = null;
      continue;
    }
    if (c === "'" || c === '"') {
      inQuote = c;
      continue;
    }
    if (c === "#" && (i === 0 || line[i - 1] === " " || line[i - 1] === "\t")) {
      return line.slice(0, i);
    }
  }
  return line;
}

function parseScalar(raw) {
  const s = raw.trim();
  if (s === "" || s === "~" || s.toLowerCase() === "null") return null;
  if (s.toLowerCase() === "true") return true;
  if (s.toLowerCase() === "false") return false;
  if (/^-?\d+$/.test(s)) return parseInt(s, 10);
  if (/^-?\d+\.\d+$/.test(s)) return parseFloat(s);
  if (
    (s.startsWith('"') && s.endsWith('"') && s.length >= 2) ||
    (s.startsWith("'") && s.endsWith("'") && s.length >= 2)
  ) {
    return s.slice(1, -1);
  }
  return s;
}

export function parseSimpleYaml(text) {
  const root = {};
  const rawLines = text.split(/\r?\n/);
  const lines = [];
  for (const rawLine of rawLines) {
    const noComment = stripComment(rawLine);
    if (noComment.trim() === "") continue;
    const indentMatch = noComment.match(/^ */);
    const indent = indentMatch[0].length;
    if (indent % 2 !== 0) {
      throw new Error(`evidence-package.yaml: odd indentation not supported: "${rawLine}"`);
    }
    lines.push({ indent, content: noComment.trim() });
  }

  let i = 0;
  function parseBlock(minIndent, target) {
    while (i < lines.length && lines[i].indent >= minIndent) {
      const { indent, content } = lines[i];
      if (indent > minIndent) {
        throw new Error(`evidence-package.yaml: unexpected indentation near "${content}"`);
      }
      if (content.startsWith("- ")) {
        throw new Error(
          `evidence-package.yaml: top-level list items not supported near "${content}"`,
        );
      }
      const colonIdx = content.indexOf(":");
      if (colonIdx === -1) {
        throw new Error(`evidence-package.yaml: expected "key: value" near "${content}"`);
      }
      const key = content.slice(0, colonIdx).trim();
      const rest = content.slice(colonIdx + 1).trim();
      i++;
      if (rest === "") {
        // Nested block: object or list, one level deeper.
        if (i < lines.length && lines[i].indent > indent && lines[i].content.startsWith("- ")) {
          const arr = [];
          const childIndent = lines[i].indent;
          while (
            i < lines.length &&
            lines[i].indent === childIndent &&
            lines[i].content.startsWith("- ")
          ) {
            arr.push(parseScalar(lines[i].content.slice(2)));
            i++;
          }
          target[key] = arr;
        } else if (i < lines.length && lines[i].indent > indent) {
          const child = {};
          parseBlock(lines[i].indent, child);
          target[key] = child;
        } else {
          target[key] = null;
        }
      } else {
        target[key] = parseScalar(rest);
      }
    }
  }

  parseBlock(0, root);
  return root;
}

export async function readConfig(configPath) {
  const text = await fs.readFile(configPath, "utf8");
  if (configPath.endsWith(".json")) return JSON.parse(text);
  return parseSimpleYaml(text);
}

// ---------------------------------------------------------------------------
// CSV — RFC 4180-ish. One concept per column, no embedded JSON blobs.
// ---------------------------------------------------------------------------

export function csvEscape(value) {
  const s = value === null || value === undefined ? "" : String(value);
  if (/[",\n\r]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

export function toCsv(headers, rows, { bom = true } = {}) {
  const lines = [headers.map(csvEscape).join(",")];
  for (const row of rows) {
    lines.push(headers.map((h) => csvEscape(row[h])).join(","));
  }
  const body = lines.join("\r\n") + "\r\n";
  return bom ? "﻿" + body : body;
}

/** Minimal RFC 4180 CSV parser (handles quoted fields, embedded commas/newlines). */
export function parseCsv(text) {
  let s = text;
  if (s.charCodeAt(0) === 0xfeff) s = s.slice(1);
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (inQuotes) {
      if (c === '"') {
        if (s[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i++;
        continue;
      }
      field += c;
      i++;
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      i++;
      continue;
    }
    if (c === ",") {
      row.push(field);
      field = "";
      i++;
      continue;
    }
    if (c === "\r") {
      i++;
      continue;
    }
    if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      i++;
      continue;
    }
    field += c;
    i++;
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  if (rows.length === 0) return [];
  const headers = rows[0];
  return rows.slice(1).filter((r) => r.length > 1 || r[0] !== "").map((r) => {
    const obj = {};
    headers.forEach((h, idx) => (obj[h] = r[idx] ?? ""));
    return obj;
  });
}

// ---------------------------------------------------------------------------
// Filesystem helpers
// ---------------------------------------------------------------------------

export async function pathExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

export async function walkFiles(dir, base = dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walkFiles(full, base)));
    } else if (entry.isFile()) {
      out.push(path.relative(base, full));
    }
  }
  return out;
}

export async function readJson(p) {
  return JSON.parse(await fs.readFile(p, "utf8"));
}

export async function writeJson(p, data) {
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, JSON.stringify(data, null, 2) + "\n", "utf8");
}

export async function writeText(p, text) {
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, text, "utf8");
}

// ---------------------------------------------------------------------------
// Naming convention
// ---------------------------------------------------------------------------

/** entity-slug must be lowercase kebab-case. */
export const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** T0, T1, T2, ... or window-YYYY-MM-DD_YYYY-MM-DD */
export const MEASUREMENT_POINT_RE = /^(T\d+|window-\d{4}-\d{2}-\d{2}_\d{4}-\d{2}-\d{2})$/;

export function artifactFileName(entitySlug, measurementPoint, artifact, version, ext) {
  return `${entitySlug}_${measurementPoint}_${artifact}_v${version}.${ext}`;
}

export function nowIsoLocal(timeZone) {
  // Deterministic wall-clock capture, timezone-labeled but not reinterpreted —
  // used only for processing-log timestamps, never for evidence capture times.
  return new Date().toISOString();
}

/**
 * Ensure a symlink named `canonicalName` exists in `workDir` pointing at the
 * real archive file — this gives the raw archive its naming-convention
 * filename as a release asset without ever copying, moving, or renaming the
 * original file the user provided. Idempotent: if the link already exists
 * and resolves to the same file, it's left alone; if it resolves elsewhere,
 * this throws rather than silently repointing it.
 */
export async function ensureCanonicalArchiveLink(archivePath, workDir, canonicalName) {
  const linkPath = path.join(workDir, canonicalName);
  const realArchive = await fs.realpath(archivePath);
  await fs.mkdir(workDir, { recursive: true });
  if (await pathExists(linkPath)) {
    const existingReal = await fs.realpath(linkPath).catch(() => null);
    if (existingReal === realArchive) return linkPath;
    throw new Error(
      `${linkPath} already exists and points at a different file (${existingReal}) than the configured archive (${realArchive}). Remove it manually if the archive path genuinely changed.`,
    );
  }
  await fs.symlink(realArchive, linkPath);
  return linkPath;
}

// ---------------------------------------------------------------------------
// Freeze / finalize — the technical enforcement of "nothing that enters the
// checksum manifest is modified after it is generated." Applied to the
// artifacts evidence-release itself generates (Evidence Index, README) —
// never to the user's raw archive, which is never opened for writing at all
// (see release-policy.md).
// ---------------------------------------------------------------------------

const OWNER_WRITE = 0o200;

/** Read-only (0o444) — the pipeline stops trusting its own memory of "this
 * was validated" and lets the filesystem refuse any further write instead. */
export async function freezeFile(filePath) {
  await fs.chmod(filePath, 0o444);
}

/** Re-enables writing. Only for a deliberate correction to a metadata
 * version that has not yet been checksummed/uploaded anywhere — the normal
 * way to fix a finalized package is a new metadata version, not unfreezing
 * this one. Callers should warn loudly, not use this silently. */
export async function unfreezeFile(filePath) {
  await fs.chmod(filePath, 0o644);
}

export async function isFrozen(filePath) {
  const st = await fs.stat(filePath);
  return (st.mode & OWNER_WRITE) === 0;
}

/**
 * Throws a clear, actionable error if `filePath` exists and is frozen —
 * used right before any script would (re)write a finalized artifact, so the
 * failure reads as a policy violation instead of a raw EACCES stack trace.
 */
export async function assertNotFrozen(filePath, hint) {
  if (!(await pathExists(filePath))) return;
  if (await isFrozen(filePath)) {
    throw new Error(
      `${filePath} is frozen (read-only) — it was already finalized and checksummed. ` +
        (hint ||
          "Do not edit it in place: bump metadata_version and generate a new version instead. " +
            "Only run freeze_artifacts.mjs --unfreeze if this exact version was never checksummed/uploaded anywhere."),
    );
  }
}

/**
 * Verifies a `shasum -a 256 -c`-compatible manifest against the files that
 * actually sit next to it in `dir`, using the real `shasum`/`sha256sum`
 * binary when available (the same tool a human would run), falling back to
 * an in-process SHA-256 recompute + compare if neither is on PATH. Returns
 * { ok, lines, tool } — never throws for a verification mismatch, only for
 * an environment problem (manifest unreadable, etc.).
 */
export async function verifyChecksumManifest(dir, manifestFileName) {
  for (const tool of ["shasum", "sha256sum"]) {
    const args = tool === "shasum" ? ["-a", "256", "-c", manifestFileName] : ["-c", manifestFileName];
    const probe = await run(tool, ["--version"]).catch(() => ({ code: 1 }));
    if (probe.code !== 0) continue;
    const result = await run(tool, args, { cwd: dir });
    const lines = result.stdout
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    return { ok: result.code === 0, lines, tool, raw: result.stdout + result.stderr };
  }
  // Fallback: no shasum/sha256sum on PATH — recompute in-process.
  const manifestText = await fs.readFile(path.join(dir, manifestFileName), "utf8");
  const lines = [];
  let ok = true;
  for (const rawLine of manifestText.split("\n")) {
    const line = rawLine.trim();
    if (!line) continue;
    const m = /^([0-9a-fA-F]{64})\s+\*?(.+)$/.exec(line);
    if (!m) continue;
    const [, expected, fname] = m;
    const target = path.join(dir, fname);
    let actual;
    try {
      actual = await sha256File(target);
    } catch {
      actual = null;
    }
    const good = actual && actual.toLowerCase() === expected.toLowerCase();
    if (!good) ok = false;
    lines.push(`${fname}: ${good ? "OK" : "FAILED"}`);
  }
  return { ok, lines, tool: "node:crypto (fallback, no shasum/sha256sum on PATH)", raw: lines.join("\n") };
}

/** Append one JSONL line to the audit log (append-only, never rewritten). */
export async function appendLog(logPath, entry) {
  await fs.mkdir(path.dirname(logPath), { recursive: true });
  const line = JSON.stringify({ timestamp: new Date().toISOString(), ...entry });
  await fs.appendFile(logPath, line + "\n", "utf8");
}
