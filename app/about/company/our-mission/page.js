import SubPage from "@/components/SubPage";

export const metadata = { title: "Our Mission — ResolveStrength" };

export default function OurMissionPage() {
  return (
    <SubPage
      segment="company"
      page="our-mission"
      eyebrow="Company · Mission"
      title="Our Mission"
      description="To make the science of resilience accessible to everyone who is willing to do the work."
    >
      <h2>The Problem We're Solving</h2>
      <p>
        The fitness industry generates $96B annually in the US alone, yet the majority of that spend goes toward unproven supplements, influencer-backed programs, and aesthetic-focused content with no scientific grounding. Meanwhile, peer-reviewed research on strength, recovery, and metabolic health sits behind paywalls and academic language that excludes the people who need it most.
      </p>
      <p>
        ResolveStrength exists to close that gap. We translate rigorous science into actionable programming for practitioners who take their training seriously.
      </p>

      <h2>Our Operating Principles</h2>
      <ul>
        <li><strong style={{ color: "var(--text-primary)" }}>Evidence over hype.</strong> We follow the research, not the trend cycle. Our editorial standards prohibit publishing content that cannot be traced to peer-reviewed sources.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Process over outcome.</strong> We focus on the habits and systems that produce results, not just the results themselves. Our programming emphasizes long-term adherence over short-term spectacle.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Accessibility without dilution.</strong> Strength science is for everyone. We refuse to oversimplify to the point of inaccuracy. Complex concepts are explained clearly, not dumbed down.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Transparency as default.</strong> When evidence is mixed, we present both sides. When we are uncertain, we say so. Our disclosure page is updated quarterly and reviewed by external counsel.</li>
      </ul>

      <h2>Who We Serve</h2>
      <p>
        Our primary user base includes competitive amateur athletes (35%), recreational lifters seeking evidence-based programming (28%), coaches and trainers looking for continuing education (22%), and clinical professionals integrating strength training into patient care (15%). We do not build for casual browsers seeking quick fixes.
      </p>

      <h2>2026–2028 Roadmap</h2>
      <p>
        We are expanding from content platform to full-stack training tool. Upcoming releases include: AI-assisted periodization (Q3 2026), integrated wearables analytics (Q1 2027), and B2B licensing for physiotherapy clinics (Q2 2027). Our target is 500,000 active users and $4M ARR by end of 2027.
      </p>

      <h2>The Long Game</h2>
      <p>
        ResolveStrength is not a content farm. Our goal is to build the most trusted knowledge and programming platform in the strength and resilience space — one that researchers cite, coaches trust, and athletes rely on year after year. That requires intellectual honesty, operational discipline, and a willingness to update our beliefs when evidence demands it. We are committed to all three.
      </p>
    </SubPage>
  );
}