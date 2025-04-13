import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Menu, X } from "lucide-react";
import logo from "../images/vortexlogotr.png";

const sections = ["home", "about", "services", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg text-gray-800 py-4 px-6 fixed w-full top-0 z-50">
      <div className="mx-auto flex justify-between items-center">
        {/* Left Logo / Brand */}
        <motion.button
          onClick={() => scrollToSection("home")}
          className="flex items-center space-x-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plane className="h-10 w-10 text-navy-blue transform group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-bold text-navy-blue group-hover:text-navy-blue/80 transition-colors duration-300">
            Vortex Wings
          </span>
        </motion.button>

        {/* Desktop Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block z-10">
          <img
            src={logo}
            alt="Vortex Wings Logo"
            className="h-14 w-auto md:h-16 drop-shadow-sm"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative group capitalize"
            >
              <span className="text-gray-600 group-hover:text-navy-blue transition-colors duration-300">
                {item.replace("-", " ")}
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-navy-blue origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={false}
              />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy-blue z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden z-40"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {sections.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 hover:text-navy-blue transition-colors duration-300 capitalize w-full text-center py-2 px-4"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.replace("-", " ")}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
