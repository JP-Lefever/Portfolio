import style from "./projectPage.module.css";
import lenclos from "../../assets/images/Lenclos.png";
import unPeuMieu from "../../assets/video/un_peu_mieu.mp4";
import allStarGame from "../../assets/video/all_star_game.mp4";
import { useTranslation } from "../../contexts/LangContext";
import boarderline from "../../assets/video/boarderline.mp4";
import carotaine from "../../assets/images/Carotaine.png";

export default function ProjectPage() {
	const { translations } = useTranslation();
	return (
		<>
			<div className={style.ProjectPage}>
				<h2 className={style.h2}>PROJECT</h2>
				<section className={style.project}>
					<article className={style.lenclos}>
						<a
							className={style.anchor}
							target="_blank"
							rel="noreferrer"
							href="https://jp-lefever.github.io/L-enclos_V1/l_histoire.html"
						>
							<img
								className={style.imgLenclos}
								src={lenclos}
								alt="Site web compagnie l'enclos"
							/>
							<div className={style.presentationEnclos}>
								<h2 className={style.titleEnclos}>
									{translations.projectPage.titleEnclos}
								</h2>
								<p>{translations.projectPage.descEnclos}</p>
							</div>
						</a>
					</article>
					<article className={style.unPeuMieu}>
						<a
							className={style.anchor}
							target="_blank"
							rel="noreferrer"
							href="https://jp-lefever.github.io/Meilleur-chaque-jour/"
						>
							<video className={style.videoMieu} autoPlay muted loop>
								<source src={unPeuMieu} type="video/mp4" />
							</video>
							<div className={style.presentationMieu}>
								<h2>{translations.projectPage.titleMieux}</h2>
								<p>{translations.projectPage.descMieux}</p>
							</div>
						</a>
					</article>
					<article className={style.allStar}>
						<a
							className={style.anchor}
							target="_blank"
							rel="noreferrer"
							href="https://game-challenge-omega.vercel.app/"
						>
							<video className={style.allStarVids} autoPlay muted loop>
								<source src={allStarGame} type="video/mp4" />
							</video>
							<div className={style.presentationAllStar}>
								<h2>{translations.projectPage.titleAllStar}</h2>
								<p>{translations.projectPage.descAllStar}</p>
							</div>
						</a>
					</article>
					<article className={style.boarder}>
						<a
							className={style.anchor}
							target="_blank"
							rel="noreferrer"
							href="https://boarder-line-project-client.vercel.app/"
						>
							<video className={style.boarderVids} autoPlay muted loop>
								<source src={boarderline} type="video/mp4" />
							</video>
							<div className={style.presentationBoarder}>
								<h2>{translations.projectPage.titleBoarder}</h2>
								<p>{translations.projectPage.descBoarder}</p>
							</div>
						</a>
					</article>
					<article className={style.Carotaine}>
						<a
							className={style.anchor}
							target="_blank"
							rel="noreferrer"
							href="https://carotaine-itbc5rczf-lefever-jean-philippes-projects.vercel.app/"
						>
							<img
								className={style.imgCarotaine}
								src={carotaine}
								alt="Site web Carotaine"
							/>
							<div className={style.presentationCarotaine}>
								<h2 className={style.titleCarotaine}>
									{translations.projectPage.titleCarotaine}
								</h2>
								<p>{translations.projectPage.descCarotaine}</p>
							</div>
						</a>
					</article>
				</section>
			</div>
		</>
	);
}
