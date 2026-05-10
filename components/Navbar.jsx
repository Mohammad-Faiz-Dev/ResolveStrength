"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const scienceDropdown = [
  {
    label: "Workout Fundamentals",
    href: "/science/workout-fundamentals",
    desc: "The core principles behind effective training.",
    icon: "◈",
  },
  {
    label: "Visual Explainers",
    href: "/science/visual-explainers",
    desc: "Science concepts made clear through illustration.",
    icon: "⬡",
  },
  {
    label: "Workout Myths & Facts",
    href: "/science/myths-and-facts",
    desc: "Separating evidence from popular fiction.",
    icon: "◎",
  },
];

const aboutDropdown = {
  "Contact Us": [
    { label: "Email", href: "/about/contact-us/email" },
    { label: "Contact Form", href: "/about/contact-us/contact-form" },
    { label: "Socials", href: "/about/contact-us/socials" },
  ],
  Company: [
    { label: "How ResolveStrength Works", href: "/about/company/how-it-works" },
    { label: "Our Mission", href: "/about/company/our-mission" },
    { label: "Disclosure", href: "/about/company/disclosure" },
  ],
  Legal: [
    { label: "Cookies Policy", href: "/about/legal/cookies-policy" },
    { label: "Privacy Policy", href: "/about/legal/privacy-policy" },
    { label: "Terms and Conditions", href: "/about/legal/terms-and-conditions" },
  ],
};

