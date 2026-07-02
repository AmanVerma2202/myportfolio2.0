import React from "react";
import {
  FiActivity,
  FiBriefcase,
  FiCpu,
  FiMapPin,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";
import "./BentoGrid.css";
import { Earth } from "./Earth";
import { ContentCard } from "./ContentCard";
import b1 from "../../Image/b1.jpg";
import b5 from "../../Image/b5.jpg";
import b8 from "../../Image/b8.jpg";

const BentoGrid = () => {
  const cards = [
    {
      area: "identity",
      kicker: "Current Role",
      title: "Infosys software engineer building AI automation for enterprise workflows.",
      body: "I combine full-stack product delivery with Python, ML tooling, and automation thinking so teams can move faster with cleaner systems.",
      image: b1,
      icon: <FiBriefcase />,
      stats: ["Full-time", "AI automation", "Product engineering"],
    },
    {
      area: "stack",
      kicker: "Technical Edge",
      title: "Full-stack plus practical AI/ML.",
      body: "React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Python, PyTorch, NumPy, Pandas, Matplotlib, and Seaborn.",
      image: b5,
      icon: <FiCpu />,
    },
    {
      area: "market",
      kicker: "Availability",
      title: "Remote first. Ready for Noida, Delhi, Gurugram, and selective freelance work.",
      icon: <FiMapPin />,
    },
    {
      area: "proof",
      kicker: "Execution Proof",
      title: "600+ DSA problems, shipped product modules, and measurable performance improvements.",
      body: "Strong fundamentals, clear APIs, faster frontends, and user-facing polish.",
      image: b8,
      icon: <FiTrendingUp />,
      stats: ["600+ DSA", "35-40% faster", "5+ modules"],
    },
    {
      area: "focus",
      kicker: "Best Fit",
      title: "AI-enabled SaaS, dashboards, internal tools, e-commerce, and automation-heavy platforms.",
      icon: <FiTarget />,
    },
    {
      area: "signal",
      kicker: "Working Style",
      title: "Senior-minded delivery: clarify the business problem, ship the core, measure, then refine.",
      icon: <FiActivity />,
    },
  ];

  return (
    <section className="bento-section" aria-label="Professional snapshot">
      <div className="bento-heading">
        <p>Executive Snapshot</p>
        <h2>Built for teams that need speed, clarity, and AI-ready engineering.</h2>
      </div>

      <div className="bento-grid">
        {cards.map((card) => (
          <article
            key={card.area}
            className={`bento-item bento-${card.area} ${card.image ? "has-image" : "no-image"}`}
            style={card.image ? { backgroundImage: `url(${card.image})` } : undefined}
          >
            <div className="bento-content">
              <span className="bento-icon" aria-hidden="true">{card.icon}</span>
              <p className="bento-kicker">{card.kicker}</p>
              <h3>{card.title}</h3>
              {card.body ? <p className="bento-body">{card.body}</p> : null}
              {card.stats ? (
                <div className="bento-stats" aria-label={`${card.kicker} proof points`}>
                  {card.stats.map((stat) => <span key={stat}>{stat}</span>)}
                </div>
              ) : null}
            </div>
          </article>
        ))}

        <article className="bento-item bento-earth" aria-label="Remote collaboration">
          <Earth />
        </article>

        <article className="bento-item bento-contact" aria-label="Contact Aman">
          <ContentCard />
        </article>
      </div>
    </section>
  );
};

export default BentoGrid;
