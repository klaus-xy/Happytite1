import Button from "./Button";
import Footer from "./Footer";
import HealthyGreen4 from "../images/healthy-green4.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <img src={HealthyGreen4} alt="vegetables tossed in a bowl" />
      </div>

      <div className="right">
        <p>
          <span>Happytite</span> is a nutritional and meal planning app that
          helps people curate accurate information about healthy and balanced
          diet, essential for maintaining good health and preventing chronic
          diseases.we are poised to assist people with their meal plan and
          nutritional diet.
        </p>
        <Button
          buttonName={"Check Recipes"}
          className={"btn"}
          navLink={"/recipes"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
