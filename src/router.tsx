import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import HomePage from "./pages/homePage/HomePage";
import ProjectPage from "./pages/projectPage/ProjectPage";
import SkillsPage from "./pages/skillsPage/SkillsPage";

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
