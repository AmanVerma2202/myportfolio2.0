import React from "react";
import { FiBarChart2, FiGitBranch, FiLayers, FiSearch } from "react-icons/fi";
import "./MyApproaches.css";

const steps = [
  {
    number: "01",
    title: "Diagnose the business problem",
    text: "I start by mapping the users, workflow, success metric, and technical risk. This keeps the build focused on outcomes instead of just features.",
    icon: <FiSearch />,
  },
  {
    number: "02",
    title: "Architect the product path",
    text: "I choose the right stack, data model, API boundaries, and AI/automation layer so the product can grow without becoming messy.",
    icon: <FiLayers />,
  },
  {
    number: "03",
    title: "Ship usable increments",
    text: "I build clean interfaces, reliable backend flows, auth, integrations, and dashboards in short loops so stakeholders can review real progress.",
    icon: <FiGitBranch />,
  },
  {
    number: "04",
    title: "Measure, polish, and harden",
    text: "I tune performance, responsive behavior, accessibility, deployment readiness, and maintainability before calling the work complete.",
    icon: <FiBarChart2 />,
  },
];

const MyApproaches = () => {
  return (
    <section className="approach-section" aria-labelledby="approach-title">
      <div className="approach-header">
        <p>Operating System</p>
        <h2 id="approach-title">How I take an idea from unclear to shipped.</h2>
      </div>

      <div className="approach-layout">
        <aside className="approach-manifesto">
          <span>AI + Full Stack</span>
          <h3>My edge is not only writing code. It is turning ambition into a working product with calm engineering judgment.</h3>
          <p>
            For high-profile roles and serious freelance projects, I focus on business clarity,
            strong architecture, fast execution, and details that survive real users.
          </p>
        </aside>

        <div className="approach-steps">
          {steps.map((step) => (
            <article className="approach-card" key={step.number}>
              <div className="approach-card-top">
                <span className="approach-number">{step.number}</span>
                <span className="approach-icon" aria-hidden="true">{step.icon}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyApproaches;
