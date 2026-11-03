import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, List, X } from "lucide-react";
import { Drawer } from "vaul";

import { type TocItem, useActiveTocId } from "@/components/ArticleTocSidebar";

/**
 * Cuprinsul de pe ecranele fără cuprins lateral (vezi `.article-toc-mobile`
 * în styles.css): un buton mic, fix în dreapta jos, care arată secțiunea
 * curentă („Cuprins · 3/9”) și deschide un panou din partea de jos. Panoul
 * are înălțimea listei, cel mult 70% din ecran, se deschide la secțiunea
 * curentă, iar o atingere pe o intrare îl închide și duce la secțiune.
 *
 * Lista vine din cuprinsul static (`parseArticleToc`), ca la cuprinsul
 * lateral, deci nu poate diverge de el.
 */
const ArticleTocMobile = ({ items }: { items: TocItem[] }) => {
  const [activeId, setActiveId] = useActiveTocId(items);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pendingId = useRef<string | undefined>(undefined);

  // Butonul apare după ce cititorul a trecut de cuprinsul din text și
  // dispare când ajunge la finalul articolului, ca să nu acopere subsolul
  // paginii și formularele de după articol.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const wrapper = buttonRef.current?.closest(".has-toc-sidebar");
      const staticToc = wrapper?.querySelector(".article-toc");
      if (!wrapper || !staticToc) return;
      const pastToc = staticToc.getBoundingClientRect().bottom < 0;
      const beforeEnd =
        wrapper.getBoundingClientRect().bottom > window.innerHeight;
      setVisible(pastToc && beforeEnd);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // La deschidere, lista se derulează până la secțiunea curentă.
  const listRef = useCallback(
    (list: HTMLOListElement | null) => {
      if (!list || !activeId) return;
      const link = list.querySelector<HTMLElement>(`a[href="#${activeId}"]`);
      if (link) list.scrollTop = link.offsetTop - list.clientHeight / 3;
    },
    // Doar la montarea listei (deschiderea panoului), nu la fiecare scroll.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // Pagina se derulează abia după ce panoul s-a închis de tot (Radix mută
  // atunci focusul înapoi): cât e deschis, scroll-ul paginii e blocat.
  const onCloseAutoFocus = (event: Event) => {
    const id = pendingId.current;
    if (!id) return;
    pendingId.current = undefined;
    const target = document.getElementById(id);
    if (!target) return;
    // Focusul nu se întoarce pe buton, ca browserul să nu deruleze înapoi la el.
    event.preventDefault();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  const activeIndex = items.findIndex((item) => item.id === activeId);
  const activeItem = activeIndex >= 0 ? items[activeIndex] : undefined;
  const activeParent = activeItem?.parentId;

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <button
          ref={buttonRef}
          type="button"
          className="article-toc-mobile"
          data-visible={visible || open || undefined}
          aria-hidden={!visible && !open ? true : undefined}
          tabIndex={visible || open ? undefined : -1}
        >
          <List className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Cuprins</span>
          {activeItem ? (
            <span className="article-toc-mobile-count">
              <span aria-hidden="true">·</span> {activeIndex + 1}/{items.length}
            </span>
          ) : null}
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="article-toc-mobile-overlay" />
        <Drawer.Content
          className="article-toc-mobile-panel"
          onCloseAutoFocus={onCloseAutoFocus}
        >
          <div className="article-toc-mobile-handle" aria-hidden="true" />
          <div className="article-toc-mobile-header">
            <div className="min-w-0">
              <Drawer.Title className="article-toc-mobile-title">
                Cuprins
              </Drawer.Title>
              <Drawer.Description className="article-toc-mobile-current">
                {activeItem
                  ? `Ești la: ${activeItem.text}`
                  : "Începutul articolului"}
              </Drawer.Description>
            </div>
            <Drawer.Close className="article-toc-mobile-close">
              <X className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Închide cuprinsul</span>
            </Drawer.Close>
          </div>
          <ol ref={listRef} className="article-toc-mobile-list">
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <li key={item.id} data-level={item.level}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    data-active-parent={item.id === activeParent || undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      pendingId.current = item.id;
                      setActiveId(item.id);
                      setOpen(false);
                    }}
                  >
                    {isActive ? (
                      <ArrowRight
                        className="article-toc-mobile-arrow"
                        aria-hidden="true"
                      />
                    ) : null}
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ol>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default ArticleTocMobile;
