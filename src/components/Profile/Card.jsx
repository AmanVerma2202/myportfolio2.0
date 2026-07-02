import React from "react";
import "./Card.css";

const Card = ({ className, imageSrc }) => {
  return (
    <div className={`card ${className}`}>
      <img src={imageSrc} alt="Card content" className="cardImage" />
    </div>
  );
};

export default Card;
