import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { SiIfood } from "react-icons/si";
import { useState, useRef } from "react";

import Logo from "../images/Happytite-logo.png";

const Nav = () => {
  const navRef = useRef();
  const handleClick = () => {
    navRef.current.classList.toggle("show");
  };
  const [navState, setNavState] = useState(false);

  console.log(navState);

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
        <ul ref={navRef}>
          <IoClose className="nav-btn nav-close" onClick={handleClick} />
          <li>
            <NavLink to="/" onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleClick}>
              About Us
            </NavLink>
          </li>

          <li className="recipes">
            <NavLink to="/recipes" onClick={handleClick}>
              Recipes
            </NavLink>
            <RiArrowDropDownLine className="drop-down-icon" />
            <ul className="sub-menu">
              <li>
                <NavLink to="/tips" onClick={handleClick}>
                  Healthy Tips
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/contact" onClick={handleClick}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" onClick={handleClick}>
              Testimonials
            </NavLink>
          </li>
        </ul>
        <BiMenu className="nav-btn nav-open" onClick={handleClick} />
      </nav>
    </div>
  );
};

export default Nav;
