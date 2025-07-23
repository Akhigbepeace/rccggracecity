import Image from "next/image";

const galleryImages = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
  "/gallery/img5.jpg",
  "/gallery/img6.jpg",
];

const GallerySection = () => {
  // Duplicate the images array to create seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50 overflow-hidden">
      <div className="flex animate-marquee-rtl">
        {duplicatedImages.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 mx-2 overflow-hidden rounded-lg shadow"
            data-aos="zoom-in"
            data-aos-delay={(index % galleryImages.length) * 100}
            data-aos-duration="800"
          >
            <Image
              src={img}
              alt={`Gallery ${(index % galleryImages.length) + 1}`}
              width={320}
              height={240}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
