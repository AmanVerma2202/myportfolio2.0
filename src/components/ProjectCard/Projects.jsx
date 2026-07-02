// import React from "react";
// import ProjectCard from "../ProjectCard/ProjectCard";
// import { projects } from "../../Data/Data";
// import "./Projects.css";

// const Projects = () => {
//   return (
//     <section id="projects" className="projects-section">
//       <h1>
//         Selected <span style={{ color: "var(--page-accent)" }}>Projects</span>
//       </h1>
//       <div className="projects-grid">
//         {projects.map((project) => (
//           <ProjectCard
//             key={project.id}
//             img={project.img}
//             title={project.title}
//             des={project.des}
//             iconLists={project.iconLists}
//             link={project.link}
//             git={project.git}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React, { useEffect, useRef } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../Data/Data";
import "./Projects.css";

const Projects = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current
      ? gridRef.current.querySelectorAll(".project-card")
      : [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger each card slightly based on its position in the grid
            const index = Array.from(cards).indexOf(entry.target);
            entry.target.style.transitionDelay = `${(index % 3) * 0.12}s`;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading">
        <span className="projects-eyebrow">Portfolio</span>
        <h1>
          Selected <span className="accent-text">Projects</span>
        </h1>
        <p className="projects-subtitle">
          A collection of things I've built, from idea to shipped product.
        </p>
      </div>

      <div className="projects-grid" ref={gridRef}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.img}
            title={project.title}
            des={project.des}
            iconLists={project.iconLists}
            link={project.link}
            git={project.git}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
