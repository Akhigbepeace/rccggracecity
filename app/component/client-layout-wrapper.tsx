"use client";

import { useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./shared/navbar";
import Footer from "./shared/footer";

type ClientLayoutWrapperProp = {
  children: ReactNode;
};

const ClientLayoutWrapper = ({ children }: ClientLayoutWrapperProp) => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const isRoot = pathname === "/";

  return (
    <body className="font-body bg-white text-darkText">
      {!isRoot && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!isRoot && <Footer />}
    </body>
  );
};

export default ClientLayoutWrapper;
