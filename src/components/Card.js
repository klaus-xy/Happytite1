import React from "react";

const Card = ({ className, name, age, content, picture }) => {
  return (
    <div className="card-ctnr">
      <div className="card-image">
        <img src={picture} alt="profile pictue" />
      </div>
      <div className="card-content">
        <p>
          {content}
          <span>
            {name} {age}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
