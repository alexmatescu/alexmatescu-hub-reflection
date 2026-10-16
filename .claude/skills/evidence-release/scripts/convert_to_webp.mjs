#!/usr/bin/env node
// evidence-release / scripts/convert_to_webp.mjs
//
// STEP 1b — CONVERT (AVL-200 §8.1, AVL200-REQ-041). Reads the PNG input (a
// ZIP archive or a folder) without writing to it, converts every PNG to a
// lossy WebP at quality 80 and verifies each conversion:
//
//   1. the input ZIP passes `unzip -t` (ZIP input only);
//   2. cwebp exits 0 and the WebP decodes fully with dwebp;
//   3. WebP pixel dimensions equal the PNG's;
//   4. RGB PSNR between the decoded WebP and the PNG is >= 40 dB;
//   5. every non-PNG file is copied byte-identical (same SHA-256).
//
// Any failure stops the step and no converted archive is produced. On
// success it writes the per-file conversion manifest (CSV), a summary
// (JSON) and, with --out-zip, the converted archive, re-verified entry by
// entry. That archive is the evidence every later step hashes and releases.
// System files (__MACOSX/, ._*, .DS_Store, Thumbs.db) are listed as
// SYSTEM_FILE_EXCLUDED and not carried over.
//
// Encoding is single-threaded cwebp with fixed flags, so the same input and
// cwebp version give byte-identical WebP files; the cwebp version is recorded.
// Converted files keep the source file's mtime, so the ZIP is reproducible.
//
// Usage:
//   node convert_to_webp.mjs <evidence-package.yaml>        # evidence-release
//   node convert_to_webp.mjs --input <zip|dir> --out-dir <dir> \
//        --manifest <csv> --summary <json> [--out-zip <zip>] \
//        [--source-dir <dir>] [--log <jsonl>]                # any pipeline
//
// Exit codes: 0 = PASS (or verified no-op re-run), 1 = FAIL, 2 = usage.

import path from "node:path";
import os from "node:os";
import { promises as fs } from "node:fs";
import {
  run,
  sha256File,
  readHeaderBuffer,
  parseImageDimensions,
  toCsv,
  parseCsv,
  walkFiles,
  pathExists,
  readJson,
  writeJson,
  writeText,
  appendLog,
  readConfig,
  WEBP_QUALITY,
  WEBP_MIN_PSNR_DB,
  webpConversionEnabled,
  webpPaths,
} from "./lib/common.mjs";

const SCRIPT = "convert_to_webp.mjs";
const CWEBP_ARGS = ["-q", String(WEBP_QUALITY), "-metadata", "icc"];

const COLUMNS = [
  "source_relative_path",
  "source_sha256",
  "source_bytes",
  "source_width",
  "source_height",
  "action",
  "target_relative_path",
  "target_sha256",
  "target_bytes",
  "target_width",
  "target_height",
  "size_ratio",
  "psnr_db",
  "decode_check",
  "status",
  "failure_reason",
];

function isSystemFile(rel) {
  const parts = rel.split("/");
  if (parts[0] === "__MACOSX") return true;
  const base = parts[parts.length - 1];
  return base === ".DS_Store" || base === "Thumbs.db" || base.startsWith("._");
}

const isPng = (rel) => /\.png$/i.test(rel);
const nfcCompare = (a, b) => {
  const x = a.normalize("NFC");
  const y = b.normalize("NFC");
  return x < y ? -1 : x > y ? 1 : 0;
};

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) out[a.slice(2)] = argv[++i];
    else out._ = a;
  }
  return out;
}

async function dims(filePath) {
  return parseImageDimensions(await readHeaderBuffer(filePath));
}

