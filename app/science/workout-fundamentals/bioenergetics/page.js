export const metadata = { title: "Bioenergetics — ResolveStrength" };

export default function BioenergeticsPage() {
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
          <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>Science · Workout Fundamentals</div>
          <h1>Bioenergetics</h1>
          <p>
            How the body uses different energy systems — ATP-CP, Glycolytic, and Oxidative —
            during exercise. Understand the fuel behind every rep.
          </p>
        </div>
      </div>
    </>
  );
}
