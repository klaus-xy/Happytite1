import Card from "./Card";
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
    <div className="test-ctnr">
      <Slider {...settings}>
        <Card
          name={"George Bayo"}
          age={"23"}
          content={
            "A friend introduced me to Happytite app 2 months ago and its been nothing short of amazing. I am sticking to this experience."
          }
          picture={ProfilePic1}
        />
        <Card
          name={"Elenore Rhodes"}
          age={"29"}
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
            "A friend introduced me to Happytite app 2 months ago and its been nothing short of amazing. I am sticking to this experience."
          }
          picture={ProfilePic4}
        />
        <Card
          name={"Priyanka Shyla"}
          age={"28"}
          content={
            "This App solves the problem of Avalanche of information in the internet space. It has helped curate good nutritional diet i quest for."
          }
          picture={ProfilePic5}
        />
        <Card
          name={"Kelvin Goodman"}
          age={"18"}
          content={
            "A friend introduced me to Happytite app 2 months ago and its been nothing short of amazing. I am sticking to this experience."
          }
          picture={ProfilePic6}
        />
      </Slider>
    </div>
  );
};

export default Testimonials;
