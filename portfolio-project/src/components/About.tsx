"use client";
import { motion } from "framer-motion";
import { FaCode, FaRunning, FaRocket, FaPuzzlePiece } from "react-icons/fa";

export default function About() {
  // Animation des cartes (Apparition séquentielle)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre de Section Stylisé */}
          {/* EN-TÊTE DE SECTION */}
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
               <div>
                 <div className="flex items-center gap-4 mb-4">
                   <span className="text-accent font-mono text-sm tracking-widest uppercase">01. Profil</span>
                   <div className="h-px bg-white/10 w-24"></div>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
                  Mon <span className="text-accent">Profil</span>
                 </h2>
               </div>
             </div>

        {/* Grille Dashboard */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >

          {/* CARTE 1 : L'Architecte (Hard Skills) */}
          <motion.div variants={cardVariants} className="bg-[#0B1221]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-accent/30 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <FaCode size={24} />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Architecte de Solutions</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Plus qu'un développeur, je suis un bâtisseur. Fort de mon expérience chez <strong>Arcade Informatique</strong> sur la refonte de monolithes vers des architectures distribuées (.NET 9), je conçois des systèmes pensés pour durer.
            </p>
            <ul className="space-y-2">
              <li className="text-xs text-text-secondary flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Clean Architecture & CQRS
              </li>
              <li className="text-xs text-text-secondary flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Optimisation SQL (Dapper)
              </li>
            </ul>
          </motion.div>

          {/* CARTE 2 : L'Explorateur (Personalité / Modding) */}
          <motion.div variants={cardVariants} className="bg-[#0B1221]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-accent/30 transition-colors group relative overflow-hidden">
            {/* Effet de fond subtil */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <FaPuzzlePiece size={24} />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">L'Esprit "Modding"</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Ma passion pour le <strong>Modding</strong> de jeux vidéo m'a appris à disséquer des systèmes existants pour les améliorer sans les casser. Une compétence que j'applique aujourd'hui pour auditer et optimiser du code legacy.
            </p>
            <div className="flex gap-2 mt-auto">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-text-secondary">Analyse</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-text-secondary">Reverse Engineering</span>
            </div>
          </motion.div>

          {/* CARTE 3 : L'Agile (Parkour / Vision) */}
          <motion.div variants={cardVariants} className="bg-[#0B1221]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-accent/30 transition-colors group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <FaRunning size={24} />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Mouvement & Agilité</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Pratiquant le <strong>Parkour</strong> depuis 3 ans, j'ai développé une mentalité axée sur l'efficacité : trouver le chemin le plus fluide pour surmonter un obstacle.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed border-t border-white/5 pt-4 mt-2">
              <span className="text-purple-400 font-semibold">Vision Pro :</span> J'applique cette agilité dans la gestion de projet (Scrum/DevOps) pour livrer de la valeur rapidement.
            </p>
          </motion.div>

        </motion.div>

        {/* DATA BAR (Bas de section) */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 1 }}
           transition={{ delay: 0.6 }}
           className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-wrap justify-between items-center gap-6"
        >
            <div className="flex flex-col">
              <span className="text-xs text-text-secondary uppercase tracking-wider mb-1">Formation</span>
              <span className="font-mono text-sm text-text-primary">Master Expert SIS (Bac+5)</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-xs text-text-secondary uppercase tracking-wider mb-1">Expérience</span>
              <span className="font-mono text-sm text-text-primary">3 Ans Alternance + Projets (écoles/perso)</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-xs text-text-secondary uppercase tracking-wider mb-1">Localisation</span>
              <span className="font-mono text-sm text-text-primary">Montpellier (34)</span>
            </div>
             <div className="w-px h-8 bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-3">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
               </span>
               <span className="text-green-400 text-sm font-medium">Open to Work</span>
            </div>
        </motion.div>

      </div>
    </section>
  );
}