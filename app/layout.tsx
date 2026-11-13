import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    "Full-stack engineer and founder building web, mobile, and AI systems for startups. 10+ years shipping products that have to work in production.",
  metadataBase: new URL(site.siteUrl),
  openGraph: {
    title: `${site.name} — Resume & Portfolio`,
    description: heroOgDescription(),
    url: site.siteUrl,
    siteName: site.name,
    images: [{ url: site.ogImage }],
    type: "website",
  },
  icons: {
    icon: "/images/icon.jpg",
  },
};

function heroOgDescription() {
  return "I take messy product ideas and turn them into systems teams can ship, scale, and maintain.";
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="site-shell min-h-full antialiased">{children}</body>
    </html>
  );
}
