import CategoryPage from "@/components/blog/CategoryPage";
import { BLOG_DATA } from "@/components/blog/blogdata";

export const metadata = {
  title: "Strength Training — ResolveStrength",
  description: "Progressive overload, structural mechanics, and evidence-based programming for building real strength.",
};

export default function StrengthTrainingPage() {
  return (
    <CategoryPage
      categorySlug="strength_trainig"
      data={BLOG_DATA["strength_trainig"]}
    />
  );
}