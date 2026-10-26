import { Fragment, useMemo, useState, type ReactNode } from "react";
import { Link } from "@/lib/router-compat";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import {
  findMdRun,
  formatMdDate,
  MD_AMBIGUOUS_FLAGS,
  MD_AMBIGUOUS_RELATIONS,
  MD_BLOCK_LABELS,
  MD_CLASS_LABELS,
  MD_ENTITY_TYPE_LABELS,
  MD_FAMILY_LABELS,
  MD_GITHUB_REPO,
  MD_HUB_PATH,
  MD_IDENTITY_FLAG_LABELS,
  MD_PROTOCOL_PATH,
  MD_PROVENANCE_LABELS,
  MD_RELATION_LABELS,
  MD_SURFACE_LABELS,
  MD_SURFACE_SHORT,
  mdLabel,
  mdRuns,
  mdSeries,
  mdUnion,
  type MdEntity,
  type MdUnionEntity,
  type MdExclusivity,
  type MdProvenance,
  type MdRun,
} from "@/data/market-discovery";
import { MD_HUB_DESCRIPTION, MD_HUB_TITLE } from "@/data/market-discovery/meta";

const SURFACE_ORDER = Object.keys(MD_SURFACE_LABELS);
const shortSurface = (s: string) => MD_SURFACE_SHORT[s] ?? s;
const nf = (n: number) => n.toLocaleString("ro-RO");
const pct = (part: number, total: number) =>
  total ? `${Math.round((part / total) * 100)}%` : "—";

/** Transformă `**text**` din rapoartele piloților în <strong>. */
const renderBold = (text: string): ReactNode[] =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );

// ───────────────────────────── piese comune ─────────────────────────────

const CandidateNotice = ({
  queryWord = "întrebare",
}: {
  queryWord?: string;
}) => (
  <div className="mt-10 border-l-2 border-foreground/40 bg-surface/50 px-5 py-4 text-sm leading-relaxed text-foreground/80 max-w-3xl">
    <p>
      <strong className="font-semibold text-foreground">
        Registrul Market Discovery: toate entitățile au statutul{" "}
        <code className="text-[13px]">UNVERIFIED</code>.
      </strong>{" "}
      „Entitate candidată” înseamnă doar că un nume a fost afișat ca posibil
      prestator sau instrument pentru o {queryWord}. Includerea în registru nu
      confirmă existența, activitatea comercială, eligibilitatea sau calitatea
      serviciilor unei entități și nu e o recomandare a AI Visibility Lab.
      Fiecare nume are proveniența observației și dovezile din pachet;
      identitățile ambigue sunt semnalate separat. Eligibilitatea se stabilește
      abia în Market Verification (
      <Link to={MD_PROTOCOL_PATH} className="underline underline-offset-4">
        AVL-MKT-001
      </Link>{" "}
      v0.10.0, §21, REQ-024 – REQ-026). Numele sunt redate așa cum au apărut în
      capturi.
    </p>
  </div>
);

const StatTiles = ({
  items,
}: {
  items: { value: string; label: string; note?: string }[];
}) => (
  <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
    {items.map((it) => (
      <div key={it.label} className="bg-background p-5 md:p-6">
        <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {it.label}
        </dt>
        <dd className="mt-2 font-serif text-3xl md:text-4xl tracking-tight tabular-nums">
          {it.value}
        </dd>
        {it.note && (
          <p className="mt-1 text-xs text-muted-foreground">{it.note}</p>
        )}
      </div>
    ))}
  </dl>
);

const SectionHead = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) => (
  <div className="max-w-3xl">
    <p className="eyebrow mb-4">{eyebrow}</p>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight tracking-tight text-balance">
      {title}
    </h2>
    {children && (
      <div className="mt-4 text-base text-muted-foreground leading-relaxed space-y-3">
        {children}
      </div>
    )}
  </div>
);

const Chip = ({
  children,
  strong = false,
}: {
  children: ReactNode;
  strong?: boolean;
}) => (
  <span
    className={`inline-block px-1.5 py-0.5 text-[11px] leading-none rounded-sm border ${
      strong
        ? "border-foreground/50 text-foreground"
        : "border-foreground/15 text-muted-foreground"
    }`}
  >
    {children}
  </span>
);

// ───────────────────────────── vizualizări ─────────────────────────────

/** Numeral + „de” când româna îl cere (20–99, 100, 120…): „91 de entități”. */
/** Cum se numesc interogările rulării: întrebări (DISCOVERY) sau expresii (USER-SHORT). */
const queryTerms = (run: MdRun) =>
  run.queries.every((q) => q.id.startsWith("Q-USER-SHORT-"))
    ? {
        one: "expresie",
        One: "Expresie",
        many: "expresii",
        manyArt: "expresiile",
        ManyArt: "Expresiile",
      }
    : {
        one: "întrebare",
        One: "Întrebare",
        many: "întrebări",
        manyArt: "întrebările",
        ManyArt: "Întrebările",
      };

const withDe = (n: number) =>
  n % 100 >= 20 || (n > 0 && n % 100 === 0) ? `${n} de` : `${n}`;

