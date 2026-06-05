import aboutImg from '@/assets/images/about_img.jpg';
import aboutImg2 from '@/assets/images/about_img2.jpg';

const steps = [
  {
    number: '01',
    title: 'Initial Enquiry & Profiling',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="#4A6CF7" strokeWidth="1.8">
        <circle cx="20" cy="14" r="7" />
        <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" strokeLinecap="round" />
        <circle cx="29" cy="10" r="4" fill="#f0f4ff" stroke="#4A6CF7" strokeWidth="1.5" />
        <text x="26.5" y="13.5" fontSize="7" fill="#4A6CF7" fontWeight="bold">?</text>
      </svg>
    ),
    points: ['Candidate consultation', 'Career goal assessment', 'Academic background review'],
  },
  {
    number: '02',
    title: 'Eligibility Screening',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="#4A6CF7" strokeWidth="1.8">
        <line x1="10" y1="14" x2="30" y2="14" strokeLinecap="round" />
        <line x1="10" y1="20" x2="30" y2="20" strokeLinecap="round" />
        <line x1="10" y1="26" x2="24" y2="26" strokeLinecap="round" />
        <polyline points="22,28 26,32 34,22" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    points: ['Qualification mapping', 'Programme suitability', 'English language requirement review'],
  },
  {
    number: '03',
    title: 'Documentation Verification',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="#4A6CF7" strokeWidth="1.8">
        <rect x="8" y="6" width="24" height="28" rx="2" />
        <line x1="13" y1="14" x2="27" y2="14" strokeLinecap="round" />
        <line x1="13" y1="20" x2="27" y2="20" strokeLinecap="round" />
        <line x1="13" y1="26" x2="20" y2="26" strokeLinecap="round" />
        <path d="M24 25l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    points: ['Academic transcripts', 'Identification', 'Employment history (if applicable)'],
  },
  {
    number: '04',
    title: 'University Matching',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="#4A6CF7" strokeWidth="1.8">
        <circle cx="20" cy="20" r="12" />
        <polyline points="14,20 18,24 26,16" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 10 Q36 10 36 16" strokeLinecap="round" />
        <path d="M36 16 Q36 22 30 22" strokeLinecap="round" />
      </svg>
    ),
    points: ['Programme recommendation', 'Fee guidance', 'Location advice'],
  },
  {
    number: '05',
    title: 'Application Submission',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="#4A6CF7" strokeWidth="1.8">
        <path d="M20 28L20 12" strokeLinecap="round" />
        <path d="M12 20l8-10 8 10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 32h24" strokeLinecap="round" />
      </svg>
    ),
    points: ['Application completion', 'Statement review', 'Document upload'],
  },
  {
    number: '06',
    title: 'Offer & Acceptance Support',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="#4A6CF7" strokeWidth="1.8">
        <circle cx="20" cy="20" r="12" />
        <path d="M14 20l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 8 L20 5M30 11 L33 9M32 20 L35 20" strokeLinecap="round" />
      </svg>
    ),
    points: ['Offer condition explanation', 'Deposit guidance'],
  },
  {
    number: '07',
    title: 'Visa & Pre-Departure Advisory',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="#4A6CF7" strokeWidth="1.8">
        <circle cx="20" cy="20" r="12" />
        <ellipse cx="20" cy="20" rx="5" ry="12" />
        <line x1="8" y1="20" x2="32" y2="20" />
        <line x1="10" y1="13" x2="30" y2="13" />
        <line x1="10" y1="27" x2="30" y2="27" />
      </svg>
    ),
    points: ['CAS support liaison', 'Pre-departure briefing', 'Accommodation advisory signposting'],
  },
];

