"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Science: [
    { label: "Workout Fundamentals", href: "/science/workout-fundamentals", soon: true },
    { label: "Visual Explainers", href: "/science/visual-explainers", soon: true },
    { label: "Myths & Facts", href: "/science/myths-and-facts", soon: true },
  ],
  Articles: [
    { label: "Latest Articles", href: "/articles", soon: true },
    { label: "Research Reviews", href: "/articles/research", soon: true },
    { label: "Training Guides", href: "/articles/guides", soon: true },
  ],
  "Contact Us": [
    { label: "Email", href: "/about/contact-us/email" },
    { label: "Contact Form", href: "/about/contact-us/contact-form" },
    { label: "Socials", href: "/about/contact-us/socials" },
  ],
  Company: [
    { label: "How It Works", href: "/about/company/how-it-works" },
    { label: "Our Mission", href: "/about/company/our-mission" },
    { label: "Disclosure", href: "/about/company/disclosure" },
  ],
  Legal: [
    { label: "Cookies Policy", href: "/about/legal/cookies-policy" },
    { label: "Privacy Policy", href: "/about/legal/privacy-policy" },
    { label: "Terms & Conditions", href: "/about/legal/terms-and-conditions" },
  ],
};

const socials = [
  {
    name: "X / Twitter",
    href: "https://x.com/resolvestrength",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/resolvestrength",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/resolvestrength",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@resolvestrength",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .footer {
          background: var(--bg-surface, #111114);
          border-top: 1px solid var(--border, #2a2a32);
          position: relative;
          overflow: hidden;
        }

        /* Subtle top accent line */
        .footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(200,169,110,0.3) 30%,
            rgba(93,175,132,0.2) 70%,
            transparent 100%
          );
        }

        /* Background texture */
        .footer-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 100% 100% at 50% 0%, black 0%, transparent 75%);
          pointer-events: none;
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ── Top: brand + links ── */
        .footer-top {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 4rem;
          padding: 4rem 0 3rem;
          border-bottom: 1px solid var(--border, #2a2a32);
        }

        /* Brand column */
        .footer-brand {}
        .footer-brand-link {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          text-decoration: none;
          margin-bottom: 1.25rem;
        }

        /* Spherical logo — same construction as Navbar */
        .footer-logo-sphere {
          position: relative;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
        }
        .footer-logo-ring {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          padding: 2.5px;
          background: linear-gradient(135deg, var(--gold, #c8a96e) 0%, var(--green-bright, #5daf84) 100%);
          box-shadow:
            0 0 0 1px rgba(200,169,110,0.15),
            0 3px 16px rgba(200,169,110,0.18),
            inset 0 1px 0 rgba(255,255,255,0.1);
          transition: box-shadow 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .footer-brand-link:hover .footer-logo-ring {
          box-shadow:
            0 0 0 1px rgba(200,169,110,0.28),
            0 5px 22px rgba(200,169,110,0.28),
            inset 0 1px 0 rgba(255,255,255,0.14);
        }
        .footer-logo-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          background: var(--bg-deep, #0a0a0b);
        }
        /* Gloss highlight */
        .footer-logo-inner::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(
            ellipse 55% 45% at 36% 26%,
            rgba(255,255,255,0.22) 0%,
            rgba(255,255,255,0.06) 40%,
            transparent 68%
          );
          pointer-events: none;
          z-index: 2;
        }
        /* Ground glow */
        .footer-logo-sphere::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 6px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(200,169,110,0.36) 0%, transparent 72%);
          filter: blur(3px);
          z-index: 0;
        }

        .footer-brand-name {
          font-family: var(--font-display, 'Playfair Display', serif);
          font-size: 1.2rem;
          font-weight: 400;
          color: var(--text-primary, #f0ede8);
          letter-spacing: -0.01em;
        }
        .footer-brand-name span { color: var(--gold, #c8a96e); }

        .footer-tagline {
          font-size: 0.85rem;
          color: var(--text-muted, #5a5860);
          line-height: 1.7;
          margin-bottom: 1.75rem;
          max-width: 220px;
        }

        /* Socials row */
        .footer-socials {
          display: flex;
          gap: 8px;
        }
        .footer-social-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--bg-card, #16161a);
          border: 1px solid var(--border, #2a2a32);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted, #5a5860);
          text-decoration: none;
          transition: background 0.18s, border-color 0.18s, color 0.18s, transform 0.18s;
        }
        .footer-social-btn:hover {
          background: var(--bg-card-hover, #1c1c22);
          border-color: var(--border-light, #3a3a45);
          color: var(--text-secondary, #9b9799);
          transform: translateY(-2px);
        }

        /* Links grid */
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2rem;
        }
        .footer-col-heading {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold, #c8a96e);
          font-weight: 500;
          margin-bottom: 0.9rem;
        }
        .footer-link-item {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 0.55rem;
        }
        .footer-link {
          font-size: 0.82rem;
          color: var(--text-muted, #5a5860);
          text-decoration: none;
          transition: color 0.15s;
          line-height: 1.4;
        }
        .footer-link:hover {
          color: var(--text-secondary, #9b9799);
        }
        .footer-link.disabled {
          cursor: default;
          pointer-events: none;
        }
        .footer-link.disabled:hover { color: var(--text-muted, #5a5860); }
        .footer-soon-pip {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(90,158,120,0.4);
          border: 1px solid rgba(90,158,120,0.3);
          flex-shrink: 0;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.5rem 0;
          flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 0.78rem;
          color: var(--text-faint, #3a3840);
          line-height: 1.5;
        }
        .footer-copy strong {
          color: var(--text-muted, #5a5860);
          font-weight: 500;
        }
        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .footer-bottom-link {
          font-size: 0.75rem;
          color: var(--text-faint, #3a3840);
          text-decoration: none;
          transition: color 0.15s;
          white-space: nowrap;
        }
        .footer-bottom-link:hover { color: var(--text-muted, #5a5860); }
        .footer-bottom-sep {
          width: 1px;
          height: 12px;
          background: var(--border, #2a2a32);
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-tagline { max-width: 100%; }
          .footer-links-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 600px) {
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}} />

      <footer className="footer">
        <div className="footer-grid-bg" />

        <div className="footer-inner">
          {/* ── Top ── */}
          <div className="footer-top">

            {/* Brand column */}
            <div className="footer-brand">
              <Link href="/" className="footer-brand-link">
                {/* Spherical logo */}
                <div className="footer-logo-sphere">
                  <div className="footer-logo-ring">
                    <div className="footer-logo-inner">
                      <Image
                        src="/images/ResolveStrength/Logo.png"
                        alt="ResolveStrength"
                        fill
                        sizes="35px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
                <span className="footer-brand-name">
                  Resolve<span>Strength</span>
                </span>
              </Link>

              <p className="footer-tagline">
                Science-backed tools and knowledge to build lasting mental and physical resilience.
              </p>

              {/* Socials */}
              <div className="footer-socials">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="footer-social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links grid */}
            <div className="footer-links-grid">
              {Object.entries(footerLinks).map(([section, links]) => (
                <div key={section}>
                  <div className="footer-col-heading">{section}</div>
                  {links.map((link) => (
                    <div key={link.href} className="footer-link-item">
                      {link.soon && <span className="footer-soon-pip" title="Coming soon" />}
                      <Link
                        href={link.soon ? "#" : link.href}
                        className={`footer-link${link.soon ? " disabled" : ""}`}
                        tabIndex={link.soon ? -1 : 0}
                        aria-disabled={link.soon}
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © {year} <strong>ResolveStrength</strong>. All rights reserved.
              &nbsp;Built with evidence, not hype.
            </p>
            <nav className="footer-bottom-links" aria-label="Legal links">
              <Link href="/about/legal/privacy-policy" className="footer-bottom-link">Privacy</Link>
              <span className="footer-bottom-sep" />
              <Link href="/about/legal/terms-and-conditions" className="footer-bottom-link">Terms</Link>
              <span className="footer-bottom-sep" />
              <Link href="/about/legal/cookies-policy" className="footer-bottom-link">Cookies</Link>
              <span className="footer-bottom-sep" />
              <Link href="/about/company/disclosure" className="footer-bottom-link">Disclosure</Link>
            </nav>
          </div>

        </div>
      </footer>
    </>
  );
}
