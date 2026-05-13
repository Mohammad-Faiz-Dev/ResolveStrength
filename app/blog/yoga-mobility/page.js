/**
 * /app/blog/yoga-mobility/page.js
 */

import CategoryPage from "@/components/blog/CategoryPage";
import { BLOG_DATA } from "@/components/blog/blogData";

export const metadata = {
  title: "Yoga & Mobility — ResolveStrength Blog",
  description:
    "Unlock joint freedom and body awareness through movement practices refined over centuries.",
};

export default function YogaMobilityPage() {
  return (
    <CategoryPage
      categorySlug="yoga-mobility"
      data={BLOG_DATA["yoga-mobility"]}
    />
  );
}