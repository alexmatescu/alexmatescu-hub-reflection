import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const nav = [
  { to: "/", label: "Acasă" },
  { to: "/despre", label: "Despre" },
  { to: "/calatoria", label: "Călătoria" },
  { to: "/proiecte", label: "Proiecte", hasDropdown: true },
  { to: "/carte", label: "CRANDIT" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const projectDropdownItems = [
  { to: "/proiecte/geo-ai-visibility", label: "GEO/AEO vizibility" },
  { to: "/carte", label: "CRANDIT" },
  { to: "/proiecte/taste-the-corn", label: "TASTE THE CORN" },
  { to: "/proiecte/ovb", label: "OVB" },
  { to: "/proiecte/atractiile-romaniei", label: "Atracțiile României" },
  { to: "/proiecte/afacerea-de-familie", label: "Afacerea de familie" },
  { to: "/proiecte/afacerea-cu-haine", label: "Afacerea cu haine" },
  { to: "/blog", label: "Blogging" },
];

const isProjectsActive = (pathname: string) =>
  pathname.startsWith("/proiecte") ||
  projectDropdownItems.some((item) => pathname === item.to);

const SiteLayout = () => {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setProjectsOpen(false);
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
            {nav.map((item) =>
              item.hasDropdown ? (
                <DropdownMenu key={item.to}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-1 text-sm transition-colors outline-none ${
                        isProjectsActive(location.pathname)
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-label="Proiecte"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={12}
                    className="min-w-[16rem] rounded-md border border-foreground/10 bg-background p-1 shadow-sm"
                  >
                    {projectDropdownItems.map((sub) => {
                      const active = location.pathname === sub.to;
                      return (
                        <DropdownMenuItem key={sub.to} asChild>
                          <Link
                            to={sub.to}
                            className={`flex items-center justify-between px-3 py-2.5 text-sm transition-colors rounded-sm cursor-pointer ${
                              active
                                ? "bg-surface text-foreground"
                                : "text-muted-foreground hover:bg-surface hover:text-foreground"
                            }`}
                          >
                            {sub.label}
                            {active && (
                              <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" aria-hidden="true" />
                            )}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
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
              ),
            )}
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
              {nav.map((item) =>
                item.hasDropdown ? (
                  <div key={item.to} className="flex flex-col">
                    <button
                      onClick={() => setProjectsOpen((s) => !s)}
                      className={`flex items-center justify-between font-serif text-2xl ${
                        isProjectsActive(location.pathname) ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${projectsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {projectsOpen && (
                      <ul className="mt-4 ml-4 flex flex-col gap-3 border-l border-foreground/10 pl-4">
                        {projectDropdownItems.map((sub) => {
                          const active = location.pathname === sub.to;
                          return (
                            <li key={sub.to}>
                              <Link
                                to={sub.to}
                                className={`text-sm transition-colors ${
                                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ) : (
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
                ),
              )}
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
                { label: "LinkedIn", href: "https://www.linkedin.com/in/alex-matescu-8b2b8813b/" },
                { label: "Blog (RSS)", href: "/blog" },
                { label: "X / Twitter", href: "#" },
                { label: "Facebook", href: "#" },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-muted-foreground hover:text-foreground transition-colors">
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
