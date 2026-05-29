
import { useState, useEffect, useRef, ReactNode } from "react";


const WHAT_WE_DO = [
  {
    icon: "🎓",
    title: "Professional Education & Certification",
    desc: "Structured learning programmes aligned to global regulatory frameworks and industry standards.",
  },
  {
    icon: "🌍",
    title: "University Pathways & International Student Recruitment",
    desc: "Strategic partnerships with UK and international universities to recruit and support undergraduate and postgraduate students.",
  },
  {
    icon: "🏢",
    title: "Corporate & Executive Development",
    desc: "Tailored training solutions for regulators, financial institutions, public sector bodies and multinational organisations.",
  },
  {
    icon: "🏅",
    title: "Professional Recognition via IGRCFP",
    desc: "Certification and CPD pathways officially granted through Institute of GRC & Financial Crime Prevention.",
  },
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


export function WhatWeDoSection() {
  return (
    <section className="section-padding" style={{ background: "#f8f7f5" }}>
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title" style={{ marginBottom: 8, textAlign: "left" }}>What We Do</h2>
          <p style={{ fontSize: 18, color: "#000", fontFamily: "DM Sans, sans-serif", marginBottom: 56 }}>
            We provide professional education and certification aligned with global standards.</p>
        </AnimatedSection>
        <div className="what-we-do-grid">
          {WHAT_WE_DO.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="service-card">
                <div className="service-icon">{item.icon}</div>
                <h3 className="service-title">{item.title}</h3>
                <p className="service-description">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;