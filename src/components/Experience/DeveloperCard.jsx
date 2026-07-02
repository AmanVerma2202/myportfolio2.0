import React from "react";
import "./Experience.css"

const DeveloperCard = ({ role, company, type, period, focus, description, highlights = [], imageUrl }) => {
  return (
    <div className="developer-card">
      <div 
        className="developer-card-img" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="developer-card-textBox">
        <div className="developer-card-textContent">
          <div>
            <p className="developer-card-eyebrow">{type}</p>
            <h2 className="developer-card-title">{role}</h2>
            <p className="developer-card-company">{company} <span>{period}</span></p>
          </div>
        </div>
        <p className="developer-card-focus">{focus}</p>
        <p className="developer-card-description">{description}</p>
        <div className="developer-card-tags">
          {highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
