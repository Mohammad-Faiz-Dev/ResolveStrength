export const metadata = { title: "Spot Reduction & Fat Loss — ResolveStrength" };

export default function SpotReductionAndFatLossPage() {
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
          <h1>Spot Reduction &amp; Fat Loss</h1>
          <p>
            Using metabolic science to address the myth of "burning belly fat"
            through specific exercises. Understanding how fat loss actually works.
          </p>
        </div>
      </div>
    </>
  );
}
