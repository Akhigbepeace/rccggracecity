import Image from "next/image";
import React from "react";

type HeroSectionProps = {
  image: string;
  headingOne: string;
  headingTwo: string;
  paragraph: string;
};

const HeroSection = ({ image, headingOne, headingTwo, paragraph }: HeroSectionProps) => {
  return (
    <header className="relative w-full overflow-hidden bg-white">
      {/* Image Section */}
      <div className="relative w-full h-[90vh] min-h-[600px]">
        <Image
          src={image}
          alt="Grace City Background"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {headingOne}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
              {headingTwo}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/90 text-lg md:text-xl">
            {paragraph}
          </p>
        </div>

        {/* Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[80px]"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
