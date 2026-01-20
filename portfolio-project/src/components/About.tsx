"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className="py-16 px-6 max-w-7xl mx-auto bg-primary/20 rounded-[3rem] border border-white/5 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-text-primary">Vision & <span className="text-accent">Valeurs</span></h3>
          <p className="text-text-secondary leading-relaxed">
            Pour moi, le logiciel libre est une philosophie de <strong>partage et de transparence</strong>. Je m'engage dans la création d'outils numériques utiles au service public via l'intelligence collective.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 transition-all duration-300 hover:scale-105 hover:border-accent/40">
              <h5 className="text-accent font-bold mb-1">Parkour</h5>
              <p className="text-xs text-text-secondary">3 ans de pratique : discipline, agilité et dépassement de soi.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 transition-all duration-300 hover:scale-105 hover:border-accent/40">
              <h5 className="text-accent font-bold mb-1">Modding</h5>
              <p className="text-xs text-text-secondary">Analyse de structures de fichiers et personnalisation d'expériences.</p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full group-hover:bg-accent/30 transition-colors" />
          <blockquote className="relative p-8 bg-[#0A0F1C] border border-accent/20 rounded-3xl italic text-text-secondary leading-loose">
            "Diplômé d'un Master EISI, j'allie expertise technique et vision produit. Mon objectif : apporter ma rigueur et ma polyvalence à une structure montpelliéraine innovante."
          </blockquote>
        </div>
      </div>
    </motion.section>
  );
}