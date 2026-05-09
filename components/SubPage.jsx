"use client";

import Link from "next/link";

const BREADCRUMB_MAP = {
  "contact-us": "Contact Us",
  company: "Company",
  legal: "Legal",
  email: "Email",
  "contact-form": "Contact Form",
  socials: "Socials",
  "how-it-works": "How ResolveStrength Works",
  "our-mission": "Our Mission",
  disclosure: "Disclosure",
  "cookies-policy": "Cookies Policy",
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms and Conditions",
};

export default function SubPage({ segment, page, eyebrow, title, description, children }) {
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
        .sub-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.75rem;
          transition: color 0.15s, gap 0.15s;
        }
        .sub-back:hover { color: var(--accent-gold); gap: 9px; }
      `}</style>

      <div className="container">
        {/* Breadcrumb */}
        <nav className="sub-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sub-breadcrumb-sep">/</span>
          <span>About</span>
          <span className="sub-breadcrumb-sep">/</span>
          <span>{BREADCRUMB_MAP[segment] || segment}</span>
          <span className="sub-breadcrumb-sep">/</span>
          <span className="sub-breadcrumb-current">{BREADCRUMB_MAP[page] || page}</span>
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
