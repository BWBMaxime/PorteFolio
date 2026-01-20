"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaBuilding } from "react-icons/fa";

// Données fusionnées (Expérience + Diplôme correspondant) basées sur ton CV
const timeline = [
  {
    period: "2023 - 2025",
    type: "Master & Alternance",
    job: {
      role: "Concepteur Développeur Fullstack",
      company: "Arcade Informatique",
      location: "Saint-Thibéry",
      desc: "Refonte complète d'un monolithe vers une architecture distribuée .NET 9 / React 18. Digitalisation de workflows réglementaires et pilotage Agile (PO).", 
      stack: [".NET 9", "React 18", "Azure DevOps", "SQL Server"] 
    },
    school: {
      degree: "Expert en Informatique et SI (Bac+5)", 
      name: "EPSI Montpellier",
      focus: "Stratégie SI & Architecture Logicielle" 
    }
  },
  {
    period: "2022 - 2023",
    type: "Bachelor & Alternance",
    job: {
      role: "Concepteur Développeur",
      company: "SEPTEO (Solutions Avocats)",
      location: "Montpellier",
      desc: "Conception de microservices pour la gestion de dossiers juridiques. Optimisation des perfs SQL (Dapper) et mise en place de pipelines CI/CD.", 
      stack: ["Angular 15", ".NET Core", "Docker", "SonarQube"] 
    },
    school: {
      degree: "Concepteur Développeur d'App. (Bac+3)", 
      name: "EPSI Montpellier", 
      focus: "Méthodes Agiles & DevOps" 
    }
  },
  {
    period: "2021",
    type: "Stage & Formation Intensive",
    job: {
      role: "Développeur Web & Mobile",
      company: "Arcade Informatique",
      location: "Saint-Thibéry",
      desc: "Développement d'un module GPS et Photo géolocalisée. Implémentation d'un mode Offline (Persistance locale) pour usage terrain.", 
      // J'ai ajouté la stack manquante ici pour corriger l'erreur et compléter l'info
      stack: ["Ionic", "Angular", "C# (ASP.NET)", "SQL Server"]
    },
    school: {
      degree: "Titre Pro Web & Mobile (Bac+2)", 
      name: "BeWeb (Fondation FACE)", 
      focus: "Développement Hybride" 
    }
  }
];

export default function Experience() {
  return (
    <section id="experiences" className="py-24 px-6 relative max-w-7xl mx-auto">
      
      {/* Titre de Section (Style HUD) */}
          {/* EN-TÊTE DE SECTION */}
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
               <div>
                 <div className="flex items-center gap-4 mb-4">
                   <span className="text-accent font-mono text-sm tracking-widest uppercase">02. Logs</span>
                   <div className="h-px bg-white/10 w-24"></div>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
                   Parcours & <span className="text-accent">Dîplomes</span>
                 </h2>
               </div>
             </div>

      <div className="relative space-y-12">
        {/* Ligne de connexion verticale (Timeline) */}
        <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent hidden md:block"></div>

        {timeline.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative md:pl-16 group"
          >
            {/* Point de connexion sur la timeline */}
            <div className="absolute left-3 top-8 w-4 h-4 bg-[#0B1221] border-2 border-accent rounded-full z-10 hidden md:block group-hover:scale-125 group-hover:bg-accent transition-all duration-300 shadow-[0_0_10px_rgba(var(--accent),0.5)]"></div>

            {/* CARTE PRINCIPALE (Le Module) */}
            <div className="bg-[#0B1221]/80 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
              
              {/* EN-TÊTE DU MODULE (Date & Type) */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-6 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    <FaCalendarAlt size={14} />
                  </div>
                  <span className="font-mono text-accent font-bold tracking-wide">{item.period}</span>
                </div>
                <span className="text-xs font-mono text-text-secondary uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                  {item.type}
                </span>
              </div>

              <div className="grid md:grid-cols-12 gap-0">
                
                {/* COLONNE GAUCHE : EXPÉRIENCE PRO (Dominant) */}
                <div className="md:col-span-8 p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                        {item.job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-text-secondary text-sm mt-1">
                        <FaBuilding className="text-accent/60" size={12} />
                        <span className="font-medium">{item.job.company}</span>
                        <span className="text-white/20">•</span>
                        <span>{item.job.location}</span>
                      </div>
                    </div>
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 hidden sm:block">
                      <FaBriefcase size={18} />
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm leading-relaxed border-l-2 border-white/10 pl-4">
                    {item.job.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {/* Ajout du '?' pour éviter le crash si stack est undefined */}
                    {item.job.stack?.map((tech, i) => (
                      <span key={i} className="text-[11px] font-mono text-accent bg-accent/5 border border-accent/20 px-2 py-1 rounded hover:bg-accent/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* COLONNE DROITE : DIPLÔME (Contexte Académique) */}
                <div className="md:col-span-4 bg-white/[0.02] border-t md:border-t-0 md:border-l border-white/5 p-8 flex flex-col justify-center gap-4 relative overflow-hidden">
                  {/* Background Déco */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <FaGraduationCap size={16} />
                      <span className="text-xs font-bold uppercase tracking-wider">Certification</span>
                    </div>
                    <h4 className="font-bold text-text-primary text-sm mb-1">
                      {item.school.degree}
                    </h4>
                    <p className="text-xs text-text-secondary mb-3">
                      {item.school.name}
                    </p>
                    <div className="inline-block px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-300 font-medium">
                      Focus: {item.school.focus}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}