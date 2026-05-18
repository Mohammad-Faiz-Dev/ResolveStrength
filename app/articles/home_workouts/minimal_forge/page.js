import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "Minimal Forge: Maximum Results with Minimum Equipment — ResolveStrength",
  description: "Resistance bands, a pull-up bar, and a floor — here is everything you need.",
};

export default function Page() {
  return (
    <BlogPost
      category="Home Workouts"
      categorySlug="home_workouts"
      tag="MINIMAL"
      readTime="7 min"
      title="Minimal Forge: Maximum Results with Minimum Equipment"
      subtitle="Resistance bands, a pull-up bar, and a floor — here is everything you need."
      author="ResolveStrength Editorial"
      date="Coming soon"
    />
  );
}