import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="/" className="logo">AgriHydra</a>
        <div>
          <a href="/">Home</a>
          <a href="/tracker">Tracker</a>
          <a href="#tips">Tips</a>
          <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>Signup</button>
        </div>
      </div>
    </nav>
  );
}
