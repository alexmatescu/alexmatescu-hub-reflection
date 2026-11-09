import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "@/lib/router-compat";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { SectionHead, StatTiles } from "@/pages/mkt-shared";
import { MD_HUB_PATH, MD_PROTOCOL_PATH } from "@/data/market-discovery/meta";
import {
  MV_PILOT_DESCRIPTION,
  MV_PILOT_REGISTER_ID,
  MV_PILOT_SEO_TITLE,
  MV_PILOT_TITLE,
  MV_STATUS_MEANING,
  MV_STATUS_ORDER,
  mvPilot,
  type MvEntity,
  type MvStatus,
} from "@/data/market-verification";

const nf = (n: number) => n.toLocaleString("ro-RO");
const ext =
  "underline underline-offset-4 decoration-foreground/30 hover:text-foreground break-all";
const select =
  "h-9 px-2 text-base md:text-sm bg-background border border-foreground/20 rounded-sm focus:outline-none focus:border-foreground/60";

const PROTOCOL_ANCHOR = (id: string) => `${MD_PROTOCOL_PATH}#${id}`;

// ───────────────────────────── piese ─────────────────────────────

const PilotNotice = () => (
  <div className="mt-10 border-l-2 border-foreground/40 bg-surface/50 px-5 py-4 text-sm leading-relaxed text-foreground/80 max-w-3xl space-y-3">
    <p>
      <strong className="font-semibold text-foreground">
        Este un pilot, nu Market Reference Set-ul pieței.
      </strong>{" "}
      <Link to={MD_PROTOCOL_PATH} className="underline underline-offset-4">
        AVL-MKT-001
      </Link>{" "}
      e încă draft, iar un pilot nu constituie Market Reference Set (§13.2,
      §21.6). Cele {mvPilot.totals.byStatus.ELIGIBLE} intrări{" "}
      <code className="text-[13px]">ELIGIBLE</code> sunt setul eligibil al
      pilotului, nu populația oficială a pieței.
    </p>
    <p>
      Statusul nu e certificare, recomandare comercială sau clasament, iar
      statusurile și clasele nu sunt scoruri de calitate (REQ-013, REQ-029).
      Registrul nu e lista completă a furnizorilor existenți. E constituit
      independent de AI Visibility Lab, în scopul cercetării laboratorului, și
      nu e validat de nicio autoritate publică sau organism profesional
      (REQ-030).
    </p>
  </div>
);

const StatusTag = ({ status }: { status: MvStatus }) => (
  <span
    className={`shrink-0 inline-block px-1.5 py-0.5 text-[10px] leading-none rounded-sm border tracking-wide ${
      status === "ELIGIBLE"
        ? "border-foreground/60 text-foreground"
        : "border-foreground/20 text-muted-foreground"
    }`}
  >
    {status}
  </span>
);

const Fact = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="grid grid-cols-[8.5rem_minmax(0,1fr)] gap-x-3 py-1">
    <dt className="text-muted-foreground">{label}</dt>
    <dd className="min-w-0">{children}</dd>
  </div>
);

