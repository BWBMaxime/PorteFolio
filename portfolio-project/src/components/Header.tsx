"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 

export default function Header() {
  const navLinks = [
    { name: "Projets", href: "#projets" },
    { name: "Compétences", href: "#competences" },
    { name: "Expériences", href: "#experiences" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-xl z-50 border-b border-white/5"
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image 
              src="/img/wolf.jpg"
              alt="Maxime Guichon - Expert SIS"
              width={42}
              height={42}
              className="rounded-full border-2 border-accent/20 group-hover:border-accent transition-colors"
            />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-text-primary leading-none">
              Maxime Guichon
            </span>
            <span className="text-xs text-accent font-medium uppercase tracking-wider">
              Expert SIS 
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-6">
            <a 
              href="https://github.com/BWBMaxime"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/MaximeGuichon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
          
          <Link 
            href="#contact" 
            className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-accent/10 active:scale-95"
          >
            Me contacter
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}