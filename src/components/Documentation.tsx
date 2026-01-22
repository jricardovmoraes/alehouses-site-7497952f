import { Card } from "@/components/ui/card";
import { CheckCircle, Info } from "lucide-react";

interface DocumentationProps {
  language: 'pt' | 'en' | 'it';
}

const content = {
  pt: {
    title: "Documentação Necessária",
    subtitle: "O que você precisa para comprar um imóvel em Portugal",
    intro: "Informações claras e objetivas para estrangeiros:",
    note: "Parte da documentação pode ser obtida remotamente, com apoio direto da equipe Alehouses.",
    docs: [
      "Passaporte e NIF (Número de Identificação Fiscal)",
      "Comprovativo de rendimentos ou aposentadoria",
      "Extrato bancário recente",
      "Certidão de estado civil",
      "Comprovante de residência",
      "Declaração de origem dos fundos",
    ],
  },
  en: {
    title: "Required Documentation",
    subtitle: "What you need to buy property in Portugal",
    intro: "Clear and objective information for foreigners:",
    note: "Part of the documentation can be obtained remotely, with direct support from the Alehouses team.",
    docs: [
      "Passport and NIF (Tax Identification Number)",
      "Proof of income or retirement",
      "Recent bank statement",
      "Marriage certificate",
      "Proof of residence",
      "Declaration of source of funds",
    ],
  },
  it: {
    title: "Documentazione Necessaria",
    subtitle: "Cosa serve per acquistare un immobile in Portogallo",
    intro: "Informazioni chiare e oggettive per stranieri:",
    note: "Parte della documentazione può essere ottenuta da remoto, con supporto diretto del team Alehouses.",
    docs: [
      "Passaporto e NIF (Codice Fiscale)",
      "Prova di reddito o pensione",
      "Estratto conto bancario recente",
      "Certificato di stato civile",
      "Prova di residenza",
      "Dichiarazione di origine dei fondi",
    ],
  },
};

export const Documentation = ({ language }: DocumentationProps) => {
  const t = content[language];

  return (
    <section id="documentation" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">{t.subtitle}</p>
          <p className="text-lg text-foreground">{t.intro}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 shadow-elegant animate-fade-in">
            <ul className="space-y-4">
              {t.docs.map((doc, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 animate-slide-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{doc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{t.note}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
