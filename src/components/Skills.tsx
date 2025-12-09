import { motion } from "motion/react";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Financial Planning",
      skills: ["Retirement Planning", "Estate Planning", "Tax Planning", "Education Planning", "Cash Flow Management", "Goal Setting"]
    },
    {
      title: "Investment & Wealth",
      skills: ["Portfolio Management", "Asset Allocation", "Risk Assessment", "Investment Strategies", "Market Analysis", "Wealth Preservation"]
    },
    {
      title: "Protection & Insurance",
      skills: ["Life Insurance", "Critical Illness", "Disability Income", "Medical Coverage", "Legacy Planning", "Risk Management"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-px bg-foreground/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 italic">Areas of Expertise</h2>
          <p className="text-xl opacity-60">
            Comprehensive financial solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
              className="bg-card p-10 border border-border"
            >
              <h3 className="text-3xl mb-8 text-center italic">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="px-4 py-2 border-foreground/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
