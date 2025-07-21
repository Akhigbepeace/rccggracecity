"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import Footer from "./footer";

type ClientLayoutWrapperProp = {
  children: ReactNode;
};

const ClientLayoutWrapper = ({ children }: ClientLayoutWrapperProp) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <body className="font-body bg-white text-darkText">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </body>
  );
};
export default ClientLayoutWrapper;
