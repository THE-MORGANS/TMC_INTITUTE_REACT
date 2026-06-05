const capabilities = [
  {
    title: 'Structured candidate pre-screening',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Academic eligibility review',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="1.8">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" strokeLinecap="round" />
        <line x1="8" y1="12" x2="16" y2="12" strokeLinecap="round" />
        <line x1="8" y1="16" x2="12" y2="16" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'English language readiness guidance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <text x="7" y="16" fontSize="8" fill="white" fontWeight="700" fontFamily="sans-serif" stroke="none">En</text>
      </svg>
    ),
  },
  {
    title: 'Documentation verification',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="1.8">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <line x1="8" y1="9" x2="16" y2="9" strokeLinecap="round" />
        <line x1="8" y1="13" x2="16" y2="13" strokeLinecap="round" />
        <line x1="8" y1="17" x2="11" y2="17" strokeLinecap="round" />
        <polyline points="12,16 14,18 18,13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Application support',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="1.8">
        <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" strokeLinecap="round" />
        <path d="M15 3h6v6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14L21 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Interview preparation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="white" stroke="none" />
        <circle cx="12" cy="10" r="1" fill="white" stroke="none" />
        <circle cx="15" cy="10" r="1" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Visa guidance liaison',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="10" rx="2" stroke="white" strokeWidth="1.8" />
        <text x="4.5" y="15.5" fontSize="5.5" fill="white" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.8">VISA</text>
      </svg>
    ),
  },
  {
    title: 'Pre-departure orientation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="1.8">
        <path d="M22 16.5l-9.5-5-2 4.5-4-2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 20h20" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function RecruitmentCapability() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          Our Recruitment Capability
        </h2>
        <p className="text-gray-500 text-sm mb-12 max-w-2xl leading-relaxed">
          Our recruitment model combines professional networks, structured advisory support and market-specific outreach across Africa and emerging markets
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-2xl border border-gray-200 p-6 flex flex-col gap-8 bg-white hover:shadow-md transition-shadow duration-200"
            >
              <div
                className="flex items-center justify-center rounded-xl"
                style={{ width: 44, height: 44, background: '#0D1B2E' }}
              >
                {cap.icon}
              </div>
              <p className="font-semibold text-gray-900 text-[15px] leading-snug">
                {cap.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}