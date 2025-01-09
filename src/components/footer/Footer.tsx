import style from "./footer.module.css";

export default function Footer() {
	return (
		<>
			<footer className={style.footer}>
				<div>
					<p>&copy; 2024</p>
					<p>Lefever Jean-Philippe | Tous Droits Réservés</p>
					<p>
						Image from{" "}
						<a
							className={style.link}
							target="_blank"
							rel="noreferrer"
							href="https://www.pngwing.com"
						>
							Png Wing
						</a>
					</p>
				</div>
			</footer>
		</>
	);
}
