import NavBar from "./components/navbar/NavBar";
import "./index.css";

import { LangProvider } from "./contexts/LangContext";
import Theme from "./components/theme/Theme";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<LangProvider>
				<Theme />
				<NavBar />
				<main>
					<Outlet />
				</main>
				<Footer />
			</LangProvider>
		</>
	);
}

export default App;
