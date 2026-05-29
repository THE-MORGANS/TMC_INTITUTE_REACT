import { useState, useEffect, useRef, ReactNode } from "react";
import "@/css/styles.css";
import logo from '@/assets/images/logo.jpg';
import NavBar from '@/Layouts/Navbar';
import Footer from '@/Layouts/Footer';
import HeroSection from '@/components/home/HeroSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import WhoWeAreSection from '@/components/home/WhoWeAreSection';
import CorePillarsSection from '@/components/home/CorePillarsSection';
import EcosystemSection from '@/components/home/EcosystemSection';







interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`animated-section ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting) setInView(true); 
    }, { threshold });
    
    const currentRef = ref.current;
    if (currentRef) obs.observe(currentRef);
    
    return () => {
      if (currentRef) obs.unobserve(currentRef);
      obs.disconnect();
    };
  }, [threshold]);
  
  return { ref, inView };
}


// CTABanner Section Component
function CTABannerSection() {
  return (
    <section className="cta-banner">
      <AnimatedSection>
        <p className="cta-badge">Start Learning Today</p>
        <h2 className="cta-title">Get Online Courses Now!</h2>
        <a href="#" className="btn-primary" style={{ fontSize: 16, padding: "16px 48px" }}>Join With Us</a>
      </AnimatedSection>
    </section>
  );
}

// Newsletter Section Component
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <AnimatedSection>
          <h2 className="newsletter-title">Subscribe to our newsletter</h2>
          <p className="newsletter-subtitle">Stay updated with the latest programmes, events and industry news.</p>
          {subscribed ? (
            <div className="newsletter-success">
              ✓ Thank you for subscribing!
            </div>
          ) : (
            <div className="newsletter-form">
              <input
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="newsletter-input"
              />
              <button className="btn-primary newsletter-button" onClick={() => { if (email) setSubscribed(true); }}>
                Subscribe
              </button>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}

// Main Component
export default function TMCHome() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1a1a2e", background: "#fff", overflowX: "hidden" }}>
      <NavBar scrolled={scrolled} />
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <EcosystemSection />
      <CorePillarsSection />
      <CTABannerSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}