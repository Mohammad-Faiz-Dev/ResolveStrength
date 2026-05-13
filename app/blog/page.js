/**
 * /app/blog/page.js
 * Main blog hub — shows all 5 categories with overview cards.
 * Server component (no "use client" needed).
 */

import Link from "next/link";
import BlogHubCard from "@/components/blog/BlogHubCard";
import { CATEGORIES, BLOG_DATA } from "@/components/blog/blogData";

export const metadata = {
  title: "Blog — ResolveStrength",
  description:
    "Evidence-based articles on strength training, cardio, yoga, home workouts, and recovery — written for serious practitioners.",
};

export default function BlogHubPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Hub Hero ── */
        .hub-hero {
          padding: 4.5rem 0 4rem;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }
        .hub-hero::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-gold-dim), transparent);
          opacity: 0.3;
        }
        .hub-hero-bg {
          position: absolute;
          width: 700px; height: 500px;
          background: radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%);
          top: -200px; right: -150px;
          pointer-events: none;
        }
        .hub-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        .hub-breadcrumb a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.15s;
        }
        .hub-breadcrumb a:hover { color: var(--accent-gold-dim); }
        .hub-breadcrumb-sep { opacity: 0.35; }
        .hub-eyebrow {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-gold);
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        .hub-hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.08;
          margin-bottom: 1rem;
        }
        .hub-hero-title span {
          color: var(--accent-gold-dim);
        }
        .hub-hero-sub {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 540px;
          line-height: 1.7;
        }

        /* ── Stats strip ── */
        .hub-stats {
          display: flex;
          gap: 2.5rem;
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }
        .hub-stat {}
        .hub-stat-num {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
          margin-bottom: 2px;
        }
        .hub-stat-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ── Categories ── */
        .hub-categories {
          padding: 4rem 0 6rem;
        }
        .hub-categories-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .hub-section-eyebrow {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-gold);
          font-weight: 500;
          margin-bottom: 0.4rem;
        }
        .hub-section-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .hub-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        /* Last 2 cards: make a 2-col row aligned left */
        .hub-cards-row2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          max-width: calc(66.66% + 0.83rem);
          margin-top: 1.25rem;
        }

        /* ── Featured article strip ── */
        .hub-featured-strip {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border);
        }
        .hub-strip-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }
        .hub-strip-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .hub-strip-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          transition: border-color 0.2s, transform 0.2s;
        }
        .hub-strip-card:hover {
          border-color: var(--border-light);
          transform: translateY(-2px);
        }
        .hub-strip-cat {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold-dim);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        /* FIXED: icon container for SVG */
        .hub-strip-cat-icon {
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--accent-gold-dim);
        }
        .hub-strip-cat-icon svg {
          width: 14px;
          height: 14px;
        }
        .hub-strip-title-text {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.35;
        }
        .hub-strip-meta {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .hub-cards-grid { grid-template-columns: 1fr 1fr; }
          .hub-cards-row2 { max-width: 100%; }
          .hub-strip-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .hub-cards-grid { grid-template-columns: 1fr; }
          .hub-cards-row2 { grid-template-columns: 1fr; }
          .hub-stats { flex-wrap: wrap; gap: 1.5rem; }
        }
      `}} />

      {/* Hero */}
      <div className="hub-hero">
        <div className="hub-hero-bg" />
        <div className="container">
          <nav className="hub-breadcrumb">
            <Link href="/">Home</Link>
            <span className="hub-breadcrumb-sep">/</span>
            <span style={{ color: "var(--text-secondary)" }}>Blog</span>
          </nav>
          <div className="hub-eyebrow">Article Library</div>
          <h1 className="hub-hero-title">
            Training knowledge<br />
            <span>built on evidence</span>
          </h1>
          <p className="hub-hero-sub">
            Five focused categories. Each article is grounded in peer-reviewed research
            and written for practitioners who want depth, not headlines.
          </p>
          <div className="hub-stats">
            <div className="hub-stat">
              <div className="hub-stat-num">5</div>
              <div className="hub-stat-label">Categories</div>
            </div>
            <div className="hub-stat">
              <div className="hub-stat-num">30</div>
              <div className="hub-stat-label">Articles</div>
            </div>
            <div className="hub-stat">
              <div className="hub-stat-num">∞</div>
              <div className="hub-stat-label">More coming</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="hub-categories">
        <div className="container">
          <div className="hub-categories-header">
            <div>
              <div className="hub-section-eyebrow">Browse by topic</div>
              <h2 className="hub-section-title">Choose your focus</h2>
            </div>
          </div>

          {/* First 3 hub cards */}
          <div className="hub-cards-grid">
            {CATEGORIES.slice(0, 3).map((cat) => (
              <BlogHubCard
                key={cat.slug}
                category={cat}
                postCount={BLOG_DATA[cat.slug].posts.length + 1}
              />
            ))}
          </div>

          {/* Remaining 2 hub cards */}
          <div className="hub-cards-row2">
            {CATEGORIES.slice(3).map((cat) => (
              <BlogHubCard
                key={cat.slug}
                category={cat}
                postCount={BLOG_DATA[cat.slug].posts.length + 1}
              />
            ))}
          </div>

          {/* Featured strip — one featured post per category */}
          <div className="hub-featured-strip">
            <h3 className="hub-strip-title">Editor's picks across categories</h3>
            <div className="hub-strip-grid">
              {CATEGORIES.map((cat) => {
                const post = BLOG_DATA[cat.slug].featured;
                return (
                  <Link
                    key={cat.slug}
                    href={`/blog/${cat.slug}/${post.slug}`}
                    className="hub-strip-card"
                  >
                    <div className="hub-strip-cat">
                      {/* FIXED: use dangerouslySetInnerHTML for SVG icon */}
                      <span
                        className="hub-strip-cat-icon"
                        style={{ color: cat.accentColor }}
                        dangerouslySetInnerHTML={{ __html: cat.icon }}
                      />
                      {cat.label}
                    </div>
                    <div className="hub-strip-title-text">{post.title}</div>
                    <div className="hub-strip-meta">{post.readTime} read · {post.tag}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}