import CategoryPage from "@/components/blog/CategoryPage";
import { BLOG_DATA } from "@/components/blog/blogdata";

export const metadata = {
  title: "Yoga & Mobility — ResolveStrength",
  description: "Joint health, flexibility science, and movement quality for athletes who want to last.",
};

export default function YogaMobilityPage() {
  return (
    <CategoryPage
      categorySlug="yoga_&_mobility"
      data={BLOG_DATA["yoga_&_mobility"]}
    />
  );
}