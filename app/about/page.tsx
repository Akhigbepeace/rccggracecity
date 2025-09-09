"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import MissionVision from "../component/mission-vision";

const AboutPage = () => {
  const galleryImages = Array.from(
    { length: 20 },
    (_, i) => `/gallery/image-${i + 1}.png`
  );

  const duplicatedImages = [...galleryImages, ...galleryImages];

  const leaderships = [
    {
      pic: "/micheal.png",
      name: "Pastor Micheal Nzekwe",
      role: "Pastor-in-charge",
    },
    {
      pic: "/agatha.png",
      name: "Pastor Mrs. Agatha Nzekwe",
      role: "Pastor-in-charge",
    },
    {
      pic: "/bishop.png",
      name: "Jeff Adeyanju (Bishop)",
      role: "Asst. Pastor-in-charge/MD",
    },
    {
      pic: "/mummy-bishop.png",
      name: "Dcns. Joyce Jeff Adeyanju",
      role: "Asst. MD",
    },
  ];

  return (
    <main className="space-y-28 bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-lightGray to-white">
        {/* Background image */}
        <div className="absolute inset-0">
          <div className="h-[800px] w-full relative">
            <Image
              src="/about-hero.png"
              alt="Grace City Background"
              fill
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* White gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />

        {/* Content */}
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="text-white">About </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary drop-shadow-md relative">
              GRACE CITY
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white">
            A place where lives are transformed through the Word, worship, and
            fellowship.
          </p>
        </div>

        <div className="custom-shape-divider-bottom-1757413089">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="relative container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <SectionTitle title="Who We Are" />
          <p className="mt-6 text-darkText leading-relaxed">
            Our church is a family of believers dedicated to spreading the love
            of Christ. We believe in teaching biblical truths, building strong
            relationships, and serving our community. Whether you are new to
            faith or looking for a spiritual home, you belong here.
          </p>
        </div>

        {/* Video */}
        <div
          className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl group"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <iframe
            className="w-full h-full rounded-3xl"
            src="https://www.youtube.com/embed/ysz5S6PUM-U"
            title="Church Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <MissionVision />

      {/* Leadership */}
      <section className="relative z-10 px-6 md:px-12 py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          className="text-center mb-20"
        >
          <SectionTitle title="Our Leadership" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Meet the visionary leaders driving our mission forward with
            expertise, passion, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {leaderships.map((leadership, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={i * 150}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xs transition-all duration-500 border border-gray-100/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-primary/20 transition-all duration-500">
                      <Image
                        src={leadership.pic}
                        alt={leadership.name}
                        width={300}
                        height={300}
                        // objectPosition="top center"
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {leadership.name}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium tracking-wide uppercase letter-spacing-wide">
                      {leadership.role}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary/60 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl transform -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/8 to-transparent rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <SectionTitle title="Gallery" />

            <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Explore moments that define our journey through this curated
              collection of memories and milestones.
            </p>
          </div>

          {/* Enhanced Swiper */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                el: ".swiper-pagination-custom",
              }}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 25,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 35,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="gallery-swiper"
            >
              {duplicatedImages.map((image, index) => (
                <SwiperSlide key={index} className="pb-12">
                  <div className="group cursor-pointer">
                    {/* Main Image Card */}
                    <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2">
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={image}
                          alt={`Gallery ${index}`}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />

                        {/* Multi-layered overlays */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Elegant overlay content */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/50">
                            <div className="flex items-center space-x-2 text-gray-800">
                              <svg
                                className="w-5 h-5 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                ></path>
                              </svg>
                              <span className="font-medium text-sm">View</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative border glow */}
                      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 group-hover:ring-primary/30 transition-all duration-500"></div>
                    </div>

                    {/* Floating number badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500 z-10">
                      <span className="text-white text-sm font-semibold">
                        {image}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center cursor-pointer hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </div>

            <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center cursor-pointer hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
          </div>
        </div>

        <style jsx>{`
          .gallery-swiper .swiper-slide {
            transition: all 0.3s ease;
          }

          .gallery-swiper .swiper-slide:not(.swiper-slide-active) {
            opacity: 0.7;
            transform: scale(0.95);
          }

          .swiper-pagination-custom .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #e5e7eb;
            opacity: 1;
            margin: 0 6px;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .swiper-pagination-custom .swiper-pagination-bullet-active {
            background: linear-gradient(
              135deg,
              var(--primary-color, #3b82f6),
              var(--primary-color-dark, #2563eb)
            );
            transform: scale(1.2);
          }

          .swiper-pagination-custom .swiper-pagination-bullet:hover {
            transform: scale(1.1);
          }
        `}</style>
      </section>
    </main>
  );
};

// Section Title
const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-heading relative inline-block text-darkText">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary mb-2">
        {title}
      </span>
      {/* <span className="block w-20 h-1 bg-gradient-to-r from-primary via-purple-400 to-primary mt-2 rounded-full animate-pulse" /> */}
      <div className="flex items-center justify-center space-x-2">
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/60 rounded-full"></div>
        <div className="w-2 h-2 bg-primary/80 rounded-full"></div>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
        <div className="w-2 h-2 bg-primary/80 rounded-full"></div>
        <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary/60 rounded-full"></div>
      </div>
    </h2>
  );
};

export default AboutPage;
