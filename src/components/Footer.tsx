import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FooterProps {
  mainlogo: string;
}

export default function Footer({ mainlogo }: FooterProps) {
  const navigate = useNavigate();

  const goToPage = (path: string, anchorId?: string) => {
    navigate(path);
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-zinc-900 text-white py-12 px-8 font-[Times_New_Roman]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 [@media(min-width:380px)]:grid-cols-2 md:grid-cols-4 gap-10 text-sm place-items-center md:place-items-start">
        {/* Logo and About */}
        <div className="flex flex-col items-center  w-[162px]">
          <motion.img
            src={mainlogo}
            alt="Vortex Wings Logo"
            className="h-20 mb-4 brightness-200 opacity-90 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 text-justify">
            Vortex Wings is dedicated to shaping the future of aviation with
            excellence, integrity, and commitment.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start w-[162px]">
          <h4 className="text-lg font-bold text-white mb-3 underline underline-offset-4">
            Quick Links
          </h4>
          <div className="flex flex-col space-y-2 items-start">
            <button
              onClick={() => goToPage("/", "home")}
              className="text-left text-gray-400 hover:text-white font-semibold"
            >
              Home
            </button>
            <button
              onClick={() => goToPage("/", "about")}
              className="text-left text-gray-400 hover:text-white font-semibold"
            >
              About Us
            </button>
            <button
              onClick={() => goToPage("/flight-deck")}
              className="text-left text-gray-400 hover:text-white font-semibold"
            >
              Flight Deck
            </button>
            <button
              onClick={() => goToPage("/contact")}
              className="text-left text-gray-400 hover:text-white font-semibold"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start w-[162px]">
          <h4 className="text-lg font-bold text-white mb-3 underline underline-offset-4">
            Contact
          </h4>
          <div className="flex flex-col space-y-2 text-gray-400">
            <a
              href="mailto:vortexwingsinst@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-all hover:underline"
            >
              <Mail size={18} />
              <span className="font-semibold">vortexwingsinst@gmail.com</span>
            </a>
            <a
              href="tel:+917022169478"
              className="flex items-center gap-2 hover:text-white transition-all hover:underline"
            >
              <Phone size={18} />
              <span className="font-semibold">+91 7022169478</span>
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right w-[162px]">
          <h4 className="text-lg font-bold text-white mb-3 underline underline-offset-4">
            Follow Us
          </h4>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.instagram.com/vortexwings/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={18} />
              <span className="font-semibold">Instagram</span>
            </a>

            {/* 
            <a
              href="#"
              className="flex items-center gap-2 text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              <Facebook size={18} />
              <span className="font-semibold">Facebook</span>
            </a>
            */}

            <a
              href="https://www.linkedin.com/company/vortex-wings-aviation-institute/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <motion.hr
        className="w-full border-t border-gray-700 my-8"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />

      <motion.p
        className="text-center text-xs text-gray-500"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        © 2025{" "}
        <span className="text-white font-semibold">
          Vortex Wings Aviation Institute
        </span>
        . All rights reserved.
      </motion.p>
    </footer>
  );
}
