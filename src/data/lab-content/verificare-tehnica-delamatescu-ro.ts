import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 * Sursă: src/content/studii de caz/02. delamatescu.ro/verificare-tehnica-delamatescu-ro.md
 */
export const verificareTehnicaDelamatescuRoMeta: LabArticleMeta = {
  title:
    "Poate fi citit tehnic site-ul meu de crawlerele AI? Verificarea AVL-203 a delamatescu.ro, punctul T0",
  description:
    "Studiu de caz despre prima măsurare T0 a protocolului AVL-203 pe delamatescu.ro: 6 pagini, 56 de cereri, 12 crawlere declarate, verificările TC-00…TC-08 cu exemple din dovezile brute și ieșirile reale din terminal, diagnosticul pe zone după grila AVL-204, raportul pentru client și pachetul de dovezi cu checksum-uri.",
  canonical:
    "https://delamatescu.ro/lab/studii-de-caz/verificare-tehnica-delamatescu-ro",
  category: "Technical Visibility",
  // "Analiză de caz" e valoarea cea mai apropiată din LabArticleType — câmp
  // inert pentru un Case Study (vezi tabulaRasaEntityResolutionStudiuDeCazMeta).
  articleType: "Analiză de caz",
  datePublished: "2026-10-28T14:23:00+02:00",
  dateModified: "2026-10-28",
  lastReviewed: "2026-10-28",
  about: [
    { name: "delamatescu.ro" },
    { name: "Alex Matescu" },
    { name: "AVL-203" },
    { name: "AVL-204" },
    { name: "robots.txt" },
    { name: "Sitemap" },
    { name: "User-Agent" },
    { name: "AI Visibility" },
  ],
  keywords: [
    "verificare tehnică",
    "AVL-203",
    "AVL-204",
    "AI Visibility",
    "robots.txt",
    "sitemap",
    "User-Agent",
    "crawlere AI",
    "OAI-SearchBot",
    "Claude-SearchBot",
    "PerplexityBot",
    "raw HTML",
    "audit AI Visibility",
    "T0",
    "delamatescu.ro",
  ],
  citations: [
    {
      name: "AI Visibility Lab — AVL203-delamatescu-ro, T0 Technical Evidence Package v1.0",
      url: "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-avl203-delamatescu-ro-t0-v1.0",
    },
    {
      name: "AI Visibility Lab — AVL-203, Protocolul minim de verificare tehnică a unui site pentru AI Visibility",
      url: "https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica",
    },
    {
      name: "AI Visibility Lab — AVL-204, Grila de interpretare a verificării tehnice",
      url: "https://delamatescu.ro/lab/metodologie/grila-interpretare-verificare-tehnica",
    },
    {
      name: "IETF RFC 9309 — Robots Exclusion Protocol",
      url: "https://www.rfc-editor.org/rfc/rfc9309",
    },
    {
      name: "IETF RFC 9110 — HTTP Semantics",
      url: "https://www.rfc-editor.org/rfc/rfc9110",
    },
  ],
  faq: [
    {
      q: "Înseamnă „nicio problemă observată” că site-ul apare în ChatGPT sau Google?",
      a: "Nu. Verificarea arată că paginile pot fi obținute și citite în condițiile testate. Apariția în rezultate și în răspunsurile AI depinde de indexare, de selecția surselor și de interogare, care nu se măsoară aici.",
    },
    {
      q: "De ce Z6 e „nu poate fi stabilit” dacă paginile sunt identice după mascare?",
      a: "Pentru că grila compară conținutul fără mascare: dacă două capturi identice ale clientului de referință diferă, nicio diferență nu poate fi atribuită User-Agent-ului. Mascarea arată de unde vine variabilitatea, dar nu e o regulă a grilei.",
    },
    {
      q: "Pot cere această verificare pentru site-ul meu?",
      a: "Da, ca parte a unui audit AI Visibility. Ai nevoie de politica ta de acces pentru crawlere, de lista paginilor importante și de textele care trebuie să apară în ele. Primești raportul pe zone, ca în exemplul din secțiunea 18.",
    },
  ],
};

const RELEASE =
  "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-avl203-delamatescu-ro-t0-v1.0";

