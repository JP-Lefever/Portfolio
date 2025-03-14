export type LanguageType = {
	language: "en" | "fr";
	toggleLanguage: () => void;
	translations: TranslationType;
};

export type TranslationType = {
	navBar: {
		home: string;
		about: string;
		project: string;
		skills: string;
		contact: string;
		language: string;
	};
	header: {
		title: string;
	};
	homePage: {
		presentationTitle: string;
		presentation1: string;
		presentation2: string;
		about: string;
		project: string;
		skills: string;
		contact: string;
		mySkills: string;
	};
	aboutPage: {
		title: string;
		devTitle: string;
		dev: string;
		manaTitle: string;
		management: string;
		lectureTitle: string;
		bookOne: string;
		descriptionOne: string;
		bookTwo: string;
		descriptiontwo: string;
		bookThree: string;
		descriptionThree: string;
		playlistTitle: string;
		playlistOne: string;
		playlistTwo: string;
		playlistThree: string;
		playlistFour: string;
		playlistFive: string;
		hobbieTitle: string;
		sport: string;
		games: string;
		travel: string;
	};
	projectPage: {
		mes_projets: string;
		title: string;
		titleEnclos: string;
		descEnclos: string;
		titleMieux: string;
		descMieux: string;
		titleAllStar: string;
		descAllStar: string;
		titleBoarder: string;
		descBoarder: string;
		titleCarotaine: string;
		descCarotaine: string;
		titleShop: string;
		descShop: string;
		titleTodo: string;
		descTodo: string;
		titleGeocode: string;
		descGeocode: string;
		titleGlamping: string;
		descGlamping: string;
		tech: string[];
	};
	contact: {
		cv: string;
	};
};
