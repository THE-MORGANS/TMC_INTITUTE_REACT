import { useState, useEffect, useRef, ReactNode } from "react";
import whatwedoImg from '@/assets/images/whatwedo_img.png';
import whatwedoImg2 from '@/assets/images/whatwedo_img2.png';
import whatwedoImg3 from '@/assets/images/whatwedo_img3.png';
import whatwedoImg4 from '@/assets/images/whatwedo_img4.png';

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

export function WhatWeDoSection() {
  const images = [
    { src: whatwedoImg, alt: "What We Do 1" },
    { src: whatwedoImg2, alt: "What We Do 2" },
    { src: whatwedoImg3, alt: "What We Do 3" },
    { src: whatwedoImg4, alt: "What We Do 4" },
  ];

  return (
    <section className="section-padding" style={{ background: "#f8f7f5" }}>
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title" style={{ marginBottom: 8, textAlign: "left" }}>What We Do</h2>
          <p style={{ fontSize: 18, color: "#000", fontFamily: "DM Sans, sans-serif", marginBottom: 56 }}>
            We provide professional education and certification aligned with global standards.
          </p>
        </AnimatedSection>
        
        <div className="what-we-do-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          alignItems: "start"
        }}>
          {images.map((image, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div style={{
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover"
                  }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;