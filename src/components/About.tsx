"use client";

const timeline = [
  {
    year: "2007",
    title: "Plant Science",
    subtitle: "Olabisi Onabanjo University, Nigeria",
    color: "#38bdf8",
  },
  {
    year: "2015",
    title: "Molecular Biologist, MSc",
    subtitle: "University of Ibadan, Nigeria",
    color: "#a78bfa",
  },
  {
    year: "2018 - 2024",
    title: "Biologist",
    subtitle: "University of Medical Sciences, Nigeria",
    color: "#34d399",
  },
  {
    year: "2024 - 2026",
    title: "Web & Interactive Development",
    subtitle: "Assiniboine College, Brandon",
    color: "#fb923c",
  },
];

const hobbies = [
  { emoji: "🎵", label: "Music" },
  { emoji: "📚", label: "Reading" },
  { emoji: "🎮", label: "Gaming" },
  { emoji: "🌍", label: "Travel" },
  { emoji: "🏋️", label: "Fitness" },
  { emoji: "📷", label: "Photography" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <div
            style={{
              fontSize: "12px",
              color: "#a78bfa",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Who I am
          </div>
          <h2 style={{ fontSize: "32px", fontWeight: 500 }}>
            About me
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "start",
          }}
        >

          {/* LEFT */}
          <div>
            {/* Avatar */}
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #38bdf8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 500,
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              OA
            </div>

            <div style={{ fontSize: "20px", fontWeight: 500 }}>
             Oludare Adeneye
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#a78bfa",
                marginBottom: "20px",
              }}
            >
              Full-stack developer
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              I am a passionate full-stack developer with a love for building
              products that make a real difference. I thrive at the intersection
              of design and engineering — turning complex problems into elegant,
              user-friendly solutions.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              When I am not coding, you will find me contributing to open source,
              writing about tech, or exploring new tools and frameworks.
            </p>

            {/* Hobbies */}
            <div
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Outside of work
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {hobbies.map((hobby) => (
                <div
                  key={hobby.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(255,255,255,0.05)",
                    border: "0.5px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    padding: "6px 14px",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <span>{hobby.emoji}</span>
                  {hobby.label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Timeline */}
          <div>
            <div
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "20px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Experience
            </div>

            <div style={{ position: "relative", paddingLeft: "20px" }}>
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: "6px",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background: "rgba(255,255,255,0.1)",
                }}
              />

              {timeline.map((item, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    marginBottom: "32px",
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-2px",
                      top: "4px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: item.color,
                    }}
                  />

                  <div style={{ marginLeft: "20px" }}>
                    <div
                      style={{
                        fontSize: "12px",
                        color: item.color,
                        marginBottom: "4px",
                      }}
                    >
                      {item.year}
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 500 }}>
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}