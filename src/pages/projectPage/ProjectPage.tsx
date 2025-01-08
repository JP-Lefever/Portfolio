import style from "./projectPage.module.css";
import lenclos from "../../assets/images/Lenclos.png";
import unPeuMieu from "../../assets/video/un_peu_mieu.mp4";
import allStarGame from "../../assets/video/all_star_game.mp4";
import { useTranslation } from "../../contexts/LangContext";
import boarderline from "../../assets/video/Boarder_Line.mp4";
import carotaine from "../../assets/images/carotProject.png";
import eshop from "../../assets/images/eShop.png";
import todo from "../../assets/images/todo.png";
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
								<aside className={style.techs}>
									<p className={style.tech}>
										{translations.projectPage.tech[7]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[4]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[10]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[6]}
									</p>
								</aside>
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
								<aside className={style.techs}>
									<p className={style.tech}>
										{translations.projectPage.tech[7]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[4]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[10]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[6]}
									</p>
								</aside>
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
						<article className={style.eShop}>
							<div className={style.presentationShop}>
								<h2 className={style.h2Shop}>
									{translations.projectPage.titleShop}
								</h2>
								<p>{translations.projectPage.descShop}</p>
								<aside className={style.techs}>
									<p className={style.tech}>
										{translations.projectPage.tech[7]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[4]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[5]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[6]}
									</p>
								</aside>
							</div>
							<a
								className={style.anchor}
								target="_blank"
								rel="noreferrer"
								href="https://e-shop-client-eight.vercel.app"
							>
								<img
									className={style.imgShop}
									src={eshop}
									alt="Eshop website"
								/>
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
								<aside className={style.techs}>
									<p className={style.tech}>
										{translations.projectPage.tech[7]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[4]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[10]}
									</p>
								</aside>
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
						<article className={style.todo}>
							<div className={style.presentationTodo}>
								<h2 className={style.h2Todo}>
									{translations.projectPage.titleTodo}
								</h2>
								<p>{translations.projectPage.descTodo}</p>

								<aside className={style.techs}>
									<p className={style.tech}>
										{translations.projectPage.tech[0]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[1]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[2]}
									</p>
								</aside>
							</div>
							<a
								className={style.anchor}
								target="_blank"
								rel="noreferrer"
								href="https://jp-lefever.github.io/todo/"
							>
								<img className={style.imgShop} src={todo} alt="Eshop website" />
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
								<aside className={style.techs}>
									<p className={style.tech}>
										{translations.projectPage.tech[0]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[1]}
									</p>
								</aside>
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
								<aside className={style.techs}>
									<p className={style.tech}>
										{translations.projectPage.tech[0]}
									</p>
									<p className={style.tech}>
										{translations.projectPage.tech[1]}
									</p>
								</aside>
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
