import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav
      style={{
        backgroundColor: isHomePage ? "transparent" : "#87CEEB",
        color: isHomePage ? "white" : "#000",
        backdropFilter: isHomePage ? "blur(10px)" : "none",
        boxShadow: !isHomePage ? "0 2px 8px rgba(0, 0, 0, 0.2)" : "none",
      }}
    >
      <div className="nav-container">
        <Link
          to="/"
          className="logo"
          style={{
            fontWeight: "bold",
            fontSize: "22px",
            color: isHomePage ? "#fddd6a" : "#003366",
            textDecoration: "none",
          }}
        >
          AgriHydra
        </Link>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </div>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link
            to="/"
            style={{ color: isHomePage ? "white" : "black", textDecoration: "none" }}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/tracker"
            style={{ color: isHomePage ? "white" : "black", textDecoration: "none" }}
            onClick={() => setMenuOpen(false)}
          >
            Tracker
          </Link>
          <Link
            to="/tips"
            style={{ color: isHomePage ? "white" : "black", textDecoration: "none" }}
            onClick={() => setMenuOpen(false)}
          >
            Tips
          </Link>
          <Link
            to="/community"
            style={{ color: isHomePage ? "white" : "black", textDecoration: "none" }}
            onClick={() => setMenuOpen(false)}
          >
            Community
          </Link>

          {user ? (
            <>
              <span style={{ color: isHomePage ? "white" : "black", fontWeight: "500" }}>
                Hello, {user.displayName || user.email.split("@")[0]}
              </span>
              <button
                className="signup-btn"
                onClick={() => {
                  signOut(auth);
                  setMenuOpen(false);
                }}
                style={{
                  background: isHomePage ? "black" : "#fff",
                  color: isHomePage ? "white" : "#000",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  border: isHomePage ? "none" : "1px solid black",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="login-btn"
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
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
                onClick={() => {
                  navigate("/signup");
                  setMenuOpen(false);
                }}
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
