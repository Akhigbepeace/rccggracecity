"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    src: "/church.png",
    title: "Welcome to Grace City",
    sub: "A vibrant RCCG parish and Zonal HQ where lives are transformed by The Word, Worship & God's Grace.",
  },
  {
    src: "/worship.png",
    title: "A Place of Purpose",
    sub: "Find direction, community, and a home in Christ.",
  },
  {
    src: "/sermon.png",
    title: "Experience the Word",
    sub: "Sound teaching rooted in love and truth.",
  },
];

const HeroCarousel = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        speed={1500}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl drop-shadow-md mb-4 font-bold">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg max-w-2xl text-white/90 font-body">
                  {slide.sub}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Down Mouse Icon */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-50">
        <div className="w-8 h-12 border-2 border-white/90 rounded-full flex justify-center items-start relative animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-white text-sm mt-3 tracking-widest opacity-90 drop-shadow-md">
          Scroll Down
        </p>
      </div>

    </section>
  );
};

export default HeroCarousel;
