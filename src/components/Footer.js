import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Logo from "../images/Happytite-logo.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";

const Footer = () => {
  return (
    <footer>
      <div className="left-ctnr">
        <div className="footer-item">
          <div>
            <img src={Logo} alt="happytite-logo" className="footer-logo" />
            <p>Happytite.</p>
          </div>
        </div>
      </div>
      <div className="center-ctnr">
        <BsFacebook className="logo-icon hoverable" />
        <BsInstagram className="logo-icon hoverable" />
        <BsTwitter className="logo-icon hoverable" />

        <img
          src={Facebook}
          alt="facebook-logo"
          className="logo-text hoverable"
        />
        <img
          src={Instagram}
          alt="instagram-logo"
          className="logo-text hoverable"
        />
        <img src={Twitter} alt="twitter-logo" className="logo-text hoverable" />
      </div>
      <div className="right-ctnr">
        <p>©️ Copyright 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
