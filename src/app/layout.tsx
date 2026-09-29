import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { content } from "@/data/content";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: `${content.name} — ${content.title}`,
  description: `${content.name} is a ${content.title}. ${content.tagline} Explore selected commercial, narrative, and documentary works.`,
  keywords: [
    "Video Editor",
    "Cinematographer",
    "Director of Photography",
    "Color Grading",
    "Film Production",
    content.name,
  ],
  authors: [{ name: content.name }],
  openGraph: {
    title: `${content.name} — ${content.title}`,
    description: `${content.name} is a ${content.title}. ${content.tagline}`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${content.name} Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${content.name} — ${content.title}`,
    description: `${content.name} is a ${content.title}. ${content.tagline}`,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/icon-192.png",
  },
};

import { LoadingProvider } from "@/context/LoadingContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <LoadingProvider>
          <Navbar />
          {children}
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
