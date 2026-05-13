/**
 * /app/blog/home-workouts/page.js
 */

import CategoryPage from "@/components/blog/CategoryPage";
import { BLOG_DATA } from "@/components/blog/blogData";

export const metadata = {
  title: "Home Workouts — ResolveStrength Blog",
  description:
    "No gym required. Full-body programming designed for any space with minimal equipment.",
};

export default function HomeWorkoutsPage() {
  return (
    <CategoryPage
      categorySlug="home-workouts"
      data={BLOG_DATA["home-workouts"]}
    />
  );
}