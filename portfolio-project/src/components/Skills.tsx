"use client";
import { FiCpu, FiGlobe, FiDatabase, FiCommand, FiActivity, FiLayers, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion, Variants } from "framer-motion";
// --- TYPES & DATA ---
const skillSystems = [
  {
    id: "core",
    name: "Système Coeur (.NET)",
    icon: FiCpu,
    color: "border-blue-500/50 text-blue-400",
    bg: "bg-blue-500/10",
    description: "Architecture robuste et haute performance.",
    skills: [
      ".NET 9", "C#", "ASP.NET Core", "Clean Architecture",
      "CQRS", "MediatR", "Entity Framework", "Dapper",
      "Microservices", "Dependency Injection"
    ]
  },
  {
    id: "front",
    name: "Interface de Navigation",
    icon: FiGlobe,
    color: "border-accent/50 text-accent",
    bg: "bg-accent/10",
    description: "Expérience utilisateur fluide et réactive.",
    skills: [
      "React 18", "Next.js", "TypeScript", "Angular 15",
      "Tailwind CSS", "Ionic", "Framer Motion", "UI/UX Design",
      "Offline First"
    ]
  },
  {
    id: "data_ops",
    name: "Infrastructure & Données",
    icon: FiDatabase,
    color: "border-purple-500/50 text-purple-400",
    bg: "bg-purple-500/10",
    description: "Fiabilité, persistance et déploiement continu.",
    skills: [
      "SQL Server", "NoSQL", "Azure DevOps", "Docker",
      "CI/CD Pipelines", "SonarQube", "Grafana", "Kusto",
      "Git", "MCD/MLD"
    ]
  },
  {
    id: "human",
    name: "Module Commandement",
    icon: FiCommand,
    color: "border-orange-500/50 text-orange-400",
    bg: "bg-orange-500/10",
    description: "Pilotage, stratégie et état d'esprit.",
    skills: [
      "Méthode Agile (Scrum)", "Product Ownership", "Audit SI",
      "Vision Produit", "Rigueur Scientifique", "Modding & Reverse Eng.",
      "Parkour Mindset", "Anglais Technique"
    ]
  }
];

// Animation flottante aléatoire pour chaque tag
const floatVariants: Variants = {
  animate: (i: any) => ({ // <--- Changement ici : number -> any
    y: [0, -5, 0],
    x: [0, i % 2 === 0 ? 3 : -3, 0],
    transition: {
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: Math.random() * 2
    }
  })
};

export default function Skills() {

  return (
    <section id="competences" className="py-24 px-6 relative overflow-hidden">

      {/* Background Éléments (Orbites décoratives) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-30 pointer-events-none animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-white/5 rounded-full opacity-30 pointer-events-none animate-[spin_40s_linear_infinite_reverse]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* EN-TÊTE DE SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-accent font-mono text-sm tracking-widest uppercase">04. Skills</span>
              <div className="h-px bg-white/10 w-24"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
              Arsenal <span className="text-accent">Technique</span>
            </h2>
          </div>
        </div>

        {/* GRILLE DE CLUSTERS (Grid Masonry Style) */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {skillSystems.map((system, idx) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Carte "Glassmorphism" */}
              <div className="h-full bg-[#0B1221]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:border-white/20 transition-colors overflow-hidden">

                {/* Glow Effect au Hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${system.bg} blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-50 transition-opacity duration-700`}></div>

                {/* Header Catégorie */}
                <div className="flex items-start gap-4 mb-8">
                  <div className={`p-3 rounded-2xl ${system.bg} ${system.color} border border-white/5`}>
                    <system.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">{system.name}</h3>
                    <p className="text-xs text-text-secondary uppercase tracking-wider">{system.description}</p>
                  </div>
                </div>

                {/* Nuage de Tags (Skills) */}
                <div className="flex flex-wrap gap-3">
                  {system.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      custom={i}
                      variants={floatVariants}
                      animate="animate"
                      className={`
                        relative px-4 py-2 rounded-xl text-sm font-medium 
                        bg-white/5 border border-white/5 text-text-secondary
                        hover:bg-white/10 hover:text-white hover:border-white/20 
                        transition-colors cursor-default select-none
                        ${skill.includes(".NET") || skill.includes("React") ? "border-accent/30 text-accent/90" : ""}
                      `}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Lignes décoratives style HUD */}
                <div className="absolute bottom-4 right-4 flex gap-1">
                  <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* FOOTER : VISION GLOBALE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/[0.02] border border-white/5 rounded-full backdrop-blur-sm">
            <span className="text-sm text-text-secondary flex items-center gap-2">
              <FiLayers className="text-accent" /> Approche : <span className="text-white font-medium">Clean Architecture</span>
            </span>
            <span className="w-px h-4 bg-white/10"></span>
            <span className="text-sm text-text-secondary flex items-center gap-2">
              <FiActivity className="text-blue-400" /> Focus : <span className="text-white font-medium">Performance & Scalabilité</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}