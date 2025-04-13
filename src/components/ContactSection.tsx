import { motion } from "framer-motion";
import { Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import SectionTitle from "./sectionTitle";
import cloud1 from "../images/cloud1.jpg";

export default function ContactSection({ background }: { background: string }) {
  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-12 max-w-lg mx-auto border-2 border-navy-blue/10"
      >
        <SectionTitle>
          <span className="text-white">Get in Touch</span>
        </SectionTitle>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-white mb-4"
        >
          Your Gateway to Aviation Excellence
        </motion.p>
        <p className="text-white/80 mb-8 text-md md:text-base">
          Ready to elevate your journey? Reach out and let’s help you soar.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-12 max-w-lg mx-auto border-2 border-navy-blue/10 hover:border-golden/50 transition-all duration-300"
          style={{
            backgroundImage: `url(${cloud1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backgroundBlendMode: "overlay",
          }}
        >
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google Logo"
            className="h-12 mx-auto mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />
          <motion.a
            href="https://forms.gle/Mmx9kegkqW4E3uMD9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-3 bg-navy-blue text-white py-3 px-6 rounded-lg text-base font-semibold hover:bg-navy-blue/90 transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu mb-6 md:py-6 md:px-12 md:rounded-xl md:text-2xl w-full max-w-xs mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-5 w-5 md:h-8 md:w-8" />
            <span>Contact Us</span>
          </motion.a>
        </motion.div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 text-white/80 text-sm">
          <div>
            <p className="text-2xl font-bold text-white">100%</p>
            <p>Instructor-Led Sessions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">DGCA</p>
            <p>Syllabus Aligned</p>
          </div>
          <div className="col-span-2 md:col-span-1 text-center">
            <p className="text-2xl font-bold text-white">0 → ✈</p>
            <p>From First Flight to Final Exam</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
