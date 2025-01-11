import ConnexionLink from "../../components/connexionLink/ConnexionLink";
import style from "./contactPage.module.css";
import cvJp from "../../../public/CV Jean-Philippe LEFEVER Développeur.pdf";

import { useTranslation } from "../../contexts/LangContext";

export default function ContactPage() {
	const { translations } = useTranslation();
	return (
		<>
			<section className={style.contactPage}>
				<h2 className={style.h2}>CONTACT</h2>

				<div className={style.contact}>
					<h3 className={style.h3Name}>LEFEVER JEAN-PHILIPPE</h3>
					<h3 className={style.h3Info}>lefever.jp@hotmail.fr</h3>
					<h3 className={style.h3Info}>07.81.96.64.96</h3>
					<a
						className={style.anchor}
						target="_self"
						rel="noreferrer "
						href={cvJp}
						download={true}
					>
						<h3 className={style.h3}>{translations.contact.cv}</h3>
						<div className={style.link}>
							<ConnexionLink />
						</div>
					</a>
				</div>
			</section>
		</>
	);
}
