"use client";

import Link from "next/link";

const BREADCRUMB_MAP = {
  "workout-fundamentals": "Workout Fundamentals",
  "visual-explainers": "Visual Explainers",
  "myths-and-facts": "Myths & Facts",
  "hypertrophy-and-mechanics": "Hypertrophy & Mechanics",
  "progressive-overload": "Progressive Overload",
  "recovery-science": "Recovery Science",
  "bioenergetics": "Bioenergetics",
  "muscle-anatomy-maps": "Muscle Anatomy Maps",
  "sliding-filament-theory": "Sliding Filament Theory",
  "joint-biomechanics": "Joint Biomechanics",
  "anabolic-window": "Anabolic Window",
  "spot-reduction-and-fat-loss": "Spot Reduction & Fat Loss",
};

export default function SciencePage({ segment, page, eyebrow, title, description, children }) {
  return (
    <>
      <style>{`
        .sub-breadcrumb {
          padding: 1.5rem 0 0;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }
        .sub-breadcrumb a {
          color: var(--text-muted);
          transition: color 0.15s;
        }
        .sub-breadcrumb a:hover { color: var(--text-secondary); }
        .sub-breadcrumb-sep {
          opacity: 0.4;
        }
        .sub-breadcrumb-current {
          color: var(--text-secondary);
        }
      `}</style>

      <div className="container">
        {/* Breadcrumb */}
        <nav className="sub-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sub-breadcrumb-sep">/</span>
          <Link href="/science">Science</Link>
          {segment && (
            <>
              <span className="sub-breadcrumb-sep">/</span>
              <Link href={`/science/${segment}`}>{BREADCRUMB_MAP[segment] || segment}</Link>
            </>
          )}
          {page && (
            <>
              <span className="sub-breadcrumb-sep">/</span>
              <span className="sub-breadcrumb-current">{BREADCRUMB_MAP[page] || page}</span>
            </>
          )}
        </nav>
      </div>

      <div className="subpage-hero">
        <div className="container">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      <div className="subpage-body">
        <div className="container">{children}</div>
      </div>
    </>
  );
}
