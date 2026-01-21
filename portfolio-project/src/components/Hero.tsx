"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiEye, FiX } from "react-icons/fi";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobilePreviewOpen, setIsMobilePreviewOpen] = useState(false);

  const handlePreviewClick = (e: React.MouseEvent) => {
    // Sur mobile, on empêche le lien de s'ouvrir tout de suite et on montre la preview
    if (window.innerWidth < 768) {
      e.preventDefault();
      setIsMobilePreviewOpen(true);
    }
  };

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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-10 overflow-hidden">
      {/* Background Decoratif */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent/20 opacity-20 blur-[100px]"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full"
      >
        
        {/* === COLONNE GAUCHE : TEXTE === */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1 relative z-20">
          
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Disponible sur Montpellier & Remote
            </div>
          </motion.div>

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

          <motion.p variants={itemVariants} className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Diplômé <strong>Master EISI (Bac+5)</strong>, je ne code pas juste des fonctionnalités, je construis des solutions durables. 
            Ma philosophie ? Allier la <strong>rigueur technique</strong> à une <strong>curiosité insatiable</strong> issue du modding et du gaming.
          </motion.p>

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
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start items-center relative">
            
            <a href="#projets" className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-[#0B1221] rounded-xl font-bold transition-all shadow-lg shadow-accent/25 hover:-translate-y-1">
              Voir mes réalisations
            </a>

            {/* WRAPPER BOUTON CV */}
            <div className="relative group">
                
                {/* --- PREVIEW DESKTOP (Au survol) --- */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9, rotateX: 10 }}
                      animate={{ opacity: 1, y: -20, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9, rotateX: 10 }}
                      transition={{ duration: 0.3, type: "spring" }}
                      className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[500px] h-auto z-50 pointer-events-none" // Largeur augmentée (w-64 -> w-[300px])
                    >
                      <div className="relative rounded-xl overflow-hidden border-2 border-accent/50 shadow-[0_0_40px_rgba(var(--accent),0.4)] bg-[#0B1221]">
                        <Image
                          src="/img/CVscreen.png" 
                          alt="Aperçu CV"
                          width={400}
                          height={565}
                          className="w-full h-auto object-cover opacity-95"
                        />
                        {/* Scan Line */}
                        <motion.div 
                          animate={{ top: ["0%", "100%"] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                          className="absolute left-0 w-full h-12 bg-gradient-to-b from-transparent via-accent/30 to-transparent border-b border-accent/60 shadow-[0_0_15px_rgba(var(--accent),0.5)]"
                        />
                        {/* Grid Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,255,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(18,255,247,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
                      </div>
                      {/* Flèche */}
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-accent/50"></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* BOUTON */}
                <a 
                  href="/documents/CV_2026-01-19_Maxime_Guichon.pdf" 
                  target="_blank"
                  onClick={handlePreviewClick}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-text-primary rounded-xl font-semibold border border-white/10 transition-all flex items-center gap-3 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isHovered ? <FiEye /> : <FiDownload />}
                    <span>{isHovered ? "Aperçu CV" : "Mon CV"}</span>
                  </span>
                  <div className="absolute inset-0 bg-white/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </a>
            </div>

          </motion.div>
        </div>
        
        {/* === COLONNE DROITE : SYSTÈME SOLAIRE (Inchangé) === */}
        <motion.div 
          variants={itemVariants}
          className="relative order-1 lg:order-2 flex justify-center items-center py-20 md:py-0"
        >
          <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-[60px]"></div>

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-white/10 w-full h-full"
            >
              <div className="absolute top-[10%] right-[15%] w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(var(--accent),0.8)]"></div>
            </motion.div>

            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-auto rounded-full border border-white/5 w-[75%] h-[75%]"
            >
               <div className="absolute bottom-[10%] left-[15%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            </motion.div>

             <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-auto rounded-full border border-dotted border-accent/20 w-[55%] h-[55%]"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-lg"></div>
            </motion.div>

            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[15%] bg-background/80 backdrop-blur border border-accent/30 px-3 py-1.5 rounded-lg text-xs md:text-sm font-mono text-accent shadow-lg z-20">.NET 9</motion.div>
            <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[15%] right-[10%] bg-background/80 backdrop-blur border border-blue-500/30 px-3 py-1.5 rounded-lg text-xs md:text-sm font-mono text-blue-400 shadow-lg z-20">React 18</motion.div>
            <motion.div animate={{ x: [-3, 3, -3] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[45%] right-[-5%] md:right-[-2%] bg-white/5 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-text-secondary z-10">Clean Code</motion.div>
            <motion.div animate={{ x: [3, -3, 3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[40%] left-[-2%] bg-white/5 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-text-secondary z-10">SQL Server</motion.div>

            <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden border-4 border-background shadow-2xl z-30 group">
              <Image src="/img/moi.jpg" alt="Maxime Guichon" fill className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out" priority />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

          </div>
        </motion.div>

      </motion.div>

      {/* === MOBILE PREVIEW MODAL (FULLSCREEN OVERLAY) === */}
      <AnimatePresence>
        {isMobilePreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:hidden"
          >
            <button 
              onClick={() => setIsMobilePreviewOpen(false)}
              className="absolute top-4 right-4 p-3 bg-white/10 rounded-full text-white"
            >
              <FiX size={24} />
            </button>

            <h3 className="text-xl font-bold text-white mb-6">Aperçu du CV</h3>
            
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden border-2 border-accent/30 shadow-2xl">
              <Image
                src="/img/CVscreen.png"
                alt="CV Preview Mobile"
                width={400}
                height={565}
                className="w-full h-auto"
              />
            </div>

            <a 
              href="/documents/CV_2026-01-19_Maxime_Guichon.pdf" 
              target="_blank"
              className="mt-8 px-8 py-4 bg-accent text-[#0B1221] font-bold rounded-xl w-full text-center shadow-lg shadow-accent/20"
            >
              Télécharger le PDF
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}