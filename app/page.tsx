import AboutSection from "./component/about-section";
import HeroCarousel from "./component/hero-carousel";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <section className="px-4 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-[color:var(--color-primary)] mb-4">
          Grace for All People
        </h2>
        <p className="text-lg text-gray-700 font-body">
          Join us as we walk in faith, serve with joy, and grow in purpose.
        </p>
      </section>

      <AboutSection />
    </>
  );
}
