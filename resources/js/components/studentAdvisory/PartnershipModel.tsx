export default function PartnershipModel() {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-white">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight mb-8 leading-tight">
        Partnership Model
      </h2>

      {/* Two-column text area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="border-l-4 border-red-600 pl-4">
          <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
            TMC Institute operates within a transparent and ethically grounded
            framework, delivering international student recruitment services
            through clearly defined, commission-based agreements with partner
            universities. All activities are conducted in full alignment with
            institutional policies, global best practices, and relevant
            regulatory requirements, ensuring accountability, trust, and
            consistency across every engagement.
          </p>
        </div>

        {/* Right column */}
        <div className="border-l-4 border-red-600 pl-4">
          <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-3">
            We work closely with our partners to understand their academic
            standards, student expectations, and institutional goals, enabling
            us to identify and support candidates who are not only qualified,
            but well-aligned for successful progression and long-term impact.
          </p>
          <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
            By prioritising quality, transparency, and mutual value, TMC
            Institute positions itself as a trusted partner dedicated to
            student success.
          </p>
        </div>
      </div>
    </section>
  );
}