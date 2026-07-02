import React from "react";
import { workExperience } from "../../Data/Data";
import "./Experience.css"
import DeveloperCard from "./DeveloperCard";

const Experience = () => {
  return (

    <section className="exper" aria-labelledby="experience-title">
      <div className="experience-heading">
        <p>Career Timeline</p>
        <h1 id="experience-title">Experience built around <span>Infosys</span>.</h1>
      </div>
      <div className="exp" >
      
      {workExperience.map((card) => (

          <DeveloperCard 
          key={card.id} 
          role={card.role}
          company={card.company}
          type={card.type}
          period={card.period}
          focus={card.focus}
          description={card.desc} 
          highlights={card.highlights}
          imageUrl={card.thumbnail} 
        />


      ))}
    </div>
    </section>
    
  );
};

export default Experience;
