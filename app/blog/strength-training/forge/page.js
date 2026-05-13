import ArticleSection from "@/Components/ArticleSection";

export const metadata = {
  title: "Forge | Strength Training | ResolveStrength",
  description: "Build raw power and structural resilience through science-backed programming.",
};

export default function ForgePage() {
  return (
    <ArticleSection
      category="Strength Training"
      blogTitle="Forge"
      blogDescription="Build raw power and structural resilience through science-backed programming."
      featured={true}
    />
  );
}