// import React from "react";
// import "./ProjectCard.css";

// const ProjectCard = ({ img, title, des, iconLists, link, git }) => {
//   return (
//     <div className="project-card">
//       <div className="user-picture">
//         <img src={img} alt={`${title} Thumbnail`} className="project-thumbnail" />
//       </div>
//       <p className="name-client" >
//         <span style={{ fontWeight: "bold" }} className="projectTitle">{title}</span>
//         <span className="projectDes">{des}</span>
//       </p>
//       <div className="ProjectFooter">

//         <div className="project-icons">
//           {iconLists.map((icon, index) => (
//             <img key={index} src={icon} alt="Tech" />
//           ))}
//         </div>
//         <div className="Projectlinks">
//         <a href={git} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub repository`}>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
//             <path d="M165.9 397.4c0 2-2.3 3.8-4.6 3.3-2.6-.6-4.3-2.9-3.8-5.2.5-2.3 2.7-3.7 5.1-3.4 2.3.3 3.9 2.1 3.3 5.3zm-12.6-7.3c-.9 1.5-2.7 2.2-4.1 1.5-1.5-.7-2-2.4-1.4-3.9.7-1.4 2.3-2.1 3.7-1.4 1.5.6 2.4 2.4 1.8 3.8zm-15.3-5.9c-1.2 1.3-3.3 1.4-4.8.3-1.6-1.1-2-3.2-.8-4.5 1.2-1.3 3.3-1.4 4.8-.3 1.5 1.1 2.2 3.2.8 4.5zm52.5 21.1c-1.7 1.5-4.5 1.5-6.2-.3-1.7-1.8-1.7-4.6.3-6.2 1.8-1.6 4.5-1.5 6.2.3 1.7 1.8 1.5 4.6-.3 6.2zm8.4-15.1c-1.8 1.8-5.1 1.3-7.1-.9-2-2.2-2.4-5.3-.6-7.1 1.8-1.8 5.1-1.3 7.1.9 2 2.2 2.3 5.3.6 7.1zm-26.5-5.8c-2.7.9-5.5-.9-6.3-3.6-.8-2.8.7-5.4 3.3-6.2 2.7-.8 5.5.9 6.3 3.6.9 2.7-.7 5.4-3.3 6.2zm68.3-375.3c-137.5 0-248.4 111.2-248.4 248.4 0 109.8 71.3 203.1 170.1 236.1 12.5 2.3 17.1-5.4 17.1-12v-46.1c-69.2 15-83.7-29.7-83.7-29.7-11.4-29.1-27.8-36.8-27.8-36.8-22.6-15.5 1.7-15.2 1.7-15.2 25 1.8 38.1 25.6 38.1 25.6 22.2 37.9 58.3 26.9 72.5 20.5 2.3-16 8.7-26.9 15.8-33.1-55.2-6.3-113.2-27.7-113.2-123.2 0-27.2 9.7-49.4 25.6-66.8-2.6-6.2-11.1-31.5 2.5-65.6 0 0 21-6.8 68.8 25.4 20-5.6 41.3-8.4 62.5-8.5 21.2.1 42.5 2.9 62.5 8.5 47.7-32.2 68.8-25.4 68.8-25.4 13.6 34.1 5.1 59.4 2.5 65.6 15.9 17.4 25.6 39.6 25.6 66.8 0 95.8-58.1 116.8-113.6 122.9 9 7.8 16.9 23.4 16.9 47.1v69.8c0 6.8 4.6 14.4 17.1 12 98.6-33.1 169.8-126.2 169.8-235.9 0-137.3-111.1-248.4-248.4-248.4z"/>
//           </svg>
//           <span className="tooltip-social">Github</span>
//         </a>
//         <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`${title} live project`}>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
//               <path d="M21.71 2.29a1 1 0 0 0-1-.26L3.3 9.7a1 1 0 0 0-.09 1.84l7.45 3.11 3.11 7.45a1 1 0 0 0 1.84-.09l7.67-17.41a1 1 0 0 0-.26-1ZM10.14 12.63l-5.14-2.14L18.51 5.49l-2.14 5.14-6.23 2Z" />
//           </svg>
//           <span className="tooltip-social">Live Site</span>
//         </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import React, { useRef } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ img, title, des, iconLists, link, git }) => {
  const cardRef = useRef(null);

  // Tracks the cursor position and feeds it to CSS as custom properties,
  // powering the spotlight glow that follows the mouse across the card.
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  };

  return (
    <div
      className="project-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div className="project-card-inner">
        <div className="user-picture">
          <img
            src={img}
            alt={`${title} Thumbnail`}
            className="project-thumbnail"
            loading="lazy"
          />
          <div className="picture-overlay" />
        </div>

        <div className="project-body">
          <span className="projectTitle">{title}</span>
          <span className="projectDes">{des}</span>
        </div>

        <div className="ProjectFooter">
          <div className="project-icons">
            {iconLists.map((icon, index) => (
              <img key={index} src={icon} alt="" title="" />
            ))}
          </div>

          <div className="Projectlinks">
            <a
              className="link-pill"
              href={git}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.8-4.6 3.3-2.6-.6-4.3-2.9-3.8-5.2.5-2.3 2.7-3.7 5.1-3.4 2.3.3 3.9 2.1 3.3 5.3zm-12.6-7.3c-.9 1.5-2.7 2.2-4.1 1.5-1.5-.7-2-2.4-1.4-3.9.7-1.4 2.3-2.1 3.7-1.4 1.5.6 2.4 2.4 1.8 3.8zm-15.3-5.9c-1.2 1.3-3.3 1.4-4.8.3-1.6-1.1-2-3.2-.8-4.5 1.2-1.3 3.3-1.4 4.8-.3 1.5 1.1 2.2 3.2.8 4.5zm52.5 21.1c-1.7 1.5-4.5 1.5-6.2-.3-1.7-1.8-1.7-4.6.3-6.2 1.8-1.6 4.5-1.5 6.2.3 1.7 1.8 1.5 4.6-.3 6.2zm8.4-15.1c-1.8 1.8-5.1 1.3-7.1-.9-2-2.2-2.4-5.3-.6-7.1 1.8-1.8 5.1-1.3 7.1.9 2 2.2 2.3 5.3.6 7.1zm-26.5-5.8c-2.7.9-5.5-.9-6.3-3.6-.8-2.8.7-5.4 3.3-6.2 2.7-.8 5.5.9 6.3 3.6.9 2.7-.7 5.4-3.3 6.2zm68.3-375.3c-137.5 0-248.4 111.2-248.4 248.4 0 109.8 71.3 203.1 170.1 236.1 12.5 2.3 17.1-5.4 17.1-12v-46.1c-69.2 15-83.7-29.7-83.7-29.7-11.4-29.1-27.8-36.8-27.8-36.8-22.6-15.5 1.7-15.2 1.7-15.2 25 1.8 38.1 25.6 38.1 25.6 22.2 37.9 58.3 26.9 72.5 20.5 2.3-16 8.7-26.9 15.8-33.1-55.2-6.3-113.2-27.7-113.2-123.2 0-27.2 9.7-49.4 25.6-66.8-2.6-6.2-11.1-31.5 2.5-65.6 0 0 21-6.8 68.8 25.4 20-5.6 41.3-8.4 62.5-8.5 21.2.1 42.5 2.9 62.5 8.5 47.7-32.2 68.8-25.4 68.8-25.4 13.6 34.1 5.1 59.4 2.5 65.6 15.9 17.4 25.6 39.6 25.6 66.8 0 95.8-58.1 116.8-113.6 122.9 9 7.8 16.9 23.4 16.9 47.1v69.8c0 6.8 4.6 14.4 17.1 12 98.6-33.1 169.8-126.2 169.8-235.9 0-137.3-111.1-248.4-248.4-248.4z" />
              </svg>
              <span>Code</span>
            </a>

            <a
              className="link-pill link-pill-primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live project`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.71 2.29a1 1 0 0 0-1-.26L3.3 9.7a1 1 0 0 0-.09 1.84l7.45 3.11 3.11 7.45a1 1 0 0 0 1.84-.09l7.67-17.41a1 1 0 0 0-.26-1ZM10.14 12.63l-5.14-2.14L18.51 5.49l-2.14 5.14-6.23 2Z" />
              </svg>
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

