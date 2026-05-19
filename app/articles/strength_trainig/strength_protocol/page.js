import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "Strength Protocol — Strength Training | ResolveStrength",
  description: "Evidence-based strength training protocols for every level.",
};

export default function StrengthProtocolPage() {
  return (
    <BlogPost
      category="Strength Training"
      categorySlug="strength-training"
      tag="Protocol Design"
      title="Strength Protocol: Designing Training That Actually Works"
      subtitle="From rep ranges to rest periods — the variables that separate effective programming from guesswork."
      readTime="12 min"
      author="ResolveStrength Editorial"
      featuredImage="https://qvqrllepiterihelgckb.supabase.co/storage/v1/object/public/Assets/Articles/strength_trainig/strength_protocol.webp"
      date="Coming Soon"
    />
  );
}