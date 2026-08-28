import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { V as useSeo, p as toast } from "./router-DMjTucp9.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-C5_7DpV5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/abonati-t5IukkKU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AdminAbonati = () => {
	useSeo({
		title: "Admin — Abonați | Alex Matescu",
		description: "Panou de administrare.",
		noIndex: true
	});
	const [session, setSession] = (0, import_react.useState)(null);
	const [checking, setChecking] = (0, import_react.useState)(true);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [authLoading, setAuthLoading] = (0, import_react.useState)(false);
	const [subs, setSubs] = (0, import_react.useState)([]);
	const [loadingSubs, setLoadingSubs] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			setChecking(false);
		});
		const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
			setSession(s);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!session) {
			setIsAdmin(false);
			setSubs([]);
			return;
		}
		(async () => {
			const { data, error } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle();
			const admin = !error && !!data;
			setIsAdmin(admin);
			if (admin) loadSubs();
		})();
	}, [session]);
	const loadSubs = async () => {
		setLoadingSubs(true);
		const { data, error } = await supabase.from("newsletter_subscribers").select("id, email, source, created_at").order("created_at", { ascending: false });
		setLoadingSubs(false);
		if (error) {
			toast({
				title: "Eroare",
				description: error.message,
				variant: "destructive"
			});
			return;
		}
		setSubs(data ?? []);
	};
	const handleAuth = async (e) => {
		e.preventDefault();
		setAuthLoading(true);
		const { error } = await (mode === "signin" ? supabase.auth.signInWithPassword({
			email,
			password
		}) : supabase.auth.signUp({
			email,
			password,
			options: { emailRedirectTo: `${window.location.origin}/admin/abonati` }
		}));
		setAuthLoading(false);
		if (error) {
			toast({
				title: "Autentificare eșuată",
				description: error.message,
				variant: "destructive"
			});
			return;
		}
		if (mode === "signup") {
			toast({
				title: "Cont creat",
				description: "Te poți autentifica. Cere-mi să-ți atribui rolul de admin."
			});
			setMode("signin");
		}
	};
	const signOut = async () => {
		await supabase.auth.signOut();
	};
	const removeSub = async (id) => {
		if (!confirm("Sigur ștergi acest abonat?")) return;
		const { error } = await supabase.from("newsletter_subscribers").delete().eq("id", id);
		if (error) {
			toast({
				title: "Eroare",
				description: error.message,
				variant: "destructive"
			});
			return;
		}
		setSubs((s) => s.filter((x) => x.id !== id));
	};
	const exportCsv = () => {
		const header = "email,source,created_at\n";
		const rows = subs.map((s) => `${s.email},${s.source ?? ""},${s.created_at}`).join("\n");
		const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `abonati-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
		a.click();
		URL.revokeObjectURL(url);
	};
	if (checking) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container py-24 text-muted-foreground",
		children: "Se încarcă…"
	});
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container py-24 max-w-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4",
				children: "Administrare"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl md:text-4xl mb-8",
				children: mode === "signin" ? "Autentificare" : "Cont nou"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleAuth,
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "email",
						className: "h-12 px-4 bg-background border border-foreground/15 focus:border-foreground/40 outline-hidden text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						required: true,
						minLength: 8,
						value: password,
						onChange: (e) => setPassword(e.target.value),
						placeholder: "parolă (min. 8 caractere)",
						className: "h-12 px-4 bg-background border border-foreground/15 focus:border-foreground/40 outline-hidden text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: authLoading,
						className: "h-12 px-6 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50",
						children: authLoading ? "Se procesează…" : mode === "signin" ? "Intră" : "Creează cont"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
				className: "mt-6 text-sm text-muted-foreground underline underline-offset-4",
				children: mode === "signin" ? "Nu ai cont? Creează unul" : "Ai deja cont? Autentifică-te"
			})
		]
	});
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container py-24 max-w-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4",
				children: "Acces restricționat"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl mb-4",
				children: "Contul tău nu are rol de admin"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-muted-foreground mb-2",
				children: [
					"Autentificat ca ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: session.user.email
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mb-8",
				children: "Pentru a accesa lista de abonați, trebuie să-mi spui acest email ca să-ți atribui rolul de admin în baza de date."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: signOut,
				className: "text-sm underline underline-offset-4",
				children: "Deconectare"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-4 mb-10 flex-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3",
					children: "Administrare"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-3xl md:text-4xl",
					children: "Abonați newsletter"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground mt-2",
					children: [
						subs.length,
						" ",
						subs.length === 1 ? "abonat" : "abonați",
						" ·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground/70",
							children: session.user.email
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: exportCsv,
						disabled: subs.length === 0,
						className: "h-10 px-4 border border-foreground/20 text-sm hover:bg-foreground/5 transition-colors disabled:opacity-40",
						children: "Export CSV"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: loadSubs,
						className: "h-10 px-4 border border-foreground/20 text-sm hover:bg-foreground/5 transition-colors",
						children: "Reîncarcă"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: signOut,
						className: "h-10 px-4 text-sm text-muted-foreground hover:text-foreground",
						children: "Deconectare"
					})
				]
			})]
		}), loadingSubs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Se încarcă…"
		}) : subs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Niciun abonat încă."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border border-foreground/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-foreground/5 text-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Sursă"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Înscris la"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-4 py-3" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: subs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-foreground/10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3",
							children: s.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-muted-foreground",
							children: s.source ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-muted-foreground",
							children: new Date(s.created_at).toLocaleString("ro-RO")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => removeSub(s.id),
								className: "text-xs text-muted-foreground hover:text-destructive",
								children: "Șterge"
							})
						})
					]
				}, s.id)) })]
			})
		})]
	});
};
var SplitComponent = AdminAbonati;
//#endregion
export { SplitComponent as component };
