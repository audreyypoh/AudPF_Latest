"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "~/components/ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Decorative ink element */}
      <div className="absolute top-1/4 right-10 opacity-10 text-8xl rotate-12 select-none pointer-events-none">✦</div>
      <div className="absolute bottom-1/4 left-10 opacity-10 text-8xl -rotate-12 select-none pointer-events-none">✦</div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-px bg-foreground/30"></div>
            </div>
            <h1 className="text-6xl md:text-8xl mb-8 tracking-tight">
              <span className="block text-4xl md:text-5xl mb-4 opacity-60">Greetings, I am</span>
              <span className="italic">Audrey Poh</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 opacity-75 italic">
              Independent Financial Advisor
            </p>
            <div className="w-16 h-px bg-foreground/30 mx-auto mb-8"></div>
            <p className="text-xl opacity-60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Empowering individuals and families in Singapore to achieve financial wellness through personalized advice. 
              Committed to building lasting relationships and creating tailored financial strategies for your future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" onClick={() => scrollToSection("projects")} variant="outline" className="border-foreground/30">
              View My Services
            </Button>
            <Button size="lg" onClick={() => scrollToSection("contact")} className="bg-foreground text-background hover:bg-foreground/90">
              Schedule a Consultation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-8"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hello@example.com" className="hover:opacity-60 transition-opacity">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
