import SubPage from "@/components/SubPage";

export const metadata = { title: "Privacy Policy — ResolveStrength" };

export default function PrivacyPolicyPage() {
  return (
    <SubPage
      segment="legal"
      page="privacy-policy"
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      description="How ResolveStrength collects, processes, and protects user data. GDPR and CCPA compliant."
    >
      <h2>1. Data We Collect</h2>
      <p>We collect only what is necessary to operate the platform:</p>
      <ul>
        <li>Account data: name, email, authentication credentials (hashed via bcrypt, never stored in plain text)</li>
        <li>Usage data: pages visited, features used, session duration, device type, and browser version</li>
        <li>Health data (optional): training logs, body metrics, and wearable integrations. This is encrypted at rest and subject to additional access controls.</li>
        <li>Payment data: handled entirely by Stripe. We do not store card numbers or CVV codes.</li>
      </ul>

      <h2>2. Legal Basis for Processing (GDPR)</h2>
      <ul>
        <li><strong>Contract:</strong> Account creation, service delivery, and billing</li>
        <li><strong>Consent:</strong> Marketing emails, optional health data, and analytics cookies</li>
        <li><strong>Legitimate Interest:</strong> Security monitoring, fraud prevention, and platform improvement</li>
        <li><strong>Legal Obligation:</strong> Tax reporting and regulatory compliance</li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <ul>
        <li>To provide and improve the ResolveStrength platform and its features</li>
        <li>To send transactional emails (account confirmation, password resets, billing notices)</li>
        <li>To send optional content updates and newsletters (with explicit opt-in consent)</li>
        <li>To detect fraudulent activity and enforce our Terms of Service</li>
        <li>To generate aggregate, anonymized analytics for internal decision-making</li>
      </ul>

      <h2>4. Data Sharing & Subprocessors</h2>
      <p>
        We do not sell personal data. We share data only with subprocessors necessary to operate the platform:
      </p>
      <ul>
        <li><strong>Supabase</strong> — database hosting, authentication, and real-time infrastructure</li>
        <li><strong>Stripe</strong> — payment processing and subscription management</li>
        <li><strong>Postmark</strong> — transactional email delivery</li>
        <li><strong>Plausible Analytics</strong> — privacy-respecting usage analytics</li>
        <li><strong>Sentry</strong> — error monitoring and performance tracking</li>
      </ul>
      <p>All subprocessors are bound by Data Processing Agreements (DPAs) compliant with GDPR Article 28.</p>

      <h2>5. Data Retention</h2>
      <p>
        Account data is retained for the duration of your subscription plus 24 months, after which it is permanently deleted. Health and training data is retained for 36 months to support long-term progress tracking, then anonymized. You can request early deletion at any time through your account settings.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li><strong>Access:</strong> Request a copy of all personal data we hold about you</li>
        <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
        <li><strong>Erasure ("Right to be Forgotten"):</strong> Request deletion of your account and associated data</li>
        <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
        <li><strong>Objection:</strong> Opt out of marketing communications and certain processing activities</li>
        <li><strong>Restriction:</strong> Request limited processing while a dispute is resolved</li>
      </ul>
      <p>To exercise any of these rights, email <span style={{ color: "var(--accent-gold)" }}>privacy@resolvestrength.com</span> or use the controls in your account settings.</p>

      <h2>7. Security Measures</h2>
      <p>
        All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Authentication uses Supabase Auth with MFA support. We conduct annual penetration testing through a third-party security firm and maintain a bug bounty program for responsible disclosure.
      </p>

      <h2>8. International Transfers</h2>
      <p>
        Our primary infrastructure is hosted in the EU (Frankfurt) and US (Virginia). Data transfers outside the EEA are protected by Standard Contractual Clauses (SCCs) approved by the European Commission.
      </p>

      <div className="divider" />
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Data Protection Officer: Sarah Chen, DPO@resolvestrength.com. Last updated: May 2026. This policy is reviewed annually.
      </p>
    </SubPage>
  );
}