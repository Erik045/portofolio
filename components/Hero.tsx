"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, Github, Linkedin, Mail, ChevronsDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen pt-6 md:pt-10 px-4 md:px-10 flex flex-col items-center justify-center text-center gap-6 overflow-hidden bg-gradient-to-t from-black via-gray-900 to-sky-950"
    >
      {/* ✨ Glassmorphism Overlay */}
      <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-md" />

      {/* 🌟 Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0.3 + Math.random() * 0.5,
              scale: 0.3 + Math.random(),
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* 💡 Glow */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute w-56 h-56 md:w-72 md:h-72 bg-sky-500/10 rounded-full blur-3xl z-0"
      />

      {/* 🖼 Profile */}
      <motion.div
        className="z-10 w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-2xl border-2 border-sky-500 bg-black/30 backdrop-blur"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/illustration.png"
          alt="Erik"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* 🧠 Text Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.15 }}
        className="z-10 space-y-4 max-w-2xl px-4 text-white"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m <span className="text-sky-400">Erik</span>
        </motion.h1>

        <motion.h2
          className="text-sm sm:text-base md:text-xl font-medium text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typewriter
            words={[
              "Fullstack Developer 💻",
              "UI/UX Specialist 🎨",
              "Virtual Assistant 🤖",
              "Modern Web Builder 🚀",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h2>

        <motion.p
          className="text-sm md:text-base text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I craft premium, scalable websites that are fast, stunning, and designed to convert.
        </motion.p>

        {/* 🔧 Skills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            "Next.js",
            "TailwindCSS",
            "Framer Motion",
            "TypeScript",
            "GSAP",
            "Clean Code",
            "Responsive UI",
          ].map((skill, i) => (
            <motion.span
              whileHover={{ scale: 1.1 }}
              key={i}
              className="px-3 py-1 bg-sky-800/60 text-sky-200 rounded-full text-xs font-medium shadow"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* 🌐 Social */}
        <motion.div
          className="flex justify-center gap-4 mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            {
              href: "https://github.com/Erik045",
              icon: <Github className="w-5 h-5" />,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/erik-dev",
              icon: <Linkedin className="w-5 h-5" />,
              label: "LinkedIn",
            },
            {
              href: "#contact",
              icon: <Mail className="w-5 h-5" />,
              label: "Email",
            },
          ].map(({ href, icon, label }, i) => (
            <motion.a
              whileHover={{ scale: 1.2 }}
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-sky-400 hover:text-white transition-colors"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-3 mt-6 bg-sky-500 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:scale-105 hover:bg-sky-600 active:scale-95 transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Let’s Work Together
          <ArrowRight className="w-5 h-5 animate-pulse" />
        </motion.a>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-6 animate-bounce text-sky-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <ChevronsDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}