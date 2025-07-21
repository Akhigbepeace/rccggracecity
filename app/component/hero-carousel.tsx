"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    src: "/church.png",
    title: "Welcome to Grace City",
    sub: "Where grace meets purpose and lives are transformed.",
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
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        speed={1200}
        
        pagination={{ clickable: true }}
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
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-heading drop-shadow-md mb-4">
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
    </section>
  );
};

export default HeroCarousel;