/** Conținutul propriu-zis al studiului de caz — fără metadate tehnice. */
export const verificareTehnicaDelamatescuRoHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-10-28T14:23:00+02:00">28 octombrie 2026</time> · Ultima verificare factuală: <time datetime="2026-10-28">28 octombrie 2026</time></p>

      <table>
        <tbody>
        <tr><th scope="row">Studiu de caz</th><td>#002 — delamatescu.ro (Alex Matescu)</td></tr>
        <tr><th scope="row">Experiment</th><td>Verificarea tehnică AVL-203</td></tr>
        <tr><th scope="row">Status</th><td>În desfășurare</td></tr>
        <tr><th scope="row">Puncte de măsurare analizate</th><td>T0</td></tr>
        <tr><th scope="row">Obiect de studiu</th><td>Condițiile tehnice în care paginile unui site pot fi obținute și citite de motoarele de căutare și de crawlerele asistenților AI</td></tr>
        </tbody>
      </table>

      <blockquote>
        <p><strong>Evidence-backed case study.</strong> Fiecare exemplu din această pagină provine din dovezile brute ale rulării <code>AVL203-delamatescu-ro-T0-20261026T085234Z</code>, publicate integral, cu checksum-uri SHA-256, în pachetul <a href="${RELEASE}" target="_blank" rel="noopener noreferrer"><code>evidence-avl203-delamatescu-ro-t0-v1.0</code></a>. Extrasele sunt scurtate pentru lizibilitate; fișierele complete sunt în pachet. Un singur fișier al pachetului a fost modificat față de captură (numele mașinii, secțiunea 15).</p>
      </blockquote>

      <h2>Punctele de măsurare pe scurt</h2>
      <table>
        <thead><tr><th></th><th>T0 (baseline)</th></tr></thead>
        <tbody>
          <tr><td>Captura</td><td>26 octombrie 2026, 08:52:34–08:54:03 UTC</td></tr>
          <tr><td>Pagini din plan</td><td>6</td></tr>
          <tr><td>Cereri</td><td>56, fără repetări și fără erori de rețea</td></tr>
          <tr><td>Crawlere declarate</td><td>12: 5 de căutare (matricea Core), 4 de antrenare, 3 de fetch la cererea utilizatorului</td></tr>
          <tr><td>Protocol și grilă la captură</td><td>AVL-203 0.5.0, AVL-204 0.2.0, implementarea candidată v0.4.0</td></tr>
          <tr><td>Analiza publicată</td><td>grila AVL-204 0.3.0, implementarea v0.5.0 (26 octombrie 2026, 12:11 UTC)</td></tr>
          <tr><td>Constatări</td><td>109</td></tr>
          <tr><td>Pachet de dovezi</td><td><a href="${RELEASE}" target="_blank" rel="noopener noreferrer"><code>evidence-avl203-delamatescu-ro-t0-v1.0</code></a>: 234 de artefacte cu checksum, 224 de dovezi indexate</td></tr>
        </tbody>
      </table>

      <h2>Rezumat</h2>
      <p><strong>Pe cele 6 pagini testate pe 26 octombrie 2026, delamatescu.ro nu prezintă probleme tehnice de acces în zonele Z1–Z5 ale grilei AVL-204. Zona Z6 rămâne „nu poate fi stabilit” la comparația de conținut.</strong></p>
      <p>Ce a arătat rularea T0, pe zone:</p>
      <ul>
        <li><strong>Răspunsul site-ului (Z1):</strong> toate paginile răspund direct cu <code>200</code>, iar variantele adresei converg spre <code>https://delamatescu.ro/</code>.</li>
        <li><strong>Regulile pentru crawlere (Z2):</strong> robots.txt permite accesul tuturor celor 9 crawlere evaluate, pe toate paginile.</li>
        <li><strong>Sitemap-ul (Z3):</strong> e declarat în robots.txt și răspunde.</li>
        <li><strong>Semnalele paginilor (Z4):</strong> fiecare pagină are title, canonical spre propria adresă și limba declarată, fără <code>noindex</code>.</li>
        <li><strong>Conținutul livrat (Z5):</strong> textele-cheie se află în HTML-ul trimis de server.</li>
        <li><strong>Răspunsurile pentru crawlere (Z6):</strong> statusul, adresa finală și headerele sunt identice pentru toți cei 5 crawleri de căutare; conținutul nu a putut fi comparat, pentru că pagina se schimbă la fiecare încărcare, chiar pentru același vizitator.</li>
      </ul>
      <p>Ce conține studiul:</p>
      <ul>
        <li>prima rulare <code>T0</code> a protocolului <a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203</a> pe un site real, interpretată după grila <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL-204</a>;</li>
        <li>pentru fiecare verificare: ce se cere serverului, ce a răspuns el și cum devine răspunsul o constatare;</li>
        <li>comenzile instrumentului, cu ieșirea lor reală din terminal;</li>
        <li>raportul pe care îl primește un client.</li>
      </ul>
      <p>Ce nu spune:</p>
      <ul>
        <li>nimic despre indexare, citare sau recomandare în răspunsurile AI. Spune doar că, în condițiile testate, accesul tehnic nu explică eventualele probleme de vizibilitate ale site-ului (secțiunea 18).</li>
      </ul>

      <h2>1. Ce verifică protocolul AVL-203?</h2>
      <p><strong>AVL-203 verifică dacă paginile declarate ale unui site pot fi obținute și citite de sistemele automate: răspunsul HTTP, adresa oficială, regulile din robots.txt, sitemap-ul, semnalele din HTML, răspunsurile pentru diferite User-Agent-uri și prezența textelor importante în codul livrat.</strong></p>
      <p>Protocolul are nouă verificări, <code>TC-00</code> … <code>TC-08</code>. Observațiile lor nu sunt concluzii: devin diagnostic abia când li se aplică regulile publice din AVL-204, grupate în șase zone.</p>
      <table>
        <thead><tr><th>Verificare</th><th>Ce observă</th><th>Zona din AVL-204</th></tr></thead>
        <tbody>
          <tr><td>TC-00</td><td>contextul rulării: mediul, versiunile, planul</td><td>—</td></tr>
          <tr><td>TC-01</td><td>statusul, URL-ul final, redirecturile, tipul și dimensiunea fiecărei pagini</td><td>Z1</td></tr>
          <tr><td>TC-02</td><td>variantele <code>http</code>/<code>https</code> și <code>www</code>/fără <code>www</code></td><td>Z1</td></tr>
          <tr><td>TC-03</td><td>robots.txt, aplicat după RFC 9309 pentru fiecare pereche pagină–crawler</td><td>Z2</td></tr>
          <tr><td>TC-04</td><td>sitemap-ul declarat și căile convenționale</td><td>Z3</td></tr>
          <tr><td>TC-05</td><td>title, canonical, meta robots, X-Robots-Tag, limba, JSON-LD</td><td>Z4</td></tr>
          <tr><td>TC-06</td><td>răspunsurile pentru User-Agent-urile crawlerelor, comparate cu un client de referință</td><td>Z6</td></tr>
          <tr><td>TC-07</td><td>integritatea dovezilor: checksum-urile SHA-256</td><td>validitatea rulării</td></tr>
          <tr><td>TC-08</td><td>textele-cheie declarate, căutate în HTML-ul brut</td><td>Z5</td></tr>
        </tbody>
      </table>
      <p>În <a href="/lab/audit-ai-visibility">auditul AI Visibility</a>, această verificare răspunde la prima dintre cele patru întrebări: <em>poate fi accesată informația?</em> Celelalte straturi (identitatea entității, conținutul, răspunsurile observate pe platforme) se măsoară separat.</p>
      <p>De ce protocolul e construit așa, cu separarea dovezii de interpretare, e explicat în articolul <a href="/lab/articole/cum-verific-tehnic-un-site-pentru-ai-visibility">Cum verific tehnic un site pentru AI Visibility?</a>.</p>

      <h2>2. De ce delamatescu.ro?</h2>
      <p><strong>Pentru că e singurul site pe care îl pot verifica public fără să expun un client: e site-ul meu și al laboratorului, iar eu sunt reprezentantul care declară politica de acces.</strong></p>
      <p>AVL-203 se aplică numai entităților evaluate ca proiect sau client, cu fișa entității completată de reprezentant (AVL203-REQ-043, AVL204-REQ-015). Pentru delamatescu.ro, fișa și politica le-am declarat eu, la 25 octombrie 2026: acces permis tuturor crawlerelor (căutare, antrenare, fetch la cererea utilizatorului), iar paginile vreau să fie indexate.</p>
      <p>Alegerea are un cost: e un conflict de interese real, discutat în secțiunea 22.</p>

      <h2>3. Ce ipoteză testează T0?</h2>
      <p><strong>Ipoteza: pe cele 6 pagini declarate, la data capturii, delamatescu.ro nu prezintă nicio condiție tehnică care contrazice politica declarată (acces total, pagini indexabile).</strong></p>
      <p>Ipoteza ar fi infirmată de oricare dintre: un status <code>4xx</code>/<code>5xx</code> pe o pagină din plan, variante ale adresei care duc la destinații diferite, o regulă robots.txt care blochează un crawler declarat permis, lipsa unui sitemap accesibil, un <code>noindex</code>, un canonical spre altă pagină, texte-cheie absente din HTML-ul brut sau un răspuns diferit nefavorabil pentru un crawler.</p>

      <h2>4. Ce a cuprins planul de măsurare?</h2>
      <p><strong>Planul, înghețat înaintea capturii, a declarat 6 pagini (câte una pentru fiecare categorie obligatorie din AVL-203 §1.1, plus pagina de proiecte), 8 texte-cheie și politica de acces pentru 12 crawlere.</strong></p>
      <table>
        <thead><tr><th>Pagină</th><th>Categorie</th><th>URL</th><th>Texte-cheie</th></tr></thead>
        <tbody>
          <tr><td>P01</td><td>pagina principală</td><td>https://delamatescu.ro/</td><td>„Alex Matescu”</td></tr>
          <tr><td>P02</td><td>despre</td><td>https://delamatescu.ro/despre</td><td>„Alex Matescu”, „inginer”</td></tr>
          <tr><td>P03</td><td>contact și identitate</td><td>https://delamatescu.ro/contact</td><td>„Alex Matescu”</td></tr>
          <tr><td>P04</td><td>oferta principală</td><td>https://delamatescu.ro/lab/audit-ai-visibility</td><td>„audit AI Visibility”, „Alex Matescu”</td></tr>
          <tr><td>P05</td><td>referință</td><td>https://delamatescu.ro/lab</td><td>„AI Visibility Lab”</td></tr>
          <tr><td>P06</td><td>publicații și proiecte</td><td>https://delamatescu.ro/proiecte</td><td>„AI Visibility Lab”</td></tr>
        </tbody>
      </table>
      <p>Categoria „profil / CV” a fost declarată <code>NOT_APPLICABLE</code>: profilul profesional e pe pagina <code>/despre</code>, deja în plan. Articolele din <code>/blog</code> și <code>/lab</code>, prezente în sitemap, nu au fost testate individual.</p>
      <p>Crawlerele declarate, toate cu politica <code>PERMIS</code>:</p>
      <ul>
        <li><strong>căutare (matricea Core):</strong> Googlebot, bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot;</li>
        <li><strong>antrenare:</strong> GPTBot, ClaudeBot, Google-Extended, CCBot;</li>
        <li><strong>fetch la cererea utilizatorului:</strong> ChatGPT-User, Claude-User, Perplexity-User.</li>
      </ul>
      <p>Planul înghețat are sha256 <code>f79fb571540e1f5d55004583af68175df10bfa445a1ad18882c287d33c348826</code>.</p>

      <h2>5. Cum se rulează verificarea? Comenzile și ieșirea din terminal</h2>
      <p><strong>Verificarea are șase pași, fiecare o comandă a instrumentului <code>avl203_cli.py</code>: planul se validează și se îngheață, se capturează, se verifică integritatea, se extrag observațiile, se aplică grila și se scriu rapoartele.</strong></p>
      <p>Ieșirea comenzii de captură din 26 octombrie nu a fost păstrată: instrumentul scrie în terminal doar starea integrității și calea rulării, iar dovada capturii este jurnalul <code>manifest/requests.jsonl</code>, cu toate cele 56 de cereri. Ieșirile de mai jos sunt reale, din 28 octombrie 2026, și provin din două surse:</p>
      <ul>
        <li>pașii offline (verificare, analiză, diagnostic, rapoarte) au fost rulați din nou pe o <strong>copie</strong> a rulării T0; diagnosticul obținut este identic cu cel publicat (secțiunea 16);</li>
        <li>planul și captura provin dintr-o rulare <code>TEST</code> nouă pe aceleași 6 pagini. O rulare <code>TEST</code> nu face parte din serie și nu se compară cu T0 (AVL203-REQ-026); e aici doar ca să arate ce afișează comenzile.</li>
      </ul>
      <pre><code>$ CLI=.claude/skills/verificare-tehnica-avl203/scripts/avl203_cli.py

