import React from 'react'
import "./About.css"
import profile from "../../Image/ama.jpeg"
const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-image-container">
        <img
          className="about-image"
          src={profile}
          alt="Aman Verma — Software Engineer at Infosys"
          loading="lazy"
        />
      </div>
      <div className="about-text-container">
        <h1 className="about-heading">
          About<span className="highlight"> Me</span>
        </h1>
        <p className="about-description">
          I am a full-time Software Engineer at Infosys working in AI and automation, with a
          full-stack foundation across React, Next.js, Node.js, Express, MongoDB, PostgreSQL,
          and modern deployment workflows. My work sits at the intersection of product
          engineering, clean user experience, and practical machine learning.
        </p>
        <p className="about-description">
          I am expanding deeper into AI/ML with Python, NumPy, Pandas, Matplotlib, Seaborn,
          and PyTorch while continuing to ship real applications for clients and product ideas.
          I am available for high-impact remote roles, Noida, Delhi, Gurugram opportunities,
          and focused freelance builds.
        </p>
      </div>
    </div>
  )
}

export default About
