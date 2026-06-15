import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <h1 className="hero-title">TechVest</h1>
      <p className="hero-subtitle">
        Analyze companies using AI-powered financial insights.
      </p>
      <button className="hero-cta" onClick={() => navigate('/dashboard')}>
        Get Started
      </button>
    </div>
  );
}

export default Hero;
