"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RootPageAnimation = () => {
  const { push } = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      push("/home");
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Logo */}
        <div
          className="relative w-32 h-32 md:w-40 md:h-40"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-easing="ease-out-cubic"
        >
          <Image
            src="/logo.png"
            alt="Grace City Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <p
            className="text-sm md:text-base uppercase tracking-wider text-gray-500 mb-2"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
            data-aos-easing="ease-out-cubic"
          >
            The Redeemed Christian Church of God
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[14px]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            data-aos-easing="ease-out-cubic"
          >
            GRACE CITY
          </h1>
        </div>
      </div>
    </section>
  );
};

export const metadata = {
  title: "Grace City",
  description:
    "Welcome to Grace City, a place where grace speaks and lives are transformed.",
};

export default RootPageAnimation;
