"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "Tentang" },
  { href: "#projects", label: "Proyek" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        padding: "0.75rem 2.5rem",
        background: "rgba(34,34,34,0.98)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
      {/* Hamburger Button */}
      <button
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((v) => !v)}
        style={{
          display: "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 36,
          height: 36,
          background: "none",
          border: "none",
          cursor: "pointer",
          zIndex: 101,
        }}
        className="navbar-hamburger"
      >
        <span
          style={{
            width: 24,
            height: 3,
            background: "#fff",
            margin: "3px 0",
            borderRadius: 2,
            display: "block",
            transition: "0.3s",
          }}
        />
        <span
          style={{
            width: 24,
            height: 3,
            background: "#fff",
            margin: "3px 0",
            borderRadius: 2,
            display: "block",
            transition: "0.3s",
          }}
        />
        <span
          style={{
            width: 24,
            height: 3,
            background: "#fff",
            margin: "3px 0",
            borderRadius: 2,
            display: "block",
            transition: "0.3s",
          }}
        />
      </button>
      {/* Nav Links */}
      <div
        style={{
          gap: "2rem",
        }}
        className={`navbar-links${menuOpen ? " open" : ""}`}
      >
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
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <style jsx global>{`
        @media (max-width: 768px) {
          .navbar-hamburger {
            display: flex !important;
          }
          .navbar-links {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            background: rgba(34, 34, 34, 0.98);
            flex-direction: column;
            gap: 0;
            padding: 1rem 0;
            display: none;
            box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
            z-index: 100;
          }
          .navbar-links.open {
            display: flex;
          }
          .navbar-links a {
            padding: 1rem 2rem !important;
            font-size: 1.1rem !important;
            border-radius: 0 !important;
            border-bottom: 1px solid #333;
          }
        }
      `}</style>
    </nav>
  );
}
