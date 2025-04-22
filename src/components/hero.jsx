import { useNavigate } from "react-router-dom";
import base from "../assets/3210.jpg"

export default function HeroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tracker");
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${base})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content">
        <h1>Sip. Track. Repeat.</h1>
        <p>Stay hydrated without the hassle. Just log your water and let us handle the rest.</p>
        <button className="hero-btn" onClick={handleClick}>
          Start Tracking
        </button>
      </div>
    </section>
  );
}
