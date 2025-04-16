import "../styles/topbar.css";
import { Link } from "react-router-dom";
function TOPBAR() {
  return (
    <>
      <ul className="topbar-ul">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </>
  );
}

export default TOPBAR;
