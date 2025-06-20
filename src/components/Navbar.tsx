"use client";

import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "Tentang" },
  { href: "#projects", label: "Proyek" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "0.75rem 2.5rem",
        background: "rgba(34,34,34,0.98)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2.5rem",
        boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(6px)",
      }}
    >
      <span
        style={{
          color: "#00bcd4",
          fontWeight: 700,
          fontSize: "1.35rem",
          letterSpacing: "1px",
          marginRight: "2rem",
          fontFamily: "monospace",
        }}
      >
        MyPortfolio
      </span>
      <div style={{ display: "flex", gap: "2rem" }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "1.08rem",
              letterSpacing: "0.5px",
              padding: "0.4rem 1.1rem",
              borderRadius: "6px",
              transition: "background 0.2s, color 0.2s",
              display: "inline-block",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#00bcd4";
              e.currentTarget.style.color = "#222";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
