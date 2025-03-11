import { type ReactNode, createContext, useContext, useState } from "react";
import type { LanguageType, TranslationType } from "..//assets/lib/definition";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

const translations: { en: TranslationType; fr: TranslationType } = { en, fr };

const LangContext = createContext<LanguageType>({
  language: "fr",
  toggleLanguage: () => undefined,

  translations: translations.fr,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "fr">("fr");
  const toggleLanguage = () => setLanguage(language === "fr" ? "en" : "fr");

  const value: LanguageType = {
    language,
    toggleLanguage,
    translations: translations[language],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useTranslation = (): LanguageType => {
  return useContext(LangContext);
};
