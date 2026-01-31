import { Card } from "@/components/ui/card";
import { Shield, Users, TrendingUp, Award } from "lucide-react";
import alexandraImage from "@/assets/alexandra.jpg";
import robertoImage from "@/assets/roberto.jpg";

interface AboutProps {
  language: 'pt' | 'en' | 'it';
}

const content = {
  pt: {
    title: "Sobre a Alehouses",
    subtitle: "Experiência e Confiança",
    intro: "Apresentamos Alexandra Betting Chaves, profissional com mais de 30 anos de experiência comercial e 15 anos dedicados a startups e investimentos imobiliários.",
    mission: "Nossa Missão",
    missionText: "Conectar estrangeiros e investidores a imóveis de alto potencial em Portugal, com suporte integral em todas as etapas do processo.",
    values: "Nossos Valores",
    value1: "Confiança",
    value1Text: "Transparência total em cada transação",
    value2: "Ética",
    value2Text: "Compromisso com práticas éticas",
    value3: "Transparência",
    value3Text: "Comunicação clara e honesta",
    value4: "Excelência",
    value4Text: "Acompanhamento personalizado",
  },
  en: {
    title: "About Alehouses",
    subtitle: "Experience and Trust",
    intro: "Meet Alexandra Betting Chaves, a professional with over 30 years of commercial experience and 15 years dedicated to startups and real estate investments.",
    mission: "Our Mission",
    missionText: "To connect foreigners and investors to high-potential properties in Portugal, with comprehensive support at every stage of the process.",
    values: "Our Values",
    value1: "Trust",
    value1Text: "Complete transparency in every transaction",
    value2: "Ethics",
    value2Text: "Commitment to ethical practices",
    value3: "Transparency",
    value3Text: "Clear and honest communication",
    value4: "Excellence",
    value4Text: "Personalized support",
  },
  it: {
    title: "Chi Siamo",
    subtitle: "Esperienza e Fiducia",
    intro: "",
    mission: "La Nostra Missione",
    missionText: "Connettere stranieri e investitori a immobili ad alto potenziale in Portogallo, con supporto completo in ogni fase del processo.",
    values: "I Nostri Valori",
    value1: "Fiducia",
    value1Text: "Totale trasparenza in ogni transazione",
    value2: "Etica",
    value2Text: "Impegno per pratiche etiche",
    value3: "Trasparenza",
    value3Text: "Comunicazione chiara e onesta",
    value4: "Eccellenza",
    value4Text: "Supporto personalizzato",
  },
};

export const About = ({ language }: AboutProps) => {
  const t = content[language];
  const consultantImage = language === 'it' ? robertoImage : alexandraImage;
  const consultantName = language === 'it' ? 'Roberto' : 'Alexandra Betting Chaves';

  const values = [
    { icon: Shield, title: t.value1, description: t.value1Text },
    { icon: Users, title: t.value2, description: t.value2Text },
    { icon: TrendingUp, title: t.value3, description: t.value3Text },
    { icon: Award, title: t.value4, description: t.value4Text },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <img
              src={consultantImage}
              alt={consultantName}
              className="w-full h-auto rounded-lg shadow-elegant"
            />
            {language === 'it' && (
              <p className="mt-4 text-muted-foreground text-center italic">
                Roberto è un esperto di relazioni internazionali, con esperienza in Europa, Portogallo e altri mercati. Parla portoghese, inglese e italiano e fornisce supporto strutturato agli investitori.
              </p>
            )}
          </div>
          <div className="animate-fade-in">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              {t.intro}
            </p>
            <h3 className="text-2xl font-bold text-primary mb-4">{t.mission}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.missionText}
            </p>
          </div>
        </div>

        {language === 'en' && (
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in">
              <img
                src={robertoImage}
                alt="Roberto"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-primary mb-4">Roberto</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Roberto is an expert in international relations, with experience in Europe, Portugal, and other markets. He speaks Portuguese, English, and Italian and provides structured support to investors.
              </p>
            </div>
          </div>
        )}

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            {t.values}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
