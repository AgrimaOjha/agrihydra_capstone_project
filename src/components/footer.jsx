import './footer.css'
export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: agrihydra@info.co.in</p>
            <p>Phone: +91 22222 11110</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="socials">
              <a href="https"><img src="images/facebook.png" alt="Facebook" /></a>
              <a href="https"><img src="images/linkedin.png" alt="LinkedIn" /></a>
              <a href="https"><img src="images/instagram.png" alt="Instagram" /></a>
            </div>
          </div>
        </div>
        <p className="footer-copy">© 2025 AgriHydra. Stay Hydrated!</p>
      </footer>
    );
  }
  