import SubPage from "@/components/SubPage";

export const metadata = { title: "Socials — ResolveStrength" };

const SOCIALS = [
  { name: "X / Twitter", handle: "@ResolveStrength", url: "https://x.com/resolvestrength", desc: "Daily insights, research highlights, and community discussions." },
  { name: "Instagram", handle: "@resolvestrength", url: "https://instagram.com/resolvestrength", desc: "Visual content, infographics, and behind-the-scenes of our research process." },
  { name: "LinkedIn", handle: "ResolveStrength", url: "https://linkedin.com/company/resolvestrength", desc: "Professional updates, long-form posts, and partnership announcements." },
  { name: "YouTube", handle: "ResolveStrength", url: "https://youtube.com/@resolvestrength", desc: "In-depth video breakdowns of the science behind strength and resilience." },
];

export default function SocialsPage() {
  return (
    <SubPage
      segment="contact-us"
      page="socials"
      eyebrow="Contact Us · Socials"
      title="Find Us Online"
      description="Follow along for daily research, community highlights, and updates on what we're building."
    >
      <style>{`
        .socials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .social-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          transition: border-color 0.18s, transform 0.18s;
          text-decoration: none;
          display: block;
        }
        .social-card:hover {
          border-color: var(--accent-gold-dim);
          transform: translateY(-2px);
        }
        .social-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .social-handle {
          font-size: 0.8rem;
          color: var(--accent-gold);
          margin-bottom: 0.75rem;
        }
        .social-desc {
          font-size: 0.83rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 600px) { .socials-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="socials-grid">
        {SOCIALS.map(s => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="social-card">
            <div className="social-name">{s.name}</div>
            <div className="social-handle">{s.handle}</div>
            <div className="social-desc">{s.desc}</div>
          </a>
        ))}
      </div>
      <p>
        We monitor our social channels regularly. For formal enquiries, please use our{" "}
        <a href="/about/contact-us/contact-form" style={{ color: "var(--accent-gold)" }}>Contact Form</a>{" "}
        or send us an <a href="/about/contact-us/email" style={{ color: "var(--accent-gold)" }}>email</a>.
      </p>
    </SubPage>
  );
}
