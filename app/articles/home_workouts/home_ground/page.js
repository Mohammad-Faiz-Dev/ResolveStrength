import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "Home Ground: Making Your Space Your Gym — ResolveStrength",
  description: "How to set up, structure and stay consistent with home-based training.",
};

export default function Page() {
  return (
    <BlogPost
      category="Home Workouts"
      categorySlug="home_workouts"
      tag="FEATURED"
      readTime="8 min"
      title="Home Ground: Making Your Space Your Gym"
      subtitle="How to set up, structure and stay consistent with home-based training."
      author="ResolveStrength Editorial"
      date="Coming soon"
      featuredImage="https://qvqrllepiterihelgckb.supabase.co/storage/v1/object/public/Assets/Articles/home_workouts/home_ground.webp"
    />
  );
}