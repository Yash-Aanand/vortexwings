import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Plane,
  Briefcase,
  ClipboardCheck,
  Stethoscope,
} from "lucide-react";
import SectionTitle from "./sectionTitle";

const cockpitSteps = [
  {
    title: "Clear Medical Assessment",
    icon: <Stethoscope className="w-6 h-6 text-navy-blue" />,
  },

  {
    title: "Enroll & start classes",
    icon: <BookOpen className="w-6 h-6 text-navy-blue" />,
  },
  {
    title: "Build strong theoretical foundation",
    icon: <FileText className="w-6 h-6 text-navy-blue" />,
  },
  {
    title: "Pass DGCA exams",
    icon: <Plane className="w-6 h-6 text-navy-blue" />,
  },
  {
    title: "Complete flight training",
    icon: <Briefcase className="w-6 h-6 text-navy-blue" />,
  },
  {
    title: "Crack airline interviews",
    icon: <ClipboardCheck className="w-6 h-6 text-navy-blue" />,
  },
];

const STEP_DELAY = 0.6;

const TimelineStep = ({
  step,
  index,
}: {
  step: { title: string; icon: JSX.Element };
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: (index + 0.5) * STEP_DELAY }}
    className="relative flex items-start gap-6"
  >
    <div className="z-10 flex flex-col items-center relative">
      <div className="rounded-full bg-golden p-2 shadow-md">{step.icon}</div>
    </div>

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
      <h3 className="text-base sm:text-xl font-[Times_New_Roman] tracking-wide">
        {step.title}
      </h3>
    </motion.div>
  </motion.div>
);

export default function PathToCockpitTimeline({
  background,
}: {
  background: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section
      id="path-to-cockpit"
      className="py-24 px-4 sm:px-8"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl rounded-2xl p-8 sm:p-12">
        <SectionTitle>Your Path to the Cockpit</SectionTitle>

        {/* Timeline container with vertical line */}
        <motion.div
          ref={containerRef}
          className="relative mt-12 pl-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Plane flying down */}
          <motion.div
            variants={{
              hidden: { y: 0, opacity: 1 },
              visible: {
                y: containerHeight,
                opacity: 1,
              },
            }}
            transition={{
              duration: STEP_DELAY * cockpitSteps.length,
              ease: "linear",
            }}
            className="absolute z-20"
            style={{ left: "24px" }}
            onAnimationComplete={(def) => {
              if (def === "visible") {
                const el = document.querySelector(
                  "#animated-plane"
                ) as HTMLElement;
                if (el) el.style.display = "none";
              }
            }}
          >
            <Plane
              id="animated-plane"
              className="w-10 h-10 text-golden transition-all duration-300"
              style={{
                transform: "rotate(135deg)",
                display: "block",
              }}
            />
          </motion.div>

          {/* Vertical line */}
          <motion.div
            variants={{
              hidden: { height: 0 },
              visible: { height: containerHeight },
            }}
            transition={{
              duration: STEP_DELAY * cockpitSteps.length,
              ease: "linear",
            }}
            className="absolute top-0 bg-golden z-0"
            style={{
              left: "42px",
              width: "4px",
            }}
          />

          {/* Steps */}
          <div className="space-y-12 relative z-10">
            {cockpitSteps.map((step, index) => (
              <TimelineStep key={index} step={step} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
