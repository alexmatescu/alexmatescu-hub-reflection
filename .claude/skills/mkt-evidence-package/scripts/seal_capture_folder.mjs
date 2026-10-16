#!/usr/bin/env node
// mkt-evidence-package / scripts/seal_capture_folder.mjs
//
// STEP 2 — SEAL. Detectează subfolderele și tiparul numelor, calculează
// SHA-256 pentru fiecare captură, atribuie Evidence ID-urile (o singură dată),
// creează arhiva zip și o verifică în trei feluri. Folderul sursă e doar citit.
//
// Ieșiri: evidence/work/mkt/<slug>/capture-manifest.json, detection-report.json,
//         evidence/incoming/mkt/<slug>_capture-archive_v<av>.zip
// Coduri de ieșire: 0 = OK / no-op, 1 = FAIL, 3 = detecția cere decizia userului.
//
// Usage: node seal_capture_folder.mjs <config.yaml>

import path from "node:path";
import { promises as fs } from "node:fs";
import {
  run,
  sha256File,
  pathExists,
  walkFilesRaw,
  compareNfc,
  readJson,
  writeJson,
  appendLog,
  readZipEntryNames,
} from "./lib/common.mjs";
import {
  loadConfig,
  instancePaths,
  detectSurface,
  normalizeFolderName,
  detectFilenamePattern,
  applyFilenamePattern,
  evidenceId,
  documentId,
  isSystemFile,
  isOperatorDocument,
  isCaptureFile,
  webpConversionEnabled,
  sealedFolderPath,
} from "./lib/mkt.mjs";

const SCRIPT = "seal_capture_folder.mjs";

