import React from "react";

const Recipe = ({ image, text, classname }) => {
  return (
    <div className={classname}>
      <div className="img-ctnr">
        <img src={image} alt="recipe-picture" />
      </div>
      <div className="text-ctnr">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Recipe;
