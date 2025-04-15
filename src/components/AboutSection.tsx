import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "./sectionTitle"; // adjust path as needed

export default function AboutSection({ background }: { background: string }) {
  return (
    <section
      id="about"
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
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <SectionTitle>Your Takeoff Begins Here</SectionTitle>

          {/* ✈ Our Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              ✈ Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed space-y-2 text-md xs:text-lg">
              At <strong>Vortex Wings Aviation Institute</strong>, our journey
              took off with a simple yet powerful vision — to make quality pilot
              training more accessible, supportive, and inspiring for aspiring
              aviators across India.
              <br />
              <br />
              Founded by a team of passionate pilots and aviation educators,
              we’ve walked the very same path you’re about to take — from
              studying for DGCA exams to handling the pressures of type ratings
              and interviews. Along the way, we saw a gap: while technical
              training was available, there was a lack of guidance, mentorship,
              and conceptual clarity.
              <br />
              <br />
              That’s where Vortex Wings was born — not just as an institute, but
              as a <em>support system</em> for future pilots. A place where
              students aren’t just numbers in a batch, but individuals we know
              by name, guiding them step-by-step toward the skies.
              <br />
              <br />
              What started as a dream between cockpit conversations has now
              become a growing community of learners, mentors, and achievers.
              And this is just the beginning.
            </p>
          </motion.div>

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
              <p className="text-gray-700 text-lg">
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
                    className="flex items-center space-x-3 text-lg"
                  >
                    <CheckCircle2 className="h-6 w-6 text-golden flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
