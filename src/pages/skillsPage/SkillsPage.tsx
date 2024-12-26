import style from "./skillsPage.module.css";
import skills from "../../assets/data/skills.json";
import { motion } from "framer-motion";
import { useTranslation } from "../../contexts/LangContext";

export default function SkillsPage() {
	const { translations } = useTranslation();
	return (
		<>
			<div className={style.skillsPage}>
				<h2 className={style.h2}>SKILLS</h2>
				<section className={style.skillsSection}>
					<h2 className={style.skillsH2} id="skills">
						{translations.homePage.mySkills}
					</h2>
					<ul className={style.skills}>
						{skills.map((s) => (
							<motion.li
								initial={{ opacity: 0 }}
								transition={{ duration: 0.7, delay: 0.3 }}
								whileInView={{ opacity: 1 }}
								key={s.id}
								className={style.list}
							>
								{s.name}
							</motion.li>
						))}
					</ul>
				</section>
			</div>
		</>
	);
}