async function convertOne(srcRoot, outRoot, tmpDir, rel, idx) {
  const src = path.join(srcRoot, rel);
  const st = await fs.stat(src);
  const row = {
    source_relative_path: rel.normalize("NFC"),
    source_sha256: await sha256File(src),
    source_bytes: st.size,
    source_width: "",
    source_height: "",
    action: "",
    target_relative_path: "",
    target_sha256: "",
    target_bytes: "",
    target_width: "",
    target_height: "",
    size_ratio: "",
    psnr_db: "",
    decode_check: "",
    status: "FAIL",
    failure_reason: "",
  };
  const fail = (reason) => ({ ...row, failure_reason: reason });

  if (!isPng(rel)) {
    const dest = path.join(outRoot, rel);
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(src, dest);
    await fs.utimes(dest, st.atime, st.mtime);
    const destSha = await sha256File(dest);
    Object.assign(row, {
      action: "COPIED_UNCHANGED",
      target_relative_path: rel.normalize("NFC"),
      target_sha256: destSha,
      target_bytes: (await fs.stat(dest)).size,
      decode_check: "NOT_APPLICABLE",
      psnr_db: "NOT_APPLICABLE",
      size_ratio: "1.0000",
    });
    if (destSha !== row.source_sha256)
      return fail("copy is not byte-identical to the source");
    return { ...row, status: "PASS" };
  }

  const srcDims = await dims(src);
  if (!srcDims) return fail("PNG header unreadable");
  row.source_width = srcDims.width;
  row.source_height = srcDims.height;

  const targetRel = rel.replace(/\.png$/i, ".webp");
  const dest = path.join(outRoot, targetRel);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  row.action = "CONVERTED_WEBP";
  row.target_relative_path = targetRel.normalize("NFC");

  const enc = await run("cwebp", [
    ...CWEBP_ARGS,
    "-print_psnr",
    src,
    "-o",
    dest,
  ]);
  if (enc.code !== 0)
    return fail(`cwebp exit ${enc.code}: ${enc.stderr.trim().slice(-200)}`);
  const m = /PSNR:.*Total:\s*([\d.]+)/.exec(enc.stderr);
  if (!m) return fail("cwebp did not report PSNR");
  const psnr = Number(m[1]);
  row.psnr_db = psnr.toFixed(2);

  const decoded = path.join(tmpDir, `decode-${idx}.pam`);
  const dec = await run("dwebp", ["-quiet", dest, "-pam", "-o", decoded]);
  await fs.rm(decoded, { force: true });
  row.decode_check = dec.code === 0 ? "PASS" : "FAIL";

  await fs.utimes(dest, st.atime, st.mtime);
  const outDims = await dims(dest);
  const outSize = (await fs.stat(dest)).size;
  Object.assign(row, {
    target_sha256: await sha256File(dest),
    target_bytes: outSize,
    target_width: outDims?.width ?? "",
    target_height: outDims?.height ?? "",
    size_ratio: (outSize / st.size).toFixed(4),
  });

  if (dec.code !== 0) return fail("WebP does not decode (dwebp)");
  if (
    !outDims ||
    outDims.width !== srcDims.width ||
    outDims.height !== srcDims.height
  )
    return fail("WebP dimensions differ from the PNG");
  if (psnr < WEBP_MIN_PSNR_DB)
    return fail(`PSNR ${psnr.toFixed(2)} dB below ${WEBP_MIN_PSNR_DB} dB`);
  return { ...row, status: "PASS" };
}

async function pool(items, size, fn) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: size }, worker));
  return results;
}

/** Re-run on a finished conversion: verify instead of redoing. */
async function verifyExisting(opts) {
  const summary = await readJson(opts.summary);
  if (summary.status !== "PASS") return false;
  const rows = parseCsv(await fs.readFile(opts.manifest, "utf8"));
  const problems = [];
  for (const r of rows) {
    if (r.action === "SYSTEM_FILE_EXCLUDED") continue;
    const p = path.join(opts.outDir, r.target_relative_path);
    const real = (await pathExists(p))
      ? p
      : path.join(opts.outDir, r.target_relative_path.normalize("NFD"));
    if (!(await pathExists(real)))
      problems.push(`missing ${r.target_relative_path}`);
    else if ((await sha256File(real)) !== r.target_sha256)
      problems.push(`changed ${r.target_relative_path}`);
  }
  if (opts.outZip) {
    if (!(await pathExists(opts.outZip)))
      problems.push("converted archive missing");
    else if ((await sha256File(opts.outZip)) !== summary.archive?.sha256)
      problems.push("converted archive SHA-256 changed");
  }
  if (problems.length) {
    console.error(
      `FAIL: an earlier conversion exists but no longer matches its manifest (${problems.slice(0, 3).join("; ")}). ` +
        `Converted evidence is never repaired in place — remove ${path.dirname(opts.summary)} manually and convert again under a new archive.version.`,
    );
    process.exit(1);
  }
  console.log(
    `NO-OP: conversion already done and verified — ${rows.length} files, archive SHA-256 ${summary.archive?.sha256 ?? "(no archive)"}.`,
  );
  return true;
}

