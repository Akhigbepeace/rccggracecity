import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import { ReactNode } from "react";
import ClientLayoutWrapper from "./component/client-layout-wrapper";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "GraceCity",
  description: "Official website of RCCG GraceCity Abuja",
};

type RootLayoutProp = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProp) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
    </html>
  );
}