$ python3 $CLI plan validate evidence/work/avl203/plan-delamatescu-TEST-20261028.json
plan valid

$ python3 $CLI plan freeze evidence/work/avl203/plan-delamatescu-TEST-20261028.json
plan înghețat: evidence/work/avl203/plan-delamatescu-TEST-20261028.frozen.json
sha256: 45ba76cbc69e99eaa7c7efcac1dc618b4c64acd250ecf726a9a490e621401f2f

$ python3 $CLI capture --plan evidence/work/avl203/plan-delamatescu-TEST-20261028.frozen.json --out evidence/work/avl203
integritate: VALID
evidence/work/avl203/run_AVL203-delamatescu-ro-TEST-20261028T113141Z</code></pre>
      <p>Captura TEST a durat 1 minut și 35 de secunde. Pașii offline, pe copia rulării T0:</p>
      <pre><code>$ python3 $CLI verify --run evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z
integritate: VALID {'OK': 234}

$ python3 $CLI analyze --run evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z
integritate: VALID
evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z/derived/analysis-20261028T113119Z

$ python3 $CLI diagnose --run evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z --rules 0.3.0
Z1: nicio problemă observată
Z2: nicio problemă observată
Z3: nicio problemă observată
Z4: nicio problemă observată
Z5: nicio problemă observată
Z6: nu poate fi stabilit
109 constatări · 1 recomandări · 0 abateri

$ python3 $CLI report --run evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z
evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z/derived/analysis-20261028T113119Z/report.md

$ python3 $CLI client-report --run evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z --no-pdf
evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z/derived/analysis-20261028T113119Z/client-report.html</code></pre>
      <p>Comenzile întorc coduri de ieșire diferite după rezultat: <code>0</code> succes, <code>1</code> integritate <code>PARTIAL</code>, <code>2</code> plan invalid sau utilizare greșită, <code>3</code> captura nu a putut porni, <code>4</code> integritate <code>INVALID</code>. Toate comenzile de mai sus au întors <code>0</code>.</p>

      <h2>6. TC-00 — Ce se înregistrează despre rulare?</h2>
      <p><strong>Fiecare rulare are un identificator unic și un manifest cu mediul de execuție, versiunile protocolului, ale grilei și ale instrumentului, planul înghețat și jurnalul cererilor.</strong></p>
      <p>Extras din <code>manifest/env.txt</code> (numele mașinii a fost înlocuit în pachetul public, secțiunea 15):</p>
      <pre><code>start_utc=2026-10-26T08:52:34Z
