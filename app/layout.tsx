import "./globals.css";
import "aos/dist/aos.css";
import { Inter, Playfair_Display } from "next/font/google";
import { ReactNode } from "react";
import ClientLayoutWrapper from "./component/client-layout-wrapper";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "RCCG Grace City | Abuja",
  description:
    "Official website of RCCG Grace City Abuja — a place where lives are transformed through the Word, worship, and fellowship.",
  keywords: [
    "RCCG",
    "Grace City",
    "Grace City Abuja",
    "Church in Abuja",
    "RCCG Grace City",
    "Redeemed Christian Church of God",
    "Christian Fellowship",
    "Worship",
    "Abuja Churches",
  ],
  authors: [{ name: "RCCG Grace City" }],
  creator: "RCCG Grace City",
  publisher: "RCCG Grace City Abuja",
  metadataBase: new URL("https://www.rccggracecity.org"),
  openGraph: {
    title: "RCCG Grace City | Abuja",
    description:
      "Discover RCCG Grace City Abuja — a community of faith, worship, and transformation through the Word of God.",
    url: "https://www.rccggracecity.org",
    siteName: "RCCG Grace City",
    images: [
      {
        url: "https://www.rccggracecity.org/logo.png",
        width: 1200,
        height: 630,
        alt: "RCCG Grace City Abuja",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RCCG Grace City | Abuja",
    description:
      "A place where lives are transformed through the Word, worship, and fellowship. Join us at RCCG Grace City Abuja.",
    images: ["https://www.rccggracecity.org/logo.png"],
    creator: "@gracecityabuja",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

type RootLayoutProp = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProp) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-white text-darkText">
        <Analytics />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
