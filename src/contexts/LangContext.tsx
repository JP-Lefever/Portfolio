import { createContext, useContext, useState, type ReactNode } from "react";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import type { LanguageType } from "../lib/definition";
const translations = { en, fr };

const LangContext = createContext<LanguageType>({
	language: "fr",
	toggleLanguage: () => undefined,
	translations: translations["en"],
});

export function LangProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<string>("en");
	const toggleLanguage = () => setLanguage(language === "fr" ? "en" : "fr");
	const value = {
		language,
		toggleLanguage,
		translations: translations[language],
	};

	return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useTranslation = (): LanguageType => {
	return useContext(LangContext);
};