--- curl --version
curl 8.7.1 (x86_64-apple-darwin25.0) libcurl/8.7.1 (SecureTransport) LibreSSL/3.3.6 zlib/1.2.12 nghttp2/1.68.1
--- sw_vers
ProductName:		macOS
ProductVersion:		26.5.1
--- python
3.9.6 (default, May 22 2026, 11:13:45)  [Clang 21.0.0 (clang-2100.1.1.101)]</code></pre>
      <p>Extras din <code>manifest/run-final.json</code>: 56 de cereri logice, 56 de încercări, 0 repetări, 0 erori <code>curl</code>, 0 cereri omise; sfârșitul capturii la <code>2026-10-26T08:54:03Z</code>.</p>

      <h2>7. TC-01 — Răspund paginile direct?</h2>
      <p><strong>Da. Toate cele 6 pagini au răspuns <code>200</code>, fără redirecturi, cu <code>text/html; charset=utf-8</code>, iar <code>curl</code> a ieșit cu codul <code>0</code> la fiecare cerere.</strong></p>
      <p>Comanda, în forma din AVL-203 §5 (instrumentul o rulează pentru fiecare pagină):</p>
      <pre><code>curl --silent --show-error --location --compressed \\
  --connect-timeout 15 --max-time 45 \\
  --dump-header page.headers --output page.body \\
  --write-out 'http_code=%{http_code}\\nurl_effective=%{url_effective}\\nnum_redirects=%{num_redirects}\\n...' \\
  "https://delamatescu.ro/" &gt; page.metrics</code></pre>
      <p>Extras din <code>http/P01.try1.metrics</code>:</p>
      <pre><code>http_code=200
url_effective=https://delamatescu.ro/
num_redirects=0
content_type=text/html; charset=utf-8
size_download=10061
http_version=2
ssl_verify_result=0
curl_exit=0</code></pre>
      <p>Extras din <code>http/P01.try1.headers</code>:</p>
      <pre><code>HTTP/2 200
content-type: text/html; charset=utf-8
cache-control: no-cache, must-revalidate, max-age=0
strict-transport-security: max-age=31536000; includeSubDomains
content-encoding: gzip
server: cloudflare</code></pre>
      <p><code>size_download</code> (10.061 octeți) e dimensiunea comprimată transferată; corpul salvat, decomprimat, are 42.518 octeți. Constatarea după grilă: <code>R-Z1-08</code>, „nicio problemă observată”, pe fiecare pagină. Un <code>200</code> nu înseamnă că pagina e indexată (AVL203-REQ-012).</p>

      <h2>8. TC-02 — Duc toate variantele adresei la același loc?</h2>
      <p><strong>Da. Cele patru variante converg spre <code>https://delamatescu.ro/</code>; statusul TC-02 este <code>CONVERGENT</code>.</strong></p>
      <table>
        <thead><tr><th>Cerere</th><th>Primul răspuns</th><th>Destinația finală</th><th>Redirecturi</th></tr></thead>
        <tbody>
          <tr><td><code>http://delamatescu.ro/</code></td><td><code>301 Moved Permanently</code></td><td><code>200</code> https://delamatescu.ro/</td><td>1</td></tr>
          <tr><td><code>http://www.delamatescu.ro/</code></td><td><code>302 Found</code></td><td><code>200</code> https://delamatescu.ro/</td><td>1</td></tr>
          <tr><td><code>https://delamatescu.ro/</code></td><td><code>200</code></td><td>https://delamatescu.ro/</td><td>0</td></tr>
          <tr><td><code>https://www.delamatescu.ro/</code></td><td><code>302</code></td><td><code>200</code> https://delamatescu.ro/</td><td>1</td></tr>
        </tbody>
      </table>
      <p><strong>O observație din afara grilei.</strong> Variantele cu <code>www</code> redirecționează cu <code>302</code> (redirecționare temporară, <a href="https://www.rfc-editor.org/rfc/rfc9110#section-15.4.3" target="_blank" rel="noopener noreferrer">RFC 9110 §15.4.3</a>), iar <code>http://delamatescu.ro/</code> cu <code>301</code> (permanentă, <a href="https://www.rfc-editor.org/rfc/rfc9110#section-15.4.2" target="_blank" rel="noopener noreferrer">RFC 9110 §15.4.2</a>). Grila AVL-204 nu evaluează tipul redirectului, deci observația nu devine constatare. O consemnez pentru că un <code>301</code> declară explicit adresa oficială ca permanentă; o eventuală schimbare se verifică la F1.</p>

      <h2>9. TC-03 — Ce permite robots.txt fiecărui crawler?</h2>
      <p><strong>robots.txt permite accesul tuturor celor 12 crawlere declarate, pe toate cele 6 pagini. Regulile au fost aplicate cu un parser conform RFC 9309, nu cu <code>grep</code>.</strong></p>
      <p>Fișierul are 24 de grupuri <code>User-agent</code>, nicio linie neinterpretabilă și o declarație <code>Sitemap</code>. Extras din <code>robots/delamatescu.ro.try1.body</code>, cu numerele de linie:</p>
      <pre><code> 1  User-agent: Googlebot
 2  Allow: /
 ...
19  # AI / LLM crawlers (training + retrieval)
20  User-agent: GPTBot
21  Allow: /
 ...
26  User-agent: OAI-SearchBot
27  Allow: /
 ...
35  User-agent: Claude-SearchBot
36  Allow: /
 ...
