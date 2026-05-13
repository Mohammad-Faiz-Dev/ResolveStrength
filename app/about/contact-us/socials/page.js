import SubPage from "@/components/SubPage";

export const metadata = { title: "Socials — ResolveStrength" };

const SOCIALS = [
  { name: "X / Twitter", handle: "@ResolveStrength", url: "https://x.com/resolve_strength", followers: "42K", desc: "Daily research highlights, thread breakdowns of recent studies, and community Q&As with our coaching team." },
  { name: "LinkedIn", handle: "ResolveStrength", url: "https://linkedin.com/company/resolvestrength", followers: "18K", desc: "Professional updates, long-form posts on industry trends, and partnership announcements." },
  { name: "Instagram", handle: "@resolve_strength", url: "https://instagram.com/resolve_strength", followers: "67K", desc: "Visual content, form tutorials, infographics, and behind-the-scenes from our research reviews." },
  { name: "YouTube", handle: "ResolveStrength", url: "https://youtube.com/@resolve_strength", followers: "31K", desc: "In-depth video lectures, exercise technique breakdowns, and monthly research roundtables." },
];

export default function SocialsPage() {
  return (
    <SubPage
      segment="contact-us"
      page="socials"
      eyebrow="Contact Us · Socials"
      title="Find Us Online"
      description="Join 150,000+ practitioners across our channels for daily research, programming tips, and community discussion."
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
        .social-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .social-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .social-followers {
          font-size: 0.75rem;
          color: var(--text-muted);
          background: rgba(255,255,255,0.04);
          padding: 2px 8px;
          border-radius: 20px;
          border: 1px solid var(--border);
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
            <div className="social-header">
              <div className="social-name">{s.name}</div>
              <div className="social-followers">{s.followers} followers</div>
            </div>
            <div className="social-handle">{s.handle}</div>
            <div className="social-desc">{s.desc}</div>
          </a>
        ))}
      </div>
      <p>
        Our social team monitors all channels during business hours. For formal enquiries, please use our{" "}
        <a href="/about/contact-us/contact-form" style={{ color: "var(--accent-gold)" }}>Contact Form</a>{" "}
        or reach us by <a href="/about/contact-us/email" style={{ color: "var(--accent-gold)" }}>email</a>.
      </p>
    </SubPage>
  );
}