import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-villa.jpg";

interface HeroProps {
  language: 'pt' | 'en' | 'it';
}

const content = {
  pt: {
    title: "Invista com Segurança em Portugal",
    subtitle: "Cuidamos de todo o processo para você",
    description: "Intermediação imobiliária especializada em atender estrangeiros que desejam alugar e comprar imóveis em Portugal, com acompanhamento completo em todas as etapas.",
    cta1: "Descubra Oportunidades",
    cta2: "Fale com Alexandra",
  },
  en: {
    title: "Invest Safely in Portugal",
    subtitle: "We Take Care of Everything for You",
    description: "Real estate services specialized in helping foreigners rent and buy property in Portugal, with complete support at every stage.",
    cta1: "Discover Opportunities",
    cta2: "Talk to Alexandra",
  },
  it: {
    title: "Investi in Sicurezza in Portogallo",
    subtitle: "Ci Prendiamo Cura di Tutto per Te",
    description: "Servizi immobiliari specializzati nell'assistenza agli stranieri che desiderano affittare e acquistare proprietà in Portogallo, con supporto completo in ogni fase.",
    cta1: "Scopri le Opportunità",
    cta2: "Parla con Roberto",
  },
};

export const Hero = ({ language }: HeroProps) => {
  const t = content[language];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Portuguese Villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 font-semibold mb-4">
            {t.subtitle}
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#how-it-works")}
              className="text-lg"
            >
              {t.cta1}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="text-lg bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            >
              {t.cta2}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
