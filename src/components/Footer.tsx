"use client";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/yourname" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
  { label: "Twitter", href: "https://twitter.com/yourname" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Top */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            marginBottom: "64px",
          }}
        >

          {/* Brand */}
          <div>
            <div style={logoStyle}>Oludare Adeneye</div>

            <p style={descriptionStyle}>
              Full-stack developer building fast, scalable, and beautiful
              digital products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={sectionTitleStyle}>Navigation</div>
            <ul style={listStyle}>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} style={linkStyle}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <div style={sectionTitleStyle}>Find me on</div>
            <ul style={listStyle}>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={bottomBarStyle}>
          <div style={mutedTextStyle}>
            © {year} Oludare Adeneye— built with Next.js & Tailwind
          </div>

          <div style={{ ...mutedTextStyle, display: "flex", gap: "6px" }}>
            Designed & built by
            <span style={{ color: "#a78bfa" }}>Oludare Adeneye</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* Styles */

const logoStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, #a78bfa, #38bdf8, #34d399)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "18px",
  fontWeight: 500,
  marginBottom: "12px",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "rgba(255,255,255,0.35)",
  lineHeight: 1.7,
  maxWidth: "220px",
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: "11px",
  color: "rgba(255,255,255,0.25)",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "16px",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: 0,
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "rgba(255,255,255,0.4)",
  textDecoration: "none",
  transition: "color 0.2s",
};

const mutedTextStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "rgba(255,255,255,0.2)",
};

const bottomBarStyle: React.CSSProperties = {
  borderTop: "0.5px solid rgba(255,255,255,0.06)",
  paddingTop: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "12px",
};