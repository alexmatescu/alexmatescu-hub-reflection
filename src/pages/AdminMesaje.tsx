import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { Session } from "@supabase/supabase-js";

type Message = {
  id: string;
  name: string;
  email: string;
  reason: string | null;
  message: string;
  created_at: string;
};

const AdminMesaje = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setIsAdmin(false);
      setMessages([]);
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
      if (admin) loadMessages();
    })();
  }, [session]);

  const loadMessages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_messages")
      .select("id, name, email, reason, message, created_at")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast({ title: "Eroare", description: error.message, variant: "destructive" });
      return;
    }
    setMessages((data as Message[]) ?? []);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setAuthLoading(false);
    if (error) toast({ title: "Autentificare eșuată", description: error.message, variant: "destructive" });
  };

  const signOut = async () => { await supabase.auth.signOut(); };

  const remove = async (id: string) => {
    if (!confirm("Sigur ștergi acest mesaj?")) return;
    const { error } = await supabase.from("contact_messages").delete().eq("id", id);
    if (error) {
      toast({ title: "Eroare", description: error.message, variant: "destructive" });
      return;
    }
    setMessages((m) => m.filter((x) => x.id !== id));
  };

  if (checking) return <div className="container py-24 text-muted-foreground">Se încarcă…</div>;

  if (!session) {
    return (
      <div className="container py-24 max-w-md">
        <p className="eyebrow mb-4">Administrare</p>
        <h1 className="font-serif text-3xl md:text-4xl mb-8">Autentificare</h1>
        <form onSubmit={handleAuth} className="flex flex-col gap-3">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"
            className="h-12 px-4 bg-background border border-foreground/15 outline-none text-sm" />
          <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="parolă"
            className="h-12 px-4 bg-background border border-foreground/15 outline-none text-sm" />
          <button type="submit" disabled={authLoading}
            className="h-12 px-6 bg-primary text-primary-foreground text-sm hover:bg-primary/90 disabled:opacity-50">
            {authLoading ? "Se procesează…" : "Intră"}
          </button>
        </form>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="container py-24 max-w-xl">
        <p className="eyebrow mb-4">Acces restricționat</p>
        <h1 className="font-serif text-3xl mb-4">Cont fără rol de admin</h1>
        <p className="text-muted-foreground mb-8">Autentificat ca {session.user.email}.</p>
        <button onClick={signOut} className="text-sm underline underline-offset-4">Deconectare</button>
      </div>
    );
  }

  return (
    <div className="container py-16 md:py-24">
      <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
        <div>
          <p className="eyebrow mb-3">Administrare</p>
          <h1 className="font-serif text-3xl md:text-4xl">Mesaje contact</h1>
          <p className="text-muted-foreground mt-2">
            {messages.length} {messages.length === 1 ? "mesaj" : "mesaje"} · <span className="text-foreground/70">{session.user.email}</span>
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={loadMessages} className="h-10 px-4 border border-foreground/20 text-sm hover:bg-foreground/5">Reîncarcă</button>
          <button onClick={signOut} className="h-10 px-4 text-sm text-muted-foreground hover:text-foreground">Deconectare</button>
        </div>
      </div>

      {loading ? (
        <p className="text-muted-foreground">Se încarcă…</p>
      ) : messages.length === 0 ? (
        <p className="text-muted-foreground">Niciun mesaj încă.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((m) => (
            <li key={m.id} className="border border-foreground/10 p-6 bg-surface/40">
              <div className="flex justify-between items-start gap-4 mb-3 flex-wrap">
                <div>
                  <p className="font-serif text-lg">{m.name} <span className="text-muted-foreground text-sm">· <a href={`mailto:${m.email}`} className="underline underline-offset-4">{m.email}</a></span></p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {m.reason ? `${m.reason} · ` : ""}{new Date(m.created_at).toLocaleString("ro-RO")}
                  </p>
                </div>
                <button onClick={() => remove(m.id)} className="text-xs text-muted-foreground hover:text-destructive">Șterge</button>
              </div>
              <p className="text-sm whitespace-pre-wrap leading-relaxed">{m.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminMesaje;
