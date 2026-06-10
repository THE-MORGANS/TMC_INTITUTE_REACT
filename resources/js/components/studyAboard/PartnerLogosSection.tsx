import React from 'react';
// Import your logo assets - update paths to match your project
import ardenLogo from '@/assets/partner/arden-university.jpg';
import qualifiLogo from '@/assets/partner/qualifi-approved-centre.jpg';
import ucamLogo from '@/assets/partner/ucam-university.jpg';
import astonLogo from '@/assets/partner/aston-university.jpg';
import londonGradLogo from '@/assets/partner/london-graduate-school.png';
import eleLogo from '@/assets/partner/eie-institute.jpg';
import royalLogo from '@/assets/partner/royal-charter.png';

const PartnerLogosSection = () => {
  const partners = [
    { src: ardenLogo, alt: 'Arden University' },
    { src: qualifiLogo, alt: 'QUALIFI Approved Centre' },
    { src: ucamLogo, alt: 'UCAM Universidad Católica de Murcia' },
    { src: astonLogo, alt: 'Aston University Birmingham UK' },
    { src: londonGradLogo, alt: 'London Graduate School' },
    { src: eleLogo, alt: 'eie Institute of Education' },
    { src: royalLogo, alt: 'Official Royal Seal' },
  ];

  // Duplicate list for seamless loop
  const allLogos = [...partners, ...partners];

  return (
    <section className="w-full py-10 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div 
          className="flex gap-6 md:gap-8 items-center animate-scroll"
          style={{ animation: 'scroll 35s linear infinite' }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          {allLogos.map((partner, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 max-w-[140px] h-20 flex items-center justify-center"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="w-full h-auto max-h-14 object-contain hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation definition only added */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default PartnerLogosSection;