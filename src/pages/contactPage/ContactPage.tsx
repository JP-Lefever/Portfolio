import ConnexionLink from "../../components/connexionLink/ConnexionLink";
import style from "./contactPage.module.css";
import cvJp from "../../assets/images/CV Jean-Philippe LEFEVER Développeur.pdf";
import fleche from "../../assets/images/fleche-vers-le-haut.png";

export default function ContactPage() {
	return (
		<>
			<section className={style.contactPage}>
				<h2 className={style.h2}>CONTACT</h2>
				<div className={style.contact}>
					<a
						className={style.anchor}
						target="_blank"
						rel="noreferrer "
						href={cvJp}
					>
						<h3 className={style.h3}>Lefever.jp@hotmail.fr</h3>
					</a>
					<div className={style.fleche}>
						<img className={style.imgFleche} src={fleche} alt="CV" />
					</div>
					<div className={style.link}>
						<ConnexionLink />
					</div>
				</div>
			</section>
		</>
	);
}
