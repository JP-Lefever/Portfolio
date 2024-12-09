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
			<div className={style.projectPage}>
				<h2 className={style.h2}>PROJECT</h2>
				<section className={style.project}>
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
							href="https://boarder-line-project-client.vercel.app/"
						>
							<video className={style.boarderVids} autoPlay muted loop>
								<source src={boarderline} type="video/mp4" />
							</video>
						</a>
					</article>
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
							href="https://carotaine-itbc5rczf-lefever-jean-philippes-projects.vercel.app/"
						>
							<img
								className={style.imgCarotaine}
								src={carotaine}
								alt="Site web Carotaine"
							/>
						</a>
					</article>
				</section>
			</div>
		</>
	);
}
