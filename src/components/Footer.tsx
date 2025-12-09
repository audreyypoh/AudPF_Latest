import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 border-t border-background/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="w-24 h-px bg-background/30"></div>
          <div className="flex items-center gap-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hello@example.com" className="hover:opacity-60 transition-opacity">
              <Mail size={24} />
            </a>
          </div>
          <p className="opacity-60 text-center italic">
            © {currentYear} Audrey Poh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