50  User-agent: PerplexityBot
51  Allow: /
 ...
    User-agent: *
    Allow: /

    Sitemap: https://delamatescu.ro/sitemap.xml</code></pre>
      <p>Pentru fiecare pereche pagină–crawler, observația păstrează metoda și regula câștigătoare. Un exemplu din diagnostic: pentru P01 și OAI-SearchBot, „permis; metoda PARSER; regula câștigătoare: linia 27 allow: /”.</p>
      <p>Grila AVL-204 0.3.0 evaluează zona Z2 pentru cei 5 crawleri de căutare și pentru cei 4 de antrenare (AVL204-REQ-018): 9 crawlere × 6 pagini = 54 de constatări <code>R-Z2-05</code>, toate „nicio problemă observată”. Cei 3 agenți de fetch la cererea utilizatorului rămân observații: furnizorii declară că pentru ei regulile robots.txt pot să nu se aplice (AVL-203 §6). Robots.txt nu e o formă de autorizare a accesului și nu dovedește indexarea (<a href="https://www.rfc-editor.org/rfc/rfc9309" target="_blank" rel="noopener noreferrer">RFC 9309</a> §1.3).</p>

      <h2>10. TC-04 — Este declarat sitemap-ul?</h2>
      <p><strong>Da. robots.txt declară <code>https://delamatescu.ro/sitemap.xml</code>, care răspunde <code>200</code> cu un document XML de 200 de adrese; statusul TC-04 este <code>DECLARED</code>.</strong></p>
      <table>
        <thead><tr><th>Sitemap</th><th>Tip</th><th>Răspuns</th></tr></thead>
        <tbody>
          <tr><td>https://delamatescu.ro/sitemap.xml</td><td>declarat</td><td><code>200</code>, XML</td></tr>
          <tr><td>https://delamatescu.ro/sitemap.xml</td><td>cale convențională</td><td><code>200</code>, XML</td></tr>
          <tr><td>https://delamatescu.ro/sitemap_index.xml</td><td>cale convențională</td><td><code>404</code>, HTML</td></tr>
        </tbody>
      </table>
      <p>Începutul fișierului <code>sitemap/declared01.try1.body</code>:</p>
      <pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
  &lt;url&gt;
    &lt;loc&gt;https://delamatescu.ro/&lt;/loc&gt;
    &lt;changefreq&gt;weekly&lt;/changefreq&gt;
    &lt;priority&gt;1.0&lt;/priority&gt;
  &lt;/url&gt;</code></pre>
      <p><code>404</code> la <code>/sitemap_index.xml</code> nu e o problemă: calea convențională e doar o probă suplimentară când există un sitemap declarat. Statusul descrie declarația și accesibilitatea, nu validitatea completă a sitemap-ului și nici faptul că tot site-ul poate fi descoperit.</p>

      <h2>11. TC-05 — Ce semnale declară paginile?</h2>
      <p><strong>Toate cele 6 pagini au <code>&lt;title&gt;</code>, un canonical spre propria adresă și <code>lang="ro"</code>; niciuna nu are <code>noindex</code> sau <code>X-Robots-Tag</code>; toate blocurile JSON-LD (10, pe 6 pagini) au sintaxă JSON validă.</strong></p>
      <p>Extras din <code>http/P02.try1.body</code>:</p>
      <pre><code>&lt;html lang="ro"
&lt;title&gt;Despre Alex Matescu — Inginer, antreprenor și autor&lt;/title&gt;
&lt;link rel="canonical" href="https://delamatescu.ro/despre"/&gt;</code></pre>
      <p>Doar pagina principală are meta robots explicit: <code>index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1</code>. Celelalte nu au meta robots, ceea ce nu le exclude din căutare.</p>
      <p>Constatarea după grilă: <code>R-Z4-09</code>, „nicio problemă observată”, pe fiecare pagină. Limitele: canonicalul declarat nu e neapărat cel ales de Google, iar un JSON valid sintactic nu e un Schema.org valid semantic. Lipsa JSON-LD ar fi fost doar o observație, nu o problemă (AVL-204 0.3.0, regula <code>R-Z4-06</code> retrasă).</p>

      <h2>12. TC-08 — Sunt textele importante în HTML-ul livrat de server?</h2>
      <p><strong>Da. Toate cele 8 texte-cheie declarate au statusul <code>PRESENT_IN_BODY</code>: apar în corpul HTML-ului brut, nu doar în scripturi sau după rularea JavaScript.</strong></p>
      <p>Pentru fiecare text, observația păstrează pozițiile potrivirilor (zonă, linie, coloană). Exemple:</p>
      <pre><code>P01 KT01 „Alex Matescu”: PRESENT_IN_BODY · body L1:7866; body L1:10636; body L1:13135
P02 KT03 „inginer”: PRESENT_IN_BODY · body L1:9073; body L1:9231; body L1:10119
P04 KT05 „audit AI Visibility”: PRESENT_IN_BODY · body L1:11511; body L4:15; body L9:62</code></pre>
      <p>Constatarea după grilă: <code>R-Z5-04</code>, „nicio problemă observată”, pe fiecare pagină. Rezultatul descrie octeții capturați, nu pagina randată în browser.</p>

      <h2>13. TC-06 — Primesc crawlerele aceeași pagină ca un vizitator?</h2>
      <p><strong>Statusul, URL-ul final și headerele sunt identice pentru toți cei 5 crawleri de căutare și pentru clientul de referință, pe toate paginile. Conținutul nu a putut fi comparat după regulile grilei, pentru că diferă chiar între două capturi identice ale clientului de referință.</strong></p>
      <p>Protocolul cere două capturi ale clientului de referință, cu aceiași parametri (AVL203-REQ-019). Pentru P01:</p>
      <table>
        <thead><tr><th>Captură</th><th>Octeți transferați</th><th>sha256 (început)</th></tr></thead>
        <tbody>
          <tr><td>referință 1</td><td>10.109</td><td><code>fa04f81aa515368e</code></td></tr>
          <tr><td>referință 2</td><td>10.119</td><td><code>7343888b289daaea</code></td></tr>
          <tr><td>Googlebot</td><td>10.083</td><td><code>236db156236c7398</code></td></tr>
          <tr><td>OAI-SearchBot</td><td>10.107</td><td><code>093cb18e9fa2083a</code></td></tr>
        </tbody>
      </table>
      <p>Cele două capturi de referință diferă, deci diferențele față de crawlere nu pot fi atribuite User-Agent-ului (AVL203-REQ-020). Pentru fiecare crawler, comparația dă „status/URL/headere IDENTIC; conținut NEATRIBUIBIL (variabilitate intrinsecă)”. După grilă: 30 de constatări <code>R-Z6-04</code> „nu poate fi stabilit” (5 crawleri × 6 pagini) și 6 constatări <code>R-Z6-05</code> „nicio problemă observată” pentru status, URL și headere.</p>
      <p><strong>De unde vine variabilitatea.</strong> Am căutat diferențele în corpurile capturate. Sunt două surse:</p>
      <ol>
        <li>un token semnat, atașat unui script de evenimente injectat de platforma pe care e construit site-ul (Lovable), cu propria dată de expirare, care diferă la fiecare cerere:</li>
      </ol>
      <pre><code>... data-context-token="v1.eyJwcm9qZWN0X2lkIjoibG92cF8z...MDAyOWQ2NTI3NTU1ZmZkODQiLCJleHAiOjE3OTU1OTY3Nzh9.YguA2Oc-9IwG..."
