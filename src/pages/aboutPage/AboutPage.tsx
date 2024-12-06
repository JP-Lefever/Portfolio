import { useTranslation } from "../../contexts/LangContext";
import style from "./aboutPage.module.css";

export default function AboutPage() {
	const { translations } = useTranslation();

	return (
		<>
			<section className={style.aboutPage}>
				<h2 className={style.h2About}>ABOUT</h2>
				<article className={style.about}>
					<h2 className={style.h2}>{translations.aboutPage.title}</h2>
					<article className={style.catégory}>
						<h3 className={style.h3}>{translations.aboutPage.devTitle}</h3>
						<p className={style.text}>{translations.aboutPage.dev}</p>

						<h3 className={style.h3}>{translations.aboutPage.manaTitle}</h3>
						<p className={style.text}>{translations.aboutPage.management}</p>
					</article>
					<article className={style.catégory}>
						<h3 className={style.h3}>{translations.aboutPage.lectureTitle}</h3>
						<p className={style.h4}>{translations.aboutPage.bookOne}</p>

						<p className={style.h4}>{translations.aboutPage.bookTwo}</p>

						<p className={style.h4}>{translations.aboutPage.bookThree}</p>
					</article>
					<article className={style.catégory}>
						<h3 className={style.h3}>{translations.aboutPage.playlistTitle}</h3>
						<p className={style.h4}>{translations.aboutPage.playlistTwo}</p>
						<p className={style.h4}>{translations.aboutPage.playlistThree}</p>
						<p className={style.h4}>{translations.aboutPage.playlistOne}</p>
						<p className={style.h4}>{translations.aboutPage.playlistFour}</p>
						<p className={style.h4}>{translations.aboutPage.playlistFive}</p>
					</article>
					<article className={style.catégory}>
						<h3 className={style.h3}>{translations.aboutPage.hobbieTitle}</h3>
						<p className={style.h4}>{translations.aboutPage.sport}</p>
						<p className={style.h4}>{translations.aboutPage.games}</p>
						<p className={style.h4}>{translations.aboutPage.travel}</p>
					</article>
				</article>
			</section>
		</>
	);
}
