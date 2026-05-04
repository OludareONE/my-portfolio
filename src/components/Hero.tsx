"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tagRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glows */}
      <div style={{
        position: "absolute", top: "-100px", right: "-100px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-80px", left: "100px",
        width: "350px", height: "350px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div ref={tagRef} style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "48px" }}>
        {/* Available badge */}
        <div style={{
          display: "inline-block",
          fontSize: "12px",
          background: "rgba(124,58,237,0.2)",
          border: "0.5px solid rgba(124,58,237,0.5)",
          color: "#a78bfa",
          padding: "4px 16px",
          borderRadius: "20px",
          marginBottom: "24px",
        }}>
          Available for work
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 500, lineHeight: 1.15, marginBottom: "20px" }}>
          Building things for the{" "}
          <span style={{
            background: "linear-gradient(90deg, #a78bfa, #38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            web & beyond
          </span>
        </h1>

        {/* Subheading */}
        
         <p style={{
          fontSize: "16px",
          backgroundColor: "#7c3aed",
          color: "#fff",
          borderRadius: "14px",
          lineHeight: 1.7,
          maxWidth: "480px",
          marginBottom: "36px",
          padding: "10px",
        }}>
          Full-stack developer crafting fast, scalable, and beautifully
          designed digital products. From APIs to pixel-perfect UIs.
        </p>

        <p style={{
          fontSize: "16px",
          backgroundColor: "#2563eb",
          color: "#fff",
          borderRadius: "14px",
          marginLeft: "25px",
          lineHeight: 1.7,
          maxWidth: "480px",
          marginBottom: "36px",
          padding: "10px",
        }}>
          My background in Molecular Biology and Genetics has shaped how I approach problems—by focusing 
          on mechanisms, causality, and systems rather than surface-level solutions. This perspective influences 
          how I design digital products: with clarity, scalability, and user-centered structure.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "64px" }}>
          
            <a href="#projects"
            style={{
              background: "linear-gradient(90deg, #7c3aed, #2563eb)",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "24px",
              fontSize: "14px",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            View my work
          </a>
          
            <a href="/cv.pdf"
            style={{
              background: "transparent",
              backgroundColor: "rgba(124,58,237,0.2)",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "24px",
              fontSize: "14px",
              textDecoration: "none",
              border: "0.5px solid rgba(255,255,255,0.25)",
            }}
          >
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          {[
            { num: "3+", label: "Years experience" },
            { num: "10+", label: "Projects shipped" },
            { num: "8+", label: "Happy clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: "28px", fontWeight: 500 }}>{stat.num}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
        </div>

        {/* Hero image */}
        <div style={{ flexShrink: 0 }}>
          <div style={{
            width: "320px",
            height: "380px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(56,189,248,0.2))",
            border: "0.5px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            color: "rgba(255,255,255,0.3)",
            fontSize: "13px",
          }}>
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(124,58,237,0.4)",
              border: "0.5px solid rgba(124,58,237,0.6)",
            }} />
           <img src="./Profile pix.jpg" alt="" />
           {/* Subheading */}
        <p style={{
          fontSize: "16px",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.7,
          maxWidth: "480px",
          marginBottom: "36px",
        }}>
          </p>
          {/* Subheading */}

        <p style={{
          fontSize: "26px",
          backgroundColor: "#2563eb",
          color: "#fff",
          lineHeight: 1.7,
          maxWidth: "480px", 
          paddingLeft: "10px",
          marginBottom: "20px",
         
          
        }}>
          Oludare Adeneye.
        </p>

        <p style={{
          fontSize: "18px",
          backgroundColor: "#2563eb",
          color: "#fff",
          lineHeight: 1.7,
          maxWidth: "480px",
          paddingLeft: "10px",
          marginBottom: "56px",
          
        }}>
          Full-stack & Software Developer | Scientific Thinker |  UI/UX Designer
        </p>
        
          </div>
        </div>
    </section>
  );
}