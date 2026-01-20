"use client";
import { motion, Variants } from "framer-motion";

type SkillCategory = {
  category: string;
  skills: { name: string; level: string }[];
};

const skillGroups: SkillCategory[] = [
  {
    category: "Environnement .NET & Backend",
    skills: [
      { name: ".NET 9 / C#", level: "95%" },
      { name: "ASP.NET Core", level: "90%" },
      { name: "Entity Framework / Dapper", level: "85%" },
      { name: "Architecture (Clean, CQRS)", level: "80%" },
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "React 18 / Next.js", level: "90%" },
      { name: "Angular (15)", level: "80%" },
      { name: "TypeScript", level: "85%" },
      { name: "Ionic / Tailwind CSS", level: "85%" },
    ],
  },
  {
    category: "Data & DevOps",
    skills: [
      { name: "SQL Server / NoSQL", level: "85%" },
      { name: "Azure DevOps / CI/CD", level: "80%" },
      { name: "Docker / SonarQube", level: "75%" },
      { name: "Monitoring (Grafana/Kusto)", level: "75%" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <motion.section 
      id="competences" 
      className="py-16 px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
    >
      <div className="flex flex-col mb-8">
        <h2 className="text-accent font-mono text-sm mb-2 tracking-[0.2em] uppercase">Expertise</h2>
        <div className="flex items-center gap-4">
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary whitespace-nowrap">
            Compétences <span className="text-accent underline decoration-1 underline-offset-8">Techniques</span>
          </h3>
          <div className="h-[1px] w-full bg-white/10"></div>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {skillGroups.map((group) => (
          <motion.div 
            key={group.category} 
            variants={itemVariants}
            className="space-y-6 p-8 rounded-3xl bg-primary/40 border border-white/5 backdrop-blur-sm hover:border-accent/20 transition-colors group"
          >
            <h4 className="text-xl font-bold text-text-primary flex items-center gap-3">
              <span className="w-2 h-2 bg-accent rounded-full group-hover:animate-pulse"></span>
              {group.category}
            </h4>
            
            <div className="space-y-5">
              {group.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary font-medium">{skill.name}</span>
                    <span className="text-accent/60 font-mono">{skill.level}</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-accent/50 to-accent h-full rounded-full" 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-16 p-8 rounded-3xl bg-accent/5 border border-accent/10 flex flex-wrap justify-center gap-8 md:gap-16"
      >
        <div className="text-center">
          <p className="text-accent font-bold text-xl uppercase tracking-tighter">Agile & PO</p>
          <p className="text-text-secondary text-xs uppercase tracking-widest mt-1">Scrum / Azure DevOps</p>
        </div>
        <div className="text-center">
          <p className="text-accent font-bold text-xl uppercase tracking-tighter">Architecture</p>
          <p className="text-text-secondary text-xs uppercase tracking-widest mt-1">Clean / Microservices</p>
        </div>
        <div className="text-center">
          <p className="text-accent font-bold text-xl uppercase tracking-tighter">Stratégie SI</p>
          <p className="text-text-secondary text-xs uppercase tracking-widest mt-1">Audit / SWOT / Schéma Directeur</p>
        </div>
      </motion.div>
    </motion.section>
  );
}