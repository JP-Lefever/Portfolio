import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ProjectPage from "./pages/projectPage/ProjectPage";
import SkillsPage from "./pages/skillsPage/SkillsPage";
import ContactPage from "./pages/contactPage/ContactPage";

export const mainRouter = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			},
			{
				path: "/project",
				element: <ProjectPage />,
			},
			{
				path: "/skills",
				element: <SkillsPage />,
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
		],
	},
]);
