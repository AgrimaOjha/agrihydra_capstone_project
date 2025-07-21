import React from "react";
import { useNavigate } from "react-router-dom";
import './hero.css';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleStartTrackingClick = () => {
    navigate("/tracker");
  };

  const handleSetReminderClick = () => {
    navigate("/reminder");
  };

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
      </div>
    </section>
  );
}
