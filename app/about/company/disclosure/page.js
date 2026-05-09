import SubPage from "@/components/SubPage";

export const metadata = { title: "Disclosure — ResolveStrength" };

export default function DisclosurePage() {
  return (
    <SubPage
      segment="company"
      page="disclosure"
      eyebrow="Company · Disclosure"
      title="Disclosure"
      description="Full transparency on how ResolveStrength operates, earns revenue, and handles potential conflicts of interest."
    >
      <h2>Affiliate & Commercial Relationships</h2>
      <p>
        ResolveStrength may, from time to time, include links to products or services that earn us a referral commission. These relationships never influence our editorial decisions. Affiliated content is clearly marked with an "affiliate" label where applicable.
      </p>

      <h2>Editorial Independence</h2>
      <p>
        Our editorial team operates independently of our commercial team. No sponsor, advertiser, or partner has the ability to review, edit, or approve content before publication. Sponsored content, when published, is clearly identified as such.
      </p>

      <h2>Expert Contributors</h2>
      <p>
        Guest contributors are identified by name, credentials, and institutional affiliation. We request disclosure of relevant conflicts of interest from all external authors. Any known conflicts are disclosed at the foot of the relevant article.
      </p>

      <h2>No Medical Advice</h2>
      <p>
        Content on ResolveStrength is for informational and educational purposes only. It does not constitute medical, psychological, or clinical advice. Always consult a qualified healthcare professional before making changes to your health, training, or wellness regime.
      </p>

      <h2>Funding</h2>
      <p>
        ResolveStrength is currently self-funded. We do not accept investment from parties that would require us to compromise editorial integrity. Any future funding relationships that could affect content will be disclosed on this page.
      </p>

      <div className="divider" />
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Last updated: January 2025. Questions about our disclosures? Email us at{" "}
        <span style={{ color: "var(--accent-gold)" }}>disclosure@resolvestrength.com</span>.
      </p>
    </SubPage>
  );
}
