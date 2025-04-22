import React from "react";
import "./navbar.css"; // Import your CSS file for styling
import { useNavigate, Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: isHomePage ? "transparent" : "#87CEEB", // Sky blue for other pages
        color: isHomePage ? "white" : "#000", // White text for home, black text for other pages
        padding: "16px",
        backdropFilter: isHomePage ? "blur(10px)" : "none", // Blur effect only on homepage
        boxShadow: !isHomePage ? "0 2px 8px rgba(0, 0, 0, 0.2)" : "none", // Shadow for other pages
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Link
          to="/"
          className="logo"
          style={{
            fontWeight: "bold",
            fontSize: "22px",
            color: isHomePage ? "#fddd6a" : "#003366", // Yellow color for logo
            textDecoration: "none",
          }}
        >
          AgriHydra
        </Link>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              color: isHomePage ? "white" : "black",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <Link
            to="/tracker"
            style={{
              color: isHomePage ? "white" : "black",
              textDecoration: "none",
            }}
          >
            Tracker
          </Link>
          <Link
            to="/tips"
            style={{
              color: isHomePage ? "white" : "black",
              textDecoration: "none",
            }}
          >
            Tips
          </Link>
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
            style={{
              background: isHomePage ? "white" : "#000",
              color: isHomePage ? "#000" : "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
            }}
          >
            Login
          </button>
          <button
            className="signup-btn"
            onClick={() => navigate("/signup")}
            style={{
              background: isHomePage ? "black" : "#fff",
              color: isHomePage ? "white" : "#000",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              border: isHomePage ? "none" : "1px solid black",
            }}
          >
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
}
