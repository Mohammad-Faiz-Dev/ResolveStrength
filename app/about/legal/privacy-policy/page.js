import SubPage from "@/components/SubPage";

export const metadata = { title: "Privacy Policy — ResolveStrength" };

export default function PrivacyPolicyPage() {
  return (
    <SubPage
      segment="legal"
      page="privacy-policy"
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      description="Your privacy matters. Here's exactly what data we collect, why, and how it's protected."
    >
      <h2>1. Data We Collect</h2>
      <p>When you create an account, we collect:</p>
      <ul>
        <li>Your name and email address</li>
        <li>Authentication credentials (stored securely via Supabase Auth, never in plain text)</li>
        <li>Usage data — pages visited, features used, and time spent on the platform</li>
        <li>Device and browser information for security and compatibility purposes</li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <p>Your data is used exclusively to:</p>
      <ul>
        <li>Provide and improve the ResolveStrength platform</li>
        <li>Send transactional emails (account confirmation, password resets)</li>
        <li>Send optional newsletter and content updates (with your explicit consent)</li>
        <li>Detect and prevent fraudulent activity</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We do not sell, rent, or share your personal data with third parties for marketing purposes. We share data only with service providers necessary to operate the platform (such as Supabase for database hosting), under strict data processing agreements.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain your account data for as long as your account is active. Upon account deletion, your personal data is permanently removed within 30 days, except where we are legally required to retain certain records.
      </p>

      <h2>5. Your Rights</h2>
      <ul>
        <li>Right to access your personal data</li>
        <li>Right to correct inaccurate data</li>
        <li>Right to request deletion of your data</li>
        <li>Right to data portability</li>
        <li>Right to withdraw consent at any time</li>
      </ul>

      <h2>6. Security</h2>
      <p>
        All data is encrypted in transit (TLS) and at rest. Authentication is managed via Supabase, which employs industry-standard security practices including row-level security policies.
      </p>

      <h2>7. Contact</h2>
      <p>
        For privacy-related requests, contact us at{" "}
        <span style={{ color: "var(--accent-gold)" }}>privacy@resolvestrength.com</span>.
      </p>

      <div className="divider" />
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Last updated: January 2025.</p>
    </SubPage>
  );
}
