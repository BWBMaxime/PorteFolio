import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MotionConfig } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maxime Guichon | Expert SIS & Développeur Fullstack",
  description: "Portfolio de Maxime Guichon, Expert en Informatique et Systèmes d'Information (Bac+5). Spécialisé en architecture .NET, React et pilotage de projets complexes à Montpellier.",
  keywords: ["Développeur Fullstack", "Expert SIS", ".NET 9", "React", "Montpellier", "Architecture Logicielle", "Maxime Guichon"],
  authors: [{ name: "Maxime Guichon" }],
  creator: "Maxime Guichon",
  robots: "index, follow",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-[#F8FAFC] selection:bg-accent/30`}
      >
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}