"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// SVG Icons
const Icons = {
  strength: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5l11 11M6.5 17.5l11-11M12 2v4M12 18v4M2 12h4M18 12h4M12 12l-2-2 4-4 4 4-2 2z"/></svg>`,
  cardio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/><path d="M3 12h4l2-3 4 6 2-3h4"/></svg>`,
  yoga: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v5M8 20l2-7M16 20l-2-7M9 12h6"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`,
  recovery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9-9a9 9 0 0 0 9 9"/></svg>`,
  chevronRight: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4l4 4-4 4"/></svg>`,
  chevronDown: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l4 4 4-4"/></svg>`,
  featured: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.47 5 5.53.8-4 3.88.94 5.47L8 13.5l-4.94 2.65.94-5.47-4-3.88 5.53-.8z"/></svg>`,
  arrowRight: `<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 2.5l3 3.5-3 3.5"/></svg>`
};

const scienceDropdown = [
  {
    label: "Workout Fundamentals",
    href: "/science/workout-fundamentals",
    desc: "The core principles behind effective training.",
    icon: "◈",
    sub: [
      {
        label: "Hypertrophy & Mechanics",
        href: "/science/workout-fundamentals/hypertrophy-and-mechanics",
        desc: "How muscles grow and the physics of tension.",
      },
      {
        label: "Progressive Overload",
        href: "/science/workout-fundamentals/progressive-overload",
        desc: "Strategies for consistent improvement.",
      },
      {
        label: "Recovery Science",
        href: "/science/workout-fundamentals/recovery-science",
        desc: "Sleep, protein synthesis & nervous system recovery.",
      },
      {
        label: "Bioenergetics",
        href: "/science/workout-fundamentals/bioenergetics",
        desc: "How the body uses ATP-CP, Glycolytic & Oxidative systems.",
      },
    ],
  },
  {
    label: "Visual Explainers",
    href: "/science/visual-explainers",
    desc: "Science concepts made clear through illustration.",
    icon: "⬡",
    comingSoon: true,
    sub: [
      {
        label: "Muscle Anatomy Maps",
        href: "/science/visual-explainers/muscle-anatomy-maps",
        desc: "Primary & secondary movers for common lifts.",
      },
      {
        label: "Sliding Filament Theory",
        href: "/science/visual-explainers/sliding-filament-theory",
        desc: "How muscle fibers contract at a molecular level.",
      },
      {
        label: "Joint Biomechanics",
        href: "/science/visual-explainers/joint-biomechanics",
        desc: "Leverage & moment arms behind key form cues.",
      },
    ],
  },
  {
    label: "Workout Myths & Facts",
    href: "/science/myths-and-facts",
    desc: "Separating evidence from popular fiction.",
    icon: "◎",
    sub: [
      {
        label: "The Anabolic Window",
        href: "/science/myths-and-facts/anabolic-window",
        desc: "Post-workout nutrition vs. total daily intake.",
      },
      {
        label: "Spot Reduction & Fat Loss",
        href: "/science/myths-and-facts/spot-reduction-and-fat-loss",
        desc: "Debunking 'burning belly fat' through specific exercises.",
      },
    ],
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

// Articles dropdown with sub-items (blogs per section)
const articlesDropdown = [
  {
    label: "Strength Training",
    href: "/blog/strength-training",
    desc: "Build raw power and structural resilience through science-backed programming.",
    icon: Icons.strength,
    sub: [
      { label: "Forge", href: "/blog/strength-training/forge", featured: true },
      { label: "Iron Core", href: "/blog/strength-training/iron-core" },
      { label: "Strength Protocol", href: "/blog/strength-training/strength-protocol" },
      { label: "Raw Power", href: "/blog/strength-training/raw-power" },
      { label: "Structural Edge", href: "/blog/strength-training/structural-edge" },
    ],
  },
  {
    label: "Cardio & Endurance",
    href: "/blog/cardio",
    desc: "Expand your aerobic ceiling with evidence-based endurance training.",
    icon: Icons.cardio,
    sub: [
      { label: "Endurance Edge", href: "/blog/cardio/endurance-edge", featured: true },
      { label: "Aerobic Forge", href: "/blog/cardio/aerobic-forge" },
      { label: "Distance Protocol", href: "/blog/cardio/distance-protocol" },
      { label: "Stamina Lab", href: "/blog/cardio/stamina-lab" },
      { label: "Engine Room", href: "/blog/cardio/engine-room" },
    ],
  },
  {
    label: "Yoga & Mobility",
    href: "/blog/yoga-mobility",
    desc: "Unlock joint freedom and body awareness through movement practice.",
    icon: Icons.yoga,
    sub: [
      { label: "Mobility Lab", href: "/blog/yoga-mobility/mobility-lab", featured: true },
      { label: "Flow State", href: "/blog/yoga-mobility/flow-state" },
      { label: "Joint Intelligence", href: "/blog/yoga-mobility/joint-intelligence" },
      { label: "Movement Mastery", href: "/blog/yoga-mobility/movement-mastery" },
      { label: "Flex Protocol", href: "/blog/yoga-mobility/flex-protocol" },
    ],
  },
  {
    label: "Home Workouts",
    href: "/blog/home-workouts",
    desc: "Full-body programming designed for any space with minimal equipment.",
    icon: Icons.home,
    sub: [
      { label: "Home Ground", href: "/blog/home-workouts/home-ground", featured: true },
      { label: "Minimal Forge", href: "/blog/home-workouts/minimal-forge" },
      { label: "Space Protocol", href: "/blog/home-workouts/space-protocol" },
      { label: "No Gym Required", href: "/blog/home-workouts/no-gym-required" },
      { label: "Anywhere Strong", href: "/blog/home-workouts/anywhere-strong" },
    ],
  },
  {
    label: "Recovery & Wellness",
    href: "/blog/recovery-wellness",
    desc: "Supercharge adaptation with sleep science and regenerative practice.",
    icon: Icons.recovery,
    sub: [
      { label: "Recovery Protocol", href: "/blog/recovery-wellness/recovery-protocol", featured: true },
      { label: "Regenerate", href: "/blog/recovery-wellness/regenerate" },
      { label: "Rest & Adapt", href: "/blog/recovery-wellness/rest-and-adapt" },
      { label: "Wellness Core", href: "/blog/recovery-wellness/wellness-core" },
      { label: "Rebuild", href: "/blog/recovery-wellness/rebuild" },
    ],
  },
];

function useDropdown() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 130);
  };
  return { open, openMenu, closeMenu, setOpen };
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredScienceIdx, setHoveredScienceIdx] = useState(null);
  const [hoveredArticleIdx, setHoveredArticleIdx] = useState(null);
  const scienceSubTimeoutRef = useRef(null);
  const articleSubTimeoutRef = useRef(null);
  const science = useDropdown();
  const about = useDropdown();
  const articles = useDropdown();

  const openScienceSub = (idx) => {
    if (scienceSubTimeoutRef.current) clearTimeout(scienceSubTimeoutRef.current);
    setHoveredScienceIdx(idx);
  };
  const closeScienceSub = () => {
    scienceSubTimeoutRef.current = setTimeout(() => setHoveredScienceIdx(null), 100);
  };

  const openArticleSub = (idx) => {
    if (articleSubTimeoutRef.current) clearTimeout(articleSubTimeoutRef.current);
    setHoveredArticleIdx(idx);
  };
  const closeArticleSub = () => {
    articleSubTimeoutRef.current = setTimeout(() => setHoveredArticleIdx(null), 100);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
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
        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
          background: rgba(255,255,255,0.04);
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

        /* ── Science dropdown (L1) ── */
        .dropdown-science {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px) scale(0.98);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 0.75rem;
          width: 290px;
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

        /* Science item row (L1) */
        .science-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 10px 12px;
          border-radius: var(--radius);
          text-decoration: none;
          transition: background 0.15s;
          cursor: pointer;
          position: relative;
        }
        .science-item.coming-soon {
          cursor: default;
          opacity: 0.55;
        }
        .science-item.coming-soon .science-item-body strong::after {
          content: 'SOON';
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.07em;
          padding: 1px 5px;
          border-radius: 20px;
          background: rgba(90,158,120,0.12);
          border: 1px solid rgba(90,158,120,0.22);
          color: var(--green);
          margin-left: 8px;
          vertical-align: middle;
        }
        .science-item:hover {
          background: rgba(255,255,255,0.05);
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
          margin-top: 1px;
        }
        .science-item-body {
          flex: 1;
          min-width: 0;
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
        /* Right chevron for sub-hover */
        .science-item-arrow {
          width: 12px; height: 12px;
          opacity: 0.3;
          flex-shrink: 0;
          margin-top: 4px;
          transition: opacity 0.15s, transform 0.15s;
        }
        .science-item:hover .science-item-arrow {
          opacity: 0.75;
          transform: translateX(2px);
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

        /* ── Science sub-dropdown (L2 flyout) ── */
        .dropdown-science-sub {
          position: absolute;
          top: 0;
          left: calc(100% + 8px);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 0.6rem;
          width: 270px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03);
          opacity: 0;
          transform: translateX(-6px) scale(0.97);
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
          z-index: 10;
        }
        .dropdown-science-sub.open {
          opacity: 1;
          transform: translateX(0) scale(1);
          pointer-events: auto;
        }
        .science-sub-item {
          display: block;
          padding: 9px 11px;
          border-radius: var(--radius);
          text-decoration: none;
          transition: background 0.14s, transform 0.14s;
          cursor: pointer;
        }
        .science-sub-item:hover {
          background: rgba(255,255,255,0.05);
          transform: translateX(2px);
        }
        .science-sub-item.disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }
        .science-sub-item.disabled:hover {
          transform: none;
        }
        .science-sub-item-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2px;
        }
        .science-sub-item-desc {
          font-size: 0.72rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        .science-sub-header {
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          padding: 4px 11px 8px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 4px;
        }

        /* ── Articles dropdown ── */
        .dropdown-articles {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px) scale(0.98);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 0.75rem;
          width: 320px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .dropdown-articles.open {
          opacity: 1;
          transform: translateX(-50%) translateY(0) scale(1);
          pointer-events: auto;
        }
        .articles-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 10px 12px;
          border-radius: var(--radius);
          text-decoration: none;
          transition: background 0.15s;
          cursor: pointer;
          position: relative;
        }
        .articles-item:hover {
          background: rgba(255,255,255,0.05);
        }
        .articles-item-icon {
          width: 28px; height: 28px;
          border-radius: 7px;
          background: linear-gradient(135deg, rgba(200,169,110,0.12), rgba(90,158,120,0.08));
          border: 1px solid var(--border-gold);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          color: var(--gold);
        }
        .articles-item-icon svg {
          width: 16px;
          height: 16px;
        }
        .articles-item-body {
          flex: 1;
          min-width: 0;
        }
        .articles-item-body strong {
          display: block;
          font-size: 0.83rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2px;
        }
        .articles-item-body span {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        /* Right arrow for sub-hover */
        .articles-item-arrow {
          width: 12px; height: 12px;
          opacity: 0.3;
          flex-shrink: 0;
          margin-top: 4px;
          transition: opacity 0.15s, transform 0.15s;
          color: var(--text-muted);
        }
        .articles-item:hover .articles-item-arrow {
          opacity: 0.75;
          transform: translateX(2px);
        }

        /* ── Articles sub-dropdown (L2 flyout) ── */
        .dropdown-articles-sub {
          position: absolute;
          top: 0;
          left: calc(100% + 8px);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 0.6rem;
          width: 240px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03);
          opacity: 0;
          transform: translateX(-6px) scale(0.97);
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
          z-index: 10;
        }
        .dropdown-articles-sub.open {
          opacity: 1;
          transform: translateX(0) scale(1);
          pointer-events: auto;
        }
        .articles-sub-header {
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          padding: 4px 11px 8px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .articles-sub-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 11px;
          border-radius: var(--radius);
          text-decoration: none;
          transition: background 0.14s, transform 0.14s;
          cursor: pointer;
        }
        .articles-sub-item:hover {
          background: rgba(255,255,255,0.05);
          transform: translateX(2px);
        }
        .articles-sub-item-icon {
          width: 14px;
          height: 14px;
          color: var(--gold);
          flex-shrink: 0;
          opacity: 0;
          transition: opacity 0.15s;
        }
        .articles-sub-item.featured .articles-sub-item-icon {
          opacity: 1;
        }
        .articles-sub-item:hover .articles-sub-item-icon {
          opacity: 1;
        }
        .articles-sub-item-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-primary);
          flex: 1;
        }
        .articles-sub-item.featured .articles-sub-item-label {
          font-weight: 600;
        }
        .featured-badge {
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 2px 5px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(200,169,110,0.2), rgba(200,169,110,0.1));
          border: 1px solid rgba(200,169,110,0.3);
          color: var(--gold);
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
          .dropdown-articles { left: auto; right: -1rem; transform: translateY(-6px) scale(0.98); }
          .dropdown-articles.open { transform: translateY(0) scale(1); }
          .dropdown-articles-sub { left: auto; right: calc(100% + 8px); }
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
            {/* Science — hover dropdown with L2 flyouts */}
            <li
              className="nav-item"
              onMouseEnter={science.openMenu}
              onMouseLeave={() => { science.closeMenu(); closeScienceSub(); }}
            >
              <button
                className={`nav-link${science.open ? " active" : ""}`}
                aria-haspopup="true"
                aria-expanded={science.open}
              >
                Science
                <svg className={`nav-chevron${science.open ? " open" : ""}`} viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className={`dropdown-science${science.open ? " open" : ""}`} role="menu">
                {scienceDropdown.map((item, idx) => (
                  <div
                    key={item.href}
                    className={`science-item${item.comingSoon ? " coming-soon" : ""}`}
                    role="menuitem"
                    onMouseEnter={() => openScienceSub(idx)}
                    onMouseLeave={closeScienceSub}
                  >
                    <div className="science-item-icon">{item.icon}</div>
                    <div className="science-item-body">
                      <strong>{item.label}</strong>
                      <span>{item.desc}</span>
                    </div>
                    <svg className="science-item-arrow" viewBox="0 0 12 12" fill="none">
                      <path d="M4.5 2.5l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    {/* L2 sub-dropdown flyout */}
                    <div
                      className={`dropdown-science-sub${hoveredScienceIdx === idx ? " open" : ""}`}
                      onMouseEnter={() => openScienceSub(idx)}
                      onMouseLeave={closeScienceSub}
                    >
                      <div className="science-sub-header">{item.label}{item.comingSoon ? " · Coming Soon" : ""}</div>
                      {item.sub.map((sub) => (
                        item.comingSoon ? (
                          <div key={sub.href} className="science-sub-item disabled" title="Coming soon">
                            <div className="science-sub-item-label">{sub.label}</div>
                            <div className="science-sub-item-desc">{sub.desc}</div>
                          </div>
                        ) : (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="science-sub-item"
                            onClick={() => { science.setOpen(false); setHoveredScienceIdx(null); }}
                          >
                            <div className="science-sub-item-label">{sub.label}</div>
                            <div className="science-sub-item-desc">{sub.desc}</div>
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                ))}
                <div className="science-coming-soon-bar">
                  <span className="science-coming-soon-dot" />
                  Visual Explainers in development
                </div>
              </div>
            </li>

            {/* Articles — hover dropdown with L2 sub flyouts */}
            <li
              className="nav-item"
              onMouseEnter={articles.openMenu}
              onMouseLeave={() => { articles.closeMenu(); closeArticleSub(); }}
            >
              <button
                className={`nav-link${articles.open ? " active" : ""}`}
                aria-haspopup="true"
                aria-expanded={articles.open}
              >
                Articles
                <svg className={`nav-chevron${articles.open ? " open" : ""}`} viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className={`dropdown-articles${articles.open ? " open" : ""}`} role="menu">
                {articlesDropdown.map((item, idx) => (
                  <div
                    key={item.href}
                    className="articles-item"
                    role="menuitem"
                    onMouseEnter={() => openArticleSub(idx)}
                    onMouseLeave={closeArticleSub}
                  >
                    <div className="articles-item-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                    <div className="articles-item-body">
                      <strong>{item.label}</strong>
                      <span>{item.desc}</span>
                    </div>
                    <svg className="articles-item-arrow" viewBox="0 0 12 12" fill="none" dangerouslySetInnerHTML={{ __html: Icons.arrowRight }} />

                    {/* L2 sub-dropdown flyout with blogs */}
                    <div
                      className={`dropdown-articles-sub${hoveredArticleIdx === idx ? " open" : ""}`}
                      onMouseEnter={() => openArticleSub(idx)}
                      onMouseLeave={closeArticleSub}
                    >
                      <div className="articles-sub-header">
                        {item.label}
                      </div>
                      {item.sub.map((blog) => (
                        <Link
                          key={blog.href}
                          href={blog.href}
                          className={`articles-sub-item${blog.featured ? " featured" : ""}`}
                          onClick={() => { articles.setOpen(false); setHoveredArticleIdx(null); }}
                        >
                          <svg className="articles-sub-item-icon" viewBox="0 0 16 16" fill="currentColor" dangerouslySetInnerHTML={{ __html: Icons.featured }} />
                          <span className="articles-sub-item-label">{blog.label}</span>
                          {blog.featured && <span className="featured-badge">Featured</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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
                <svg className={`nav-chevron${about.open ? " open" : ""}`} viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
            <Link href="/login" className="btn-nav-signin">Log In</Link>
            <Link href="/login" className="btn-nav-join">Join Free</Link>
          </div>
        </div>
      </nav>
    </>
  );
}