"use client";
import { useEffect, useState } from "react";

export function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <footer
      style={{
        padding: "2rem 1rem",
        background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
        textAlign: "center",
        color: "#fff",
        letterSpacing: "1px",
        fontSize: "1.1rem",
        boxShadow: "0 -2px 16px rgba(0,0,0,0.15)",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition:
          "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <span
        style={{
          background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 700,
          fontSize: "1.2rem",
        }}
      >
        © {new Date().getFullYear()} Muhammad Khairil Amin
      </span>
      <span
        style={{
          display: "block",
          fontSize: "0.95rem",
          color: "#bbb",
          marginTop: "0.5rem",
          letterSpacing: "0.5px",
        }}
      >
        Built with Next.js &amp; React
      </span>
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "4px",
          background: "linear-gradient(90deg, #00c6ff, #0072ff, #00c6ff)",
          backgroundSize: "200% 100%",
          animation: "footerBarMove 3s linear infinite",
        }}
      />
      <style>{`
                @keyframes footerBarMove {
                    0% { background-position: 0% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
    </footer>
  );
}
