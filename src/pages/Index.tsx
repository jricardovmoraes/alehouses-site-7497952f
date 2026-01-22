import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Documentation } from "@/components/Documentation";
import { Financing } from "@/components/Financing";
import { Rehabilitation } from "@/components/Rehabilitation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'pt' | 'en' | 'it'>('pt');

  const setLang = (lang: 'pt' | 'en' | 'it') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLang} />
      <Hero language={language} />
      <About language={language} />
      <HowItWorks language={language} />
      <Documentation language={language} />
      <Financing language={language} />
      <Rehabilitation language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
