export const metadata = { title: "Science — ResolveStrength" };

export default function SciencePage() {
  return (
    <>
      <style>{`
        .science-landing {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
        }
        .science-landing h1 {
          font-family: var(--font-display);
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        .science-landing p {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }
      `}</style>
      <div className="science-landing">
        <div>
          <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>Science</div>
          <h1>The Science Behind Strength</h1>
          <p>
            Explore the physiology, biomechanics, and evidence-based principles
            that drive real results in the gym. No bro-science — just peer-reviewed data.
          </p>
        </div>
      </div>
    </>
  );
}
