"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = ["Projects", "Skills", "About", "Blog", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: "12px",
    left: "16px",
    right: "12px",
    zIndex: 50,
    transition: "all 0.3s",
    backgroundColor: scrolled ? "rgba(10,10,15,0.9)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    border: scrolled ? "0.5px solid rgba(255,255,255,0.1)" : "none",
    borderRadius: scrolled ? "16px" : "0px",

  };

  const logoStyle: React.CSSProperties = {
    background: "linear-gradient(90deg, #a78bfa, #38bdf8, #34d399)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "40px",
    fontWeight: 600,
    textDecoration: "none",
  };

  return (
    <nav style={navStyle}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="#hero" style={logoStyle}>Oludare Adeneye</Link>

        <ul className="hidden md:flex items-center gap-8" style={{ listStyle: "none" }}>
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{ fontSize: "18px", color: "#34d399", textDecoration: "none" }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

          <Link
          href="#contact"
          style={{
            fontSize: "13px",
            background: "#7c3aed",
            color: "#fff",
            padding: "8px 20px",
            borderRadius: "20px",
            textDecoration: "none",
          }}
        >
          Hire me
        </Link>

      </div>
    </nav>
  );
}