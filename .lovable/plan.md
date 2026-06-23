## Actualizare meniu navigare

Reordonez și relabel-ez meniul (header + footer) astfel:

**Acasă | Despre | Călătoria | Proiecte | CRANDIT | Blog | Contact**

### Modificări concrete

1. **`src/components/SiteLayout.tsx`** — rescriu array-ul `nav` în această ordine, cu eticheta „CRANDIT" (păstrând URL `/carte`) și adăugând „Călătoria" (URL `/calatoria`). Header-ul și footer-ul folosesc același array, deci se actualizează amândouă.

2. **Pagină nouă `src/pages/Calatoria.tsx`** — pagină nouă cu scopul: „Cum am ajuns aici?" și un timeline complet al parcursului tău. Structură:
   - Hero scurt: titlu „Călătoria", subtitlu „Cum am ajuns aici", paragraf intro despre scopul paginii.
   - Secțiune timeline vertical (stil editorial, coerent cu restul site-ului): listă cronologică de momente/etape, fiecare cu an, titlu, descriere scurtă. Voi popula cu intrări-placeholder pe care le poți edita ulterior (ex: începuturi, momente-cheie, lansarea proiectelor, CRANDIT etc.).
   - CTA final spre `/proiecte` și `/carte`.

3. **`src/App.tsx`** — adaug ruta `/calatoria` → `Calatoria` în interiorul `SiteLayout`.

### Notă

- Eticheta „CRANDIT" se afișează cu majuscule așa cum ai cerut; restul etichetelor rămân în stilul actual (Title Case).
- URL-ul pentru CRANDIT rămâne `/carte` — nu se sparg link-uri existente.
- Conținutul timeline-ului este placeholder editorial; după implementare îmi poți spune evenimentele exacte și le populez.
