import { Card } from "@/components/ui/card";
import { Search, FileText, DollarSign, Home, Wrench, CheckCircle } from "lucide-react";

interface HowItWorksProps {
  language: 'pt' | 'en' | 'it';
}

const content = {
  pt: {
    title: "Como Funciona",
    subtitle: "A Jornada do Cliente",
    step1: "Consulta e Análise de Perfil",
    step1Text: "Entendemos suas necessidades e objetivos de investimento",
    step2: "Seleção de Imóveis",
    step2Text: "Apresentamos imóveis em lançamento, novos e em reabilitação",
    step3: "Verificação Documental",
    step3Text: "Suporte jurídico completo e verificação de toda documentação",
    step4: "Apoio ao Crédito",
    step4Text: "Assistência em financiamento imobiliário e seguros",
    step5: "Escritura e Registro",
    step5Text: "Acompanhamento completo do processo de escritura",
    step6: "Pós-Compra",
    step6Text: "Serviços de remodelação e gestão patrimonial (opcional)",
  },
  en: {
    title: "How It Works",
    subtitle: "The Client Journey",
    step1: "Consultation & Profile Analysis",
    step1Text: "We understand your needs and investment goals",
    step2: "Property Selection",
    step2Text: "We present new launches, new properties and rehabilitated buildings",
    step3: "Document Verification",
    step3Text: "Complete legal support and verification of all documentation",
    step4: "Credit Support",
    step4Text: "Assistance with real estate financing and insurance",
    step5: "Deed & Registration",
    step5Text: "Complete support throughout the deed process",
    step6: "Post-Purchase",
    step6Text: "Renovation and property management services (optional)",
  },
  it: {
    title: "Come Funziona",
    subtitle: "Il Percorso del Cliente",
    step1: "Consulenza e Analisi del Profilo",
    step1Text: "Comprendiamo le tue esigenze e obiettivi di investimento",
    step2: "Selezione Immobili",
    step2Text: "Presentiamo nuovi lanci, immobili nuovi e edifici riqualificati",
    step3: "Verifica Documentale",
    step3Text: "Supporto legale completo e verifica di tutta la documentazione",
    step4: "Supporto al Credito",
    step4Text: "Assistenza con finanziamenti immobiliari e assicurazioni",
    step5: "Atto e Registrazione",
    step5Text: "Supporto completo durante il processo di rogito",
    step6: "Post-Acquisto",
    step6Text: "Servizi di ristrutturazione e gestione patrimoniale (opzionale)",
  },
};

export const HowItWorks = ({ language }: HowItWorksProps) => {
  const t = content[language];

  const steps = [
    { icon: Search, title: t.step1, description: t.step1Text, number: "01" },
    { icon: Home, title: t.step2, description: t.step2Text, number: "02" },
    { icon: FileText, title: t.step3, description: t.step3Text, number: "03" },
    { icon: DollarSign, title: t.step4, description: t.step4Text, number: "04" },
    { icon: CheckCircle, title: t.step5, description: t.step5Text, number: "05" },
    { icon: Wrench, title: t.step6, description: t.step6Text, number: "06" },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 relative overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-accent/10">
                {step.number}
              </div>
              <step.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
