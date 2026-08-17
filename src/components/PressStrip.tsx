import { Link } from "@/lib/router-compat";
import {
  getPresaEntriesBySubject,
  getPresaEntriesSorted,
  type PresaSubject,
} from "@/lib/presa";

/**
 * Bandă compactă de apariții în presă — gata de folosit, dar NU montată nicăieri
 * încă (nici pe homepage). Motiv: singurele apariții de până acum sunt despre
 * Taste The Corn (stand de porumb), iar sub un hero despre claritate/disciplină/
 * muncă/sens ar crea o dizarmonie tematică. Se activează pe homepage când există
 * cel puțin o apariție despre scris, AI sau consultanță (subject "person"/"crandit"/"lab").
 *
 * Utilizare: <PressStrip /> (toate aparițiile) sau <PressStrip subject="taste-the-corn" />.
 */
const PressStrip = ({
  subject,
  limit = 4,
}: {
  subject?: PresaSubject;
  limit?: number;
}) => {
  const entries = (
    subject ? getPresaEntriesBySubject(subject) : getPresaEntriesSorted()
  ).slice(0, limit);

  if (entries.length === 0) return null;

  return (
    <div className="border-y border-foreground/10 py-6">
      <div className="container-editorial flex flex-col md:flex-row md:items-center gap-4">
        <p className="eyebrow shrink-0">Apariții în presă</p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {entries.map((entry) => (
            <li key={entry.id}>
              <a
                href={entry.url}
                target="_blank"
                rel="noopener"
                className="hover:text-foreground transition-colors"
              >
                {entry.publication}
              </a>
            </li>
          ))}
          <li>
            <Link to="/presa" className="link-underline text-foreground">
              Toate aparițiile →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PressStrip;
