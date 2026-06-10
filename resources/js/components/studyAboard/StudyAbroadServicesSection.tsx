import React from 'react';

const StudyAbroadServicesSection = () => {
  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: "Explore Global Opportunities",
      description: "Access a wide catalogue of international universities and courses that match your goals"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9" />
          <circle cx="12" cy="14" r="2" />
          <path d="M16 22v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4" />
          <line x1="12" y1="14" x2="12" y2="18" />
          <path d="m19 12 3-3-3-3" />
          <path d="M16 6h3a2 2 0 0 1 2 2v3" />
        </svg>
      ),
      title: "Career & Study Advice",
      description: "Personalized guidance to choose the right path and build SMART career pathways"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      ),
      title: "Application & Admissions Support",
      description: "End-to-end support for a faster, smoother application and admission process"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22,2 15,22 11,13 2,9" />
        </svg>
      ),
      title: "Pre-Departure Assistance",
      description: "We help you prepare for your journey and settle with ease"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Global Education Benefits",
      description: "Better opportunities global exposure, and a brighter tomorrow"
    }
  ];

  return ( 
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-white">
    {/* <section className="w-full py-16 px-4 bg-white"> */}
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-center text-black mb-12">
          What Our Study Abroad Can Do For You
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center relative lg:border-r lg:border-gray-300 lg:last:border-r-0 px-4"
            >
              {/* Icon */}
              <div className="flex justify-center text-black mb-4">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-3">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadServicesSection;