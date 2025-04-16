import "./App.css";
import TOPBAR from "./composant/topbar";
import WaveBackground from "./composant/background";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <WaveBackground />
      <TOPBAR />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
