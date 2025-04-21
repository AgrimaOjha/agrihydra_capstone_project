import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero';
import Search from './components/search'; 
import WaterTracker from './components/watertracker';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Search />
                <Footer />
              </>
            }
          />
          <Route
            path="/tracker"
            element={
              <>
                <WaterTracker />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
