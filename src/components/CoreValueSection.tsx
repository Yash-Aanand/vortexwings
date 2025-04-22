import { motion } from "framer-motion";
import { Shield, Users, BookOpen, Award, Target, Rocket } from "lucide-react";
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

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with honesty and transparency — from training content to mentorship and beyond.",
  },
  {
    icon: Users,
    title: "Student-Centric Approach",
    description:
      "Our students are at the heart of everything we do. We prioritise personal attention, limited batch sizes, and customised support.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Aviation evolves — and so do we. We constantly refine our teaching to keep up with DGCA standards, new regulations, and global best practices.",
  },
  {
    icon: Award,
    title: "Confidence Building",
    description:
      "Our teaching style is designed to not just prepare students academically, but to boost their self-assurance for interviews, check rides, and cockpit decisions.",
  },
  {
    icon: Target,
    title: "Clarity & Conceptual Strength",
    description:
      "We believe strong theoretical understanding builds strong pilots. Every lesson is focused on true comprehension, not rote learning.",
  },
  {
    icon: Rocket,
    title: "Aspirational Growth",
    description:
      "We empower students to aim higher — whether it's cracking airline interviews or excelling internationally, we help build the mindset for long-term success.",
  },
];

const CoreValue = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    variants={cardVariants}
    className="bg-white rounded-2xl p-8 border border-gray-200"
    whileHover={{
      rotateX: 3,
      rotateY: -3,
      scale: 1.02,
      boxShadow: "5px 12px 12px rgba(2, 2, 80, 0.4)", // dark navy blue,
    }}
    transition={{
      type: "easeInOut",
      duration: 0.4,
    }}
    style={{
      transformStyle: "preserve-3d",
      perspective: 1000,
    }}
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="p-3 bg-yellow-100 rounded-full shadow-inner">
        <Icon className="w-6 h-6 text-yellow-700" />
      </div>
      <div>
        <h4 className="text-lg font-semibold uppercase text-navy-blue">
          {title}
        </h4>
        <p className="text-md text-gray-700">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default function CoreValuesSection({
  background,
}: {
  background: string;
}) {
  return (
    <section
      id="core-values"
      className="py-24 px-6"
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
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <SectionTitle>Core Values</SectionTitle>

          {/* Fade-in staggered grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreValues.map((value, index) => (
              <CoreValue
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
