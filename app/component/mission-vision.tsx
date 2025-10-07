"use client";

import { FaCross, FaEye } from "react-icons/fa";
import React, { ReactNode } from "react";
import "aos/dist/aos.css";

type CardProps = {
  title: string;
  content: ReactNode;
  icon: ReactNode;
  aos: string;
  delay?: number;
};

const MissionVision = () => {
  const Card = (props: CardProps) => {
    const { title, content, icon } = props;

    return (
      <div
        className="group bg-white border-2 border-accent rounded-3xl p-10 transition-transform duration-500 ease-in-out hover:-translate-y-2 relative overflow-hidden"
        data-aos={props.aos}
        data-aos-delay={props.delay}
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-full blur-2xl transform transition-transform duration-700 ease-in-out group-hover:scale-125" />

        <div className="relative flex flex-col items-center text-center">
          <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full">
            {icon}
          </div>
          <h3 className="text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            {title}
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-2 text-left text-base">
            {content}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-10 mb-0 bg-gradient-to-b from-[#f8f8f8] via-lightGray/40 to-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />

      <div
        className="relative container mx-auto px-6 md:px-12 text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2 className="text-4xl md:text-5xl mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
            Mission & Vision
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The heartbeat of Grace City — our calling, our dream, and our guiding
          principles.
        </p>
      </div>

      <div className="relative container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10">
        <Card
          title="Our Vision"
          content={
            <ul className="list-disc list-inside space-y-1">
              <li>To make heaven.</li>
              <li>To take as many people as possible with them to heaven.</li>
              <li>
                To have a member of RCCG in every family in all nations.
              </li>
            </ul>
          }
          icon={<FaEye className="text-purple-500 text-4xl" />}
          aos="fade-right"
          delay={0}
        />
        <Card
          title="Our Mission"
          content={
            <ul className="list-disc list-inside space-y-1">
              <li>
                To make holiness a lifestyle to achieve the vision of making
                heaven.
              </li>
              <li>
                To plant churches within five minutes walking distance in
                developing countries and five minutes driving distance in
                developed countries.
              </li>
              <li>
                To pursue these objectives until every nation in the world is
                reached for Jesus Christ.
              </li>
            </ul>
          }
          icon={<FaCross className="text-primary text-4xl" />}
          aos="fade-left"
          delay={200}
        />
      </div>
    </section>
  );
};

export default MissionVision;
