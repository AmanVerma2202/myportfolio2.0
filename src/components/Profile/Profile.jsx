import React, { useEffect, useState } from 'react'
import "./Profile.css"
import { ReactTyped } from 'react-typed';
import {
  FiArrowUpRight,
  FiBriefcase,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMoon,
  FiSun,
} from "react-icons/fi";

import resume from "../../Image/AmanVerma.pdf"

const Profile = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");

  useEffect(() => {
    document.body.classList.toggle("portfolio-light-mode", theme === "light");
    localStorage.setItem("portfolio-theme", theme);
    return () => document.body.classList.remove("portfolio-light-mode");
  }, [theme]);

  const metrics = [
    { value: "AI", label: "automation work at Infosys" },
    { value: "35-40%", label: "frontend load-time reduction" },
    { value: "600+", label: "DSA problems solved" },
    { value: "5+", label: "product modules shipped" },
  ];

  const projects = [
    {
      name: "UrNumerals",
      stack: "MERN, Redis, Razorpay, JWT",
      result: "Delivered a full-stack marketplace with auth, bookings, commerce flows, payments, and admin controls.",
    },
    {
      name: "HireWise",
      stack: "Next.js, PostgreSQL, Clerk, Drizzle, AI",
      result: "Built an AI-driven interview prep app with question generation, voice recording, and candidate feedback.",
    },
    {
      name: "Aggregate",
      stack: "React, Node, Redux, Data Insights",
      result: "Created farm insights using NPK and pH data, helping users make smarter crop and fertilizer decisions.",
    },
  ];

  const skills = [
    "ReactJS",
    "Next.js",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Java",
    "C++",
    "Python",
    "PyTorch",
    "NumPy",
    "Pandas",
    "Seaborn",
    "Matplotlib",
    "AI Automation",
  ];
  
  return (
    <section className={`profile profile-${theme}`} id="home">
      <div className="profile-shell">
        <div className="profile-topbar">
          <div className="availability-chip">
            <span aria-hidden="true"></span>
            Full-time Infosys AI automation | Hybrid
          </div>

          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>

        <div className="profile-grid">
          <div className="hero-container">
            <p className="intro-text">Software Engineer at Infosys | AI and automation</p>
            <h1 className="hero-title">
              <ReactTyped strings={["Aman Verma"]} style={{ color: "rgb(209, 172, 24)" }} typeSpeed={90} showCursor={false} />
              <span style={{ fontWeight: 500 }} className="hero-tagline">Full-stack AI engineer for high-impact product teams.</span>
            </h1>

            <p className="subheadline">
              I build production-ready web platforms and AI-assisted workflows using React, Next.js,
              Node.js, Python, PostgreSQL/MongoDB, and ML tooling. I am open to high-growth remote
              roles, Noida, Delhi, Gurugram opportunities, and selective freelance work where polished
              execution matters.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <a href={resume} download="AmanVerma.pdf" className="custom-button primary-action">
                <FiDownload aria-hidden="true" />
                Resume
              </a>
              <a href="#projects" className="custom-button secondary-action">
                See Projects
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <div className="hero-socials" aria-label="Social links">
              <a href="mailto:aka.amanverma@gmail.com" aria-label="Email Aman">
                <FiMail aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/akaamanverma/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <FiLinkedin aria-hidden="true" />
              </a>
              <a href="https://github.com/AmanVerma2202" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <FiGithub aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="resume-panel" aria-label="Resume snapshot">
            <div className="panel-header">
              <div>
                <p>Resume Snapshot</p>
                <h2>Enterprise AI work plus product delivery.</h2>
              </div>
              <div className="panel-icon" aria-hidden="true">
                <FiBriefcase />
              </div>
            </div>

            <div className="experience-strip">
              <span>Infosys</span>
              <strong>Software Engineer - AI and Automation</strong>
              <small>Full-time </small>
            </div>

            <div className="proof-grid">
              {metrics.map((item) => (
                <div className="proof-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="resume-board" aria-label="Selected resume details">
          <div className="project-lane">
            {projects.map((project) => (
              <article className="project-pill" key={project.name}>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.stack}</p>
                </div>
                <span>{project.result}</span>
              </article>
            ))}
          </div>

          <div className="skill-cloud" aria-label="Technical skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
