/**
 * /app/blog/strength-training/page.js
 */

import CategoryPage from "@/components/blog/CategoryPage";
import { BLOG_DATA } from "@/components/blog/blogData";

export const metadata = {
  title: "Strength Training — ResolveStrength Blog",
  description:
    "Build a foundation of raw power and structural resilience through science-backed strength programming.",
};

export default function StrengthTrainingPage() {
  return (
    <CategoryPage
      categorySlug="strength-training"
      data={BLOG_DATA["strength-training"]}
    />
  );
}