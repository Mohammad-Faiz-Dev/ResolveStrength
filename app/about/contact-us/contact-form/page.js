"use client";

import SubPage from "@/components/SubPage";
import { useState } from "react";

export default function ContactFormPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SubPage
      segment="contact-us"
      page="contact-form"
      eyebrow="Contact Us · Form"
      title="Send Us a Message"
      description="Use the form below and we'll get back to you as soon as we can — usually within 48 hours."
    >
      <style>{`
        .contact-form-wrap {
          max-width: 560px;
        }
        .cf-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 1.25rem;
        }
        .cf-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        .cf-input, .cf-textarea {
          padding: 11px 14px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--text-primary);
          font-size: 0.9rem;
          font-family: var(--font-body);
          transition: border-color 0.18s, box-shadow 0.18s;
          outline: none;
          width: 100%;
        }
        .cf-input:focus, .cf-textarea:focus {
          border-color: var(--accent-gold-dim);
          box-shadow: 0 0 0 3px rgba(200,169,110,0.1);
        }
        .cf-input::placeholder, .cf-textarea::placeholder { color: var(--text-muted); }
        .cf-textarea { resize: vertical; min-height: 140px; line-height: 1.6; }
        .cf-submit {
          padding: 12px 28px;
          background: linear-gradient(135deg, var(--accent-gold) 0%, #d4b97e 100%);
          color: var(--bg-deep);
          border: none;
          border-radius: var(--radius);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: opacity 0.18s, transform 0.18s;
        }
        .cf-submit:hover { opacity: 0.88; transform: translateY(-1px); }
        .cf-success {
          padding: 1.25rem 1.5rem;
          background: rgba(74,140,106,0.1);
          border: 1px solid rgba(74,140,106,0.25);
          border-radius: var(--radius);
          color: var(--accent-green-bright);
          font-size: 0.9rem;
          line-height: 1.6;
        }
      `}</style>

      <div className="contact-form-wrap">
        {sent ? (
          <div className="cf-success">
            ✓ Message sent! We'll be in touch within 48 hours. Thank you for reaching out.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className="cf-row">
                <label className="cf-label">Your Name</label>
                <input className="cf-input" type="text" placeholder="Jane Smith" required
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="cf-row">
                <label className="cf-label">Email Address</label>
                <input className="cf-input" type="email" placeholder="you@example.com" required
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div className="cf-row">
              <label className="cf-label">Subject</label>
              <input className="cf-input" type="text" placeholder="What's this about?" required
                value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
            </div>
            <div className="cf-row">
              <label className="cf-label">Message</label>
              <textarea className="cf-textarea" placeholder="Tell us more…" required
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            </div>
            <button className="cf-submit" type="submit">Send Message →</button>
          </form>
        )}
      </div>
    </SubPage>
  );
}
