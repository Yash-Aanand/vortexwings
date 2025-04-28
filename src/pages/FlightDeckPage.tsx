import Navbar from "../components/Navbar";
import PilotJourneySection from "../components/PilotJourneySection";
import ServicesSection from "../components/OurServicesSection";
import OurSubjects from "../components/OurSubjectSection";
import Footer from "../components/Footer";

import mainlogo from "../images/vortexlogotr.png";
import plane1 from "../images/plane1.jpg";
import cockpit from "../images/wcu1.jpg";
import cockpit3 from "../images/cockpit3.jpg";

export default function FlightDeckPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <Navbar />
      <PilotJourneySection background={plane1} />
      <ServicesSection background={cockpit} />
      <OurSubjects background={cockpit3} />
      <Footer mainlogo={mainlogo} />
    </div>
  );
}
