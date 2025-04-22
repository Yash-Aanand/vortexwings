import { motion } from "framer-motion";
import {
  PlaneTakeoff,
  CloudLightning,
  Compass,
  Cog,
  Plane,
  Radio,
  UserCheck,
  Mic,
} from "lucide-react";
import SectionTitle from "./sectionTitle";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const services = [
  {
    icon: PlaneTakeoff,
    title: "Air Regulations",
    tagline: "Know the Rules. Fly Confidently.",
    description:
      "Understand the legal and procedural framework that governs aviation in India and globally. Covers ICAO, DGCA rules, airspace structure, licensing, and safety standards.",
  },
  {
    icon: CloudLightning,
    title: "Meteorology",
    tagline: "Fly Smarter With Weather Wisdom.",
    description:
      "Learn how weather affects flight operations. Topics include atmospheric pressure, cloud formations, weather systems, and interpreting METARs, TAFs, and weather charts.",
  },
  {
    icon: Compass,
    title: "Navigation",
    tagline: "Chart Your Course With Confidence.",
    description:
      "Master the art of planning and following a flight route. Includes map reading, flight computers, radio navigation aids, and understanding airways and coordinates.",
  },
  {
    icon: Cog,
    title: "Technical General",
    tagline: "Know Your Aircraft Inside Out.",
    description:
      "Build strong foundational knowledge of aircraft systems and operations including aerodynamics, engines, flight instruments, electrical systems, and more.",
  },
  {
    icon: Plane,
    title: "Technical Specific (A320)",
    tagline: "Specialize in the Airbus A320.",
    description:
      "Focused on the systems and operations of the Airbus A320 aircraft. Ideal for students preparing for airline entry or type rating on the A320 platform.",
  },
  {
    icon: Plane,
    title: "Pre-Type Rating Classes (A320)",
    tagline: "Start Strong in the Simulator.",
    description:
      "Get ahead before your simulator training. Learn aircraft systems, procedures, flows, and cockpit familiarization for a confident start to your type rating journey.",
  },
  {
    icon: Radio,
    title: "RTR(A) – Radio Telephony",
    tagline: "Master the Mic.",
    description:
      "Prepares you for the WPC RTR(A) exam. Learn phraseology, radio procedures, and practical communication skills for real-time air traffic interactions.",
  },
  {
    icon: UserCheck,
    title: "Pilot Career Guidance",
    tagline: "Plan Your Pathway to the Cockpit.",
    description:
      "Personalized mentoring from experienced pilots. Includes career planning, DGCA processes, CPL-to-airline roadmap, resume building, and interview readiness.",
  },
  {
    icon: Mic,
    title: "Soft Skills & Interview Training",
    tagline: "Communicate With Impact.",
    description:
      "Boost your confidence and communication. Focuses on public speaking, group discussions, HR questions, body language, and stress interviews — key to cracking airline selections.",
  },
];

export default function ServicesSection({
  background,
}: {
  background: string;
}) {
  return (
    <section
      id="subjects"
      className="min-h-screen py-24 px-6"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <SectionTitle>Ground School Curriculum</SectionTitle>

          {/* Grid with staggered fade-in */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "5px 12px 25px rgba(2, 2, 80, 0.7)", // dark navy blue
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative border-l-4 border-navy-blue bg-white p-6 rounded-xl "
              >
                <div className="absolute -top-5 left-4 bg-yellow-100 text-yellow-800 rounded-full p-2 shadow-md">
                  <service.icon className="h-6 w-6" />
                </div>

                <div className="pl-2 pt-4">
                  <h3 className="text-xl font-bold uppercase text-navy-blue mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-yellow-700 font-medium mb-2 italic">
                    {service.tagline}
                  </p>
                  <p className="text-md text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
