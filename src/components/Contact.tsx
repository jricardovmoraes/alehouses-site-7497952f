import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactProps {
  language: 'pt' | 'en' | 'it';
}

const content = {
  pt: {
    title: "Entre em Contacto",
    subtitle: "Estamos prontos para ajudar você",
    name: "Nome",
    email: "Email",
    phone: "Telefone",
    message: "Mensagem",
    send: "Enviar Mensagem",
    success: "Mensagem enviada com sucesso!",
    error: "Erro ao enviar mensagem. Tente novamente.",
    contactInfo: "Informações de Contacto",
    emailLabel: "Email",
    phoneLabel: "Telefone",
    locationLabel: "Localização",
  },
  en: {
    title: "Get in Touch",
    subtitle: "We're ready to help you",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    send: "Send Message",
    success: "Message sent successfully!",
    error: "Error sending message. Please try again.",
    contactInfo: "Contact Information",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
  },
  it: {
    title: "Contattaci",
    subtitle: "Siamo pronti ad aiutarti",
    name: "Nome",
    email: "Email",
    phone: "Telefono",
    message: "Messaggio",
    send: "Invia Messaggio",
    success: "Messaggio inviato con successo!",
    error: "Errore nell'invio del messaggio. Riprova.",
    contactInfo: "Informazioni di Contatto",
    emailLabel: "Email",
    phoneLabel: "Telefono",
    locationLabel: "Posizione",
  },
};

export const Contact = ({ language }: ContactProps) => {
  const t = content[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast.success(t.success);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactEmail = language === 'it' 
    ? "roberto.casi@alehouse.pt" 
    : "ale@alehouses.pt";

  const contactPhone = language === 'it' 
    ? "+39 335 813 9010" 
    : "+351 914 986 508";

  const locationAddress = language === 'it' 
    ? "Località Chiassa Superiore, 240, 52100 Arezzo AR, Itália" 
    : "Coimbra, Portugal";

  const instagramHandle = language === 'it' 
    ? "houses.portugal" 
    : language === 'pt'
    ? "alehousescurdoriaimobiliaria"
    : "alehouses";

  const contactMethods = [
    { icon: Mail, label: t.emailLabel, value: contactEmail },
    { icon: Phone, label: t.phoneLabel, value: contactPhone },
    { icon: MapPin, label: t.locationLabel, value: locationAddress },
    { icon: Instagram, label: "Instagram", value: `@${instagramHandle}` },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 animate-slide-in shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">{t.name}</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">{t.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone">{t.phone}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">{t.message}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="mt-2"
                />
              </div>
              <Button type="submit" variant="premium" size="lg" className="w-full">
                {t.send}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t.contactInfo}
            </h3>
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <method.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="text-lg font-semibold text-foreground">
                      {method.value}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