async function convert(opts) {
  if (await pathExists(opts.summary)) {
    if (await verifyExisting(opts)) return;
  }
  for (const p of [opts.outDir, opts.outZip].filter(Boolean)) {
    if (await pathExists(p)) {
      console.error(
        `FAIL: ${p} already exists without a passing conversion summary. Remove it manually; nothing is overwritten.`,
      );
      process.exit(1);
    }
  }

  const ver = await run("cwebp", ["-version"]).catch(() => null);
  const dver = await run("dwebp", ["-version"]).catch(() => null);
  if (!ver || ver.code !== 0 || !dver || dver.code !== 0) {
    console.error(
      "FAIL: cwebp/dwebp not found on PATH (macOS: brew install webp).",
    );
    process.exit(1);
  }
  const cwebpVersion = ver.stdout.split("\n")[0].trim();

  // Input: ZIP (tested, hashed, extracted) or folder (read in place).
  const inputAbs = path.resolve(opts.input);
  const inputStat = await fs.stat(inputAbs).catch(() => null);
  if (!inputStat) {
    console.error(`FAIL: input not found: ${inputAbs}`);
    process.exit(1);
  }
  const input = {
    path: inputAbs,
    kind: inputStat.isDirectory() ? "FOLDER" : "ZIP",
    sha256: null,
  };
  let srcRoot = inputAbs;
  if (input.kind === "ZIP") {
    const t = await run("unzip", ["-t", "-q", inputAbs]);
    if (t.code !== 0) {
      console.error(
        `FAIL: input archive fails unzip -t: ${t.stdout}${t.stderr}`,
      );
      process.exit(1);
    }
    input.sha256 = await sha256File(inputAbs);
    srcRoot = opts.sourceDir;
    if (await pathExists(srcRoot)) await fs.rm(srcRoot, { recursive: true });
    await fs.mkdir(srcRoot, { recursive: true });
    const x = await run("unzip", ["-q", inputAbs, "-d", srcRoot]);
    if (x.code !== 0) {
      console.error(`FAIL: could not extract input archive: ${x.stderr}`);
      process.exit(1);
    }
  }

  const all = (await walkFiles(srcRoot)).sort(nfcCompare);
  const system = all.filter(isSystemFile);
  const files = all.filter((f) => !isSystemFile(f));
  const targets = new Set(
    files.map((f) =>
      (isPng(f) ? f.replace(/\.png$/i, ".webp") : f).normalize("NFC"),
    ),
  );
  if (targets.size !== files.length) {
    console.error(
      "FAIL: two input files would map to the same output name (e.g. x.png next to x.webp). Rename in the source and re-run.",
    );
    process.exit(1);
  }

  await fs.mkdir(opts.outDir, { recursive: true });
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "webp-verify-"));
  const workers = Math.max(1, Math.min(os.cpus().length, 8));
  console.log(
    `CONVERT: ${files.filter(isPng).length} PNG → WebP q${WEBP_QUALITY}, ${files.filter((f) => !isPng(f)).length} copied unchanged, ${system.length} system files excluded (${cwebpVersion}).`,
  );
  const rows = await pool(files, workers, (rel, i) =>
    convertOne(srcRoot, opts.outDir, tmpDir, rel, i),
  );
  for (const rel of system) {
    rows.push({
      ...Object.fromEntries(COLUMNS.map((c) => [c, ""])),
      source_relative_path: rel.normalize("NFC"),
      action: "SYSTEM_FILE_EXCLUDED",
      status: "PASS",
    });
  }

  const failed = rows.filter((r) => r.status !== "PASS");
  const converted = rows.filter((r) => r.action === "CONVERTED_WEBP");
  const psnrs = converted.map((r) => Number(r.psnr_db)).filter(Number.isFinite);
  const sum = (key, list) => list.reduce((a, r) => a + Number(r[key] || 0), 0);
  const summary = {
    requirement: "AVL200-REQ-041",
    input,
    encoder: {
      tool: "cwebp",
      version: cwebpVersion,
      args: CWEBP_ARGS.join(" "),
      threads: 1,
    },
    quality: WEBP_QUALITY,
    min_psnr_db: WEBP_MIN_PSNR_DB,
    counts: {
      files: rows.length,
      converted: converted.length,
      copied_unchanged: rows.filter((r) => r.action === "COPIED_UNCHANGED")
        .length,
      system_excluded: system.length,
      failed: failed.length,
    },
    bytes: {
      png_source: sum("source_bytes", converted),
      webp_target: sum("target_bytes", converted),
    },
    psnr_db: psnrs.length
      ? {
          min: Math.min(...psnrs).toFixed(2),
          max: Math.max(...psnrs).toFixed(2),
        }
      : null,
    archive: null,
    converted_at: new Date().toISOString(),
    status: failed.length ? "FAIL" : "PASS",
  };

  rows.sort((a, b) =>
    nfcCompare(a.source_relative_path, b.source_relative_path),
  );
  await writeText(opts.manifest, toCsv(COLUMNS, rows));

  if (failed.length) {
    await writeJson(opts.summary, summary);
    await fs.rm(tmpDir, { recursive: true, force: true });
    console.error(`FAIL: ${failed.length} file(s) failed verification:`);
    for (const r of failed.slice(0, 10))
      console.error(`  ${r.source_relative_path}: ${r.failure_reason}`);
    console.error(`See ${opts.manifest}. No converted archive was produced.`);
    await log(opts, summary, "FAIL");
    process.exit(1);
  }

  if (opts.outZip) {
    const list = (await walkFiles(opts.outDir)).sort(nfcCompare);
    await fs.mkdir(path.dirname(opts.outZip), { recursive: true });
    const z = await new Promise((resolve, reject) => {
      import("node:child_process").then(({ spawn }) => {
        const child = spawn("zip", ["-X", "-D", "-q", opts.outZip, "-@"], {
          cwd: opts.outDir,
        });
        let err = "";
        child.stderr.on("data", (d) => (err += d));
        child.on("error", reject);
        child.on("close", (code) => resolve({ code, err }));
        child.stdin.end(list.join("\n") + "\n");
      });
    });
    if (z.code !== 0) {
      console.error(`FAIL: zip failed: ${z.err}`);
      process.exit(1);
    }
    const t = await run("unzip", ["-t", "-q", opts.outZip]);
    const checkDir = path.join(tmpDir, "zip-check");
    const x = await run("unzip", ["-q", opts.outZip, "-d", checkDir]);
    const expected = new Map(
      rows
        .filter((r) => r.target_sha256)
        .map((r) => [r.target_relative_path, r.target_sha256]),
    );
    const inZip = (await walkFiles(checkDir)).map((f) => f.normalize("NFC"));
    let entriesOk = x.code === 0 && inZip.length === expected.size;
    if (entriesOk) {
      for (const rel of await walkFiles(checkDir)) {
        if (
          (await sha256File(path.join(checkDir, rel))) !==
          expected.get(rel.normalize("NFC"))
        ) {
          entriesOk = false;
          console.error(`  archive entry mismatch: ${rel.normalize("NFC")}`);
        }
      }
    }
    summary.archive = {
      path: path.resolve(opts.outZip),
      sha256: await sha256File(opts.outZip),
      bytes: (await fs.stat(opts.outZip)).size,
      entries: inZip.length,
      unzip_test: t.code === 0 ? "PASS" : "FAIL",
      entries_match_manifest: entriesOk ? "PASS" : "FAIL",
    };
    if (t.code !== 0 || !entriesOk) {
      summary.status = "FAIL";
      await writeJson(opts.summary, summary);
      await fs.rm(opts.outZip, { force: true });
      console.error(
        "FAIL: the converted archive did not verify against the manifest; it was removed.",
      );
      await log(opts, summary, "FAIL");
      process.exit(1);
    }
  }
  await fs.rm(tmpDir, { recursive: true, force: true });
  await writeJson(opts.summary, summary);
  await log(opts, summary, "PASS");

  const pct = summary.bytes.png_source
    ? Math.round((100 * summary.bytes.webp_target) / summary.bytes.png_source)
    : 0;
  console.log(
    `PASS: ${converted.length} converted (WebP = ${pct}% of PNG bytes; PSNR ${summary.psnr_db?.min ?? "-"}–${summary.psnr_db?.max ?? "-"} dB, min ${WEBP_MIN_PSNR_DB}).`,
  );
  if (summary.archive)
    console.log(
      `Archive: ${summary.archive.path}\nSHA-256: ${summary.archive.sha256}`,
    );
  console.log(`Manifest: ${opts.manifest}`);
}

