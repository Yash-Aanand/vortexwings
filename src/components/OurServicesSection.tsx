import { motion } from "framer-motion";
import {
  GraduationCap,
  Video,
  User,
  Users,
  ClipboardList,
  Compass,
  BookOpen,
  HelpCircle,
  Globe,
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
    icon: GraduationCap,
    title: "DGCA Ground School Courses",
    tagline: "Build Your Foundation. Fly with Confidence.",
    description:
      "Comprehensive online DGCA classes taught by licensed pilots, covering all core subjects for exam and real-world readiness.",
  },
  {
    icon: Video,
    title: "Recorded Video Lectures",
    tagline: "Learn Anytime. Fly Anytime.",
    description:
      "Missed a live class? No worries. Revisit HD recorded lectures anytime to strengthen your learning.",
  },
  {
    icon: User,
    title: "Personalized Mentorship",
    tagline: "Trained by Pilots. Guided for Success.",
    description:
      "Get one-on-one guidance from experienced pilots—clear doubts, plan your career, and stay on track.",
  },
  {
    icon: Users,
    title: "Small Batch Training",
    tagline: "Focused Learning. Real Results.",
    description:
      "Limited batch sizes ensure personal attention and interactive learning in every session.",
  },
  {
    icon: ClipboardList,
    title: "Mock Tests & Exam Prep",
    tagline: "Practice Hard. Pass Smart.",
    description:
      "DGCA pattern mock tests and quizzes to boost your confidence and preparation.",
  },
  {
    icon: Compass,
    title: "Career Guidance & Airline Prep",
    tagline: "From Classroom to Cockpit.",
    description:
      "From CV building to mock interviews and airline selection coaching, we help you reach the cockpit.",
  },
  {
    icon: BookOpen,
    title: "Study Material & Notes",
    tagline: "Simplified Study. Maximum Impact.",
    description:
      "Curated visual notes, formula sheets, and subject-wise material to help you study smart.",
  },
  {
    icon: HelpCircle,
    title: "Doubt-Clearing Sessions",
    tagline: "No Doubts Left Behind.",
    description:
      "Weekly sessions to clear confusion and build strong concepts—every question matters.",
  },
  {
    icon: Globe,
    title: "Online & Flexible Classes",
    tagline: "Study From Anywhere. Anytime.",
    description:
      "Live interactive classes from the comfort of your home, balancing flexibility and discipline.",
  },
];

export default function ServicesSection({
  background,
}: {
  background: string;
}) {
  return (
    <section
      id="services"
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
          <SectionTitle>What We Offer</SectionTitle>

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
                className="relative border-l-4 border-golden bg-white p-6 rounded-xl  " //shadow-sm transition-all duration-300
              >
                <div className="absolute -top-5 left-4 bg-yellow-100 text-yellow-800 rounded-full p-2 shadow-md">
                  <service.icon className="h-6 w-6" />
                </div>

                <div className="pl-2 pt-4">
                  <h3 className="text-lg font-bold text-navy-blue mb-1 uppercase">
                    {service.title}
                  </h3>

                  <p className="text-md text-yellow-700 font-medium mb-2 italic">
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
