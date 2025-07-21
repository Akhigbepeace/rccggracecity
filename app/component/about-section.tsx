"use client";

import Image from "next/image";
// import abstract from "@/assets/abstract-blob.svg"; // placeholder, replace as needed

export default function AboutSection() {
  return (
    <section className="relative px-4 md:px-10 py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left: Text */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-3xl md:text-5xl font-heading text-[color:var(--color-primary)] mb-6">
            Who We Are
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-body mb-4 leading-relaxed">
            GraceCity is not just a church — it's a movement of grace, a
            sanctuary for souls, and a beacon of purpose in the heart of Abuja.
            Here, people from every walk of life come together to experience
            God's presence.
          </p>
          <p className="text-base md:text-lg text-gray-700 font-body leading-relaxed">
            With dynamic worship, life-transforming teachings, and a heart for
            community, we are committed to raising leaders, empowering families,
            and revealing Christ to our generation.
          </p>
        </div>

        {/* Right: Image / Shape */}
        <div
          className="relative flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* <Image
            src={abstract}
            alt="Grace abstract"
            width={400}
            height={400}
            className="opacity-90"
          /> */}
        </div>
      </div>
    </section>
  );
}
