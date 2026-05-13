import SubPage from "@/components/SubPage";

export const metadata = { title: "Terms and Conditions — ResolveStrength" };

export default function TermsPage() {
  return (
    <SubPage
      segment="legal"
      page="terms-and-conditions"
      eyebrow="Legal · Terms"
      title="Terms and Conditions"
      description="The legal framework governing your use of the ResolveStrength platform and services."
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using ResolveStrength ("the Platform"), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, you may not use the Platform. We reserve the right to update these terms; continued use after changes constitutes acceptance. Material changes will be notified via email and in-platform banner.
      </p>

      <h2>2. Eligibility & Account Security</h2>
      <p>
        You must be 16 years or older to create an account. You are responsible for maintaining the confidentiality of your credentials and for all activity under your account. Notify us immediately of any unauthorized access. We reserve the right to suspend accounts showing suspicious activity pending investigation.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Platform for any unlawful purpose or in violation of applicable regulations</li>
        <li>Post content that is defamatory, harassing, discriminatory, or infringes intellectual property rights</li>
        <li>Attempt to circumvent security measures, scrape content, or reverse-engineer our software</li>
        <li>Share account access with non-subscribers or resell premium features</li>
        <li>Use automated tools (bots, scrapers) to extract data without written permission</li>
        <li>Upload health data that is not your own without explicit consent</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        All platform content — articles, programming templates, software, visual assets, and trademarks — is the property of ResolveStrength Ltd or its licensed contributors. Users retain ownership of their personal training data. You may not reproduce, distribute, or create derivative works from our content without a written commercial license.
      </p>
      <p>
        Enterprise clients receive a limited license to white-label and distribute content within their organization per their service agreement.
      </p>

      <h2>5. Subscription & Billing</h2>
      <p>
        Premium subscriptions are billed monthly or annually via Stripe. You may cancel at any time; access continues until the end of the current billing period. We offer full refunds within 14 days of initial subscription for users who have not downloaded premium content. Enterprise contracts are subject to separate terms.
      </p>

      <h2>6. Disclaimer of Medical Advice</h2>
      <p>
        Content on the Platform is for informational and educational purposes only. It does not constitute medical, psychological, or clinical advice. ResolveStrength makes no warranties about the accuracy or completeness of any content. Always consult a qualified healthcare professional before beginning or modifying any exercise program.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, ResolveStrength Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Platform, including any reliance on content or programming recommendations. Our total liability for any claim shall not exceed the amount you paid us in the 12 months preceding the claim.
      </p>

      <h2>8. Termination</h2>
      <p>
        We may suspend or terminate accounts that violate these Terms, with or without notice. You may delete your account at any time via Settings. Upon termination, your personal data is handled per our Privacy Policy retention schedule.
      </p>

      <h2>9. Governing Law & Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of England and Wales. Any dispute shall first be addressed through mediation. If mediation fails, disputes shall be resolved by the courts of England and Wales.
      </p>

      <h2>10. Contact</h2>
      <p>
        For legal inquiries, contact our general counsel at{" "}
        <span style={{ color: "var(--accent-gold)" }}>legal@resolvestrength.com</span>.
      </p>

      <div className="divider" />
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
        ResolveStrength Ltd, registered in England & Wales (Company No. 14839247). Last updated: May 2026.
      </p>
    </SubPage>
  );
}