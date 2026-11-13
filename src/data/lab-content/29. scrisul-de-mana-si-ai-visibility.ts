import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const scrisulDeManaSiAiVisibilityMeta: LabArticleMeta = {
  title: "Tu îți înțelegi scrisul. Cine îți înțelege afacerea?",
  description:
    "Ce ne poate învăța scrisul de mână despre familiaritate, context și AI Visibility: diferența dintre ce învață un model la antrenare și ce găsește când răspunde, și de ce frecvența publicării nu ține loc de informație clară despre afacere.",
  canonical:
    "https://delamatescu.ro/lab/articole/scrisul-de-mana-si-ai-visibility",
  category: "Entities & Citations",
  articleType: "Analiză",
  datePublished: "2026-11-13T06:39:00+02:00",
  dateModified: "2026-11-13",
  lastReviewed: "2026-11-13",
  image: {
    url: "https://delamatescu.ro/images/lab/scrisul-de-mana-si-ai-visibility.webp",
    alt: "Un robot umanoid scrie cu pana pe un sul de pergament, la o masă de lemn dintr-o curte cu arcade, sub privirea atentă a unei femei aplecate lângă el. În fundal, oameni în haine de epocă trec pe lângă ateliere și o bibliotecă.",
  },
  about: [
    { name: "AI Visibility" },
    { name: "Reprezentarea digitală a entităților" },
    { name: "Retrieval-Augmented Generation" },
    { name: "Large Language Models" },
  ],
  keywords: [
    "AI Visibility",
    "familiaritate și context",
    "reprezentarea entităților",
    "generare augmentată prin recuperare (RAG)",
    "cunoștințe long-tail în LLM",
    "date structurate Organization",
    "AI Overviews și AI Mode",
    "identitatea digitală a afacerii",
  ],
  citations: [
    {
      name: "Ehri, L. C. (2014) — Orthographic Mapping in the Acquisition of Sight Word Reading, Spelling Memory, and Vocabulary Learning, Scientific Studies of Reading 18(1)",
      url: "https://doi.org/10.1080/10888438.2013.819356",
    },
    {
      name: "Lewis et al. (2020) — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (arXiv:2005.11401, NeurIPS 2020)",
      url: "https://arxiv.org/abs/2005.11401",
    },
    {
      name: "Kandpal et al. (2023) — Large Language Models Struggle to Learn Long-Tail Knowledge (ICML 2023, PMLR 202)",
      url: "https://proceedings.mlr.press/v202/kandpal23a.html",
    },
    {
      name: "Google Search Central — Organization structured data",
      url: "https://developers.google.com/search/docs/appearance/structured-data/organization",
    },
    {
      name: "Google Search Central — AI features and your website",
      url: "https://developers.google.com/search/docs/appearance/ai-features",
    },
  ],
  faq: [],
};

export const scrisulDeManaSiAiVisibilityHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-11-13T06:39:00+02:00">13 noiembrie 2026</time> · Ultima verificare factuală: <time datetime="2026-11-13">13 noiembrie 2026</time></p>

      <figure>
        <img src="/images/lab/scrisul-de-mana-si-ai-visibility.webp" alt="Un robot umanoid scrie cu pana pe un sul de pergament, la o masă de lemn dintr-o curte cu arcade, sub privirea atentă a unei femei aplecate lângă el. În fundal, oameni în haine de epocă trec pe lângă ateliere și o bibliotecă." width="1672" height="941" loading="eager" />
      </figure>

      <nav class="article-toc" aria-labelledby="cuprins">
        <p id="cuprins" class="article-toc-title">Cuprins</p>
        <ol>
          <li><a href="#ce-legatura-are-scrisul-de-mana-cu-vizibilitatea-online">Ce legătură are scrisul de mână cu vizibilitatea online?</a></li>
          <li><a href="#de-ce-vechimea-nu-tine-loc-de-familiaritate">De ce vechimea nu ține loc de familiaritate</a></li>
          <li><a href="#ce-invata-un-model-ai-si-ce-consulta-cand-raspunde">Ce învață un model AI și ce consultă când răspunde</a></li>
          <li><a href="#frecventa-publicarii-sau-informatia-care-raspunde-unei-nevoi">Frecvența publicării sau informația care răspunde unei nevoi?</a></li>
          <li><a href="#ce-urmaresc-separat-intr-un-audit-de-ai-visibility">Ce urmăresc separat într-un audit de AI Visibility</a></li>
          <li><a href="#cum-reduci-nevoia-de-a-ghici">Cum reduci nevoia de a ghici</a></li>
          <li><a href="#asa-sunt-eu-nu-fixeaza-reprezentarea-digitala">„Așa sunt eu” nu fixează reprezentarea digitală</a></li>
          <li><a href="#surse-si-metodologie">Surse și metodologie</a>
            <ol>
              <li><a href="#nota-de-volatilitate">Notă de volatilitate</a></li>
            </ol>
          </li>
        </ol>
      </nav>

      <p>De cele mai multe ori, înțeleg ceea ce scriu de mână. Cunosc felul în care leg literele, prescurtările pe care le folosesc și locurile în care graba transformă un cuvânt într-o linie aproximativă. Pentru mine, pagina are sens.</p>

      <p>Dacă o dau cuiva care nu mi-a mai văzut scrisul, lucrurile se schimbă. Aceeași pagină poate deveni un exercițiu de descifrare. Cineva apropiat, familiarizat cu felul meu de a scrie, va înainta mai ușor, deși se va opri, probabil, la câteva cuvinte.</p>

      <p>Informația de pe hârtie este aceeași. Relația fiecărui cititor cu ea este diferită.</p>

      <p>Mai există însă o situație: mă întorc eu însumi la o notiță mai veche și nu mai înțeleg ce am scris. Uneori nu descifrez literele. Alteori citesc fiecare cuvânt, dar nu mai reușesc să reconstruiesc ideea.</p>

      <p>Mi se întâmplă și când recitesc articole vechi de pe blog. Acolo, literele sunt perfect lizibile. Ceea ce s-a îndepărtat este contextul: discuția de la care am pornit, întrebarea pe care o aveam, legătura dintre două gânduri pe care atunci o consideram evidentă.</p>

      <p><strong>O parte din sens rămăsese în mintea mea, fără să ajungă în text.</strong></p>

      <p>Când am scris, am citit pagina împreună cu ceea ce știam deja. După un timp, am rămas doar cu pagina. Iar pagina nu păstrase tot.</p>

      <h2 id="ce-legatura-are-scrisul-de-mana-cu-vizibilitatea-online">Ce legătură are scrisul de mână cu vizibilitatea online?</h2>

      <p>Aici începe legătura cu vizibilitatea online.</p>

      <p>Un antreprenor își cunoaște afacerea din interior. Știe ce face, pentru cine lucrează, ce înseamnă denumirile serviciilor sale și de ce un anumit proiect demonstrează competență. Când își citește site-ul, aduce cu el toate aceste explicații.</p>

      <p>Un vizitator nou are acces doar la ceea ce găsește. La fel, un sistem AI poate folosi informațiile disponibile în limitele modelului și ale instrumentelor sale. Experiența ta, rămasă neexplicată, nu devine automat parte din răspuns.</p>

      <p>Pentru tine, „soluții personalizate” poate însemna zece ani de proiecte foarte diferite. Pentru cineva care te descoperă astăzi, expresia lasă deschise aproape toate întrebările.</p>

      <p>Faptul că tu îți înțelegi afacerea nu spune încă suficient despre cât de ușor o pot înțelege ceilalți.</p>

      <h2 id="de-ce-vechimea-nu-tine-loc-de-familiaritate">De ce vechimea nu ține loc de familiaritate</h2>

      <p>Când învățăm să citim, această distanță dintre semn și sens este mai vizibilă. Un copil recunoaște litere, le leagă de sunete, încearcă să formeze cuvântul și să îl asocieze cu ceva cunoscut. Efortul de descifrare poate face dificilă urmărirea sensului întregii propoziții.</p>

      <p>Cu exercițiul, multe dintre aceste operații devin automate. Văd un cuvânt familiar și îl recunosc fără să simt că îl parcurg literă cu literă.</p>

      <p>Această experiență nu înseamnă că am învățat doar conturul cuvântului, ca pe o fotografie. Cercetarea despre „orthographic mapping” descrie formarea unor legături între scriere, pronunție și sens, care permit recunoașterea rapidă a cuvintelor familiare.<sup><a href="#fn-1">1</a></sup></p>

      <p>Familiaritatea este rezultatul unei învățări. Vârsta, singură, nu o înlocuiește.</p>

      <p>Dacă citesc, timpul trece. Dar timpul trece și dacă nu citesc. Două persoane de aceeași vârstă pot avea experiențe foarte diferite de lectură. În plus, un cititor fluent într-un domeniu se poate opri frecvent în fața vocabularului altuia.</p>

      <p><strong>Trecerea timpului și acumularea experienței se pot întâmpla împreună, fără să fie același lucru.</strong></p>

      <p>Această distincție merită păstrată când vorbim despre o afacere prezentă online de mulți ani. Vechimea ei nu ne spune, de una singură, câtă informație accesibilă, actuală și utilă există despre ea.</p>

      <p>Zece ani de activitate pot lăsa în urmă un portofoliu explicat, proiecte documentate și referințe verificabile. Pot lăsa și un site aproape gol, câteva fotografii și o adresă de contact care nu mai funcționează.</p>

      <p>Experiența există în ambele situații. Posibilitatea de a o înțelege din exterior diferă.</p>

      <h2 id="ce-invata-un-model-ai-si-ce-consulta-cand-raspunde">Ce învață un model AI și ce consultă când răspunde</h2>

      <p>Analogia cu lectura ajută aici, dar trebuie să îi păstrăm limitele. Un model AI și un om folosesc mecanisme diferite. Când spunem că un sistem este „familiarizat” cu o entitate, folosim o formulare accesibilă pentru felul în care informațiile despre ea sunt reprezentate, găsite și folosite.</p>

      <p>La baza multor asistenți AI se află modele lingvistice mari, numite <em>Large Language Models</em>, sau LLM-uri. Ele învață regularități din date în timpul antrenării și pot genera răspunsuri în funcție de contextul primit. Un asistent poate combina modelul cu instrumente de căutare și alte surse de informație.</p>

      <p>De aceea, merită să distingem între ceea ce modelul a învățat la antrenare și ceea ce sistemul poate consulta când răspunde. Cercetarea despre generarea augmentată prin recuperarea informației, cunoscută ca RAG, tratează explicit combinarea acestor două resurse.<sup><a href="#fn-2">2</a></sup></p>

      <p>Distincția are consecințe practice.</p>

      <p>Publicarea unui articol nu înseamnă că un model AI își actualizează imediat cunoștințele interne despre tine (<a href="/lab/articole/cat-dureaza-indexare-citare-ai">cât durează indexarea și citarea</a> e o întrebare separată). Articolul poate deveni însă util unui sistem care îl găsește și îl folosește ca sursă. O afacere nouă poate fi descrisă pe baza unor informații recente, dacă acestea sunt accesate, chiar dacă nu era reprezentată în datele inițiale de antrenare.</p>

      <p>Există și un fundament de cercetare pentru intuiția că informația întâlnită mai des poate fi mai ușor recuperată de model. Un studiu prezentat la ICML în 2023 a arătat, pentru modelele și sarcinile evaluate, o legătură între numărul documentelor relevante întâlnite la antrenare și corectitudinea răspunsurilor factuale. Accesul la documente externe a redus dependența de informația din antrenare.<sup><a href="#fn-3">3</a></sup></p>

      <p>Acesta este un rezultat despre anumite condiții experimentale. Nu stabilește câte postări trebuie să publice o afacere și nu oferă o formulă universală pentru recomandările AI.</p>

      <p>Pentru strategia editorială, propun următoarea interpretare: <strong>activitatea online este utilă în măsura în care lasă în urmă informații care ajută la identificarea și evaluarea corectă a afacerii.</strong></p>

      <p>Contează ce devine mai clar după fiecare publicare.</p>

      <h2 id="frecventa-publicarii-sau-informatia-care-raspunde-unei-nevoi">Frecvența publicării sau informația care răspunde unei nevoi?</h2>

      <p>Să luăm două ateliere ipotetice de mobilă din Sibiu. Primul publică frecvent fotografii cu texte despre calitate, pasiune și profesionalism. Al doilea publică mai rar, dar explică:</p>

      <ul>
        <li>ce realizează;</li>
        <li>în ce localități lucrează;</li>
        <li>cum se fac măsurătorile;</li>
        <li>ce include montajul;</li>
        <li>care sunt limitele unui termen estimat.</li>
      </ul>

      <p>Pentru întrebarea „Caut un atelier care face bucătării la comandă în Sibiu și se ocupă de măsurători și montaj”, al doilea pune la dispoziție mai multe informații direct folositoare.</p>

      <p>Exemplul nu permite prezicerea unei recomandări. Arată însă diferența dintre frecvența comunicării și capacitatea informației de a răspunde unei nevoi.</p>

      <p>Același principiu se aplică identității. Dacă site-ul, profilurile și prezentările folosesc denumiri diferite, fără să explice relația dintre ele, un cititor trebuie să reconstruiască legăturile. Când numele, serviciile și datele de contact sunt coerente, munca aceasta devine mai simplă.</p>

      <p>Există și mijloace tehnice pentru a explicita identitatea. Google documentează, de exemplu, folosirea datelor structurate despre organizații pentru înțelegerea detaliilor administrative și diferențierea unei organizații de altele. Aceasta este o funcție de identificare, nu o promisiune de recomandare.<sup><a href="#fn-4">4</a></sup></p>

      <p>Mai există o condiție: informația trebuie să poată fi găsită și utilizată. Pentru AI Overviews și AI Mode, Google precizează că rămân relevante practicile SEO fundamentale, inclusiv:</p>

      <ul>
        <li>accesibilitatea pentru explorare;</li>
        <li>conținutul important în formă textuală;</li>
        <li>informațiile actualizate din Business Profile și Merchant Center.</li>
      </ul>

      <p>Pentru apariția ca link de sprijin, pagina trebuie să fie indexată și eligibilă pentru afișare cu un fragment în Search. Nici îndeplinirea cerințelor nu garantează afișarea.<sup><a href="#fn-5">5</a></sup></p>

      <p>Prin urmare, formularea „cu cât public, cu atât AI-ul mă cunoaște” comprimă prea multe lucruri diferite.</p>

      <h2 id="ce-urmaresc-separat-intr-un-audit-de-ai-visibility">Ce urmăresc separat într-un audit de AI Visibility</h2>

      <p>Într-un audit de AI Visibility, aș urmări separat aceste rezultate. Grila de mai jos este un instrument de analiză, nu descrierea unei succesiuni obligatorii din interiorul tuturor sistemelor AI.</p>

      <table>
        <thead>
          <tr><th scope="col">Ce urmăresc</th><th scope="col">Întrebarea practică</th></tr>
        </thead>
        <tbody>
          <tr><td>Găsirea informației</td><td>Sunt găsite sursele relevante despre afacere?</td></tr>
          <tr><td>Identificarea entității</td><td>Este vorba despre afacerea corectă, fără confuzii de nume?</td></tr>
          <tr><td>Corectitudinea descrierii</td><td>Sunt prezentate corect serviciile, localizarea și condițiile?</td></tr>
          <tr><td>Citarea unei surse</td><td>Sursa indicată susține afirmația făcută?</td></tr>
          <tr><td>Recomandarea</td><td>Este afacerea propusă pentru o nevoie potrivită, cu o justificare susținută?</td></tr>
        </tbody>
      </table>

      <p>Un sistem poate descrie corect o afacere fără să o recomande. Poate cita o pagină pentru o explicație generală, fără să recomande serviciile autorului. Poate menționa o companie cunoscută într-un context nefavorabil.</p>

      <p>Familiaritatea nu este o măsură a calității, iar notorietatea nu stabilește potrivirea pentru fiecare client.</p>

      <p>De aceea, cuvântul „apreciat” cere atenție în această analogie. Un nume poate fi ușor de recunoscut, dar pentru o recomandare justificată sunt necesare informații despre ce poate oferi în situația concretă a utilizatorului.</p>

      <h2 id="cum-reduci-nevoia-de-a-ghici">Cum reduci nevoia de a ghici</h2>

      <p>Aici devine utilă întoarcerea la scrisul de mână. Cineva apropiat poate ghici un cuvânt ilizibil fiindcă știe despre ce discutam. Uneori ghicește corect. Alteori completează golul cu ceva plauzibil.</p>

      <p>În comunicarea unei afaceri, merită să reducem nevoia de a ghici.</p>

      <p>Asta înseamnă să explicăm serviciile în termeni concreți, să facem vizibile condițiile importante și să arătăm ce susține afirmațiile despre experiență.</p>

      <p>O fotografie de proiect capătă mai mult sens când precizăm:</p>

      <ul>
        <li>ce problemă a existat;</li>
        <li>ce am realizat efectiv;</li>
        <li>care a fost contribuția noastră.</li>
      </ul>

      <p>Înseamnă și să revizităm informația. Un serviciu retras, o adresă schimbată sau un articol care descrie o ofertă veche pot rămâne perfect lizibile și totuși să ofere o imagine greșită despre prezent.</p>

      <p>Când mă întorc la un text vechi și nu mai înțeleg ce am vrut să spun, descopăr distanța dintre ce exista în mintea mea și ce am reușit să las pe pagină.</p>

      <p>Un antreprenor poate face același exercițiu cu propria prezență online: să o citească fără explicațiile pe care le oferă de obicei într-o conversație:</p>

      <ul>
        <li>Ce poate afla cineva doar din ceea ce este public?</li>
        <li>Ce rămâne presupus?</li>
        <li>Ce informație ar trebui să inventeze pentru a lega lucrurile între ele?</li>
      </ul>

      <h2 id="asa-sunt-eu-nu-fixeaza-reprezentarea-digitala">„Așa sunt eu” nu fixează reprezentarea digitală</h2>

      <p>Exercițiul acesta are și o parte încurajatoare: felul în care ești reprezentat astăzi online poate fi remodelat.</p>

      <p>În viața de zi cu zi, ne descriem adesea prin expresii care par să închidă discuția despre schimbare: „Așa sunt eu.” „Așa fac de când mă știu.” „Ăsta e stilul meu.” „Eu nu știu să mă vând.” „Cine mă cunoaște știe ce pot.” „La vârsta mea nu mă mai schimb.”</p>

      <p>Uneori, aceste formulări exprimă o preferință sau o dificultate reală. Alteori, transformă un obicei într-o definiție: dacă am făcut mult timp un lucru într-un anumit fel, ajungem să credem că felul acela de a face lucrurile este tot ceea ce putem fi.</p>

      <p>Scrisul de mână ne poate părea greu de schimbat. Îl repetăm de ani întregi, adesea fără să ne mai gândim la fiecare mișcare. Totuși, nici scrisul și nici obiceiurile noastre nu fixează definitiv cine putem deveni.</p>

      <p>În spațiul digital, unele intervenții sunt mai directe:</p>

      <ul>
        <li>Poți rescrie o prezentare care nu te mai reprezintă.</li>
        <li>Poți explica un serviciu pe care până acum doar îl numeai.</li>
        <li>Poți reorganiza un portofoliu, documenta o competență nouă și face vizibilă legătura dintre proiectele tale.</li>
      </ul>

      <p>Prin „<a href="/lab/articole/ce-este-entitate-ai-studiu-de-caz">entitate digitală</a>” mă refer aici la reprezentarea ta sau a afacerii tale, construită din pagini, profiluri, proiecte, mențiuni și relațiile dintre ele. Este ceea ce poate afla cineva despre tine din urmele pe care le găsește.</p>

      <p>Ai control direct asupra informațiilor pe care le publici în paginile și profilurile administrate de tine. În celelalte surse și în răspunsurile AI, efectele schimbărilor trebuie urmărite în timp. Remodelarea începe cu ceea ce poți corecta, explica și susține.</p>

      <p><strong>Reprezentarea ta digitală poate ține pasul cu ceea ce devii și poate susține direcția în care alegi să crești.</strong></p>

      <p>Aici apare o relație interesantă: încercarea de a explica mai bine ceea ce faci te poate ajuta să definești mai bine chiar activitatea.</p>

      <p>Când scrii pentru cine este un serviciu, trebuie să îți clarifici publicul. Când explici ce include, îți precizezi responsabilitățile. Când cauți dovezi pentru o competență, vezi ce ai documentat și unde mai ai de lucrat. Când primești întrebări pe care prezentarea ta le-a lăsat fără răspuns, descoperi ce merită lămurit.</p>

      <p>Tu aduci experiențe și rezultate noi. Prezența ta digitală le face accesibile. Întâlnirile, întrebările și colaborările care pot apărea de aici îți oferă, la rândul lor, ocazii să îți dezvolți munca.</p>

      <p>În acest sens, tu și entitatea ta digitală puteți crește împreună. Schimbarea trebuie susținută de ceea ce înveți, construiești și poți oferi efectiv. O direcție nouă devine credibilă pe măsură ce capătă conținut și dovezi.</p>

      <p>„Așa sunt eu” poate descrie punctul din care pornești. Nu trebuie să stabilească și punctul în care te oprești.</p>

      <p>Pentru mine, aceasta este una dintre mizele AI Visibility: să facem experiența și identitatea unei afaceri suficient de explicite încât să poată fi descrise corect și evaluate în raport cu o nevoie reală. Iar când acea experiență evoluează, reprezentarea ei publică să poată evolua odată cu ea.</p>

      <p><strong>Scrisul meu devine cu adevărat util celuilalt când sensul poate ajunge la el fără să fiu lângă pagină ca să îl explic.</strong></p>

      <p>Același lucru îl cerem prezenței noastre online. Putem lucra, în același timp, la ceea ce devenim și la felul în care ceilalți pot înțelege această schimbare.</p>

      <h2 id="surse-si-metodologie">Surse și metodologie</h2>

      <p>Analogia dintre lectură și vizibilitatea online este o interpretare editorială. Sursele de mai jos susțin explicațiile punctuale despre citire, modele lingvistice, recuperarea informației și funcțiile Google; ele nu demonstrează o relație universală între frecvența publicării și recomandările AI. Exemplul atelierelor este ipotetic.</p>

      <ol class="avl-footnotes">
        <li id="fn-1">Linnea C. Ehri (2014), <a href="https://doi.org/10.1080/10888438.2013.819356" target="_blank" rel="noopener noreferrer">Orthographic Mapping in the Acquisition of Sight Word Reading, Spelling Memory, and Vocabulary Learning</a>, Scientific Studies of Reading, 18(1), 5–21. <a href="https://eric.ed.gov/?id=EJ1027413" target="_blank" rel="noopener noreferrer">Rezumat bibliografic ERIC</a>.</li>
        <li id="fn-2">Patrick Lewis și colaboratorii (2020), <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener noreferrer">Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks</a>, NeurIPS 2020.</li>
        <li id="fn-3">Nikhil Kandpal și colaboratorii (2023), <a href="https://proceedings.mlr.press/v202/kandpal23a.html" target="_blank" rel="noopener noreferrer">Large Language Models Struggle to Learn Long-Tail Knowledge</a>, ICML, PMLR 202:15696–15707.</li>
        <li id="fn-4">Google Search Central, <a href="https://developers.google.com/search/docs/appearance/structured-data/organization" target="_blank" rel="noopener noreferrer">Organization structured data</a>.</li>
        <li id="fn-5">Google Search Central, <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">AI features and your website</a>.</li>
      </ol>

      <p>Surse consultate la 11 noiembrie 2026 și reverificate la 13 noiembrie 2026.</p>

      <h3 id="nota-de-volatilitate">Notă de volatilitate</h3>

      <p>Documentația Google despre AI Overviews, AI Mode și datele structurate, ca și comportamentul sistemelor AI, se poate schimba. Afirmațiile despre Google Search au fost verificate la 13 noiembrie 2026.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 13 noiembrie 2026.</em></p>
`;
