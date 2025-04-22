import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CoreValueSection from "../components/CoreValueSection";
import WhyChooseUsSection from "../components/WhyChooseUs";
import CarouselCustomNavigation from "../components/CarouselSection";
import Footer from "../components/Footer";

import mainlogo from "../images/vortexlogotr.png";
import plane1 from "../images/plane1.jpg";
import plane2 from "../images/plane2.jpg";
import cockpit from "../images/cp1.jpg";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <Navbar />
      <HeroSection mainlogo={mainlogo} />
      <AboutSection background={plane1} />
      <CoreValueSection background={plane2} />
      <WhyChooseUsSection background={cockpit} />
      <CarouselCustomNavigation background={cockpit} />
      <Footer mainlogo={mainlogo} />
    </div>
  );
}
