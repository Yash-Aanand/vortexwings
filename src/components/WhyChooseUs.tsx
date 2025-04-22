import { motion } from "framer-motion";
import SectionTitle from "./sectionTitle";

const reasons = [
  {
    title: "Affordable, DGCA-Aligned Aviation Training",
    description:
      "Get high-quality training that meets DGCA standards—without breaking the bank.",
  },
  {
    title: "One-on-One Guidance from Experienced Pilots",
    description:
      "Learn directly from professionals who’ve been in your shoes and in the cockpit.",
  },
  {
    title: "Small Batches for Focused Learning",
    description:
      "Limited seats ensure personal attention and better engagement in every class.",
  },
  {
    title: "Strong Foundation in Theory, Skills & Confidence",
    description:
      "We prepare you not just to pass, but to fly with confidence and competence.",
  },
  {
    title: "Core Values: Discipline, Resilience & Precision",
    description:
      "We instill the mindset every successful aviator needs—on ground and in air.",
  },
  {
    title: "Recorded Sessions for Flexible Learning",
    description:
      "Revisit key concepts anytime with access to recorded lectures.",
  },
];

export default function WhyChooseUsSection({
  background,
}: {
  background: string;
}) {
  return (
    <section
      id="why-choose-us"
      className="py-24 px-6 relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto bg-white backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-8 sm:p-12">
        <SectionTitle>Why Choose Us?</SectionTitle>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: 3,
                rotateY: -3,
                scale: 1.02,
                boxShadow: "5px 12px 12px rgba(2, 2, 80, 0.4)", // dark navy blue,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-xl border-l-4 border-golden p-6"
            >
              <h3 className="text-navy-blue font-bold  uppercase text-md sm:text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
