import HealthyGreen7 from "../images/healthy-green7.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsEnvelope } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-ctnr">
      <img src={HealthyGreen7} alt="healthy dish background" />
      <div className="contact-info-ctnr">
        <div className="contact-info">
          <h3 className="uppercase">contact us</h3>
          <HiOutlineLocationMarker className="icon" />
          <h4 className="uppercase address">
            231, bridgeview road, b344dg, bristol, birmingham
          </h4>
          <BsEnvelope className="icon" />
          <h4>nutrition@happytite.com </h4>
          <FaInstagram className="icon" />
          <h4>@happytite_nutrition </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
