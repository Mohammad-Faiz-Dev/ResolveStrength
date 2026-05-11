export const metadata = { title: "Muscle Anatomy Maps — ResolveStrength" };

export default function MuscleAnatomyMapsPage() {
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
          <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>Science · Visual Explainers</div>
          <h1>Muscle Anatomy Maps</h1>
          <p>
            Interactive and static visuals showing primary and secondary movers
            for common lifts. Know exactly which muscles you're targeting.
          </p>
        </div>
      </div>
    </>
  );
}
