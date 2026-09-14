import { U as Seo, d as projects, h as useParams$1, t as Link$1, u as posts } from "./_ssr/router-DomSMBGf.mjs";
import { v as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { g as ArrowLeft, m as ArrowUpRight } from "./_libs/lucide-react.mjs";
import { t as NewsletterForm } from "./_ssr/NewsletterForm-bt0_Uu5V.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./_ssr/accordion-B9dEbtUa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CmFsdx3G.js
var import_jsx_runtime = require_jsx_runtime();
var statusTone = {
	activ: "text-emerald-800 bg-emerald-100/60",
	"în lucru": "text-amber-900 bg-amber-100/60",
	închis: "text-stone-700 bg-stone-200/70",
	finalizat: "text-stone-700 bg-stone-200/70",
	concept: "text-foreground/70 bg-foreground/5"
};
var Section = ({ eyebrow, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
	className: "grid md:grid-cols-12 gap-10 py-14 border-t border-foreground/10",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "md:col-span-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: eyebrow
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "md:col-span-8 prose-editorial",
		children
	})]
});
var ProjectDetail = () => {
	const { slug } = useParams$1();
	const project = projects.find((p) => p.slug === slug);
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-editorial py-32 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-4xl",
			children: "Proiectul nu există"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
			to: "/proiecte",
			className: "mt-8 inline-flex items-center gap-2 link-underline",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Înapoi la proiecte"]
		})]
	});
	const relatedPosts = posts.filter((p) => project.related.includes(p.slug));
	const hasRichContent = project.sections && project.sections.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seo, {
			title: `${project.title} — Alex Matescu`,
			description: project.description
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "container-editorial pt-20 md:pt-28 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
					to: "/proiecte",
					className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Toate proiectele"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-3 mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 ${statusTone[project.status]}`,
						children: project.status
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end gap-10 md:gap-16",
					children: [project.logo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.logo,
							alt: `Logo ${project.title}`,
							className: "w-32 h-32 md:w-40 md:h-40 object-contain rounded-2xl"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight",
							children: project.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-serif italic text-xl md:text-2xl text-muted-foreground",
							children: project.tagline
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-lg text-foreground/80 max-w-3xl leading-relaxed",
					children: project.description
				}),
				project.metadata && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-foreground/10 pt-10",
					children: [
						project.metadata.perioada && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2",
							children: "Perioadă"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/90",
							children: project.metadata.perioada
						})] }),
						project.metadata.categorie && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2",
							children: "Categorie"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/90",
							children: project.metadata.categorie
						})] }),
						project.metadata.locatie && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2",
							children: "Locație"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/90",
							children: project.metadata.locatie
						})] })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-editorial",
			children: hasRichContent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pb-8",
				children: project.sections.map((section, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: `py-16 ${i > 0 ? "border-t border-foreground/10" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl md:text-3xl tracking-tight mb-8",
							children: section.eyebrow
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl prose-editorial",
						children: [section.content && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "whitespace-pre-line leading-relaxed",
							children: section.content
						}), section.items && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4 list-none p-0",
							children: section.items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-serif text-muted-foreground tabular-nums",
									children: ["0", idx + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, idx))
						})]
					})]
				}, i))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				project.why && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					eyebrow: "De ce a pornit",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.why })
				}),
				project.problem && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					eyebrow: "Problema explorată",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.problem })
				}),
				project.story && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					eyebrow: "Ce s-a întâmplat",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.story })
				}),
				project.lessons && project.lessons.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					eyebrow: "Lecții",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4 list-none p-0",
						children: project.lessons.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-serif text-muted-foreground tabular-nums",
								children: ["0", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l })]
						}, i))
					})
				}),
				project.currentStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					eyebrow: "Status actual",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.currentStatus })
				})
			] })
		}),
		project.faq && project.faq.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-foreground/10 bg-surface/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-editorial py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-12 gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Întrebări frecvente"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: [
								"Răspunsuri la cele mai comune curiozități despre",
								" ",
								project.title,
								"."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "w-full",
							children: project.faq.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: `item-${idx}`,
								className: "border-foreground/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-left font-serif text-lg hover:no-underline",
									children: item.question
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
									className: "text-foreground/80 leading-relaxed",
									children: item.answer
								})]
							}, idx))
						})
					})]
				})
			})
		}),
		relatedPosts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-foreground/10 bg-surface/60 mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-editorial py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-8",
					children: "Articole legate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10",
					children: relatedPosts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
						to: `/blog/${p.slug}`,
						className: "group bg-background p-8 hover:bg-surface transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4",
								children: p.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl leading-snug group-hover:text-primary transition-colors",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: p.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-5 inline-flex items-center gap-2 text-sm",
								children: ["Citește ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						]
					}, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-editorial py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {
				title: "Urmărește evoluția proiectelor.",
				description: "Actualizări concrete, fără hype. Lansări, decizii, ce a mers și ce nu."
			})
		})
	] });
};
var SplitComponent = ProjectDetail;
//#endregion
export { SplitComponent as component };
