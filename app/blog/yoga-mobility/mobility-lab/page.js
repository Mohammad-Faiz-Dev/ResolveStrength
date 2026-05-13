import ArticleSection from "@/Components/ArticleSection";

export const metadata = {
  title: "Mobility Lab | Yoga & Mobility | ResolveStrength",
  description: "Unlock joint freedom and body awareness through movement practice.",
};

export default function MobilityLabPage() {
  return (
    <ArticleSection
      category="Yoga & Mobility"
      blogTitle="Mobility Lab"
      blogDescription="Unlock joint freedom and body awareness through movement practice."
      featured={true}
    />
  );
}