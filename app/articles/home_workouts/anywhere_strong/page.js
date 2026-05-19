import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "Anywhere Strong: Train Without Equipment — ResolveStrength",
  description: "A complete guide to building real strength with nothing but your bodyweight and floor space.",
};

export default function Page() {
  return (
    <BlogPost
      category="Home Workouts"
      categorySlug="home_workouts"
      tag="BODYWEIGHT"
      readTime="6 min"
      title="Anywhere Strong: Train Without Equipment"
      subtitle="A complete guide to building real strength with nothing but your bodyweight and floor space."
      author="ResolveStrength Editorial"
      featuredImage="https://qvqrllepiterihelgckb.supabase.co/storage/v1/object/public/Assets/Articles/home_workouts/anywhere_strong.webp"
      date="Coming soon"
    />
  );
}