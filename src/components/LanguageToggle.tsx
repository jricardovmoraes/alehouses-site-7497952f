import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: 'pt' | 'en' | 'it';
  onLanguageChange: (lang: 'pt' | 'en' | 'it') => void;
}

const languages = [
  { code: 'pt' as const, label: 'Português', flag: '🇵🇹' },
  { code: 'en' as const, label: 'English', flag: '🇬🇧' },
  { code: 'it' as const, label: 'Italiano', flag: '🇮🇹' },
];

export const LanguageToggle = ({ language, onLanguageChange }: LanguageToggleProps) => {
  const currentLang = languages.find(l => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="font-medium">{currentLang?.flag} {language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className={language === lang.code ? "bg-accent/10" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
