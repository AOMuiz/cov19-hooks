import { Link } from "react-router-dom";
import "./Navbar.css";
import themeSwitch from "../assets/image/light_mode_black_24dp 1.png";
import logo from "../assets/image/LogoDesignDark.jpg";
import githubIcon from "../assets/image/iconmonstr-github-1 1.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <div className="links">
        <Link to="/about" className="about">
          About
        </Link>
        <Link to="/github">
          <img src={githubIcon} alt="" />
        </Link>
        <Link to="/switch">
          <img src={themeSwitch} alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
