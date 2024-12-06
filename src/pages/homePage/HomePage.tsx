import { NavLink } from "react-router-dom";
import style from "./homePage.module.css";
import { useTranslation } from "../../contexts/LangContext";
import Header from "../../components/header/Header";
import ConnexionLink from "../../components/connexionLink/ConnexionLink";

export default function HomePage() {
	const { translations } = useTranslation();
	return (
		<>
			<div className={style.background}>
				<Header />

				<main className={style.main}>
					<NavLink className={style.link1} to={"/project"}>
						{translations.homePage.project}
					</NavLink>
					<NavLink className={style.link2} to={"/about"}>
						{translations.homePage.about}
					</NavLink>
					<NavLink className={style.link3} to={"/skills"}>
						{translations.homePage.skills}
					</NavLink>
					<NavLink className={style.link4} to={"/contact"}>
						{translations.homePage.contact}
					</NavLink>
				</main>

				<ConnexionLink />
			</div>
		</>
	);
}
