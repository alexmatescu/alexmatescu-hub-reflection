import { U as Seo, d as projects, t as Link$1, u as posts } from "./_ssr/router-DomSMBGf.mjs";
import { v as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { h as ArrowRight, m as ArrowUpRight } from "./_libs/lucide-react.mjs";
import { t as NewsletterForm } from "./_ssr/NewsletterForm-bt0_Uu5V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_site-ae--q1m9.js
var import_jsx_runtime = require_jsx_runtime();
var cranditCover = "/images/blog/crandit-cover.webp";
var tasteTheCornLogo = "/images/blog/taste-the-corn-logo.webp";
var ovbLogo = "/images/blog/ovb-logo.webp";
var aiVisibilityHero = "/images/blog/ai-visibility-hero.webp";
var statusTone = {
	activ: "text-emerald-800 bg-emerald-100/60",
	"în lucru": "text-amber-900 bg-amber-100/60",
	închis: "text-stone-700 bg-stone-200/70",
	concept: "text-foreground/70 bg-foreground/5"
};
var Home = () => {
	const latest = posts.slice(0, 3);
	projects.find((p) => p.slug === "crandit");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seo, {
			title: "Alex Matescu — Inginer, antreprenor, fondator și coordonator AI Visibility Lab și autor",
			description: "Site-ul personal al lui Alex Matescu, inginer, antreprenor, fondator și coordonator AI Visibility Lab și autor din Sibiu. Articole și proiecte despre muncă, tehnologie, AI Visibility, disciplină, antreprenoriat și sens.",
			ogType: "website",
			ogSiteName: "Alex Matescu",
			ogLocale: "ro_RO",
			ogDescription: "Hubul personal al lui Alex Matescu: articole, proiecte și cercetare despre muncă, tehnologie, AI Visibility, disciplină, antreprenoriat și sens.",
			twitterDescription: "Articole, proiecte și cercetare despre muncă, tehnologie, AI Visibility, disciplină, antreprenoriat și sens.",
			robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grain opacity-70 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-editorial relative pt-20 md:pt-32 pb-20 md:pb-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-12 gap-10 items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-8 animate-fade-in",
								children: "Alex Matescu — hub personal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-serif text-4xl sm:text-5xl md:text-[64px] leading-[1.05] tracking-tight text-balance animate-fade-up",
								children: [
									"Construiesc idei, proiecte și texte despre",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "not-italic text-primary",
										children: "claritate, disciplină, muncă"
									}),
									" ",
									"și sens."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 md:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up [animation-delay:120ms]",
								children: "Un hub personal pentru scris, reflecții, proiecte antreprenoriale și direcția în care încerc să leg munca, tehnologia și omul."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-3 animate-fade-up [animation-delay:220ms]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
										to: "/blog",
										className: "inline-flex items-center gap-2 h-12 px-6 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors",
										children: ["Citește blogul ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
										to: "/proiecte",
										className: "inline-flex items-center gap-2 h-12 px-6 border border-foreground/20 text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors",
										children: "Vezi proiectele"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
										to: "/despre",
										className: "inline-flex items-center gap-2 h-12 px-6 text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors",
										children: ["Despre mine ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4 md:pl-8 md:border-l border-foreground/10 animate-fade-up [animation-delay:300ms]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif italic text-xl leading-snug text-foreground/80",
							children: "„Nu pretind răspunsuri finale. Documentez procesul de a deveni mai clar, mai disciplinat și mai onest cu realitatea.”"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground",
							children: "— A.M."
						})]
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-foreground/10 bg-surface/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-editorial py-16 md:py-20 grid md:grid-cols-12 gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Pe scurt"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-2xl md:text-3xl leading-relaxed text-balance",
						children: "Sunt Alex Matescu: inginer prin formație, scriitor prin practică, antreprenor prin experiment. Construiesc proiecte personale precum cartea CRANDIT, Taste the Corn, AI Visibility Lab, Atracțiile României, afacerea de familie, afacerea cu haine, și blogging. Scriu despre ce văd la întâlnirea dintre tehnologie, muncă și om."
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-editorial py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4",
					children: "Ultimele articole"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl md:text-5xl tracking-tight",
					children: "De pe blog"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
					to: "/blog",
					className: "hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
					children: ["Toate articolele ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10",
				children: latest.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
					to: `/blog/${p.slug}`,
					className: "group bg-background p-8 flex flex-col hover:bg-surface transition-colors duration-500",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs text-muted-foreground mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "uppercase tracking-[0.22em]",
								children: p.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.readingTime })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-2xl leading-snug text-balance group-hover:text-primary transition-colors",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground text-[15px] leading-relaxed flex-1",
							children: p.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-8 inline-flex items-center gap-2 text-sm",
							children: [
								"Citește",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
							]
						})
					]
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[#151515] text-[#f5f0e8]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-editorial py-20 md:py-32 grid md:grid-cols-12 gap-10 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.22em] text-[#c9a86c]/70 mb-6",
							children: "Proiect principal · Carte în lucru"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-trajan text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance text-[#c9a86c]",
							children: ["CRANDIT", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[#c9a86c]/80 text-2xl md:text-3xl mt-3 italic font-serif",
								children: "Mitul succesului peste noapte"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-[#f5f0e8]/80 text-lg leading-relaxed max-w-xl",
							children: "O carte despre ce se află, de fapt, sub poveștile de succes pe care le admirăm. Despre disciplină, identitate, timp și iluzia ascensiunii rapide."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
								to: "/carte",
								className: "inline-flex items-center gap-2 h-12 px-6 bg-[#c9a86c] text-[#151515] text-sm tracking-wide hover:bg-[#c9a86c]/90 transition-colors",
								children: ["Despre carte ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: "/proiecte/crandit",
								className: "inline-flex items-center gap-2 h-12 px-6 border border-[#c9a86c]/40 text-[#c9a86c] text-sm tracking-wide hover:bg-[#c9a86c]/10 transition-colors",
								children: "Pagina proiectului"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: "/carte",
						className: "block group",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: cranditCover,
							alt: "Coperta cărții CRANDIT — Mitul succesului peste noapte de Alexandru Matescu",
							className: "w-full aspect-[3/4] object-cover border border-[#c9a86c]/15 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]",
							loading: "lazy"
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-editorial py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						children: "Proiecte"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl md:text-5xl tracking-tight text-balance",
						children: "Proiecte personale: ce construiesc, ce testez, ce las să se aşeze."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground text-[15px] leading-relaxed",
						children: "Fiecare proiect este un răspuns la o întrebare reală. Unele sunt active, altele au fost duse până la capăt și închise cu lecții clare."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10",
				children: [
					projects.find((p) => p.slug === "geo-ai-visibility"),
					projects.find((p) => p.slug === "taste-the-corn"),
					projects.find((p) => p.slug === "ovb"),
					projects.find((p) => p.slug === "atractiile-romaniei"),
					projects.find((p) => p.slug === "afacerea-de-familie"),
					projects.find((p) => p.slug === "afacerea-cu-haine"),
					projects.find((p) => p.slug === "blogging")
				].filter(Boolean).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
					to: p.slug === "geo-ai-visibility" ? "/lab/introducere" : `/proiecte/${p.slug}`,
					className: "group bg-background p-8 md:p-10 flex flex-col gap-5 hover:bg-surface transition-colors duration-500",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground tabular-nums",
								children: ["0", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 ${statusTone[p.status]}`,
								children: p.status
							})]
						}),
						p.slug === "geo-ai-visibility" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/9] w-full overflow-hidden rounded-sm border border-foreground/10 bg-[#0b0f0e]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: aiVisibilityHero,
								alt: "AI Visibility Lab — vizibilitate în epoca modelelor generative",
								className: "w-full h-full object-cover",
								loading: "lazy"
							})
						}),
						(p.slug === "taste-the-corn" || p.slug === "ovb") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-24 h-24 rounded-2xl overflow-hidden border border-foreground/10 shadow-xs bg-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.slug === "ovb" ? ovbLogo : tasteTheCornLogo,
								alt: `Logo ${p.title}${p.slug === "taste-the-corn" ? " — N-ai cum să-i spui nu" : ""}`,
								className: "w-full h-full object-contain",
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-3xl md:text-4xl leading-tight text-balance group-hover:text-primary transition-colors",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-serif italic text-muted-foreground",
							children: p.tagline
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-[15px] leading-relaxed",
							children: p.description
						}),
						p.metadata && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium text-foreground/70",
								children: ["Fapte:", " "]
							}), [
								p.metadata.perioada,
								p.metadata.locatie,
								p.metadata.categorie
							].filter(Boolean).join(" · ")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-foreground/80 leading-relaxed border-l-2 border-primary/30 pl-4",
							children: [
								p.slug === "geo-ai-visibility" && "Răspuns: cum optimizezi prezența unui brand când răspunsul nu mai este o listă de linkuri.",
								p.slug === "taste-the-corn" && "Lecție: o idee bună are nevoie de un sistem clar în spate; marketingul și oamenii fac diferența.",
								p.slug === "ovb" && "Lecție: încrederea se câștigă în ani și conversații, nu în pitch-uri; iar mediul potrivit accelerează dezvoltarea.",
								p.slug === "atractiile-romaniei" && "Lecție: ritmul constant bate volumul. Scalabilitatea cere un sistem, nu doar efort individual.",
								p.slug === "afacerea-de-familie" && "Lecție: cel mai bun proiect pentru cineva drag este cel mai sustenabil, nu cel mai ambițios.",
								p.slug === "afacerea-cu-haine" && "Lecție: supraviețuirea e prima formă de succes; riscul de partener și creditul subestimat te învață mai repede decât orice plan.",
								p.slug === "blogging" && "Lecție: scrisul nu începe cu succesul, ci cu claritatea; comunitatea apare din continuitate, nu dintr-un singur text."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-auto inline-flex items-center gap-2 text-sm",
							children: [
								"Explorează proiectul",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
							]
						})
					]
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-editorial pb-20 md:pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {
				title: "Rămâi aproape de proces.",
				description: "Actualizări despre articole noi, evoluția cărții CRANDIT și proiecte viitoare. Trimit rar și doar când am ceva real de spus."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-foreground/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-editorial py-24 md:py-32 text-center max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow justify-center mb-8",
						children: "Punct"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-3xl md:text-5xl leading-[1.15] text-balance",
						children: "Nu construiesc o platformă. Construiesc o practică — în timp, cu răbdare, fără grabă."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
						to: "/contact",
						className: "mt-12 inline-flex items-center gap-2 h-12 px-6 border border-foreground/20 text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors",
						children: ["Hai să vorbim ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
					})
				]
			})
		})
	] });
};
var SplitComponent = Home;
//#endregion
export { SplitComponent as component };
