"use client";

import Link from "next/link";
import { IMAGE_PLACEHOLDER_ICON } from "./blogdata";

/**
 * FeaturedPost
 * Hero-style card shown at the top of each category page.
 * Large image area on the left, content on the right (stacks on mobile).
 *
 * Props:
 *  - post: { id, slug, category, title, excerpt, readTime, tag, image }
 *  - categorySlug: string
 */
export default function FeaturedPost({ post, categorySlug }) {
  const href = `/articles/${categorySlug}/${post.slug}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .featured-post {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          min-height: 380px;
          position: relative;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          margin-bottom: 3rem;
        }
        .featured-post:hover {
          border-color: rgba(200,169,110,0.35);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        /* Gold top-border accent */
        .featured-post::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);
          opacity: 0.5;
          z-index: 1;
        }

        /* Image side */
        .featured-post-image {
          position: relative;
          overflow: hidden;
          background: var(--bg-surface);
        }
        .featured-post-image-inner {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(200,169,110,0.1) 0%, rgba(74,140,106,0.06) 50%, rgba(0,0,0,0.3) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
          min-height: 380px;
        }
        .featured-post-image-label {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.5;
        }
        .featured-post-image-icon {
          width: 48px;
          height: 48px;
          opacity: 0.25;
          color: var(--text-muted);
        }
        .featured-post-image-icon svg {
          width: 100%;
          height: 100%;
        }
        .featured-post-image-actual {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .featured-post:hover .featured-post-image-actual {
          transform: scale(1.04);
        }
        /* Sweep effect on hover */
        .featured-post-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 35%, rgba(200,169,110,0.07) 50%, transparent 65%);
          transform: translateX(-100%);
          transition: transform 0.7s ease;
        }
        .featured-post:hover .featured-post-image::after {
          transform: translateX(100%);
        }

        /* Content side */
        .featured-post-content {
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .featured-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.5rem;
        }
        .featured-badge {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold);
          background: rgba(200,169,110,0.1);
          border: 1px solid rgba(200,169,110,0.2);
          border-radius: 20px;
          padding: 4px 12px;
          font-weight: 600;
        }
        .featured-tag {
          font-size: 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-muted);
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 4px 10px;
        }
        .featured-post-title {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 2.2vw, 1.7rem);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
          margin-bottom: 1rem;
        }
        .featured-post-excerpt {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.75;
          flex: 1;
          margin-bottom: 1.75rem;
        }
        .featured-post-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border);
        }
        .featured-post-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .featured-readtime {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .featured-meta-dot {
          width: 3px;
          height: 3px;
          background: var(--text-muted);
          border-radius: 50%;
          opacity: 0.4;
        }
        .featured-read-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent-gold-dim);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.15s, gap 0.15s;
        }
        .featured-post:hover .featured-read-link {
          color: var(--accent-gold);
          gap: 11px;
        }

        @media (max-width: 768px) {
          .featured-post {
            grid-template-columns: 1fr;
          }
          .featured-post-image-inner {
            min-height: 200px;
          }
          .featured-post-content {
            padding: 1.75rem 1.5rem;
          }
        }
      `}} />

      <div className="featured-post">
        {/* Image */}
        <div className="featured-post-image">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="featured-post-image-actual"
            />
          ) : (
            <div className="featured-post-image-inner">
              <div
                className="featured-post-image-icon"
                dangerouslySetInnerHTML={{ __html: IMAGE_PLACEHOLDER_ICON }}
              />
              <span className="featured-post-image-label">Featured image coming soon</span>
            </div>
          )}
        </div>

        <div className="featured-post-content">
          <div>
            <div className="featured-eyebrow">
              <span className="featured-badge">Featured</span>
              <span className="featured-tag">{post.tag}</span>
            </div>
            <h2 className="featured-post-title">{post.title}</h2>
            <p className="featured-post-excerpt">{post.excerpt}</p>
          </div>

          <div className="featured-post-footer">
            <div className="featured-post-meta">
              <span className="featured-readtime">{post.readTime} read</span>
              <span className="featured-meta-dot" />
              <span className="featured-readtime">{post.category}</span>
            </div>
            <Link href={href} className="featured-read-link">
              Read article
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}