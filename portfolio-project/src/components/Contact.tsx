"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiCpu, FiMessageSquare, FiUser } from "react-icons/fi";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulation d'un délai réseau pour l'effet "Transmission"
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Méthode "mailto" : Ouvre le client mail de l'utilisateur
    // C'est la méthode la plus simple sans backend. 
    // Pour un vrai formulaire sans ouverture de client mail, regarde "Formspree" ou "EmailJS".
    const mailtoLink = `mailto:maximeguichon1999@gmail.com?subject=[PORTFOLIO] ${encodeURIComponent(formState.subject)}&body=Nom: ${encodeURIComponent(formState.name)}%0AEmail: ${encodeURIComponent(formState.email)}%0A%0A${encodeURIComponent(formState.message)}`;
    
    window.location.href = mailtoLink;
    setStatus("success");
    
    // Reset après 3 secondes
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      
      {/* Background Decoratif */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* EN-TÊTE */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="flex items-center gap-4 mb-4">
               <span className="text-accent font-mono text-sm tracking-widest uppercase">On échange ?</span>
               <div className="h-px bg-white/10 w-24"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Contacter</span>
            </h2>
            <p className="text-text-secondary max-w-xl">
              Un projet ? Une opportunité ? Ou simplement envie de discuter tech et jeux vidéo ? 
              Mon canal est ouvert.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* COLONNE GAUCHE : INFOS DE CONTACT (HUD STYLE) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Carte Info 1 */}
            <div className="group p-6 bg-[#0B1221] border border-white/5 rounded-3xl hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FiMail size={60} />
              </div>
              <h3 className="text-text-secondary text-xs uppercase tracking-widest mb-2">Email</h3>
              <a href="mailto:maximeguichon1999@gmail.com" className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors block break-all">
                maximeguichon1999@gmail.com
              </a>
              <div className="mt-4 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-green-400 font-mono">Signal: Excellent</span>
              </div>
            </div>

            {/* Carte Info 2 & 3 (Grid) */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group p-6 bg-[#0B1221] border border-white/5 rounded-3xl hover:border-accent/30 transition-all duration-300">
                <div className="mb-4 text-accent bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center">
                  <FiPhone size={20} />
                </div>
                <h3 className="text-text-secondary text-xs uppercase tracking-widest mb-1">Ligne Directe</h3>
                <p className="text-lg font-bold text-text-primary">+33 6 73 96 25 03</p>
              </div>

              <div className="group p-6 bg-[#0B1221] border border-white/5 rounded-3xl hover:border-accent/30 transition-all duration-300">
                <div className="mb-4 text-blue-400 bg-blue-500/10 w-10 h-10 rounded-lg flex items-center justify-center">
                  <FiMapPin size={20} />
                </div>
                <h3 className="text-text-secondary text-xs uppercase tracking-widest mb-1">Ville</h3>
                <p className="text-lg font-bold text-text-primary">Montpellier, FR</p>
              </div>
            </div>

            {/* Terminal Déco */}
            <div className="p-6 bg-black/40 border border-white/10 rounded-xl font-mono text-xs text-text-secondary/60 hidden md:block">
              <p className="mb-1"><span className="text-green-500">➜</span> ~ ssh maxime@portfolio</p>
              <p className="mb-1"><span className="text-green-500">➜</span> ~ establishing secure connection...</p>
              <p className="mb-1"><span className="text-green-500">➜</span> ~ status: <span className="text-accent">waiting for input</span></p>
              <p className="animate-pulse">_</p>
            </div>
          </motion.div>


          {/* COLONNE DROITE : FORMULAIRE */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0B1221]/50 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-10 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-accent uppercase tracking-wider ml-1">Identifiant</label>
                  <div className="relative group">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" />
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Votre Nom" 
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-[#0A0F1C] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-accent uppercase tracking-wider ml-1">(Email)</label>
                  <div className="relative group">
                    <FiCpu className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" />
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="votre@email.com" 
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-[#0A0F1C] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all" 
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-accent uppercase tracking-wider ml-1">Sujet</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder="Projet Web, Offre d'emploi, Discussion..." 
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full bg-[#0A0F1C] border border-white/10 rounded-xl py-4 px-4 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-accent uppercase tracking-wider ml-1">Données transmises</label>
                <div className="relative group">
                  <FiMessageSquare className="absolute left-4 top-6 text-text-secondary group-focus-within:text-accent transition-colors" />
                  <textarea 
                    name="message"
                    required
                    rows={5} 
                    placeholder="Détails de votre requête..." 
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-[#0A0F1C] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full bg-accent hover:bg-accent-hover text-white rounded-xl font-bold py-4 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {status === "idle" && (
                  <>
                    <span>Lancer la transmission</span>
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                {status === "submitting" && (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                )}
                {status === "success" && (
                  <>
                    <span>Transmission Reçue</span>
                    <FiCheckCircle className="text-xl" />
                  </>
                )}
              </button>

            </form>
            
            {/* Effets décoratifs angles */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl -translate-x-2 -translate-y-2"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/30 rounded-br-2xl translate-x-2 translate-y-2"></div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}