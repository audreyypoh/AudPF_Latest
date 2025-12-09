"use client";

import { motion } from "motion/react";
import { Shield, Heart, TrendingUp } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Crafting robust financial safety nets through tailored insurance and risk management strategies."
    },
    {
      icon: Heart,
      title: "Client-Centric Approach",
      description: "Building meaningful relationships founded on trust, transparency, and your unique financial goals."
    },
    {
      icon: TrendingUp,
      title: "Wealth Growth",
      description: "Developing strategic investment plans to help you build and preserve long-term wealth."
    }
  ];

  return (
    <section id="about" className="py-32 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-px bg-foreground/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl mb-8 italic">About Me</h2>
          <p className="text-xl opacity-75 leading-relaxed">
            As an Independent Financial Advisor in Singapore, I provide unbiased, comprehensive financial planning services. 
            My approach is centered on understanding your life goals and creating customized strategies that evolve with you. 
            With access to a wide range of financial products and a commitment to transparent advice, 
            I empower my clients to make informed decisions about their financial future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="text-center p-8 border border-border/50 bg-background/50"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-foreground/20 mb-6">
                <feature.icon size={32} className="opacity-70" />
              </div>
              <h3 className="text-2xl mb-4 italic">{feature.title}</h3>
              <p className="opacity-60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
