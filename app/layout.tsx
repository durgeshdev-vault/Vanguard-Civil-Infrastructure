import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Vanguard Civil Infrastructure",
  description: "A Civil Engineering company based in United Kingdom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${cormorant.variable} h-full scroll-smooth `}
    >
      <body className="min-h-full flex flex-col font-jost antialiased selection:bg-[#A68936] selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
