import CategoryPage from "@/components/blog/CategoryPage";
import { BLOG_DATA } from "@/components/blog/blogdata";

export const metadata = {
  title: "Cardio & Endurance — ResolveStrength",
  description: "VO2 max, work capacity, and sustainable protocols for aerobic performance that lasts.",
};

export default function CardioEndurancePage() {
  return (
    <CategoryPage
      categorySlug="cardio_&_endurance"
      data={BLOG_DATA["cardio_&_endurance"]}
    />
  );
}