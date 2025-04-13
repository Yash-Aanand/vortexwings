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
    tagline: "No Doubt Left Behind.",
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
          <SectionTitle>Our Services</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.015,
                  boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.08)",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative border-l-4 border-golden bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-5 left-4 bg-yellow-100 text-yellow-800 rounded-full p-2 shadow-md">
                  <service.icon className="h-6 w-6" />
                </div>

                <div className="pl-2 pt-4">
                  <h3 className="text-lg font-bold text-navy-blue mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-yellow-700 font-medium mb-2 italic">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
