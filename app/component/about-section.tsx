"use client";

import Image from "next/image";

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
            <div className="space-y-6">
              <h2 className="text-5xl font-[var(--font-heading)] text-[var(--dark-text)] leading-tight">
                Who We Are
              </h2>
              <div className="w-16 h-0.5 bg-[var(--primary)]"></div>
            </div>

            {/* Clean content */}
            <div className="space-y-8">
              <p className="text-base md:text-lg text-gray-700 font-[var(--font-body)] leading-relaxed">
                GraceCity is not just a church — it's a movement of grace, a
                sanctuary for souls, and a beacon of purpose in the heart of
                Abuja.
              </p>

              <p className="text-lg text-gray-600 font-[var(--font-body)] leading-relaxed">
                With dynamic worship, life-transforming teachings, and a heart
                for community, we are committed to raising leaders, empowering
                families, and revealing Christ to our generation.
              </p>
            </div>

            {/* Elegant quote */}
            <div className="border-l-2 border-[var(--primary)] pl-8 py-4">
              <blockquote className="text-xl italic text-gray-700 font-[var(--font-body)] mb-4">
                "We're not just building a church — we're raising a people of
                purpose."
              </blockquote>
              <cite className="text-base text-gray-500 font-medium not-italic">
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
