"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleAuth = () => {
    setIsLoading(true);
    signIn("google", { callbackUrl: "/dashboard" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/dashboard",
    });

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
      setIsLoading(false);
    } else if (result?.ok) {
      router.push("/dashboard");
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .auth-page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--bg-deep);
        }
        .auth-brand-panel {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 3rem;
          background: var(--bg-surface);
          border-right: 1px solid var(--border);
          overflow: hidden;
        }
        .auth-brand-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 90% 70% at 10% 15%, rgba(200,169,110,0.1) 0%, transparent 60%),
            radial-gradient(ellipse 70% 60% at 85% 85%, rgba(90,158,120,0.1) 0%, transparent 55%);
          pointer-events: none;
        }
        .auth-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; position: relative; z-index: 1;
        }
        .auth-logo-mark {
          width: 36px; height: 36px;
          background: linear-gradient(135deg, var(--gold) 0%, var(--green-bright) 100%);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-weight: 700; font-size: 18px;
          color: var(--bg-deep);
        }
        .auth-logo-name { font-family: var(--font-display); font-size: 1.2rem; color: var(--text-primary); }
        .auth-logo-name span { color: var(--gold); }
        .auth-brand-body { position: relative; z-index: 1; }
        .auth-brand-eyebrow {
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--green); font-weight: 500; margin-bottom: 1rem;
        }
        .auth-brand-headline {
          font-family: var(--font-display);
          font-size: clamp(1.9rem, 3vw, 2.7rem);
          color: var(--text-primary); line-height: 1.2;
          margin-bottom: 1rem; font-weight: 400;
        }
        .auth-brand-headline em { font-style: italic; color: var(--gold); }
        .auth-brand-desc { font-size: 0.9rem; color: var(--text-muted); line-height: 1.75; max-width: 370px; }
        .auth-pillars { display: flex; flex-direction: column; gap: 0.85rem; position: relative; z-index: 1; }
        .auth-pillar {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 1rem 1.2rem;
          background: rgba(255,255,255,0.025);
          border: 1px solid var(--border); border-radius: var(--radius-lg);
        }
        .auth-pillar-icon {
          width: 30px; height: 30px; border-radius: 7px;
          background: linear-gradient(135deg, rgba(200,169,110,0.14), rgba(90,158,120,0.08));
          border: 1px solid var(--border-gold);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; color: var(--gold); flex-shrink: 0;
        }
        .auth-pillar-text strong { display: block; font-size: 0.83rem; font-weight: 600; color: var(--text-primary); margin-bottom: 2px; }
        .auth-pillar-text span { font-size: 0.76rem; color: var(--text-muted); line-height: 1.5; }

        .auth-form-panel {
          display: flex; align-items: center; justify-content: center;
          padding: 3rem 2rem; position: relative;
        }
        .auth-form-panel::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 75% 20%, rgba(90,158,120,0.05) 0%, transparent 60%);
          pointer-events: none;
        }
        .auth-card { width: 100%; max-width: 400px; position: relative; z-index: 1; }
        .auth-card-eyebrow { font-size: 11px; letter-spacing: 0.13em; text-transform: uppercase; color: var(--green); font-weight: 500; margin-bottom: 0.55rem; }
        .auth-card-title { font-family: var(--font-display); font-size: 2rem; font-weight: 400; color: var(--text-primary); line-height: 1.15; margin-bottom: 0.4rem; }
        .auth-card-sub { font-size: 0.87rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 2rem; }

        .auth-error {
          display: flex; align-items: flex-start; gap: 9px;
          padding: 11px 13px;
          background: rgba(220,80,60,0.08); border: 1px solid rgba(220,80,60,0.2);
          border-radius: var(--radius); color: #e07060;
          font-size: 0.82rem; line-height: 1.5; margin-bottom: 1.25rem;
        }

        .google-btn {
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 11px 16px; background: var(--bg-card);
          border: 1px solid var(--border-light); border-radius: var(--radius);
          color: var(--text-primary); font-family: var(--font-body);
          font-size: 0.88rem; font-weight: 500; cursor: pointer;
          transition: background 0.2s, transform 0.2s; margin-bottom: 1.25rem;
        }
        .google-btn:hover:not(:disabled) { background: var(--bg-card-hover); transform: translateY(-1px); }
        .google-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .google-icon { width: 18px; height: 18px; flex-shrink: 0; }

        .auth-divider { display: flex; align-items: center; gap: 12px; margin-bottom: 1.25rem; }
        .auth-divider-line { flex: 1; height: 1px; background: var(--border); }
        .auth-divider-text { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-faint); }

        .auth-fields { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem; }
        .field-group { display: flex; flex-direction: column; gap: 6px; }
        .field-label { font-size: 0.78rem; font-weight: 500; color: var(--text-secondary); letter-spacing: 0.02em; }
        .field-input {
          padding: 11px 14px; background: var(--bg-card);
          border: 1px solid var(--border); border-radius: var(--radius);
          color: var(--text-primary); font-family: var(--font-body);
          font-size: 0.9rem; outline: none; width: 100%;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .field-input::placeholder { color: var(--text-faint); }
        .field-input:focus { border-color: var(--green); background: var(--bg-card-hover); box-shadow: 0 0 0 3px rgba(90,158,120,0.1); }

        .auth-extras { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; }
        .checkbox-label { display: flex; align-items: center; gap: 7px; cursor: pointer; font-size: 0.8rem; color: var(--text-muted); }
        .checkbox-input { accent-color: var(--green); cursor: pointer; }
        .link-btn { background: none; border: none; padding: 0; font-family: var(--font-body); font-size: 0.8rem; color: var(--text-muted); cursor: pointer; transition: color 0.18s; }
        .link-btn:hover { color: var(--gold); }

        .submit-btn {
          width: 100%; padding: 13px;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          color: var(--bg-deep); border: none; border-radius: var(--radius);
          font-family: var(--font-body); font-size: 0.92rem; font-weight: 600;
          cursor: pointer; transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
          display: flex; align-items: center; justify-content: center; min-height: 46px;
        }
        .submit-btn:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 28px rgba(200,169,110,0.28); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .spinner { width: 18px; height: 18px; border: 2px solid rgba(10,14,13,0.25); border-top-color: var(--bg-deep); border-radius: 50%; animation: spin 0.75s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .auth-footer { margin-top: 1.5rem; text-align: center; font-size: 0.83rem; color: var(--text-muted); }
        .auth-footer a { color: var(--gold); font-weight: 600; margin-left: 4px; text-decoration: none; transition: color 0.18s; }
        .auth-footer a:hover { color: var(--gold-light); }

        .auth-back { display: inline-flex; align-items: center; gap: 5px; font-size: 0.77rem; color: var(--text-faint); text-decoration: none; margin-top: 1.4rem; transition: color 0.18s; }
        .auth-back:hover { color: var(--text-muted); }

        @media (max-width: 860px) {
          .auth-page { grid-template-columns: 1fr; }
          .auth-brand-panel { display: none; }
          .auth-form-panel { min-height: 100vh; padding-top: 5rem; align-items: flex-start; }
        }
      `}} />

      <div className="auth-page">
        <div className="auth-brand-panel">
          <Link href="/" className="auth-logo">
            <div className="auth-logo-mark">R</div>
            <span className="auth-logo-name">Resolve<span>Strength</span></span>
          </Link>
          <div className="auth-brand-body">
            <div className="auth-brand-eyebrow">Welcome back</div>
            <h2 className="auth-brand-headline">Pick up where<br />you <em>left off</em></h2>
            <p className="auth-brand-desc">Your progress, programs, and library — all waiting for you.</p>
          </div>
          <div className="auth-pillars">
            {[
              { icon: "◈", title: "Your Progress Saved", desc: "Every session and milestone preserved." },
              { icon: "⬡", title: "Personalised Programs", desc: "Training adapted to your history." },
              { icon: "◎", title: "Evidence Library", desc: "Peer-reviewed reads, curated for you." },
            ].map((p) => (
              <div className="auth-pillar" key={p.title}>
                <div className="auth-pillar-icon">{p.icon}</div>
                <div className="auth-pillar-text"><strong>{p.title}</strong><span>{p.desc}</span></div>
              </div>
            ))}
          </div>
        </div>

        <div className="auth-form-panel">
          <div className="auth-card">
            <div className="auth-card-eyebrow">Sign in</div>
            <h1 className="auth-card-title">Welcome back</h1>
            <p className="auth-card-sub">Sign in to continue to your dashboard.</p>

            {error && (
              <div className="auth-error">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M7.5 4.5v3M7.5 10h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                {error}
              </div>
            )}

            <button className="google-btn" onClick={handleGoogleAuth} disabled={isLoading} type="button">
              <svg className="google-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <div className="auth-divider">
              <span className="auth-divider-line" /><span className="auth-divider-text">or</span><span className="auth-divider-line" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="auth-fields">
                <div className="field-group">
                  <label className="field-label" htmlFor="email">Email address</label>
                  <input id="email" type="email" className="field-input" placeholder="alex@example.com"
                    value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="field-group">
                  <label className="field-label" htmlFor="password">Password</label>
                  <input id="password" type="password" className="field-input" placeholder="Enter your password"
                    value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </div>
              <div className="auth-extras">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" /> Remember me
                </label>
                <button type="button" className="link-btn">Forgot password?</button>
              </div>
              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? <span className="spinner" /> : "Sign in"}
              </button>
            </form>

            <div className="auth-footer">
              Don't have an account? <Link href="/signup">Sign up free</Link>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link href="/" className="auth-back">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M8 6H4M4 6l2.5-2.5M4 6l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}