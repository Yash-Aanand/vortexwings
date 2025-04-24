import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactFormSection from "../components/ContactFormSection";
import mainlogo from "../images/vortexlogotr.png";
import cockpit from "../images/cockpit2.jpg";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <Navbar />
      <ContactFormSection background={cockpit} />
      <Footer mainlogo={mainlogo} />
    </div>
  );
}
