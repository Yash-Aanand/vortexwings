import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";
import mainlogo from "./images/vortexlogotr.png";

const PilotJourneyStep = ({
  step,
  index,
  total,
}: {
  step: string;
  index: number;
  total: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="flex flex-col sm:flex-row items-center gap-4"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow-lg border-2 border-navy-blue/20 flex-1 w-full transform hover:border-golden transition-all duration-300"
    >
      <h3 className="text-lg font-semibold text-navy-blue text-center sm:text-left">
        {step}
      </h3>
    </motion.div>
    {index < total - 1 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.1 }}
        className="rotate-90 sm:rotate-0"
      >
        <ArrowRight className="h-6 w-6 text-golden" />
      </motion.div>
    )}
  </motion.div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mb-16">
    <h2 className="text-4xl md:text-6xl font-bold text-navy-blue text-center">
      {children}
    </h2>
    <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-24 h-1 bg-golden rounded-full" />
  </div>
);

function App() {
  const pilotJourneySteps = [
    "Class 2 Medical Examination",
    "Class 1 Medical Examination Initial",
    "Computer Number",
    "Ground Classes",
    "Flight Training",
    "Conversion of License",
    "Apply for Medical Clearance",
    "Police Verification",
    "Approval of Medical",
    "Flight Checks",
    "Completion of Checks",
    "Apply for Conversion of License on EGCA",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <img src={mainlogo} alt="Vortex Wings Logo" className="h-40 mb-8" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-navy-blue mb-6"
        >
          Vortex Wings
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-3xl text-gray-600 max-w-2xl"
        >
          Empowering Future Aviation Leaders with Excellence in Training
        </motion.p>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-24 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <SectionTitle>Your Takeoff Begins Here</SectionTitle>

            <div className="prose prose-lg max-w-none mb-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-8 leading-relaxed"
              >
                Vortex Wings Aviation Institute is committed to delivering
                exceptional aviation training that adheres to the highest
                standards set by the Directorate General of Civil Aviation
                (DGCA). Our mission is to provide aspiring aviation
                professionals with comprehensive, high-quality education at
                affordable fees, ensuring that financial constraints do not
                hinder passionate individuals from pursuing their dreams in the
                aviation industry.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-navy-blue/5 rounded-xl p-8 border-l-4 border-navy-blue hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To be recognized for our unwavering dedication to safety,
                  innovation, and student success. We aim to create a supportive
                  and dynamic learning environment that fosters creativity,
                  critical thinking, and a deep passion for aviation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-golden/5 rounded-xl p-8 border-r-4 border-golden hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                  Our Mission
                </h3>
                <ul className="space-y-4">
                  {[
                    "To provide training that meets DGCA standards",
                    "To make aviation education accessible with affordable fees",
                    "To offer personalized mentorship and hands-on guidance",
                    "To maintain small batch sizes for quality instruction",
                    "To equip students with knowledge and confidence",
                    "To instill discipline, resilience, and precision",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle2 className="h-6 w-6 text-golden flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <SectionTitle>Your Journey to Becoming a Pilot</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pilotJourneySteps.map((step, index) => (
                <PilotJourneyStep
                  key={index}
                  step={step}
                  index={index}
                  total={pilotJourneySteps.length}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <SectionTitle>Get in Touch</SectionTitle>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 mb-16"
          >
            Your Gateway to Aviation Excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-12 max-w-lg mx-auto border-2 border-navy-blue/10 hover:border-golden/50 transition-all duration-300"
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
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-navy-blue text-white py-6 px-12 rounded-xl text-2xl font-semibold hover:bg-navy-blue/90 transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-8 w-8" />
              <span>Contact Us</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="bg-zinc-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <motion.img
            src={mainlogo}
            alt="Vortex Wings Logo"
            className="h-20 mb-4 brightness-200 opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
          />
          <motion.h3
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Vortex Wings
          </motion.h3>
          <motion.hr
            className="w-full border-t border-gray-600 my-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            className="text-sm text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            © 2025 Vortex Wings. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;
