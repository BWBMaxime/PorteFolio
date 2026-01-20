"use client";
import { motion, Variants } from "framer-motion";
import { FiExternalLink, FiTerminal, FiCpu, FiGlobe } from "react-icons/fi";

type Project = {
  title: string;
  company: string;
  period: string;
  desc: string;
  details: string[];
  tags: string[];
  type: "Fullstack" | "Microservices" | "Mobile";
};

const projects: Project[] = [
  {
    title: "Portail V2 & eDAP",
    company: "Arcade Informatique",
    period: "10/2023 - 09/2025",
    desc: "Refonte d'un monolithe en architecture autonome et digitalisation d'un workflow réglementaire.",
    details: [
      "Architecture .NET 9 & React 18",
      "Pilotage Agile via Azure DevOps",
      "Rédaction du cahier des charges CRM"
    ],
    tags: [".NET 9", "React", "TypeScript", "SQL Server", "DevOps"],
    type: "Fullstack",
  },
  {
    title: "Microservice DEP",
    company: "SEPTEO (Solutions Avocats)",
    period: "09/2022 - 10/2023",
    desc: "Conception et développement d'un workflow de gestion de dossiers juridiques.",
    details: [
      "Optimisation SQL (Dapper) & xUnit",
      "Monitoring Grafana & Kusto",
      "Audit de code via SonarQube"
    ],
    tags: ["Angular 15", ".NET Core", "Docker", "SonarQube", "CI/CD"],
    type: "Microservices",
  },
  {
    title: "Massia-Laboratoire",
    company: "Arcade Informatique",
    period: "10/2021 - 11/2021",
    desc: "Développement d'une application mobile avec prise de vue géolocalisée et mode hors-ligne.",
    details: [
      "Implémentation de la persistance locale",
      "Module Photo & GPS intégré",
      "Stack hybride Ionic/Angular"
    ],
    tags: ["Ionic", "Angular", "C# (ASP.NET)", "SQL Server"],
    type: "Mobile",
  },
];

// Correction du type Error: Utilisation explicite de 'Variants'
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" // TypeScript reconnaît maintenant cette valeur grâce au type Variants
    },
  },
};

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-16">
        <div className="flex-1">
          <h2 className="text-accent font-mono text-sm mb-2 tracking-[0.2em] uppercase">Expertise en action</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-primary">
            Projets <span className="text-accent underline decoration-1 underline-offset-[12px]">Réalisés</span>
          </h3>
        </div>
        <p className="text-text-secondary max-w-md text-sm leading-relaxed border-l border-accent/30 pl-4 italic">
          "Du développement Fullstack au pilotage de projets complexes, j'accompagne l'innovation au sein des pôles R&D."
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((p, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            className="group relative flex flex-col h-full p-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] hover:from-accent/40 transition-all duration-500"
          >
            <div className="flex flex-col h-full p-8 rounded-[1.9rem] bg-[#0A0F1C] border border-white/5 group-hover:border-transparent transition-all">
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-accent/10 rounded-lg text-accent text-xl">
                  {p.type === "Fullstack" && <FiGlobe />}
                  {p.type === "Microservices" && <FiCpu />}
                  {p.type === "Mobile" && <FiTerminal />}
                </div>
                <span className="text-text-secondary/40 font-mono text-xs">{p.period}</span>
              </div>

              <div className="mb-6">
                <h4 className="text-accent font-mono text-xs mb-1 uppercase tracking-tight">{p.company}</h4>
                <h5 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors leading-tight">
                  {p.title}
                </h5>
              </div>

              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                {p.desc}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {p.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary/80">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {p.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-[10px] font-semibold px-2.5 py-1 bg-white/5 text-text-secondary/70 rounded-md border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}