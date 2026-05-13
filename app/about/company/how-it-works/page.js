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
      <h2>The Core Thesis</h2>
      <p>
        ResolveStrength is built around one central thesis: resilience is not a personality trait. It is a skill that can be trained, measured, and improved through deliberate practice and evidence-based methods. Our platform makes that science accessible to practitioners at every level, from recreational athletes to professional sports teams.
      </p>

      <h2>Content & Research Operations</h2>
      <p>
        Our editorial team of 8 full-time writers and 12 contracted PhD reviewers publishes 15–20 articles monthly. Every piece is grounded in peer-reviewed science, sourced from PubMed-indexed journals, and reviewed for accuracy by domain experts before publication.
      </p>
      <ul>
        <li>All claims are cited with DOI-linked source references</li>
        <li>We distinguish clearly between meta-analytic consensus and preliminary findings</li>
        <li>Expert contributors are identified with credentials and institutional affiliations</li>
        <li>Content is updated quarterly to reflect new research</li>
      </ul>

      <h2>Platform Architecture</h2>
      <p>
        ResolveStrength runs on a modern stack designed for performance, security, and scale. Our frontend is built in Next.js 14 with React Server Components for optimal rendering. The backend uses Supabase for real-time data, authentication, and row-level security. We serve 180,000+ monthly active users with 99.97% uptime.
      </p>

      <h2>Community & Coaching Layer</h2>
      <p>
        Members gain access to a moderated community of 12,000+ practitioners, weekly live Q&As with our coaching team, and progress tracking tools that integrate with Apple Health, Garmin, and Whoop. Our coaching staff includes 4 NSCA-certified strength coaches and 2 sports physiologists.
      </p>

      <h2>Monetisation</h2>
      <p>
        We operate on a freemium SaaS model. Core content and community access are free. Premium membership ($12/month) unlocks personalized periodization, video form checks, and 1:1 coaching consultations. We do not sell user data or run intrusive advertising. Our average revenue per user (ARPU) is $8.40/month.
      </p>

      <h2>Enterprise & B2B</h2>
      <p>
        We license our content library and coaching platform to 14 commercial gym chains and 6 university athletic departments. Enterprise clients receive white-labeled content portals, staff training, and custom programming for their member base.
      </p>
    </SubPage>
  );
}