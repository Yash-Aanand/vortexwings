import Navbar from "./components/Navbar";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/OurServicesSection";
import CoreValueSection from "./components/CoreValueSection";
import PilotJourneySection from "./components/PilotJourneySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import mainlogo from "./images/vortexlogotr.png";

import cockpit from "./images/cockpit.jpg";
import plane2 from "./images/plane2.jpg";
import plane1 from "./images/plane1.jpg";
import cockpit2 from "./images/cockpit2.jpg";

// import fractalbg1 from "./images/fractalbg1.jpg";

function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <HeroSection mainlogo={mainlogo} />

      {/* About Section */}
      <AboutSection background={plane1} />

      {/* Core Values Section */}
      <CoreValueSection background={plane2} />
      {/* Services Section */}
      <ServicesSection background={cockpit} />

      {/* Pilot Journey Section */}
      <PilotJourneySection background={plane1} />

      {/* Contact Section */}
      <ContactSection background={cockpit2} />

      {/* Footer Section */}
      <Footer mainlogo={mainlogo} />
    </div>
  );
}

export default App;
