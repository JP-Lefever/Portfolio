import style from "./projectPage.module.css";
import lenclos from "../../assets/images/Lenclos.png";
import unPeuMieu from "../../assets/video/un_peu_mieu.mp4";
import allStarGame from "../../assets/video/all_star_game.mp4";
import { useTranslation } from "../../contexts/LangContext";
import boarderline from "../../assets/video/Boarder_Line.mp4";
import carotaine from "../../assets/images/Carotaine.png";
import { ScrollAnimation } from "../../components/scrollAnimation/ScrollAnimation";

export default function ProjectPage() {
	const { translations } = useTranslation();
	return (
		<>
			<div className={style.projectPage}>
				<h2 className={style.h2}>PROJECT</h2>
				<section className={style.project}>
					<h2 className={style.h2Project}>
						{translations.projectPage.mes_projets}
					</h2>
					<ScrollAnimation>
						<article className={style.carotaine}>
							<div className={style.presentationCarotaine}>
								<h2 className={style.titleCarotaine}>
									{translations.projectPage.titleCarotaine}
								</h2>
								<p>{translations.projectPage.descCarotaine}</p>
							</div>
							<a
								className={style.anchor}
								target="_blank"
								rel="noreferrer"
								href="https://carotaine.vercel.app"
							>
								<div className={style.hover}>
									<img
										className={style.imgCarotaine}
										src={carotaine}
										alt="Site web Carotaine"
									/>
								</div>
							</a>
						</article>
					</ScrollAnimation>
					<ScrollAnimation>
						<article className={style.boarder}>
							<div className={style.presentationBoarder}>
								<h2 className={style.h2Boarder}>
									{translations.projectPage.titleBoarder}
								</h2>
								<p>{translations.projectPage.descBoarder}</p>
							</div>
							<a
								className={style.anchor}
								target="_blank"
								rel="noreferrer"
								href="https://border-line-client.vercel.app"
							>
								<video className={style.boarderVids} autoPlay muted loop>
									<source src={boarderline} type="video/mp4" />
								</video>
							</a>
						</article>
					</ScrollAnimation>
					<ScrollAnimation>
						<article className={style.allStar}>
							<div className={style.presentationAllStar}>
								<h2 className={style.h2AllStar}>
									{translations.projectPage.titleAllStar}
								</h2>
								<p>{translations.projectPage.descAllStar}</p>
							</div>
							<a
								className={style.anchor}
								target="_blank"
								rel="noreferrer"
								href="https://game-challenge-omega.vercel.app/"
							>
								<video className={style.allStarVids} autoPlay muted loop>
									<source src={allStarGame} type="video/mp4" />
								</video>
							</a>
						</article>
					</ScrollAnimation>
					<ScrollAnimation>
						<article className={style.unPeuMieu}>
							<div className={style.presentationMieu}>
								<h2 className={style.h2Mieu}>
									{translations.projectPage.titleMieux}
								</h2>
								<p>{translations.projectPage.descMieux}</p>
							</div>
							<a
								className={style.anchor}
								target="_blank"
								rel="noreferrer"
								href="https://jp-lefever.github.io/Meilleur-chaque-jour/"
							>
								<video className={style.videoMieu} autoPlay muted loop>
									<source src={unPeuMieu} type="video/mp4" />
								</video>
							</a>
						</article>
					</ScrollAnimation>
					<ScrollAnimation>
						<article className={style.lenclos}>
							<div className={style.presentationEnclos}>
								<h2 className={style.h2Lenclos}>
									{translations.projectPage.titleEnclos}
								</h2>
								<p>{translations.projectPage.descEnclos}</p>
							</div>

							<div>
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
								</a>
							</div>
						</article>
					</ScrollAnimation>
				</section>
			</div>
		</>
	);
}
