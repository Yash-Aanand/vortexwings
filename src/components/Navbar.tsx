import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Menu, X } from "lucide-react";
import logo from "../images/vortex_logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg text-gray-800 py-4 px-6 fixed w-full top-0 z-50">
      <div className=" mx-auto flex justify-between">
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

        {/* Logo for Desktop View */}
        <div className="hidden md:block">
          <img src={logo} alt="Vortex Wings Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative group"
            >
              <span className="text-gray-600 group-hover:text-navy-blue transition-colors duration-300 capitalize">
                {item}
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
          className="md:hidden text-navy-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {["home", "about", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 hover:text-navy-blue transition-colors duration-300 capitalize w-full text-center py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
