import SubPage from "@/components/SubPage";

export const metadata = { title: "Email Us — ResolveStrength" };

export default function EmailPage() {
  return (
    <SubPage
      segment="contact-us"
      page="email"
      eyebrow="Contact Us · Email"
      title="Reach Our Team"
      description="We read every message. Typical response time is 24–48 hours during business days."
    >
      <h2>General Enquiries</h2>
      <p>
        For questions about the platform, membership tiers, or content licensing, contact our operations team at{" "}
        <strong style={{ color: "var(--accent-gold)" }}>hello@resolvestrength.com</strong>. We aim to respond within one business day.
      </p>

      <h2>Press & Media Relations</h2>
      <p>
        Our communications team handles interview requests, press kit distribution, and speaking inquiries. Contact{" "}
        <strong style={{ color: "var(--accent-gold)" }}>press@resolvestrength.com</strong>. Response time: 24 hours.
      </p>

      <h2>Partnerships & Enterprise Sales</h2>
      <p>
        We license our platform to gym chains, university athletic departments, and corporate wellness programs. For partnership discussions and enterprise pricing, reach our business development team at{" "}
        <strong style={{ color: "var(--accent-gold)" }}>partnerships@resolvestrength.com</strong>.
      </p>

      <h2>Research Collaboration</h2>
      <p>
        We actively collaborate with academic researchers on validation studies for our programming methodologies. If you are interested in joint research or data-sharing agreements, contact our research director at{" "}
        <strong style={{ color: "var(--accent-gold)" }}>research@resolvestrength.com</strong>.
      </p>

      <h2>Technical Support</h2>
      <p>
        For platform issues, account recovery, or bug reports, contact{" "}
        <strong style={{ color: "var(--accent-gold)" }}>support@resolvestrength.com</strong>. Please include your account email and, where possible, a screen recording or screenshot.
      </p>

      <div className="divider" />
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Our support team operates Monday–Friday, 9am–6pm GMT. Response times may extend during product launches and major releases.
      </p>
    </SubPage>
  );
}