const EntityRow = ({ e, open }: { e: MvEntity; open: boolean }) => (
  <li
    id={e.id.toLowerCase()}
    className="border-b border-foreground/10 scroll-mt-24"
  >
    <details open={open} className="group">
      <summary className="cursor-pointer list-none py-3 grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1 md:grid-cols-[4.5rem_minmax(0,1fr)_auto] md:items-center">
        <span className="hidden md:block text-xs tabular-nums text-muted-foreground">
          {e.id}
        </span>
        <span className="min-w-0">
          <span className="font-medium flex items-center gap-2 min-w-0">
            <span className="truncate" title={e.name}>
              {e.name}
            </span>
            <StatusTag status={e.status} />
          </span>
          <span className="block text-xs text-muted-foreground">
            <span className="md:hidden tabular-nums">{e.id} · </span>
            {[e.geo, e.providerClass].filter(Boolean).join(" · ") || "—"}
          </span>
        </span>
        <span className="text-xs text-muted-foreground group-open:text-foreground">
          <span className="group-open:hidden">Detalii</span>
          <span className="hidden group-open:inline">Închide</span>
        </span>
      </summary>
      <div className="pb-5 md:pl-[5.5rem] text-sm leading-relaxed">
        <p className="text-foreground/90 max-w-3xl">{e.rationale}</p>
        <dl className="mt-3 text-xs">
          <Fact label="ID">
            {MV_PILOT_REGISTER_ID.replace(/-MVR$/, "")}-{e.id}
          </Fact>
          {e.site && (
            <Fact label="Site">
              <a
                href={e.site}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={ext}
              >
                {e.site}
              </a>
            </Fact>
          )}
          {e.persons && <Fact label="Persoane">{e.persons}</Fact>}
          {e.aliases && <Fact label="Aliasuri, unite">{e.aliases}</Fact>}
          <Fact label="Găsit în">
            Market Discovery {e.discovery.split(", ").join(", ")}
          </Fact>
          <Fact label="Dovada">
            {e.evidenceUrl ? (
              <a
                href={e.evidenceUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={ext}
              >
                {e.evidenceUrl}
              </a>
            ) : (
              "—"
            )}{" "}
            <span className="text-muted-foreground">({e.evidenceLevel})</span>
          </Fact>
          <Fact label="Salvată">
            HTTP {e.http} · {e.savedUtc.replace("T", " ").replace("Z", " UTC")}{" "}
            · <code>v1.0-dovezi/{e.evidenceFile}</code>
          </Fact>
          <Fact label="SHA-256">
            <code className="break-all">{e.sha256}</code>
          </Fact>
          <Fact label="Termeni în HTML">{e.terms}</Fact>
        </dl>
      </div>
    </details>
  </li>
);

const RegisterExplorer = () => {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("");
  const [geo, setGeo] = useState("");
  const [openId, setOpenId] = useState("");

  // Trimiterile din hub (#mv-242) deschid intrarea.
  useEffect(() => {
    const read = () => {
      const h = decodeURIComponent(window.location.hash.slice(1));
      if (/^mv-\d{3}$/.test(h)) {
        setQ("");
        setStatus("");
        setGeo("");
        setOpenId(h);
        requestAnimationFrame(() =>
          document.getElementById(h)?.scrollIntoView(),
        );
      }
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const rows = useMemo(() => {
    const needle = q.trim().toLocaleLowerCase("ro-RO");
    return mvPilot.entities.filter(
      (e) =>
        (!status || e.status === status) &&
        (!geo || e.geo === geo) &&
        (!needle ||
          `${e.name} ${e.persons} ${e.aliases} ${e.site} ${e.id}`
            .toLocaleLowerCase("ro-RO")
            .includes(needle)),
    );
  }, [q, status, geo]);

  const geos = useMemo(
    () =>
      [...new Set(mvPilot.entities.map((e) => e.geo).filter(Boolean))].sort(),
    [],
  );

  return (
    <div className="mt-8">
      <div
        className="flex flex-wrap gap-2 items-center"
        role="group"
        aria-label="Filtre registru"
      >
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Caută un nume, o persoană, un site"
          aria-label="Caută în registru"
          className={`${select} w-full sm:w-72`}
        />
        <select
          aria-label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={select}
        >
          <option value="">Toate statusurile</option>
          {MV_STATUS_ORDER.map((s) => (
            <option key={s} value={s}>
              {s} ({mvPilot.totals.byStatus[s]})
            </option>
          ))}
        </select>
        <select
          aria-label="Clasă geografică"
          value={geo}
          onChange={(e) => setGeo(e.target.value)}
          className={select}
        >
          <option value="">Toate clasele geografice</option>
          {geos.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
      <p className="mt-4 text-[11px] text-muted-foreground" aria-live="polite">
        {rows.length} {rows.length === 1 ? "entitate" : "entități"}
      </p>
      {/* Toate intrările sunt în HTML; detaliile se deschid la cerere. */}
      <ul className="mt-3 border-t border-foreground/10">
        {rows.map((e) => (
          <EntityRow key={e.id} e={e} open={openId === e.id.toLowerCase()} />
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground max-w-3xl">
        Ordinea e cea a ID-urilor, nu un clasament. ID-ul e poziția candidatului
        în lista celor {mvPilot.candidates} de candidați Discovery; forma
        completă e{" "}
        <code>{MV_PILOT_REGISTER_ID.replace(/-MVR$/, "")}-MV-NNN</code>{" "}
        (AVL-MKT-001 §21.6). Profilurile sociale și istoricul modificărilor
        fiecărei intrări sunt în registrul din release.
      </p>
    </div>
  );
};

// ───────────────────────────── pagina ─────────────────────────────

export const MarketVerificationPilot = () => {
  const t = mvPilot.totals;
  const other = t.entities - t.byStatus.ELIGIBLE;
  return (
    <div>
      <Seo
        title={`${MV_PILOT_SEO_TITLE} | AI Visibility Lab`}
        description={MV_PILOT_DESCRIPTION}
      />

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-20 md:py-28 max-w-5xl">
          <Link
            to={MD_HUB_PATH}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Market Discovery — seria MKT-RO-AIV
          </Link>
          <p className="eyebrow mb-6">
            AI Visibility Lab · Market Verification · pilot ·{" "}
            {MV_PILOT_REGISTER_ID}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-balance max-w-4xl">
            {MV_PILOT_TITLE}
          </h1>
          <div className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl space-y-4">
            <p>
              Market Discovery a adunat numele afișate de Google, Bing și
              asistenții AI când cauți servicii de GEO, AEO sau AI Visibility în
              România. Market Verification ia fiecare nume pe rând și verifică,
              pe site-ul entității, dacă oferă serviciul și dacă e orientată
              către România.
            </p>
            <p>
              Între 27 octombrie și 8 noiembrie 2026 au fost verificați toți cei{" "}
              {mvPilot.candidates} de candidați din piloturile Discovery.
              Fiecare entitate are un status, o justificare și dovada pe care se
              sprijină, salvată și sigilată cu SHA-256.
            </p>
          </div>
          <PilotNotice />
        </div>
      </section>

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="Pe scurt"
            title={`${t.byStatus.ELIGIBLE} de entități eligibile din ${t.entities}`}
          >
            <p>
              Cei {mvPilot.candidates} de candidați au devenit {t.entities} de
              entități după unirea rândurilor care desemnau același operator (o
              persoană și brandul ei, un alias, un produs propriu): {t.merged}{" "}
              rânduri unite.
            </p>
          </SectionHead>
          <div className="mt-8">
            <StatTiles
              items={[
                {
                  value: nf(mvPilot.candidates),
                  label: "Candidați",
                  note: "din piloturile Discovery 1, 2, 3, 5",
                },
                {
                  value: nf(t.entities),
                  label: "Entități",
                  note: `${t.merged} rânduri unite`,
                },
                {
                  value: nf(t.byStatus.ELIGIBLE),
                  label: "ELIGIBLE",
                  note: "setul eligibil al pilotului",
                },
                {
                  value: nf(other),
                  label: "Alt status",
                  note: "publicate și ele (REQ-018)",
                },
              ]}
            />
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-t border-foreground/10">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <th className="py-3 pr-4 font-medium">Status</th>
                  <th className="py-3 pr-4 font-medium text-right">Entități</th>
                  <th className="py-3 font-medium">Ce înseamnă</th>
                </tr>
              </thead>
              <tbody>
                {MV_STATUS_ORDER.map((s) => (
                  <tr
                    key={s}
                    className="border-t border-foreground/10 align-top"
                  >
                    <td className="py-3 pr-4 whitespace-nowrap">
                      <code className="text-[13px]">{s}</code>
                    </td>
                    <td className="py-3 pr-4 text-right tabular-nums">
                      {t.byStatus[s]}
                    </td>
                    <td className="py-3 text-muted-foreground">
                      {MV_STATUS_MEANING[s]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Intrările <code>ELIGIBLE</code>, pe clase geografice:{" "}
            {Object.entries(t.eligibleByGeo)
              .map(([g, n]) => `${n} ${g}`)
              .join(", ")}
            . Pe clase de furnizor:{" "}
            {Object.entries(t.eligibleByClass)
              .sort((a, b) => b[1] - a[1])
              .map(([c, n]) => `${n} ${c}`)
              .join(", ")}
            . Clasele descriu tipul entității, nu calitatea ei (
            <Link
              to={PROTOCOL_ANCHOR("4-unitatea-de-analiza")}
              className="underline underline-offset-4"
            >
              AVL-MKT-001 §4
            </Link>
            ,{" "}
            <Link
              to={PROTOCOL_ANCHOR("6-clase-geografice")}
              className="underline underline-offset-4"
            >
              §6
            </Link>
            ).
          </p>
        </div>
      </section>

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="Metoda"
            title="Cum s-a verificat fiecare entitate"
          >
            <p>
              Fiecare candidat a fost căutat pe site-ul lui. Pentru fiecare s-a
              stabilit, după criteriile din{" "}
              <Link
                to={PROTOCOL_ANCHOR("7-dovezile-de-eligibilitate")}
                className="underline underline-offset-4 hover:text-foreground"
              >
                AVL-MKT-001 §7
              </Link>
              , dacă entitatea poate fi identificată fără ambiguitate, dacă
              oferă un serviciu de GEO, AEO, AI Visibility sau unul echivalent
              funcțional și dacă serviciul e orientat către România. O mențiune
              într-un răspuns AI nu a contat ca dovadă (REQ-009).
            </p>
            <p>Operatorul a fixat în pilot patru reguli de aplicare:</p>
          </SectionHead>
          <ol className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed list-decimal pl-5 text-foreground/90">
            <li>
              Limba site-ului și construcția lui tehnică (de exemplu React sau
              JavaScript) nu sunt criterii de eligibilitate.
            </li>
            <li>
              Observațiile despre transparență (echipă, prețuri, profiluri
              sociale) nu schimbă statusul.
            </li>
            <li>
              <code>OUT OF SCOPE</code> = nu e orientat către România;{" "}
              <code>INELIGIBLE</code> = e în România, dar nu oferă serviciul;{" "}
              <code>UNVERIFIED</code> = dovadă prea slabă ca să confirme sau să
              excludă; <code>AMBIGUOUS</code> = contradicții sau identitate
              nelămurită.
            </li>
            <li>O entitate corespunde unui operator.</li>
          </ol>
          <div className="mt-6 max-w-3xl text-base text-muted-foreground leading-relaxed space-y-3">
            <p>
              Prima trecere prin listă a fost o propunere. Statusurile finale
              le-a stabilit și confirmat Alex Matescu, pentru toate intrările.
              Regulile se evaluează pentru includerea în protocol înainte de
              AVL-MKT-001 v1.0.0.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="Registrul"
            title={`Toate cele ${t.entities} de entități, cu statusul și dovada`}
          >
            <p>
              Deschide o intrare ca să vezi justificarea, pagina pe care se
              sprijină și fișierul salvat. Intrările cu alt status decât{" "}
              <code className="text-[15px]">ELIGIBLE</code> sunt publicate și
              ele: rezultatele negative și ambiguitățile se păstrează (REQ-018).
            </p>
          </SectionHead>
          <RegisterExplorer />
        </div>
      </section>

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="Dovezile"
            title="O pagină HTML brută pentru fiecare entitate"
          >
            <p>
              Pentru fiecare entitate s-a salvat răspunsul HTTP brut al paginii
              consultate, de regulă pagina de servicii: corpul exact primit,
              fără randare JavaScript, antetele, URL-ul final, codul HTTP,
              momentul și User-Agent-ul, cu SHA-256 (
              <Link
                to={PROTOCOL_ANCHOR("7-3-forma-dovezii-in-market-verification")}
                className="underline underline-offset-4 hover:text-foreground"
              >
                AVL-MKT-001 §7.3
              </Link>
              ). Nu s-au făcut capturi de ecran.
            </p>
            <p>
              Toate cele {t.entities} de pagini au fost salvate din nou pe 8
              noiembrie 2026, ziua în care s-a încheiat verificarea:{" "}
              {t.http["200"]} au răspuns HTTP 200, una a răspuns 403 cu o pagină
              anti-bot (MV-126, al cărei status nu depinde de pagină).
            </p>
          </SectionHead>
          <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed list-disc pl-5 text-foreground/90">
            <li>
              <strong>Pagini randate în JavaScript.</strong> HTML-ul brut poate
              să nu conțină textul pe care îl vede un vizitator. La MV-131 și
              MV-196, statusul se sprijină pe verificarea operatorului în
              browser, iar justificarea o spune.
            </li>
            <li>
              <strong>Statusurile incerte</strong> au aceeași dovadă ca toate
              celelalte. Justificarea spune ce lipsește (<code>UNVERIFIED</code>
              ) sau care e contradicția (<code>AMBIGUOUS</code>) (REQ-035).
            </li>
            <li>
              <strong>Verificarea termenilor</strong> din fiecare intrare caută
              în HTML-ul brut termenii serviciului. E un semnal tehnic, nu o
              decizie de eligibilitate.
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="Rânduri unite"
            title={`${t.merged} rânduri Discovery unite în intrarea canonică`}
          >
            <p>
              Un rând unit își păstrează ID-ul, ca trimitere către intrarea
              canonică. ID-urile nu se refolosesc (REQ-036).
            </p>
          </SectionHead>
          <ul className="mt-6 max-w-3xl text-sm border-t border-foreground/10">
            {mvPilot.merged.map((m) => (
              <li
                key={m.id}
                className="border-b border-foreground/10 py-2 flex flex-wrap gap-x-2"
              >
                <span className="tabular-nums text-muted-foreground">
                  {m.id}
                </span>
                <span>{m.name}</span>
                <span className="text-muted-foreground">→</span>
                <a
                  href={`#${m.canonical.toLowerCase()}`}
                  className="underline underline-offset-4 decoration-foreground/30 hover:text-foreground"
                >
                  {m.canonical}{" "}
                  {mvPilot.entities.find((e) => e.id === m.canonical)?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="Transparență"
            title="Deviații declarate și conflictul de interese"
          >
            <p>
              <strong className="text-foreground">Deviații.</strong> (1) Pilotul
              s-a făcut sub AVL-MKT-001 0.10.0, versiune draft; pilotul intern
              pe cazuri-limită nu a fost executat ca etapă separată. (2)
              Candidații vin din piloturile Market Discovery, nu dintr-o rulare
              completă (<code>FULL</code>). (3) Deciziile privind o entitate
              afiliată autorului nu au fost verificate de o terță parte, pentru
              că nu există o terță parte care să o poată face (
              <Link
                to={PROTOCOL_ANCHOR("14-conflict-de-interese")}
                className="underline underline-offset-4 hover:text-foreground"
              >
                §14
              </Link>
              ). Entitățile autorului nu au apărut în Market Discovery și nu
              sunt în registru.
            </p>
            <p>
              <strong className="text-foreground">Conflict de interese.</strong>{" "}
              Operatorul pilotului, Alex Matescu, fondatorul AI Visibility Lab,
              oferă servicii din această piață, deci furnizorii din registru îi
              pot fi concurenți. Declarația lui din 8 noiembrie 2026: nu există
              nicio relație materială cunoscută (client, partener, colaborare,
              afiliere) cu vreuna dintre cele {t.entities} de entități
              (REQ-020).
            </p>
            <p>
              <strong className="text-foreground">Ce nu e publicat.</strong>{" "}
              Registrul intern are și notele libere ale operatorului despre
              echipă, prețuri sau aspectul site-urilor, fără efect pe status.
              Ele nu sunt publicate, ca să nu fie citite drept calificative
              despre furnizori (§17, REQ-013).
            </p>
          </SectionHead>
        </div>
      </section>

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="Date și dovezi"
            title="Registrul și dovezile, în release-ul GitHub"
          >
            <p>
              Registrul complet (xlsx și CSV), setul eligibil, trasabilitatea
              până la piloturile Discovery, indexul și arhiva celor {t.entities}{" "}
              de pagini salvate sunt publicate în release-ul{" "}
              <a
                href={mvPilot.release.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                {mvPilot.release.tag}
              </a>
              . Datele de pe această pagină sunt generate din același pachet, cu
              SHA-256 verificat.
            </p>
          </SectionHead>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-xs border-t border-foreground/10">
              <tbody>
                {mvPilot.release.assets.map((a) => (
                  <tr
                    key={a.name}
                    className="border-t border-foreground/10 align-top"
                  >
                    <td className="py-2 pr-4 whitespace-nowrap">{a.name}</td>
                    <td className="py-2 font-mono text-muted-foreground break-all">
                      {a.sha256}
                    </td>
                  </tr>
                ))}
                <tr className="border-t border-foreground/10 align-top">
                  <td className="py-2 pr-4 whitespace-nowrap">
                    {mvPilot.release.sha256sumsFile}
                  </td>
                  <td className="py-2 font-mono text-muted-foreground break-all">
                    {mvPilot.release.sha256sumsSha256}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <pre className="mt-6 text-xs bg-surface/50 border border-foreground/10 p-4 overflow-x-auto">
            <code>{`shasum -a 256 -c ${mvPilot.release.sha256sumsFile}`}</code>
          </pre>
        </div>
      </section>

      <section>
        <div className="container-editorial py-16 md:py-20 max-w-5xl">
          <SectionHead
            eyebrow="Rectificări și ce urmează"
            title="O informație greșită se corectează printr-o versiune nouă"
          >
            <p>
              Dacă o informație despre o entitate e greșită, o poți semnala prin{" "}
              <Link
                to="/contact"
                className="underline underline-offset-4 hover:text-foreground"
              >
                pagina de contact
              </Link>
              . Corecția se publică într-o versiune nouă a registrului, cu
              valoarea anterioară, valoarea corectată, data, motivul și sursa
              (REQ-033). Răspunsul, lipsa lui sau o relație comercială cu
              operatorul nu influențează statusul (REQ-032).
            </p>
            <p>
              Pilotul a schimbat deja protocolul: AVL-MKT-001 v0.11.0 definește
              forma dovezii (§7.3) și identificatorii (§21.6). Prima rulare
              oficială a instanței, Market Discovery completă și Market
              Verification, urmează după activarea AVL-MKT-001 v1.0.0.
            </p>
          </SectionHead>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to={MD_HUB_PATH} className="link-underline font-medium">
              ← Seria Market Discovery
            </Link>
            <Link to={MD_PROTOCOL_PATH} className="link-underline font-medium">
              AVL-MKT-001 — protocolul
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
