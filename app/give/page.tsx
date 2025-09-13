"use client";

import SectionTitle from "../component/shared/section-title";
import HeroSection from "../component/shared/hero-section";
import { FaHandHoldingHeart, FaUsers, FaBuilding } from "react-icons/fa";

export default function GivePage() {
  const givingOptions = [
    {
      title: "Tithes & Offerings",
      description:
        "Worship God through your tithes and offerings, supporting the work of ministry.",
      icon: <FaHandHoldingHeart className="w-8 h-8 text-primary" />,
      accountNumber: "1011138689",
    },
    {
      title: "Missions & Outreach",
      description:
        "Help us reach communities with the gospel and extend the love of Christ.",
      icon: <FaUsers className="w-8 h-8 text-primary" />,
      accountNumber: "1011578586",
    },
    {
      title: "Projects",
      description:
        "Partner with us as we build facilities to expand the Kingdom of God.",
      icon: <FaBuilding className="w-8 h-8 text-primary" />,
      accountNumber: "1011578586",
    },
    // {
    //   title: "Special Programs",
    //   description:
    //     "Support conferences, crusades, and events that transform lives.",
    //   icon: <FaChurch className="w-8 h-8 text-primary" />,
    //   accountNumber: "4567890123",
    // },
  ];

  return (
    <section className="relative bg-gradient-to-b from-lightGray via-white to-accent">
      {/* Hero Section */}
      <HeroSection
        image="/give-banner.png"
        headingOne="Give"
        headingTwo="Grace City"
        paragraph="Your generosity fuels our mission to spread the gospel and serve our community."
      />

      {/* Intro */}
      <div className="text-center mb-16 px-6" data-aos="fade-up">
        <SectionTitle title="Ways to Give" />
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Every gift is an act of worship and an investment into eternity.
          Choose where you’d like your giving to make an impact.
        </p>
      </div>

      {/* Giving Options Grid */}
      <div className="container mx-auto px-6 md:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {givingOptions.map((option, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-primary hover:shadow-2xl transition transform hover:scale-[1.02]"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="flex items-center gap-3 mb-4">
              {option.icon}
              <h3 className="text-xl text-darkText">{option.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <div className="text-sm text-gray-700 space-y-1 mb-6">
              <p>
                <span className="font-medium">Account Name:</span> RCCG Grace
                City
              </p>
              <p>
                <span className="font-medium">Bank:</span> Zenith Bank
              </p>
              <p>
                <span className="font-medium">Account No:</span>{" "}
                {option.accountNumber}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scripture */}
      <div
        className="mt-20 text-center max-w-3xl mx-auto px-6 py-10 rounded-xl bg-accent/40"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p className="text-2xl text-darkText leading-relaxed italic">
          “Each one must give as he has decided in his heart, not reluctantly or
          under compulsion, for God loves a cheerful giver.”
        </p>
        <span className="block mt-4 text-primary font-semibold">
          — 2 Corinthians 9:7
        </span>
      </div>
    </section>
  );
}
