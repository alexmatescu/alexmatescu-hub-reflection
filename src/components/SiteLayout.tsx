import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Acasă" },
  { to: "/despre", label: "Despre" },
  { to: "/calatoria", label: "Călătoria" },
  { to: "/proiecte", label: "Proiecte" },
  { to: "/carte", label: "CRANDIT" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const SiteLayout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-foreground/10">
        <div className="container-editorial flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="group flex items-center gap-3" aria-label="Alex Matescu — acasă">
            <span className="font-serif text-xl tracking-tight">Alex Matescu</span>
            <span className="hidden md:inline text-[11px] uppercase tracking-[0.22em] text-muted-foreground border-l border-foreground/15 pl-3">
              Scris · Proiecte
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 -mr-2 text-foreground"
            aria-label="Meniu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-foreground/10 bg-background">
            <nav className="container-editorial py-6 flex flex-col gap-5">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `font-serif text-2xl ${isActive ? "text-foreground" : "text-muted-foreground"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-foreground/10 bg-surface/60">
        <div className="container-editorial py-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl text-balance leading-snug">
              Documentez procesul. Construiesc în timp. <br />
              <span className="text-muted-foreground">Scriu despre ce învăț.</span>
            </p>
            <p className="mt-6 text-sm text-muted-foreground max-w-md">
              Un hub personal pentru articole, carte și proiecte despre claritate, disciplină, muncă și sens.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Navigare</p>
            <ul className="space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground hover:text-foreground transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Urmărește</p>
            <ul className="space-y-3 text-sm">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "Blog (RSS)", href: "/blog" },
                { label: "X / Twitter", href: "#" },
                { label: "Facebook", href: "#" },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10">
          <div className="container-editorial py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Alex Matescu. Toate drepturile rezervate.</p>
            <p className="font-serif italic">„Claritate, muncă, sens.”</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
