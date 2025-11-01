import React from "react";
import HeroCarousel from "../component/hero-carousel";
import AboutSection from "../component/about-section";
// import UpcomingEvents from "../component/home/upcoming event";
import ProgramsSection from "../component/home/programme-section";
import GallerySection from "../component/gallery-section";
import ScriptureInspirationHub from "../component/scripture-inspiration";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      {/* <UpcomingEvents /> */}
      <ProgramsSection />
      <GallerySection />
      <ScriptureInspirationHub />
    </>
  );
};

export default Home;
