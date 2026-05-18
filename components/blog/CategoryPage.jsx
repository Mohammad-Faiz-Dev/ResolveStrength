"use client";

import Link from "next/link";
import FeaturedPost from "./FeaturedPost";
import BlogCard from "./BlogCard";
import { CATEGORIES } from "./blogdata";

/**
 * CategoryPage
 * Reusable full-page layout for any blog category.
 * Used by all 5 category page routes.
 *
 * Props:
 *  - categorySlug: string — e.g. "strength-training"
 *  - data: { featured: Post, posts: Post[] } — from BLOG_DATA[slug]
 */
export default function CategoryPage({ categorySlug, data }) {
  const category = CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category || !data) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .category-page {
          min-height: 100vh;
          padding-bottom: 6rem;
        }

        /* ── Hero Header ── */
        .category-hero {
          padding: 4rem 0 3.5rem;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }
        .category-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-gold-dim), transparent);
          opacity: 0.3;
        }
        /* Subtle radial glow */
        .category-hero-glow {
          position: absolute;
          width: 600px;
          height: 400px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.06;
          top: -100px;
          left: -100px;
          pointer-events: none;
        }
        .category-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 1.5rem;
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .category-breadcrumb a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.15s;
        }
        .category-breadcrumb a:hover {
          color: var(--accent-gold-dim);
        }
        .category-breadcrumb-sep {
          opacity: 0.35;
        }
        .category-hero-inner {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
        }
        .category-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.75rem;
        }
        .category-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .category-icon svg {
          width: 24px;
          height: 24px;
        }
        .category-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .category-hero-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }
        .category-hero-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 520px;
        }
        .category-hero-stats {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          flex-shrink: 0;
        }
        .category-stat-num {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
        }
        .category-stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── Content ── */
        .category-content {
          padding-top: 3.5rem;
        }
        .category-section-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-gold);
          font-weight: 500;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .category-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
          max-width: 200px;
        }

        /* Grid */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        /* ── Other categories nav ── */
        .other-categories {
          margin-top: 5rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border);
        }
        .other-cats-header {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }
        .other-cats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .other-cat-pill {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: border-color 0.2s, transform 0.2s;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .other-cat-pill:hover {
          border-color: var(--border-light);
          transform: translateY(-2px);
          color: var(--text-primary);
        }
        .other-cat-pill-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .other-cat-pill-icon svg {
          width: 16px;
          height: 16px;
        }

        @media (max-width: 960px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .other-cats-grid { grid-template-columns: repeat(2, 1fr); }
          .category-hero-stats { display: none; }
        }
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr; }
          .other-cats-grid { grid-template-columns: 1fr 1fr; }
          .category-hero-inner { flex-direction: column; }
        }
      `}} />

      <div className="category-page">
        {/* ── Hero ── */}
        <div className="category-hero">
          <div
            className="category-hero-glow"
            style={{ background: category.accentColor }}
          />
          <div className="container">
            <nav className="category-breadcrumb">
              <Link href="/">Home</Link>
              <span className="category-breadcrumb-sep">/</span>
              <Link href="/articles">Articles</Link>
              <span className="category-breadcrumb-sep">/</span>
              <span style={{ color: "var(--text-secondary)" }}>{category.label}</span>
            </nav>

            <div className="category-hero-inner">
              <div>
                <div className="category-eyebrow">
                  <div
                    className="category-icon"
                    style={{ color: category.accentColor }}
                    dangerouslySetInnerHTML={{ __html: category.icon }}
                  />
                  <span className="category-label" style={{ color: category.accentColor }}>
                    {category.shortLabel}
                  </span>
                </div>
                <h1 className="category-hero-title">{category.label}</h1>
                <p className="category-hero-desc">{category.description}</p>
              </div>
              <div className="category-hero-stats">
                <span className="category-stat-num">{data.posts.length + 1}</span>
                <span className="category-stat-label">Articles</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="category-content">
          <div className="container">
            {/* Featured */}
            <div className="category-section-label">Featured Article</div>
            <FeaturedPost post={data.featured} categorySlug={categorySlug} />

            {/* Grid */}
            <div className="category-section-label" style={{ marginBottom: "1.5rem" }}>
              Latest Articles
            </div>
            <div className="blog-grid">
              {data.posts.map((post) => (
                <BlogCard key={post.id} post={post} categorySlug={categorySlug} />
              ))}
            </div>

            {/* Other categories */}
            <OtherCategories currentSlug={categorySlug} />
          </div>
        </div>
      </div>
    </>
  );
}

/** Sub-component: navigation strip to other categories */
function OtherCategories({ currentSlug }) {
  const others = CATEGORIES.filter((c) => c.slug !== currentSlug);
  return (
    <div className="other-categories">
      <h3 className="other-cats-header">Explore Other Topics</h3>
      <div className="other-cats-grid">
        {others.map((cat) => (
          <Link key={cat.slug} href={`/articles/${cat.slug}`} className="other-cat-pill">
            <span
              className="other-cat-pill-icon"
              style={{ color: cat.accentColor }}
              dangerouslySetInnerHTML={{ __html: cat.icon }}
            />
            <span>{cat.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}