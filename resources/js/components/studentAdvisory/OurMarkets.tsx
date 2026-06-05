import { useState } from "react";

const PRIMARY_MARKETS = [
  {
    name: "Nigeria",
    flag: "🇳🇬",
    colors: ["#008751", "#ffffff", "#008751"],
  },
  {
    name: "Kenya",
    flag: "🇰🇪",
    colors: ["#006600", "#cc0000", "#000000"],
  },
  {
    name: "Ghana",
    flag: "🇬🇭",
    colors: ["#006b3f", "#fcd116", "#ce1126"],
  },
  {
    name: "Zambia",
    flag: "🇿🇲",
    colors: ["#198a00", "#ef7d00", "#de2010"],
  },
  {
    name: "South Africa",
    flag: "🇿🇦",
    colors: ["#007a4d", "#001489", "#e03c31"],
  },
];

const SECONDARY_MARKETS = [
  {
    name: "UK-based diaspora professionals",
    flag: "🇬🇧",
    gradient: "from-[#012169] via-[#C8102E] to-[#012169]",
  },
  {
    name: "Working professionals seeking postgraduate conversion programmes",
    flag: "💼",
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
  },
];

function FlagStripes({ colors }: { colors: string[] }) {
  return (
    <div className="absolute inset-0 flex rounded-[inherit] overflow-hidden">
      {colors.map((color, i) => (
        <div
          key={i}
          className="flex-1"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

function PrimaryCard({
  market,
}: {
  market: (typeof PRIMARY_MARKETS)[number];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative rounded-[14px] overflow-hidden flex-1 min-w-[120px] aspect-[1.3/1] cursor-pointer
        transition-all duration-[250ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${hovered ? '-translate-y-1 scale-[1.03] shadow-[0_16px_40px_rgba(0,0,0,0.25)]' : 'shadow-[0_4px_12px_rgba(0,0,0,0.12)]'}
      `}
    >
      <FlagStripes colors={market.colors} />

      {/* Dark overlay */}
      <div
        className={`
          absolute inset-0 transition-colors duration-[250ms]
          ${hovered ? 'bg-black/35' : 'bg-black/45'}
        `}
      />

      {/* Label */}
      <div className="absolute inset-0 flex items-end p-[14px_16px]">
        <span className="text-white font-semibold tracking-[0.01em] text-[clamp(13px,1.4vw,16px)] [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
          {market.name}
        </span>
      </div>
    </div>
  );
}

function SecondaryCard({
  market,
}: {
  market: (typeof SECONDARY_MARKETS)[number];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative rounded-[14px] overflow-hidden flex-[1_1_220px] min-h-[170px] cursor-pointer
        bg-gradient-to-r ${market.gradient}
        transition-all duration-[250ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${hovered ? '-translate-y-1 scale-[1.02] shadow-[0_16px_40px_rgba(0,0,0,0.25)]' : 'shadow-[0_4px_12px_rgba(0,0,0,0.12)]'}
      `}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/[0.38]" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center p-5 md:p-6">
        <span className="text-white font-semibold text-[clamp(14px,1.5vw,17px)] leading-[1.4] [text-shadow:0_1px_6px_rgba(0,0,0,0.5)] max-w-[240px]">
          {market.name}
        </span>
      </div>
    </div>
  );
}

export default function OurMarkets() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      {/* Header */}
      <h2 className="text-[clamp(28px,4vw,38px)] font-extrabold text-[#0d0d0d] mb-2 tracking-[-0.02em] leading-[1.1]">
        Our Markets
      </h2>
      <p className="text-[15px] text-[#555] mb-8 font-normal leading-[1.5]">
        We prioritise quality over volume and focus on professionally aligned candidates.
      </p>

      {/* Primary Focus */}
      <h3 className="text-base font-bold text-[#0d0d0d] mb-4 tracking-[0.01em]">
        Our Primary Focus:
      </h3>
      <div className="flex gap-3 flex-wrap mb-9">
        {PRIMARY_MARKETS.map((m) => (
          <PrimaryCard key={m.name} market={m} />
        ))}
      </div>

      {/* Secondary Focus */}
      <h3 className="text-base font-bold text-[#0d0d0d] mb-4 tracking-[0.01em]">
        Our Secondary Focus:
      </h3>
      <div className="flex gap-3 flex-wrap">
        {SECONDARY_MARKETS.map((m) => (
          <SecondaryCard key={m.name} market={m} />
        ))}
      </div>
    </section>
  );
}