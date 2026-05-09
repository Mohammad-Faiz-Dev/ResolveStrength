"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

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

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAboutOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setAboutOpen(false), 120);
  };

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .navbar.scrolled {
          background: rgba(10, 10, 11, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
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
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .brand-mark {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-green-bright) 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 16px;
          color: var(--bg-deep);
          letter-spacing: -0.02em;
          flex-shrink: 0;
        }
        .brand-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }
        .brand-name span {
          color: var(--accent-gold);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }
        .nav-item {
          position: relative;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--text-secondary);
          border-radius: var(--radius);
          transition: color 0.18s ease, background 0.18s ease;
          cursor: pointer;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.04);
        }
        .nav-link.disabled {
          cursor: default;
          opacity: 0.6;
        }
        .nav-link.disabled:hover {
          background: none;
          color: var(--text-secondary);
        }
        .nav-chevron {
          width: 14px;
          height: 14px;
          transition: transform 0.22s ease;
          opacity: 0.6;
        }
        .nav-chevron.open {
          transform: rotate(180deg);
        }
        /* Dropdown */
        .dropdown-overlay {
          position: fixed;
          inset: 0;
          z-index: 98;
          pointer-events: none;
        }
        .dropdown-overlay.open {
          pointer-events: auto;
        }
        .dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: grid;
          grid-template-columns: repeat(3, 200px);
          gap: 1.25rem;
          min-width: 640px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03);
          opacity: 0;
          transform: translateY(-8px) scale(0.98);
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .dropdown.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .dropdown-col-header {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold);
          font-weight: 500;
          margin-bottom: 0.75rem;
          padding-bottom: 0.6rem;
          border-bottom: 1px solid var(--border);
        }
        .dropdown-link {
          display: block;
          padding: 7px 10px;
          font-size: 0.82rem;
          color: var(--text-secondary);
          border-radius: var(--radius);
          transition: color 0.15s ease, background 0.15s ease;
          margin-bottom: 2px;
          line-height: 1.4;
        }
        .dropdown-link:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.05);
        }
        /* CTA button */
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-left: 1rem;
        }
        .btn-nav-signin {
          padding: 8px 18px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          background: transparent;
          transition: border-color 0.18s, background 0.18s;
          cursor: pointer;
          font-family: var(--font-body);
          white-space: nowrap;
        }
        .btn-nav-signin:hover {
          border-color: var(--text-muted);
          background: rgba(255,255,255,0.04);
        }
        .btn-nav-join {
          padding: 8px 18px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--bg-deep);
          border-radius: var(--radius);
          background: linear-gradient(135deg, var(--accent-gold) 0%, #d4b97e 100%);
          transition: opacity 0.18s, transform 0.18s;
          cursor: pointer;
          font-family: var(--font-body);
          white-space: nowrap;
          border: none;
        }
        .btn-nav-join:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }
        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-cta { margin-left: 0; }
          .dropdown { right: -2rem; min-width: unset; grid-template-columns: 1fr; width: 220px; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          {/* Brand */}
          <Link href="/" className="brand">
            <div className="brand-mark">R</div>
            <span className="brand-name">
              Resolve<span>Strength</span>
            </span>
          </Link>

          {/* Nav Links */}
          <ul className="nav-links">
            <li className="nav-item">
              <span className="nav-link disabled">
                Science
                <span className="badge-construction">Soon</span>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled">
                Articles
                <span className="badge-construction">Soon</span>
              </span>
            </li>

            {/* About with hover dropdown */}
            <li
              className="nav-item"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button className="nav-link" aria-haspopup="true" aria-expanded={aboutOpen}>
                About
                <svg
                  className={`nav-chevron${aboutOpen ? " open" : ""}`}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className={`dropdown${aboutOpen ? " open" : ""}`} role="menu">
                {Object.entries(aboutDropdown).map(([section, links]) => (
                  <div key={section}>
                    <div className="dropdown-col-header">{section}</div>
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="dropdown-link"
                        role="menuitem"
                        onClick={() => setAboutOpen(false)}
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
            <button className="btn-nav-signin" onClick={() => {}}>Sign In</button>
            <button className="btn-nav-join" onClick={() => {}}>Join Free</button>
          </div>
        </div>
      </nav>
    </>
  );
}
