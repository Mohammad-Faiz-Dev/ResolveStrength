export const metadata = { title: "Visual Explainers — ResolveStrength" };

export default function VisualExplainersPage() {
  return (
    <>
      <style>{`
        .section-landing {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
        }
        .section-landing h1 {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        .section-landing p {
          font-size: 1rem;
          color: var(--text-muted);
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.7;
        }
      `}</style>
      <div className="section-landing">
        <div>
          <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>Science · Visual Explainers</div>
          <h1>Visual Explainers</h1>
          <p>
            Complex concepts made clear through illustration.
            Ideal for understanding anatomy, biomechanics, and molecular-level processes.
          </p>
        </div>
      </div>
    </>
  );
}
