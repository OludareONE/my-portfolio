"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const socials = [
  {
    label: "Email",
    value: "hello@yourname.dev",
    href: "mailto:hello@yourname.dev",
    color: "#a78bfa",
  },
  {
    label: "GitHub",
    value: "github.com/yourname",
    href: "https://github.com/yourname",
    color: "#38bdf8",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourname",
    href: "https://linkedin.com/in/yourname",
    color: "#34d399",
  },
  {
    label: "Twitter",
    value: "twitter.com/yourname",
    href: "https://twitter.com/yourname",
    color: "#fb923c",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      await emailjs.send(
        "service_miks64s",
        "template_l67b9dh",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "UA-v_0-4AFAN2SJnv"
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
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
            Let's talk
          </div>
          <h2 style={{ fontSize: "32px", fontWeight: 500 }}>
            Contact
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
          }}
        >

          {/* LEFT */}
          <div>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                marginBottom: "40px",
                maxWidth: "400px",
              }}
            >
              Open to full-time roles, freelance projects, and collaborations.
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: s.color + "18",
                      border: `0.5px solid ${s.color}44`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: s.color,
                      }}
                    />
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.3)",
                        marginBottom: "2px",
                      }}
                    >
                      {s.label}
                    </div>
                    <div style={{ fontSize: "13px", color: s.color }}>
                      {s.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >

            {/* Name */}
            <div>
              <label style={labelStyle}>Your name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Your email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                style={inputStyle}
              />
            </div>

            {/* Message */}
            <div>
              <label style={labelStyle}>Your message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi, I would love to work with you on..."
                rows={5}
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>

            {/* Button */}
            <button
              onClick={handleSubmit}
              disabled={status === "sending" || status === "sent"}
              style={{
                background:
                  status === "sent"
                    ? "rgba(52,211,153,0.2)"
                    : "linear-gradient(90deg, #7c3aed, #2563eb)",
                color: status === "sent" ? "#34d399" : "#fff",
                border:
                  status === "sent"
                    ? "0.5px solid rgba(52,211,153,0.4)"
                    : "none",
                padding: "12px",
                borderRadius: "10px",
                fontSize: "14px",
                cursor:
                  status === "sending" || status === "sent"
                    ? "default"
                    : "pointer",
                fontWeight: 500,
              }}
            >
              {status === "idle" && "Send message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message sent!"}
              {status === "error" && "Something went wrong — try again"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable styles */
const labelStyle = {
  fontSize: "12px",
  color: "rgba(255,255,255,0.35)",
  display: "block",
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "0.5px solid rgba(255,255,255,0.12)",
  borderRadius: "10px",
  padding: "10px 14px",
  fontSize: "14px",
  color: "#fff",
  outline: "none",
};