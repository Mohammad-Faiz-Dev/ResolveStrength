import SubPage from "@/components/SubPage";

export const metadata = { title: "Cookies Policy — ResolveStrength" };

export default function CookiesPolicyPage() {
  return (
    <SubPage
      segment="legal"
      page="cookies-policy"
      eyebrow="Legal · Cookies"
      title="Cookies Policy"
      description="How ResolveStrength uses cookies, tracking technologies, and user controls."
    >
      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device that enable core functionality, remember preferences, and help us understand how users interact with the platform. We also use local storage and similar technologies for session management and performance monitoring.
      </p>

      <h2>Cookie Categories</h2>
      <ul>
        <li><strong style={{ color: "var(--text-primary)" }}>Essential (Required):</strong> Authentication, session management, CSRF protection, and security monitoring. These cannot be disabled and expire when you log out or close your browser.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Functional:</strong> Remember your preferences (dark mode, content filters, dashboard layout) across sessions. Retention: 12 months.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Analytics:</strong> Aggregate usage patterns, feature adoption rates, and funnel analysis. We use Plausible Analytics (privacy-focused, no cross-site tracking) and self-hosted PostHog. Retention: 24 months.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Performance:</strong> Error tracking via Sentry and load-time monitoring. These help us identify and fix platform issues. Retention: 90 days.</li>
      </ul>

      <h2>Third-Party Processors</h2>
      <p>
        We do not permit third-party advertising cookies. Our analytics and error-tracking tools are configured to minimize data collection. Embedded video content (YouTube lectures) loads only after explicit user consent and uses YouTube's privacy-enhanced mode.
      </p>

      <h2>User Controls</h2>
      <p>
        You can manage cookie preferences through our cookie preference centre (footer of every page) or via your browser settings. Disabling functional cookies will reset your preferences on each visit. Disabling analytics cookies does not affect platform functionality.
      </p>

      <h2>Retention & Deletion</h2>
      <p>
        Session cookies are deleted on browser close. Persistent cookies have a maximum retention of 24 months. You can request complete deletion of all stored data through your account settings or by emailing privacy@resolvestrength.com.
      </p>

      <div className="divider" />
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Last updated: May 2026. This policy is reviewed annually by our data protection officer. Questions? Contact{" "}
        <span style={{ color: "var(--accent-gold)" }}>privacy@resolvestrength.com</span>.
      </p>
    </SubPage>
  );
}