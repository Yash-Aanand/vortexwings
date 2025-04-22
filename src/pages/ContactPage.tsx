import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import mainlogo from "../images/vortexlogotr.png";
import cockpit2 from "../images/cockpit2.jpg";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <Navbar />
      <ContactSection background={cockpit2} />
      <Footer mainlogo={mainlogo} />
    </div>
  );
}
