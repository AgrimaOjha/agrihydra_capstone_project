export default function Navbar() {
    return (
      <nav>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" className="logo">AgriHydra</a>
          <div>
            <a href="#home">Home</a>
            <a href="#tracker">Tracker</a>
            <a href="#tips">Tips</a>
            <button className="login-btn">Login</button>
            <button className="signup-btn">Signup</button>
          </div>
        </div>
      </nav>
    );
  }
  