export const metadata = { title: "The Anabolic Window — ResolveStrength" };

export default function AnabolicWindowPage() {
  return (
    <>
      <style>{`
        .article-landing {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
        }
        .article-landing h1 {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        .article-landing p {
          font-size: 1rem;
          color: var(--text-muted);
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.7;
        }
      `}</style>
      <div className="article-landing">
        <div>
          <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>Science · Myths &amp; Facts</div>
          <h1>The Anabolic Window</h1>
          <p>
            Examining the evidence behind immediate post-workout nutrition
            versus total daily intake. Is the 30-minute window real or myth?
          </p>
        </div>
      </div>
    </>
  );
}
