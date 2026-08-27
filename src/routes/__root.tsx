import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import { alexMatescuPerson } from "@/components/Seo";
import { getPresaSubjectOfRefs } from "@/lib/presa";
import appCss from "../styles.css?url";

// `subjectOf` se calculează din presa.json (nu din Seo.tsx, ca să evităm un
// import ciclic Seo.tsx ↔ presa.ts) — @id-urile aparițiilor în presă în care
// Person e subiect. Vezi @/lib/presa pentru regulile de mapare kind → relație.
const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  ...alexMatescuPerson,
  subjectOf: getPresaSubjectOfRefs(),
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Alex Matescu — Scris, proiecte și reflecții despre claritate și muncă" },
      {
        name: "description",
        content:
          "Hubul personal al lui Alex Matescu: inginer, antreprenor, fondator și coordonator AI Visibility Lab și autor. Articole, cărți și proiecte despre claritate, disciplină, muncă și sens.",
      },
      { name: "author", content: "Alex Matescu" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Alex Matescu — Scris, proiecte și reflecții despre claritate și muncă",
      },
      {
        property: "og:description",
        content:
          "Hubul personal al lui Alex Matescu: inginer, antreprenor, fondator și coordonator AI Visibility Lab și autor. Articole, cărți și proiecte despre claritate, disciplină, muncă și sens.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/df808e43-32d8-4a1f-b7ec-a5ba465e5fd2/id-preview-0eba6373--c63c8481-9d39-4bae-9ba3-3610a6510394.lovable.app-1782658308599.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Alex Matescu — Scris, proiecte și reflecții despre claritate și muncă",
      },
      {
        name: "twitter:description",
        content:
          "Hubul personal al lui Alex Matescu: inginer, antreprenor, fondator și coordonator AI Visibility Lab și autor. Articole, cărți și proiecte despre claritate, disciplină, muncă și sens.",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/df808e43-32d8-4a1f-b7ec-a5ba465e5fd2/id-preview-0eba6373--c63c8481-9d39-4bae-9ba3-3610a6510394.lovable.app-1782658308599.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..72,400;6..72,500;6..72,600&family=Cinzel:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [{ type: "application/ld+json", children: personJsonLd }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="font-serif text-3xl mb-3">This page didn't load</h1>
        <p className="text-muted-foreground mb-8">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="h-11 px-6 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="h-11 px-6 inline-flex items-center border border-foreground/20 text-sm hover:bg-foreground/5 transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
