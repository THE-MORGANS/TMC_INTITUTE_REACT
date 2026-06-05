import { useState } from "react";
import {
  Database,
  FileText,
  PieChart,
  Scale,
  Share2,
  Clock,
  ShieldCheck,
  UserCheck,
  ChevronRight,
} from "lucide-react";

type Section = {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
};

const sections: Section[] = [
  {
    id: "data-controller",
    icon: <Database size={18} />,
    title: "Data Controller",
    content: (
      <p className="text-sm text-gray-700 leading-relaxed">
        TMC Institute is the data controller for personal data collected during
        student recruitment and advisory processes.
      </p>
    ),
  },
  {
    id: "data-collected",
    icon: <FileText size={18} />,
    title: "Data Collected",
    content: (
      <ul className="space-y-1">
        {[
          "Name",
          "Contact Details",
          "Academic Records",
          "Identification Documents",
          "CV / Employment History",
          "English Language Results",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "purpose",
    icon: <PieChart size={18} />,
    title: "Purpose of Processing",
    content: (
      <ul className="space-y-1">
        {[
          "Assess Eligibility",
          "Support University Application",
          "Communicate with Partner Institution",
          "Provide Advisory Services",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "legal-basis",
    icon: <Scale size={18} />,
    title: "Legal Basis",
    content: (
      <ul className="space-y-1">
        {["Consent", "Legitimate Interest", "Contractual Necessity"].map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "data-sharing",
    icon: <Share2 size={18} />,
    title: "Data Sharing",
    content: (
      <>
        <p className="text-sm text-gray-700 mb-2">Data is only shared with:</p>
        <ul className="space-y-1">
          {[
            "Partner Universities",
            "Visa Advisory Services (where required)",
            "Internal Compliance Officers",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    icon: <Clock size={18} />,
    title: "Retention",
    content: (
      <>
        <p className="text-sm text-gray-700 mb-2">Data is retained for:</p>
        <ul className="space-y-1">
          {[
            "12 months if no enrollment",
            "Longer where required for compliance",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    icon: <ShieldCheck size={18} />,
    title: "Data Security",
    content: (
      <ul className="space-y-1">
        {[
          "Secure Storage Systems",
          "Limited Access Controls",
          "Encrypted Communications where Applicable",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "your-rights",
    icon: <UserCheck size={18} />,
    title: "Your Rights",
    content: (
      <>
        <p className="text-sm text-gray-700 mb-2">Students may:</p>
        <ul className="space-y-1">
          {[
            "Request Access",
            "Request Correction",
            "Request Deletion",
            "Withdraw Consent",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

export default function GDPRPolicy() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="lg:px-16 mx-auto px-4 py-10 font-sans">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight mb-6">
        GDPR &amp; Data Protection Policy
      </h2>

      <div className="flex flex-col gap-3">
        {sections.map((section) => {
          const isOpen = openId === section.id;
          return (
            <div
              key={section.id}
              className="rounded-xl bg-gray-200 overflow-hidden"
            >
              {/* Header row */}
              <button
                onClick={() => toggle(section.id)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
              >
                <div className="flex items-center gap-3 text-gray-800 font-semibold text-sm sm:text-base">
                  <span className="text-gray-600">{section.icon}</span>
                  {section.title}
                </div>
                <ChevronRight
                  size={18}
                  className={`text-gray-500 transition-transform duration-200 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              {/* Collapsible content */}
              {isOpen && (
                <div className="px-5 pb-4 pt-1 border-t border-gray-300">
                  {section.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}