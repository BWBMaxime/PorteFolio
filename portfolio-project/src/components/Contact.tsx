"use client";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="py-20 px-6 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-text-primary mb-4">
          Contact <span className="text-accent">Me</span>
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          I'm open to discussing new projects and opportunities.
        </p>
      </div>
      <div className="bg-primary border border-secondary rounded-3xl p-8 md:p-12 backdrop-blur-xl">
        <form className="grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Name" className="bg-secondary border border-secondary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent text-text-primary" />
          <input type="email" placeholder="Email" className="bg-secondary border border-secondary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent text-text-primary" />
          <textarea placeholder="Message" rows={5} className="md:col-span-2 bg-secondary border border-secondary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"></textarea>
          <button type="submit" className="md:col-span-2 w-full bg-accent hover:bg-accent-hover text-text-primary rounded-xl font-semibold transition-all shadow-lg shadow-accent/20 py-3">
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-text-secondary">
        <div className="flex items-center gap-3">
          <FiMail className="text-accent" />
          <span>maximeguichon1999@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FiPhone className="text-accent" />
          <span>+33 6 73 96 25 03</span>
        </div>
        <div className="flex items-center gap-3">
          <FiMapPin className="text-accent" />
          <span>Montpellier, France</span>
        </div>
      </div>
    </motion.section>
  );
}