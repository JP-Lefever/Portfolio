import style from "./theme.module.css";
import { useTranslation } from "../../contexts/LangContext";

export default function Theme() {
	const { toggleLanguage, translations } = useTranslation();
	return (
		<button className={style.button} type="button" onClick={toggleLanguage}>
			{translations.navBar.language}
		</button>
	);
}
