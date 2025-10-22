import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingDown, Home } from "lucide-react";
import rehabilitationImage from "@/assets/rehabilitation.jpg";

interface RehabilitationProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    title: "Reabilitação Urbana",
    subtitle: "Invista em áreas de valorização",
    intro: "As Áreas de Reabilitação Urbana (ARU) oferecem excelentes oportunidades de investimento com benefícios fiscais significativos.",
    benefits: "Benefícios Fiscais",
    benefit1: "Redução de IMT",
    benefit1Text: "Isenção ou redução do Imposto Municipal sobre Transmissões",
    benefit2: "Redução de IMI",
    benefit2Text: "Isenção de IMI por até 5 anos após reabilitação",
    benefit3: "Redução de IRS",
    benefit3Text: "Benefícios fiscais nos rendimentos de arrendamento",
    cta: "Descubra Imóveis em ARU",
  },
  en: {
    title: "Urban Rehabilitation",
    subtitle: "Invest in appreciation areas",
    intro: "Urban Rehabilitation Areas (ARU) offer excellent investment opportunities with significant tax benefits.",
    benefits: "Tax Benefits",
    benefit1: "IMT Reduction",
    benefit1Text: "Exemption or reduction of Municipal Property Transfer Tax",
    benefit2: "IMI Reduction",
    benefit2Text: "IMI exemption for up to 5 years after rehabilitation",
    benefit3: "IRS Reduction",
    benefit3Text: "Tax benefits on rental income",
    cta: "Discover ARU Properties",
  },
};

export const Rehabilitation = ({ language }: RehabilitationProps) => {
  const t = content[language];

  const benefits = [
    { icon: TrendingDown, title: t.benefit1, description: t.benefit1Text },
    { icon: Home, title: t.benefit2, description: t.benefit2Text },
    { icon: Building2, title: t.benefit3, description: t.benefit3Text },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="rehabilitation" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">{t.subtitle}</p>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            {t.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-slide-in order-2 md:order-1">
            <img
              src={rehabilitationImage}
              alt="Urban Rehabilitation"
              className="w-full h-auto rounded-lg shadow-elegant"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-primary mb-8">{t.benefits}</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <benefit.icon className="w-10 h-10 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <Button variant="premium" size="lg" onClick={scrollToContact}>
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};
