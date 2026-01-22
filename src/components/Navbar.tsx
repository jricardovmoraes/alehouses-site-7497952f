import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  language: 'pt' | 'en' | 'it';
  onLanguageChange: (lang: 'pt' | 'en' | 'it') => void;
}

const content = {
  pt: {
    home: "Início",
    about: "Sobre",
    howItWorks: "Como Funciona",
    documentation: "Documentação",
    financing: "Financiamento",
    rehabilitation: "Reabilitação Urbana",
    contact: "Contacto",
  },
  en: {
    home: "Home",
    about: "About",
    howItWorks: "How It Works",
    documentation: "Documentation",
    financing: "Financing",
    rehabilitation: "Urban Rehabilitation",
    contact: "Contact",
  },
  it: {
    home: "Home",
    about: "Chi Siamo",
    howItWorks: "Come Funziona",
    documentation: "Documentazione",
    financing: "Finanziamento",
    rehabilitation: "Riqualificazione Urbana",
    contact: "Contatto",
  },
};

export const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = content[language];

  const navItems = [
    { label: t.home, href: "#home" },
    { label: t.about, href: "#about" },
    { label: t.howItWorks, href: "#how-it-works" },
    { label: t.documentation, href: "#documentation" },
    { label: t.financing, href: "#financing" },
    { label: t.rehabilitation, href: "#rehabilitation" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-primary">
            Alehouses<span className="text-accent">.pt</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
            <Button variant="hero" onClick={() => scrollToSection("#contact")}>
              {t.contact}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 px-4 text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button variant="hero" className="w-full" onClick={() => scrollToSection("#contact")}>
                {t.contact}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
