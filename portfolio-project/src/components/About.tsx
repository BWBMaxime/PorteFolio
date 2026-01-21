"use client";
import { motion } from "framer-motion";
import { FaCode, FaRunning, FaPuzzlePiece } from "react-icons/fa";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background" id="about">
      
      {/* --- BACKGROUND SPATIAL (Particules) --- */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-20 left-10 w-1 h-1 bg-white/30 rounded-full blur-[1px] animate-pulse"></div>
         <div className="absolute bottom-40 right-20 w-2 h-2 bg-accent/20 rounded-full blur-[2px] animate-pulse delay-1000"></div>
         {/* Glow Central */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* EN-TÊTE DE SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-accent font-mono text-sm tracking-widest uppercase">01. Profil</span>
              <div className="h-px bg-white/10 w-24"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
              Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Moteur</span> Interne
            </h2>
          </div>
          <p className="text-text-secondary max-w-md text-sm leading-relaxed border-l border-white/10 pl-6">
            Au-delà du code, c'est la structure et l'optimisation qui me passionnent. Voici les piliers de ma méthode de travail.
          </p>
        </motion.div>

        {/* GRILLE DASHBOARD */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >

          {/* CARTE 1 : L'Architecte */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative bg-[#0B1221]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 overflow-hidden hover:border-accent/40 transition-all duration-500"
          >
            {/* Effet Glow Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
                <FaCode size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-blue-400 transition-colors">Architecte</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Plus qu'un développeur, je suis un bâtisseur. Fort de mon expérience chez <strong>Arcade Informatique</strong> sur la refonte de monolithes vers des architectures distribuées (.NET 9), je conçois des systèmes pensés pour durer.
              </p>
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span> 
                  Clean Architecture & CQRS
                </div>
                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span> 
                  Optimisation SQL (Dapper)
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARTE 2 : L'Explorateur (Modding) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative bg-[#0B1221]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 overflow-hidden hover:border-accent/40 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform border border-accent/20">
                <FaPuzzlePiece size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">Modding</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Ma passion pour le <strong>Modding</strong> m'a appris à disséquer des systèmes existants pour les améliorer sans les casser. Une compétence clé pour auditer et optimiser du code legacy complexe.
              </p>
              <div className="flex gap-3 mt-auto pt-2">
                <span className="px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/20 text-[10px] uppercase tracking-wider text-accent font-medium">Analyse</span>
                <span className="px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/20 text-[10px] uppercase tracking-wider text-accent font-medium">Reverse Eng.</span>
              </div>
            </div>
          </motion.div>

          {/* CARTE 3 : L'Agile (Parkour) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative bg-[#0B1221]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 overflow-hidden hover:border-accent/40 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform border border-purple-500/20">
                <FaRunning size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-purple-400 transition-colors">Agilité</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Pratiquant le <strong>Parkour</strong> depuis 3 ans, j'ai développé une mentalité axée sur l'efficacité : trouver le chemin le plus fluide pour surmonter un obstacle, quel qu'il soit.
              </p>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-xs text-text-secondary">
                  <span className="text-purple-400 font-bold uppercase tracking-wider">Vision Pro :</span> <br/>
                  J'applique cette agilité dans la gestion de projet (Scrum/DevOps) pour livrer de la valeur rapidement.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* DATA BAR (Bas de section) */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 1 }}
           transition={{ delay: 0.6 }}
           className="mt-16 p-1 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5"
        >
          <div className="bg-[#0B1221] rounded-xl p-6 md:p-8 flex flex-wrap justify-around items-center gap-8 text-center md:text-left">
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-text-secondary uppercase tracking-widest">Formation</span>
                <span className="font-mono text-base md:text-lg text-white font-bold">Master Expert SIS (Bac+5)</span>
              </div>
              
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-text-secondary uppercase tracking-widest">Expérience</span>
                <span className="font-mono text-base md:text-lg text-white font-bold">3 Ans (Alternance + Projets)</span>
              </div>
              
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-text-secondary uppercase tracking-widest">Localisation</span>
                <span className="font-mono text-base md:text-lg text-white font-bold">Montpellier (34)</span>
              </div>

              <div className="w-px h-12 bg-white/10 hidden md:block"></div>

              <div className="flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                 </span>
                 <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Open to Work</span>
              </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}