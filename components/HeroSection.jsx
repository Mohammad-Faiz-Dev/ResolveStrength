"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const supabase = createClient();

export default function HeroSection() {
  const router = useRouter();
  const [mode, setMode] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (mode === "Login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage({ type: "error", text: "Invalid email or password. Please try again." });
        setLoading(false);
      } else {
        router.push("/dashboard");
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name } },
      });
      if (error) {
        setMessage({ type: "error", text: error.message });
        setLoading(false);
      } else {
        router.push("/dashboard");
      }
    }
  };

  const handleGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: { access_type: "offline", prompt: "consent" },
      },
    });
    if (error) setMessage({ type: "error", text: error.message });
  };

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .hero-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.12;
        }
        .orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #c8a96e 0%, transparent 70%);
          top: -100px; left: -100px;
        }
        .orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #4a8c6a 0%, transparent 70%);
          bottom: 50px; right: 100px;
        }
        .orb-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #c8a96e 0%, transparent 70%);
          top: 40%; left: 40%; opacity: 0.07;
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
        }
        .hero-inner {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: 1fr 440px;
          gap: 5rem; align-items: center;
          width: 100%; max-width: 1160px;
          margin: 0 auto; padding: 6rem 2rem 4rem;
        }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--accent-gold); font-weight: 500; margin-bottom: 1.5rem;
          opacity: 0; animation: fadeUp 0.7s ease 0.1s forwards;
        }
        .hero-eyebrow-dot {
          width: 5px; height: 5px;
          background: var(--accent-gold); border-radius: 50%;
        }
        .hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 700; line-height: 1.1;
          letter-spacing: -0.025em; color: var(--text-primary);
          margin-bottom: 1.5rem;
          opacity: 0; animation: fadeUp 0.7s ease 0.2s forwards;
        }
        .hero-h1 em { font-style: italic; color: var(--accent-gold); }
        .hero-sub {
          font-size: 1.05rem; color: var(--text-secondary);
          line-height: 1.75; max-width: 460px; margin-bottom: 2.5rem;
          opacity: 0; animation: fadeUp 0.7s ease 0.3s forwards;
        }
        .hero-stats {
          display: flex; gap: 2rem;
          opacity: 0; animation: fadeUp 0.7s ease 0.4s forwards;
        }
        .stat { border-left: 2px solid var(--border); padding-left: 1rem; }
        .stat-num {
          font-family: var(--font-display); font-size: 1.6rem;
          font-weight: 600; color: var(--text-primary); line-height: 1; margin-bottom: 3px;
        }
        .stat-label {
          font-size: 0.78rem; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .auth-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-lg); padding: 2rem;
          box-shadow: 0 32px 64px rgba(0,0,0,0.45);
          opacity: 0; animation: fadeUp 0.7s ease 0.35s forwards;
        }
        .auth-tabs {
          display: grid; grid-template-columns: 1fr 1fr;
          background: var(--bg-surface); border-radius: 8px;
          padding: 3px; margin-bottom: 1.5rem; border: 1px solid var(--border);
        }
        .auth-tab {
          padding: 9px; font-size: 0.85rem; font-weight: 500;
          border-radius: 6px; transition: background 0.18s, color 0.18s;
          color: var(--text-muted); cursor: pointer;
          font-family: var(--font-body); border: none; background: none; text-align: center;
        }
        .auth-tab.active {
          background: var(--bg-card-hover); color: var(--text-primary);
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
        .btn-google {
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 11px 16px; font-size: 0.875rem; font-weight: 500;
          color: var(--text-primary); background: var(--bg-surface);
          border: 1px solid var(--border-light); border-radius: var(--radius);
          transition: border-color 0.18s, background 0.18s, transform 0.18s;
          cursor: pointer; font-family: var(--font-body); margin-bottom: 1.25rem;
        }
        .btn-google:hover {
          border-color: var(--text-muted); background: var(--bg-card-hover);
          transform: translateY(-1px);
        }
        .google-icon { width: 18px; height: 18px; flex-shrink: 0; }
        .auth-divider {
          display: flex; align-items: center; gap: 12px; margin-bottom: 1.25rem;
        }
        .auth-divider-line { flex: 1; height: 1px; background: var(--border); }
        .auth-divider-text {
          font-size: 0.75rem; color: var(--text-muted);
          letter-spacing: 0.06em; white-space: nowrap;
        }
        .auth-form { display: flex; flex-direction: column; gap: 0.875rem; }
        .field-group { display: flex; flex-direction: column; gap: 6px; }
        .field-label { font-size: 0.78rem; color: var(--text-secondary); font-weight: 500; letter-spacing: 0.02em; }
        .field-input {
          padding: 10px 14px; background: var(--bg-surface);
          border: 1px solid var(--border); border-radius: var(--radius);
          color: var(--text-primary); font-size: 0.9rem;
          font-family: var(--font-body);
          transition: border-color 0.18s, box-shadow 0.18s; outline: none; width: 100%;
        }
        .field-input:focus {
          border-color: var(--accent-gold-dim);
          box-shadow: 0 0 0 3px rgba(200,169,110,0.1);
        }
        .field-input::placeholder { color: var(--text-muted); }
        .btn-submit {
          width: 100%; padding: 12px 16px; font-size: 0.9rem; font-weight: 500;
          color: var(--bg-deep);
          background: linear-gradient(135deg, var(--accent-gold) 0%, #d4b97e 100%);
          border: none; border-radius: var(--radius);
          transition: opacity 0.18s, transform 0.18s;
          cursor: pointer; font-family: var(--font-body); margin-top: 0.25rem;
        }
        .btn-submit:hover { opacity: 0.9; transform: translateY(-1px); }
        .btn-submit:active { transform: translateY(0); }
        .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .auth-message {
          margin-top: 0.75rem; padding: 10px 14px;
          border-radius: var(--radius); font-size: 0.8rem; line-height: 1.5;
        }
        .auth-message.info {
          background: rgba(200,169,110,0.08); border: 1px solid rgba(200,169,110,0.2);
          color: var(--accent-gold);
        }
        .auth-message.error {
          background: rgba(220,80,80,0.08); border: 1px solid rgba(220,80,80,0.25);
          color: #e07070;
        }
        .auth-footer {
          margin-top: 1.25rem; text-align: center;
          font-size: 0.78rem; color: var(--text-muted);
        }
        .auth-footer-link {
          color: var(--accent-gold); cursor: pointer;
          transition: opacity 0.15s; font-weight: 500;
        }
        .auth-footer-link:hover { opacity: 0.8; }
        .auth-card-title {
          font-family: var(--font-display); font-size: 1.35rem;
          font-weight: 600; color: var(--text-primary); margin-bottom: 0.25rem;
        }
        .auth-card-sub {
          font-size: 0.82rem; color: var(--text-muted);
          margin-bottom: 1.5rem; line-height: 1.5;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; gap: 3rem; padding-top: 5rem; }
          .auth-card { max-width: 440px; margin: 0 auto; }
          .hero-stats { flex-wrap: wrap; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-orb orb-1" />
          <div className="hero-bg-orb orb-2" />
          <div className="hero-bg-orb orb-3" />
          <div className="hero-grid" />
        </div>

        <div className="hero-inner">
          {/* Left: copy */}
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Science-backed strength
            </div>
            <h1 className="hero-h1">
              Build the resolve<br />
              to <em>never stop</em><br />
              moving forward.
            </h1>
            <p className="hero-sub">
              ResolveStrength brings together evidence-based research, community, and practical tools
              to help you build lasting mental and physical resilience — one deliberate step at a time.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-num">00</div>
                <div className="stat-label">Members</div>
              </div>
              <div className="stat">
                <div className="stat-num">25+</div>
                <div className="stat-label">Articles</div>
              </div>
              <div className="stat">
                <div className="stat-num">100%</div>
                <div className="stat-label">Science-cited</div>
              </div>
            </div>
          </div>

          {/* Right: auth card */}
          <div className="auth-card">
            <div className="auth-card-title">
              {mode === "Login" ? "Welcome back" : "Join ResolveStrength"}
            </div>
            <div className="auth-card-sub">
              {mode === "Login"
                ? "Login to access your strength journey."
                : "Create your free account and start building today."}
            </div>

            <div className="auth-tabs">
              <button
                className={`auth-tab${mode === "Login" ? " active" : ""}`}
                onClick={() => { setMode("Login"); setMessage(null); }}
              >
                Login
              </button>
              <button
                className={`auth-tab${mode === "signup" ? " active" : ""}`}
                onClick={() => { setMode("signup"); setMessage(null); }}
              >
                Sign Up
              </button>
            </div>

            <button className="btn-google" onClick={handleGoogle} type="button">
              <svg className="google-icon" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <div className="auth-divider">
              <div className="auth-divider-line" />
              <span className="auth-divider-text">or continue with email</span>
              <div className="auth-divider-line" />
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              {mode === "signup" && (
                <div className="field-group">
                  <label className="field-label">Full Name</label>
                  <input
                    className="field-input" type="text" placeholder="Jane Smith"
                    value={name} onChange={(e) => setName(e.target.value)}
                    required={mode === "signup"} autoComplete="name"
                  />
                </div>
              )}
              <div className="field-group">
                <label className="field-label">Email Address</label>
                <input
                  className="field-input" type="email" placeholder="you@example.com"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  required autoComplete="email"
                />
              </div>
              <div className="field-group">
                <label className="field-label">Password</label>
                <input
                  className="field-input" type="password"
                  placeholder={mode === "signup" ? "Min. 8 characters" : "Your password"}
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  required autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  minLength={mode === "signup" ? 8 : undefined}
                />
              </div>

              <button className="btn-submit" type="submit" disabled={loading}>
                {loading ? "Please wait…" : mode === "Login" ? "Login" : "Create Account"}
              </button>
            </form>

            {message && (
              <div className={`auth-message ${message.type}`}>{message.text}</div>
            )}

            <div className="auth-footer">
              {mode === "Login" ? (
                <>
                  No account?{" "}
                  <span className="auth-footer-link" onClick={() => { setMode("signup"); setMessage(null); }}>
                    Sign up free
                  </span>
                </>
              ) : (
                <>
                  Already a member?{" "}
                  <span className="auth-footer-link" onClick={() => { setMode("Login"); setMessage(null); }}>
                    Login
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}