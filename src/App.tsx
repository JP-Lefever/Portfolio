import NavBar from "./components/navbar/NavBar";
import "./index.css";

import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Theme from "./components/theme/Theme";
import { LangProvider } from "./contexts/LangContext";

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
