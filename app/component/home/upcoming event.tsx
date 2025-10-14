"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "Youth Convention",
    date: "October 19, 2025",
    time: "9:00 AM",
    image: "/events/youth-convention.png",
  },
  {
    title: "Envagelism and Outreach",
    date: "October 25, 2025",
    time: "9:00 AM",
    image: "/events/youth-convention.png",
  },
  {
    title: "Family Sunday",
    date: "October 26, 2025",
    time: "9:00 AM",
    image: "/events/family-sunday.png",
  },
];

const UpcomingEvents = () => {
  const displayedEvents = events.slice(0, 3);

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

      {/* Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {displayedEvents.map((event, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="w-full h-[300px] relative">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                unoptimized={event.image.startsWith("http")}
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-darkText mb-2">
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
        ))}
      </div>

      {/* View More Button */}
      {events.length > 3 && (
        <div className="text-center mt-12">
          <Link
            href="/events"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            View More Events
          </Link>
        </div>
      )}
    </section>
  );
};

export default UpcomingEvents;
