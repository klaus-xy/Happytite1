import Button from "./Button";
import Cta from "./Cta";
import About from "./About";
import Footer from "./Footer";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="left">
          <h2>
            Unlock your Healthy{" "}
            <span>
              {" "}
              <Typewriter
                loop={"0"}
                typeSpeed={"100"}
                delaySpeed={"1500"}
                words={["Nutrition.", "Diet."]}
              />
            </span>
          </h2>
          <p>
            Discover the best and proper way to get healthy nutrition
            information and meal plan accordingly.
          </p>

          <Button
            buttonName={"Get Started"}
            className={"btn"}
            navLink={"/about"}
          />
        </div>
        <div>{/* <img src={HealthyGreen2} alt="healthy dish" /> */}</div>
      </div>
      {/* <About /> */}
      <Footer />
    </div>
  );
};

export default Home;
