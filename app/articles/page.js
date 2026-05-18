import Link from "next/link";
import { CATEGORIES, BLOG_DATA } from "@/components/blog/blogdata";

export const metadata = {
    title: "Articles — ResolveStrength",
    description: "Evidence-based reading across strength, cardio, mobility, home workouts, and recovery.",
};

export default function ArticlesHubPage() {
    if (!CATEGORIES || !BLOG_DATA) {
        return (
            <div style={{ padding: "4rem 2rem", color: "var(--text-muted)" }}>
                Error: Could not load blog data. Check that <code>blogdata.js</code> exists
                at <code>components/blog/blogdata.js</code> and exports CATEGORIES & BLOG_DATA.
            </div>
        );
    }

    return (
        <div className="hub-shell">
            <style dangerouslySetInnerHTML={{ __html: `
        .hub-shell {
          max-width: 1160px;
          margin: 0 auto;
          padding: 5rem 2rem 6rem;
        }
        .hub-header {
          margin-bottom: 3.5rem;
        }
        .hub-eyebrow {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-gold);
          font-weight: 500;
          margin-bottom: 0.6rem;
        }
        .hub-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }
        .hub-sub {
          font-size: 1rem;
          color: var(--text-muted);
          max-width: 480px;
          line-height: 1.6;
        }
        .hub-category-section {
          margin-bottom: 3.5rem;
        }
        .hub-cat-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }
        .hub-cat-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--accent-gold);
        }
        .hub-cat-icon svg {
          width: 18px;
          height: 18px;
        }
        .hub-cat-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .hub-cat-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .hub-cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 1rem;
        }
        .hub-blog-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .hub-blog-card:hover {
          border-color: var(--border-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .hub-blog-image {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: var(--bg-deep);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .hub-blog-image-inner {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 7px;
          background: linear-gradient(135deg, rgba(255,255,255,0.025) 0%, transparent 100%);
          position: relative;
        }
        .hub-blog-image-actual {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .hub-blog-card:hover .hub-blog-image-actual {
          transform: scale(1.04);
        }
        .hub-blog-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.04) 50%, transparent 65%);
          transform: translateX(-100%);
          transition: transform 0.55s ease;
          z-index: 1;
          pointer-events: none;
        }
        .hub-blog-card:hover .hub-blog-image::before {
          transform: translateX(100%);
        }
        .hub-blog-image-icon {
          width: 26px;
          height: 26px;
          opacity: 0.2;
          color: var(--text-muted);
          position: relative;
          z-index: 2;
        }
        .hub-blog-image-icon svg {
          width: 100%;
          height: 100%;
        }
        .hub-blog-image-label {
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.3;
          position: relative;
          z-index: 2;
        }
        .hub-blog-image-stripe {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0.4;
        }
        .hub-blog-body {
          padding: 1.25rem 1.4rem 1.4rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .hub-blog-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 0.75rem;
        }
        .hub-blog-tag {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold-dim);
          font-weight: 600;
        }
        .hub-blog-dot {
          width: 3px; height: 3px;
          background: var(--text-muted);
          border-radius: 50%;
        }
        .hub-blog-time {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .hub-blog-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.5rem;
        }
        .hub-blog-excerpt {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.65;
          flex: 1;
        }
        .hub-cat-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--accent-gold-dim);
          text-decoration: none;
          margin-top: 0.5rem;
          transition: color 0.15s, gap 0.15s;
        }
        .hub-cat-link:hover {
          color: var(--accent-gold);
          gap: 10px;
        }
        @media (max-width: 860px) {
          .hub-cat-grid { grid-template-columns: 1fr; }
        }
      `}} />

            <header className="hub-header">
                <div className="hub-eyebrow">The Library</div>
                <h1 className="hub-title">Articles</h1>
                <p className="hub-sub">
                    Science-backed content across 5 training disciplines. Each category features essential reads.
                </p>
            </header>

            <div className="hub-categories">
                {CATEGORIES.map((cat) => {
                    const catData = BLOG_DATA[cat.slug];
                    if (!catData) return null;

                    const featuredBlogs = [
                        catData.featured,
                        ...catData.posts.slice(0, 2),
                    ];

                    return (
                        <section key={cat.slug} className="hub-category-section">
                            <div className="hub-cat-header">
                                <span
                                    className="hub-cat-icon"
                                    style={{ color: cat.accentColor }}
                                    dangerouslySetInnerHTML={{ __html: cat.icon }}
                                />
                                <div>
                                    <h2 className="hub-cat-title">{cat.label}</h2>
                                    <p className="hub-cat-desc">{cat.description}</p>
                                </div>
                            </div>

                            <div className="hub-cat-grid">
                                {featuredBlogs.map((blog) => (
                                    <Link
                                        key={blog.id}
                                        href={`/articles/${cat.slug}/${blog.slug}`}
                                        className="hub-blog-card"
                                    >
                                        <div className="hub-blog-image">
                                            {blog.image ? (
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="hub-blog-image-actual"
                                                />
                                            ) : (
                                                <div className="hub-blog-image-inner">
                                                    <div className="hub-blog-image-icon">
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                                            <rect x="3" y="3" width="18" height="18" rx="3"/>
                                                            <circle cx="8.5" cy="8.5" r="1.5"/>
                                                            <path d="M21 15l-5-5L5 21"/>
                                                        </svg>
                                                    </div>
                                                    <span className="hub-blog-image-label">Image coming soon</span>
                                                    <div
                                                        className="hub-blog-image-stripe"
                                                        style={{ background: `linear-gradient(90deg, transparent, ${cat.accentColor}, transparent)` }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <div className="hub-blog-body">
                                            <div className="hub-blog-meta">
                                                <span className="hub-blog-tag">{blog.tag}</span>
                                                <span className="hub-blog-dot" />
                                                <span className="hub-blog-time">{blog.readTime} read</span>
                                            </div>
                                            <h3 className="hub-blog-title">{blog.title}</h3>
                                            <p className="hub-blog-excerpt">{blog.excerpt}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <Link href={`/articles/${cat.slug}`} className="hub-cat-link">
                                View all {cat.label.toLowerCase()} articles
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}