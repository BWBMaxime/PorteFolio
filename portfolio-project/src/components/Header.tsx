"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Profil", href: "#about" },
    { name: "Logs", href: "#experiences" },
    { name: "Portfolio", href: "#projets" },
    { name: "Skills", href: "#competences" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/BWBMaxime", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/maxime-guichon-000290208/", label: "LinkedIn" }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen
          ? "bg-background/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group relative z-50" onClick={() => setIsOpen(false)}>
          <div className="relative">
            <Image
              src="/img/wolf.jpg"
              alt="Maxime Guichon - Développeur Fullstack Montpellier"
              width={45}
              height={45}
              className="rounded-full border-2 border-accent/50 group-hover:border-accent transition-all duration-300 group-hover:scale-105"
            />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-background"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-text-primary leading-none group-hover:text-accent transition-colors">
              Maxime Guichon
            </span>
            <span className="text-xs text-text-secondary font-medium uppercase tracking-wider mt-0.5">
              Fullstack Dev & Expert SIS
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-white/10 pr-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-text-secondary hover:text-text-primary hover:scale-110 transition-all text-xl"
              >
                <social.icon />
              </a>
            ))}
          </div>

          <Link
            href="#contact"
            className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 active:scale-95 transform"
          >
            On échange ?
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 text-text-primary text-2xl p-2 hover:bg-white/5 rounded-lg transition-colors"
          aria-label="Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-background border-b border-white/10 shadow-2xl md:hidden pt-24 pb-8 px-6 flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-accent transition-colors border-b border-white/5 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-6 mt-2 justify-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent text-2xl"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold transition-all mt-4"
              >
                On échange ?
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}