/** Matrice întrebare × suprafață: entități distincte în bază, intensitate pe o singură nuanță. */
const QuerySurfaceMatrix = ({ run }: { run: MdRun }) => {
  const max = Math.max(1, ...run.matrix.flatMap((r) => Object.values(r.cells)));
  const surfaceUnion = new Map(run.bySurface.map((s) => [s.group, s.entities]));
  const queryText = new Map(run.queries.map((q) => [q.id, q.text]));
  const queryUnionSum = run.matrix.reduce((a, r) => a + r.union, 0);
  const surfaceUnionSum = run.bySurface.reduce((a, s) => a + s.entities, 0);
  const t = queryTerms(run);
  return (
    <div className="mt-8">
      <div className="overflow-x-auto -mx-6 md:mx-0">
        <table className="w-full min-w-[688px] md:min-w-[640px] border-collapse text-sm tabular-nums">
          <caption className="sr-only">
            Entități candidate distincte în bază, pe {t.one} și suprafață
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-10 bg-background text-left font-medium text-[11px] uppercase tracking-[0.14em] text-muted-foreground pb-3 pl-6 md:pl-0 pr-3"
              >
                {t.One}
              </th>
              {SURFACE_ORDER.map((s) => (
                <th
                  key={s}
                  scope="col"
                  className="font-medium text-[11px] uppercase tracking-[0.08em] text-muted-foreground pb-3 px-1 text-center"
                >
                  {shortSurface(s)}
                </th>
              ))}
              <th
                scope="col"
                className="font-medium text-[11px] uppercase tracking-[0.14em] text-foreground pb-3 pl-3 pr-6 md:pr-0 text-right"
              >
                Reuniune
              </th>
            </tr>
          </thead>
          <tbody>
            {run.matrix.map((row) => (
              <tr key={row.query}>
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-background text-left font-normal pl-6 md:pl-0 pr-3 py-0.5 whitespace-nowrap"
                >
                  <span
                    title={queryText.get(row.query)}
                    className="cursor-help underline decoration-dotted decoration-foreground/30 underline-offset-4"
                  >
                    {row.query}
                  </span>
                </th>
                {SURFACE_ORDER.map((s) => {
                  const v = row.cells[s] ?? 0;
                  const a = v === 0 ? 0 : 0.08 + (v / max) * 0.72;
                  return (
                    <td key={s} className="p-[1px]">
                      <div
                        title={`${row.query} × ${MD_SURFACE_LABELS[s] ?? s}: ${v} entități`}
                        className={`h-9 flex items-center justify-center rounded-[3px] ${
                          a > 0.5
                            ? "text-background"
                            : v === 0
                              ? "text-muted-foreground/60"
                              : "text-foreground"
                        }`}
                        style={{
                          background:
                            v === 0
                              ? "transparent"
                              : `hsl(var(--foreground) / ${a.toFixed(2)})`,
                          outline:
                            v === 0
                              ? "1px dashed hsl(var(--foreground) / 0.15)"
                              : undefined,
                          outlineOffset: "-1px",
                        }}
                      >
                        {v}
                      </div>
                    </td>
                  );
                })}
                <td className="pl-3 pr-6 md:pr-0 text-right font-semibold">
                  {row.union}
                </td>
              </tr>
            ))}
            <tr className="border-t border-foreground/15">
              <th
                scope="row"
                className="sticky left-0 z-10 bg-background text-left font-semibold pl-6 md:pl-0 pr-3 pt-3"
              >
                Reuniune
              </th>
              {SURFACE_ORDER.map((s) => (
                <td key={s} className="text-center font-semibold pt-3">
                  {surfaceUnion.get(s) ?? "—"}
                </td>
              ))}
              <td className="pl-3 pr-6 md:pr-0 text-right font-semibold pt-3">
                {run.totals.entitiesBase}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Celulă = entități distincte numite pe acea suprafață la acea {t.one}.
        Celulele goale (0) sunt execuții complete în care nu a fost numit niciun
        candidat. Textul exact al fiecărei {t.many} e în lista de mai jos.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        <strong className="text-foreground font-medium">
          Reuniunile nu sunt sume.
        </strong>{" "}
        O entitate numită pe mai multe suprafețe sau la mai multe {t.many} e
        numărată o singură dată în reuniune. De aceea suma unui rând sau a unei
        coloane poate fi mai mare decât reuniunea lui, iar cele{" "}
        {withDe(run.totals.entitiesBase)} entități distincte ale rulării sunt
        mai puține decât suma reuniunilor pe {t.many} ({queryUnionSum}) sau pe
        suprafețe ({surfaceUnionSum}).
      </p>
    </div>
  );
};

