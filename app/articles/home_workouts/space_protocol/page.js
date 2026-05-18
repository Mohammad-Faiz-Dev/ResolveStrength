import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "Space Protocol: Programming for Small Spaces — ResolveStrength",
  description: "Smart periodisation and exercise selection when you have limited room to train.",
};

export default function Page() {
  return (
    <BlogPost
      category="Home Workouts"
      categorySlug="home_workouts"
      tag="PROTOCOL"
      readTime="9 min"
      title="Space Protocol: Programming for Small Spaces"
      subtitle="Smart periodisation and exercise selection when you have limited room to train."
      author="ResolveStrength Editorial"
      date="Coming soon"
    />
  );
}