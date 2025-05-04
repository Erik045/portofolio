"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, BrightTech",
    quote:
      "Working with Erik was a game-changer. The website design exceeded our expectations—fast, beautiful, and user-focused!",
    image: "/images/testimonials/sarah.jpg",
  },
  {
    name: "Michael Lee",
    role: "Founder, SnapFlow",
    quote:
      "Incredible attention to detail and smooth animations. Highly recommended for anyone who wants a high-quality web presence.",
    image: "/images/testimonials/michael.jpg",
  },
  {
    name: "Alicia Gomez",
    role: "Product Manager, DevScale",
    quote:
      "Erik delivered the project ahead of time with stunning visuals and seamless functionality. A true professional.",
    image: "/images/testimonials/alicia.jpg",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="testimonials"
      className="py-24 px-6 sm:px-10 md:px-20 bg-gradient-to-b from-black via-[#0c1221] to-[#0a0f1c] text-gray-200 relative overflow-hidden"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sky-500 mb-4">
          Testimonials
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto relative before:content-[''] before:block before:w-14 before:h-[2px] before:bg-sky-500 before:mx-auto before:mb-5"
        >
          Stories of collaboration, trust, and remarkable results from clients I’ve worked with.
        </motion.p>
      </motion.div>

      {/* Timeline Container */}
      <div
        ref={ref}
        className="relative max-w-3xl mx-auto pl-6 md:pl-12 space-y-20">
        
        {/* Animated vertical glowing line */}
        <motion.div
          className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-transparent via-sky-500 to-transparent z-0"
          style={{ height: lineHeight }}
        />

        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.2,
              type: "spring",
              stiffness: 80,
              damping: 15,
            }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            {/* Glowing point */}
            <span className="absolute w-5 h-5 bg-sky-500 rounded-full left-[-12px] top-2 border-4 border-[#0c1221] shadow-lg shadow-sky-500/40 z-10 transition-all duration-500" />

            {/* Testimonial card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group bg-[#111827]/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-white/10 hover:shadow-sky-400/40 transition-all duration-500"
            >
              {/* Avatar & Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-sky-500 shadow-inner group-hover:shadow-sky-400/40 transition-all">
                  <Image
                    src={t.image}
                    alt={`${t.name} photo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed tracking-wide">
                “{t.quote}”
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}