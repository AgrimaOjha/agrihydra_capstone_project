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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: isHomePage ? "transparent" : "#87CEEB",
        color: isHomePage ? "white" : "#000",
        padding: "16px",
        backdropFilter: isHomePage ? "blur(10px)" : "none",
        boxShadow: !isHomePage ? "0 2px 8px rgba(0, 0, 0, 0.2)" : "none",
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
            color: isHomePage ? "#fddd6a" : "#003366",
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
          <Link
            to="/c"
            style={{
            color: isHomePage ? "white" : "black",
            textDecoration: "none",
          }}
          >
          Community
          </Link>

          {user ? (
            <>
              <span
                style={{
                  color: isHomePage ? "white" : "black",
                  fontWeight: "500",
                }}
              >
                Hello, {user.displayName || user.email.split("@")[0]}

              </span>
              <button
                className="signup-btn"
                onClick={() => signOut(auth)}
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
