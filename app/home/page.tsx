import React from "react";
import HeroCarousel from "../component/hero-carousel";
import AboutSection from "../component/about-section";
import UpcomingEvents from "../component/home/upcoming event";
import ProgramsSection from "../component/home/programme-section";
import GallerySection from "../component/gallery-section";
import ScriptureInspirationHub from "../component/scripture-inspiration";
import ConnectSection from "../component/connect";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <UpcomingEvents />
      <ProgramsSection />
      <GallerySection />
      <ScriptureInspirationHub />
      <ConnectSection />
    </>
  );
};

export default Home;
