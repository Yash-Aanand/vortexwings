import { motion } from "framer-motion";
import cloud1 from "../images/cloud1.jpg";

export default function HeroSection({ mainlogo }: { mainlogo: string }) {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-20 px-6 flex flex-col items-center justify-center bg-white text-center"
      style={{
        backgroundImage: `url(${cloud1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <img
          src={mainlogo}
          alt="Vortex Wings Logo"
          className="h-40 w-auto drop-shadow-md"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-navy-blue mb-6"
      >
        Vortex Wings
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold text-navy-blue mb-6 "
      >
        Aviation Institute
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-xl md:text-3xl text-gray-600 max-w-2xl mb-10"
      >
        Lift Your Confidence. Command the Skies
      </motion.p>

      {/* Button Group */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a
          onClick={() =>
            document
              .querySelector("#services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="uppercase font-bold bg-navy-blue text-white text-sm sm:text-base px-4 py-2 md:px-8 md:py-4 rounded-full shadow hover:bg-navy-blue/90 transition duration-300 cursor-pointer"
        >
          Explore Our Services
        </a>

        <a
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="uppercase font-bold text-navy-blue bg-white text-sm sm:text-base px-4 py-2 md:px-8 md:py-4 rounded-full shadow 
             border-l-4 border-r-4 border-l-navy-blue border-r-yellow-400
             hover:bg-blue-100 transition duration-300 cursor-pointer"
        >
          Learn More
        </a>

        <a
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="uppercase font-bold bg-yellow-400 text-navy-blue text-sm sm:text-base px-4 py-2 md:px-8 md:py-4 rounded-full shadow hover:bg-yellow-300 transition duration-300 cursor-pointer"
        >
          Book a Demo
        </a>
      </motion.div>
    </section>
  );
}
