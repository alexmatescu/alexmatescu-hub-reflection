import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
  parentId: string | undefined;
}

/**
 * Extrage intrările din cuprinsul static al articolului
 * (`<nav class="article-toc">`, skill publica-articol-lab §6.5). Cuprinsul
 * static rămâne singura sursă: varianta laterală nu are o listă proprie, deci
 * nu poate diverge de el. Parsarea se face pe string, ca lista să fie randată
 * deja server-side, fără salt de layout la hidratare.
 */
export const parseArticleToc = (html: string): TocItem[] => {
  const nav = html.match(/<nav class="article-toc"[\s\S]*?<\/nav>/);
  if (!nav) return [];

  const items: TocItem[] = [];
  let depth = 0;
  let currentH2: string | undefined;
  const tokens = nav[0].matchAll(
    /<ol>|<\/ol>|<a href="#([^"]+)">([\s\S]*?)<\/a>/g,
  );
  for (const token of tokens) {
    if (token[0] === "<ol>") depth += 1;
    else if (token[0] === "</ol>") depth -= 1;
    else {
      const [, id = "", label = ""] = token;
      const level = depth > 1 ? 3 : 2;
      const text = label.replace(/<[^>]+>/g, "");
      items.push({
        id,
        text,
        level,
        parentId: level === 3 ? currentH2 : undefined,
      });
      if (level === 2) currentH2 = id;
    }
  }
  return items;
};

// Distanța de la marginea de sus la care o secțiune devine „curentă”:
// header-ul sticky plus o marjă, în acord cu `scroll-margin-top: 6rem`.
const ACTIVE_OFFSET = 128;

/**
 * Cuprinsul lateral, fix la scroll, afișat doar pe ecrane late (vezi
 * `.has-toc-sidebar` în styles.css). Secțiunea în care se află cititorul e
 * marcată cu `aria-current="location"` și arătată de o săgeată care se mută
 * la intrarea activă, la click sau la scroll.
 */
const ArticleTocSidebar = ({ items }: { items: TocItem[] }) => {
  const [activeId, setActiveId] = useState<string | undefined>(undefined);
  const listRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // Titlurile se caută la fiecare actualizare, nu o singură dată:
      // ContentLightbox poate reface HTML-ul articolului după montare, iar
      // referințele vechi ar rămâne detașate din pagină.
      const headings = items
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => el !== null);
      if (headings.length === 0) return;
      let current: string | undefined;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= ACTIVE_OFFSET)
          current = heading.id;
        else break;
      }
      // La finalul paginii, ultima secțiune poate fi prea scurtă ca să urce
      // până la prag; o marcăm explicit ca să nu rămână activă cea dinainte.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      setActiveId(atBottom ? headings.at(-1)?.id : current);
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
  }, [items]);

  // Ține intrarea activă vizibilă în cuprinsul lateral, fără să miște pagina.
  useEffect(() => {
    const list = listRef.current;
    const link = activeId
      ? list?.querySelector<HTMLElement>(`a[href="#${activeId}"]`)
      : null;
    if (!list || !link) return;
    const top = link.offsetTop - list.offsetTop;
    if (
      top < list.scrollTop ||
      top + link.offsetHeight > list.scrollTop + list.clientHeight
    ) {
      list.scrollTop = top - list.clientHeight / 3;
    }
  }, [activeId]);

  // Săgeata se aliniază cu primul rând al intrării active (titlurile lungi
  // se rup pe mai multe rânduri) și dispare înaintea primei secțiuni.
  useLayoutEffect(() => {
    const arrow = arrowRef.current;
    if (!arrow) return;
    const place = () => {
      const link = activeId
        ? listRef.current?.querySelector<HTMLElement>(`a[href="#${activeId}"]`)
        : null;
      if (!link) {
        arrow.style.opacity = "0";
        return;
      }
      const style = getComputedStyle(link);
      const lineHeight = parseFloat(style.lineHeight) || 20;
      const top =
        link.offsetTop +
        parseFloat(style.paddingTop) +
        (lineHeight - arrow.getBoundingClientRect().height) / 2;
      arrow.style.transform = `translateY(${top}px)`;
      arrow.style.opacity = "1";
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [activeId]);

  const activeParent = items.find((item) => item.id === activeId)?.parentId;

  return (
    <aside className="article-toc-sidebar" aria-labelledby="cuprins-lateral">
      <div className="article-toc-sidebar-sticky">
        <p id="cuprins-lateral" className="article-toc-sidebar-title">
          Cuprins
        </p>
        <div ref={listRef} className="article-toc-sidebar-list">
          <div className="article-toc-sidebar-track">
            <ArrowRight
              ref={arrowRef}
              className="article-toc-sidebar-arrow"
              aria-hidden="true"
              style={{ opacity: 0 }}
            />
            <ol>
              {items.map((item) => {
                const isActive = item.id === activeId;
                const isActiveParent = item.id === activeParent;
                return (
                  <li key={item.id} data-level={item.level}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "location" : undefined}
                      data-active-parent={isActiveParent || undefined}
                      onClick={() => setActiveId(item.id)}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ArticleTocSidebar;
