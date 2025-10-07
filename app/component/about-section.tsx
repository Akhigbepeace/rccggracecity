"use client";

import Image from "next/image";
import SectionTitle from "./shared/section-title";

const AboutSection = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Single elegant background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)] rounded-full opacity-40 transform translate-x-48 -translate-y-48"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          {/* Content Side - Clean & Elegant */}
          <div
            className="space-y-10"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {/* Simple heading */}
            <SectionTitle title="Who We Are" />

            {/* Clean content */}
            <div className="space-y-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                GraceCity is not just a church — it&apos;s a movement of grace,
                a sanctuary for souls, and a beacon of purpose in the heart of
                Abuja.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                With dynamic worship, life-transforming teachings, and a heart
                for community, we are committed to raising leaders, empowering
                families, and revealing Christ to our generation. We are big enough to accomodate you and small enough to know you
              </p>
            </div>

            {/* Elegant quote */}
            <div className="border-l-4 rounded-xl border-primary p-4 ml-5">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                <q>
                  We&apos;re not just building a church — we&apos;re raising a
                  people of purpose.
                </q>
              </blockquote>
              <cite className="text-sm text-gray-500 font-medium not-italic">
                — Pastor Michael & Pastor (Mrs.) Agatha Nzekwe
              </cite>
            </div>
          </div>

          {/* Image Side - Simple & Impactful */}
          <div
            className="relative flex justify-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
              {/* Single subtle shadow */}
              <div className="absolute -inset-4 bg-[var(--accent)] rounded-full opacity-30"></div>

              {/* Clean image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/michael-and-agatha.png"
                  alt="Pastor Michael and Pastor Agatha Nzekwe"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
