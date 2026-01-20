"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const year = new Date().getFullYear();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-[#050505] text-[#F8FAFC] antialiased selection:bg-accent/30">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left" 
        style={{ scaleX }} 
      />

      <Header />
      
      {/* 1. Introduction */}
      <Hero />
      
      {/* Conteneur avec un espacement constant pour la clarté */}
      <div className="space-y-40 pb-20">
        
        {/* 2. Philosophie & Valeurs (Qui suis-je ?) */}
        <About />

        {/* 3. Chronologie Professionnelle (Mon parcours) */}
        <Experience />

        {/* 4. Réalisations Techniques (Ce que j'ai bâti) */}
        <Projects />

        {/* 5. Expertise (Mon arsenal) */}
        <Skills />
        
        {/* 6. Contact */}
        <Contact />
      </div>

      <footer className="py-12 border-t border-white/5 bg-primary/20 backdrop-blur-sm text-center">
        <p className="text-text-secondary/60 text-sm font-mono italic">
          © {year} — Maxime Guichon • Expert SIS • Montpellier
        </p>
      </footer>
    </main>
  );
}