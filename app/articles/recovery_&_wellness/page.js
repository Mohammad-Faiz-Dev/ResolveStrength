import CategoryPage from "@/components/blog/CategoryPage";
import { BLOG_DATA } from "@/components/blog/blogdata";

export const metadata = {
  title: "Recovery & Wellness — ResolveStrength",
  description: "Sleep, nutrition timing, and the adaptation science that turns hard training into real gains.",
};

export default function RecoveryWellnessPage() {
  return (
    <CategoryPage
      categorySlug="recovery_&_wellness"
      data={BLOG_DATA["recovery_&_wellness"]}
    />
  );
}