async function log(opts, summary, status) {
  if (!opts.log) return;
  await appendLog(opts.log, {
    operation: "convert_to_webp",
    status,
    input: summary.input.path,
    output: summary.archive?.path ?? opts.outDir,
    script: SCRIPT,
    warnings: [],
  });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  let opts;
  if (args._ && !args.input) {
    const config = await readConfig(args._);
    if (!webpConversionEnabled(config)) {
      console.log(
        "SKIP: webp_conversion.enabled is false — legacy package, archive.path is used as-is.",
      );
      return;
    }
    if (
      !config.entity_slug ||
      !config.measurement_point ||
      !config.archive?.path ||
      !config.archive?.version
    ) {
      console.error(
        "FAIL: config is missing entity_slug, measurement_point, archive.path or archive.version.",
      );
      process.exit(1);
    }
    const W = webpPaths(config);
    const workDir = path.dirname(W.dir);
    const inv = path.join(workDir, "inventory.json");
    if ((await pathExists(inv)) && !(await pathExists(W.summaryJson))) {
      const prev = await readJson(inv);
      if (prev.archive_path && path.resolve(prev.archive_path) !== W.archive) {
        console.error(
          `FAIL: ${inv} already inventories the unconverted archive (${prev.archive_path}). This package was started before AVL-200 2.0.0; ` +
            "set `webp_conversion.enabled: false` to continue it in its original form (AVL200-REQ-013), or start a new archive.version.",
        );
        process.exit(1);
      }
    }
    opts = {
      input: config.archive.path,
      sourceDir: W.sourceDir,
      outDir: W.convertedDir,
      outZip: W.archive,
      manifest: W.manifestCsv,
      summary: W.summaryJson,
      log: path.join(workDir, "processing-log.jsonl"),
    };
  } else if (args.input && args["out-dir"] && args.manifest && args.summary) {
    opts = {
      input: args.input,
      outDir: path.resolve(args["out-dir"]),
      outZip: args["out-zip"] ? path.resolve(args["out-zip"]) : null,
      manifest: path.resolve(args.manifest),
      summary: path.resolve(args.summary),
      sourceDir: path.resolve(
        args["source-dir"] ??
          path.join(path.dirname(path.resolve(args.manifest)), "webp-source"),
      ),
      log: args.log ? path.resolve(args.log) : null,
    };
  } else {
    console.error(
      "Usage: node convert_to_webp.mjs <evidence-package.yaml>\n" +
        "   or: node convert_to_webp.mjs --input <zip|dir> --out-dir <dir> --manifest <csv> --summary <json> [--out-zip <zip>] [--source-dir <dir>] [--log <jsonl>]",
    );
    process.exit(2);
  }
  await convert(opts);
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
