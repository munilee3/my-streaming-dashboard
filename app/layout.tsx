import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Streaming Dashboard",
  description: "Netflix-like dashboard built with Next.js 14 & TMDB API"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">
        <Header />
        <main className="px-4 md:px-8 mt-20">{children}</main>
      </body>
    </html>
  );
}