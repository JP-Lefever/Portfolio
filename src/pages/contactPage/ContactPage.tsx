import ConnexionLink from "../../components/connexionLink/ConnexionLink";
import style from "./contactPage.module.css";
import cvJp from "../../../public/CV Jean-Philippe LEFEVER Développeur.pdf";
import fleche from "../../assets/images/fleche-vers-le-haut.png";
import { useTranslation } from "../../contexts/LangContext";

export default function ContactPage() {
	const { translations } = useTranslation();
	return (
		<>
			<section className={style.contactPage}>
				<h2 className={style.h2}>CONTACT</h2>
				<div className={style.contact}>
					<a
						className={style.anchor}
						target="_self"
						rel="noreferrer "
						href={cvJp}
						download={true}
					>
						<h3 className={style.h3}>{translations.contact.cv}</h3>
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
