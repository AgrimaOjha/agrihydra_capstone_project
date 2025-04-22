import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero';
// import Search from './components/search'; 
import WaterTracker from './components/watertracker';
import Login from './components/login';
import Signup from './components/signup';
import Tips from './components/tips';
import './App.css';

function App() {
  return (
    
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* <Search /> */}
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
        <Route
          path="/login"
          element={
            <>
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup />
              <Footer />
            </>
          }
        />
        <Route
          path="/tips"
          element={
            <>
              <Tips />
              <Footer />
            </>
          }
          
        />
      </Routes>
    </Router>
  );
}

export default App;
