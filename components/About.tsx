"use client";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-36 px-6 sm:px-8 bg-black text-white"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-25%] left-[-20%] w-[520px] h-[520px] bg-sky-300/10 blur-[160px] rounded-full animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[450px] h-[450px] bg-cyan-400/10 blur-[140px] rounded-full animate-[pulse_12s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-soft-light" />
      </div>

      {/* Floating Orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-white/5 blur-[180px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content Panel */}
      <motion.div
        className="max-w-5xl mx-auto text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-16 shadow-[0_0_80px_#0ff2]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sky-400 drop-shadow mb-1">
            Who Am I?
          </h2>
          <div className="mx-auto h-1 w-20 bg-sky-500 rounded-full shadow-md shadow-sky-500/30 mb-4" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg leading-relaxed text-gray-300 tracking-wide mt-2 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          I&apos;m <strong className="text-white">Erik</strong>, a fullstack
          web developer with a passion for creating elegant, high-performance
          websites using clean, modern code and thoughtful design.
          <br />
          <br />
          Whether it’s building intuitive interfaces or optimizing backend
          systems, I deliver results that blend functionality and aesthetic. I
          also provide reliable <span className="text-white">virtual assistant services</span> to
          support your business growth.
          <br />
          <br />
          Let’s bring your ideas to life — with clarity, precision, and purpose.
        </motion.p>

        {/* Feature Highlights */}
        <motion.div
          className="flex justify-center items-center gap-10 sm:gap-16 flex-wrap mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {[
            { icon: <FaLaptopCode size={38} />, label: "Clean Code" },
            { icon: <FaRocket size={38} />, label: "Performance" },
            { icon: <FaCode size={38} />, label: "Modern Stack" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.3 }}
            >
              <div className="mb-2 text-sky-400 drop-shadow-lg">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-sky-300">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
