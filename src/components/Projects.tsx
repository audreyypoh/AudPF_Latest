import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Retirement Planning",
      description: "Comprehensive retirement solutions to help you live your golden years with confidence and financial security.",
      image: "https://images.unsplash.com/photo-1758686254415-9348b5b5df01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50JTIwcGxhbm5pbmclMjBjb3VwbGV8ZW58MXx8fHwxNzYyMjg0MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["CPF Optimization", "SRS Planning", "Passive Income", "Legacy Planning"]
    },
    {
      title: "Family Protection",
      description: "Safeguard your loved ones with tailored insurance solutions and comprehensive risk management strategies.",
      image: "https://images.unsplash.com/photo-1758686254415-9348b5b5df01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBmaW5hbmNpYWwlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjIyMDA2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Life Insurance", "Critical Illness", "Income Protection", "Medical Coverage"]
    },
    {
      title: "Wealth Accumulation",
      description: "Strategic investment planning and portfolio management to build and grow your wealth over time.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2MjIyMjI0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Investment Planning", "Asset Allocation", "Regular Savings", "Diversification"]
    }
  ];

  return (
    <section id="projects" className="py-32 bg-card border-y border-border">
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
          <h2 className="text-5xl md:text-6xl mb-6 italic">My Services</h2>
          <p className="text-xl opacity-60">
            Tailored financial solutions for every stage of life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-border hover:border-foreground/30 transition-all bg-background/80">
                <div className="aspect-video overflow-hidden border-b border-border">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-500 grayscale hover:grayscale-0"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl italic">{project.title}</CardTitle>
                  <CardDescription className="opacity-70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-foreground/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="w-full border-foreground/30" asChild>
                      <a href="#contact">
                        <MessageCircle size={16} className="mr-2" />
                        Learn More
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
