"use client";

import Link from "next/link";
import { CATEGORIES, BLOG_DATA } from "./blog/blogdata";

export default function ArticleSection() {
  if (!CATEGORIES || !BLOG_DATA) {
    return (
      <section style={{ padding: "4rem 2rem", color: "var(--text-muted)" }}>
        Error: Could not load blog data. Check that <code>blogdata.js</code> exists
        at <code>components/blog/blogdata.js</code> and exports CATEGORIES & BLOG_DATA.
      </section>
    );
  }

  const previews = CATEGORIES.map((cat) => ({
    ...BLOG_DATA[cat.slug].featured,
    categoryMeta: cat,
  }));

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
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
          top: 0; left: 0; right: 0; height: 1px;
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

        /* 5-column grid — collapses sensibly */
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.1rem;
        }

        /* Card */
        .article-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          position: relative;
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

        /* Image frame */
        .article-image-frame {
          width: 100%;
          aspect-ratio: 16 / 10;
          background: var(--bg-deep);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .article-image-inner {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 7px;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%);
          position: relative;
        }
        .article-image-actual {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .article-card:hover .article-image-actual {
          transform: scale(1.04);
        }
        /* Accent colour stripe along the bottom of frame */
        .article-image-stripe {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          opacity: 0.35;
        }
        /* Subtle shimmer sweep on hover */
        .article-image-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.05) 50%, transparent 65%);
          transform: translateX(-100%);
          transition: transform 0.55s ease;
          z-index: 1;
          pointer-events: none;
        }
        .article-card:hover .article-image-frame::before {
          transform: translateX(100%);
        }
        .article-image-icon {
          width: 28px; height: 28px;
          display: flex; align-items: center; justify-content: center;
          opacity: 0.22;
          color: var(--text-muted);
          position: relative; z-index: 2;
        }
        .article-image-icon svg { width: 100%; height: 100%; }
        .article-image-label {
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.35;
          position: relative; z-index: 2;
        }

        /* Card body */
        .article-body {
          padding: 1.25rem 1.25rem 1.4rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .article-meta {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }
        .article-cat-icon-wrap {
          width: 18px; height: 18px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .article-cat-icon-wrap svg { width: 14px; height: 14px; }
        .article-category {
          font-size: 9.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .article-meta-dot {
          width: 3px; height: 3px;
          background: var(--text-muted);
          border-radius: 50%;
          flex-shrink: 0;
          opacity: 0.45;
        }
        .article-read-time { font-size: 0.72rem; color: var(--text-muted); }
        .article-tag {
          margin-left: auto;
          font-size: 9px;
          padding: 2px 7px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: 20px;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .article-title {
          font-family: var(--font-display);
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.38;
          margin-bottom: 0.6rem;
        }
        .article-excerpt {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.7;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .article-footer {
          margin-top: 1rem;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .article-read-link {
          font-size: 0.75rem;
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

        /* Bottom banner */
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

        /* Responsive breakpoints */
        @media (max-width: 1100px) {
          .articles-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 760px) {
          .articles-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .articles-grid { grid-template-columns: 1fr; }
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
            <Link href="/articles" className="articles-hub-link">
              View all categories
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="articles-grid">
            {previews.map((post) => (
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
            <Link href="/articles" className="banner-cta">
              Browse all articles
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PreviewCard({ post }) {
  const href = `/articles/${post.categoryMeta.slug}/${post.slug}`;
  const accent = post.categoryMeta.accentColor;

  return (
    <Link href={href} className="article-card">
      {/* Image frame */}
      <div className="article-image-frame">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="article-image-actual"
          />
        ) : (
          <div className="article-image-inner">
            {/* Category icon as subtle centred watermark */}
            <div
              className="article-image-icon"
              style={{ color: accent }}
              dangerouslySetInnerHTML={{ __html: post.categoryMeta.icon }}
            />
            <span className="article-image-label">Image coming soon</span>
            {/* Accent colour stripe at bottom of frame */}
            <div
              className="article-image-stripe"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
            />
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="article-body">
        <div className="article-meta">
          <span
            className="article-cat-icon-wrap"
            style={{ color: accent }}
            dangerouslySetInnerHTML={{ __html: post.categoryMeta.icon }}
          />
          <span className="article-category" style={{ color: accent }}>
            {post.categoryMeta.shortLabel}
          </span>
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
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}