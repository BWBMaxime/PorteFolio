"use client";
import { motion, Variants } from "framer-motion";

const experiences = [
  {
    date: "2023 - 2025",
    role: "Concepteur Développeur Fullstack (Alternance Master)",
    company: "Arcade Informatique",
    description: "Refonte d'un monolithe vers une architecture .NET 9 / React 18 et pilotage de projet en mode Agile.",
    skills: [".NET 9", "React", "Azure DevOps", "Architecture autonome"]
  },
  {
    date: "2022 - 2023",
    role: "Concepteur Développeur (Alternance Bac+3)",
    company: "SEPTEO (Solutions Avocats)",
    description: "Conception de microservices et workflows de gestion de dossiers juridiques.",
    skills: ["Angular 15", ".NET Core", "Docker", "SonarQube"]
  },
  {
    date: "2021",
    role: "Développeur Web & Mobile (Stage)",
    company: "Arcade Informatique",
    description: "Implémentation d'un module GPS et mode offline pour application mobile.",
    skills: ["Ionic", "Angular", "C#", "SQL Server"]
  }
];

const variants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export default function Experience() {
  return (
    <section id="experiences" className="py-24 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-16 flex items-center gap-4 text-text-primary">
        <span className="text-accent italic font-mono text-xl">02.</span> Parcours Pro
      </h3>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="relative pl-8 border-l border-white/10 group"
          >
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-2 group-hover:scale-150 transition-transform shadow-[0_0_10px_#3b82f6]" />
            <span className="text-accent font-mono text-sm">{exp.date}</span>
            <h4 className="text-xl font-bold text-text-primary mt-1">{exp.role}</h4>
            <p className="text-accent/80 font-medium mb-3">{exp.company}</p>
            <p className="text-text-secondary text-sm max-w-2xl leading-relaxed mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map(s => (
                <span key={s} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-text-secondary">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}