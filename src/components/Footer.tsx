interface FooterProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    rights: "Todos os direitos reservados.",
    tagline: "Intermediação Imobiliária Especializada",
  },
  en: {
    rights: "All rights reserved.",
    tagline: "Specialized Real Estate Services",
  },
};

export const Footer = ({ language }: FooterProps) => {
  const t = content[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">
            Alehouses<span className="text-accent">.pt</span>
          </h3>
          <p className="text-primary-foreground/80 mb-6">{t.tagline}</p>
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Alehouses.pt. {t.rights} | 🛡️ Alexandra Betting Chaves – AMI 25049
          </p>
        </div>
      </div>
    </footer>
  );
};
