"use client";

const SAMPLE_ARTICLES = [
  {
    id: 1,
    category: "Science",
    title: "The Neurochemistry of Resilience: What Happens in Your Brain Under Stress",
    excerpt:
      "New research reveals how repeated exposure to controlled stressors reshapes neural pathways, building a biological foundation for long-term psychological durability.",
    readTime: "7 min",
    tag: "Neuroscience",
  },
  {
    id: 2,
    category: "Practice",
    title: "Progressive Overload for the Mind: A Systematic Approach to Mental Toughness",
    excerpt:
      "The same principles that build physical strength—progressive challenge, recovery, adaptation—apply with remarkable precision to cognitive and emotional training.",
    readTime: "5 min",
    tag: "Training",
  },
  {
    id: 3,
    category: "Research",
    title: "Cold Exposure & Cortisol: Parsing the Evidence on Hormetic Stress",
    excerpt:
      "We review 14 peer-reviewed studies on deliberate cold exposure to separate robust findings from popular mythology. The results are more nuanced than the headlines suggest.",
    readTime: "9 min",
    tag: "Research Review",
  },
];

export default function ArticleSection() {
  return (
    <>
      <style>{`
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
        .articles-header-left {}
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
        .articles-cta-note {
          font-size: 0.82rem;
          color: var(--text-muted);
          text-align: right;
          max-width: 200px;
          line-height: 1.5;
          border-left: 2px solid var(--border);
          padding-left: 1rem;
          flex-shrink: 0;
        }
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .article-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          transition: border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
          cursor: default;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
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
        .article-card:hover::after {
          opacity: 1;
        }
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
          width: 3px;
          height: 3px;
          background: var(--text-muted);
          border-radius: 50%;
          flex-shrink: 0;
        }
        .article-read-time {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
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
        .article-coming-soon {
          font-size: 10px;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        /* Bottom CTA banner */
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
        .banner-text {}
        .banner-title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }
        .banner-sub {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-gold-dim);
          background: rgba(200,169,110,0.1);
          border: 1px solid rgba(200,169,110,0.2);
          border-radius: 20px;
          padding: 6px 14px;
          flex-shrink: 0;
          white-space: nowrap;
        }

        @media (max-width: 860px) {
          .articles-grid { grid-template-columns: 1fr; }
          .articles-header { flex-direction: column; align-items: flex-start; }
          .articles-cta-note { text-align: left; border-left: none; border-top: 1px solid var(--border); padding: 1rem 0 0; max-width: unset; }
          .articles-banner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section className="articles-section">
        <div className="container">
          <div className="articles-header">
            <div className="articles-header-left">
              <div className="articles-eyebrow">From the library</div>
              <h2 className="articles-title">
                Evidence-based reading<br />for serious practitioners
              </h2>
            </div>
            <div className="articles-cta-note">
              Full article library launching soon. Sign up to get early access.
            </div>
          </div>

          <div className="articles-grid">
            {SAMPLE_ARTICLES.map((article) => (
              <div key={article.id} className="article-card">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="article-meta-dot" />
                  <span className="article-read-time">{article.readTime} read</span>
                  <span className="article-tag">{article.tag}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-footer">
                  <span className="article-read-link">
                    Read article
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="article-coming-soon">Coming soon</span>
                </div>
              </div>
            ))}
          </div>

          <div className="articles-banner">
            <div className="banner-text">
              <div className="banner-title">Articles section is under active development.</div>
              <div className="banner-sub">
                We're curating peer-reviewed research and writing accessible breakdowns. Join the waitlist to be first in.
              </div>
            </div>
            <span className="banner-badge">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="3" fill="currentColor" opacity="0.6"/>
                <circle cx="5" cy="5" r="5" stroke="currentColor" opacity="0.2"/>
              </svg>
              In Development
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
