import type { Metadata } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    "Full-stack engineer and founder building web, mobile, and AI systems for startups. 10+ years shipping products that have to work in production.",
  metadataBase: new URL(site.siteUrl),
  openGraph: {
    title: `${site.name} — Portfolio`,
    description:
      "I build the messy parts of products so teams can ship with less drama.",
    url: site.siteUrl,
    siteName: site.name,
    images: [{ url: site.ogImage }],
    type: "website",
  },
  icons: {
    icon: "/images/icon.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${syne.variable} ${plex.variable} h-full`}>
      <body className="site-shell min-h-full antialiased">{children}</body>
    </html>
  );
}
