import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'id' as Language, name: 'Bahasa Indonesia', shortName: 'ID' },
    { code: 'en' as Language, name: 'English', shortName: 'EN' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2" data-testid="button-language-switcher">
          <Globe className="h-4 w-4" />
          <span className="font-medium">{currentLanguage?.shortName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`gap-2 ${language === lang.code ? 'bg-accent' : ''}`}
            data-testid={`language-option-${lang.code}`}
          >
            {language === lang.code && <Check className="h-4 w-4" />}
            {language !== lang.code && <div className="w-4" />}
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}