/** Bare orizontale: entități pe grup, cu partea exclusivă evidențiată. */
const ExclusivityBars = ({
  rows,
  labelFor,
  total,
  queryWord = "întrebare",
}: {
  rows: MdExclusivity[];
  labelFor: (g: string) => string;
  total: number;
  queryWord?: string;
}) => {
  const max = Math.max(1, ...rows.map((r) => r.entities));
  return (
    <div>
      <div
        className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground mb-4"
        aria-hidden="true"
      >
        <span className="inline-flex items-center gap-1.5">
          <span
            className="inline-block w-3 h-3 rounded-[2px]"
            style={{ background: "hsl(var(--foreground) / 0.8)" }}
          />
          Exclusive (doar aici)
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            className="inline-block w-3 h-3 rounded-[2px]"
            style={{ background: "hsl(var(--foreground) / 0.22)" }}
          />
          Găsite și în altă parte
        </span>
      </div>
      <ul className="space-y-2.5">
        {rows.map((r) => {
          const shared = r.entities - r.exclusive;
          return (
            <li
              key={r.group}
              className="grid grid-cols-[7.5rem_1fr_auto] md:grid-cols-[10rem_1fr_auto] items-center gap-3 text-sm"
            >
              <span className="truncate" title={labelFor(r.group)}>
                {labelFor(r.group)}
              </span>
              <span
                className="flex h-4 gap-[2px]"
                title={`${labelFor(r.group)}: ${r.entities} entități, ${r.exclusive} exclusive (${pct(r.exclusive, r.entities)})`}
              >
                {r.exclusive > 0 && (
                  <span
                    className="h-full rounded-l-[3px]"
                    style={{
                      width: `${(r.exclusive / max) * 100}%`,
                      background: "hsl(var(--foreground) / 0.8)",
                    }}
                  />
                )}
                {shared > 0 && (
                  <span
                    className={`h-full rounded-r-[3px] ${r.exclusive === 0 ? "rounded-l-[3px]" : ""}`}
                    style={{
                      width: `${(shared / max) * 100}%`,
                      background: "hsl(var(--foreground) / 0.22)",
                    }}
                  />
                )}
              </span>
              <span className="tabular-nums text-right text-muted-foreground whitespace-nowrap">
                <span className="text-foreground font-medium">
                  {r.entities}
                </span>{" "}
                · {r.exclusive} excl.
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-xs text-muted-foreground">
        Exclusiv = apare doar în acest grup, în nicio altă {queryWord} sau
        suprafață din rulare. Reuniunea rulării: {withDe(total)} entități, nu
        suma barelor ({rows.reduce((a, r) => a + r.entities, 0)}): o entitate
        găsită în mai multe grupuri apare în fiecare bară, dar e numărată o
        singură dată în reuniune.
      </p>
    </div>
  );
};

// ───────────────────────────── explorator entități ─────────────────────────────

type SortKey = "cells" | "name" | "surfaces" | "queries";

/** Statutul din registrul Market Discovery (AVL-MKT-001 §21.1). */
const StatusBadge = () => (
  <span
    className="inline-block px-1.5 py-0.5 text-[10px] leading-none tracking-[0.08em] rounded-sm border border-dashed border-foreground/40 text-foreground/80 font-mono align-middle"
    title="Identificată în Market Discovery; nu a trecut încă prin Market Verification (AVL-MKT-001 §21.1)"
  >
    UNVERIFIED
  </span>
);

const parseFlags = (v: string | null) =>
  (v ?? "")
    .split(";")
    .map((f) => f.trim())
    .filter(Boolean)
    .map((f) => {
      const [code = "", ...rest] = f.split(":");
      return { code, target: rest.join(":") || null };
    });

const parseRelations = (v: string | null) =>
  [...(v ?? "").matchAll(/(REL-\d+)\s+(\S+)\s+([←→])\s+(CE-\d+)/g)].map(
    (m) => ({ id: m[1] ?? "", type: m[2] ?? "", other: m[4] ?? "" }),
  );

/** Semnalele de identitate și relațiile observate (AVL-MKT-001 REQ-026). */
const IdentityNotes = ({ entity, run }: { entity: MdEntity; run: MdRun }) => {
  const byKey = new Map(run.entities.map((e) => [e.key, e.name]));
  const byId = new Map(run.entities.map((e) => [e.id, e.name]));
  const flags = parseFlags(entity.identityFlags);
  const relations = parseRelations(entity.relations);
  if (!flags.length && !relations.length) return null;
  const ambiguous =
    flags.some((f) => MD_AMBIGUOUS_FLAGS.has(f.code)) ||
    relations.some((r) => MD_AMBIGUOUS_RELATIONS.has(r.type));
  const name = (t: string | null) => (t ? (byKey.get(t) ?? t) : "");
  return (
    <p className="text-xs text-muted-foreground">
      {ambiguous && (
        <strong className="font-semibold text-foreground/80">
          Identitate de verificat:{" "}
        </strong>
      )}
      {[
        ...flags.map(
          (f) =>
            `${MD_IDENTITY_FLAG_LABELS[f.code] ?? f.code}${f.target ? ` ${name(f.target)}` : ""}`,
        ),
        ...relations
          .filter(
            (r) =>
              !flags.some(
                (f) => f.target && byKey.get(f.target) === byId.get(r.other),
              ),
          )
          .map(
            (r) =>
              `${MD_RELATION_LABELS[r.type] ?? r.type}: ${byId.get(r.other) ?? r.other}`,
          ),
      ].join(" · ")}
    </p>
  );
};

const provenancePlace = (p: MdProvenance) =>
  [
    MD_PROVENANCE_LABELS[p.provenance] ?? p.provenance,
    p.block && p.block !== "ORGANIC"
      ? (MD_BLOCK_LABELS[p.block] ?? p.block)
      : null,
  ]
    .filter(Boolean)
    .join(", ");

/**
 * Proveniența fiecărei observații: de unde vine numele și ce dovadă îl susține
 * (REQ-024). Tabelul se randează abia la deschidere: cu toate rândurile în
 * HTML, pagina pilotului 3 ar depăși 1,5 MB.
 */
const ProvenanceDetails = ({
  entity,
  run,
}: {
  entity: MdEntity;
  run: MdRun;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <details
      className="min-w-0 md:col-span-3 mt-1"
      onToggle={(ev) => setOpen(ev.currentTarget.open)}
    >
      <summary className="cursor-pointer text-xs text-muted-foreground hover:text-foreground w-fit">
        Proveniență și dovezi · {entity.provenance.length}{" "}
        {entity.provenance.length === 1 ? "observație" : "observații"}
      </summary>
      {open && <ProvenanceTable entity={entity} run={run} />}
    </details>
  );
};

const ProvenanceTable = ({ entity, run }: { entity: MdEntity; run: MdRun }) => (
  <div className="mt-2 overflow-x-auto">
    <table className="w-full min-w-[640px] text-xs border-collapse">
      <thead className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
        <tr className="border-b border-foreground/15">
          {[
            queryTerms(run).One,
            "Suprafață",
            "Unde",
            "Poz.",
            "URL afișat",
            "Dovadă",
          ].map((h) => (
            <th
              key={h}
              scope="col"
              className="text-left font-medium py-1.5 pr-3"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {entity.provenance.map((p, i) => (
          <tr key={i} className="border-b border-foreground/5 align-top">
            <td className="py-1.5 pr-3 whitespace-nowrap">{p.query}</td>
            <td className="py-1.5 pr-3 whitespace-nowrap">
              {MD_SURFACE_SHORT[p.surface] ?? p.surface}
            </td>
            <td className="py-1.5 pr-3">
              {provenancePlace(p)}
              {p.recommended && " · numită ca recomandare"}
              {p.erratum && ` · corectat prin ${p.erratum}`}
            </td>
            <td className="py-1.5 pr-3 tabular-nums">{p.position ?? "—"}</td>
            <td className="py-1.5 pr-3 break-all text-muted-foreground">
              {p.url ?? "nevizibil"}
            </td>
            <td className="py-1.5 font-mono whitespace-nowrap">
              {p.evidence.map((id, j) => (
                <span
                  key={id}
                  title={`SHA-256 ${run.evidenceSha[id.replace(/-AIO$/, "")] ?? "necunoscut"}`}
                >
                  {j > 0 && ", "}
                  {id}
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const EntityExplorer = ({ run }: { run: MdRun }) => {
  const [q, setQ] = useState("");
  const [surface, setSurface] = useState("");
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [includeExtended, setIncludeExtended] = useState(false);
  const [sort, setSort] = useState<SortKey>("cells");
  const [showAll, setShowAll] = useState(false);

  const rows = useMemo(() => {
    const needle = q.trim().toLocaleLowerCase("ro-RO");
    const filtered = run.entities.filter(
      (e) =>
        (includeExtended || e.base) &&
        (!needle || e.name.toLocaleLowerCase("ro-RO").includes(needle)) &&
        (!surface ||
          (includeExtended ? e.surfacesExtended : e.surfaces).includes(
            surface,
          )) &&
        (!query || e.queries.includes(query)) &&
        (!type || e.type === type),
    );
    const by: Record<SortKey, (a: MdEntity, b: MdEntity) => number> = {
      cells: (a, b) =>
        b.cells - a.cells ||
        b.surfaces.length - a.surfaces.length ||
        a.name.localeCompare(b.name, "ro"),
      surfaces: (a, b) =>
        b.surfaces.length - a.surfaces.length || b.cells - a.cells,
      queries: (a, b) =>
        b.queries.length - a.queries.length || b.cells - a.cells,
      name: (a, b) => a.name.localeCompare(b.name, "ro"),
    };
    return [...filtered].sort(by[sort]);
  }, [run.entities, q, surface, query, type, includeExtended, sort]);

  const select =
    "h-9 px-2 text-base md:text-sm bg-background border border-foreground/20 rounded-sm focus:outline-none focus:border-foreground/60";
  const SortBtn = ({ k, children }: { k: SortKey; children: ReactNode }) => (
    <button
      type="button"
      onClick={() => setSort(k)}
      aria-pressed={sort === k}
      className={`-my-2 py-2 uppercase tracking-[0.12em] ${sort === k ? "text-foreground underline underline-offset-4" : "hover:text-foreground"}`}
    >
      {children}
    </button>
  );

  return (
    <div className="mt-8">
      <div
        className="flex flex-wrap gap-2 items-center"
        role="group"
        aria-label="Filtre entități"
      >
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Caută un nume"
          aria-label="Caută un nume"
          className={`${select} w-full sm:w-56`}
        />
        <select
          aria-label="Suprafață"
          value={surface}
          onChange={(e) => setSurface(e.target.value)}
          className={select}
        >
          <option value="">Toate suprafețele</option>
          {SURFACE_ORDER.map((s) => (
            <option key={s} value={s}>
              {MD_SURFACE_LABELS[s]}
            </option>
          ))}
        </select>
        <select
          aria-label={queryTerms(run).One}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={select}
        >
          <option value="">Toate {queryTerms(run).manyArt}</option>
          {run.queries.map((qq) => (
            <option key={qq.id} value={qq.id}>
              {qq.id}
            </option>
          ))}
        </select>
        <select
          aria-label="Tip"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={select}
        >
          <option value="">Toate tipurile</option>
          {Object.entries(MD_ENTITY_TYPE_LABELS).map(([k, v]) => (
            <option key={k} value={k}>
              {v}
            </option>
          ))}
        </select>
        <label className="inline-flex items-center gap-2 text-sm text-muted-foreground ml-1">
          <input
            type="checkbox"
            checked={includeExtended}
            onChange={(e) => setIncludeExtended(e.target.checked)}
          />
          Include modulele SERP
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 text-[11px] text-muted-foreground">
        <p aria-live="polite">
          {rows.length} {rows.length === 1 ? "entitate" : "entități"}
        </p>
        <p className="flex gap-3">
          Sortează: <SortBtn k="cells">celule</SortBtn>
          <SortBtn k="surfaces">suprafețe</SortBtn>
          <SortBtn k="queries">{queryTerms(run).many}</SortBtn>
          <SortBtn k="name">nume</SortBtn>
        </p>
      </div>

      <ul className="mt-3 border-t border-foreground/10">
        {/* Toate rândurile sunt în HTML (și pentru crawlere); peste 25 sunt doar ascunse. */}
        {rows.map((e, i) => (
          <li
            key={e.id}
            hidden={!showAll && i >= 25}
            className="border-b border-foreground/10 py-3 grid grid-cols-[minmax(0,1fr)] gap-x-4 gap-y-1.5 md:grid-cols-[minmax(0,14rem)_1fr_auto] md:items-center"
          >
            <div className="min-w-0">
              <p className="font-medium flex items-center gap-2 min-w-0">
                <span className="truncate" title={e.name}>
                  {e.name}
                </span>
                <StatusBadge />
              </p>
              <p className="text-xs text-muted-foreground">
                {MD_ENTITY_TYPE_LABELS[e.type] ?? e.type} ·{" "}
                {MD_CLASS_LABELS[e.class] ?? e.class}
                {!e.base && " · doar module SERP"}
              </p>
              <IdentityNotes entity={e} run={run} />
            </div>
            <div className="flex flex-wrap gap-1">
              {SURFACE_ORDER.filter(
                (s) => e.surfaces.includes(s) || e.surfacesExtended.includes(s),
              ).map((s) => (
                <Chip key={s} strong={e.recommendedOn.includes(s)}>
                  {shortSurface(s)}
                </Chip>
              ))}
            </div>
            <p
              className="text-xs text-muted-foreground tabular-nums md:text-right whitespace-nowrap"
              title={e.queries.join(", ")}
            >
              {e.queries.length}{" "}
              {e.queries.length === 1
                ? queryTerms(run).one
                : queryTerms(run).many}{" "}
              · {e.cells} {e.cells === 1 ? "celulă" : "celule"}
            </p>
            <ProvenanceDetails entity={e} run={run} />
          </li>
        ))}
      </ul>
      {rows.length > 25 && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="mt-5 link-underline text-sm font-medium"
        >
          {showAll ? "Arată primele 25" : `Arată toate cele ${rows.length}`}
        </button>
      )}
      <p className="mt-4 text-xs text-muted-foreground max-w-3xl">
        <code>UNVERIFIED</code> = identificată în Market Discovery, fără Market
        Verification. Chenar accentuat = suprafața AI a numit entitatea explicit
        ca recomandare. Celulă = o combinație {queryTerms(run).one} × suprafață.
        Dovada = Evidence ID-ul capturii din pachet (SHA-256 la trecerea cu
        mouse-ul și în capture index); <code>-AIO</code> = blocul AI Overview
        din aceeași captură. Numele sunt etichetele de lucru din registrul
        pilotului, după deduplicarea pe regulile U0–U3; perechile nerezolvate
        (aceeași entitate? persoană ↔ firmă? produs ↔ dezvoltator?) rămân
        separate până la Verification.
      </p>
    </div>
  );
};

// ───────────────────────────── seria cumulată (hub) ─────────────────────────────

/**
 * Matricea interogare × suprafață a tuturor rulărilor, una sub alta. Celulele
 * rămân cele ale rulării: aceeași întrebare rulată în doi piloți apare pe două
 * rânduri, nu adunată.
 */
const SeriesMatrix = () => {
  const max = Math.max(
    1,
    ...mdRuns.flatMap((r) => r.matrix.flatMap((m) => Object.values(m.cells))),
  );
  return (
    <div className="mt-8">
      <div className="overflow-x-auto -mx-6 md:mx-0">
        <table className="w-full min-w-[720px] md:min-w-[680px] border-collapse text-sm tabular-nums">
          <caption className="sr-only">
            Entități candidate distincte în bază, pe interogare și suprafață, în
            fiecare pilot
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-10 bg-background text-left font-medium text-[11px] uppercase tracking-[0.14em] text-muted-foreground pb-3 pl-6 md:pl-0 pr-3"
              >
                Interogare
              </th>
              {SURFACE_ORDER.map((s) => (
                <th
                  key={s}
                  scope="col"
                  className="font-medium text-[11px] uppercase tracking-[0.08em] text-muted-foreground pb-3 px-1 text-center"
                >
                  {shortSurface(s)}
                </th>
              ))}
              <th
                scope="col"
                className="font-medium text-[11px] uppercase tracking-[0.14em] text-foreground pb-3 pl-3 pr-6 md:pr-0 text-right"
              >
                Reuniune
              </th>
            </tr>
          </thead>
          {mdRuns.map((run) => {
            const queryText = new Map(run.queries.map((q) => [q.id, q.text]));
            return (
              <tbody key={run.slug}>
                <tr>
                  <th
                    scope="rowgroup"
                    colSpan={SURFACE_ORDER.length + 2}
                    className="text-left font-normal pt-6 pb-2 pl-6 md:pl-0"
                  >
                    <Link
                      to={run.path}
                      className="text-[11px] uppercase tracking-[0.18em] font-medium text-foreground hover:underline underline-offset-4"
                    >
                      {run.label}
                    </Link>
                    <span className="ml-2 text-xs text-muted-foreground">
                      {run.runDates} · {run.totals.entitiesBase} entități în
                      bază
                    </span>
                  </th>
                </tr>
                {run.matrix.map((row) => (
                  <tr key={row.query}>
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-background text-left font-normal pl-6 md:pl-0 pr-3 py-0.5 whitespace-nowrap"
                    >
                      <span
                        title={queryText.get(row.query)}
                        className="cursor-help underline decoration-dotted decoration-foreground/30 underline-offset-4"
                      >
                        {row.query}
                      </span>
                    </th>
                    {SURFACE_ORDER.map((s) => {
                      const v = row.cells[s] ?? 0;
                      const a = v === 0 ? 0 : 0.08 + (v / max) * 0.72;
                      return (
                        <td key={s} className="p-[1px]">
                          <div
                            title={`${run.label}, ${row.query} × ${MD_SURFACE_LABELS[s] ?? s}: ${v} entități`}
                            className={`h-8 flex items-center justify-center rounded-[3px] ${
                              a > 0.5
                                ? "text-background"
                                : v === 0
                                  ? "text-muted-foreground/60"
                                  : "text-foreground"
                            }`}
                            style={{
                              background:
                                v === 0
                                  ? "transparent"
                                  : `hsl(var(--foreground) / ${a.toFixed(2)})`,
                              outline:
                                v === 0
                                  ? "1px dashed hsl(var(--foreground) / 0.15)"
                                  : undefined,
                              outlineOffset: "-1px",
                            }}
                          >
                            {v}
                          </div>
                        </td>
                      );
                    })}
                    <td className="pl-3 pr-6 md:pr-0 text-right font-semibold">
                      {row.union}
                    </td>
                  </tr>
                ))}
              </tbody>
            );
          })}
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground max-w-3xl">
        Celulă = entități distincte în bază numite pe acea suprafață la acea
        interogare, în pilotul respectiv. Piloții 1 și 2 au rulat aceleași patru
        întrebări, din locuri diferite; rândurile lor rămân separate, nu
        adunate. Textul fiecărei interogări apare la trecerea cu mouse-ul pe ID,
        iar proveniența fiecărui nume e pe pagina pilotului.
      </p>
    </div>
  );
};

type UnionSortKey = "runs" | "surfaces" | "queries" | "name";

/** Lista unică a entităților candidate din toți piloții (Candidate Set cumulat). */
const UnionExplorer = () => {
  const [q, setQ] = useState("");
  const [run, setRun] = useState("");
  const [surface, setSurface] = useState("");
  const [type, setType] = useState("");
  const [includeExtended, setIncludeExtended] = useState(false);
  const [sort, setSort] = useState<UnionSortKey>("runs");
  const [showAll, setShowAll] = useState(false);

  const rows = useMemo(() => {
    const needle = q.trim().toLocaleLowerCase("ro-RO");
    const filtered = mdUnion.filter(
      (e) =>
        (includeExtended || e.base) &&
        (!needle || e.name.toLocaleLowerCase("ro-RO").includes(needle)) &&
        (!run ||
          e.runs.some((r) => r.slug === run && (includeExtended || r.base))) &&
        (!surface ||
          (includeExtended ? e.surfacesExtended : e.surfaces).includes(
            surface,
          )) &&
        (!type || e.type === type),
    );
    const byName = (a: MdUnionEntity, b: MdUnionEntity) =>
      a.name.localeCompare(b.name, "ro");
    const by: Record<
      UnionSortKey,
      (a: MdUnionEntity, b: MdUnionEntity) => number
    > = {
      runs: (a, b) =>
        b.runs.length - a.runs.length ||
        b.surfaces.length - a.surfaces.length ||
        byName(a, b),
      surfaces: (a, b) => b.surfaces.length - a.surfaces.length || byName(a, b),
      queries: (a, b) => b.queries.length - a.queries.length || byName(a, b),
      name: byName,
    };
    return [...filtered].sort(by[sort]);
  }, [q, run, surface, type, includeExtended, sort]);

  const select =
    "h-9 px-2 text-base md:text-sm bg-background border border-foreground/20 rounded-sm focus:outline-none focus:border-foreground/60";
  const SortBtn = ({
    k,
    children,
  }: {
    k: UnionSortKey;
    children: ReactNode;
  }) => (
    <button
      type="button"
      onClick={() => setSort(k)}
      aria-pressed={sort === k}
      className={`-my-2 py-2 uppercase tracking-[0.12em] ${sort === k ? "text-foreground underline underline-offset-4" : "hover:text-foreground"}`}
    >
      {children}
    </button>
  );

  return (
    <div className="mt-8">
      <div
        className="flex flex-wrap gap-2 items-center"
        role="group"
        aria-label="Filtre entități"
      >
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Caută un nume"
          aria-label="Caută un nume"
          className={`${select} w-full sm:w-56`}
        />
        <select
          aria-label="Pilot"
          value={run}
          onChange={(e) => setRun(e.target.value)}
          className={select}
        >
          <option value="">Toți piloții</option>
          {mdRuns.map((r) => (
            <option key={r.slug} value={r.slug}>
              {r.label}
            </option>
          ))}
        </select>
        <select
          aria-label="Suprafață"
          value={surface}
          onChange={(e) => setSurface(e.target.value)}
          className={select}
        >
          <option value="">Toate suprafețele</option>
          {SURFACE_ORDER.map((s) => (
            <option key={s} value={s}>
              {MD_SURFACE_LABELS[s]}
            </option>
          ))}
        </select>
        <select
          aria-label="Tip"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={select}
        >
          <option value="">Toate tipurile</option>
          {Object.entries(MD_ENTITY_TYPE_LABELS).map(([k, v]) => (
            <option key={k} value={k}>
              {v}
            </option>
          ))}
        </select>
        <label className="inline-flex items-center gap-2 text-sm text-muted-foreground ml-1">
          <input
            type="checkbox"
            checked={includeExtended}
            onChange={(e) => setIncludeExtended(e.target.checked)}
          />
          Include modulele SERP
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 text-[11px] text-muted-foreground">
        <p aria-live="polite">
          {rows.length} {rows.length === 1 ? "entitate" : "entități"}
        </p>
        <p className="flex gap-3">
          Sortează: <SortBtn k="runs">piloți</SortBtn>
          <SortBtn k="surfaces">suprafețe</SortBtn>
          <SortBtn k="queries">interogări</SortBtn>
          <SortBtn k="name">nume</SortBtn>
        </p>
      </div>

      <ul className="mt-3 border-t border-foreground/10">
        {/* Toate rândurile sunt în HTML (și pentru crawlere); peste 25 sunt doar ascunse. */}
        {rows.map((e, i) => {
          const ambiguous = e.identityFlags.some((f) =>
            MD_AMBIGUOUS_FLAGS.has(f.split(":")[0] ?? ""),
          );
          return (
            <li
              key={e.key}
              hidden={!showAll && i >= 25}
              className="border-b border-foreground/10 py-3 grid grid-cols-[minmax(0,1fr)] gap-x-4 gap-y-1.5 md:grid-cols-[minmax(0,14rem)_1fr_auto] md:items-center"
            >
              <div className="min-w-0">
                <p className="font-medium flex items-center gap-2 min-w-0">
                  <span className="truncate" title={e.name}>
                    {e.name}
                  </span>
                  <StatusBadge />
                </p>
                <p className="text-xs text-muted-foreground">
                  {MD_ENTITY_TYPE_LABELS[e.type] ?? e.type} ·{" "}
                  {MD_CLASS_LABELS[e.class] ?? e.class}
                  {!e.base && " · doar module SERP"}
                  {ambiguous && (
                    <strong className="font-semibold text-foreground/80">
                      {" "}
                      · identitate de verificat
                    </strong>
                  )}
                </p>
                <p className="text-xs text-muted-foreground">
                  {e.runs.map((r, j) => (
                    <Fragment key={r.slug}>
                      {j > 0 && " · "}
                      <Link
                        to={r.path}
                        title={`${r.id} în registrul pilotului${r.base ? "" : " (doar în modulele SERP)"}`}
                        className={`underline underline-offset-4 decoration-foreground/30 hover:text-foreground ${r.base ? "" : "opacity-60"}`}
                      >
                        {r.label.replace("Pilotul ", "P")}
                      </Link>
                    </Fragment>
                  ))}
                </p>
              </div>
              <div className="flex flex-wrap gap-1">
                {SURFACE_ORDER.filter(
                  (s) =>
                    e.surfaces.includes(s) || e.surfacesExtended.includes(s),
                ).map((s) => (
                  <Chip key={s} strong={e.recommendedOn.includes(s)}>
                    {shortSurface(s)}
                  </Chip>
                ))}
              </div>
              <p
                className="text-xs text-muted-foreground tabular-nums md:text-right whitespace-nowrap"
                title={e.queries.join(", ")}
              >
                {e.queries.length}{" "}
                {e.queries.length === 1 ? "interogare" : "interogări"} ·{" "}
                {e.observations}{" "}
                {e.observations === 1 ? "observație" : "observații"}
              </p>
            </li>
          );
        })}
      </ul>
      {rows.length > 25 && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="mt-5 link-underline text-sm font-medium"
        >
          {showAll ? "Arată primele 25" : `Arată toate cele ${rows.length}`}
        </button>
      )}
      <p className="mt-4 text-xs text-muted-foreground max-w-3xl">
        Lista unește registrele piloților pe cheia de deduplicare, nu pe nume: o
        entitate găsită în mai mulți piloți apare o singură dată, cu eticheta
        din cel mai recent pilot. P1, P2, P3, P5 = piloții în care a fost găsită
        (estompat = acolo doar în modulele SERP); fiecare duce la pagina
        pilotului, cu proveniența și dovezile. Chenar accentuat = suprafața AI a
        numit-o explicit ca recomandare. Perechile nerezolvate (aceeași
        entitate? persoană ↔ firmă? produs ↔ dezvoltator?) rămân separate până
        la Market Verification.
      </p>
    </div>
  );
};

// ───────────────────────────── tabele de context ─────────────────────────────

const ExecutionsTable = ({ run }: { run: MdRun }) => (
  <details className="mt-6 group">
    <summary className="cursor-pointer text-sm font-medium link-underline w-fit">
      Toate cele {run.executions.length} de execuții
    </summary>
    <div className="mt-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
      <table className="w-full min-w-[720px] text-sm tabular-nums border-collapse">
        <thead className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          <tr className="border-b border-foreground/15">
            {[
              queryTerms(run).One,
              "Suprafață",
              "Capturi",
              "Observații",
              "Incluse",
              "Entități",
              "Relevanță",
              "Rezultat",
            ].map((h) => (
              <th
                key={h}
                scope="col"
                className="text-left font-medium py-2 pr-3"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {run.executions.map((e) => (
            <tr
              key={`${e.query}-${e.surface}`}
              className="border-b border-foreground/10"
            >
              <td className="py-1.5 pr-3">{e.query}</td>
              <td className="py-1.5 pr-3">
                {MD_SURFACE_LABELS[e.surface] ?? e.surface}
                {e.aiOverview ? " · AIO" : ""}
              </td>
              <td className="py-1.5 pr-3">{e.captures}</td>
              <td className="py-1.5 pr-3">{e.observations}</td>
              <td className="py-1.5 pr-3">{e.include}</td>
              <td className="py-1.5 pr-3">
                {e.entitiesBase}
                {e.entitiesExtended !== e.entitiesBase
                  ? ` (${e.entitiesExtended})`
                  : ""}
              </td>
              <td className="py-1.5 pr-3">{mdLabel(e.relevance)}</td>
              <td className="py-1.5 pr-3">{mdLabel(e.analysis)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-xs text-muted-foreground">
        AIO = execuție Google cu AI Overview capturat. Entități = în bază; în
        paranteză, cu modulele SERP. Toate execuțiile sunt complete.
      </p>
    </div>
  </details>
);

const ConditionsTable = ({ run }: { run: MdRun }) => (
  <div className="mt-6 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
    <table className="w-full min-w-[560px] text-sm border-collapse">
      <thead className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
        <tr className="border-b border-foreground/15">
          {[
            "Suprafață",
            "Capturi",
            "Cont",
            "Fereastră privată",
            "Locația afișată",
          ].map((h) => (
            <th key={h} scope="col" className="text-left font-medium py-2 pr-3">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {run.surfaces.map((s) => (
          <tr key={s.id} className="border-b border-foreground/10">
            <td className="py-1.5 pr-3">{MD_SURFACE_LABELS[s.id] ?? s.id}</td>
            <td className="py-1.5 pr-3 tabular-nums">{s.captures}</td>
            <td className="py-1.5 pr-3">{mdLabel(s.accountState)}</td>
            <td className="py-1.5 pr-3">{mdLabel(s.privateWindow)}</td>
            <td className="py-1.5 pr-3 text-muted-foreground">
              {s.locationDisplayed.join("; ") || "—"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="mt-3 text-xs text-muted-foreground">
      „Nedeclarat” = câmpul nu apare în fișa rulării. Condițiile observate
      efectiv în fiecare captură sunt în fișierul session-context al pachetului.
    </p>
  </div>
);

const RunFacts = ({ run }: { run: MdRun }) => {
  const loc = [
    ...new Set(run.sessions.map((s) => s.location).filter(Boolean)),
  ].join("; ");
  const facts: [string, ReactNode][] = [
    [
      "Instanță",
      <code key="i" className="text-[13px]">
        {run.instanceId}
      </code>,
    ],
    ["Rulare", run.runDates],
    ["Locație", loc || "nedeclarat"],
    [
      `Set de ${queryTerms(run).many}`,
      <code key="q" className="text-[13px]">
        {run.querySetId}
      </code>,
    ],
    ["Pachet de dovezi", `v${run.packageVersion}, înghețat`],
    ["Raport", `v${run.reportVersion}, document de lucru`],
    [
      "Protocol",
      <Link
        key="p"
        to={MD_PROTOCOL_PATH}
        className="underline underline-offset-4"
      >
        AVL-MKT-001 (draft)
      </Link>,
    ],
    ["Operator", "Alex Matescu"],
  ];
  return (
    <dl className="mt-10 grid sm:grid-cols-2 gap-x-8 border-t border-foreground/10 max-w-3xl">
      {facts.map(([k, v]) => (
        <div
          key={k}
          className="flex justify-between gap-4 border-b border-foreground/10 py-2.5 text-sm"
        >
          <dt className="text-muted-foreground">{k}</dt>
          <dd className="text-right">{v}</dd>
        </div>
      ))}
    </dl>
  );
};

const RunNav = ({ run }: { run: MdRun }) => {
  const i = mdRuns.findIndex((r) => r.slug === run.slug);
  const prev = mdRuns[i - 1];
  const next = mdRuns[i + 1];
  return (
    <nav
      aria-label="Rulările seriei"
      className="mt-20 grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10"
    >
      {prev ? (
        <Link
          to={prev.path}
          className="bg-background p-6 hover:bg-surface/60 transition-colors"
        >
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground inline-flex items-center gap-1.5">
            <ArrowLeft className="h-3 w-3" /> Rularea anterioară
          </span>
          <span className="block mt-2 font-serif text-lg">{prev.label}</span>
        </Link>
      ) : (
        <Link
          to={MD_HUB_PATH}
          className="bg-background p-6 hover:bg-surface/60 transition-colors"
        >
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Seria
          </span>
          <span className="block mt-2 font-serif text-lg">
            Toate rulările Market Discovery
          </span>
        </Link>
      )}
      {next ? (
        <Link
          to={next.path}
          className="bg-background p-6 hover:bg-surface/60 transition-colors sm:text-right"
        >
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground inline-flex items-center gap-1.5">
            Rularea următoare <ArrowRight className="h-3 w-3" />
          </span>
          <span className="block mt-2 font-serif text-lg">{next.label}</span>
        </Link>
      ) : (
        <div className="bg-background p-6 sm:text-right">
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Urmează
          </span>
          <span className="block mt-2 font-serif text-lg text-muted-foreground">
            Pilotul de Verification, apoi prima rulare oficială
          </span>
        </div>
      )}
    </nav>
  );
};

// ───────────────────────────── pagina unei rulări ─────────────────────────────

export const MarketDiscoveryRun = ({ slug }: { slug: string }) => {
  const run = findMdRun(slug);
  if (!run) return null;
  const familyAi = run.byFamily.find((f) => f.group === "AI_SURFACES");
  const queryLabel = (id: string) => id;
  const t = queryTerms(run);

  return (
    <div>
      <Seo
        title={`${run.seoTitle} | AI Visibility Lab`}
        description={run.description}
      />

      {/* Antet + fișa rulării */}
      <section className="border-b border-foreground/10">
        <div className="container-editorial py-20 md:py-24 max-w-5xl">
          <Link
            to={MD_HUB_PATH}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Market Discovery
          </Link>
          <p className="eyebrow mb-6">
            AI Visibility Lab · Market Discovery · {run.label}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-balance max-w-4xl">
            {run.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {run.scope}
          </p>
          {run.article && (
            <p className="mt-4 text-sm text-muted-foreground max-w-3xl">
              Interpretarea rezultatelor:{" "}
              <Link
                to={run.article.path}
                className="underline underline-offset-4 hover:text-foreground"
              >
                {run.article.title}
              </Link>
            </p>
          )}
          <RunFacts run={run} />
          <CandidateNotice queryWord={t.one} />
        </div>
      </section>

      {/* Nivelul 1 — sinteza */}
      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead eyebrow="01 · Pe scurt" title="Ce a găsit rularea" />
          <div className="mt-8">
            <StatTiles
              items={[
                {
                  value: nf(run.totals.executions),
                  label: "Execuții",
                  note: `${run.queries.length} ${t.many} × 8 suprafețe`,
                },
                {
                  value: nf(run.totals.captures),
                  label: "Capturi",
                  note: `${nf(run.totals.observations)} observații înregistrate`,
                },
                {
                  value: nf(run.totals.entitiesBase),
                  label: "Entități în bază",
                  note: `${run.totals.entitiesExtended} cu modulele SERP`,
                },
                familyAi
                  ? {
                      value: pct(familyAi.exclusive, run.totals.entitiesBase),
                      label: "Doar în AI",
                      note: `${familyAi.exclusive} entități numite doar de suprafețele AI`,
                    }
                  : {
                      value: nf(run.totals.executionsWithoutCandidates),
                      label: "Fără candidați",
                    },
              ]}
            />
          </div>
          <ul className="mt-10 space-y-4 max-w-3xl text-[15px] leading-relaxed text-foreground/85 list-none">
            {run.summary.map((s, i) => (
              <li
                key={i}
                className="pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-px before:bg-foreground/50"
              >
                {renderBold(s)}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground max-w-3xl">
            Sinteza e preluată din raportul de lucru al pilotului (v
            {run.reportVersion}). Cifrele din pagină sunt calculate din același
            pachet de dovezi.
          </p>
          {run.errata.map((e) => (
            <div
              key={e.id}
              className="mt-6 border border-foreground/15 rounded-sm p-4 text-sm max-w-3xl"
            >
              <p className="font-medium">Erată {e.id}</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">
                {e.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Nivelul 2 — comparația */}
      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="02 · Comparația"
            title={`Ce ${t.one} și ce suprafață aduce ce`}
          >
            <p>
              Fiecare {t.one} a fost pusă o singură dată pe fiecare suprafață,
              cu excepțiile declarate în fișa rulării. Diferențele de mai jos
              descriu această rulare; o singură execuție pe pereche nu separă
              tendința de variația întâmplătoare.
            </p>
          </SectionHead>

          <QuerySurfaceMatrix run={run} />

          <div className="mt-16 grid gap-14 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-xl mb-5">Pe suprafață</h3>
              <ExclusivityBars
                rows={run.bySurface}
                labelFor={(g) => MD_SURFACE_LABELS[g] ?? g}
                total={run.totals.entitiesBase}
                queryWord={t.one}
              />
            </div>
            <div>
              <h3 className="font-serif text-xl mb-5">Pe {t.one}</h3>
              <ExclusivityBars
                rows={run.byQuery}
                labelFor={queryLabel}
                total={run.totals.entitiesBase}
                queryWord={t.one}
              />
            </div>
          </div>

          <div className="mt-14 max-w-3xl">
            <h3 className="font-serif text-xl mb-5">
              Search organic vs suprafețe AI
            </h3>
            <ExclusivityBars
              rows={run.byFamily}
              labelFor={(g) => MD_FAMILY_LABELS[g] ?? g}
              total={run.totals.entitiesBase}
              queryWord={t.one}
            />
          </div>

          <div className="mt-14 max-w-3xl">
            <h3 className="font-serif text-xl mb-4">{t.ManyArt} rulării</h3>
            <ol className="space-y-2 text-sm">
              {run.queries.map((qq) => (
                <li key={qq.id} className="grid grid-cols-[6.5rem_1fr] gap-3">
                  <code className="text-[13px] text-muted-foreground">
                    {qq.id}
                  </code>
                  <span>{qq.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Nivelul 3 — entități și dovezi */}
      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="03 · Entitățile"
            title="Toate entitățile candidate ale rulării"
          >
            <p>
              Lista completă a numelor afișate ca posibili prestatori sau
              instrumente, după deduplicare. Bază = Google organic, Bing organic
              și cele 6 suprafețe AI; modulele SERP (AI Overview, răspunsul
              generat Bing, reclame) se pot adăuga din filtru.
            </p>
          </SectionHead>
          <EntityExplorer run={run} />
        </div>
      </section>

      <section>
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="04 · Metoda și dovezile"
            title="Cum a fost rulat și cum se verifică"
          >
            <p>
              Fiecare {t.one} a fost scrisă exact ca în set, într-o sesiune
              nouă, iar fiecare ecran a fost capturat integral. Capturile au
              fost sigilate înainte de clasificare. Fiecare rezultat numit a
              devenit un rând în registrul de observații, cu poziția,
              proveniența și relevanța față de {t.one}, apoi numele au fost
              unite pe reguli declarate.
            </p>
            <p>
              Contaminarea sesiunii:{" "}
              {Object.entries(run.totals.contamination)
                .map(
                  ([k, v]) =>
                    `${v} ${k === "NONE_OBSERVED" ? "fără contaminare observată" : k === "NOT_ASSESSABLE" ? "neevaluabile" : k}`,
                )
                .join(", ")}
              . Capturi cu un conflict între condiția declarată și cea
              observată: {run.totals.sessionConflicts}.
            </p>
          </SectionHead>

          <h3 className="font-serif text-xl mt-12">Condițiile pe suprafață</h3>
          <ConditionsTable run={run} />

          <h3 className="font-serif text-xl mt-12">Execuțiile</h3>
          <ExecutionsTable run={run} />

          <h3 className="font-serif text-xl mt-12">Integritate</h3>
          <div className="mt-4 text-sm text-muted-foreground max-w-3xl leading-relaxed space-y-3">
            <p>
              Cifrele sunt calculate din pachetul de dovezi v
              {run.packageVersion}. Înainte de calcul, SHA-256 al fiecărui
              fișier folosit a fost comparat cu lista de checksum-uri a
              pachetului.{" "}
              {run.release.published ? (
                <>
                  Pachetul e public ca{" "}
                  <a
                    href={`${MD_GITHUB_REPO}/releases/tag/${run.release.tag}`}
                    className="underline underline-offset-4"
                  >
                    release GitHub
                  </a>
                  .
                </>
              ) : (
                <>
                  Pachetul (capturi, index, registru, checksum-uri) urmează să
                  fie publicat ca release GitHub.
                </>
              )}
            </p>
            <ul className="space-y-1 font-mono text-[11px] break-all">
              {Object.entries(run.integrity).map(([file, hash]) => (
                <li key={file}>
                  <span className="text-foreground/80">{file}</span>
                  <br />
                  {hash}
                </li>
              ))}
            </ul>
          </div>

          <RunNav run={run} />
        </div>
      </section>
    </div>
  );
};

// ───────────────────────────── hub-ul seriei ─────────────────────────────

export const MarketDiscoveryHub = () => {
  const c = mdSeries.cumulative;
  const totalCaptures = mdRuns.reduce((n, r) => n + r.totals.captures, 0);
  const totalExecutions = mdRuns.reduce((n, r) => n + r.totals.executions, 0);
  const discoveryCovered = mdSeries.queriesCovered.filter((q) =>
    q.startsWith("Q-DISC-"),
  ).length;
  const userShortCovered = mdSeries.queriesCovered.filter((q) =>
    q.startsWith("Q-USER-SHORT-"),
  ).length;
  return (
    <div>
      <Seo
        title="Market Discovery — seria MKT-RO-AIV | AI Visibility Lab"
        description={MD_HUB_DESCRIPTION}
      />

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-20 md:py-28 max-w-5xl">
          <Link
            to="/lab"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            AI Visibility Lab
          </Link>
          <p className="eyebrow mb-6">AI Visibility Lab · Market Discovery</p>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-balance max-w-4xl">
            {MD_HUB_TITLE}
          </h1>
          <div className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl space-y-4">
            <p>
              Cine îți răspunde când întrebi Google sau un asistent AI cine
              oferă servicii de GEO, AEO sau AI Visibility în România? Market
              Discovery pune aceleași întrebări și expresii pe opt suprafețe,
              capturează fiecare ecran și numără fiecare nume afișat.
            </p>
            <p>
              Rezultatul nu e un clasament. E lista celor care apar, cu dovada
              fiecărei apariții. Ea devine punctul de plecare pentru Market
              Verification, etapa care stabilește cine face parte din piață după
              criteriile din{" "}
              <Link
                to={MD_PROTOCOL_PATH}
                className="underline underline-offset-4 hover:text-foreground"
              >
                AVL-MKT-001
              </Link>
              .
            </p>
          </div>
          <CandidateNotice />
        </div>
      </section>

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="Seria până acum"
            title={`${mdRuns.length} piloți, ${c.unionBase} de entități candidate`}
          >
            <p>
              Piloții 1–3 au acoperit împreună toate cele {discoveryCovered}{" "}
              întrebări DISCOVERY din set: piloții 1 și 2 aceleași 4 întrebări,
              pilotul 3 celelalte 8. Pilotul 5 a rulat cele {userShortCovered}{" "}
              expresii scurte USER-SHORT, scrise cum le-ar căuta cineva fără
              cunoștințe de specialitate.
            </p>
            <p>
              Pilotul 4, rulat din Bologna cu 4 expresii scurte, nu intră în
              reuniune și nu are pagină aici.{" "}
              <Link
                to="/lab/articole/market-discovery-pilot-4-bologna-rulare-invalida"
                className="underline underline-offset-4 hover:text-foreground"
              >
                De ce a fost exclus
              </Link>
              .
            </p>
          </SectionHead>
          <div className="mt-8">
            <StatTiles
              items={[
                {
                  value: nf(totalExecutions),
                  label: "Execuții",
                  note: `în cei ${mdRuns.length} piloți`,
                },
                {
                  value: nf(totalCaptures),
                  label: "Capturi",
                  note: "toate sigilate cu SHA-256",
                },
                {
                  value: nf(c.unionBase),
                  label: "Entități în bază",
                  note: `${c.unionExtended} cu modulele SERP`,
                },
                {
                  value: nf(c.inAllPilots),
                  label: "În toți piloții",
                  note: `în bază în toți cei ${mdRuns.length} piloți`,
                },
              ]}
            />
            <p className="mt-4 text-xs text-muted-foreground max-w-3xl">
              Cele {withDe(c.unionBase)} entități sunt reuniunea piloților, nu
              suma lor ({mdRuns.map((r) => r.totals.entitiesBase).join(" + ")} ={" "}
              {mdRuns.reduce((a, r) => a + r.totals.entitiesBase, 0)}): o
              entitate găsită în mai mulți piloți e numărată o singură dată.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="Rezultatele căutărilor"
            title={`Toate cele ${withDe(mdRuns.reduce((n, r) => n + r.matrix.length, 0))} rânduri interogare × suprafață, pilot cu pilot`}
          >
            <p>
              Fiecare rând e o întrebare sau o expresie rulată pe cele opt
              suprafețe într-un pilot. Cifra din celulă arată câte entități
              candidate distincte au fost numite acolo; coloana din dreapta,
              câte la acea interogare, pe toate suprafețele.
            </p>
          </SectionHead>
          <SeriesMatrix />
        </div>
      </section>

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="Candidate Set cumulat"
            title={`Toate cele ${withDe(c.unionBase)} entități candidate pentru Market Verification`}
          >
            <p>
              Lista unică a numelor găsite în piloții{" "}
              {mdRuns.map((r) => r.label.replace("Pilotul ", "")).join(", ")}.
              Pe ea se aplică verificarea de eligibilitate: fiecare entitate e
              verificată individual după criteriile din AVL-MKT-001 §7 și
              primește un statut din §9. Până atunci, toate rămân{" "}
              <code className="text-[15px]">UNVERIFIED</code>.
            </p>
          </SectionHead>
          <UnionExplorer />
        </div>
      </section>

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <p className="eyebrow mb-6">Rulările</p>
          <ul className="border-t border-foreground/10">
            {[...mdRuns].reverse().map((r) => (
              <li key={r.slug} className="border-b border-foreground/10">
                <Link to={r.path} className="group block py-8 md:py-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      {r.label} · {r.instanceId}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/80">
                      {r.runDates}
                    </p>
                  </div>
                  <h2 className="font-serif text-xl md:text-2xl leading-tight tracking-tight text-balance mt-3">
                    {r.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {r.scope}
                  </p>
                  <p className="mt-4 text-sm tabular-nums text-foreground/80">
                    {r.totals.executions} execuții · {r.totals.captures} capturi
                    · {r.totals.entitiesBase} entități în bază
                  </p>
                  <span className="link-underline mt-4 inline-block text-sm font-medium">
                    Vezi rezultatele →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="Cum se citesc paginile"
            title="Trei niveluri, de la sinteză la dovadă"
          >
            <p>
              Fiecare rulare are aceeași structură: o sinteză cu cifrele
              principale, comparația pe întrebări sau expresii și suprafețe,
              lista completă a entităților candidate și, la final, condițiile
              rulării și checksum-urile pachetului de dovezi din care vin
              cifrele.
            </p>
            <p>
              <strong className="text-foreground">Statut.</strong> Până la
              activarea AVL-MKT-001 v1.0.0, orice rulare se declară pilot. Prima
              rulare oficială urmează după pilotul de Market Verification. Seria
              e gândită ca măsurare repetată: o rulare completă pe trimestru și
              un subset lunar, fiecare cu pagina ei aici. Ultima actualizare:{" "}
              {formatMdDate(mdRuns.at(-1)?.datePublished ?? null)}.
            </p>
          </SectionHead>
        </div>
      </section>
    </div>
  );
};
