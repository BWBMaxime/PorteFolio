"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe, FiCpu, FiSmartphone, FiX, FiArrowRight, FiArrowLeft, FiLayers, FiCheckCircle, FiTerminal, FiCommand, FiServer, FiLayout } from "react-icons/fi";

// --- TYPES ---
type ProjectType = "Fullstack" | "Microservices" | "Mobile" | "Bot";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  type: ProjectType;
  shortDesc: string;
  tags: string[];
  context: string;
  challenge: string;
  solution: string[];
  stack: string[];
  results: string[];
}

// --- DATA ---
const projects: Project[] = [
  {
    id: 5,
    title: "Portfolio Interactif",
    subtitle: "Vitrine Immersive & DevOps",
    company: "Projet Personnel",
    period: "2025",
    type: "Fullstack",
    shortDesc: "Conception de ce site web : une expérience immersive (Space HUD) couplée à une pipeline de déploiement continu sur VPS OVH.",
    tags: ["Next.js 14", "CI/CD", "OVH", "Framer Motion"],
    context: "Volonté de créer une identité numérique forte, dépassant le CV traditionnel. L'objectif était double : proposer une expérience utilisateur marquante et maîtriser la chaîne de déploiement complète (du code au serveur).",
    challenge: "Allier design créatif (animations lourdes, glassmorphism) et performance web. Mettre en place une infrastructure de production autonome sur serveur dédié sans dépendre de solutions 'clés en main'.",
    solution: [
      "Développement Frontend sous Next.js 14 (App Router) avec TypeScript pour la robustesse.",
      "Design System 'Space HUD' sur-mesure avec Tailwind CSS et animations Framer Motion (Layout Animations).",
      "Configuration d'un VPS OVH (Ubuntu/Nginx) et mise en place d'un pipeline GitHub Actions pour le déploiement automatique.",
      "Gestion du domaine personnalisé et sécurisation SSL (Certbot)."
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind", "Framer Motion", "GitHub Actions", "OVH VPS"],
    results: ["Déploiement automatisé (Push-to-Deploy)", "Interface fluide et Responsive", "Maîtrise totale de l'infrastructure"]
  },
  {
    id: 4,
    title: "Hati Bot",
    subtitle: "Orchestrateur Vocal & Automation",
    company: "Projet Communautaire",
    period: "2025",
    type: "Bot",
    shortDesc: "Bot Discord pilotant la création dynamique de salons vocaux (Auto-Room) avec interface de gestion interactive complète.",
    tags: ["Python", "Discord.py", "AsyncIO", "Event-Driven"],
    context: "Gestion d'une communauté gaming active nécessitant des salons vocaux flexibles. Les utilisateurs avaient besoin de créer leurs propres espaces sans attendre un administrateur.",
    challenge: "Créer un système 'Auto-Room' capable de gérer le cycle de vie des salons (création, suppression vide, transfert de droits) tout en offrant une UI intuitive sans commandes textuelles complexes.",
    solution: [
      "Architecture Événementielle (Event-Driven) basée sur les 'Voice State Updates' pour une réactivité immédiate.",
      "Conception d'une UI persistante (View Class) avec Menus Déroulants (Select) et Boutons pour la configuration (Taille, Jeu, Ban).",
      "Algorithme de 'Host Migration' : réassignation automatique des droits d'admin si l'hôte quitte le salon.",
      "Système de commandes Slash (/invite) avec génération d'Embeds dynamiques."
    ],
    stack: ["Python 3.10", "Lib Discord.py", "AsyncIO", "JSON (Config)", "Git"],
    results: ["Autonomie totale des membres (+100 salons/jour)", "Zéro canal 'fantôme' (nettoyage auto)", "UX Ludique avec catégories de jeux"]
  },
  {
    id: 1,
    title: "Portail V2 & eDAP",
    subtitle: "Refonte Architecture & Digitalisation",
    company: "Arcade Informatique",
    period: "2023 - 2025",
    type: "Fullstack",
    shortDesc: "Migration d'un monolithe Legacy vers une architecture modulaire .NET 9 / React. Digitalisation de procédures judiciaires.",
    tags: [".NET 9", "React 18", "Clean Arch", "CQRS"],
    context: "Modernisation d'un ERP métier vieillissant (WebForms) pour les huissiers/commissaires de justice. Nécessité de créer un module 'eDAP' (Demande d'Autorisation de Poursuite) entièrement dématérialisé.",
    challenge: "Découpler la logique métier d'un monolithe historique tout en assurant la continuité de service. Gérer des workflows complexes de validation juridique et de signature électronique.",
    solution: [
      "Mise en place d'une Clean Architecture avec le pattern CQRS (MediatR) pour séparer les commandes et les requêtes.",
      "Développement d'une API RESTful .NET 9 consommée par un front React 18 / TypeScript.",
      "Intégration de pipelines Azure DevOps pour le CI/CD et l'automatisation des tests.",
      "Gestion de la génération de PDF dynamiques et signature via API tierce."
    ],
    stack: [".NET 9", "React 18", "Entity Framework", "SQL Server", "Azure DevOps", "MediatR"],
    results: ["Gain de performance de 40% sur les requêtes", "Maintenance facilitée par le découpage modulaire", "Adoption utilisateur réussie pour le module eDAP"]
  },
  {
    id: 2,
    title: "Microservice DEP",
    subtitle: "Gestion de Dossiers Juridiques",
    company: "SEPTEO (Solutions Avocats)",
    period: "2022 - 2023",
    type: "Microservices",
    shortDesc: "Conception d'un service critique de gestion de dossiers au sein d'un écosystème distribué pour avocats.",
    tags: ["Angular", ".NET Core", "Dapper", "Docker"],
    context: "Au sein de la 'Solution Avocats', besoin d'isoler la logique de gestion des Dossiers Électroniques Partagés (DEP) pour améliorer la scalabilité.",
    challenge: "Optimiser les performances sur des volumes de données importants et garantir l'intégrité des données juridiques sensibles.",
    solution: [
      "Utilisation de l'ORM Dapper pour les requêtes critiques nécessitant une haute performance (vs Entity Framework).",
      "Architecture Microservices conteneurisée avec Docker.",
      "Mise en place de tests unitaires robustes (xUnit) et analyse statique (SonarQube) pour garantir zéro régression."
    ],
    stack: ["Angular 15", ".NET Core 6", "Dapper", "Docker", "SonarQube", "Kusto"],
    results: ["Réduction du temps de réponse API", "Architecture découplée et résiliente", "Code coverage > 80%"]
  },
  {
    id: 3,
    title: "Massia Mobile",
    subtitle: "Application Terrain Offline",
    company: "Arcade Informatique",
    period: "2021",
    type: "Mobile",
    shortDesc: "Application mobile hybride permettant la saisie et la géolocalisation de constats sur le terrain sans réseau.",
    tags: ["Ionic", "Angular", "Offline First", "GPS"],
    context: "Les agents de terrain avaient besoin de saisir des constats et prendre des photos géolocalisées dans des zones blanches (sans réseau).",
    challenge: "Gérer la persistance des données en local et la synchronisation (conflits) une fois le réseau retrouvé.",
    solution: [
      "Développement hybride avec Ionic & Angular pour un déploiement rapide iOS/Android.",
      "Implémentation d'une base de données locale (SQLite) pour le mode Offline.",
      "Module natif pour l'accès GPS et Caméra avec tagging des métadonnées."
    ],
    stack: ["Ionic", "Angular", "C# API", "SQLite", "Cordova"],
    results: ["Suppression de la resaisie papier", "Fiabilisation des preuves photos (géoloc)", "Usage fluide en zone blanche"]
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll Manuel Calibré
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // 350px (largeur carte) + 32px (gap-8) = ~382px par cran
      const scrollAmount = 380; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="projets" className="py-24 relative overflow-hidden bg-background">
      
      {/* Background Decoratif */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-10 left-10 w-2 h-2 bg-accent/40 rounded-full blur-[2px] animate-pulse"></div>
         <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-500/40 rounded-full blur-[2px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
               <span className="text-accent font-mono text-sm tracking-widest uppercase">03. Portfolio</span>
               <div className="h-px bg-white/10 w-24"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
              Projets & <span className="text-accent">Réalisations</span>
            </h2>
          </div>
          
          {/* NAVIGATION BOUTONS */}
          <div className="flex items-center gap-4">
             <button 
                onClick={() => scroll("left")}
                className="p-3 rounded-full border border-white/10 bg-[#0B1221] hover:bg-white/5 hover:border-accent text-text-secondary hover:text-accent transition-all active:scale-95 shadow-lg"
                aria-label="Projet précédent"
             >
               <FiArrowLeft size={20} />
             </button>
             <button 
                onClick={() => scroll("right")}
                className="p-3 rounded-full border border-white/10 bg-[#0B1221] hover:bg-white/5 hover:border-accent text-text-secondary hover:text-accent transition-all active:scale-95 shadow-lg"
                aria-label="Projet suivant"
             >
               <FiArrowRight size={20} />
             </button>
          </div>
        </div>
      </div>

      {/* CARROUSEL MANUEL */}
      <div className="w-full relative">
        
        {/* Ombres latérales pour indiquer le scroll */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none md:hidden"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none md:hidden"></div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 px-6 hide-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              // TAILLE RÉDUITE ICI : min-w-[280px] sur mobile et md:min-w-[350px] sur desktop
              className="min-w-[280px] md:min-w-[350px] flex-shrink-0 snap-center cursor-pointer group"
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-full bg-[#0B1221] border border-white/5 rounded-3xl p-6 relative overflow-hidden hover:border-accent/50 transition-colors flex flex-col shadow-lg shadow-black/30">
                {/* Background Gradient */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors"></div>

                {/* Header Carte */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-3 bg-white/5 rounded-2xl text-accent border border-white/5 group-hover:border-accent/30 transition-colors">
                    {project.type === "Fullstack" && <FiGlobe size={20} />}
                    {project.type === "Microservices" && <FiCpu size={20} />}
                    {project.type === "Mobile" && <FiSmartphone size={20} />}
                    {project.type === "Bot" && <FiTerminal size={20} />}
                  </div>
                  <span className="font-mono text-[10px] uppercase text-text-secondary border border-white/10 px-2 py-1 rounded bg-[#0B1221]/50 backdrop-blur-md">
                    {project.period}
                  </span>
                </div>

                {/* Contenu Carte */}
                <div className="relative z-10 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-text-secondary mb-6 line-clamp-3 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono text-text-secondary/80 bg-white/5 px-2 py-1 rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="text-[10px] px-2 py-1 text-text-secondary/60">+{project.tags.length - 3}</span>
                    )}
                  </div>
                  
                  {/* Bouton "Voir détails" */}
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-text-primary group-hover:text-accent transition-colors uppercase tracking-wider">
                    <span>Voir le projet</span>
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                        <FiArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Carte Placeholder (Fin de liste) */}
          <div className="min-w-[280px] md:min-w-[350px] flex-shrink-0 snap-center flex items-center justify-center">
             <div className="h-full w-full border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center gap-3 text-text-secondary/40 p-8 hover:border-white/20 transition-colors cursor-default">
                <span className="text-3xl">+</span>
                <span className="font-mono text-xs uppercase tracking-widest">Prochain Projet</span>
             </div>
          </div>
        </div>
      </div>

      {/* MODAL / DETAILS (Overlay) */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop Flou */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-4xl bg-[#0B1221] border border-white/10 rounded-3xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col shadow-2xl shadow-black/80"
            >
              <div className="overflow-y-auto custom-scrollbar p-8 md:p-10">
                
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-20 group border border-white/5"
                >
                  <FiX size={20} className="group-hover:rotate-90 transition-transform" />
                </button>

                <div className="grid md:grid-cols-3 gap-10">
                  
                  {/* Colonne Gauche */}
                  <div className="md:col-span-1 space-y-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 leading-tight">
                        {selectedProject.title}
                      </h2>
                      <p className="text-accent font-medium text-base">{selectedProject.subtitle}</p>
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t border-white/10 text-sm">
                      <div>
                        <p className="text-[10px] text-text-secondary uppercase tracking-widest mb-1">Entreprise</p>
                        <p className="text-white font-mono flex items-center gap-2">
                            <FiLayout className="text-accent" /> {selectedProject.company}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-text-secondary uppercase tracking-widest mb-1">Période</p>
                        <p className="text-white font-mono">{selectedProject.period}</p>
                      </div>
                      <div>
                         <p className="text-[10px] text-text-secondary uppercase tracking-widest mb-2">Tech Stack</p>
                         <div className="flex flex-wrap gap-2">
                            {selectedProject.stack.map(t => (
                              <span key={t} className="px-2 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] rounded hover:bg-accent/20 transition-colors cursor-default">
                                {t}
                              </span>
                            ))}
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Colonne Droite */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                        <FiLayers className="text-accent" /> Contexte & Challenge
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {selectedProject.context}
                      </p>
                      <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-lg text-xs text-text-secondary/90 italic">
                        "<span className="font-semibold text-red-400">Le Défi :</span> {selectedProject.challenge}"
                      </div>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                        {selectedProject.type === "Bot" ? <FiCommand className="text-accent" /> : 
                         selectedProject.type === "Fullstack" ? <FiServer className="text-accent" /> : <FiCpu className="text-accent" />}
                        Architecture & Solutions
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.solution.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                        <FiCheckCircle className="text-accent" /> Résultats Clés
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {selectedProject.results.map((res, idx) => (
                          <div key={idx} className="p-3 bg-white/5 border border-white/5 rounded-lg flex items-center gap-3 hover:bg-white/10 transition-colors">
                              <div className="w-1 h-6 bg-green-500 rounded-full"></div>
                              <span className="text-xs font-medium text-white">{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}