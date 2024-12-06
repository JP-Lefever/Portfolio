export type LanguageType = {
	language: string;
	toggleLanguage: () => void;
	translations: Record<string, Record<string, string>>;
};
