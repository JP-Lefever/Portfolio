import { motion } from "framer-motion";
import skills from "../../assets/data/skills.json";
import ts from "../../assets/images/TS.png";
import css from "../../assets/images/css.png";
import express from "../../assets/images/expressjs.png";
import figma from "../../assets/images/figma.png";
import html from "../../assets/images/html.png";
import js from "../../assets/images/js.png";
import mysql from "../../assets/images/mysql.png";
import react from "../../assets/images/react.png";
import tailwind from "../../assets/images/tailwind.png";
import next from "../../assets/images/next.png";
import { useTranslation } from "../../contexts/LangContext";
import style from "./skillsPage.module.css";

export default function SkillsPage() {
	const { translations } = useTranslation();

	const tech = [
		html,
		css,
		js,
		react,
		ts,
		tailwind,
		express,
		mysql,
		figma,
		next,
	];
	const altTech = [
		"html",
		"css",
		"js",
		"react",
		"ts",
		"tailwind",
		"express",
		"mySql",
		"figmal",
		"Next",
	];
	return (
		<>
			<div className={style.skillsPage}>
				<h2 className={style.h2}>SKILLS</h2>
				<section className={style.skillsSection}>
					<h2 className={style.skillsH2} id="skills">
						{translations.homePage.mySkills}
					</h2>
					<ul className={style.skills}>
						{skills.map((s, i) => (
							<motion.li
								initial={{ opacity: 0 }}
								transition={{ duration: 0.7, delay: 0.3 }}
								whileInView={{ opacity: 1 }}
								key={s.id}
								className={style.list}
							>
								<div className={style.container}>
									<p className={style.text}>{s.name}</p>
									<img
										className={`${style.tech} ${style.hidden}`}
										src={tech[i]}
										alt={altTech[i]}
									/>
								</div>
							</motion.li>
						))}
					</ul>
				</section>
			</div>
		</>
	);
}
