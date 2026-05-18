import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "Forge: Building Strength from First Principles — ResolveStrength",
  description: "A return to the fundamentals — why progressive overload, tension, and recovery are all you need.",
};

export default function Page() {
  return (
    <BlogPost
      category="Strength Training"
      categorySlug="strength_trainig"
      tag="FEATURED"
      readTime="10 min"
      title="Forge: Building Strength from First Principles"
      subtitle="A return to the fundamentals — why progressive overload, tension, and recovery are all you need."
      author="ResolveStrength Editorial"
      date="Coming soon"
      featuredImage="https://qvqrllepiterihelgckb.supabase.co/storage/v1/object/public/Assets/Articles/strength_trainig/forge.webp"
    />
  );
}