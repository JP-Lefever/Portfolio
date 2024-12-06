import { createContext, useContext, useState, type ReactNode } from "react";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import type { LanguageType, TranslationType } from "../lib/definition";

const translations: { en: TranslationType; fr: TranslationType } = { en, fr };

const LangContext = createContext<LanguageType>({
	language: "fr",
	toggleLanguage: () => undefined,

	translations: translations.fr,
});

export function LangProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<"en" | "fr">("en");
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
