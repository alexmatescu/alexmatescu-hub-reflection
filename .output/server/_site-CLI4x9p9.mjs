import { r as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { A as labNav, m as useLocation$1, r as Outlet$1, s as cn, t as Link$1 } from "./_ssr/router-BGlFS8WK.mjs";
import { v as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Label2, c as Root2, d as SubContent2, f as SubTrigger2, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, p as Trigger, r as Item2, s as RadioItem2, t as CheckboxItem2, u as Sub2 } from "./_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as Menu, d as ChevronRight, f as ChevronDown, p as Check, t as X, u as Circle } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_site-CLI4x9p9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSub = Sub2;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden data-[state=open]:bg-accent focus:bg-accent", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto h-4 w-4" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
	checked: checked ?? false,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var projectDropdownItems = [
	{
		to: "/lab/introducere",
		label: "AI Visibility Lab"
	},
	{
		to: "/carte",
		label: "CRANDIT"
	},
	{
		to: "/proiecte/taste-the-corn",
		label: "TASTE THE CORN"
	},
	{
		to: "/proiecte/ovb",
		label: "OVB"
	},
	{
		to: "/proiecte/atractiile-romaniei",
		label: "Atracțiile României"
	},
	{
		to: "/proiecte/afacerea-de-familie",
		label: "Afacerea de familie"
	},
	{
		to: "/proiecte/afacerea-cu-haine",
		label: "Afacerea cu haine"
	},
	{
		to: "/proiecte/blogging",
		label: "Blogging"
	}
];
var labDropdownItems = labNav.map((item) => ({
	to: item.to,
	label: item.label
}));
var nav = [
	{
		to: "/",
		label: "Acasă"
	},
	{
		to: "/despre",
		label: "Despre"
	},
	{
		to: "/calatoria",
		label: "Călătoria"
	},
	{
		to: "/proiecte",
		label: "Proiecte",
		items: projectDropdownItems
	},
	{
		to: "/carte",
		label: "CRANDIT"
	},
	{
		to: "/lab",
		label: "Lab",
		items: labDropdownItems
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var isDropdownActive = (pathname, item) => {
	if (!item.items) return false;
	if (pathname === item.to || pathname.startsWith(item.to + "/")) return true;
	return item.items.some((sub) => pathname === sub.to.split("#")[0]);
};
var isSubActive = (pathname, sub) => {
	const subPath = sub.to.split("#")[0];
	if (pathname === subPath) return true;
	if (sub.items && pathname.startsWith(subPath + "/")) return true;
	return false;
};
var SiteLayout = () => {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [openMobileDropdown, setOpenMobileDropdown] = (0, import_react.useState)(null);
	const [openMobileSub, setOpenMobileSub] = (0, import_react.useState)(null);
	const location = useLocation$1();
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setOpenMobileDropdown(null);
		setOpenMobileSub(null);
		if (!location.hash) window.scrollTo({
			top: 0,
			behavior: "instant"
		});
	}, [location.pathname, location.hash]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-foreground/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-editorial flex items-center justify-between h-16 md:h-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
							to: "/",
							className: "group flex items-center gap-3",
							"aria-label": "Alex Matescu — acasă",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-xl tracking-tight",
								children: "Alex Matescu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden md:inline text-[11px] uppercase tracking-[0.22em] text-muted-foreground border-l border-foreground/15 pl-3",
								children: "Scris · Proiecte"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden md:flex items-center gap-8",
							children: nav.map((item) => item.items ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: `flex items-center gap-1 text-sm transition-colors outline-hidden ${isDropdownActive(location.pathname, item) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
									"aria-label": item.label,
									children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 opacity-70" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
								align: "start",
								sideOffset: 12,
								className: "min-w-[16rem] rounded-md border border-foreground/10 bg-background p-1 shadow-xs",
								children: item.items.map((sub) => {
									const active = isSubActive(location.pathname, sub);
									if (sub.items && sub.items.length > 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubTrigger, {
										className: `px-3 py-2.5 text-sm rounded-sm ${active ? "bg-surface text-foreground" : "text-muted-foreground"}`,
										children: sub.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubContent, {
										className: "min-w-[16rem] rounded-md border border-foreground/10 bg-background p-1 shadow-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
												to: sub.to,
												className: `flex items-center justify-between px-3 py-2.5 text-sm transition-colors rounded-sm cursor-pointer ${location.pathname === sub.to ? "bg-surface text-foreground" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`,
												children: [sub.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 opacity-50" })]
											})
										}), sub.items.map((child) => {
											const childActive = location.pathname === child.to;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
													to: child.to,
													className: `flex items-center justify-between px-3 py-2.5 text-sm transition-colors rounded-sm cursor-pointer ${childActive ? "bg-surface text-foreground" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`,
													children: [child.label, childActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "h-1.5 w-1.5 rounded-full bg-foreground/60",
														"aria-hidden": "true"
													})]
												})
											}, child.to);
										})]
									})] }, sub.to);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
											to: sub.to,
											className: `flex items-center justify-between px-3 py-2.5 text-sm transition-colors rounded-sm cursor-pointer ${active ? "bg-surface text-foreground" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`,
											children: [sub.label, active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "h-1.5 w-1.5 rounded-full bg-foreground/60",
												"aria-hidden": "true"
											})]
										})
									}, sub.to);
								})
							})] }, item.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: item.to,
								className: `text-sm transition-colors ${(item.to === "/" ? location.pathname === "/" : location.pathname === item.to || location.pathname.startsWith(item.to + "/")) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
								children: item.label
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((s) => !s),
							className: "md:hidden inline-flex items-center justify-center h-10 w-10 -mr-2 text-foreground",
							"aria-label": "Meniu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:hidden border-t border-foreground/10 bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "container-editorial py-6 flex flex-col gap-5",
						children: nav.map((item) => item.items ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpenMobileDropdown((s) => s === item.to ? null : item.to),
								className: `flex items-center justify-between font-serif text-2xl ${isDropdownActive(location.pathname, item) ? "text-foreground" : "text-muted-foreground"}`,
								children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 transition-transform ${openMobileDropdown === item.to ? "rotate-180" : ""}` })]
							}), openMobileDropdown === item.to && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 ml-4 flex flex-col gap-3 border-l border-foreground/10 pl-4",
								children: item.items.map((sub) => {
									const active = isSubActive(location.pathname, sub);
									if (sub.items && sub.items.length > 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
											to: sub.to,
											className: `text-sm transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
											children: sub.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setOpenMobileSub((s) => s === sub.to ? null : sub.to),
											"aria-label": sub.label,
											className: "p-1 text-muted-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform ${openMobileSub === sub.to ? "rotate-180" : ""}` })
										})]
									}), openMobileSub === sub.to && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 ml-4 flex flex-col gap-3 border-l border-foreground/10 pl-4",
										children: sub.items.map((child) => {
											const childActive = location.pathname === child.to;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
												to: child.to,
												className: `text-sm transition-colors ${childActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
												children: child.label
											}) }, child.to);
										})
									})] }, sub.to);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
										to: sub.to,
										className: `text-sm transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
										children: sub.label
									}) }, sub.to);
								})
							})]
						}, item.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: item.to,
							className: `font-serif text-2xl ${(item.to === "/" ? location.pathname === "/" : location.pathname === item.to || location.pathname.startsWith(item.to + "/")) ? "text-foreground" : "text-muted-foreground"}`,
							children: item.label
						}, item.to))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet$1, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-24 border-t border-foreground/10 bg-surface/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-editorial py-16 grid gap-12 md:grid-cols-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-serif text-2xl text-balance leading-snug",
								children: [
									"Documentez procesul. Construiesc în timp. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Scriu despre ce învăț."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-muted-foreground max-w-md",
								children: "Un hub personal pentru articole, carte și proiecte despre claritate, disciplină, muncă și sens."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-5",
								children: "Navigare"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-3 text-sm",
								children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
									to: n.to,
									className: "text-muted-foreground hover:text-foreground transition-colors",
									children: n.label
								}) }, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
									to: "/presa",
									className: "text-muted-foreground hover:text-foreground transition-colors",
									children: "Presă"
								}) })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-5",
								children: "Urmărește"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3 text-sm",
								children: [
									{
										label: "LinkedIn",
										href: "https://www.linkedin.com/in/alex-matescu-8b2b8813b/"
									},
									{
										label: "X / Twitter",
										href: "https://x.com/MatescuAlex"
									},
									{
										label: "Facebook",
										href: "https://www.facebook.com/alexmatescu"
									},
									{
										label: "Instagram",
										href: "https://www.instagram.com/alexmatescu.c"
									},
									{
										label: "Blog (RSS)",
										href: "/blog"
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.href,
									target: s.href.startsWith("http") ? "_blank" : void 0,
									rel: s.href.startsWith("http") ? "noopener noreferrer" : void 0,
									className: "text-muted-foreground hover:text-foreground transition-colors",
									children: s.label
								}) }, s.label))
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-foreground/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-editorial py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Alex Matescu. Toate drepturile rezervate."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif italic",
							children: "„Claritate, muncă, sens.”"
						})]
					})
				})]
			})
		]
	});
};
var SplitComponent = SiteLayout;
//#endregion
export { SplitComponent as component };
