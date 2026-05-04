"use client";

import { useState } from "react";

const posts = [
  {
    title: "Are Developers Still Coding? Inside the Rise of AI-Assisted Development",
    excerpt: 
      "Software development is changing fast.",
    date: "April 2026",
    readTime: "5 min read",
    slug: "cra-to-nextjs",
    featured: true,
  },
  {
    title: "AI That Doesn’t Just Answer — It Acts: Understanding Agentic AI",
    excerpt:
      "In the past, AI tools responded to prompts. You asked a question, and they answered. Now, AI is starting to act.",
    tag: "Backend",
    tagColor: "#34d399",
    date: "March 2025",
    readTime: "8 min read",
    slug: "scalable-rest-apis",
    featured: true,
  },
  {
    title: "How AI Is Reshaping the Way I Build Web Applications",
    excerpt:
      "AI has changed how I approach web development.",
    tag: "Career",
    tagColor: "#fb923c",
    date: "February 2026",
    readTime: "6 min read",
    slug: "20-projects-lessons",
    featured: true,
  },
  {
    title: "Why Speed Is Everything: Edge Computing and the Modern Web",
    excerpt:
      "Users expect websites to be fast—instantly fast.",
    tag: "TypeScript",
    tagColor: "#a78bfa",
    date: "January 2025",
    readTime: "4 min read",
    slug: "typescript-tips",
    featured: false,
  },
  {
    title: "AI Is Powerful—But Is It Safe? The New Cybersecurity Challenge",
    excerpt:
      "As AI becomes more powerful, it also introduces new risks.",
    tag: "AI",
    tagColor: "#f472b6",
    date: "December 2024",
    readTime: "7 min read",
    slug: "docker-developers",
    featured: false,
  },
];

export default function Blog() {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? posts : posts.filter((p) => p.featured);

  return (
    <section
      id="blog"
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
              Thoughts & writing
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: 500 }}>
              Blog
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
            }}
          >
            {showAll ? "Show less" : "View all posts"}
          </button>
        </div>

        {/* Featured post — first one is big */}
        {displayed.length > 0 && (
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "32px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "24px",
                alignItems: "center",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  displayed[0].tagColor + "66";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <span style={{
                    fontSize: "11px",
                    color: displayed[0].tagColor,
                    background: displayed[0].tagColor + "18",
                    border: `0.5px solid ${displayed[0].tagColor}44`,
                    borderRadius: "10px",
                    padding: "3px 10px",
                  }}>
                    {displayed[0].tag}
                  </span>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
                    {displayed[0].date}
                  </span>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
                    {displayed[0].readTime}
                  </span>
                </div>
                <div style={{ fontSize: "20px", fontWeight: 500, marginBottom: "10px", lineHeight: 1.4 }}>
                  {displayed[0].title}
                </div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                  {displayed[0].excerpt}
                </div>
              </div>
              <div style={{
                fontSize: "24px",
                color: "rgba(255,255,255,0.15)",
                flexShrink: 0,
              }}>
                →
              </div>
            </div>
          </div>
        )}

        {/* Remaining posts grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "14px",
        }}>
          {displayed.slice(1).map((post) => (
            <div
              key={post.slug}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "24px",
                cursor: "pointer",
                transition: "border-color 0.2s, transform 0.2s",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  post.tagColor + "66";
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
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{
                  fontSize: "11px",
                  color: post.tagColor,
                  background: post.tagColor + "18",
                  border: `0.5px solid ${post.tagColor}44`,
                  borderRadius: "10px",
                  padding: "3px 10px",
                }}>
                  {post.tag}
                </span>
              </div>

              <div style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.4 }}>
                {post.title}
              </div>

              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                {post.excerpt}
              </div>

              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "auto",
                paddingTop: "12px",
                borderTop: "0.5px solid rgba(255,255,255,0.06)",
              }}>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
                  {post.date}
                </span>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
                  {post.readTime}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}