import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ResolveStrength — Build. Persist. Resolve.",
  description:
    "ResolveStrength is a platform dedicated to the science and practice of building lasting mental and physical strength.",
  keywords: ["strength", "resilience", "mental health", "fitness", "science"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="page-shell">
          <Navbar />
          <main className="page-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
