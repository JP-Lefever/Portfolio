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
		about: string;
		project: string;
		skills: string;
		contact: string;
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
	};
};