... data-context-token="v1.eyJwcm9qZWN0X2lkIjoibG92cF8z...MDAyOWQ2NTI3NTU1ZmZkODQiLCJleHAiOjE3OTU1OTY3ODh9.P5Bn3ouKcqUe..."</code></pre>
      <ol start="2">
        <li>marcajele de timp ale randării pe server, în starea de hidratare a paginii (<code>u:1793004778987</code> în prima captură, <code>u:1793004788213</code> în a doua).</li>
      </ol>
      <p><strong>O verificare din afara grilei.</strong> Când aceste două părți sunt înlocuite cu un marcaj fix, toate cele 42 de corpuri capturate pentru TC-06 (6 pagini × 2 capturi de referință și 5 crawleri) devin identice, pagină cu pagină. Grila AVL-204 nu permite această mascare, iar decizia de la 25 octombrie 2026 a fost să rămână așa. Diagnosticul rămâne „nu poate fi stabilit”. Rezultatul mascării e o observație suplimentară: indică faptul că diferențele observate nu țin de User-Agent, dar nu înlocuiește regula.</p>
      <p>Un User-Agent declarat de <code>curl</code> nu e crawlerul autentificat al furnizorului: cererile au plecat de pe IP-ul meu, nu din infrastructura OpenAI, Anthropic sau Perplexity. O diferență, dacă ar fi existat, n-ar fi fost dovadă de cloaking (AVL203-REQ-021).</p>

      <h2>14. TC-07 — Cum se verifică integritatea dovezilor?</h2>
      <p><strong>Fiecare artefact al rulării are un checksum SHA-256 în <code>integrity/sha256sums.txt</code>; verificarea recalculează toate cele 234 de sume și le compară.</strong></p>
      <pre><code>$ shasum -a 256 -c integrity/sha256sums.txt
agents/P01_bingbot.try1.body: OK
agents/P01_bingbot.try1.headers: OK
...</code></pre>
      <p>Pe rularea originală, verificarea dă <code>VALID {'OK': 234}</code> (secțiunea 5). Indexul <code>evidence-index.tsv</code> leagă fiecare dintre cele 224 de dovezi de cererea, verificarea, pagina și User-Agent-ul care au produs-o:</p>
      <pre><code>evidence_id	path	kind	size_bytes	sha256	request_id	attempt	tc	role	page_id	url	ua_key
AVL203-delamatescu-ro-T0-20261026T085234Z-E0001	http/P01.try1.body	body	42518	08edf776…	R0001	1	TC-01	primary	P01	https://delamatescu.ro/	client</code></pre>

      <h2>15. Pachetul de dovezi publicat</h2>
      <p><strong>Rularea e publicată integral ca GitHub Release, <a href="${RELEASE}" target="_blank" rel="noopener noreferrer"><code>evidence-avl203-delamatescu-ro-t0-v1.0</code></a>: arhiva rulării, analiza din 26 octombrie (grila 0.3.0), raportul tehnic, exemplul de raport pentru client, un README și sumele SHA-256 ale fișierelor.</strong></p>
      <p>Un singur fișier diferă de captură: în <code>manifest/env.txt</code> am înlocuit numele mașinii pe care a rulat captura cu <code>[hostname-redactat]</code>. Fișierul descrie mediul rulării și nu susține nicio constatare. Consecința e vizibilă și asumată: pe pachetul public, verificarea dă <code>PARTIAL</code>, nu <code>VALID</code>:</p>
      <pre><code>$ python3 $CLI verify --run run_AVL203-delamatescu-ro-T0-20261026T085234Z
Artefacte cu probleme:
  - manifest/env.txt: MODIFICAT
integritate: PARTIAL {'OK': 233, 'MODIFICAT': 1}</code></pre>
      <p>Checksum-ul original al fișierului și cel din pachet sunt trecute în README-ul release-ului. Celelalte 233 de artefacte corespund sumelor de la captură.</p>

      <h2>16. Este diagnosticul reproductibil?</h2>
      <p><strong>Da, pe aceleași dovezi. Reanaliza din 28 octombrie, pe o copie a rulării, cu aceeași grilă (0.3.0) și aceeași implementare (v0.5.0), a produs exact aceleași constatări, zone și recomandări ca analiza din 26 octombrie.</strong></p>
      <p>Rularea are două analize. Prima, din 26 octombrie la 08:54 UTC, a folosit grila 0.2.0 și a dat 85 de constatări: Z2 cuprindea atunci doar cei 5 crawleri de căutare (30 de constatări). A doua, după deciziile din 26 octombrie (grila 0.3.0), a adăugat crawlerii de antrenare în Z2 (54 de constatări) și a dat 109 constatări în total. Starea fiecărei zone e aceeași în ambele. Doar a doua e publicată în pachet.</p>
      <p><strong>Planul T0 nu mai trece validarea instrumentului actual.</strong> Planul a fost înghețat sub AVL-203 0.5.0 și AVL-204 0.2.0:</p>
      <pre><code>$ python3 $CLI plan validate evidence/work/avl203/plan-delamatescu-T0.frozen.json
Erori:
  - protocol_version 0.5.0 ≠ versiunea implementată 0.6.0
  - grid_version 0.2.0 ≠ versiunea implementată 0.3.0
