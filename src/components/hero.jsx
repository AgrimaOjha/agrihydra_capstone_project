import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './hero.css';

export default function HeroSection() {
  const navigate = useNavigate();
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const handleStartTrackingClick = () => {
    navigate("/tracker");
  };

  const handleSetReminderClick = () => {
    navigate("/reminder");
  };

  useEffect(() => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const lastLogged = new Date(localStorage.getItem("lastLoggedDate"));
    const currentStreak = parseInt(localStorage.getItem("currentStreak") || 0);
    const best = parseInt(localStorage.getItem("bestStreak") || 0);

    const todayStr = today.toISOString().split("T")[0];
    const lastStr = lastLogged.toISOString().split("T")[0];
    const yestStr = yesterday.toISOString().split("T")[0];

    let newStreak = currentStreak;

    if (lastStr === yestStr) {
      newStreak += 1;
    } else if (lastStr === todayStr) {
      newStreak = currentStreak;
    } else {
      newStreak = 1;
    }

    localStorage.setItem("currentStreak", newStreak);
    if (newStreak > best) {
      localStorage.setItem("bestStreak", newStreak);
    }

    setStreak(newStreak);
    setBestStreak(Math.max(newStreak, best));
  }, []);

  return (
    <section className="hero">
      <div className="hero-backdrop"></div>
      <div className="hero-content">
        <h1>Sip. Track. Repeat.</h1>
        <p>Stay hydrated without the hassle. Just log your water and let us handle the rest.</p>
        
        <div className="hero-buttons-container">
          <button className="hero-btn" onClick={handleStartTrackingClick}>
            Start Tracking
          </button>
          <button className="set-reminder-btn" onClick={handleSetReminderClick}>
            Set Hydration Reminder
          </button>
        </div>

        <div style={{ textAlign: "center" }}>
  <div className="streak-display">
    <p>🔥 Current Streak: {streak} days</p>
    <p>🏆 Best Streak: {bestStreak} days</p>
  </div>
</div>

      </div>
    </section>
  );
}
