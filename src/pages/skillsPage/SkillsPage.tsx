import style from "./skillsPage.module.css";
import skills from "../../data/skills.json";

export default function SkillsPage() {
	return (
		<>
			<section className={style.skillsSection}>
				<h2 className={style.h2}>SKILLS</h2>
				<ul className={style.skills}>
					{skills.map((s) => (
						<li key={s.id} className={style.list}>
							{s.name}
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