plan INVALID</code></pre>
      <p>Nu e o eroare a rulării T0, ci o regulă a instrumentului: un plan se îngheață pentru o versiune a protocolului. Pentru F1 se îngheață un plan nou, cu aceleași pagini și texte-cheie, iar schimbarea de versiune se declară la comparație.</p>

      <h2>17. Diagnosticul pe zone</h2>
      <p><strong>Z1–Z5: „nicio problemă observată”. Z6: „nu poate fi stabilit” pentru conținut, „nicio problemă observată” pentru status, URL și headere. 109 constatări, 0 abateri de la grilă, integritate <code>VALID</code>.</strong></p>
      <table>
        <thead><tr><th>Zonă</th><th>Ce întreabă</th><th>Constatări</th><th>Stare</th></tr></thead>
        <tbody>
          <tr><td>Z1</td><td>Răspunsul site-ului și adresa oficială</td><td>6 × <code>R-Z1-08</code></td><td>nicio problemă observată</td></tr>
          <tr><td>Z2</td><td>Regulile pentru crawlere</td><td>54 × <code>R-Z2-05</code></td><td>nicio problemă observată</td></tr>
          <tr><td>Z3</td><td>Descoperirea prin sitemap</td><td>1 × <code>R-Z3-05</code></td><td>nicio problemă observată</td></tr>
          <tr><td>Z4</td><td>Semnalele paginilor</td><td>6 × <code>R-Z4-09</code></td><td>nicio problemă observată</td></tr>
          <tr><td>Z5</td><td>Conținutul livrat în HTML</td><td>6 × <code>R-Z5-04</code></td><td>nicio problemă observată</td></tr>
          <tr><td>Z6</td><td>Răspunsurile pentru crawlere declarate</td><td>30 × <code>R-Z6-04</code>, 6 × <code>R-Z6-05</code></td><td>nu poate fi stabilit</td></tr>
        </tbody>
      </table>
      <p>Diagnosticul produce o singură recomandare, <code>REC-01</code>, de tip „verificare suplimentară”, fără clasă de prioritate (AVL204-REQ-009): comparația de conținut de la Z6 se repetă la o rulare nouă sau se completează cu o extensie declarată (AVL203-REQ-038). Nu există nicio recomandare cu prioritate, deci pragurile de prioritizare P1–P3, încă o decizie deschisă în AVL-204 §15, nu au putut fi testate pe acest caz.</p>
      <p>„Nicio problemă observată” descrie condițiile testate. Nu certifică site-ul și nu garantează indexarea, citarea, menționarea sau recomandarea într-un răspuns AI (AVL204-REQ-006).</p>

      <h2>18. Ce primește un client? Raportul pe zone</h2>
      <p><strong>Clientul primește un PDF de trei pagini: câte o întrebare pe înțelesul lui pentru fiecare zonă, starea și explicația ei, recomandările cu prioritate, paginile testate, cum se citesc stările și limitele verificării. Nu primește anexa tehnică.</strong></p>
      <p>Raportul tehnic (<code>report.md</code>, 338 de linii, 109 constatări cu identificatorii regulilor) rămâne intern: clientul nu îl poate folosi, iar formularea pentru client trebuie să rămână aceeași de la un client la altul. PDF-ul se generează din același diagnostic, cu comanda <code>client-report</code>, și trece prin aceeași verificare automată a formulărilor excluse de AVL-204 §8.</p>
      <p>Exemplul pentru delamatescu.ro e publicat: <a href="/files/lab/verificare-tehnica-delamatescu-ro/raport-client-exemplu-delamatescu-ro-T0.pdf">raportul pentru client, T0 (PDF)</a>. Varianta publică diferă de cea pentru client doar prin ultima linie din subsol, care spune că e un exemplu pe site-ul propriu al laboratorului. Rapoartele clienților nu se publică.</p>
      <p>Concluzia din raport, pentru cazul „acces curat”: <em>în condițiile testate, nu am găsit blocaje tehnice de acces; dacă site-ul are probleme de vizibilitate în căutare sau în răspunsurile AI, cauza nu apare în această verificare și trebuie căutată în celelalte etape ale auditului: identitatea entității, conținutul și sursele.</em></p>

      <h2>19. Ce NU demonstrează acest studiu</h2>
      <ul>
        <li><strong>Nu demonstrează indexarea.</strong> Un <code>200</code> și o regulă <code>Allow</code> arată că pagina poate fi cerută, nu că e în indexul vreunui motor.</li>
        <li><strong>Nu demonstrează accesul real al furnizorilor.</strong> Cererile au fost trimise de pe infrastructura mea, cu User-Agent-uri declarate. Un firewall sau un CDN poate trata altfel IP-urile furnizorilor.</li>
        <li><strong>Nu demonstrează citarea, menționarea sau recomandarea</strong> delamatescu.ro în vreun răspuns AI. Acelea se măsoară separat, de exemplu în <a href="/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz">studiul Tabula Rasa</a>.</li>
        <li><strong>Nu acoperă tot site-ul.</strong> Eșantionul are 6 pagini; articolele din sitemap nu au fost testate individual.</li>
        <li><strong>Nu descrie pagina randată.</strong> S-a analizat HTML-ul brut trimis de server, nu DOM-ul după rularea JavaScript.</li>
        <li><strong>Nu stabilește că pagina e identică pentru crawlere.</strong> Comparația de conținut a rămas „nu poate fi stabilit”; verificarea cu mascare din secțiunea 13 e o observație, nu o constatare.</li>
        <li><strong>Nu e valabil în afara datei capturii.</strong> Site-ul s-a schimbat după 26 octombrie 2026; starea de acum se măsoară la F1.</li>
        <li><strong>Nu validează protocolul.</strong> AVL-203 și AVL-204 sunt drafturi, iar implementarea e candidată. O rulare fără probleme nu testează regulile pentru probleme.</li>
      </ul>

      <h2>20. Ce urmărim la F1?</h2>
      <ul>
        <li>Același eșantion de 6 pagini și aceleași texte-cheie, cu un plan nou înghețat sub versiunea curentă a protocolului (secțiunea 16).</li>
        <li>Dacă variantele <code>www</code> trec de la <code>302</code> la <code>301</code> (secțiunea 8).</li>
        <li>Dacă variabilitatea de la Z6 persistă și dacă o extensie declarată (AVL203-REQ-038) o poate rezolva în limitele grilei (<code>REC-01</code>).</li>
        <li>Dacă apare o primă constatare cu prioritate, care să permită testarea pragurilor P1–P3.</li>
      </ul>

      <h2>21. Întrebări frecvente</h2>
      <h3>Înseamnă „nicio problemă observată” că site-ul apare în ChatGPT sau Google?</h3>
      <p>Nu. Verificarea arată că paginile pot fi obținute și citite în condițiile testate. Apariția în rezultate și în răspunsurile AI depinde de indexare, de selecția surselor și de interogare, care nu se măsoară aici.</p>
      <h3>De ce Z6 e „nu poate fi stabilit” dacă paginile sunt identice după mascare?</h3>
      <p>Pentru că grila compară conținutul fără mascare: dacă două capturi identice ale clientului de referință diferă, nicio diferență nu poate fi atribuită User-Agent-ului. Mascarea arată de unde vine variabilitatea, dar nu e o regulă a grilei.</p>
      <h3>Pot cere această verificare pentru site-ul meu?</h3>
      <p>Da, ca parte a unui <a href="/lab/audit-ai-visibility">audit AI Visibility</a>. Ai nevoie de politica ta de acces pentru crawlere, de lista paginilor importante și de textele care trebuie să apară în ele. Primești raportul pe zone, ca în exemplul din secțiunea 18.</p>

      <h2>22. Transparență metodologică</h2>
      <p><strong>Conflict de interese.</strong> Entitatea evaluată e site-ul meu, iar politica de acces am declarat-o eu. Am scris protocolul și grila, am condus rularea și am interpretat rezultatul. Un rezultat favorabil propriului site e exact rezultatul pe care un autor ar fi tentat să-l raporteze. De aceea am publicat dovezile brute, cu checksum-uri, și regulile după care se interpretează. Oricine poate reface diagnosticul din pachet.</p>
      <p><strong>Asistență AI.</strong> Implementarea candidată (instrumentul <code>verificare-tehnica-avl203</code>), rularea și redactarea acestui studiu au fost făcute cu asistența unui model AI (Claude, Anthropic). Claude-SearchBot și ClaudeBot sunt printre crawlerele evaluate; regulile s-au aplicat la fel tuturor crawlerelor.</p>
      <p><strong>Versiuni.</strong> Captura s-a făcut cu AVL-203 0.5.0, grila 0.2.0 și implementarea v0.4.0. Analiza publicată folosește grila 0.3.0 și implementarea v0.5.0, adoptate în aceeași zi, după captură. Nu e o reinterpretare favorabilă: starea zonelor e aceeași în ambele analize (secțiunea 16).</p>
      <p><strong>Ce se păstrează.</strong> Toate cele 234 de artefacte ale rulării, ambele analize (local) și analiza 0.3.0 în pachetul public. Rularea TEST din 28 octombrie, folosită doar pentru ieșirea din terminal, nu e publicată și nu intră în serie.</p>
      <p><strong>O modificare a dovezilor.</strong> Numele mașinii, înlocuit în <code>manifest/env.txt</code> în pachetul public (secțiunea 15).</p>
      <p><strong>Observații din afara grilei.</strong> Tipul redirectului <code>www</code> (secțiunea 8) și comparația cu mascare (secțiunea 13) sunt observații. Nu au schimbat nicio constatare.</p>
      <p>Corelația temporală dintre o schimbare tehnică și o schimbare de vizibilitate nu va fi prezentată drept cauzalitate (AVL-203 §14).</p>
      <p><strong>Maturitatea protocolului.</strong> AVL-203 și grila AVL-204 sunt la început: drafturi 0.x, construite din situațiile întâlnite până acum, adică trei rulări de test și prima rulare T0, toate pe propriul site. Vor fi revizuite pe măsură ce apar situații pe care nu le-au prevăzut. Un caz pe care regulile nu îl acoperă nu se interpretează din mers: nu poate primi „problemă confirmată”, e declarat ca abatere de la grilă și devine propunere pentru versiunea următoare, cu modificarea trecută în istoricul versiunilor. Cadrul metodologic (<a href="/lab/metodologie">AVL-202</a>) și standardul de dovezi (<a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200</a>) sunt active; declarația se referă la protocolul tehnic și la grila lui. Secvența de până acum și pașii următori:</p>
      <pre><code>1. Draft
   AVL-203 0.1.0 (1 oct.), AVL-204 0.1.0 (22 oct.)
        ↓
