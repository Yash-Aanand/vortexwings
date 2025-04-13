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

      {/* Title (Original Text) */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-navy-blue mb-6"
      >
        Vortex Wings
      </motion.h1>

      {/* Subtitle (Original Text) */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-xl md:text-3xl text-gray-600 max-w-2xl mb-10"
      >
        Empowering Future Aviation Leaders with Excellence in Training
      </motion.p>

      {/* CTA */}
      <motion.a
        href="#services"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector("#services")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="bg-navy-blue text-white font-semibold text-base px-8 py-4 rounded-full shadow-md hover:bg-navy-blue/90 transition duration-300"
      >
        Explore Our Services
      </motion.a>
    </section>
  );
}
