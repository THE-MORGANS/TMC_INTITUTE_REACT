import { useState, useEffect, useRef, ReactNode } from "react";
import ecosystemBg from '@/assets/images/ecosystem-bg.jpg'; // Add your background image

const ECOSYSTEM = [
  { label: "The Morgans Consortium", tier: 1 },
  { label: "TMC Institute\n(Academic & Recruitment Arm)", tier: 2 },
  { label: "IGRCFP\n(Professional Body & Certification Authority)", tier: 3 },
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

export function EcosystemSection() {
  return (
    <section 
      className="ecosystem-section section-padding"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.75)), url(${ecosystemBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Optional: parallax effect
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="ecosystem-bg" />
      <div className="ecosystem-container">
        <AnimatedSection>
          <h2 className="ecosystem-title">Our Ecosystem</h2>
        </AnimatedSection>
        <div className="ecosystem-list">
          {ECOSYSTEM.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="ecosystem-item-wrapper">
                <div className="ecosystem-item" style={{
                  border: `2px solid #fff`,
                  // background: "rgba(255, 255, 255, 0)",
                  // backdropFilter: "blur(10px)",
                }}>
                  {item.label}
                </div>
                {i < ECOSYSTEM.length - 1 && (
                  <div className="ecosystem-connector" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EcosystemSection;