import { NavLink } from "react-router-dom";
import style from "./homePage.module.css";
import { useTranslation } from "../../contexts/LangContext";
import Header from "../../components/header/Header";
import ConnexionLink from "../../components/connexionLink/ConnexionLink";
import SkillsPage from "../skillsPage/SkillsPage";
import logo from "../../assets/images/logo.jpg";
import fleche from "../../assets/images/fleche_bas.png";
import { motion, useInView } from "framer-motion";
import { FadeAnimation } from "../../components/scrollAnimation/ScrollAnimation";
import { useRef } from "react";

export default function HomePage() {
	const { translations } = useTranslation();
	const ref = useRef(null);
	const isInview = useInView(ref, { once: true });

	return (
		<>
			<section className={style.background}>
				<h2 className={style.h2}>HOME</h2>

				<motion.article
					className={style.navigation}
					ref={ref}
					initial={{ opacity: 0 }}
					transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
					animate={isInview ? { opacity: 1 } : { opacity: 0 }}
				>
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
				</motion.article>
				<FadeAnimation>
					<article className={style.presentationArticle}>
						<img className={style.logo} src={logo} alt="lefever jp" />

						<h2 className={style.presentationTitle}>
							Bienvenu sur mon portefolio
						</h2>
						<p className={style.presentation}>
							Je suis développeur web full stack, développant les technologies
							front-end comme ReactJS, HTML, CSS et back-end avec express et SQL
						</p>
						<p className={style.presentation1}>
							N'hésitez pas à explorer mes projets et à me contacter pour
							discuter de vos idées ou collaborations
						</p>
					</article>
				</FadeAnimation>
			</section>
			<a className={style.linkSkills} href="#skills">
				<img className={style.fleche} src={fleche} alt="fleche" />
			</a>
			<section className={style.skills}>
				<h2 className={style.skillsH2} id="skills">
					Skills
				</h2>

				<SkillsPage />
			</section>
		</>
	);
}
