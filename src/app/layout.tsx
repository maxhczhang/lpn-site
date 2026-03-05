import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Lambda Phi Nu | Business Leadership Fraternity at UCI",
  description:
    "Lambda Phi Nu is a co-ed business leadership fraternity founded at UC Irvine in 2010, committed to developing the next generation of leaders.",
  keywords: ["Lambda Phi Nu", "LPN", "UCI", "business fraternity", "leadership", "UC Irvine"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
<body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
