import twitter from "../../assets/images/twitter.png";
import style from "./connexion.module.css";
import linkedin from "../../assets/images/linkedin.png";
import git from "../../assets/images/GitHub-blc.png";

export default function ConnexionLink() {
	return (
		<>
			<section className={style.link}>
				<a target="_blank" rel="noreferrer" href="https://x.com/LefR_dev">
					<img className={style.twitter} src={twitter} alt="twitter" />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/jean-philippe-lefever/"
				>
					<img className={style.linkedin} src={linkedin} alt="linkedin" />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/JP-Lefever"
				>
					<img className={style.git} src={git} alt="git" />
				</a>
			</section>
		</>
	);
}
