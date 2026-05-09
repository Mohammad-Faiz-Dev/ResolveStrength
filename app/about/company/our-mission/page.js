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
      <h2>Why We Exist</h2>
      <p>
        Somewhere along the way, the conversation about strength became dominated by aesthetics, influencer culture, and anecdote. The genuine science of how humans build resilience — physically, cognitively, and emotionally — got buried beneath noise. ResolveStrength exists to change that.
      </p>

      <h2>What We Stand For</h2>
      <ul>
        <li><strong style={{ color: "var(--text-primary)" }}>Evidence over hype.</strong> We follow the research, not the trend cycle.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Process over outcome.</strong> We focus on the habits and systems that produce results, not just the results themselves.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Inclusion without dilution.</strong> Strength is for everyone. We refuse to water down the science to make it palatable.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Transparency above convenience.</strong> When we're uncertain, we say so. When evidence conflicts, we show both sides.</li>
      </ul>

      <h2>Who We Serve</h2>
      <p>
        We build for people who take their growth seriously — not for those looking for a quick fix or motivational platitudes. Our audience includes athletes, clinicians, coaches, researchers, and anyone willing to engage with the complexity of human performance.
      </p>

      <h2>The Long Game</h2>
      <p>
        ResolveStrength is not a sprint. Our goal is to build the most trusted knowledge platform in the strength and resilience space — one that researchers cite, practitioners trust, and members return to year after year.
      </p>
      <p>
        That takes time, intellectual honesty, and a willingness to update our beliefs when evidence demands it. We're committed to all three.
      </p>
    </SubPage>
  );
}
