import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "Raw Power: Developing Explosive Strength — ResolveStrength",
  description: "The distinction between strength and power, and how to train both effectively.",
};

export default function Page() {
  return (
    <BlogPost
      category="Strength Training"
      categorySlug="strength_trainig"
      tag="POWER"
      readTime="8 min"
      title="Raw Power: Developing Explosive Strength"
      subtitle="The distinction between strength and power, and how to train both effectively."
      author="ResolveStrength Editorial"
      featuredImage="https://qvqrllepiterihelgckb.supabase.co/storage/v1/object/public/Assets/Articles/strength_trainig/raw_power.webp"
      date="Coming soon"
    />
  );
}