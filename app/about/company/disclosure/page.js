import SubPage from "@/components/SubPage";

export const metadata = { title: "Disclosure — ResolveStrength" };

export default function DisclosurePage() {
  return (
    <SubPage
      segment="company"
      page="disclosure"
      eyebrow="Company · Disclosure"
      title="Disclosure"
      description="How ResolveStrength generates revenue, maintains editorial independence, and manages conflicts of interest."
    >
      <h2>Revenue Model</h2>
      <p>
        ResolveStrength operates a freemium SaaS model. Core educational content is free and ad-supported. Premium subscriptions ($12/month or $99/year) unlock personalized programming, advanced analytics, and direct access to our coaching team. We also earn referral commissions on recommended equipment and supplements, disclosed transparently at point of recommendation.
      </p>
      <p>
        In 2025, premium subscriptions accounted for 68% of revenue. Referral partnerships contributed 24%. The remaining 8% came from corporate wellness licensing to gyms and physiotherapy clinics.
      </p>

      <h2>Editorial Independence Policy</h2>
      <p>
        Our editorial team reports to the Chief Content Officer, not the commercial team. No sponsor, advertiser, or partner has the ability to review, edit, or approve content before publication. Sponsored content, when published, is clearly identified as such and never appears in our primary educational feed.
      </p>
      <p>
        All editorial staff are prohibited from holding equity in fitness supplement or equipment companies. This policy is reviewed annually by our external ethics counsel.
      </p>

      <h2>Expert Contributor Standards</h2>
      <p>
        Guest contributors are identified by name, credentials, and institutional affiliation. We require disclosure of relevant conflicts of interest from all external authors. Any known conflicts are published at the foot of the relevant article. Contributors with undisclosed conflicts are permanently removed from our network.
      </p>

      <h2>Medical Disclaimer</h2>
      <p>
        Content on ResolveStrength is for informational and educational purposes only. It does not constitute medical, psychological, or clinical advice. Users are required to acknowledge this disclaimer before accessing advanced programming modules. Always consult a qualified healthcare professional before making changes to your health, training, or wellness regime.
      </p>

      <h2>Funding & Ownership</h2>
      <p>
        ResolveStrength is backed by a $2.4M pre-seed round led by LocalGlobe, with participation from several angel investors in the health-tech space. Our cap table includes no strategic investors from the supplement or fitness equipment industries. Any future funding relationships that could affect content will be disclosed on this page within 30 days of closing.
      </p>

      <div className="divider" />
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Last updated: May 2026. This disclosure is reviewed quarterly by our board and external counsel. Questions? Contact our compliance team at{" "}
        <span style={{ color: "var(--accent-gold)" }}>compliance@resolvestrength.com</span>.
      </p>
    </SubPage>
  );
}