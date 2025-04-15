// To add new design soon

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./sectionTitle";

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
    transition={{ delay: index * 0.08 }}
    className="relative group flex flex-col sm:flex-row items-center gap-4"
  >
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.06)",
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="relative bg-white text-navy-blue border-l-4 border-navy-blue p-6 rounded-xl w-full shadow-md"
    >
      <div className="absolute -left-2 -top-2 bg-golden text-white text-xs px-3 py-1 rounded-full shadow-sm font-semibold tracking-wide">
        Step {index + 1}
      </div>
      <h3 className="text-base sm:text-lg font-[Times_New_Roman] tracking-wide">
        {step}
      </h3>
    </motion.div>

    {index < total - 1 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.08 + 0.1 }}
        className="rotate-90 sm:rotate-0 group-hover:scale-110 transition-transform"
      >
        <ArrowRight className="h-6 w-6 text-golden drop-shadow-sm" />
      </motion.div>
    )}
  </motion.div>
);

export default function PilotJourneySection({
  background,
}: {
  background: string;
}) {
  return (
    <section
      id="pilot-journey"
      className="min-h-screen py-24 px-6"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="rounded-2xl shadow-xl p-10 border border-gray-200 bg-white/90 backdrop-blur-sm">
          <SectionTitle>Your Journey to Becoming a Pilot</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            {pilotJourneySteps.map((step, index) => (
              <PilotJourneyStep
                key={index}
                step={step}
                index={index}
                total={pilotJourneySteps.length}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