async function hashAll(folder, relPaths) {
  const out = new Map();
  for (const rel of relPaths) {
    const full = path.join(folder, rel);
    const st = await fs.stat(full);
    out.set(rel, { size: st.size, sha256: await sha256File(full) });
  }
  return out;
}

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node seal_capture_folder.mjs <config.yaml>");
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  // Cu conversia activă se sigilează folderul WebP produs la STEP 1b, nu capture_folder.path.
  const folder = sealedFolderPath(config);
  if (webpConversionEnabled(config)) {
    const summary = (await pathExists(P.webpSummaryPath))
      ? await readJson(P.webpSummaryPath)
      : null;
    if (summary?.status !== "PASS") {
      console.error(
        "FAIL: conversia WebP nu e făcută sau nu e PASS — rulează convert_capture_folder.mjs (STEP 1b) înainte de SEAL.",
      );
      process.exit(1);
    }
  }
  if (!(await pathExists(folder))) {
    console.error(`FAIL: folderul de capturi nu există: ${folder}`);
    process.exit(1);
  }

  // ---- 1. Detecție ---------------------------------------------------------
  const allFiles = await walkFilesRaw(folder);
  const systemPatterns = Array.isArray(config.system_file_patterns)
    ? config.system_file_patterns
    : undefined;
  const systemFiles = allFiles.filter((f) => isSystemFile(f, systemPatterns));
  const nonSystem = allFiles.filter((f) => !isSystemFile(f, systemPatterns));
  // Documentele operatorului din rădăcină (ex. fișa rulării în Word) se sigilează
  // și intră în arhivă, dar nu sunt capturi: primesc Document ID, nu Evidence ID.
  const operatorDocs = nonSystem
    .filter((f) => isOperatorDocument(f))
    .sort(compareNfc);
  const captures = nonSystem.filter((f) => !isOperatorDocument(f));
  const nonCaptureFiles = captures.filter((f) => !isCaptureFile(f));

  const folders = new Map(); // top-level folder (raw) -> info
  const rootFiles = [];
  for (const rel of captures) {
    const parts = rel.split("/");
    if (parts.length === 1) {
      rootFiles.push(rel);
      continue;
    }
    const top = parts[0];
    if (!folders.has(top)) folders.set(top, { files: 0, nested: false });
    const info = folders.get(top);
    info.files += 1;
    if (parts.length > 2) info.nested = true;
  }

  const folderReport = [];
  const blocking = [];
  const codeToFolders = new Map();
  for (const [name, info] of [...folders.entries()].sort((a, b) =>
    compareNfc(a[0], b[0]),
  )) {
    const { ordinal, normalized } = normalizeFolderName(name);
    const { code, basis } = detectSurface(name, config.surface_map);
    folderReport.push({
      folder: name,
      folder_nfc: name.normalize("NFC"),
      folder_ordinal: ordinal,
      normalized_name: normalized,
      mapped_surface: code,
      mapping_basis: basis,
      file_count: info.files,
      has_nested_subfolders: info.nested,
    });
    if (!code)
      blocking.push(
        `subfolder fără alias de suprafață: "${name}" (normalizat: "${normalized}")`,
      );
    else {
      if (!codeToFolders.has(code)) codeToFolders.set(code, []);
      codeToFolders.get(code).push(name);
    }
  }
  for (const [code, names] of codeToFolders) {
    if (names.length > 1)
      blocking.push(
        `mai multe subfoldere mapate la ${code}: ${names.join(", ")}`,
      );
  }
  for (const rel of rootFiles)
    blocking.push(
      `fișier direct în rădăcină, fără suprafață și fără extensie de document: "${rel.normalize("NFC")}"`,
    );
  for (const rel of nonCaptureFiles.filter((f) => f.includes("/"))) {
    blocking.push(
      `fișier care nu e captură (extensie neacceptată) într-un subfolder de suprafață: "${rel.normalize("NFC")}"`,
    );
  }

  const filenames = captures.map((rel) => rel.split("/").pop());
  const patternChoice = detectFilenamePattern(
    filenames,
    config.filename_timestamp?.pattern,
  );
  const tsFor = (filename) => {
    const lib = patternChoice.library;
    const ordered =
      patternChoice.mode === "SINGLE_PATTERN"
        ? lib.filter((p) => p.id === patternChoice.pattern_id)
        : lib;
    for (const p of ordered) {
      const r = applyFilenamePattern(p.re, filename);
      if (r) return { ...r, pattern_id: p.id };
    }
    return { raw: "NONE", parsed: "UNKNOWN", pattern_id: null };
  };
  const tsMatched = filenames.filter((f) => tsFor(f).pattern_id).length;

  const detection = {
    generated_at: new Date().toISOString(),
    capture_folder: config.capture_folder.path,
    capture_folder_abs: folder,
    status: blocking.length ? "NEEDS_USER_INPUT" : "OK",
    blocking_issues: blocking,
    subfolders: folderReport,
    surfaces_detected: [...codeToFolders.keys()],
    files_at_root: rootFiles,
    operator_documents: operatorDocs.map((f) => f.normalize("NFC")),
    system_files_excluded: systemFiles,
    capture_count: captures.length,
    filename_timestamp: {
      mode: patternChoice.mode,
      pattern_id: patternChoice.pattern_id,
      matched: tsMatched,
      total: filenames.length,
      source: "OS_FILENAME",
      note: "Ora din numele fișierului = ora locală a dispozitivului; nu e oră observată pe ecran.",
    },
  };
  await writeJson(P.detectionPath, detection);
  console.log(`Detecție → ${P.detectionPath}`);
  for (const f of folderReport) {
    console.log(
      `  ${f.folder.normalize("NFC").padEnd(24)} → ${f.mapped_surface ?? "??"} (${f.file_count} fișiere, ${f.mapping_basis ?? "fără potrivire"})`,
    );
  }
  console.log(
    `  tipar nume: ${patternChoice.pattern_id ?? "per fișier"} — ${tsMatched}/${filenames.length} potrivite`,
  );
  if (systemFiles.length)
    console.log(`  fișiere de sistem excluse: ${systemFiles.join(", ")}`);
  if (operatorDocs.length)
    console.log(
      `  documente ale operatorului (sigilate, fără Evidence ID): ${operatorDocs.map((f) => f.normalize("NFC")).join(", ")}`,
    );

  if (blocking.length) {
    console.error("\nSTOP — detecția cere decizia userului:");
    for (const b of blocking) console.error(`  - ${b}`);
    console.error(
      "Rezolvare: adaugă `surface_map` în config pentru subfolderele respective.",
    );
    await appendLog(P.logPath, {
      operation: "seal",
      status: "NEEDS_USER_INPUT",
      script: SCRIPT,
      warnings: blocking,
    });
    process.exit(3);
  }

  // ---- 2. Hash + Evidence ID ----------------------------------------------
  console.log("\nCalculez SHA-256 pentru fiecare captură...");
  const hashes = await hashAll(folder, captures);
  const docHashes = await hashAll(folder, operatorDocs);

  let previous = null;
  if (await pathExists(P.manifestPath))
    previous = await readJson(P.manifestPath);

  if (previous) {
    const prevDocs = previous.operator_documents ?? [];
    const same =
      previous.files.length === captures.length &&
      previous.files.every(
        (f) => hashes.get(f.original_relative_path)?.sha256 === f.sha256,
      ) &&
      prevDocs.length === operatorDocs.length &&
      prevDocs.every(
        (d) => docHashes.get(d.original_relative_path)?.sha256 === d.sha256,
      );
    if (
      same &&
      previous.archive_version === String(config.archive.version) &&
      (await pathExists(previous.archive_path))
    ) {
      const archSha = await sha256File(previous.archive_path);
      if (archSha === previous.archive_sha256) {
        console.log(
          "NO-OP: folderul corespunde manifestului existent, iar arhiva are hash-ul înregistrat.",
        );
        await appendLog(P.logPath, {
          operation: "seal",
          status: "NOOP",
          script: SCRIPT,
          output: { archive_sha256: archSha },
        });
        return;
      }
      console.error(
        "FAIL: arhiva existentă nu mai are hash-ul înregistrat la sigilare. Nu se suprascrie.",
      );
      process.exit(1);
    }
    if (previous.archive_version === String(config.archive.version)) {
      console.error(
        "FAIL: conținutul folderului diferă de manifestul sigilat pentru aceeași archive.version. " +
          "Incrementează archive.version; ID-urile existente se păstrează pentru perechile (cale, SHA-256) identice.",
      );
      process.exit(1);
    }
  }

  const prevIds = new Map(
    (previous?.files ?? []).map((f) => [
      `${f.original_relative_path}\u0000${f.sha256}`,
      f.evidence_id,
    ]),
  );
  const prevMax = Math.max(
    0,
    ...(previous?.files ?? []).map((f) =>
      parseInt(f.evidence_id.split("-E").pop(), 10),
    ),
  );
  const width = previous?.evidence_id_width ?? (captures.length > 999 ? 4 : 3);
  let next = prevMax + 1;

  const folderByName = new Map(folderReport.map((f) => [f.folder, f]));
  const files = captures.map((rel) => {
    const parts = rel.split("/");
    const top = parts.length > 1 ? parts[0] : null;
    const fr = top ? folderByName.get(top) : null;
    const h = hashes.get(rel);
    const key = `${rel}\u0000${h.sha256}`;
    const id =
      prevIds.get(key) ?? evidenceId(config.instance_id, next++, width);
    const filename = parts[parts.length - 1];
    const ts = tsFor(filename);
    return {
      evidence_id: id,
      original_relative_path: rel,
      relative_path_nfc: rel.normalize("NFC"),
      original_filename: filename,
      archive_surface_folder: top ?? "NOT_APPLICABLE",
      folder_ordinal: fr?.folder_ordinal ?? "NOT_APPLICABLE",
      mapped_surface: fr?.mapped_surface ?? "NOT_APPLICABLE",
      surface_mapping_basis: fr?.mapping_basis ?? "NOT_APPLICABLE",
      file_size_bytes: h.size,
      sha256: h.sha256,
      filename_timestamp_raw: ts.raw,
      filename_timestamp_pattern: ts.pattern_id ?? "NONE",
      filename_timestamp_parsed: ts.parsed,
    };
  });

  const documents = operatorDocs.map((rel, i) => ({
    document_id: documentId(config.instance_id, i + 1),
    original_relative_path: rel,
    relative_path_nfc: rel.normalize("NFC"),
    original_filename: rel,
    file_size_bytes: docHashes.get(rel).size,
    sha256: docHashes.get(rel).sha256,
    status: "OPERATOR_DOCUMENT",
  }));
  const archived = [
    ...files.map((f) => f.original_relative_path),
    ...documents.map((d) => d.original_relative_path),
  ];
  const expectedSha = new Map(
    [...files, ...documents].map((f) => [f.original_relative_path, f.sha256]),
  );

  // ---- 3. Zip ----------------------------------------------------------------
  if (await pathExists(P.archivePath)) {
    console.error(
      `FAIL: arhiva există deja și nu se suprascrie: ${P.archivePath}`,
    );
    process.exit(1);
  }
  if (await pathExists(P.archivePath + ".FAILED")) {
    console.error(
      `FAIL: există o sigilare eșuată anterior (${P.archivePath}.FAILED). Inspecteaz-o și șterge-o manual înainte de o nouă încercare.`,
    );
    process.exit(1);
  }
  await fs.mkdir(P.incomingDir, { recursive: true });
  console.log(`Creez arhiva: ${P.archivePath}`);
  const listInput = archived.join("\n") + "\n";
  const zipRes = await new Promise((resolve, reject) => {
    import("node:child_process").then(({ spawn }) => {
      const child = spawn("zip", ["-X", "-D", "-q", P.archivePath, "-@"], {
        cwd: folder,
      });
      let err = "";
      child.stderr.on("data", (d) => (err += d));
      child.on("error", reject);
      child.on("close", (code) => resolve({ code, err }));
      child.stdin.end(listInput, "utf8");
    });
  });
  if (zipRes.code !== 0) {
    console.error("FAIL: zip a eșuat:", zipRes.err);
    process.exit(1);
  }

  // ---- 4. Verificare ---------------------------------------------------------
  const verification = {};
  const t = await run("unzip", ["-t", "-q", P.archivePath]);
  verification.unzip_test = t.code === 0 ? "PASS" : "FAIL";

  const zipNames = await readZipEntryNames(P.archivePath);
  const expected = archived.map((rel) => Buffer.from(rel, "utf8"));
  verification.zip_entries_match =
    zipNames.length === expected.length &&
    zipNames.every((n, i) => n.equals(expected[i]))
      ? "PASS"
      : "FAIL";

  const verifyDir = path.join(P.workDir, ".seal-verify");
  await fs.rm(verifyDir, { recursive: true, force: true });
  await fs.mkdir(verifyDir, { recursive: true });
  const ux = await run("unzip", ["-q", P.archivePath, "-d", verifyDir]);
  let zipHashOk = ux.code === 0;
  if (zipHashOk) {
    for (const rel of archived) {
      const h = await sha256File(path.join(verifyDir, rel)).catch(() => null);
      if (h !== expectedSha.get(rel)) {
        zipHashOk = false;
        console.error(`  nepotrivire în zip: ${rel.normalize("NFC")}`);
      }
    }
  }
  await fs.rm(verifyDir, { recursive: true, force: true });
  verification.zip_hashes_match = zipHashOk ? "PASS" : "FAIL";

  const rehash = await hashAll(folder, archived);
  const nowFiles = (await walkFilesRaw(folder)).filter(
    (f) => !isSystemFile(f, systemPatterns),
  );
  verification.source_unchanged =
    nowFiles.length === archived.length &&
    archived.every((rel) => rehash.get(rel)?.sha256 === expectedSha.get(rel))
      ? "PASS"
      : "FAIL";

  const failed = Object.entries(verification).filter(([, v]) => v !== "PASS");
  if (failed.length) {
    await fs.rename(P.archivePath, P.archivePath + ".FAILED");
    console.error(
      `FAIL: verificarea sigilării: ${failed.map(([k]) => k).join(", ")}. Arhiva a fost redenumită .FAILED.`,
    );
    await appendLog(P.logPath, {
      operation: "seal",
      status: "FAIL",
      script: SCRIPT,
      warnings: failed.map(([k]) => k),
    });
    process.exit(1);
  }

  const archiveSha = await sha256File(P.archivePath);
  const manifest = {
    instance_id: config.instance_id,
    archive_version: String(config.archive.version),
    capture_folder: config.capture_folder.path,
    sealed_at: new Date().toISOString(),
    archive_path: P.archivePath,
    archive_sha256: archiveSha,
    evidence_id_width: width,
    capture_count: files.length,
    filename_timestamp: detection.filename_timestamp,
    verification,
    excluded_system_files: systemFiles.map((p) => ({
      path: p,
      status: "SYSTEM_FILE_EXCLUDED",
    })),
    operator_documents: documents,
    files,
  };
  await writeJson(P.manifestPath, manifest);
  await appendLog(P.logPath, {
    operation: "seal",
    status: "PASS",
    script: SCRIPT,
    input: folder,
    output: {
      archive: P.archivePath,
      archive_sha256: archiveSha,
      captures: files.length,
    },
  });

  console.log("\nSIGILARE OK");
  for (const [k, v] of Object.entries(verification))
    console.log(`  ${k}: ${v}`);
  console.log(
    `  capturi: ${files.length} (${files[0].evidence_id} … ${files[files.length - 1].evidence_id})`,
  );
  for (const d of documents)
    console.log(
      `  document al operatorului: ${d.document_id} ${d.relative_path_nfc}`,
    );
  console.log(`  archive_sha256: ${archiveSha}`);
  console.log(`  manifest: ${P.manifestPath}`);
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
