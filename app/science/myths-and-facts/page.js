export const metadata = { title: "Workout Myths & Facts — ResolveStrength" };

export default function MythsAndFactsPage() {
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
          <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>Science · Myths &amp; Facts</div>
          <h1>Workout Myths &amp; Facts</h1>
          <p>
            Separating evidence from popular fiction.
            Debunking "bro-science" with peer-reviewed data.
          </p>
        </div>
      </div>
    </>
  );
}
