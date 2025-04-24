import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../images/vortexlogotr.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const sections = [
  { label: "Home", path: "/", anchor: "home" },
  {
    label: "About Us",
    path: "/",
    anchor: "about",
    submenu: [
      { label: "Our Story", anchor: "about" },
      { label: "Our Vision/Mission", anchor: "vision" },
      { label: "Core Values", anchor: "core-values" },
      { label: "Why Choose Us?", anchor: "why-choose-us" },
    ],
  },
  {
    label: "Flight Deck",
    path: "/flight-deck",
    submenu: [
      { label: "Pilot Roadmap", anchor: "pilot-journey" },
      { label: "What We Offer", anchor: "services" },
      { label: "Ground School Curriculum", anchor: "subjects" },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const goToPage = (path: string, anchorId?: string) => {
    setIsOpen(false);
    setOpenDropdown(null);
    navigate(path);

    setTimeout(() => {
      if (anchorId) {
        const el = document.getElementById(anchorId);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } else {
        // Scroll to top if no anchorId is specified
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="bg-white backdrop-blur-md shadow-lg text-gray-800 py-4 px-6 fixed w-full top-0 z-50">
      <div className="mx-auto flex justify-between items-center">
        <motion.button
          onClick={() => goToPage("/", "home")}
          className="flex items-center space-x-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src={logo}
            alt="Vortex Wings Logo"
            className="h-10 w-auto drop-shadow-sm hidden md:block"
          />
          <span className="text-3xl font-bold text-navy-blue group-hover:text-navy-blue/80 transition-colors duration-300">
            Vortex Wings
          </span>
        </motion.button>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {sections.map((item) => (
            <div key={item.label} className="relative group">
              {item.label === "Contact Us" ? (
                <button
                  onClick={() => goToPage(item.path)}
                  className="uppercase font-bold text-sm px-4 py-2 md:px-5 md:py-3 rounded-full bg-yellow-300 text-navy-blue border border-navy-blue shadow-md hover:bg-yellow-200 hover:shadow-lg transition-all duration-200 tracking-wide"
                >
                  ✉ Contact Us
                </button>
              ) : (
                <>
                  <button
                    onClick={() => goToPage(item.path, item.anchor)}
                    className="relative group capitalize"
                  >
                    <span className="text-gray-600 font-bold group-hover:text-navy-blue uppercase transition-colors duration-300">
                      {item.label}
                    </span>
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-navy-blue origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      initial={false}
                    />
                  </button>

                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 transform origin-top transition-all duration-200 z-50">
                      {item.submenu.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => goToPage(item.path, sub.anchor)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 font-bold uppercase hover:bg-navy-blue/10 hover:text-navy-blue transition-all"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <button
          className="md:hidden text-navy-blue z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden z-40"
          >
            <div className="flex flex-col items-center py-4 space-y-2 px-4">
              {sections.map((item) => {
                if (item.submenu) {
                  const isOpenDropdown = openDropdown === item.label;
                  return (
                    <div key={item.label} className="w-full">
                      <button
                        onClick={() =>
                          setOpenDropdown(isOpenDropdown ? null : item.label)
                        }
                        className="flex justify-between items-center w-full font-bold uppercase text-gray-600 hover:text-navy-blue transition-colors duration-300 py-2"
                      >
                        {item.label}
                        <ChevronDown
                          className={`ml-2 transition-transform duration-200 ${
                            isOpenDropdown ? "rotate-180" : ""
                          }`}
                          size={18}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpenDropdown && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4"
                          >
                            {item.submenu.map((sub) => (
                              <button
                                key={sub.label}
                                onClick={() => goToPage(item.path, sub.anchor)}
                                className="block w-full text-left text-gray-600 font-bold uppercase hover:text-navy-blue py-1 text-md"
                              >
                                {sub.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.button
                    key={item.label}
                    onClick={() => goToPage(item.path, item.anchor)}
                    className="text-gray-600 hover:text-navy-blue transition-colors duration-300 font-bold uppercase w-full text-left py-2"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
