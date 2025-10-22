import { Card } from "@/components/ui/card";
import { Wallet, Shield, Calculator } from "lucide-react";

interface FinancingProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    title: "Financiamento e Seguros",
    subtitle: "Soluções completas para seu investimento",
    financing: "Financiamento para Estrangeiros",
    financingText: "Oferecemos suporte completo no processo de financiamento imobiliário, com opções personalizadas para investidores estrangeiros. Entrada típica de 20-30% do valor do imóvel, com prazos flexíveis e taxas competitivas.",
    insurance: "Seguros Obrigatórios",
    insuranceText: "Assessoria completa para todos os seguros necessários: seguro de vida, multirriscos habitação e seguro de crédito. Garantimos as melhores condições do mercado.",
    simulation: "Simulação Financeira",
    simulationText: "Realizamos simulações detalhadas para ajudá-lo a entender os custos envolvidos e planejar seu investimento com segurança e transparência.",
  },
  en: {
    title: "Financing and Insurance",
    subtitle: "Complete solutions for your investment",
    financing: "Financing for Foreigners",
    financingText: "We offer complete support in the real estate financing process, with customized options for foreign investors. Typical down payment of 20-30% of the property value, with flexible terms and competitive rates.",
    insurance: "Required Insurance",
    insuranceText: "Complete advisory for all necessary insurance: life insurance, home insurance and credit insurance. We guarantee the best market conditions.",
    simulation: "Financial Simulation",
    simulationText: "We perform detailed simulations to help you understand the costs involved and plan your investment with security and transparency.",
  },
};

export const Financing = ({ language }: FinancingProps) => {
  const t = content[language];

  const features = [
    { icon: Wallet, title: t.financing, description: t.financingText },
    { icon: Shield, title: t.insurance, description: t.insuranceText },
    { icon: Calculator, title: t.simulation, description: t.simulationText },
  ];

  return (
    <section id="financing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
