import { useState, useEffect, useRef, ReactNode } from "react";
import cardBg1 from '@/assets/images/who-are-we-img.jpg';
import cardBg2 from '@/assets/images/who-are-we-img2.jpg';
import cardBg3 from '@/assets/images/who-are-we-img3.jpg';

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

export function WhoWeAreSection() {
  const cards = [
  {
    bgImage: cardBg1,
    borderColor: "#B2171D",
    width: "310px",
    height: "512px"  // Smaller
  },
  {
    bgImage: cardBg2,
    borderColor: "#B2171D",
    width: "400px",
    height: "593px"  // Taller - Center card
  },
  {
    bgImage: cardBg3,
    borderColor: "#B2171D",
    width: "310px",
    height: "512px"  // Smaller
  }
];
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div className="section-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 className="section-title">Who Are We</h2>
            <p className="section-subtitle">
              TMC Institute is the education and academic development arm of THE MORGANS.
            </p>
            <p style={{ fontSize: 18, color: "#000", lineHeight: 1.8, maxWidth: 1300, margin: "16px auto 0" }}>
              We specialise exclusively in Governance, Risk, Compliance (GRC), Financial Crime Prevention, Regulatory Technology, ESG 
              <br/> Risk and Digital Risk disciplines. Unlike general education providers, our focus is vertical, 
              industry-aligned, and globally <br/>connected.
            </p>
          </div>
        </AnimatedSection>

        {/* 3 Cards Grid - Center card taller */}
        <div className="who-we-are-grid-enhanced">
          {cards.map((card, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div 
                className={`who-card-enhanced ${i === 1 ? 'center-card' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.06)), url(${card.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: `4px solid ${card.borderColor}`,
                  borderRadius: '16px',
                  width: card.width,
                  height: card.height,
                  margin: '0 auto', // Center the cards
                }}
              >
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;