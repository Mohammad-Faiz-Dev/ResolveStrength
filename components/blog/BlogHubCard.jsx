"use client";

import Link from "next/link";

/**
 * BlogHubCard
 * Large navigation card used on the /blog hub page.
 * One card per category — links to the category page.
 *
 * Props:
 *  - category: { slug, label, icon, accentColor, shortLabel, description }
 *  - postCount: number
 */
export default function BlogHubCard({ category, postCount = 6 }) {
  const href = `/blog/${category.slug}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .hub-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }
        .hub-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(200,169,110,0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.22s;
          pointer-events: none;
        }
        .hub-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.45);
        }
        .hub-card:hover::before {
          opacity: 1;
        }
        .hub-card-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hub-card-icon svg {
          width: 28px;
          height: 28px;
          color: currentColor;
        }
        .hub-card-label {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }
        .hub-card-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .hub-card-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.65;
          flex: 1;
        }
        .hub-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
          margin-top: auto;
        }
        .hub-card-count {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .hub-card-arrow {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          transition: gap 0.15s;
        }
        .hub-card:hover .hub-card-arrow {
          gap: 9px;
        }
        /* Bottom accent bar */
        .hub-card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.22s;
        }
        .hub-card:hover .hub-card-accent {
          opacity: 1;
        }
      `}} />

      <Link
        href={href}
        className="hub-card"
        style={{ borderColor: "var(--border)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = category.accentColor + "55";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
        }}
      >
        <div
          className="hub-card-icon"
          style={{ color: category.accentColor }}
          dangerouslySetInnerHTML={{ __html: category.icon }}
        />
        <div>
          <div className="hub-card-label" style={{ color: category.accentColor }}>
            {category.shortLabel}
          </div>
          <div className="hub-card-title">{category.label}</div>
        </div>
        <p className="hub-card-desc">{category.description}</p>
        <div className="hub-card-footer">
          <span className="hub-card-count">{postCount} articles</span>
          <span className="hub-card-arrow" style={{ color: category.accentColor }}>
            Explore
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
        {/* Bottom accent bar */}
        <div
          className="hub-card-accent"
          style={{ background: `linear-gradient(90deg, transparent, ${category.accentColor}, transparent)` }}
        />
      </Link>
    </>
  );
}