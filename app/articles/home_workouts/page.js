import CategoryPage from "@/components/blog/CategoryPage";
import { BLOG_DATA } from "@/components/blog/blogdata";

export const metadata = {
  title: "Home Workouts — ResolveStrength",
  description: "No gym, no excuses. Equipment-minimal and bodyweight training built for real consistency.",
};

export default function HomeWorkoutsPage() {
  return (
    <CategoryPage
      categorySlug="home_workouts"
      data={BLOG_DATA["home_workouts"]}
    />
  );
}