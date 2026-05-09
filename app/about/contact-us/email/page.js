import SubPage from "@/components/SubPage";

export const metadata = { title: "Email Us — ResolveStrength" };

export default function EmailPage() {
  return (
    <SubPage
      segment="contact-us"
      page="email"
      eyebrow="Contact Us · Email"
      title="Reach Us by Email"
      description="We read every message. Whether it's a question, collaboration inquiry, or piece of feedback — we're here."
    >
      <h2>General Enquiries</h2>
      <p>
        For general questions about the platform, membership, or content, reach us at{" "}
        <strong style={{ color: "var(--accent-gold)" }}>hello@resolvestrength.com</strong>. We aim to respond within 2 business days.
      </p>

      <h2>Press & Media</h2>
      <p>
        Journalists, podcasters, and media professionals can contact our communications team at{" "}
        <strong style={{ color: "var(--accent-gold)" }}>press@resolvestrength.com</strong>.
      </p>

      <h2>Partnerships & Collaboration</h2>
      <p>
        Interested in collaborating on research, content, or community initiatives? We welcome conversations with researchers, clinicians, and aligned organisations. Reach us at{" "}
        <strong style={{ color: "var(--accent-gold)" }}>partnerships@resolvestrength.com</strong>.
      </p>

      <h2>Technical Support</h2>
      <p>
        Experiencing an issue with the platform? Email{" "}
        <strong style={{ color: "var(--accent-gold)" }}>support@resolvestrength.com</strong>{" "}
        with a description of the issue and your account email. Screenshots are always helpful.
      </p>

      <div className="divider" />
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Response times may vary during weekends and public holidays. We appreciate your patience.
      </p>
    </SubPage>
  );
}
