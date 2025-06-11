import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero'; 
import WaterTracker from './components/watertracker';
import Login from './components/login';
import Signup from './components/signup';
import Tips from './components/tips';
import Reminder from './components/reminder'; 

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
              <Footer />
            </>
          }
        />
        
        <Route
          path="/tracker"
          element={
            <div className="page-content">
              <WaterTracker />
              <Footer />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="page-content">
              <Login />
              <Footer />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="page-content">
              <Signup />
              <Footer />
            </div>
          }
        />
        <Route
          path="/tips"
          element={
            <div className="page-content">
              <Tips />
              <Footer />
            </div>
          }
        />
        
        <Route
          path="/reminder"
          element={
            <div className="page-content">
              <Reminder /> 
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
