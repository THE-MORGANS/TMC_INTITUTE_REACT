import { useState } from "react";
import tmcLogo from '@/assets/images/logo.jpg';// replace with your logo path

const FOOTER_LINKS = {
  Services: [
    { name: "Professional Education & Certification", href: '#' },
    { name: "University Pathways", href: '#' },
    { name: "Executive Development", href: '#' },
    { name: "Professional Recognition via IGRCFP", href: '#' },
    { name: "International Student Recruitment", href: '#' },
  ],
  Courses: [
    { name: "Operational Risk for Auditors and Supervisors", href: '#' },
    { name: "Risk Assessment Essentials & Techniques", href:'#'},
    { name: "Essentials of Risk Management", href: '#' },
    { name: "Best Practices in Operational Risk Management", href: '#' },
    { name: "Enterprise Risk Management", href: '#'},
  ],
  "Quick Links": [
    { name: "TMC Courses", href: ''},
    { name: "IGRCFP Certification", href: 'https://igrcfp.org/'},
    { name: "Study Abroad", href: route('study-abroad') },
    { name: "About Us", href: route('about-us') },
  ],
};

const SOCIAL_ICONS = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/people/TMC-Institute/100075775881210/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tmcinstitute?igsh=b2pnaHR1ajJ4c2xn",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/tmc-institute/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="#0f172a" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#0d1b2e] text-white px-6 md:px-12 pt-8 pb-6">

      {/* Newsletter Banner */}
      <div
        className="rounded-2xl border border-blue-400 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
        style={{
          background: "linear-gradient(to right, #1a1a2e 30%, #7b1a1a 100%)",
        }}
      >
        <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight max-w-xs">
          Subscribe to our newsletter
        </h2>

        <form onSubmit={handleSubscribe} className="flex flex-col items-start gap-2 w-full md:w-auto md:min-w-[420px]">
          <div className="flex w-full bg-white rounded-full overflow-hidden shadow-lg">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 text-gray-700 text-sm outline-none bg-transparent"
              required
            />
            <button 
              type="submit"
              className="bg-[#0d1b2e] hover:bg-[#162840] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors duration-200 m-1"
            >
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-xs pl-2">
            By subscribing you agree to our privacy policy
          </p>
        </form>
      </div>

      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr_1fr] gap-10 mb-10">

        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={tmcLogo} alt="TMC Institute" className="w-12 h-12 rounded-full object-cover" />
            <span className="font-bold text-lg">TMC Institute</span>
          </div>

          <p className="text-gray-400 text-sm">
            TMC Institute is a registered trademark of TMC
          </p>

          <div className="text-sm text-gray-300 leading-relaxed">
            <p className="font-bold text-white mb-1">Contact Address</p>
            <p className="font-semibold">HQ United Kingdom:</p>
            <p className="text-gray-400">85 Great Portland Street First Floor London W1W 7LT United Kingdom</p>
            <p className="font-semibold mt-2">EUROPE:</p>
            <p className="text-gray-400">21 Gillabbey Terrace, Gillabbey Street, Cork, T12 KPN4, Republic of Ireland</p>
            <p className="font-semibold mt-2">US:</p>
            <p className="text-gray-400">1111B S Governors Ave, Suite 57613, Dover, DE 19904</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            {SOCIAL_ICONS.map((icon) => (
              <a
                key={icon.label}
                href={icon.href}
                aria-label={icon.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-200"
              >
                {icon.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-bold text-white text-base mb-4">{heading}</h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <a href={route('about-us')} className="underline hover:text-white transition-colors">
            TMC Institute
          </a>{" "}
          All Rights Reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white transition-colors">Terms of use</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;