import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

import car_01 from "../images/ig/car_01.jpg";
import car_02 from "../images/ig/car_02.jpg";
import car_03 from "../images/ig/car_03.jpg";

export default function CarouselCustomNavigation({
  background,
}: {
  background: string;
}) {
  const images = [
    {
      src: car_01,
      link: "https://www.instagram.com/p/DH5UBl7yzyb/",
    },
    {
      src: car_02,
      link: "https://www.instagram.com/p/DIabFwvSK0I/?img_index=1",
    },
    {
      src: car_03,
      link: "https://www.instagram.com/p/DIi_InrSX1j/",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay + Glow */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-pink-300/10 blur-3xl opacity-40 z-0 animate-pulse" />

      {/* Unified Glass Box with Heading + Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-5xl mx-auto border-2 border-white/10"
      >
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            ✨ From Our Instagram
          </h2>
          <p className="text-lg text-white/80 mt-2">
            A glimpse into our journey, moments, and milestones.
          </p>
          <motion.a
            href="https://www.instagram.com/vortexwings/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-navy-blue font-semibold px-6 py-2 mt-5 rounded-full shadow hover:bg-yellow-100 transition-colors duration-300"
          >
            <Instagram className="h-5 w-5" />
            Follow us on Instagram
          </motion.a>
        </div>

        {/* Carousel */}
        <Carousel
          className="rounded-xl"
          placeholder=""
          autoplay={true}
          autoplayDelay={8000}
          loop={true}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {images.map(({ src, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block aspect-video w-full overflow-hidden rounded-xl relative"
            >
              <img
                src={src}
                alt={`Instagram image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 object-top"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-3 left-3">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
              </div>
            </a>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
}
