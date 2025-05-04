"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi submit
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-10 md:px-20 bg-gradient-to-b from-[#0a0f1c] via-[#0a101c] to-[#0a0f1c] text-gray-200 overflow-hidden z-10"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sky-500 mb-4">Contact</h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto relative before:content-[''] before:block before:w-14 before:h-[2px] before:bg-sky-500 before:mx-auto before:mb-5"
        >
          Let’s collaborate to build something amazing. Reach out to start your project.
        </motion.p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-[#111827]/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#0a0f1c] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#0a0f1c] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 bg-[#0a0f1c] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 resize-none"
            placeholder="Tell me about your project or just say hi!"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-sky-500/40"
        >
          Send Message
        </motion.button>

        {/* Feedback */}
        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-sm mt-4 text-center"
          >
            Thank you! Your message has been sent.
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}