import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "Build Your Aerobic Base from the Ground Up — ResolveStrength",
  description: "How progressive cardio training reshapes your cardiovascular system for lasting endurance.",
};

export default function Page() {
  return (
    <BlogPost
      category="Cardio & Endurance"
      categorySlug="cardio_and_endurance"
      tag="ENDURANCE"
      readTime="7 min"
      title="Build Your Aerobic Base from the Ground Up"
      subtitle="How progressive cardio training reshapes your cardiovascular system for lasting endurance."
      author="ResolveStrength Editorial"
      featuredImage="https://qvqrllepiterihelgckb.supabase.co/storage/v1/object/public/Assets/Articles/cardio_&_endurance/aerobic_base.webp"
      date="Coming soon"
    />
  );
}