"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      <div className="flex-1 space-y-6">
        {/* Statut & Localisation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Disponible immédiatement sur Montpellier
        </motion.div>

        {/* Nom & Titre */}
        <div className="space-y-2">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold tracking-tight text-text-primary"
          >
            Maxime <span className="text-accent">Guichon</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl md:text-3xl text-text-secondary font-semibold"
          >
            Développeur Fullstack & Expert SIS
          </motion.p>
        </div>

        {/* Bio orientée expertise */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-text-secondary max-w-xl text-lg leading-relaxed"
        >
          Diplômé d'un <strong>Master EISI (Bac+5)</strong>, je conçois des architectures logicielles robustes et pilote des projets complexes. Expert de l'écosystème <strong>.NET & React</strong>, j'allie rigueur technique et vision produit pour transformer vos idées en solutions performantes.
        </motion.p>

        {/* Boutons d'action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a href="#projets" className="px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold transition-all shadow-lg shadow-accent/20">
            Explorer mes projets
          </a>
          <a 
            href="/CV_Maxime_Guichon.pdf" 
            target="_blank"
            className="px-8 py-3 bg-transparent hover:bg-white/5 text-text-primary rounded-xl font-semibold border border-white/10 transition-all"
          >
            Télécharger mon CV
          </a>
        </motion.div>

        {/* Stack Highlights rapide */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex gap-6 text-text-secondary/60 text-sm font-mono pt-4"
        >
          <span>#DotNet9</span>
          <span>#React18</span>
          <span>#TypeScript</span>
          <span>#Architecture</span>
        </motion.div>
      </div>
      
      {/* Visuel Profil */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex-1 relative"
      >
        <div className="w-72 h-72 md:w-96 md:h-96 mx-auto bg-gradient-to-tr from-accent to-blue-600 rounded-3xl rotate-3 flex items-center justify-center overflow-hidden shadow-2xl shadow-accent/20 border-2 border-white/10">
          <Image
            src="/img/moi.jpg" 
            alt="Maxime Guichon - Développeur Fullstack"
            width={400}
            height={400}
            className="object-cover w-full h-full -rotate-3 scale-110"
            priority
          />
        </div>
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 blur-[100px] rounded-full"></div>
      </motion.div>
    </motion.section>
  );
}