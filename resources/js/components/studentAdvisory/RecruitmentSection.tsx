import { useState, useEffect, useRef, ReactNode } from "react";
import bigSquareBg from '@/assets/images/big-square-bg2.jpg';
import smallSquareBg from '@/assets/images/small-square-bg2.jpg';

const PILLARS = [
  "Business & Management",
  "Finance & Accounting",
  "Risk Management",
  "Cyber Security",
  "Data & AI",
  "Compliance & Regulatory Studies",
];

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

export function RecruitmentSection() {
  return (
    <section className="pb-20" style={{ background: "#fff" }}>
      
      <div className="section-container px-4">
          <h1 className="px-4 pb-10 font-['Inter'] font-extrabold text-[40px] leading-none tracking-normal text-gray-900 mb-4">
            International Student Recruitment & University Partnerships
          </h1>
          

        <div className="core-pillars-grid">
          {/* Left visual - Big and Small Squares */}
          <AnimatedSection>
            <div className="pillars-visual">
              {/* Big Square */}
              <div 
                className="pillars-visual-big"
                style={{
                  backgroundImage: `url(${bigSquareBg})`,
                  backgroundSize: 'cover',
                  borderRadius: '40px',
                  border: `3px solid #c0392b`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
              </div>
              
              {/* Small Square */}
              <div 
                className="pillars-visual-small"
                style={{
                  backgroundImage: `url(${smallSquareBg})`,
                  borderRadius: '40px',
                  border: `3px solid #c0392b`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
              </div>
            </div>
          </AnimatedSection>

          {/* Right content */}
          <AnimatedSection delay={0.15}>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: 8 }}>Overview</h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "#000", marginBottom: 36 }}>
            TMC Institute operates a structured international student recruitment and advisory service focused on undergraduate and postgraduate progression into UK and international universities.
            </p>
            <div className="pillars-list">
              {PILLARS.map((p, i) => (
                <div key={i} className="pillar-item pb-0">
                  <div className="pillar-number">{i + 1}</div>
                  <span className="pillar-text">{p}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default RecruitmentSection;