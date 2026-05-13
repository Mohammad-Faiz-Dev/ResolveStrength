"use client";

import Link from "next/link";

export default function UnderConstruction({ title, category, categoryHref }) {
  return (
    <article className="uc-page">
      <div className="uc-inner">
        <div className="uc-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        
        <div className="uc-breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href={categoryHref}>{category}</Link>
          <span>/</span>
          <span>{title}</span>
        </div>

        <h1 className="uc-title">{title}</h1>
        <p className="uc-desc">
          This article is currently being researched and written. 
          We're building something worth your time — check back soon for the full protocol.
        </p>

        <div className="uc-actions">
          <Link href={categoryHref} className="uc-btn-primary">
            Back to {category}
          </Link>
          <Link href="/blog" className="uc-btn-secondary">
            Explore other articles
          </Link>
        </div>

        <div className="uc-status">
          <span className="uc-status-dot" />
          <span>Under construction — estimated release: June 2026</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .uc-page {
          min-height: 100vh;
          padding-top: calc(var(--nav-height) + 80px);
          padding-bottom: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-deep);
          color: var(--text-primary);
        }
        .uc-inner {
          max-width: 560px;
          text-align: center;
          padding: 0 2rem;
        }
        .uc-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(200,169,110,0.1), rgba(90,158,120,0.08));
          border: 1px solid rgba(200,169,110,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          color: var(--gold);
        }
        .uc-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 1.5rem;
          font-size: 0.78rem;
          color: var(--text-faint);
        }
        .uc-breadcrumb a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.15s;
        }
        .uc-breadcrumb a:hover {
          color: var(--text-primary);
        }
        .uc-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .uc-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }
        .uc-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .uc-btn-primary {
          padding: 10px 24px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--bg-deep);
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          border-radius: var(--radius);
          text-decoration: none;
          transition: opacity 0.18s, transform 0.18s;
          display: inline-flex;
          align-items: center;
        }
        .uc-btn-primary:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }
        .uc-btn-secondary {
          padding: 10px 24px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: transparent;
          text-decoration: none;
          transition: border-color 0.18s, color 0.18s, background 0.18s;
          display: inline-flex;
          align-items: center;
        }
        .uc-btn-secondary:hover {
          border-color: var(--border-light);
          color: var(--text-primary);
          background: rgba(255,255,255,0.03);
        }
        .uc-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.75rem;
          color: var(--text-faint);
          letter-spacing: 0.04em;
        }
        .uc-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green);
          animation: uc-pulse 2s ease-in-out infinite;
        }
        @keyframes uc-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}} />
    </article>
  );
}