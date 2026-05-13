/**
 * /app/blog/recovery-wellness/page.js
 */

import CategoryPage from "@/components/blog/CategoryPage";
import { BLOG_DATA } from "@/components/blog/blogData";

export const metadata = {
  title: "Recovery & Wellness — ResolveStrength Blog",
  description:
    "Supercharge adaptation and longevity with protocols rooted in sleep science and regenerative practice.",
};

export default function RecoveryWellnessPage() {
  return (
    <CategoryPage
      categorySlug="recovery-wellness"
      data={BLOG_DATA["recovery-wellness"]}
    />
  );
}