function useDropdown() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const openMenu = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true); };
  const closeMenu = () => { timeoutRef.current = setTimeout(() => setOpen(false), 130); };
  return { open, openMenu, closeMenu, setOpen };
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const science = useDropdown();
  const about = useDropdown();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .navbar.scrolled {
          background: rgba(11,14,13,0.90);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-color: var(--border);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Brand */
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .brand-mark {
          width: 32px; height: 32px;
          background: linear-gradient(135deg, var(--gold) 0%, var(--green-bright) 100%);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display);
          font-weight: 700; font-size: 16px;
          color: var(--bg-deep);
          flex-shrink: 0;
        }
        .brand-mark-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          display: block;
        }
        .brand-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 400;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }
        .brand-name span { color: var(--gold); }

        /* Nav links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.15rem;
          list-style: none;
        }
        .nav-item { position: relative; }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 7px 13px;
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--text-secondary);
          border-radius: var(--radius);
          transition: color 0.18s ease, background 0.18s ease;
          cursor: pointer;
          white-space: nowrap;
          letter-spacing: 0.01em;
          background: none;
          border: none;
          font-family: var(--font-body);
        }
        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.04);
        }
        .nav-link.active {
          color: var(--text-primary);
        }

        /* Soon badge */
        .nav-soon {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 2px 6px;
          border-radius: 20px;
          background: rgba(90,158,120,0.12);
          border: 1px solid rgba(90,158,120,0.22);
          color: var(--green);
        }

        /* Chevron */
        .nav-chevron {
          width: 13px; height: 13px;
          transition: transform 0.22s ease;
          opacity: 0.55;
          flex-shrink: 0;
        }
        .nav-chevron.open { transform: rotate(180deg); }

        /* ── Science dropdown ── */
        .dropdown-science {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px) scale(0.98);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 0.75rem;
          width: 280px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .dropdown-science.open {
          opacity: 1;
          transform: translateX(-50%) translateY(0) scale(1);
          pointer-events: auto;
        }
        .science-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 10px 12px;
          border-radius: var(--radius);
          text-decoration: none;
          transition: background 0.15s;
          cursor: not-allowed;
          opacity: 0.6;
        }
        .science-item:hover {
          background: rgba(255,255,255,0.04);
        }
        .science-item-icon {
          width: 28px; height: 28px;
          border-radius: 7px;
          background: linear-gradient(135deg, rgba(200,169,110,0.12), rgba(90,158,120,0.08));
          border: 1px solid var(--border-gold);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
          color: var(--gold);
          flex-shrink: 0;
        }
        .science-item-body strong {
          display: block;
          font-size: 0.83rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2px;
        }
        .science-item-body span {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        .science-coming-soon-bar {
          margin: 0.5rem 0 0;
          padding: 7px 12px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-faint);
        }
        .science-coming-soon-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--green-dim);
          flex-shrink: 0;
        }

        /* ── About dropdown ── */
        .dropdown-about {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: grid;
          grid-template-columns: repeat(3, 190px);
          gap: 1.25rem;
          box-shadow: 0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03);
          opacity: 0;
          transform: translateY(-8px) scale(0.98);
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .dropdown-about.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .dropdown-col-header {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 0.75rem;
          padding-bottom: 0.6rem;
          border-bottom: 1px solid var(--border);
        }
        .dropdown-link {
          display: block;
          padding: 6px 10px;
          font-size: 0.81rem;
          color: var(--text-secondary);
          border-radius: var(--radius);
          transition: color 0.15s ease, background 0.15s ease;
          margin-bottom: 2px;
          text-decoration: none;
          line-height: 1.4;
        }
        .dropdown-link:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.05);
        }

        /* CTA */
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: 1rem;
        }
        .btn-nav-signin {
          padding: 7px 16px;
          font-size: 0.84rem;
          font-weight: 500;
          color: var(--text-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: transparent;
          transition: border-color 0.18s, color 0.18s, background 0.18s;
          cursor: pointer;
          font-family: var(--font-body);
          white-space: nowrap;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .btn-nav-signin:hover {
          border-color: var(--border-light);
          color: var(--text-primary);
          background: rgba(255,255,255,0.03);
        }
        .btn-nav-join {
          padding: 7px 16px;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--bg-deep);
          border-radius: var(--radius);
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
          cursor: pointer;
          font-family: var(--font-body);
          white-space: nowrap;
          border: none;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .btn-nav-join:hover {
          opacity: 0.88;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(200,169,110,0.25);
        }

        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-cta { margin-left: 0; }
          .dropdown-about { right: -2rem; grid-template-columns: 1fr; width: 220px; }
        }
      `}} />

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          {/* Brand */}
          <Link href="/" className="brand">
            <img
              src="/images/ResolveStrength/Logo.png"
              alt="ResolveStrength"
              className="brand-mark-img"
              width={32}
              height={32}
            />
            <span className="brand-name">Resolve<span>Strength</span></span>
          </Link>

          {/* Nav Links */}
          <ul className="nav-links">
            {/* Science — hover dropdown */}
            <li
              className="nav-item"
              onMouseEnter={science.openMenu}
              onMouseLeave={science.closeMenu}
            >
              <button
                className={`nav-link${science.open ? " active" : ""}`}
                aria-haspopup="true"
                aria-expanded={science.open}
              >
                Science
                <svg
                  className={`nav-chevron${science.open ? " open" : ""}`}
                  viewBox="0 0 16 16" fill="none"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`dropdown-science${science.open ? " open" : ""}`} role="menu">
                {scienceDropdown.map((item) => (
                  <div key={item.href} className="science-item" role="menuitem" title="Coming soon">
                    <div className="science-item-icon">{item.icon}</div>
                    <div className="science-item-body">
                      <strong>{item.label}</strong>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                ))}
                <div className="science-coming-soon-bar">
                  <span className="science-coming-soon-dot" />
                  All sections in development
                </div>
              </div>
            </li>

            {/* Articles — disabled */}
            <li className="nav-item">
              <span className="nav-link" style={{ opacity: 0.55, cursor: "default" }}>
                Articles
                <span className="nav-soon">Soon</span>
              </span>
            </li>

            {/* About — hover dropdown */}
            <li
              className="nav-item"
              onMouseEnter={about.openMenu}
              onMouseLeave={about.closeMenu}
            >
              <button
                className={`nav-link${about.open ? " active" : ""}`}
                aria-haspopup="true"
                aria-expanded={about.open}
              >
                About
                <svg
                  className={`nav-chevron${about.open ? " open" : ""}`}
                  viewBox="0 0 16 16" fill="none"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`dropdown-about${about.open ? " open" : ""}`} role="menu">
                {Object.entries(aboutDropdown).map(([section, links]) => (
                  <div key={section}>
                    <div className="dropdown-col-header">{section}</div>
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="dropdown-link"
                        role="menuitem"
                        onClick={() => about.setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </li>
          </ul>

          {/* CTA */}
          <div className="nav-cta">
            <Link href="/login" className="btn-nav-signin">Sign In</Link>
            <Link href="/login" className="btn-nav-join">Join Free</Link>
          </div>
        </div>
      </nav>
    </>
  );
}