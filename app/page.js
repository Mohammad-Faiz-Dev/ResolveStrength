/**
 * /app/page.js — Homepage
 * HeroSection + ArticleSection (updated blog preview).
 * ArticleSection now links to /blog and shows one card per category.
 */

import HeroSection from "@/components/HeroSection";
import ArticleSection from "@/components/ArticleSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ArticleSection />
    </>
  );
}