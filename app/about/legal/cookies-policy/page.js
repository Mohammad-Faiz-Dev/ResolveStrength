import SubPage from "@/components/SubPage";

export const metadata = { title: "Cookies Policy — ResolveStrength" };

export default function CookiesPolicyPage() {
  return (
    <SubPage
      segment="legal"
      page="cookies-policy"
      eyebrow="Legal · Cookies"
      title="Cookies Policy"
      description="How and why we use cookies on ResolveStrength, and how you can control them."
    >
      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They serve a range of functions — from keeping you logged in between sessions to helping us understand how people navigate the platform.
      </p>

      <h2>Cookies We Use</h2>
      <ul>
        <li><strong style={{ color: "var(--text-primary)" }}>Essential Cookies:</strong> Required for core platform functionality including authentication, session management, and security. These cannot be disabled.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Preference Cookies:</strong> Store your settings and preferences, such as display mode or language, so you don't have to re-enter them on each visit.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Analytics Cookies:</strong> Help us understand aggregate usage patterns. We use privacy-respecting analytics tools that do not share data with third-party advertisers.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Performance Cookies:</strong> Monitor page load times and error rates to help us improve the platform experience.</li>
      </ul>

      <h2>Third-Party Cookies</h2>
      <p>
        We do not permit third-party advertising cookies on our platform. Some embedded content (such as videos or interactive tools) may set their own cookies; we will always notify you before loading such content.
      </p>

      <h2>Managing Your Cookie Preferences</h2>
      <p>
        You can manage cookie preferences through your browser settings or through our cookie preference centre, accessible via the footer of every page. Note that disabling certain cookies may affect platform functionality.
      </p>

      <h2>Cookie Retention</h2>
      <p>
        Session cookies are deleted when you close your browser. Persistent cookies have a maximum retention period of 12 months, after which they are automatically deleted.
      </p>

      <div className="divider" />
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Last updated: January 2025. For questions, contact{" "}
        <span style={{ color: "var(--accent-gold)" }}>legal@resolvestrength.com</span>.
      </p>
    </SubPage>
  );
}
