import { useState } from "react";
import heroImage from '@/assets/images/hero-img2.png'

export function HeroSection() {

    const STATS = [
        { value: "7,500+", label: "Current Students" },
        { value: "40+", label: "Countries Reached" },
        { value: "15+", label: "Years of Excellence" },
        { value: "200+", label: "Corporate Partners" },
    ];
 
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-bg-pattern" />
      <div className="hero-bg-grid" />

      <div className="hero-container">
        {/* Left Content - 60% */}
        <div>
          <h1 className="hero-title pt-10">
            <span className="hero-title-highlight">TMC INSTITUTE </span>
          </h1>
          <p className="hero-subtitle">
            Specialist Education in Management Science, Technology, Governance, Risk & Financial<br/>  Crime Prevention and more
          </p>
          <p className="hero-description">
           TMC Institute is a global professional education and academic partnership platform focused on Governance, Risk, Compliance, Financial Crime Prevention, ESG Risk and Digital Regulation. We connect academic pathways, professional certification, and industry practice across Africa, Europe and international markets.
           </p>
          <div className="hero-buttons">
            <a href="#" className="btn-primary" style={{ fontSize: 15, padding: "14px 34px", borderRadius:"50px" }}>Explore Programs</a>
            <a href="#" className="btn-outline" style={{ fontSize: 15, padding: "14px 34px", borderRadius:"50px" }}>Partner With Us</a>
          </div>
        </div>

        {/* Right Content - 40% */}
        <div className="hero-image-container">
          <div 
            className="hero-image-placeholder"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="hero-stats-card">
              <div className="hero-image-icon">🎓</div>
              <div className="hero-stats-content">
                <div className="hero-stats-value">7,500+</div>
                <div className="hero-stats-label">Current Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;