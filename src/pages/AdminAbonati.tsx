import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { Session } from "@supabase/supabase-js";

type Subscriber = {
  id: string;
  email: string;
  source: string | null;
  created_at: string;
};

const AdminAbonati = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [authLoading, setAuthLoading] = useState(false);

  const [subs, setSubs] = useState<Subscriber[]>([]);
  const [loadingSubs, setLoadingSubs] = useState(false);

  // Bootstrap session + listener
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  // Check role + load subs when session changes
  useEffect(() => {
    if (!session) {
      setIsAdmin(false);
      setSubs([]);
      return;
    }
    (async () => {
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      const admin = !error && !!data;
      setIsAdmin(admin);
      if (admin) loadSubs();
    })();
  }, [session]);

  const loadSubs = async () => {
    setLoadingSubs(true);
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .select("id, email, source, created_at")
      .order("created_at", { ascending: false });
    setLoadingSubs(false);
    if (error) {
      toast({ title: "Eroare", description: error.message, variant: "destructive" });
      return;
    }
    setSubs((data as Subscriber[]) ?? []);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    const fn = mode === "signin"
      ? supabase.auth.signInWithPassword({ email, password })
      : supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin/abonati` },
        });
    const { error } = await fn;
    setAuthLoading(false);
    if (error) {
      toast({ title: "Autentificare eșuată", description: error.message, variant: "destructive" });
      return;
    }
    if (mode === "signup") {
      toast({
        title: "Cont creat",
        description: "Te poți autentifica. Cere-mi să-ți atribui rolul de admin.",
      });
      setMode("signin");
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const removeSub = async (id: string) => {
    if (!confirm("Sigur ștergi acest abonat?")) return;
    const { error } = await supabase.from("newsletter_subscribers").delete().eq("id", id);
    if (error) {
      toast({ title: "Eroare", description: error.message, variant: "destructive" });
      return;
    }
    setSubs((s) => s.filter((x) => x.id !== id));
  };

  const exportCsv = () => {
    const header = "email,source,created_at\n";
    const rows = subs
      .map((s) => `${s.email},${s.source ?? ""},${s.created_at}`)
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `abonati-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (checking) {
    return <div className="container py-24 text-muted-foreground">Se încarcă…</div>;
  }

  // Not signed in → auth form
  if (!session) {
    return (
      <div className="container py-24 max-w-md">
        <p className="eyebrow mb-4">Administrare</p>
        <h1 className="font-serif text-3xl md:text-4xl mb-8">
          {mode === "signin" ? "Autentificare" : "Cont nou"}
        </h1>
        <form onSubmit={handleAuth} className="flex flex-col gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="h-12 px-4 bg-background border border-foreground/15 focus:border-foreground/40 outline-none text-sm"
          />
          <input
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="parolă (min. 8 caractere)"
            className="h-12 px-4 bg-background border border-foreground/15 focus:border-foreground/40 outline-none text-sm"
          />
          <button
            type="submit"
            disabled={authLoading}
            className="h-12 px-6 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {authLoading ? "Se procesează…" : mode === "signin" ? "Intră" : "Creează cont"}
          </button>
        </form>
        <button
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-6 text-sm text-muted-foreground underline underline-offset-4"
        >
          {mode === "signin" ? "Nu ai cont? Creează unul" : "Ai deja cont? Autentifică-te"}
        </button>
      </div>
    );
  }

  // Signed in but not admin
  if (!isAdmin) {
    return (
      <div className="container py-24 max-w-xl">
        <p className="eyebrow mb-4">Acces restricționat</p>
        <h1 className="font-serif text-3xl mb-4">Contul tău nu are rol de admin</h1>
        <p className="text-muted-foreground mb-2">
          Autentificat ca <span className="text-foreground">{session.user.email}</span>.
        </p>
        <p className="text-muted-foreground mb-8">
          Pentru a accesa lista de abonați, trebuie să-mi spui acest email ca să-ți atribui rolul de admin în baza de date.
        </p>
        <button
          onClick={signOut}
          className="text-sm underline underline-offset-4"
        >
          Deconectare
        </button>
      </div>
    );
  }

  // Admin view
  return (
    <div className="container py-16 md:py-24">
      <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
        <div>
          <p className="eyebrow mb-3">Administrare</p>
          <h1 className="font-serif text-3xl md:text-4xl">Abonați newsletter</h1>
          <p className="text-muted-foreground mt-2">
            {subs.length} {subs.length === 1 ? "abonat" : "abonați"} ·{" "}
            <span className="text-foreground/70">{session.user.email}</span>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={exportCsv}
            disabled={subs.length === 0}
            className="h-10 px-4 border border-foreground/20 text-sm hover:bg-foreground/5 transition-colors disabled:opacity-40"
          >
            Export CSV
          </button>
          <button
            onClick={loadSubs}
            className="h-10 px-4 border border-foreground/20 text-sm hover:bg-foreground/5 transition-colors"
          >
            Reîncarcă
          </button>
          <button
            onClick={signOut}
            className="h-10 px-4 text-sm text-muted-foreground hover:text-foreground"
          >
            Deconectare
          </button>
        </div>
      </div>

      {loadingSubs ? (
        <p className="text-muted-foreground">Se încarcă…</p>
      ) : subs.length === 0 ? (
        <p className="text-muted-foreground">Niciun abonat încă.</p>
      ) : (
        <div className="border border-foreground/10">
          <table className="w-full text-sm">
            <thead className="bg-foreground/5 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Sursă</th>
                <th className="px-4 py-3 font-medium">Înscris la</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {subs.map((s) => (
                <tr key={s.id} className="border-t border-foreground/10">
                  <td className="px-4 py-3">{s.email}</td>
                  <td className="px-4 py-3 text-muted-foreground">{s.source ?? "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(s.created_at).toLocaleString("ro-RO")}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => removeSub(s.id)}
                      className="text-xs text-muted-foreground hover:text-destructive"
                    >
                      Șterge
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminAbonati;
