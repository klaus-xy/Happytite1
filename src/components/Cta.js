import React from "react";

const Cta = ({ content }) => {
  return (
    <div className="cta-btn">
      <a href="#about">{content}</a>
    </div>
  );
};

export default Cta;
