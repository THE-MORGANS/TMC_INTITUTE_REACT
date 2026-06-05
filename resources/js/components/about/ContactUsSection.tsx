import { useState, useEffect, useRef, ReactNode } from "react";
import { Link } from '@inertiajs/react';
import ladyJusticeImg from '@/assets/images/lady-justice.jpg';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    const currentRef = ref.current;
    if (currentRef) obs.observe(currentRef);
    return () => {
      if (currentRef) obs.unobserve(currentRef);
      obs.disconnect();
    };
  }, [threshold]);

  return { ref, inView };
}

function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function ContactUsSection() {
  return (
    <section className="px-8 py-8 bg-gray-100">
      <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] min-h-[160px] max-w-4xl mx-auto flex items-center"
        style={{ background: "linear-gradient(to right, #111 55%, transparent 100%)" }}
      >

        {/* Lady Justice image — fades in from right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[45%] bg-cover bg-top"
          style={{
            backgroundImage: `url(${ladyJusticeImg})`,
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 40%, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 40%, black 100%)",
          }}
        />

        {/* Left content */}
        <div className="relative z-10 max-w-[60%] px-10 py-10">
          <AnimatedSection>
            <h2 className="text-white font-extrabold text-2xl md:text-3xl leading-tight mb-5">
              Contact us: enquiries@tmcinstitute.com
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-3 mb-3">
              <Link
                href={route('login')}
                className="bg-[#c0392b] hover:bg-[#a93226] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors duration-200 cursor-pointer border-none"
              >
                Apply Now
              </Link>
              <Link
                href={route('contact')}
                className="bg-transparent hover:bg-white/10 text-white font-semibold text-sm px-6 py-2.5 rounded-full border-2 border-white transition-colors duration-200 cursor-pointer"
              >
                Partner With Us
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-[#aaa] text-xs mt-1">
              Signup for free • No card required • Cancel any time
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;