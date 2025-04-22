import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match ❌");
      return;
    }


    console.log("Signed up with:", email, password);
    navigate("/"); 
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Join AgriHydra 🚰</h2>
        <p>Create an account to start tracking</p>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
        <p className="signup-redirect">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}