const sidebarStats = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="#C0392B" strokeWidth="1.8">
        <path d="M24 6L8 18v24h10V30h12v12h10V18L24 6z" strokeLinejoin="round" />
        <rect x="18" y="30" width="12" height="12" />
      </svg>
    ),
    text: 'TMC Institute operates within the wider ecosystem of THE MORGANS , which has established networks across financial institutions, regulatory bodies and professional communities across Africa and Europe.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="#C0392B" strokeWidth="1.8">
        <circle cx="16" cy="18" r="6" />
        <circle cx="32" cy="18" r="6" />
        <path d="M4 38c0-6.627 5.373-12 12-12" strokeLinecap="round" />
        <path d="M32 26c6.627 0 12 5.373 12 12" strokeLinecap="round" />
        <path d="M16 26c4.418 0 8 3.582 8 8" strokeLinecap="round" />
        <path d="M32 26c-4.418 0-8 3.582-8 8" strokeLinecap="round" />
      </svg>
    ),
    text: 'Through our summits, executive training programmes, and professional forums, we have engaged over 700 professionals across multiple jurisdictions.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="#C0392B" strokeWidth="1.8">
        <circle cx="24" cy="12" r="5" />
        <circle cx="10" cy="32" r="5" />
        <circle cx="38" cy="32" r="5" />
        <line x1="24" y1="17" x2="10" y2="27" />
        <line x1="24" y1="17" x2="38" y2="27" />
        <line x1="10" y1="32" x2="38" y2="32" />
      </svg>
    ),
    text: "Our recruitment model builds upon this established network base.\nIf early stage, avoid claiming volume. Emphasise network credibility",
  },
];

export default function StudentAdvisoryContent() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
            <h1 className="font-['Inter'] font-extrabold text-[50px] leading-none tracking-normal text-gray-900 mb-4">
            Student Advisory
            </h1>
            <p className="mb-3 font-['Inter'] font-extrabold text-lg md:text-[20px] leading-none tracking-normal text-gray-900 mb-1">
            Process Outline
            </p>
            <p className="font-['Inter'] font-normal text-base md:text-[20px] leading-none tracking-normal text-gray-500 max-w-3xl">
                A structured, student-centred advisory journey from initial enquiry to your arrival and beyond
            </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: Steps */}
          <div className="flex-1 flex flex-col gap-0">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex items-stretch gap-0">
                {/* Number + dashed line column */}
                <div className="flex flex-col items-center mr-5" style={{ minWidth: 44 }}>
                  <div
                    className="flex items-center justify-center rounded-full text-white font-bold text-sm shrink-0"
                    style={{
                      width: 44,
                      height: 44,
                      background: '#0D1B2E',
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    {step.number}
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className="flex-1"
                      style={{
                        width: 2,
                        borderLeft: '2px dashed #CBD5E1',
                        minHeight: 28,
                        marginTop: 2,
                        marginBottom: 2,
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className="flex items-start gap-5 rounded-2xl mb-3 px-5 py-4"
                  style={{
                    border: '1.5px solid #E8ECF4',
                    background: '#FAFBFF',
                    flex: 1,
                    minHeight: 90,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center rounded-xl shrink-0"
                    style={{
                      width: 52,
                      height: 52,
                      background: '#EEF2FF',
                      marginTop: 2,
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2" style={{ fontSize: 15 }}>
                      {step.title}
                    </h3>
                    <ul className="space-y-1">
                      {step.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-gray-600" style={{ fontSize: 13 }}>
                          <span
                            className="rounded-full shrink-0"
                            style={{ width: 7, height: 7, background: '#C0392B', display: 'inline-block' }}
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Sidebar */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-6 lg:sticky lg:top-24"
            style={{
              background: '#0D1B2E',
              minWidth: 300,
              maxWidth: 360,
              width: '100%',
              color: '#fff',
            }}
          >
            {/* Mortarboard icon */}
            <div className="mb-1">
              <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14" stroke="#C0392B" strokeWidth="1.8">
                <polygon points="28,10 52,22 28,34 4,22" strokeLinejoin="round" />
                <path d="M10 26v12c0 0 8 8 18 8s18-8 18-8V26" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="52" y1="22" x2="52" y2="36" strokeLinecap="round" />
              </svg>
            </div>

            {/* Tagline */}
            <div className="mb-2">
              <p className="text-3xl font-extrabold text-white leading-tight">Structured.</p>
              <p className="text-3xl font-extrabold text-white leading-tight">Professional.</p>
              <p
                className="text-3xl font-extrabold leading-tight underline"
                style={{ color: '#C0392B', textDecorationColor: '#C0392B' }}
              >
                Measurable.
              </p>
            </div>

            {/* Stats */}
            {sidebarStats.map((stat, i) => (
              <div key={i}>
                {i > 0 && <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', marginBottom: 20 }} />}
                <div className="flex flex-col gap-3">
                  {stat.icon}
                  <p className="text-sm leading-relaxed" style={{ color: '#B8C4D4', whiteSpace: 'pre-line' }}>
                    {stat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}