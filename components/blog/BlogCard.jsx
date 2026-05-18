"use client";

import Link from "next/link";
import { IMAGE_PLACEHOLDER_ICON } from "./blogdata";

/**
 * BlogCard
 * Reusable card for individual blog posts in the grid.
 * Extends the existing ArticleSection design language (dark luxury, gold accents).
 *
 * Props:
 *  - post: { id, slug, category, title, excerpt, readTime, tag, image }
 *  - categorySlug: string — used to build the href
 */
export default function BlogCard({ post, categorySlug }) {
  const href = `/articles/${categorySlug}/${post.slug}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .blog-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
          cursor: pointer;
          position: relative;
        }
        .blog-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(200,169,110,0.05) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.22s ease;
          pointer-events: none;
        }
        .blog-card:hover {
          border-color: var(--border-light);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }
        .blog-card:hover::after {
          opacity: 1;
        }
        /* Image placeholder area */
        .blog-card-image {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: var(--bg-surface);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .blog-card-image-inner {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(200,169,110,0.08) 0%, rgba(255,255,255,0.02) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 6px;
        }
        .blog-card-image-label {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.5;
        }
        .blog-card-image-icon {
          width: 32px;
          height: 32px;
          opacity: 0.3;
          color: var(--text-muted);
        }
        .blog-card-image-icon svg {
          width: 100%;
          height: 100%;
        }
        /* Shine sweep on hover */
        .blog-card-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(200,169,110,0.06) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
          z-index: 1;
        }
        .blog-card:hover .blog-card-image::before {
          transform: translateX(100%);
        }

        .blog-card-body {
          padding: 1.4rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .blog-card-meta {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 0.75rem;
        }
        .blog-card-category {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold-dim);
          font-weight: 600;
        }
        .blog-card-dot {
          width: 3px;
          height: 3px;
          background: var(--text-muted);
          border-radius: 50%;
          flex-shrink: 0;
          opacity: 0.5;
        }
        .blog-card-readtime {
          font-size: 0.72rem;
          color: var(--text-muted);
        }
        .blog-card-tag {
          margin-left: auto;
          font-size: 9.5px;
          padding: 2px 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: 20px;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .blog-card-title {
          font-family: var(--font-display);
          font-size: 0.98rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.65rem;
        }
        .blog-card-excerpt {
          font-size: 0.81rem;
          color: var(--text-muted);
          line-height: 1.7;
          flex: 1;
        }
        .blog-card-footer {
          margin-top: 1.1rem;
          padding-top: 0.9rem;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .blog-card-link {
          font-size: 0.76rem;
          font-weight: 500;
          color: var(--accent-gold-dim);
          letter-spacing: 0.04em;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          transition: color 0.15s, gap 0.15s;
        }
        .blog-card:hover .blog-card-link {
          color: var(--accent-gold);
          gap: 9px;
        }
      `}} />

      <Link href={href} className="blog-card" style={{ textDecoration: "none" }}>
        {/* Image area — TODO: Replace with next/image once real images are available */}
        <div className="blog-card-image">
          <div className="blog-card-image-inner">
            <div
              className="blog-card-image-icon"
              dangerouslySetInnerHTML={{ __html: IMAGE_PLACEHOLDER_ICON }}
            />
            <span className="blog-card-image-label">Image coming soon</span>
          </div>
        </div>

        <div className="blog-card-body">
          <div className="blog-card-meta">
            <span className="blog-card-category">{post.category}</span>
            <span className="blog-card-dot" />
            <span className="blog-card-readtime">{post.readTime} read</span>
            <span className="blog-card-tag">{post.tag}</span>
          </div>

          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-excerpt">{post.excerpt}</p>

          <div className="blog-card-footer">
            <span className="blog-card-link">
              Read article
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}