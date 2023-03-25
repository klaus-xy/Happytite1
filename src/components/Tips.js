import Footer from "./Footer";
import HealthyTips from "../images/healthy-life-cropped.jpg";
import HealthyGreen4 from "../images/healthy-green4.jpg";

const Tips = () => {
  return (
    <div>
      <div className="tips">
        <div className="right">
          <h3 className="heading">Healthy Tips</h3>
          <ul>
            <li>
              <span>Limit processed foods and added sugars: </span>Processed
              foods and added sugars can be high in calories, unhealthy fats,
              and sodium, which can contribute to weight gain and chronic
              diseases. Try to limit these foods in your diet.
            </li>
            <li>
              <span>Focus on whole foods: </span>Whole foods such as fruits,
              vegetables, whole grains, and lean proteins are nutrient-dense and
              can help you feel full and satisfied.
            </li>
            <li>
              <span>Balance your plate: </span>Aim to fill half your plate with
              fruits and vegetables, one-quarter with lean protein, and
              one-quarter with whole grains.
            </li>
            <li>
              <span>Control portion sizes: </span>Pay attention to portion sizes
              and use smaller plates to help control how much you eat.
            </li>
          </ul>
        </div>
        <div className="left">
          <img src={HealthyTips} alt="healty-life pic" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tips;
