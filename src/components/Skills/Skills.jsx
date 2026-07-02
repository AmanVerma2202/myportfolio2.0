import React from 'react'
import "./Skills.css"
import {skill} from "../../Data/Data"

const Skills = () => {

  return (
    <div id="skills" className="cards-container">
      <h1>
        Skills I <span style={{ color: "var(--page-accent)" }}>Use</span>
      </h1>
      <p className="skills-intro">Full-stack engineering, AI/ML tooling, and deployment skills I use to ship reliable products and automation workflows.</p>
      <div className="skills-grid">
        {skill.map((card, index) => (
          <div className="cardd" key={index}>
            <img src={card.img} className="img" alt={card.nameImg} loading="lazy" />
            <div className="textBox">
              <p className="text head">{card.nameImg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Skills
