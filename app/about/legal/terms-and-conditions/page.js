import SubPage from "@/components/SubPage";

export const metadata = { title: "Terms and Conditions — ResolveStrength" };

export default function TermsPage() {
  return (
    <SubPage
      segment="legal"
      page="terms-and-conditions"
      eyebrow="Legal · Terms"
      title="Terms and Conditions"
      description="The terms governing your use of the ResolveStrength platform. Please read them carefully."
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using ResolveStrength ("the Platform"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Platform. We may update these terms periodically; continued use after changes constitutes acceptance.
      </p>

      <h2>2. Account Responsibilities</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials. You agree not to share your account with others or use another person's account without permission. You must notify us immediately of any unauthorised access to your account.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Platform for any unlawful purpose</li>
        <li>Post content that is abusive, harassing, or discriminatory</li>
        <li>Attempt to circumvent or interfere with the Platform's security systems</li>
        <li>Scrape or extract content without written permission</li>
        <li>Misrepresent yourself or your credentials</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on ResolveStrength — including articles, graphics, tools, and code — is the intellectual property of ResolveStrength or its licensed contributors. You may not reproduce, distribute, or create derivative works without explicit written consent.
      </p>

      <h2>5. Disclaimer of Medical Advice</h2>
      <p>
        Content on the Platform is for informational purposes only and does not constitute medical or clinical advice. ResolveStrength makes no warranties about the accuracy or completeness of any content. Always consult a qualified healthcare professional.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, ResolveStrength shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Platform, including any reliance on content published herein.
      </p>

      <h2>7. Termination</h2>
      <p>
        We reserve the right to suspend or terminate accounts that violate these Terms, with or without notice. You may delete your account at any time through your account settings.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These Terms are governed by applicable law. Any disputes shall be subject to the exclusive jurisdiction of the relevant courts.
      </p>

      <div className="divider" />
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Last updated: January 2025. Questions? Email{" "}
        <span style={{ color: "var(--accent-gold)" }}>legal@resolvestrength.com</span>.
      </p>
    </SubPage>
  );
}
