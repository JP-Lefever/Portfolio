import style from "./theme.module.css";
import { useTranslation } from "../../contexts/LangContext";
import french from "../../assets/images/french_flag.png";
import english from "../../assets/images/united-kingdom-flag-button-round-icon-256.png";

export default function Theme() {
	const { language, toggleLanguage } = useTranslation();
	return (
		<button className={style.button} type="button" onClick={toggleLanguage}>
			{language === "fr" ? (
				<img className={style.french} src={french} alt="frenche" />
			) : (
				<img className={style.english} src={english} alt="frenche" />
			)}
		</button>
	);
}
