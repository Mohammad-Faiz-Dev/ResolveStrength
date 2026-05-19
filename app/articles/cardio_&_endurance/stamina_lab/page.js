import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "The Stamina Lab: Building Work Capacity That Lasts — ResolveStrength",
  description: "Methodical training protocols designed to expand your endurance ceiling week by week.",
};

export default function Page() {
  return (
    <BlogPost
      category="Cardio & Endurance"
      categorySlug="cardio_and_endurance"
      tag="TRAINING"
      readTime="8 min"
      title="The Stamina Lab: Building Work Capacity That Lasts"
      subtitle="Methodical training protocols designed to expand your endurance ceiling week by week."
      author="ResolveStrength Editorial"
      featuredImage="https://qvqrllepiterihelgckb.supabase.co/storage/v1/object/public/Assets/Articles/cardio_&_endurance/the_stamina_lab.webp"
      date="Coming soon"
    />
  );
}