"use client";

import Link from "next/link";

/**
 * BlogPost.jsx — Reusable article layout component
 * Place in: /components/BlogPost.jsx
 *
 * Props:
 *   category     — display name, e.g. "Strength Training"
 *   categorySlug — url slug,     e.g. "strength_trainig"
 *   tag          — small badge,  e.g. "FEATURED"
 *   readTime     — e.g. "8 min"
 *   title        — article headline
 *   subtitle     — optional deck / standfirst
 *   author       — byline name
 *   date         — e.g. "May 2025"
 *   children     — article body JSX; omit → shows "coming soon" placeholder
 */
export default function BlogPost({
  category = "Articles",
  categorySlug = "articles",
  tag = "ARTICLE",
  readTime = "5 min",
  title = "Article Title",
  subtitle = "",
  author = "ResolveStrength Editorial",
  date = "",
  featuredImage = "",
  children,
}) {
  /* derive initials for avatar */
  const initials = author
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <>
      <style>{`
        /* ── Page shell ─────────────────────────────── */
        .bp-page {
          min-height: 100vh;
          background: var(--bg-deep);
          color: var(--text-primary);
        }

        /* ── Hero header ────────────────────────────── */
        .bp-hero {
          position: relative;
          padding: 5rem 0 0;
          overflow: hidden;
        }
        .bp-hero-bg   { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .bp-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); opacity: 0.09;
        }
        .bp-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #c8a96e 0%, transparent 70%);
          top: -150px; right: -100px;
        }
        .bp-orb-2 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, #4a8c6a 0%, transparent 70%);
          bottom: 0; left: -80px;
        }
        .bp-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 100% at 60% 30%, black 0%, transparent 100%);
        }
        .bp-hero-inner {
          position: relative; z-index: 1;
          max-width: 800px; margin: 0 auto;
          padding: 0 2rem 3rem;
        }

        /* breadcrumb */
        .bp-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.78rem; color: var(--text-muted);
          margin-bottom: 2rem; flex-wrap: wrap;
        }
        .bp-breadcrumb a { color: var(--text-muted); text-decoration: none; transition: color 0.15s; }
        .bp-breadcrumb a:hover { color: var(--accent-gold); }
        .bp-breadcrumb-sep { opacity: 0.4; }
        .bp-breadcrumb-current { color: var(--text-secondary); }

        /* meta badges */
        .bp-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .bp-category-badge {
          font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
          font-weight: 600; color: var(--accent-gold);
          background: rgba(200,169,110,0.1); border: 1px solid rgba(200,169,110,0.2);
          padding: 4px 10px; border-radius: 20px;
        }
        .bp-tag {
          font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--text-muted); background: rgba(255,255,255,0.04);
          border: 1px solid var(--border); padding: 4px 10px; border-radius: 20px;
        }
        .bp-dot { width: 3px; height: 3px; background: var(--text-muted); border-radius: 50%; flex-shrink: 0; opacity: 0.5; }
        .bp-read-time { font-size: 0.78rem; color: var(--text-muted); }

        /* title */
        .bp-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700; line-height: 1.12;
          letter-spacing: -0.025em; color: var(--text-primary);
          margin-bottom: 1.1rem;
          animation: bpFadeUp 0.6s ease 0.1s both;
        }
        .bp-subtitle {
          font-size: 1.1rem; color: var(--text-secondary);
          line-height: 1.7; margin-bottom: 2rem; max-width: 680px;
          animation: bpFadeUp 0.6s ease 0.2s both;
        }

        /* byline */
        .bp-byline {
          display: flex; align-items: center; gap: 12px;
          padding: 1rem 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          animation: bpFadeUp 0.6s ease 0.3s both;
        }
        .bp-avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-gold) 0%, #4a8c6a 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.72rem; font-weight: 700; color: var(--bg-deep);
          flex-shrink: 0; letter-spacing: 0.05em;
        }
        .bp-byline-name { font-size: 0.85rem; font-weight: 500; color: var(--text-primary); }
        .bp-byline-date { font-size: 0.78rem; color: var(--text-muted); }

        /* ── Photo placeholder ──────────────────────── */
        .bp-photo-wrap {
          max-width: 900px; margin: 0 auto;
          padding: 0 2rem; position: relative; z-index: 1;
        }
        .bp-photo {
          width: 100%; aspect-ratio: 16 / 7;
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 1rem;
          position: relative; overflow: hidden;
        }
        .bp-photo::before {
          content: '';
          position: absolute; inset: 0;
          background:
            linear-gradient(135deg, rgba(200,169,110,0.04) 0%, transparent 50%),
            repeating-linear-gradient(
              45deg, transparent, transparent 20px,
              rgba(255,255,255,0.012) 20px, rgba(255,255,255,0.012) 21px
            );
        }
        .bp-photo-icon {
          width: 48px; height: 48px; border-radius: 12px;
          border: 1px solid var(--border-light);
          background: var(--bg-surface);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-muted); position: relative; z-index: 1;
        }
        .bp-photo-label {
          font-size: 0.78rem; color: var(--text-muted);
          letter-spacing: 0.06em; text-transform: uppercase;
          position: relative; z-index: 1;
        }
        .bp-photo-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          border-radius: var(--radius-lg);
        }

        /* ── Article body ───────────────────────────── */
        .bp-body-wrap {
          max-width: 800px; margin: 0 auto;
          padding: 4rem 2rem 6rem;
        }
        .bp-prose {
          font-size: 1rem; line-height: 1.85;
          color: var(--text-secondary);
        }
        .bp-prose p  { margin-bottom: 1.6rem; }
        .bp-prose h2 {
          font-family: var(--font-display); font-size: 1.55rem;
          font-weight: 650; color: var(--text-primary);
          letter-spacing: -0.02em; margin: 2.5rem 0 1rem;
          padding-bottom: 0.6rem; border-bottom: 1px solid var(--border);
        }
        .bp-prose h3 {
          font-family: var(--font-display); font-size: 1.15rem;
          font-weight: 600; color: var(--text-primary); margin: 2rem 0 0.75rem;
        }
        .bp-prose ul, .bp-prose ol { padding-left: 1.5rem; margin-bottom: 1.6rem; }
        .bp-prose li { margin-bottom: 0.5rem; }
        .bp-prose strong { color: var(--text-primary); font-weight: 600; }
        .bp-prose em    { color: var(--accent-gold); font-style: italic; }
        .bp-prose blockquote {
          border-left: 3px solid var(--accent-gold);
          padding: 1rem 1.5rem; margin: 2rem 0;
          background: rgba(200,169,110,0.05);
          border-radius: 0 var(--radius) var(--radius) 0;
          font-size: 1.05rem; color: var(--text-primary);
        }
        .bp-prose a {
          color: var(--accent-gold); text-decoration: underline;
          text-decoration-color: rgba(200,169,110,0.35);
          transition: text-decoration-color 0.15s;
        }
        .bp-prose a:hover { text-decoration-color: var(--accent-gold); }
        .bp-prose hr { border: none; border-top: 1px solid var(--border); margin: 2.5rem 0; }

        /* coming-soon placeholder */
        .bp-coming-soon {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-lg); padding: 3rem 2.5rem; text-align: center;
        }
        .bp-coming-soon-icon { font-size: 2.5rem; margin-bottom: 1rem; opacity: 0.6; }
        .bp-coming-soon-title {
          font-family: var(--font-display); font-size: 1.25rem;
          font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;
        }
        .bp-coming-soon-text {
          font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;
          max-width: 380px; margin: 0 auto 1.5rem;
        }
        .bp-back-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.82rem; font-weight: 500; color: var(--accent-gold-dim);
          text-decoration: none; border: 1px solid rgba(200,169,110,0.25);
          padding: 9px 18px; border-radius: 40px;
          transition: color 0.15s, border-color 0.15s;
        }
        .bp-back-link:hover { color: var(--accent-gold); border-color: rgba(200,169,110,0.5); }

        @keyframes bpFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 680px) {
          .bp-hero-inner, .bp-body-wrap { padding-left: 1.25rem; padding-right: 1.25rem; }
          .bp-photo-wrap { padding: 0 1.25rem; }
          .bp-photo { aspect-ratio: 4 / 3; }
        }
      `}</style>

      <div className="bp-page">
        {/* Hero */}
        <div className="bp-hero">
          <div className="bp-hero-bg">
            <div className="bp-orb bp-orb-1" />
            <div className="bp-orb bp-orb-2" />
            <div className="bp-hero-grid" />
          </div>
          <div className="bp-hero-inner">
            <nav className="bp-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="bp-breadcrumb-sep">›</span>
              <Link href="/articles">Articles</Link>
              <span className="bp-breadcrumb-sep">›</span>
              <Link href={`/articles/${categorySlug}`}>{category}</Link>
              <span className="bp-breadcrumb-sep">›</span>
              <span className="bp-breadcrumb-current">{title}</span>
            </nav>

            <div className="bp-meta">
              <span className="bp-category-badge">{category}</span>
              <span className="bp-tag">{tag}</span>
              <span className="bp-dot" />
              <span className="bp-read-time">{readTime} read</span>
            </div>

            <h1 className="bp-title">{title}</h1>
            {subtitle && <p className="bp-subtitle">{subtitle}</p>}

            <div className="bp-byline">
              <div className="bp-avatar">{initials}</div>
              <div>
                <div className="bp-byline-name">{author}</div>
                {date && <div className="bp-byline-date">{date}</div>}
              </div>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="bp-photo-wrap">
          <div className="bp-photo">
            {featuredImage ? (
              <img
                src={featuredImage}
                alt={title}
                className="bp-photo-img"
              />
            ) : (
              <>
                <div className="bp-photo-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="2" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                    <circle cx="8" cy="10" r="1.8" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M2 15l4.5-4 3 3 3.5-4 5 5" stroke="currentColor" strokeWidth="1.3"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="bp-photo-label">Article photo — coming soon</span>
              </>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="bp-body-wrap">
          {children ? (
            <div className="bp-prose">{children}</div>
          ) : (
            <div className="bp-coming-soon">
              <div className="bp-coming-soon-icon">✍️</div>
              <div className="bp-coming-soon-title">Article in progress</div>
              <p className="bp-coming-soon-text">
                This article is being written and will be published soon. Explore
                other articles in the library in the meantime.
              </p>
              <Link href="/articles" className="bp-back-link">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 6H2M6 2l-4 4 4 4" stroke="currentColor" strokeWidth="1.4"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Articles
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}