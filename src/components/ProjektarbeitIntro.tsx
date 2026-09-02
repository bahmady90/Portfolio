import { motion } from "framer-motion";

export default function ProjektarbeitIntro() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col mb-[1rem] justify-center items-center w-screen gap-y-4 py-8 sm:py-12"
    >
      <div
        className="h-0.5 w-[90%] rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, #22d3ee, transparent)",
          boxShadow: "0 0 10px rgba(34,211,238,0.5)",
        }}
      />

      <h2
        style={{ fontFamily: "'Spectral', serif" }}
        className="ml-[2%] text-[1.5rem] sm:text-[1.8rem] md:text-[2.5rem] text-cyan-50 font-bold md:mr-[5rem] "
      >
        Projektarbeit
      </h2>
      <p className="ml-[2%] text-[0.8rem] lg:text-[1.3rem] xl:text-[1.7rem] text-stone-300 lg:mr-[5rem] max-w-[95%] text-center">
        Mitarbeit an einem Produkt in einem agilen Entwicklungsteam.
      </p>
    </motion.div>
  );
}
