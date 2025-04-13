import { motion } from "framer-motion";

interface FooterProps {
  mainlogo: string;
}

export default function Footer({ mainlogo }: FooterProps) {
  return (
    <footer className="bg-zinc-900 text-white py-8 px-6 font-[Times_New_Roman]">
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
  );
}
