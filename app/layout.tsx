import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { brand } from "@/lib/brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description:
    "Treelance connects to the candidate database your energy staffing agency already owns, keeps it live through AI agents on WhatsApp & Telegram, and turns every open role into a shortlist of people who are available, certified and interested.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Stop re-sourcing the candidates you already own. Treelance makes your energy talent database live and surfaces people who already said yes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
