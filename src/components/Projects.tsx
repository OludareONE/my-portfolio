"use client";

import { useState } from "react";

const projects = [
  {
    title: "Brandon Salutes",
    description:
      "A website redesign for NGO that bridges the gap between veterans and civilians",
    tags: ["WordPress", "PHP"],
    color: "#38bdf8",
    emoji: "🏘️",
    live: " https://assiniboinecreative.media/brandonsalutes/",
    featured: true,
  },
  {
    title: "WOW_G; an E-commerce site.",
    description:
      "RESTful backend with inventory management, and order tracking. Handles multiple requests per minute.",
    tags: ["PHP", "Javascript", "HTML", "CSS", "Ecommerce"],
    color: "#34d399",
    emoji: "🛒",
    live: "https://assiniboinecreative.media/student/wid/2024/adeneyeo/OM_proj1_oa/index.php", 
    github: "https://github.com/OludareONE/WOWG_eCommerce.git",
    featured: true,
  },
  {
    title: "Real Estate Redefined; A WordPress-powered platform.",
    description:
      "A platform designed to make property discovery inclusive, accessible, and flexible for all budgets and needs. Built for scale with a focus on performance.",
    tags: ["WordPress", "Elementor", "Estatik", "Astra" , "Figma", ],
    color: "#f472b6",
    emoji: "🏡",
    live: "https://assiniboinecreative.media/student/wid/2024/adeneyeo/om_realestate_oa/",
    github: "https://github.com/yourname/project",
    featured: true,
  },
  {
    title: "Nyama; a full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js).",
    description:
      "A collaborative MERN stack project that bridges the gap between discovering recipes and grocery shopping. Users can browse and save community recipes, then generate a personalised weekly grocery list.",
    tags: ["MongoDB", "Express", "React", "NodeJS" , "Chakra UI", "Axios", "Vite", "Full-stack"],
    color: "#2563eb",
    emoji: "🍨",
    live: "https://nyama-frontend.onrender.com",
    github: "https://github.com/lkmandy/recipe_mern_app",
    featured: true,
  },
  {
    title: "Brandon Cleaners",
    description:
      "A complete digital rebrand and website rebuild for a local dry-cleaning business, modernizing its online presence.",
    tags: ["Adobe Illustrattor", "Figma", "HTML/CSS", "JavaScript", "Photoshop", "InDesign"],
    color: "#38bdf8",
    emoji: "🛁",
    live: "https://brandoncleaners.onrender.com/#services",
    github: "https://github.com/OludareONE/Brandoncleaners.git",
    featured: true,
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "48px",
          flexWrap: "wrap",
          gap: "16px",
        }}>
          <div>
            <div style={{
              fontSize: "12px",
              color: "#a78bfa",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}>
              What I have built
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: 500 }}>
              Featured projects
            </h2>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.5)",
              background: "transparent",
              border: "0.5px solid rgba(255,255,255,0.15)",
              padding: "8px 20px",
              borderRadius: "20px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {showAll ? "Show less" : "View all projects"}
          </button>
        </div>

        {/* Projects grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "16px",
        }}>
          {displayed.map((project) => (
            <div
              key={project.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  project.color + "66";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}
            >
              {/* Icon */}
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: project.color + "22",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}>
                {project.emoji}
              </div>

              {/* Title & description */}
              <div>
                <div style={{ fontSize: "16px", fontWeight: 500, marginBottom: "8px" }}>
                  {project.title}
                </div>
                <div style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                }}>
                  {project.description}
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      padding: "3px 10px",
                      borderRadius: "10px",
                      background: project.color + "18",
                      color: project.color,
                      border: `0.5px solid ${project.color}44`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{
                display: "flex",
                gap: "12px",
                marginTop: "auto",
                paddingTop: "8px",
                borderTop: "0.5px solid rgba(255,255,255,0.06)",
              }}>
                
                  <a href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    color: project.color,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Live demo →
                </a>
                
                  <a href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                  }}
                >
                  GitHub
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}