2. Rulări TEST pe delamatescu.ro (2 și 25 oct.)
   revizii: AVL-203 0.2.0 și 0.5.0, AVL-204 0.2.0
        ↓
3. Rularea T0 pe delamatescu.ro (26 oct.)
   decizii: AVL-203 0.6.0, AVL-204 0.3.0
        ↓
4. Publicare (28 oct.)
   CS-002, pachetul de dovezi, raportul-exemplu
        ↓
──── de aici, pașii prevăzuți de protocol ────
5. Rulări pe proiecte și clienți
   (fișa entității completată de reprezentant)
        ↓
6. Situație neacoperită de reguli
   nu devine „problemă confirmată”;
   se declară ca abatere în raport
        ↓
7. Propunere de modificare
   versiune nouă, cu rând în istoric
        ↓
8. Remăsurare F1 … Fn, cu plan nou înghețat
   versiunile diferite se declară la comparație
        ↓
   pașii 5–8 se repetă
        ↓
9. Activare 1.0.0, după închiderea
   deciziilor deschise (AVL-203 §19, AVL-204 §15)</code></pre>
      <p>Pașii 1–4 s-au întâmplat. Pașii 5–9 sunt cei prevăzuți de reguli, nu un calendar: protocolul se îmbunătățește când apare un caz pe care nu l-a prevăzut, nu la o dată fixă. Rapoartele clienților nu se publică; ce se publică e modificarea regulilor, cu motivul ei, în istoricul versiunilor. Regulile citate sunt <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL204-REQ-003 și AVL204-REQ-012</a> (cazul neacoperit și abaterea declarată), <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL204-REQ-013 și AVL204-REQ-014</a> (versiunea nouă și comparația între versiuni).</p>
      <p><strong>Status: studiu longitudinal în desfășurare. Următorul punct de măsurare: F1.</strong></p>

      <h2>Istoricul versiunilor</h2>
      <table>
        <thead><tr><th>Versiune</th><th>Dată</th><th>Modificări</th></tr></thead>
        <tbody>
          <tr><td>1.0</td><td>28 octombrie 2026</td><td>Publicare inițială: punctul T0 (captura din 26 octombrie 2026), verificările TC-00…TC-08 cu exemple din dovezi, ieșirea din terminal a comenzilor, diagnosticul după AVL-204 0.3.0, exemplul de raport pentru client și pachetul de dovezi <code>evidence-avl203-delamatescu-ro-t0-v1.0</code>.</td></tr>
          <tr><td>1.1</td><td>28 octombrie 2026</td><td>Rezumatul restructurat în liste: rezultatul pe zone, ce conține studiul și ce nu spune. Conținutul nu s-a schimbat.</td></tr>
          <tr><td>1.2</td><td>28 octombrie 2026</td><td>Transparența metodologică: paragraf nou „Maturitatea protocolului”, cu secvența pașilor de la draft la publicare și pașii următori prevăzuți de protocol. Celelalte secțiuni nu au fost modificate.</td></tr>
        </tbody>
      </table>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală: 28 octombrie 2026.</em></p>
`;
