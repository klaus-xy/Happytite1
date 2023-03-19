import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SiIfood } from "react-icons/si";

import Logo from "../images/Happytite-logo.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <h1>
          {" "}
          <NavLink to="/">
            <img src={Logo} alt="happytite logo" className="logo" />
            Happytite
          </NavLink>
        </h1>
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
      </nav>
    </div>
  );
};

export default Nav;
