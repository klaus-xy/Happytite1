import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SiIfood } from "react-icons/si";

import Logo from "../images/Happytite-logo.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="logo-ctnr">
          <NavLink to="/">
            <img src={Logo} alt="happytite logo" className="logo" />
          </NavLink>
          <h1>
            <NavLink to="/">Happytite</NavLink>
          </h1>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>

          <li className="recipes">
            <NavLink to="/recipes">Recipes</NavLink>
            <RiArrowDropDownLine className="drop-down-icon" />
            <ul className="sub-menu">
              <li>
                <NavLink to="/tips">Healthy Tips</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/testimonials">Testimonials</NavLink>
          </li>
        </ul>
        <BiMenu className="nav-btn" />
      </nav>
    </div>
  );
};

export default Nav;
