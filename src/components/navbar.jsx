import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/" className="logo">AgriHydra</Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="/tracker">Tracker</Link>
          <Link to="/tips">Tips</Link> {/* 👈 normal looking text link but SPA routing */}
          <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>Signup</button>
        </div>
      </div>
    </nav>
  );
}
