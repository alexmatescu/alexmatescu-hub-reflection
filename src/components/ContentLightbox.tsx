import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxImage {
  src: string;
  alt: string;
  caption: string | undefined;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/**
 * Modalul propriu-zis (overlay + imagine mărită + navigare). Randat printr-un
 * portal direct în `document.body`, ca să nu moștenească niciun `overflow`
 * sau `z-index` din containerul de conținut.
 */
const Lightbox = ({ images, index, onClose, onNavigate }: LightboxProps) => {
  const hasMultiple = images.length > 1;
  const current = images[index];
  const overlayRef = useRef<HTMLDivElement>(null);

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  // Blochează scroll-ul paginii cât timp lightbox-ul e deschis, fără să-i
  // schimbe poziția — la închidere, pagina rămâne exact unde era.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Focus pe overlay la deschidere, pentru ca Escape să funcționeze imediat
  // și pentru cititoarele de ecran.
  useEffect(() => {
    overlayRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (hasMultiple && event.key === "ArrowLeft") {
        goPrev();
      } else if (hasMultiple && event.key === "ArrowRight") {
        goNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goPrev, goNext, hasMultiple]);

  if (!current) return null;

  return createPortal(
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt || "Imagine mărită"}
      tabIndex={-1}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in-0 duration-200 outline-hidden"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Închide"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <X className="h-5 w-5" />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
            aria-label="Imaginea anterioară"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            aria-label="Imaginea următoare"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div
        className="flex flex-col items-center max-w-[92vw] max-h-[88vh] animate-in zoom-in-95 duration-200"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-w-[92vw] max-h-[78vh] w-auto h-auto object-contain rounded-sm shadow-2xl"
        />
        {current.caption && (
          <p className="mt-4 max-w-2xl text-center text-sm text-white/70 leading-snug">
            {current.caption}
          </p>
        )}
        {hasMultiple && (
          <p className="mt-2 text-xs text-white/50 tracking-wide">
            {index + 1} / {images.length}
          </p>
        )}
      </div>
    </div>,
    document.body,
  );
};

interface ContentLightboxProps {
  html: string;
  className?: string;
}

/**
 * Înlocuiește un `<div dangerouslySetInnerHTML>` simplu: randează același
 * conținut HTML, dar interceptează click-urile pe `<img>` din interior și
 * deschide un lightbox peste pagină (fără navigare, fără tab nou). Dacă
 * există mai multe imagini în conținut, lightbox-ul devine o galerie
 * navigabilă (săgeți + taste, ordinea din document).
 */
const ContentLightbox = ({ html, className }: ContentLightboxProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const imgs = Array.from(containerRef.current.querySelectorAll("img"));
    setImages(
      imgs.map((img) => {
        const figcaption = img.closest("figure")?.querySelector("figcaption");
        return {
          src: img.currentSrc || img.src,
          alt: img.alt,
          caption: figcaption?.textContent?.trim() || undefined,
        };
      }),
    );
  }, [html]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName !== "IMG" || !containerRef.current) return;
    const imgs = Array.from(containerRef.current.querySelectorAll("img"));
    const clickedIndex = imgs.indexOf(target as HTMLImageElement);
    if (clickedIndex !== -1) setActiveIndex(clickedIndex);
  };

  return (
    <>
      <div
        ref={containerRef}
        className={className}
        onClick={handleClick}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
};

export default ContentLightbox;
