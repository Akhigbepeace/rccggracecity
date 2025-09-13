import Image from "next/image";
import React from "react";

type HeroSectionProps = {
  image: string;
  headingOne: string;
  headingTwo: string;
  paragraph: string;
};

const HeroSection = (props: HeroSectionProps) => {
  const { image, headingOne, headingTwo, paragraph } = props;

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-lightGray to-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="h-[800px] w-full relative">
          <Image
            src={image}
            alt="Grace City Background"
            fill
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* White gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />

      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black">
          <span className="text-white">{headingOne} </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary drop-shadow-md relative">
            {headingTwo}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white">
          {paragraph}
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
    </header>
  );
};

export default HeroSection;
