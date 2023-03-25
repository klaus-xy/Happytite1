import Card from "./Card";
import Footer from "./Footer";
import ProfilePic1 from "../images/profile-pic1.jpg";
import ProfilePic2 from "../images/profile-pic2.jpg";
import ProfilePic3 from "../images/profile-pic3.jpg";
import ProfilePic4 from "../images/profile-pic4.jpg";
import ProfilePic5 from "../images/profile-pic5.jpg";
import ProfilePic6 from "../images/profile-pic6.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          //infinite: true,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: "unslick", // destroys slick
      },
    ],
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       backgroundColor: "gray",
    //       borderRadius: "10px",
    //       padding: "10px",
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i) => (
    //   <div
    //     style={{
    //       width: "24px",
    //       height: "24px",
    //       color: "green",
    //       backgroundColor: "green",
    //       //border: "1px blue solid",
    //     }}
    //   ></div>
    // ),
  };
  return (
    <div className="testimonial">
      <div className="test-ctnr">
        <Slider {...settings}>
          <Card
            name={"George Bayo"}
            age={"29"}
            content={
              "A friend introduced me to Happytite app 2 months ago and its been nothing short of amazing. I am sticking to this experience."
            }
            picture={ProfilePic1}
          />
          <Card
            name={"Elenore Rhodes"}
            age={"27"}
            content={
              "This App solves the problem of Avalanche of information in the internet space. It has helped curate good nutritional diet i quest for."
            }
            picture={ProfilePic2}
          />
          <Card
            name={"John Smith"}
            age={"25"}
            content={
              "A friend introduced me to Happytite app 2 months ago and its been nothing short of amazing. I am sticking to this experience."
            }
            picture={ProfilePic3}
          />
          <Card
            name={"Yusuf Amir"}
            age={"28"}
            content={
              "Happytite app has been a game-changer for me. It's so easy to use and has helped me stay on track with my goals. I highly recommend it to anyone who wants to improve their health and wellness"
            }
            picture={ProfilePic4}
          />
          <Card
            name={"Priyanka Shyla"}
            age={"28"}
            content={
              "I love this app! It's so user-friendly and has everything I need to track my daily meals and nutrient intake. The personalized recommendations and meal plans are also a great bonus. Highly recommended!"
            }
            picture={ProfilePic5}
          />
          <Card
            name={"Kelvin Goodman"}
            age={"18"}
            content={
              "As someone who's always struggled with their diet, Happytite app has been a great solution. It's helped me stay accountable and motivated to make healthier choices. I'm so grateful for this tool!"
            }
            picture={ProfilePic6}
          />
        </Slider>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
