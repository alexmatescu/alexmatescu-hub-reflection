## Adăugare meniu „AI Visibility Lab"

### 1. `src/components/SiteLayout.tsx`
- Adaug intrare nouă în `nav`, între „CRANDIT" și „Blog":
  `{ to: "/ai-visibility", label: "AI Visibility Lab", hasDropdown: true }`
- Introduc un al doilea array `aiVisibilityDropdownItems` cu ancorele:
  - Ce este AI Visibility → `/ai-visibility#ce-este`
  - Metodologie GEO/AEO → `/ai-visibility#metodologie`
  - Audit AI Visibility → `/ai-visibility#audit`
  - Studii de caz → `/ai-visibility#studii-de-caz`
  - Resurse → `/ai-visibility#resurse`
- Extind logica de dropdown (desktop + mobile) ca să suporte două meniuri cu dropdown, nu doar „Proiecte". Cel mai curat: în loc de flag boolean, fiecare item cu dropdown primește propriul array `items`, iar starea `projectsOpen` devine `openDropdown: string | null`.

### 2. Pagină nouă `src/pages/AiVisibility.tsx`
- O singură pagină cu 5 secțiuni ancorate (`id="ce-este"`, `id="metodologie"`, `id="audit"`, `id="studii-de-caz"`, `id="resurse"`).
- Hero scurt sus (titlu „AI Visibility Lab", subtitlu, paragraf intro).
- Fiecare secțiune: eyebrow + titlu + paragraf placeholder editorial („Conținut în lucru — se completează ulterior."), în stilul editorial existent (Fraunces + Inter, `container-editorial`).
- Scroll la ancoră gestionat nativ prin `id` + un mic `useEffect` care face `scrollIntoView` când `location.hash` se schimbă (pentru cazul când utilizatorul dă click pe același item de mai multe ori).

### 3. `src/App.tsx`
- Adaug ruta `/ai-visibility` → `AiVisibility` în interiorul `SiteLayout`.

### Note
- Nu modific conținutul altor pagini.
- Textul din cele 5 secțiuni rămâne placeholder — îl completezi tu ulterior când ai materialul.
- Ordinea finală meniu: Acasă | Despre | Călătoria | Proiecte ▾ | CRANDIT | AI Visibility Lab ▾ | Blog | Contact.
