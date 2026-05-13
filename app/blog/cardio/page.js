/**
 * /app/blog/cardio/page.js
 */

import CategoryPage from "@/components/blog/CategoryPage";
import { BLOG_DATA } from "@/components/blog/blogData";

export const metadata = {
  title: "Cardio & Endurance — ResolveStrength Blog",
  description:
    "Expand your aerobic ceiling and metabolic capacity with evidence-based endurance training.",
};

export default function CardioPage() {
  return (
    <CategoryPage
      categorySlug="cardio"
      data={BLOG_DATA["cardio"]}
    />
  );
}