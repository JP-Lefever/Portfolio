import { NavLink } from "react-router-dom";
import style from "./homePage.module.css";
import { useTranslation } from "../../contexts/LangContext";
import Header from "../../components/header/Header";
import ConnexionLink from "../../components/connexionLink/ConnexionLink";
import SkillsPage from "../skillsPage/SkillsPage";
import logo from "../../assets/images/logo.jpg";

export default function HomePage() {
	const { translations } = useTranslation();
	return (
		<>
			<section className={style.background}>
				<h2 className={style.h2}>HOME</h2>
				<article className={style.navigation}>
					<Header />
					<article className={style.main}>
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
					</article>
					<ConnexionLink />
				</article>
				<article className={style.presentationArticle}>
					<img className={style.logo} src={logo} alt="lefever jp" />
					<h2 className={style.presentationTitle}>
						Bienvenu sur mon portefolio
					</h2>
					<p className={style.presentation}>
						Je suis développeur web full stack, grace à mes connaissances dans
						les technologies front-end comme ReactJS, HTML, CSS et back-end avec
						express et SQL, je suis capable de proposer des solutions complètes
						de la conception au déploiement.
					</p>
					<p className={style.presentation}>
						N'hésitez pas à explorer mes projets et à me contacter pour discuter
						de vos idées ou collaborations
					</p>
				</article>
			</section>
			<section className={style.skills}>
				<SkillsPage />
			</section>
		</>
	);
}
