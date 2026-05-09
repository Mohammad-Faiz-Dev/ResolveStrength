import SubPage from "@/components/SubPage";

export const metadata = { title: "How ResolveStrength Works — Company" };

export default function HowItWorksPage() {
  return (
    <SubPage
      segment="company"
      page="how-it-works"
      eyebrow="Company · How It Works"
      title="How ResolveStrength Works"
      description="A platform built on the belief that strength — mental and physical — is a learnable, measurable skill."
    >
      <h2>The Core Idea</h2>
      <p>
        ResolveStrength is built around one central thesis: resilience is not a personality trait you're born with. It's a skill that can be trained, measured, and improved through deliberate practice and evidence-based methods. Our platform makes that science accessible.
      </p>

      <h2>Content & Research</h2>
      <p>
        Every article published on ResolveStrength is grounded in peer-reviewed science. Our editorial process involves sourcing from indexed journals, having content reviewed for accuracy, and presenting findings in accessible language without sacrificing nuance.
      </p>
      <ul>
        <li>Articles are cited with source links to original research</li>
        <li>We distinguish clearly between robust findings and preliminary evidence</li>
        <li>Expert contributors are identified and their credentials disclosed</li>
      </ul>

      <h2>The Community Layer</h2>
      <p>
        Members gain access to a community of practitioners committed to the same goals. Discussion forums, accountability tools, and progress tracking are core features currently under development for our upcoming launch.
      </p>

      <h2>Monetisation Model</h2>
      <p>
        We operate on a freemium model. Core content and community access are free. Premium membership unlocks advanced tracking tools, exclusive deep-dive content, and direct access to expert Q&As. We do not sell user data or run intrusive advertising.
      </p>

      <h2>Technology Stack</h2>
      <p>
        ResolveStrength is built on Next.js with Supabase as our backend — chosen for their developer ergonomics, real-time capabilities, and respect for data privacy. All authentication is handled securely through Supabase Auth.
      </p>
    </SubPage>
  );
}
