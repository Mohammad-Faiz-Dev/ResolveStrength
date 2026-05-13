"use client";

import Link from "next/link";
import { CATEGORIES, BLOG_DATA } from "./blog/blogData";

/**
 * ArticleSection (updated → BlogSection)
 * Homepage preview section. Shows one card per category + a CTA to the blog hub.
 */
export default function ArticleSection() {
  const previews = CATEGORIES.map((cat) => ({
    ...BLOG_DATA[cat.slug].featured,
    categoryMeta: cat,
  }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .articles-section {
          padding: 5rem 0 6rem;
          background: var(--bg-surface);
          border-top: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }
        .articles-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-gold-dim), transparent);
          opacity: 0.4;
        }
        .articles-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          gap: 1rem;
        }
        .articles-eyebrow {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-gold);
          font-weight: 500;
          margin-bottom: 0.6rem;
        }
        .articles-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.15;
        }
        .articles-hub-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--accent-gold-dim);
          text-decoration: none;
          border: 1px solid rgba(200,169,110,0.25);
          padding: 8px 16px;
          border-radius: 40px;
          transition: color 0.15s, border-color 0.15s, gap 0.15s;
          flex-shrink: 0;
        }
        .articles-hub-link:hover {
          color: var(--accent-gold);
          border-color: rgba(200,169,110,0.5);
          gap: 10px;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .articles-grid-row2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          max-width: calc(66.66% + 0.83rem);
          margin: 0 auto 0 0;
        }

        .article-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          transition: border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }
        .article-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(200,169,110,0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.22s ease;
          pointer-events: none;
        }
        .article-card:hover {
          border-color: var(--border-light);
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.35);
        }
        .article-card:hover::after { opacity: 1; }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 1rem;
        }
        .article-category {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold-dim);
          font-weight: 600;
        }
        .article-meta-dot {
          width: 3px; height: 3px;
          background: var(--text-muted);
          border-radius: 50%;
          flex-shrink: 0;
        }
        .article-read-time { font-size: 0.75rem; color: var(--text-muted); }
        .article-tag {
          margin-left: auto;
          font-size: 10px;
          padding: 3px 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: 20px;
          color: var(--text-muted);
          letter-spacing: 0.04em;
        }
        .article-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.75rem;
        }
        .article-excerpt {
          font-size: 0.83rem;
          color: var(--text-muted);
          line-height: 1.7;
          flex: 1;
        }
        .article-footer {
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .article-read-link {
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--accent-gold-dim);
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.15s, gap 0.15s;
        }
        .article-card:hover .article-read-link {
          color: var(--accent-gold);
          gap: 8px;
        }

        /* Icon container for homepage cards */
        .article-cat-icon-wrap {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--accent-gold-dim);
          opacity: 0.7;
        }
        .article-cat-icon-wrap svg {
          width: 16px;
          height: 16px;
        }

        .articles-banner {
          margin-top: 3rem;
          background: linear-gradient(135deg, rgba(200,169,110,0.07) 0%, rgba(74,140,106,0.07) 100%);
          border: 1px solid rgba(200,169,110,0.15);
          border-radius: var(--radius-lg);
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }
        .banner-title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }
        .banner-sub { font-size: 0.85rem; color: var(--text-secondary); }
        .banner-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--bg-card);
          background: var(--accent-gold);
          padding: 10px 22px;
          border-radius: 40px;
          text-decoration: none;
          flex-shrink: 0;
          transition: opacity 0.15s, gap 0.15s;
          white-space: nowrap;
          letter-spacing: 0.02em;
        }
        .banner-cta:hover { opacity: 0.85; gap: 12px; }

        @media (max-width: 860px) {
          .articles-grid { grid-template-columns: 1fr; }
          .articles-grid-row2 { grid-template-columns: 1fr; max-width: 100%; }
          .articles-header { flex-direction: column; align-items: flex-start; }
          .articles-banner { flex-direction: column; align-items: flex-start; }
        }
      `}} />

      <section className="articles-section">
        <div className="container">
          <div className="articles-header">
            <div>
              <div className="articles-eyebrow">From the library</div>
              <h2 className="articles-title">
                Evidence-based reading<br />for serious practitioners
              </h2>
            </div>
            <Link href="/blog" className="articles-hub-link">
              View all categories
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="articles-grid">
            {previews.slice(0, 3).map((post) => (
              <PreviewCard key={post.id} post={post} />
            ))}
          </div>

          <div className="articles-grid-row2">
            {previews.slice(3).map((post) => (
              <PreviewCard key={post.id} post={post} />
            ))}
          </div>

          <div className="articles-banner">
            <div>
              <div className="banner-title">Explore the full article library.</div>
              <div className="banner-sub">
                5 categories. Science-backed content. New articles added regularly.
              </div>
            </div>
            <Link href="/blog" className="banner-cta">
              Browse all articles
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/** Internal card — FIXED: uses dangerouslySetInnerHTML for SVG icon */
function PreviewCard({ post }) {
  const href = `/blog/${post.categoryMeta.slug}/${post.slug}`;
  return (
    <Link href={href} className="article-card">
      <div className="article-meta">
        <span
          className="article-cat-icon-wrap"
          style={{ color: post.categoryMeta.accentColor }}
          dangerouslySetInnerHTML={{ __html: post.categoryMeta.icon }}
        />
        <span className="article-category">{post.category}</span>
        <span className="article-meta-dot" />
        <span className="article-read-time">{post.readTime} read</span>
        <span className="article-tag">{post.tag}</span>
      </div>
      <h3 className="article-title">{post.title}</h3>
      <p className="article-excerpt">{post.excerpt}</p>
      <div className="article-footer">
        <span className="article-read-link">
          Read article
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}