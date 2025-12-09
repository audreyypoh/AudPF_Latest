import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollToSection("hero")}>
            <span className="text-3xl italic">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollToSection("about")} className="hover:opacity-60 transition-opacity relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection("skills")} className="hover:opacity-60 transition-opacity relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:opacity-60 transition-opacity relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" className="border-foreground/30">Contact</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <button onClick={() => scrollToSection("about")} className="text-left hover:opacity-60 transition-opacity">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-left hover:opacity-60 transition-opacity">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-left hover:opacity-60 transition-opacity">
              Services
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" className="w-full border-foreground/30">Contact</Button>
          </div>
        )}
      </nav>
    </header>
  );
}
