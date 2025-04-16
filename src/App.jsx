import "./App.css";
import TOPBAR from "./composant/topbar";
import WaveBackground from "./composant/background";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <WaveBackground />
      <TOPBAR />
      <Contact />
    </>
  );
}

export default App;
