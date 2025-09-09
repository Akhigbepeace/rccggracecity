"use client";

import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const events = [
  {
    title: "Youth Manifestation Sunday",
    date: "September 13, 2025",
    time: "9:00 PM",
    image: "/assets/images/events/event3.jpg",
  },
  {
    title: "Prophetic Worship Night",
    date: "August 12, 2025",
    time: "7:00 PM",
    image: "/assets/images/events/event1.jpg",
  },
  {
    title: "Sunday Celebration Service",
    date: "August 17, 2025",
    time: "9:00 AM",
    image: "/assets/images/events/event2.jpg",
  },
];

const UpcomingEvents = () => {
  return (
    <section
      className="py-20 px-4 md:px-10 lg:px-20 bg-gray-50"
      id="upcoming-events"
    >
      <div data-aos="fade-up" className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Upcoming Events
        </h2>
        <p className="text-gray-600">
          Stay connected and don&apos;t miss out on what&apos;s happening next.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white shadow-xl rounded-xl overflow-hidden h-full"
            >
              <div className="w-full h-[192px] relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  // width={500}
                  // height={192}
                  fill
                  unoptimized={event.image.startsWith("http")}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-darkText mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Time:</strong> {event.time}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default UpcomingEvents;
