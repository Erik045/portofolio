"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const navItems = ["About", "Services", "Projects", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -16, opacity: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-150 ease-in-out ${
        scrolled ? "bg-[#0a0f1c]/80 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4 relative">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-white bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"
        >
          <span className="font-black">ED</span> Solutions
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-base font-medium text-gray-200 hover:text-sky-400 hover:underline underline-offset-4 decoration-sky-400/50 transition-all duration-200 tracking-wide"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden relative" ref={menuRef}>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-200"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="absolute right-0 top-full mt-1 z-40"
              >
                <motion.div
                  className="bg-[#0a0f1c]/90 backdrop-blur border border-sky-500/20 rounded-2xl px-3 py-3 space-y-2 shadow-xl w-44 text-center"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                >
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-sm font-medium text-gray-200 hover:text-sky-400 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
