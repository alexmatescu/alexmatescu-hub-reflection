import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { W as useSeo, p as toast } from "./router-DvOkuLC0.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-C5_7DpV5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mesaje-Dupbls9u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AdminMesaje = () => {
	useSeo({
		title: "Admin — Mesaje | Alex Matescu",
		description: "Panou de administrare.",
		noIndex: true
	});
	const [session, setSession] = (0, import_react.useState)(null);
	const [checking, setChecking] = (0, import_react.useState)(true);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [authLoading, setAuthLoading] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([]);
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
			setMessages([]);
			return;
		}
		(async () => {
			const { data, error } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle();
			const admin = !error && !!data;
			setIsAdmin(admin);
			if (admin) loadMessages();
		})();
	}, [session]);
	const loadMessages = async () => {
		setLoading(true);
		const { data, error } = await supabase.from("contact_messages").select("id, name, email, reason, message, created_at").order("created_at", { ascending: false });
		setLoading(false);
		if (error) {
			toast({
				title: "Eroare",
				description: error.message,
				variant: "destructive"
			});
			return;
		}
		setMessages(data ?? []);
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
		if (!confirm("Sigur ștergi acest mesaj?")) return;
		const { error } = await supabase.from("contact_messages").delete().eq("id", id);
		if (error) {
			toast({
				title: "Eroare",
				description: error.message,
				variant: "destructive"
			});
			return;
		}
		setMessages((m) => m.filter((x) => x.id !== id));
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
						className: "h-12 px-4 bg-background border border-foreground/15 outline-hidden text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						required: true,
						minLength: 8,
						value: password,
						onChange: (e) => setPassword(e.target.value),
						placeholder: "parolă",
						className: "h-12 px-4 bg-background border border-foreground/15 outline-hidden text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: authLoading,
						className: "h-12 px-6 bg-primary text-primary-foreground text-sm hover:bg-primary/90 disabled:opacity-50",
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
					"Autentificat ca ",
					session.user.email,
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
					children: "Mesaje contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground mt-2",
					children: [
						messages.length,
						" ",
						messages.length === 1 ? "mesaj" : "mesaje",
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: loadMessages,
					className: "h-10 px-4 border border-foreground/20 text-sm hover:bg-foreground/5",
					children: "Reîncarcă"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: signOut,
					className: "h-10 px-4 text-sm text-muted-foreground hover:text-foreground",
					children: "Deconectare"
				})]
			})]
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Se încarcă…"
		}) : messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Niciun mesaj încă."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-4",
			children: messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-foreground/10 p-6 bg-surface/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-start gap-4 mb-3 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-serif text-lg",
						children: [
							m.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground text-sm",
								children: [
									"·",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${m.email}`,
										className: "underline underline-offset-4",
										children: m.email
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: [m.reason ? `${m.reason} · ` : "", new Date(m.created_at).toLocaleString("ro-RO")]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => remove(m.id),
						className: "text-xs text-muted-foreground hover:text-destructive",
						children: "Șterge"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm whitespace-pre-wrap leading-relaxed",
					children: m.message
				})]
			}, m.id))
		})]
	});
};
var SplitComponent = AdminMesaje;
//#endregion
export { SplitComponent as component };
