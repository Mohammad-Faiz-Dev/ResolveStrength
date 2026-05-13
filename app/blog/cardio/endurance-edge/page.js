import ArticleSection from "@/Components/ArticleSection";

export const metadata = {
  title: "Endurance Edge | Cardio & Endurance | ResolveStrength",
  description: "Expand your aerobic ceiling with evidence-based endurance training.",
};

export default function EnduranceEdgePage() {
  return (
    <ArticleSection
      category="Cardio & Endurance"
      blogTitle="Endurance Edge"
      blogDescription="Expand your aerobic ceiling with evidence-based endurance training."
      featured={true}
    />
  );
}