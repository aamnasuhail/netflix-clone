import React from "react";

const Card = ({ img, title }) => {
  return (
    <div className="img-box">
      <img src={img} alt="img" />
    </div>
  );
};

export default Card;
