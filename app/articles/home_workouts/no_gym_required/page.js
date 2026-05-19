import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "No Gym Required: The Case for Training at Home — ResolveStrength",
  description: "Why removing the commute, cost, and crowds can actually improve your consistency.",
};

export default function Page() {
  return (
    <BlogPost
      category="Home Workouts"
      categorySlug="home_workouts"
      tag="GUIDE"
      readTime="5 min"
      title="No Gym Required: The Case for Training at Home"
      subtitle="Why removing the commute, cost, and crowds can actually improve your consistency."
      author="ResolveStrength Editorial"
      featuredImage="https://qvqrllepiterihelgckb.supabase.co/storage/v1/object/public/Assets/Articles/home_workouts/Man_training_at_home.webp"
      date="Coming soon"
    />
  );
}