import React from 'react';

const ServicesSection = () => {
  const topServices = [
    {
      number: "01",
      title: "Career & Study Advice",
      description: "TMC Institute provides expert study abroad and career advisory services, guiding students in choosing the right programmes and destinations based on their individual goals, background, and circumstances. Using a global perspective and SMART pathways, they offer personalised support including career planning, skills assessment, mentorship, and application guidance. Their structured approach ensures all aspects such as course selection, location, finances, and visa requirements are aligned to each student's needs, helping them achieve both short- and long-term success."
    },
    {
      number: "02",
      title: "Application and Admissions Processing and Support.",
      description: "Technical information includes the IP address used by a third party to connect a computer to the internet, login details, browser type and version, time zone settings, browser plug-ins and versions, operating system, and platform. Our direct access to admissions departments at partner universities ensures faster, more streamlined applications. We guide students through admission requirements and student visa processes, recognizing both are essential steps for studying in any country."
    },
    {
      number: "03",
      title: "Pre-departure assistance",
      description: "As a wholesome institution, we go the extra mile to ensure your comfort and a smooth transition into your new environment. This includes helping you settle in quickly and seamlessly. We assist with arranging accommodation, airport pickup services, and orientation in your new home country. Our goal is to make your arrival stress-free and well-organized, ensuring you feel supported, comfortable, and confident as you begin your new academic and personal journey."
    }
  ];

  const benefits = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "Better employment opportunities"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Education at top-tier institutions"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "A route to immigration"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.5 7.5L23 13l-7.5 3.5L12 23l-3.5-7.5L1 13l7.5-3.5z" />
        </svg>
      ),
      title: "Build international connections"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
      title: "Global mindset for the future"
    }
  ];

  return (
    // <section className="w-full py-16 px-4 bg-white">
     <section className="py-10 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Services Block */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 mb-16">
          <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-center mb-10">
            Our Services Designed for your Success
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white text-black p-6 rounded-xl shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                  {service.number}
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-center text-black mb-12">
            What Our Study Abroad Can Do For You
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center text-black mb-4">
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-gray-800 leading-tight">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;