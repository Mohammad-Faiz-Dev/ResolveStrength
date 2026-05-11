export const metadata = { title: "Workout Fundamentals — ResolveStrength" };

export default function WorkoutFundamentalsPage() {
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
          <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>Science · Workout Fundamentals</div>
          <h1>Workout Fundamentals</h1>
          <p>
            Focus on the "how" and "why" of physiological adaptation.
            Master the core principles behind effective training.
          </p>
        </div>
      </div>
    </>
  );
}
