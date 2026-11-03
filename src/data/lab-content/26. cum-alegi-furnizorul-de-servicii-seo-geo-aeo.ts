import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const cumAlegiFurnizorulDeServiciiMeta: LabArticleMeta = {
  title: "Dacă furnizorul nu face pentru el, cum face pentru alții?",
  description:
    "Cum alegi un furnizor de SEO, GEO sau AI Visibility în România. Ce verifici pe site, ce întrebi în întâlnire și ce ceri în ofertă înainte să semnezi.",
  canonical:
    "https://delamatescu.ro/lab/articole/cum-alegi-furnizorul-de-servicii-seo-geo-aeo",
  category: "AI Ecosystem",
  articleType: "Ghid",
  datePublished: "2026-11-03T09:20:00+02:00",
  dateModified: "2026-11-03",
  lastReviewed: "2026-11-03",
  image: {
    url: "https://delamatescu.ro/images/lab/cum-aleg-furnizorul-de-servicii.webp",
    alt: "Într-un birou din Sibiu, o antreprenoare indică sursa unei recomandări AI de pe laptop. Consultantul din fața ei ține palma deschisă, repetând gestul creatorului de pe ecranul YouTube din fundal.",
  },
  about: [
    { name: "Alegerea unui furnizor de servicii de marketing" },
    { name: "Generative Engine Optimization" },
    { name: "AI Visibility" },
    { name: "Market Verification" },
  ],
  keywords: [
    "cum alegi o agenție SEO",
    "furnizor GEO România",
    "servicii AI Visibility",
    "evaluarea unei oferte de marketing",
    "întrebări pentru agenție",
    "AEO",
    "Market Verification",
  ],
  citations: [
    {
      name: "AI Visibility Lab — AVL-MKT-001 — Market Scope & Eligibility Protocol",
      url: "https://delamatescu.ro/lab/metodologie/protocol-delimitare-piata-eligibilitate",
    },
    {
      name: "Acquisition.com — $100M Journal: Introduction",
      url: "https://www.acquisition.com/journal-01",
    },
    {
      name: "AI Visibility Lab — AVL-200 — Standard dovezi, măsurare și trasabilitate",
      url: "https://delamatescu.ro/lab/metodologie/standard-dovezi-masurare-trasabilitate",
    },
  ],
  faq: [],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const cumAlegiFurnizorulDeServiciiHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-11-03T09:20:00+02:00">3 noiembrie 2026</time> · Ultima verificare factuală: <time datetime="2026-11-03">3 noiembrie 2026</time></p>

      <figure>
        <img src="/images/lab/cum-aleg-furnizorul-de-servicii.webp" alt="Într-un birou din Sibiu, o antreprenoare indică sursa unei recomandări AI de pe laptop. Consultantul din fața ei ține palma deschisă, repetând gestul creatorului de pe ecranul YouTube din fundal." width="1672" height="941" loading="lazy" />
      </figure>

      <nav class="article-toc" aria-labelledby="cuprins">
        <p id="cuprins" class="article-toc-title">Cuprins</p>
        <ol>
          <li><a href="#ce-iti-spune-propriul-site-al-furnizorului">Ce îți spune propriul site al furnizorului?</a></li>
          <li><a href="#de-la-un-nume-gasit-la-un-furnizor-pe-care-il-poti-verifica">De la un nume găsit la un furnizor pe care îl poți verifica</a></li>
          <li><a href="#ce-valoare-are-o-recomandare">Ce valoare are o recomandare?</a></li>
          <li><a href="#cat-dintr-un-succes-vazut-pe-youtube-ajunge-pana-la-clientul-din-romania">Cât dintr-un succes văzut pe YouTube ajunge până la clientul din România?</a></li>
          <li><a href="#ce-intrebi-cand-ti-se-prezinta-un-rezultat">Ce întrebi când ți se prezintă un rezultat?</a></li>
          <li><a href="#cum-compari-preturile-cand-ofertele-par-sa-vanda-acelasi-lucru">Cum compari prețurile când ofertele par să vândă același lucru?</a></li>
          <li><a href="#ce-faci-inainte-sa-semnezi">Ce faci înainte să semnezi?</a></li>
          <li><a href="#surse-si-metodologie">Surse și metodologie</a>
            <ol>
              <li><a href="#nota-de-volatilitate">Notă de volatilitate</a></li>
            </ol>
          </li>
        </ol>
      </nav>

      <p>Întrebarea mi-a venit în timp ce verificam candidații descoperiți prin Market Discovery pentru piața serviciilor de vizibilitate AI din România. Pe un site puteam citi de câteva ori „echipa noastră de experți” fără să aflu numele unui om. Pe altele găseam serviciul în meniu, dar îmi era greu să spun ce aș primi dacă l-aș cumpăra. Iar când treceam de la site la profilurile sociale, uneori trebuia să reconstruiesc singur legătura dintre om, brand și ofertă.</p>

      <p>M-a tentat concluzia că în România lipsește un standard după care să alegi servicii. Din paginile pe care le-am verificat pot spune ceva mai precis. Ca potențial client, găseam suficiente cuvinte ca să încep o conversație și prea puține informații ca să compar două oferte. Ce faci atunci? Îl alegi pe cel recomandat de un prieten? Pe cel care explică mai convingător? Sau te mulțumești cu gândul pe care e atât de ușor să-l ai la capătul unei prezentări bune — „N-am înțeles eu tot, dar oamenii ăștia sigur știu ce fac”?</p>

      <p><strong>Cum alegi, pe scurt?</strong> Verifică cine îți oferă serviciul și dacă lucrează pentru o piață ca a ta. Cere un proiect comparabil, urmărește o afirmație până la dovada ei și pune în scris ce primești pentru banii tăi. O recomandare te poate duce la omul potrivit. Mai ai de stabilit dacă e omul potrivit <em>pentru problema ta</em>.</p>

      <h2 id="ce-iti-spune-propriul-site-al-furnizorului">Ce îți spune propriul site al furnizorului?</h2>

      <p>Depinde ce promite. Dacă o agenție îmi propune să clarifice relația dintre brandul meu și oamenii din spatele lui, mă uit cum a rezolvat această problemă acasă. Dacă îmi vinde măsurare, caut o măsurătoare pe care o poate explica. Dacă îmi promite că voi fi mai ușor de găsit, mi se pare firesc să întreb ce a observat când și-a căutat propria firmă.</p>

      <p>Aici merită să fii drept. Un consultant independent poate avea un site de trei pagini și o practică foarte bună. Un proiect confidențial poate lăsa puține urme publice. I-aș spune exact unde m-am blocat. „Am găsit descrierea serviciului, dar nu am înțeles cine îl livrează. Îmi puteți arăta cine va lucra pe contul meu și un exemplu de ce îmi va trimite?” Răspunsul la întrebarea asta cântărește mai mult decât numărul paginilor de pe site.</p>

      <h2 id="de-la-un-nume-gasit-la-un-furnizor-pe-care-il-poti-verifica">De la un nume găsit la un furnizor pe care îl poți verifica</h2>

      <p>În AI Visibility Lab, <a href="/lab/market-discovery">Market Discovery</a> adună candidați. În etapa următoare, Market Verification, verific pentru fiecare identitatea, serviciul oferit, legătura cu piața cercetată și valabilitatea informației la data de referință. Păstrez sursa, data accesării și o copie a dovezii. Market Reference Set oferă astfel o referință documentată pentru cercetare. Statutul de eligibilitate răspunde întrebării „îndeplinește criteriile acestei piețe?”. Performanța echipei rămâne o întrebare separată.<sup><a href="#fn-1">1</a></sup></p>

      <p>Să presupunem că ai o firmă de instalații în Sibiu și un asistent AI îți recomandă o agenție pentru „optimizare în ChatGPT”. Acesta este un exemplu ipotetic. Deschizi sursa citată. Găsești un interviu în care fondatorul discută despre viitorul inteligenței artificiale. Ai verificat că omul a vorbit despre subiect. Ca să afli dacă îi poți cumpăra serviciul, mai ai nevoie de o ofertă atribuibilă firmei. Cauți pagina oficială, verifici dacă serviciul e actual și dacă echipa lucrează pentru clienți care se adresează publicului din România. Dacă informația rămâne neclară, notezi întrebarea pentru întâlnire. În protocol, un caz insuficient documentat poate rămâne neverificat. În achiziție, ai avantajul că poți ridica telefonul.</p>

      <h2 id="ce-valoare-are-o-recomandare">Ce valoare are o recomandare?</h2>

      <p>Dacă prietenul care ți-a dat numele agenției spune „sunt foarte buni”, întreabă-l <strong>„Ce au făcut pentru tine de i-ai angaja din nou?”</strong> Poate îți răspunde că au mutat un magazin online fără să întrerupă comenzile. Poate îți spune că au găsit o eroare pe care trei echipe o rataseră. Sau poate că omul de cont îl suna de fiecare dată când apărea o problemă. Toate trei sunt motive serioase de încredere. Fiecare spune altceva despre ce poți cumpăra de la acea echipă.</p>

      <p>La fel aș citi un logo din portofoliu, inclusiv al unei companii dintr-un clasament Forbes. Ce a livrat furnizorul? În ce perioadă? A condus proiectul, a executat o parte din el sau experiența îi aparține unui specialist care lucra atunci în altă firmă? Cine dintre cei implicați va lucra cu tine? Prestigiul clientului nu răspunde în locul lor.</p>

      <h2 id="cat-dintr-un-succes-vazut-pe-youtube-ajunge-pana-la-clientul-din-romania">Cât dintr-un succes văzut pe YouTube ajunge până la clientul din România?</h2>

      <p>Intru pe YouTube ca prestator de servicii. Un om îmi arată cât a încasat la o lansare. Altul povestește cum și-a găsit primii o sută de clienți. Îi ascult, mă uit la câte materiale au publicat și, până să închid laptopul, am impresia că am rămas în urmă cu vreo cinci ani. Iar omul care tocmai mi-a explicat cum se face o vânzare a făcut deja una, în sensul cel mai simplu al cuvântului. Acum un sfert de oră nu știam cine e. Acum vreau să-i citesc cartea.</p>

      <p>Îl iau ca exemplu pe Alex Hormozi. Pot urmări gratuit cursul lui despre construirea unei oferte și pot învăța din felul în care îmi trezește interesul chiar pentru acel curs. Pe același site, Acquisition.com precizează că rezultatele lui Alex și Leila Hormozi nu sunt tipice și nu garantează succesul altcuiva, iar organizația nu cunoaște și nu urmărește rezultatele tipice ale cursanților. Merită să citesc ambele lucruri înainte să-mi fac planul de vânzări pentru Sibiu.<sup><a href="#fn-2">2</a></sup></p>

      <p>Ce pot aduce cu mine în România? Felul în care explic unei firme ce primește pentru banii ei, cu siguranță. Dar dacă vreau să vând unui proprietar de firmă de instalații care își ia lucrările din recomandări, mai am ceva de aflat. Câți dintre clienții lui caută un instalator prin AI? Cine decide când e vorba de o hală industrială? Ce ar trebui să vadă omul acesta ca să mute o parte din bugetul lui spre mine? Faptul că eu am văzut un clip american pe telefon, în Sibiu, spune ceva despre cât de departe poate ajunge creatorul. Despre clienții instalatorului încă n-am aflat nimic.</p>

      <p>Acum schimb scaunul. Sunt cumpărător și am văzut și eu clipurile. Când un marketer din România îmi spune „Hai să vedem cât te costă să mai aștepți șase luni”, îmi sună cunoscut. Îmi place siguranța cu care vorbește. Îmi și imaginez un client de-al meu întrebând ChatGPT pe cine să aleagă și primind numele concurentului. Aici simt transferul de atitudine. O parte din încrederea pe care mi-a inspirat-o americanul ajunge la omul din fața mea, înainte ca el să-mi fi arătat ce a făcut pentru o firmă ca a mea.</p>

      <p>Să zicem că semnez. El poate spune, pe bună dreptate, că a câștigat un client. Eu pot pleca acasă convins că am cumpărat servicii de top. Amândoi suntem mulțumiți în aceeași după-amiază. Lucrarea începe luni. Dacă luna viitoare povestea mea intră în portofoliul lui, ce va putea arăta despre mine în afară de faptul că m-a convins? Un coleg care cunoaște domeniul ar fi întrebat poate, încă din întâlnire, cât de des a fost recomandat concurentul și la ce întrebări. Eu tocmai de aceea cumpăr expertiză, fiindcă asemenea întrebări nu-mi vin firesc. Una tot pot pune. <strong>„Mi-ați descris foarte bine ce risc să pierd. Ce ați observat concret la firma mea de credeți că pierd deja acele ocazii?”</strong></p>

      <p>Și mă întorc la prestatorul care eram când am deschis YouTube. Aud „acum e momentul” într-un clip publicat azi. Care „acum”? Între clipa în care omul a rostit fraza și cea în care am auzit-o eu au încăput filmarea, montajul și publicarea. Între momentul în care a încercat tactica și cel în care a avut un rezultat demn de povestit poate să fi trecut mult mai mult. Poate că în România oportunitatea abia începe. Poate că publicul meu a văzut deja aceeași ofertă de zece ori. Înainte să le spun clienților mei că <em>acum</em> e momentul, aș vrea să pot numi ceva ce am observat aici, săptămâna asta.</p>

      <h2 id="ce-intrebi-cand-ti-se-prezinta-un-rezultat">Ce întrebi când ți se prezintă un rezultat?</h2>

      <p>Imaginează-ți că, în timpul întâlnirii, agenția îți arată un răspuns AI în care apare numele unui client. E tentant să întrebi „În cât timp puteți face asta și pentru noi?”. Eu aș începe cu o întrebare mai ieftină și mai instructivă. <strong>„Îmi arătați exact ce ați întrebat?”</strong></p>

      <p>Dacă întrebarea era „Ce servicii oferă firma X?”, numele firmei fusese deja introdus de utilizator. Dacă era „Ce firme din Sibiu fac instalații pentru hale industriale?”, apariția spune altceva despre șansa de a fi descoperit de cineva care încă nu te cunoaște. Mai uită-te la un detaliu. Sistemul poate menționa firma ta, poate cita un articol scris de tine sau te poate recomanda pentru lucrare. Ce anume îți arată captura?</p>

      <p>Acum poți continua conversația. „Cum arătau răspunsurile înainte să interveniți? Ce ați schimbat? Ați repetat aceleași întrebări în condiții comparabile? Îmi arătați și o întrebare la care clientul a continuat să lipsească?” O captură documentează ce s-a afișat într-o rulare. Pentru a susține o îmbunătățire ai nevoie de o comparație. Pentru a-i atribui furnizorului acea îmbunătățire trebuie să discutați și ce altceva s-a schimbat între timp. Aici folosesc în practică disciplina laboratorului de a separa observația, măsurarea și interpretarea.<sup><a href="#fn-3">3</a></sup></p>

      <p>Și mai e întrebarea pe care aș pune-o din scaunul directorului de vânzări. „Dacă apar mai des, cum aflăm dacă discuțiile cu potențialii clienți se schimbă?” Pentru firma de instalații, un indiciu ar fi cererile de ofertă în care cumpărătorul spune cum a găsit-o. Poți înregistra acele răspunsuri. Dacă nu le ai, poți raporta ce ai văzut în sistemele AI și poți lăsa deschisă întrebarea despre vânzări. Mi-ar inspira încredere furnizorul care știe unde se termină măsurătoarea lui.</p>

      <h2 id="cum-compari-preturile-cand-ofertele-par-sa-vanda-acelasi-lucru">Cum compari prețurile când ofertele par să vândă același lucru?</h2>

      <p>Absența prețului de pe site îmi lasă o întrebare comercială deschisă. Nu e criteriu formal de excludere din setul de referință al laboratorului. În schimb, înainte să semnez, vreau să știu cât mă costă să ajung de la diagnostic la o schimbare pe care o putem verifica.</p>

      <p>Să luăm două oferte ipotetice pentru aceeași firmă din Sibiu. Ambele conțin cuvintele „audit și monitorizare”. Iată cum aș consemna răspunsurile după întâlnire.</p>

      <table>
        <thead>
          <tr><th scope="col">Ce vreau să aflu</th><th scope="col">Oferta A</th><th scope="col">Oferta B</th></tr>
        </thead>
        <tbody>
          <tr><th scope="row">Ce primesc după audit?</th><td>Listă de probleme și pagini prioritare</td><td>Aceeași listă, plus propuneri de modificare pentru trei pagini</td></tr>
          <tr><th scope="row">Cine face modificările?</th><td>Omul meu care întreține site-ul</td><td>Furnizorul le publică după aprobarea mea</td></tr>
          <tr><th scope="row">Cum verificăm ce s-a schimbat?</th><td>Primesc un raport lunar. Întrebările urmărite trebuie clarificate</td><td>Stabilim întrebările la început și primesc rezultatele înainte și după intervenție</td></tr>
          <tr><th scope="row">Ce cost mai am de calculat?</th><td>Implementarea și timpul echipei mele</td><td>Lucrările care depășesc cele trei pagini</td></tr>
        </tbody>
      </table>

      <p>Dacă am un om bun care poate implementa săptămâna viitoare, oferta A poate fi alegerea potrivită. Dacă site-ul așteaptă de trei luni după fiecare modificare, tocmai am descoperit ce valoare are pentru mine implementarea din oferta B. Cer ambilor un preț pentru aceeași perioadă și pentru același volum de lucru. Abia acum diferența de preț îmi spune ceva despre decizia mea.</p>

      <h2 id="ce-faci-inainte-sa-semnezi">Ce faci înainte să semnezi?</h2>

      <p>Trimite-i furnizorului un paragraf în cuvintele tale. „Am înțeles că în prima lună măsurați situația actuală, convenim ce pagini modificăm, dumneavoastră pregătiți textele, iar colegul meu le publică. La următoarea măsurare primesc inclusiv întrebările la care firma mea lipsește. Costul include aceste etape. Am înțeles corect?” Cere ca răspunsul agreat să se regăsească în ofertă. Dacă ai înțeles greșit, încă e ieftin să afli.</p>

      <p>Mă întorc la întrebarea de la care am plecat. „Dacă furnizorul nu face pentru el, cum face pentru alții?” Aș pune-o și propriei mele inițiative, Ichnometria, fiindcă lucrez în aceeași piață pe care o cercetez. Ca potențial client, i-aș da oricărui furnizor ocazia să răspundă. Poate îmi arată o muncă foarte bună pe care a explicat-o prost. Poate descoperim împreună că are exact competența de care am nevoie, dar prea puțin timp pentru proiectul meu. Sau poate, după o oră de prezentare, tot ce pot spune acasă este „par să știe ce fac”.</p>

      <p>În ultimul caz, aș mai pune o întrebare înainte să scot cardul. <strong>„Îmi puteți arăta, pe un singur exemplu, ce voi putea verifica eu însumi după ce vă plătesc?”</strong></p>

      <h2 id="surse-si-metodologie">Surse și metodologie</h2>

      <p>Articolul pornește de la verificarea candidaților din Market Discovery, făcută de autor conform protocolului AVL-MKT-001. Nu numește și nu evaluează furnizori concreți. Exemplele cu firma de instalații din Sibiu, cu asistentul AI care recomandă o agenție și cu cele două oferte sunt ipotetice și sunt marcate ca atare în text. Ichnometria este inițiativa autorului și activează în aceeași piață; relația e declarată în text, conform secțiunii 14 din AVL-MKT-001. Sursele au fost verificate la 3 noiembrie 2026.</p>

      <ol class="avl-footnotes">
        <li id="fn-1">AI Visibility Lab, <a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</a>, secțiunile 7–12: cerințele de identitate, serviciu, relevanță pentru piață, valabilitate temporală și trasabilitate (AVLMKT001-REQ-003…007), statusurile de eligibilitate, inclusiv UNVERIFIED, și Market Reference Set. Document în stadiul de draft pentru revizuire.</li>
        <li id="fn-2">Acquisition.com, <a href="https://www.acquisition.com/journal-01" target="_blank" rel="noopener noreferrer">$100M Journal — Introduction</a>: cursul $100M Offers disponibil gratuit și precizarea din subsolul paginii despre rezultatele netipice ale lui Alex și Leila Hormozi și despre rezultatele cursanților, pe care organizația nu le cunoaște și nu le urmărește.</li>
        <li id="fn-3">AI Visibility Lab, <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standard dovezi, măsurare și trasabilitate</a>: lanțul Raw Evidence → Indexed Evidence → Observation → Measurement → Interpretation și separarea observației de interpretare (AVL200-REQ-002).</li>
      </ol>

      <h3 id="nota-de-volatilitate">Notă de volatilitate</h3>

      <p>Ofertele și precizările de pe site-ul Acquisition.com se pot schimba. AVL-MKT-001 este un draft pentru revizuire, iar criteriile lui pot fi versionate până la 1.0.0. Informațiile au fost verificate la 3 noiembrie 2026.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 3 noiembrie 2026.</em></p>
`;
