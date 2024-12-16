import { NavLink } from "react-router-dom";
import style from "./homePage.module.css";
import { useTranslation } from "../../contexts/LangContext";
import Header from "../../components/header/Header";
import ConnexionLink from "../../components/connexionLink/ConnexionLink";
import SkillsPage from "../skillsPage/SkillsPage";
import logo from "../../assets/images/logo.jpg";

import { motion } from "framer-motion";
import { FadeAnimation } from "../../components/scrollAnimation/ScrollAnimation";

export default function HomePage() {
	const { translations } = useTranslation();

	return (
		<>
			<section className={style.background}>
				<h2 className={style.h2}>HOME</h2>

				<motion.div
					className={style.navigation}
					initial={{ opacity: 0 }}
					transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
					animate={{ opacity: 1 }}
				>
					<Header />

					<article className={style.main}>
						<NavLink className={style.link1} to={"/project"}>
							{translations.homePage.project}
						</NavLink>
						<NavLink className={style.link2} to={"/about"}>
							{translations.homePage.about}
						</NavLink>
						<a className={style.link3} href="#skills">
							{translations.homePage.skills}
						</a>
						<NavLink className={style.link4} to={"/contact"}>
							{translations.homePage.contact}
						</NavLink>
					</article>
					<ConnexionLink />
				</motion.div>
				<FadeAnimation>
					<article className={style.presentationArticle}>
						<img className={style.logo} src={logo} alt="lefever jp" />

						<h2 className={style.presentationTitle}>
							{translations.homePage.presentationTitle}
						</h2>
						<p className={style.presentation}>
							{translations.homePage.presentation1}
						</p>

						<p className={style.presentation1}>
							{translations.homePage.presentation2}
						</p>
					</article>
				</FadeAnimation>
			</section>

			<section className={style.skills}>
				<SkillsPage />
			</section>
		</>
	);
}
