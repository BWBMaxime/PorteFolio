"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decoratif (Grille subtile) */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent/20 opacity-20 blur-[100px]"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full"
      >
        
        {/* === COLONNE GAUCHE : TEXTE (Inchangé) === */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          
          {/* Badge Disponibilité */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Disponible immédiatement sur Montpellier & Remote
            </div>
          </motion.div>

          {/* Titre Principal */}
          <div className="space-y-4">
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.1]">
              Concevoir l'invisible, <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                Sublimer l'expérience.
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text-secondary font-medium">
              Maxime Guichon — Architecte Logiciel & Développeur Fullstack
            </motion.p>
          </div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Diplômé <strong>Master EISI (Bac+5)</strong>, je ne code pas juste des fonctionnalités, je construis des solutions durables. 
            Ma philosophie ? Allier la <strong>rigueur technique</strong> (architecture, sécurité) à une <strong>curiosité insatiable</strong> issue du modding et du gaming.
            <br className="block my-2" />
            Je cherche à rejoindre une équipe où l'humain compte autant que le code.
          </motion.p>

          {/* Tags Hybrides */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {[
              { label: "Architecture .NET", emoji: "🏗️" },
              { label: "Esprit d'équipe", emoji: "🤝" },
              { label: "Agilité & Parkour", emoji: "🏃‍♂️" },
              { label: "Curiosité & Veille", emoji: "🧠" },
            ].map((tag, index) => (
              <span key={index} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-text-secondary flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
                <span>{tag.emoji}</span>
                {tag.label}
              </span>
            ))}
          </motion.div>

          {/* Boutons CTA */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
            <a href="#projets" className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold transition-all shadow-lg shadow-accent/25 hover:-translate-y-1">
              Voir mes réalisations
            </a>
            <a 
              href="/documents/CV_2026-01-19_Maxime_Guichon.pdf" 
              target="_blank"
              className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-text-primary rounded-xl font-semibold border border-white/10 transition-all flex items-center gap-2 group"
            >
              <span>Mon CV</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
        
        {/* === COLONNE DROITE : SYSTÈME SOLAIRE COMPLET === */}
        <motion.div 
          variants={itemVariants}
          className="relative order-1 lg:order-2 flex justify-center items-center py-20 md:py-0"
        >
          <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            
            {/* Glow Central */}
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-[60px]"></div>

            {/* --- ORBITES ET PLANÈTES QUI TOURNENT --- */}

            {/* ORBITE 1 (Extérieure) + PLANÈTE */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-white/10 w-full h-full"
            >
              {/* Planète 1 */}
              <div className="absolute top-[10%] right-[15%] w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(var(--accent),0.8)]"></div>
            </motion.div>

            {/* ORBITE 2 (Médiane) + PLANÈTE */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-auto rounded-full border border-white/5 w-[75%] h-[75%]"
            >
               {/* Planète 2 */}
               <div className="absolute bottom-[10%] left-[15%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            </motion.div>

             {/* ORBITE 3 (Intérieure) + PLANÈTE */}
             <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-auto rounded-full border border-dotted border-accent/20 w-[55%] h-[55%]"
            >
               {/* Planète 3 */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-lg"></div>
            </motion.div>


            {/* --- NUAGE DE MOTS (FIXES MAIS FLOTTANTS) --- */}
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[15%] bg-background/80 backdrop-blur border border-accent/30 px-3 py-1.5 rounded-lg text-xs md:text-sm font-mono text-accent shadow-lg z-20">
              .NET 9
            </motion.div>

            <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[15%] right-[10%] bg-background/80 backdrop-blur border border-blue-500/30 px-3 py-1.5 rounded-lg text-xs md:text-sm font-mono text-blue-400 shadow-lg z-20">
              React 18
            </motion.div>

            <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[5%] right-[20%] bg-white/5 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-text-secondary z-10">
              Architecture
            </motion.div>

            <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] left-[5%] bg-white/5 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-text-secondary z-10">
              Modding 🎮
            </motion.div>

            <motion.div animate={{ x: [-3, 3, -3] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[45%] right-[-5%] md:right-[-2%] bg-white/5 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-text-secondary z-10">
              Clean Code
            </motion.div>

             <motion.div animate={{ x: [3, -3, 3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[40%] left-[-2%] bg-white/5 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-text-secondary z-10">
              SQL Server
            </motion.div>

            <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[5%] left-[45%] bg-white/5 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-text-secondary z-10">
              Docker
            </motion.div>

            {/* --- PHOTO CENTRALE (LE SOLEIL) --- */}
            <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden border-4 border-background shadow-2xl z-30 group">
              <Image
                src="/img/moi.jpg" 
                alt="Maxime Guichon - Portrait"
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                priority
              />
              {/* Reflet brillant */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}