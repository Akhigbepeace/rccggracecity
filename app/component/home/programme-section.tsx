"use client";

import React from "react";
import { FaPrayingHands, FaBible, FaPeopleArrows } from "react-icons/fa";
import { MdOutlineFamilyRestroom } from "react-icons/md";

const programs = [
  {
    title: "Sunday Worship",
    description:
      "Join us every Sunday for spirit-filled worship, powerful word, and divine encounters.",
    icon: <FaPrayingHands className="text-4xl text-indigo-600" />,
  },
  {
    title: "Bible Study",
    description:
      "Dig deeper into the Word every Wednesday. Grow in truth, grace, and wisdom.",
    icon: <FaBible className="text-4xl text-green-600" />,
  },
  {
    title: "Youth & Teens",
    description:
      "Empowering the next generation through mentorship, teachings, and kingdom service.",
    icon: <MdOutlineFamilyRestroom className="text-4xl text-pink-500" />,
  },
  {
    title: "Evangelism",
    description:
      "Taking the gospel beyond the walls. Join our outreach teams every Saturday.",
    icon: <FaPeopleArrows className="text-4xl text-yellow-500" />,
  },
];

const ProgramsSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-4 md:px-20" id="programs">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Programs
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Experience God through our vibrant weekly and monthly activities
          designed to impact lives.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center transition hover:scale-[1.03] duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex justify-center mb-4">{program.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {program.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
