import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { W as useSeo, p as toast } from "./router-DvOkuLC0.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-C5_7DpV5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/crandit-BBoEcdgB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AdminCrandit = () => {
	useSeo({
		title: "Admin — CRANDIT | Alex Matescu",
		description: "Panou de administrare.",
		noIndex: true
	});
	const [session, setSession] = (0, import_react.useState)(null);
	const [checking, setChecking] = (0, import_react.useState)(true);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [authLoading, setAuthLoading] = (0, import_react.useState)(false);
	const [entries, setEntries] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			setChecking(false);
		});
		const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
		return () => sub.subscription.unsubscribe();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!session) {
			setIsAdmin(false);
			setEntries([]);
			return;
		}
		(async () => {
			const { data } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle();
			const admin = !!data;
			setIsAdmin(admin);
			if (admin) load();
		})();
	}, [session]);
	const load = async () => {
		setLoading(true);
		const { data, error } = await supabase.from("crandit_waitlist").select("id, email, source, created_at").order("created_at", { ascending: false });
		setLoading(false);
		if (error) {
			toast({
				title: "Eroare",
				description: error.message,
				variant: "destructive"
			});
			return;
		}
		setEntries(data ?? []);
	};
	const handleAuth = async (e) => {
		e.preventDefault();
		setAuthLoading(true);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		setAuthLoading(false);
		if (error) toast({
			title: "Autentificare eșuată",
			description: error.message,
			variant: "destructive"
		});
	};
	const signOut = async () => {
		await supabase.auth.signOut();
	};
	const remove = async (id) => {
		if (!confirm("Sigur ștergi această intrare?")) return;
		const { error } = await supabase.from("crandit_waitlist").delete().eq("id", id);
		if (error) {
			toast({
				title: "Eroare",
				description: error.message,
				variant: "destructive"
			});
			return;
		}
		setEntries((s) => s.filter((x) => x.id !== id));
	};
	const exportCsv = () => {
		const header = "email,source,created_at\n";
		const rows = entries.map((s) => `${s.email},${s.source ?? ""},${s.created_at}`).join("\n");
		const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `crandit-waitlist-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
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
				children: "Administrare CRANDIT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl md:text-4xl mb-8",
				children: "Autentificare"
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
						value: password,
						onChange: (e) => setPassword(e.target.value),
						placeholder: "parolă",
						className: "h-12 px-4 bg-background border border-foreground/15 focus:border-foreground/40 outline-hidden text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: authLoading,
						className: "h-12 px-6 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50",
						children: authLoading ? "Se procesează…" : "Intră"
					})
				]
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
				children: "Cont fără rol de admin"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-muted-foreground mb-8",
				children: [
					"Autentificat ca",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: session.user.email
					}),
					"."
				]
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
					children: "Listă de așteptare CRANDIT"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground mt-2",
					children: [
						entries.length,
						" ",
						entries.length === 1 ? "înscris" : "înscriși",
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
						disabled: entries.length === 0,
						className: "h-10 px-4 border border-foreground/20 text-sm hover:bg-foreground/5 transition-colors disabled:opacity-40",
						children: "Export CSV"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: load,
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
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Se încarcă…"
		}) : entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Nicio înscriere încă."
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: entries.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
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
								onClick: () => remove(s.id),
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
var SplitComponent = AdminCrandit;
//#endregion
export { SplitComponent as component };
