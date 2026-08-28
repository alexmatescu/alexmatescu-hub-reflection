import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const socialMediaVizibilitateAiMeta: LabArticleMeta = {
  title: "De ce 10.000 de urmăritori pe LinkedIn nu te fac automat vizibil pentru AI",
  description:
    "Cum diferă vizibilitatea umană de vizibilitatea AI în social media. Analiză bazată pe surse publice, studii comerciale tratate separat după metodologie și reguli operaționale pentru artefacte persistente, entity resolution și distribuție.",
  canonical: "https://delamatescu.ro/lab/articole/social-media-vizibilitate-ai",
  category: "Entities & Citations",
  articleType: "Analiză",
  datePublished: "2026-08-14",
  dateModified: "2026-08-14",
  about: [
    { name: "AI visibility" },
    { name: "Social media" },
    { name: "Generative Engine Optimization" },
    { name: "Entity resolution" },
  ],
  faq: [
    {
      q: "AI-ul poate citi postările mele de pe LinkedIn?",
      a: "Unele postări LinkedIn au URL public, dar accesul și indexarea externă sunt mai puțin predictibile decât în cazul unui domeniu propriu. LinkedIn documentează explicit indexabilitatea profilurilor publice, iar situația postărilor și crawlerelor se poate schimba în timp.",
    },
    {
      q: "Ce platformă socială produce cea mai multă vizibilitate AI?",
      a: "Nu există un răspuns universal. Rezultatul depinde de motor, prompturi, perioadă și metodologie. În raportul Lantern din februarie 2026, YouTube este domeniul social cel mai bine plasat în datasetul analizat, dar alte studii pot găsi rezultate diferite.",
    },
    {
      q: "De ce Reddit este citat frecvent în unele sisteme?",
      a: "Reddit produce pagini publice cu discuții în limbaj natural și are acorduri de acces/licențiere cu Google și OpenAI. Aceste acorduri pot facilita accesul, dar nu demonstrează că ele sunt cauza unică sau dominantă a citărilor.",
    },
    {
      q: "Merită să mai postez pe LinkedIn?",
      a: "Da, pentru distribuție către oameni, networking și reputație profesională. Pentru ideile importante este prudent să existe și o versiune persistentă pe un domeniu controlat direct.",
    },
    {
      q: "Contează numărul de urmăritori pentru citarea AI?",
      a: "Numărul de urmăritori nu este un factor public demonstrat de citare AI. Unele platforme sau sisteme pot avea acces la semnale de popularitate, însă efectul lor exact nu este public.",
    },
    {
      q: "Un cont de X ajută la vizibilitatea AI?",
      a: "Depinde de motor și de forma accesului. X poate fi mai restrictiv pentru acces extern decât platformele complet deschise, iar situația se poate schimba. Nu există bază pentru un verdict permanent de tip „ajută” sau „nu ajută”.",
    },
    {
      q: "Pe ce platforme merită să fii prezent în România?",
      a: "Ca orientare la 10 august 2026: domeniu propriu și identitate coerentă în primul rând, apoi platformele și sursele unde publicul relevant există efectiv. Facebook, Instagram și Threads trebuie evaluate separat pentru web retrieval extern și pentru ecosistemul Meta AI.",
    },
    {
      q: "Contează diacriticele pentru vizibilitatea AI în română?",
      a: "Consistența ajută, dar nu există dovadă că variantele cu și fără diacritice sunt tratate automat ca entități diferite. O formă canonică și aliasurile relevante din datele structurate pot ajuta la clarificarea identității fără a garanta ranking sau citare.",
    },
    {
      q: "Ce procent dintre români folosesc AI?",
      a: "Depinde de metodologie. Eurostat raportează 17,8% pentru România în 2025 în rândul persoanelor 16–74 ani care folosiseră instrumente AI generative în ultimele trei luni. Reveal raportează 68% în propriul studiu din 2026, pe baza unei metodologii diferite.",
    },
    {
      q: "Cum aleg un consultant GEO/AEO?",
      a: "Cere metodologia de măsurare, baseline-ul, lista de motoare și prompturi, ordinea verificărilor tehnice și limitele serviciului. Orice promisiune de apariție organică garantată într-un anumit răspuns AI trebuie tratată cu scepticism.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const socialMediaVizibilitateAiHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-08-14">14 august 2026</time> · Actualizat: <time datetime="2026-08-14">14 august 2026</time> · Ultima verificare factuală: <time datetime="2026-08-14">14 august 2026</time></p>

      <p><strong>Vizibilitatea socială și vizibilitatea AI nu sunt același lucru. Numărul de urmăritori, reach-ul și engagementul unei platforme nu garantează că ideile publicate acolo pot fi recuperate, interpretate sau citate de un sistem AI. Pentru retrieval și citare contează în special dacă informația lasă în urmă un artefact persistent, adresabil, accesibil și ușor de extras. Platforma contează, dar accesul diferă între motoare și se schimbă în timp.</strong></p>

      <p>Acest articol separă explicit patru niveluri de certitudine: <strong>fapte documentate</strong>, <strong>rezultate ale unor studii comerciale specifice</strong>, <strong>interpretări AI Visibility Lab</strong> și <strong>ipoteze de lucru</strong>. Comportamentul motoarelor AI, politicile platformelor sociale și ponderile surselor citate se schimbă frecvent; afirmațiile despre starea actuală sunt datate și nu trebuie tratate ca adevăruri permanente.</p>

      <h2>Distincția care contează: artefact sau flux</h2>

      <p>Reflexul comun este să întrebi „ce platformă contează pentru AI?”. Întrebarea mai utilă este: <strong>ce rămâne în urmă după ce publici și prin ce mecanism poate fi recuperat?</strong></p>

      <p>Sistemele AI pot obține informații prin mecanisme diferite: crawling public, indexuri proprii, motoare de căutare, API-uri, browsere automatizate, integrări contractuale sau alte surse de date. De aceea, nu este corect să presupunem că toate sistemele „văd webul” în același fel sau că un URL public este singura cale prin care conținutul poate ajunge într-un răspuns.</p>

      <h3>Legea artefactului — principiu operațional AI Visibility Lab</h3>

      <p><strong>Cu cât un conținut lasă în urmă un artefact persistent, adresabil, accesibil și ușor de extras, cu atât cresc șansele ca el să poată fi regăsit, interpretat și citat de sisteme AI care folosesc retrieval.</strong></p>

      <p>Aceasta este o <strong>regulă operațională</strong>, nu un mecanism algoritmic demonstrat universal.</p>

      <p>Un articol pe domeniul propriu, un profil public, o pagină de companie, un videoclip cu transcript public sau o pagină de documentație sunt exemple de artefacte persistente. Un Story, o conversație privată sau conținutul disponibil doar într-un feed autenticat poate fi mult mai greu de recuperat prin web retrieval public, dar nu trebuie descris ca „inexistent pentru AI”: poate exista în alte indexuri, integrări sau ecosisteme interne.</p>

      <p>În LinkedIn, profilurile publice pot apărea în motoare de căutare, conform documentației LinkedIn.<sup><a href="#fn-1">1</a></sup> Postările individuale pot avea URL propriu, însă accesibilitatea și indexarea lor externă sunt mai puțin predictibile decât pe un domeniu controlat direct de autor. Această stare trebuie reverificată dacă LinkedIn modifică politicile de indexare sau acces pentru crawlere.</p>

      <p>Consecința practică este simplă: <strong>efortul de creație și valoarea de arhivă nu sunt același lucru</strong>. O idee poate performa foarte bine social și poate rămâne slab reprezentată în stratul de retrieval al unui anumit motor AI.</p>

      <h2>Ce spun datele despre platforme</h2>

      <p>Nu există, în august 2026, o ierarhie universală și stabilă a platformelor sociale pentru toate motoarele AI. Rezultatul depinde de motor, tipul de interogare, țară, perioadă, setul de prompturi și definiția metricii.</p>

      <table>
        <thead>
          <tr>
            <th>Platformă</th>
            <th>Ce se poate spune defensabil în august 2026</th>
            <th>Limită / volatilitate</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>YouTube</td><td>Apare foarte sus în anumite studii comerciale de citări AI; transcripturile și paginile video oferă text explicit și persistent</td><td>Ponderea variază după motor și set de prompturi</td></tr>
          <tr><td>Reddit</td><td>Este frecvent prezent în analizele comerciale și are acorduri de acces/licențiere raportate public</td><td>Frecvența citării nu poate fi explicată doar prin acorduri</td></tr>
          <tr><td>LinkedIn</td><td>Profilurile publice sunt indexabile; vizibilitatea postărilor este mai puțin predictibilă</td><td>Politicile de acces/indexare se pot schimba</td></tr>
          <tr><td>Facebook / Instagram / Threads</td><td>Accesul pentru motoare externe diferă; în ecosistemul Meta, conținutul public poate alimenta experiențe Meta AI</td><td>Nu trebuie etichetate drept „irelevante pentru AI” în general</td></tr>
          <tr><td>X</td><td>Accesul extern este mai restrictiv decât pe platforme complet deschise, dar diferă între produse și în timp</td><td>Orice afirmație absolută despre acces devine rapid depășită</td></tr>
          <tr><td>TikTok</td><td>Conținutul video/audio poate fi procesat multimodal, dar lipsa unui strat textual persistent poate reduce extractibilitatea pentru unele sisteme</td><td>Capabilitățile multimodale și accesul platformei evoluează rapid</td></tr>
        </tbody>
      </table>

      <p>Un reper comercial util este raportul Lantern din februarie 2026, care analizează un corpus foarte mare de citări și plasează <strong>YouTube la 3,10% din citările urmărite și Reddit la 0,42% în acel dataset</strong>.<sup><a href="#fn-2">2</a></sup> Aceste valori nu sunt „cotele platformelor în AI” și nu trebuie extrapolate la toate motoarele sau toate industriile.</p>

      <p>Alte studii comerciale pot găsi ponderi diferite pentru Reddit, YouTube sau alte domenii. Această variație nu este un defect al pieței de date; este un semnal că <strong>metodologia trebuie citită înaintea procentului</strong>.</p>

      <h3>Acordurile de acces nu demonstrează singure cauzalitatea citării</h3>

      <p>Google și Reddit au anunțat în 2024 o colaborare care oferă Google acces mai structurat la conținutul Reddit.<sup><a href="#fn-3">3</a></sup> OpenAI și Reddit au anunțat separat un parteneriat în 2024.<sup><a href="#fn-4">4</a></sup></p>

      <p>Valoarea de aproximativ <strong>60 milioane USD anual</strong> asociată acordului Google–Reddit a fost raportată în presă în 2024 și trebuie tratată ca o valoare raportată pentru acel context, nu ca sumă contractuală permanentă.<sup><a href="#fn-5">5</a></sup></p>

      <p>Aceste acorduri pot facilita accesul la conținut, dar <strong>nu demonstrează că existența lor este cauza dominantă a frecvenței citării Reddit</strong>. Relevanța, retrieval-ul, forma întrebării, calitatea răspunsului, popularitatea și arhitectura fiecărui motor pot contribui separat.</p>

      <h2>Atenție la cum sunt citite cifrele</h2>

      <p>Cele mai multe confuzii din GEO apar când metrici diferite primesc aceeași etichetă.</p>

      <p>Un raport poate măsura:</p>

      <ul>
        <li>procent din toate citările;</li>
        <li>procent de răspunsuri în care apare un domeniu;</li>
        <li>procent de răspunsuri în care apare un brand;</li>
        <li>share of voice între branduri;</li>
        <li>trafic de referință;</li>
        <li>volum de prompturi;</li>
        <li>număr de răspunsuri sau surse distincte.</li>
      </ul>

      <p>Aceste numere nu pot fi adunate sau comparate direct fără un numitor comun.</p>

      <p>Evertune, de exemplu, folosește metrici distincte precum <strong>Source Share</strong>, <strong>Visibility Score</strong> și <strong>Share of Answer</strong>, fiecare cu altă definiție.<sup><a href="#fn-6">6</a></sup> Dimensiunea panelului Evertune este o informație dinamică; cifra declarată trebuie reverificată înaintea fiecărei actualizări a articolului și nu trebuie însumată cu „citările” altor furnizori ca și cum ar fi aceeași unitate.</p>

      <p>Prin urmare, descrierea corectă a bazei empirice a acestui articol nu este „680 de milioane de citări”, ci:</p>

      <blockquote><strong>studii comerciale care analizează separat sute de milioane de prompturi, răspunsuri și citări AI, cu metodologii diferite.</strong></blockquote>

      <h3>Corelație nu înseamnă cauzalitate</h3>

      <p>Dacă un studiu observă că brandurile cu mai multe mențiuni Reddit apar mai des în ChatGPT, rezultatul trebuie descris ca <strong>asociere observată în datasetul respectiv</strong>, nu ca „multiplicator” și nu ca dovadă că mențiunile Reddit cauzează citările.</p>

      <p>În aceeași logică, coeficienți de corelație, ponderi precum „X% din AI Overviews” sau comparații de tip „A produce de 3,9 ori mai multe citări decât B” nu trebuie păstrate fără:</p>

      <ol>
        <li>sursa exactă;</li>
        <li>perioada;</li>
        <li>dimensiunea și compoziția eșantionului;</li>
        <li>definiția metricii;</li>
        <li>motorul sau motoarele analizate;</li>
        <li>o precizare explicită că rezultatul nu demonstrează cauzalitate.</li>
      </ol>

      <p>În versiunea actualizată a articolului au fost eliminate cifrele pentru care aceste condiții nu au putut fi validate robust.</p>

      <h3>Owned content versus third-party content</h3>

      <p>Raportul Lantern din februarie 2026 indică, <strong>în propriul său dataset</strong>, că o mare parte din citările asociate brandurilor proveneau din conținut extern și o parte mai mică din conținut deținut de brand.<sup><a href="#fn-2">2</a></sup> Acesta este un rezultat util pentru ideea de distribuție terță, dar trebuie păstrat legat de datasetul Lantern, nu transformat în regulă universală despre toate sistemele AI.</p>

      <p>Concluzia defensabilă este: <strong>sursele terțe pot contribui semnificativ la vizibilitatea unui brand, dar ponderea exactă diferă între motoare, industrii și metodologii.</strong></p>

      <h2>Ce înseamnă concret să fii slab reprezentat în retrieval</h2>

      <p>Ai 10.000 de urmăritori pe LinkedIn și trei ani de postări. Cineva întreabă un asistent AI „cine sunt specialiștii în domeniul X din România?”. Numărul de urmăritori, singur, nu garantează că sistemul va recupera sau cita ideile publicate în feed.</p>

      <p>Un profil public poate confirma existența persoanei și anumite date profesionale. Articolele de pe domeniul propriu, paginile publice, interviurile, documentația și alte artefacte persistente pot oferi un strat mai bogat de dovezi despre ce a scris sau susține persoana.</p>

      <p>Asta nu înseamnă că „10.000 de urmăritori = vizibilitate AI zero”. Înseamnă că <strong>follower count-ul nu este un factor public demonstrat de citare AI și nu trebuie confundat cu accesibilitatea informației pentru retrieval</strong>. Unele platforme sau motoare pot avea acces la semnale de popularitate, dar efectul lor exact nu este public.</p>

      <p>Un articol pe domeniul propriu poate rămâne persistent și accesibil pentru retrieval atât timp cât URL-ul, conținutul și accesul rămân disponibile. Nu există însă nicio garanție că va fi citat de un anumit motor, la un anumit moment sau „la nesfârșit”.</p>

      <p>Nu este un argument împotriva LinkedIn. Este un argument împotriva <strong>oricărei platforme sociale folosite ca singură arhivă a ideilor importante</strong>.</p>

      <h2>Soluțiile, în ordinea raportului efect/efort</h2>

      <p>Ordinea de mai jos este o <strong>prioritizare orientativă AI Visibility Lab, verificată la 10 august 2026</strong>, nu o ierarhie universală. Ea trebuie revizuită dacă politicile platformelor sau comportamentul motoarelor se schimbă.</p>

      <h3>1. Publică și arhivează pe domeniul propriu</h3>

      <p>Orice text profesional important merită să existe și pe un domeniu controlat direct, cu URL stabil, dată vizibilă, HTML accesibil și metadate coerente.</p>

      <p>Publicarea inițială pe domeniul propriu oferă control asupra versiunii canonice și asupra arhivei. Dacă un text a apărut întâi pe LinkedIn sau în altă parte, publicarea lui ulterioară pe site <strong>nu implică automat o penalizare pentru conținut duplicat</strong>; canonicalizarea și rankingul sunt mai complexe decât simpla ordine cronologică.</p>

      <h3>2. Tratează profilul public ca pe o pagină de destinație</h3>

      <p>LinkedIn documentează posibilitatea ca profilurile publice să apară în motoare de căutare.<sup><a href="#fn-1">1</a></sup> Secțiunile publice trebuie scrise în propoziții declarative, cu termeni profesionali clari și verificabili.</p>

      <p>O descriere precum „consultant GEO/AEO pentru companii B2B din România” transmite mai mult context decât o formulare abstractă de tip „transform provocări în oportunități”.</p>

      <h3>3. Construiește artefacte deschise și extractibile</h3>

      <p>YouTube și Reddit pot fi utile, dar în moduri diferite.</p>

      <p>Pe Reddit, participarea autentică în comunități relevante poate produce fire publice, persistente și ușor de legat de întrebări reale. Autopromovarea poate fi limitată de regulile fiecărei comunități, care trebuie verificate separat.</p>

      <p>Pe YouTube, <strong>transcriptul crește extractibilitatea textuală</strong>, dar nu este singurul activ. Unele sisteme moderne pot procesa și video/audio multimodal. Titlul descriptiv, descrierea, transcriptul și eventual un articol însoțitor fac însă informația mai explicită și mai ușor de verificat textual.</p>

      <p>Pentru profesioniștii tehnici pot conta, în funcție de domeniu, și platforme precum GitHub, Stack Exchange, Substack, Medium sau forumuri specializate. Relevanța lor trebuie măsurată pe interogările reale ale nișei, nu presupusă.</p>

      <h3>4. Investește în mențiuni terțe, fără a le trata ca „factor de ranking”</h3>

      <p>Interviurile, materialele invitate, aparițiile în presă, podcasturile cu transcript, studiile de caz și citările pe domenii independente pot crea dovezi externe despre identitatea și expertiza unei persoane.</p>

      <p>Nu există dovadă publică pentru o formulă de tip „o mențiune terță = X puncte de vizibilitate AI”. Valoarea acestor apariții este că oferă <strong>surse independente, persistente și atribuibile</strong>.</p>

      <p>Un podcast fără transcript public sau articol însoțitor oferă mai puțin text persistent și ușor de citat decât unul care publică asemenea artefacte, chiar dacă unele sisteme multimodale pot procesa audio/video.</p>

      <h3>5. Dezambiguizează entitatea</h3>

      <p>Folosește o formă canonică stabilă a numelui, aceeași descriere profesională de bază și date structurate <code>Person</code> pe site-ul propriu.</p>

      <p><code>sameAs</code> și <code>alternateName</code> pot ajuta sistemele care procesează date structurate să lege aliasuri și profiluri, dar <strong>nu garantează ranking, citare sau entity resolution perfect</strong>.</p>

      <p>Wikidata și Wikipedia pot contribui la entity resolution și knowledge graphs în multe sisteme, dar nu există dovezi că toate motoarele AI le tratează drept „surse primare”. Wikipedia trebuie folosită numai când criteriile independente de notabilitate sunt îndeplinite.</p>

      <h2>Verificarea în cinci minute</h2>

      <p>Testul manual poate fi util, dar trebuie tratat ca diagnostic orientativ.</p>

      <p>Rulează același set de întrebări în ChatGPT, Perplexity, Claude și Gemini, cu funcțiile de căutare disponibile atunci când produsul le oferă:</p>

      <ul>
        <li>„Cine este [numele] și cu ce se ocupă?”</li>
        <li>„Ce a scris [numele] despre [tema]?”</li>
        <li>„Care sunt sursele pentru afirmațiile de mai sus?”</li>
      </ul>

      <p>Nu trage concluzii dintr-o singură rulare. Sistemele sunt probabilistice, rezultatele și sursele se pot schimba, iar funcțiile de search diferă între produse și planuri. Pentru măsurare mai serioasă, păstrează un set fix de prompturi, repetă testul periodic și notează data, motorul, răspunsul și sursele.</p>

      <h2>Ce înseamnă asta pentru piața din România</h2>

      <h3>Cifrele, cu avertisment metodologic</h3>

      <p>Datele oficiale și sondajele comerciale nu trebuie comparate fără a defini populația și metoda.</p>

      <p><strong>Eurostat:</strong> datele pentru <strong>2025</strong>, publicate la 16 decembrie 2025, indică faptul că <strong>17,8% dintre persoanele din România cu vârste între 16 și 74 de ani</strong> au folosit instrumente AI generative în ultimele trei luni. Media UE era 32,7%; Danemarca 48,4%, Estonia 46,6%.<sup><a href="#fn-7">7</a></sup></p>

      <p>Acesta este un indicator statistic oficial pentru populația 16–74 ani și nu trebuie descris drept „Eurostat 2026”, chiar dacă este citat într-un articol publicat în 2026.</p>

      <p><strong>Reveal Marketing Research:</strong> studiul publicat în 2026 raportează o creștere de la <strong>47% în 2025 la 68% în 2026</strong> în propriul eșantion și identifică ChatGPT la <strong>83%</strong> și Gemini la <strong>35%</strong> între platformele utilizate.<sup><a href="#fn-8">8</a></sup> Aceste cifre trebuie prezentate în contextul metodologiei Reveal, nu ca procente directe ale întregii populații a României.</p>

      <p>Prin urmare, Eurostat și Reveal măsoară populații și contexte diferite. Diferența dintre ele nu trebuie tratată ca „eroare”, dar nici ca două estimări concurente ale exact aceleiași variabile.</p>

      <p>Cifra de <strong>15% pentru Copilot</strong> și valorile de tip „92% la 25–34 ani” sau „10% peste 65 ani” au fost eliminate din această versiune deoarece nu au fost validate în sursa Reveal folosită aici.</p>

      <h3>Prioritizarea motoarelor în România — recomandare, nu fapt</h3>

      <p>În eșantionul Reveal, ChatGPT este de departe platforma AI cel mai des menționată. Pentru un proiect cu resurse limitate, acest lucru <strong>poate justifica</strong> începerea măsurării vizibilității cu ChatGPT.</p>

      <p>Nu rezultă însă că Gemini, Copilot, Perplexity sau alte motoare trebuie ignorate. Prioritizarea trebuie adaptată publicului țintă, tipului de interogare și canalelor prin care acel public folosește AI.</p>

      <p>Gemini beneficiază de integrarea profundă în ecosistemul Android, dar statutul de default, choice screens și distribuția diferă între regiuni și pot fi afectate de reglementări. Această afirmație trebuie reverificată periodic.</p>

      <h3>Avantajul unei limbi mai puțin acoperite — ipoteză AI Visibility Lab</h3>

      <p><strong>Ipoteza de lucru:</strong> nișele profesionale cu puține surse românești bine structurate pot avea concurență informațională mai redusă decât echivalentele lor în engleză.</p>

      <p>Nu există însă un prag public de surse, nu există dovadă pentru afirmația că sunt „de zece ori mai puțini candidați”, iar publicarea timpurie nu garantează citarea.</p>

      <p>Formularea defensabilă este: <strong>publicarea timpurie și bine documentată într-o nișă slab acoperită poate crește șansele de a deveni o sursă relevantă, dar avantajul trebuie măsurat pe fiecare set de interogări și nu poate fi presupus la nivelul întregii piețe românești.</strong></p>

      <h3>Problema diacriticelor — consistență, nu fragmentare automată</h3>

      <p>„Ștefan” și „Stefan” sunt șiruri de caractere diferite, dar sistemele moderne de entity resolution pot folosi context, aliasuri, normalizare, embeddings și knowledge graphs. Nu există bază pentru a afirma că variantele cu și fără diacritice sunt tratate automat ca persoane diferite.</p>

      <p>Recomandarea practică rămâne utilă: alege o formă canonică, folosește-o consecvent și declară variantele relevante prin <code>alternateName</code> în <code>Person</code> schema atunci când este justificat.</p>

      <p>Afirmația numerică potrivit căreia „15 mențiuni împărțite între două grafii valorează mai puțin decât 10 mențiuni consecvente” a fost eliminată deoarece nu există o bază verificată pentru acel raport.</p>

      <h3>Unde merită să fii prezent, concret</h3>

      <p>Lista următoare este o <strong>prioritizare orientativă AI Visibility Lab, valabilă la 10 august 2026</strong>, nu o ierarhie universală.</p>

      <p><strong>Stratul de entitate</strong></p>

      <p>Domeniul propriu, profile publice coerente și date structurate <code>Person</code>/<code>Organization</code>. Wikidata poate fi util atunci când există suficiente date verificabile; Wikipedia doar dacă sunt îndeplinite criteriile de notabilitate.</p>

      <p>Google Business Profile poate fi relevant pentru activități locale. Directoarele și registrele comerciale românești pot crea artefacte indexabile, dar datele trebuie verificate pentru corectitudine și actualitate.</p>

      <p><strong>Stratul de conținut propriu</strong></p>

      <p>Domeniul propriu rămâne baza controlată: URL-uri stabile, HTML accesibil, surse, autori, date și structură semantică. Nu există însă o cerință universală ca tot site-ul să fie server-rendered pentru a fi vizibil; important este ca HTML-ul final să fie accesibil și procesabil de crawlerele relevante.</p>

      <p><strong>Stratul de platforme deschise și comunități</strong></p>

      <p>YouTube, Reddit și platformele de nișă pot fi utile dacă publicul și interogările relevante există acolo. Pentru România, r/Romania, r/programare, r/CasualRO și comunitățile locale pot fi testate, fără a presupune automat că toate au aceeași valoare pentru AI.</p>

      <p>Forumurile românești pot rămâne indexabile și relevante în anumite nișe, dar accesibilitatea, activitatea și calitatea trebuie verificate la data folosirii lor.</p>

      <p><strong>Stratul de mențiuni terțe</strong></p>

      <p>Presa economică, publicațiile de industrie, podcasturile cu transcript și interviurile pot crea artefacte externe utile. Exemplele de publicații trebuie evaluate în funcție de subiect, public și politica editorială actuală; prezența într-o publicație nu garantează citarea AI.</p>

      <h3>Facebook, Instagram și Threads: diferențiază AI extern de Meta AI</h3>

      <p>Nu mai este corect să afirmăm că Facebook și Instagram „nu contribuie la vizibilitatea AI”.</p>

      <p>În iunie 2026, Meta a anunțat <strong>AI Mode pe Facebook</strong>, descris ca o experiență care oferă răspunsuri bazate inclusiv pe opinii și recomandări distribuite public în aplicațiile Meta.<sup><a href="#fn-9">9</a></sup> În iulie 2026, Meta a anunțat și integrarea Meta AI în conversațiile Threads, unde utilizatorul poate partaja postări, imagini și videoclipuri Threads către Meta AI.<sup><a href="#fn-10">10</a></sup></p>

      <p>Prin urmare trebuie separate două obiective:</p>

      <ul>
        <li><strong>vizibilitate în AI extern / web retrieval</strong> — unde accesul la Facebook, Instagram și alte platforme poate fi limitat sau variabil;</li>
        <li><strong>vizibilitate în ecosistemul Meta AI</strong> — unde conținutul public din aplicațiile Meta poate avea un rol direct.</li>
      </ul>

      <p>Această stare este foarte volatilă și trebuie reverificată la fiecare actualizare majoră Meta.</p>

      <h3>X și TikTok: evită verdictele permanente</h3>

      <p>Pentru X, formularea corectă este că <strong>gradul de acces extern este mai restrictiv decât pe platforme complet deschise și poate diferi între produse, perioade și tipuri de acces</strong>. Nu trebuie folosită afirmația „acces exclusiv xAI” fără dovadă actuală.</p>

      <p>Pentru TikTok, lipsa unui transcript textual persistent poate reduce extractibilitatea în anumite pipeline-uri, dar sistemele multimodale pot procesa video și audio. Nu există bază pentru verdictul universal „TikTok este marginal pentru AI”.</p>

      <h3>Ce faci singur și pentru ce ai nevoie de ajutor</h3>

      <p><strong>Realizabil fără specialist:</strong> alegerea formei canonice a numelui; rescrierea profilelor publice; verificarea datelor companiei; publicarea de articole substanțiale pe domeniul propriu; testarea periodică a vizibilității cu un set fix de prompturi.</p>

      <p><strong>Poate necesita sprijin tehnic:</strong> rezolvarea problemelor de crawling și rendering; implementarea corectă a datelor structurate; configurarea <code>robots.txt</code> și a directivelor specifice crawlerelor; măsurarea sistematică a citărilor; analiza logurilor și a indexabilității.</p>

      <p>În evaluarea unui furnizor GEO/AEO, întrebările utile sunt:</p>

      <ol>
        <li>Cum măsoară rezultatul — ce prompturi, motoare, perioadă și baseline?</li>
        <li>Ce verifică tehnic înainte de producția de conținut?</li>
        <li>Cum diferențiază corelația de cauzalitate?</li>
        <li>Ce nu poate garanta?</li>
      </ol>

      <p>Nu există un mecanism public prin care cineva să poată garanta o anumită apariție organică în ChatGPT, Gemini, Claude sau Perplexity. În prezent, pentru răspunsurile organice ale principalelor sisteme AI, <strong>nu există o „poziție” universală, stabilă și comparabilă cu rankingul clasic SEO</strong>. Această afirmație trebuie reverificată dacă apar produse de placement, ranking explicit sau mecanisme comerciale noi.</p>

      <p>Piața GEO/AEO din România poate fi descrisă mai sigur ca <strong>emergentă și fără standarde profesionale consolidate</strong>, nu ca „neocupată”. Vizibilitatea propriului consultant în sistemele AI poate fi un indiciu suplimentar, dar nu este un test definitiv al competenței.</p>

      <h2>Întrebări frecvente</h2>

      <h3>AI-ul poate citi postările mele de pe LinkedIn?</h3>

      <p>Unele postări LinkedIn au URL public, dar accesul și indexarea externă sunt mai puțin predictibile decât în cazul unui domeniu propriu. LinkedIn documentează explicit indexabilitatea profilurilor publice. Situația postărilor și a crawlerelor trebuie reverificată dacă platforma își schimbă politicile.<sup><a href="#fn-1">1</a></sup></p>

      <h3>Ce platformă socială produce cea mai multă vizibilitate AI?</h3>

      <p>Nu există un răspuns universal. În raportul Lantern din februarie 2026, YouTube este domeniul social cel mai bine plasat în datasetul analizat, în timp ce alte studii comerciale pot găsi ponderi diferite pentru Reddit sau alte platforme. Rezultatul depinde de motor, prompturi și metodologie.<sup><a href="#fn-2">2</a></sup></p>

      <h3>De ce Reddit este citat frecvent în unele sisteme?</h3>

      <p>Reddit produce pagini publice cu discuții în limbaj natural și are acorduri de acces/licențiere cu Google și OpenAI. Aceste acorduri pot facilita accesul, dar nu demonstrează că ele sunt cauza unică sau dominantă a citărilor.<sup><a href="#fn-3">3</a></sup><sup><a href="#fn-4">4</a></sup></p>

      <h3>Merită să mai postez pe LinkedIn?</h3>

      <p>Da, pentru distribuție către oameni, networking și reputație profesională. Pentru ideile importante este prudent să existe și o versiune persistentă pe un domeniu controlat direct, fără a presupune că LinkedIn este „invizibil” pentru AI.</p>

      <h3>Contează numărul de urmăritori pentru citarea AI?</h3>

      <p>Numărul de urmăritori nu este un factor public demonstrat de citare AI. Unele platforme sau sisteme pot avea acces la semnale de popularitate, însă efectul lor exact nu este public. Follower count-ul nu trebuie folosit ca substitut pentru măsurarea retrieval-ului sau citării.</p>

      <h3>Un cont de X ajută la vizibilitatea AI?</h3>

      <p>Depinde de motor și de forma accesului. X poate fi mai restrictiv pentru acces extern decât platformele complet deschise, iar situația se poate schimba. Nu există bază pentru un verdict permanent de tip „ajută” sau „nu ajută”.</p>

      <h3>Pe ce platforme merită să fii prezent în România?</h3>

      <p>Ca orientare la 10 august 2026: domeniu propriu și identitate coerentă în primul rând; apoi platformele și sursele unde publicul relevant există efectiv — de exemplu YouTube, comunități Reddit, publicații de industrie, podcasturi cu transcript și profile publice bine structurate. Facebook, Instagram și Threads trebuie evaluate separat pentru web retrieval extern și pentru ecosistemul Meta AI.</p>

      <h3>Contează diacriticele pentru vizibilitatea AI în română?</h3>

      <p>Consistența ajută, dar nu există dovadă că variantele cu și fără diacritice sunt tratate automat ca entități diferite. Folosirea unei forme canonice și declararea aliasurilor relevante prin <code>alternateName</code> poate clarifica identitatea, fără a garanta un efect de ranking sau citare.</p>

      <h3>Ce procent dintre români folosesc AI?</h3>

      <p>Depinde de metodologie. Eurostat raportează <strong>17,8% pentru România în 2025</strong> în rândul persoanelor 16–74 ani care folosiseră instrumente AI generative în ultimele trei luni.<sup><a href="#fn-7">7</a></sup> Reveal raportează <strong>68% în studiul său din 2026</strong>, pe baza unei metodologii diferite.<sup><a href="#fn-8">8</a></sup> Cele două cifre nu trebuie comparate ca și cum ar măsura aceeași populație în același mod.</p>

      <h3>Cum aleg un consultant GEO/AEO?</h3>

      <p>Cere metodologia de măsurare, baseline-ul, lista de motoare și prompturi, ordinea verificărilor tehnice și limitele serviciului. Orice promisiune de apariție organică garantată într-un anumit răspuns AI trebuie tratată cu scepticism. Vizibilitatea consultantului însuși poate fi un indiciu, nu o dovadă suficientă de competență.</p>

      <h2>Metodologie, surse și limite</h2>

      <p>Pentru această versiune au fost preferate, unde au fost disponibile, surse oficiale și documentație primară. Studiile comerciale sunt păstrate numai atunci când rezultatul poate fi legat explicit de furnizor și dataset și sunt descrise ca rezultate ale acelui studiu, nu ca reguli universale.</p>

      <p>Pentru fiecare cifră comercială trebuie verificat:</p>

      <ul>
        <li>furnizorul;</li>
        <li>perioada analizată;</li>
        <li>unitatea: prompt, răspuns, citare, sursă sau domeniu;</li>
        <li>motoarele incluse;</li>
        <li>definiția metricii;</li>
        <li>dacă metodologia este publică integral;</li>
        <li>dacă rezultatul a fost replicat independent.</li>
      </ul>

      <h3>Niveluri epistemice folosite în articol</h3>

      <p><strong>Fapt documentat:</strong> informație susținută de o sursă oficială sau primară.</p>

      <p><strong>Rezultat comercial:</strong> observație valabilă pentru datasetul și metodologia unui furnizor specific.</p>

      <p><strong>Interpretare AI Visibility Lab:</strong> concluzie derivată din mai multe observații, fără statut de mecanism oficial.</p>

      <p><strong>Ipoteză:</strong> idee de testat, nu afirmație despre funcționarea certă a motoarelor.</p>

      <h3>Notă de volatilitate</h3>

      <p><strong>Ultima verificare factuală și a surselor: 10 august 2026.</strong> Comportamentul motoarelor AI, politicile platformelor sociale, accesul crawlerelor, acordurile comerciale, produsele AI și ponderile surselor citate se pot modifica frecvent. Afirmațiile despre accesibilitate, frecvența citării și prioritizarea platformelor descriu starea observabilă la această dată și trebuie reverificate periodic.</p>

      <h2>Surse și note</h2>

      <ol class="avl-footnotes">
        <li id="fn-1">LinkedIn Help — documentația privind vizibilitatea profilului public în motoarele de căutare: <a href="https://www.linkedin.com/help/linkedin/answer/a543660/profile-does-or-doesn-t-appear-after-name-search-on-web" target="_blank" rel="noopener noreferrer">linkedin.com/help/…/a543660</a></li>
        <li id="fn-2">Lantern — <em>AI Citation Content Visibility Report</em>, februarie 2026. Raport comercial; cifrele trebuie interpretate strict în cadrul datasetului său: <a href="https://www.asklantern.com/reports/ai-citation-content-visibility-february-2026" target="_blank" rel="noopener noreferrer">asklantern.com/reports/ai-citation-content-visibility-february-2026</a></li>
        <li id="fn-3">Reddit — anunț privind parteneriatul extins cu Google, februarie 2024: <a href="https://redditinc.com/news/our-partnership-with-google" target="_blank" rel="noopener noreferrer">redditinc.com/news/our-partnership-with-google</a></li>
        <li id="fn-4">OpenAI — parteneriat cu Reddit, mai 2024: <a href="https://openai.com/index/openai-and-reddit-partnership/" target="_blank" rel="noopener noreferrer">openai.com/index/openai-and-reddit-partnership</a></li>
        <li id="fn-5">Reuters — relatări din 2024 privind valoarea de aproximativ 60 milioane USD/an a acordului Reddit–Google. Valoare raportată în presă, nu prezentată aici drept sumă contractuală permanentă.</li>
        <li id="fn-6">Evertune Documentation — definițiile metricilor precum Source Share, Visibility Score și Share of Answer: <a href="https://docs.evertune.ai/en/articles/12271101-evertune-metrics" target="_blank" rel="noopener noreferrer">docs.evertune.ai/en/articles/12271101-evertune-metrics</a></li>
        <li id="fn-7">Eurostat — „32.7% of EU people used generative AI tools in 2025”, 16 decembrie 2025. România: 17,8%; populație 16–74 ani; experiențe în ultimele trei luni: <a href="https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251216-3" target="_blank" rel="noopener noreferrer">ec.europa.eu/eurostat/…/ddn-20251216-3</a></li>
        <li id="fn-8">Reveal Marketing Research — „Accelerated integration of AI into Romanians' routines: usage increases from 47% to 68% in one year”, 2026. Raport comercial cu metodologie proprie; ChatGPT 83%, Gemini 35% în rezultatele publicate: <a href="https://reveal.ro/en/media-en/accelerated-integration-of-ai-into-romanians-routines-usage-increases-from-47-to-68-in-one-year/" target="_blank" rel="noopener noreferrer">reveal.ro/…/accelerated-integration-of-ai-into-romanians-routines</a></li>
        <li id="fn-9">Meta Newsroom — „New AI Tools to Help You Make Things Happen on Facebook”, 15 iunie 2026. Meta descrie AI Mode ca răspunzând pe baza opiniilor și recomandărilor distribuite public în aplicațiile Meta: <a href="https://about.fb.com/news/2026/06/new-ai-tools-to-help-you-make-things-happen-on-facebook/" target="_blank" rel="noopener noreferrer">about.fb.com/news/2026/06/new-ai-tools-to-help-you-make-things-happen-on-facebook</a></li>
        <li id="fn-10">Meta Newsroom — anunț din iulie 2026 privind folosirea Meta AI în Threads și posibilitatea de a partaja postări, imagini și videoclipuri Threads către Meta AI: <a href="https://about.fb.com/ja/news/2026/07/threads-meta-ai-dm/" target="_blank" rel="noopener noreferrer">about.fb.com/ja/news/2026/07/threads-meta-ai-dm</a></li>
      </ol>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și actualizare: 14 august 2026.</em></p>
`;
