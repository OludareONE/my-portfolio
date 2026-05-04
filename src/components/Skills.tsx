"use client";

const skills = [
  { name: "React", color: "#38bdf8", category: "Frontend" },
  { name: "Next.js", color: "#a78bfa", category: "Frontend" },
  { name: "TypeScript", color: "#fb923c", category: "Frontend" },
  { name: "Tailwind CSS", color: "#38bdf8", category: "Frontend" },
  { name: "Node.js", color: "#34d399", category: "Backend" },
  { name: "PostgreSQL", color: "#f472b6", category: "Backend" },
  { name: "REST APIs", color: "#34d399", category: "Backend" },
  { name: "WordPress", color: "#f472b6", category: "Frontend" },
  { name: "Docker", color: "#a78bfa", category: "DevOps" },
  { name: "AWS", color: "#fb923c", category: "DevOps" },
  { name: "Git", color: "#34d399", category: "DevOps" },
  { name: "CI/CD", color: "#38bdf8", category: "DevOps" },
];

const categories = ["Frontend", "Backend", "DevOps"];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 24px",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{
            fontSize: "12px",
            color: "#a78bfa",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}>
            What I work with
          </div>
          <h2 style={{ fontSize: "32px", fontWeight: 500 }}>
            Skills & technologies
          </h2>
        </div>

        {/* Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {categories.map((category) => (
            <div key={category}>

              {/* Category label */}
              <div style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "14px",
                paddingBottom: "8px",
                borderBottom: "0.5px solid rgba(255,255,255,0.07)",
              }}>
                {category}
              </div>

              {/* Skill chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(255,255,255,0.05)",
                        border: "0.5px solid rgba(255,255,255,0.1)",
                        borderRadius: "20px",
                        padding: "8px 16px",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.8)",
                        transition: "border-color 0.2s",
                        cursor: "default",
                      }}
                    >
                      <div style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: skill.color,
                        flexShrink: 0,
                      }} />
                      {skill.name}
                    </div>
                  ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}