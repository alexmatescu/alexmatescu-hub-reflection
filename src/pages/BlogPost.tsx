import { Link, useParams } from "@/lib/router-compat";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/data/posts";
import NewsletterForm from "@/components/NewsletterForm";
import Seo, { alexMatescuPerson } from "@/components/Seo";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="container-editorial py-32 text-center">
        <h1 className="font-serif text-4xl">Articolul nu există</h1>
        <Link to="/blog" className="mt-8 inline-flex items-center gap-2 link-underline">
          <ArrowLeft className="h-4 w-4" /> Înapoi la blog
        </Link>
      </section>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Seo
        title={post.seoTitle ? `${post.seoTitle} | Alex Matescu` : `${post.title} — Alex Matescu`}
        description={post.metaDescription ?? post.excerpt}
        canonicalUrl={`https://delamatescu.ro/blog/${post.slug}`}
        ogType="article"
        ogTitle={post.ogTitle ?? post.seoTitle ?? post.title}
        ogDescription={post.ogDescription ?? post.metaDescription ?? post.excerpt}
        ogSiteName="Alex Matescu"
        ogLocale="ro_RO"
        {...(post.twitterTitle ? { twitterTitle: post.twitterTitle } : {})}
        {...(post.twitterDescription ? { twitterDescription: post.twitterDescription } : {})}
        robots="index, follow"
        {...(post.heroImage?.src
          ? {
              imageUrl: post.heroImage.src.startsWith("http")
                ? post.heroImage.src
                : `https://delamatescu.ro${post.heroImage.src}`,
              imageAlt: post.imageAlt ?? post.heroImage.alt,
            }
          : {})}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `https://delamatescu.ro/blog/${post.slug}#article`,
            headline: post.title,
            name: post.title,
            description: post.metaDescription ?? post.excerpt,
            datePublished: post.date,
            dateModified: post.dateModified ?? post.date,
            url: `https://delamatescu.ro/blog/${post.slug}`,
            inLanguage: "ro-RO",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://delamatescu.ro/blog/${post.slug}`,
            },
            articleSection: post.category,
            ...(post.schemaKeywords?.length
              ? { keywords: post.schemaKeywords }
              : post.tags?.length
                ? { keywords: post.tags }
                : {}),
            ...(post.about?.length
              ? { about: post.about.map((name) => ({ "@type": "Thing", name })) }
              : {}),
            ...(post.mentions?.length
              ? { mentions: post.mentions.map((name) => ({ "@type": "Person", name })) }
              : {}),
            ...(post.heroImage?.src
              ? {
                  image: post.heroImage.src.startsWith("http")
                    ? post.heroImage.src
                    : `https://delamatescu.ro${post.heroImage.src}`,
                }
              : {}),
            author: alexMatescuPerson,
            publisher: { "@id": "https://delamatescu.ro/#alex-matescu" },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: "https://delamatescu.ro/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://delamatescu.ro/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://delamatescu.ro/blog/${post.slug}`,
              },
            ],
          },
        ]}
      />


      <article>
        <header className="container-editorial pt-20 md:pt-28 pb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="h-4 w-4" /> Toate articolele
          </Link>
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-8">
              <span>{post.category}</span>
              <span>{formatDate(post.date)}</span>
              <span>{post.readingTime} citire</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
              {post.title}
            </h1>
            <p className="mt-6 font-serif italic text-xl md:text-2xl text-muted-foreground leading-snug text-balance">
              {post.subtitle}
            </p>
          </div>
        </header>

        {post.heroImage && (
          <div className="container-prose">
            <figure className="my-8">
              <img
                src={post.heroImage.src}
                alt={post.heroImage.alt}
                width={post.heroImage.width}
                height={post.heroImage.height}
                className="w-full aspect-video object-cover rounded-sm"
                loading="eager"
                fetchPriority="high"
              />
            </figure>
          </div>
        )}

        <div className="container-editorial">
          <div className="rule" />
        </div>

        <div className="container-prose py-16">
          {post.html ? (
            <div
              className="prose-editorial"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          ) : (
            <div className="prose-editorial">
              {post.content?.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
        </div>

        <div className="container-editorial pb-16">
          <NewsletterForm
            title="Primește articolele noi în inbox."
            description="Trimit rar și doar conținut original. Fără promoții, fără reciclări."
          />
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-foreground/10 bg-surface/60">
          <div className="container-editorial py-16">
            <p className="eyebrow mb-8">Continuă lectura</p>
            <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-background p-8 hover:bg-surface transition-colors">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">{p.category}</p>
                  <h3 className="font-serif text-2xl leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPost;
