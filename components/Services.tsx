"use client";
import { motion } from "framer-motion";
import { Code, Monitor, Sparkles } from "lucide-react";
import Tilt from "react-parallax-tilt";

const services = [
  {
    icon: <Code size={34} className="text-sky-400 drop-shadow-glow" />,
    title: "Fullstack Web Development",
    description:
      "Build complete, high-performance websites using the latest front-end & back-end technologies.",
  },
  {
    icon: <Monitor size={34} className="text-sky-400 drop-shadow-glow" />,
    title: "UI/UX Design & Optimization",
    description:
      "Design interfaces that are not only visually stunning but also intuitive and responsive.",
  },
  {
    icon: <Sparkles size={34} className="text-sky-400 drop-shadow-glow" />,
    title: "Virtual Assistant Services",
    description:
      "Professional task handling, communication, and support to boost your productivity.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-[#0a0f1c] to-[#0c1221] text-gray-200 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-sky-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full -z-10 animate-pulse delay-200" />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sky-400 drop-shadow mb-1">
            What I Offer
          </h2>
          <div className="mx-auto h-1 w-20 bg-sky-500 rounded-full shadow-md shadow-sky-500/30 mb-4" />
        </motion.div>
        <motion.p
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          End-to-end digital craftsmanship — merging design, code, and user
          experience into seamless solutions.
        </motion.p>
      </motion.div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.25, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.2}
              glareColor="#38bdf8"
              glareBorderRadius="1rem"
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              className="bg-[#0d111c] border border-white/5 rounded-2xl shadow-lg shadow-black/30 p-6 transition-all duration-300 hover:scale-[1.025] hover:shadow-sky-500/30"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-white tracking-wide drop-shadow-sm">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
