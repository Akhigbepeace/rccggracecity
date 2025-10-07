"use client";

import Image from "next/image";
import MissionVision from "../component/mission-vision";
import SectionTitle from "../component/shared/section-title";
import HeroSection from "../component/shared/hero-section";

const AboutPage = () => {
  const leaderships = [
    {
      pic: "/micheal.png",
      name: "Pastor Micheal Nzekwe",
      role: "Pastor-in-charge",
    },
    {
      pic: "/agatha.png",
      name: "Pastor Mrs. Agatha Nzekwe",
      role: "W/Pastor-in-charge",
    },
    {
      pic: "/bishop.png",
      name: "Jeff Adeyanju (Bishop)",
      role: "Asst. Pastor",
    },
    {
      pic: "/mummy-bishop.png",
      name: "Dcns. Joyce Jeff Adeyanju",
      role: "W/Asst. Pastor",
    },
  ];

  return (
    <main className="space-y-28 bg-white">
      {/* Hero Section */}
      <HeroSection
        image="/banners/about-hero.png"
        headingOne="About"
        headingTwo="GRACE CITY"
        paragraph="A place where lives are transformed through the Word, worship, and fellowship."
      />

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
          <Image
            src="/abt-gc.png"
            alt="Grace City Abuja"
            fill
            className="object-cover"
          />
          {/* <iframe
            className="w-full h-full rounded-3xl"
            src="https://www.youtube.com/embed/ysz5S6PUM-U"
            title="Church Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <MissionVision />

      {/* Leadership */}
      <section className="relative px-6 md:px-12 py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
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

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
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

                <div className="relative flex flex-col items-center text-center space-y-6">
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
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
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
    </main>
  );
};

// Section Title

export default AboutPage;
