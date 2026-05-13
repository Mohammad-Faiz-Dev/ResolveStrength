import ArticleSection from "@/Components/ArticleSection";

export const metadata = {
  title: "Home Ground | Home Workouts | ResolveStrength",
  description: "Full-body programming designed for any space with minimal equipment.",
};

export default function HomeGroundPage() {
  return (
    <ArticleSection
      category="Home Workouts"
      blogTitle="Home Ground"
      blogDescription="Full-body programming designed for any space with minimal equipment."
      featured={true}
    />
  );
}