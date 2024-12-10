import style from "./skillsPage.module.css";
import skills from "../../data/skills.json";
import { motion } from "framer-motion";

export default function SkillsPage() {
	return (
		<>
			<section className={style.skillsSection}>
				<h2 className={style.h2}>SKILLS</h2>
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
		</>
	);
}
