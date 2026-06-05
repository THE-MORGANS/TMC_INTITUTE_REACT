import { useState } from "react";
import { Link, usePage } from '@inertiajs/react';
import logo from '@/assets/images/logo.jpg';
import "@/css/styles.css";


const FOOTER_LINKS = {
  Services: [
    "Professional Education & Certification",
    "University Pathways",
    "Executive Development",
    "Professional Recognition via IGRCFP",
    "International Student Recruitment",
  ],
  Courses: [
    "Operational Risk for Auditors",
    "Free Assessment: Essentials & Techniques",
    "Executive Risk Management",
    "Best Practices in Operational Risk Mgmt",
    "Enterprise Risk Management",
  ],
  "Quick Links": ["TMC Courses", "IGRCFP Courses", "LICA · IARC Certification", "Study Abroad", "About Us"],
};


// NavBar Component
export function Footer() {
  
   return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div className="footer-brand">
                <div className="logo-icon">
                  <img 
                    src={logo} 
                    alt="TMC Institute Logo" 
                    width={38} 
                    height={38}
                    className="logo-image"
                  />
                </div>
                <span className="footer-brand-text">TMC Institute</span>
              </div>
              <p className="footer-description">
                TMC Institute is a registered trademark of TMC.
              </p>
              <div className="footer-address">
                <div className="footer-address-title">Contact Address</div>
                <div>HQ United Kingdom</div>
                <div>European address</div>
                <div>Asia address</div>
              </div>
              {/* Social icons */}
              <div className="footer-social">
                {["f", "ig", "in", "yt", "𝕏"].map((s) => (
                  <div key={s} className="social-icon">
                    {s}
                  </div>
                ))}
              </div>
            </div>
  
            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="footer-heading">{heading}</h4>
                <ul className="footer-links">
                  {links.map((l) => (
                    <li key={l} className="footer-link-item">
                      <a href="#" className="footer-link">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          <div className="footer-bottom">
            <p className="footer-copyright">
              Copyright © 2026 TMC Institute. All Rights Reserved.
            </p>
            <div className="footer-legal">
              {["Terms of use", "Privacy policy"].map((l) => (
                <a key={l} href="#" className="footer-legal-link">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;