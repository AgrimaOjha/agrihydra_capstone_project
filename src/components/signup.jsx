import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.js";

export default function Signup() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match ❌");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      console.log("User signed up successfully!");
      navigate("/");
    } catch (err) {
      console.error("Signup error:", err.message);
      setError("Signup failed: " + err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Join AgriHydra 🚰</h2>
        <p>Create an account to start tracking</p>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
          {error && <p className="error">{error}</p>}
        </form>
        <p className="signup-redirect">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}
