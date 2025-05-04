"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Team Manager App UI",
    image: "/images/projects/team-manager-app.jpg",
    description:
      "A modern UI design for managing collaborative projects, tasks, and team members with a clean interface.",
    link: "#",
  },
  {
    title: "Digital Wallet App",
    image: "/images/projects/digital-wallet-app.jpg",
    description:
      "A sleek digital wallet interface featuring transaction history, balance insights, and user-friendly UX.",
    link: "#",
  },
  {
    title: "Monochrome Portfolio",
    image: "/images/projects/monochrome-portfolio.jpg",
    description:
      "A minimalist and bold portfolio template showcasing typography, visual hierarchy, and responsive layout.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 bg-gradient-to-b from-[#0c1221] via-[#0a0f1c] to-black text-gray-200 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-sky-500 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Hand-picked real world projects that showcase quality, performance, and user experience.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden bg-[#101828] shadow-xl shadow-black/30 hover:shadow-sky-600/40 transition-all duration-300"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div className="p-5 flex flex-col gap-2 relative z-10">
              <h3 className="text-white font-semibold text-lg tracking-wide group-hover:text-sky-400 transition">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sky-400 hover:underline text-sm group/link transition-all duration-300"
              >
                View Project
                <ExternalLink
                  size={16}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-sky-500 group-hover:shadow-[0_0_25px_0_rgba(56,189,248,0.3)] transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}