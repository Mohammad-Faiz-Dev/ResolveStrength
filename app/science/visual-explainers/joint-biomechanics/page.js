export const metadata = { title: "Joint Biomechanics — ResolveStrength" };

export default function JointBiomechanicsPage() {
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
          <h1>Joint Biomechanics</h1>
          <p>
            Diagrams illustrating leverage and moment arms to explain why certain
            form cues matter. Understand the physics behind proper technique.
          </p>
        </div>
      </div>
    </>
  );
}
