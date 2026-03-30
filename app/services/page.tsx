"use client";

const SERVICES = [
  {
    id: "01",
    title: "Civil Engineering",
    description:
      "Complex structural solutions for heavy infrastructure, from viaducts to deep-foundation groundworks.",
    features: ["Structural Analysis", "Foundations", "Load Assessment"],
  },
  {
    id: "02",
    title: "Urban Infrastructure",
    description:
      "Developing the veins of the city. Integrated drainage, utility networks, and public realm transformation.",
    features: ["Utility Diversion", "Public Realm", "SUDS"],
  },
  {
    id: "03",
    title: "Transport & Rail",
    description:
      "Principal contracting for the UK's rail networks. Station upgrades and track-bed stabilization.",
    features: ["PTS Certified", "Asset Protection", "Planning"],
  },
  {
    id: "04",
    title: "Industrial Build",
    description:
      "High-tolerance floor slabs and steel-frame structures for logistics and manufacturing hubs.",
    features: ["FM2 Slabs", "Portal Frames", "Technical Fit-out"],
  },
];

export default function ServicesSection() {
  const fontJost = { fontFamily: "'Jost', sans-serif" };
  const fontSerif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

  return (
    <section className="bg-[#F2F2F0] py-24 lg:py-40 relative overflow-hidden border-t border-black/5">
      {/* Bg*/}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-black/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24 mt-5 md:mt-1">
          <div className="max-w-2xl">
            <h2
              className="text-[#1A1A1A] text-[clamp(44px,5.5vw,72px)] leading-none font-light"
              style={fontSerif}
            >
              Engineering{" "}
              <span className="italic text-[#A68936]">Excellence</span>
            </h2>
          </div>
          <p
            className="text-[#7A7A75] text-md max-w-[320px] leading-relaxed border-l-2 border-[#A68936]/20 pl-8 font-medium"
            style={fontJost}
          >
            Complex infrastructure delivered with mathematical precision and a
            commitment to absolute permanence of builds.
          </p>
        </div>

        {/* Service Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/40 rounded-[3rem] p-10 lg:p-14 border border-white/60 hover:border-[#A68936]/40 transition-all duration-700 flex flex-col justify-between min-h-115 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] hover:bg-white/80"
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-black/2 rounded-full blur-3xl group-hover:bg-[#A68936]/5 transition-all duration-700" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[#A68936]/40 text-xl font-serif italic tracking-widest">
                    {service.id}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-[#F2F2F0] border border-black/5 flex items-center justify-center group-hover:rotate-45 transition-all duration-500 shadow-sm">
                    <svg
                      className="w-6 h-6 text-[#A68936] -rotate-45 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                <h3
                  className="text-[#1A1A1A] text-3xl lg:text-4xl font-light mb-6 group-hover:translate-x-2 transition-all duration-500"
                  style={fontSerif}
                >
                  {service.title}
                </h3>

                <p
                  className="text-[#7A7A75] text-[16px] leading-relaxed mb-10 group-hover:text-[#1A1A1A] transition-colors"
                  style={fontJost}
                >
                  {service.description}
                </p>
              </div>

              <div className="relative z-10">
                <div className="flex flex-wrap gap-3 mb-12">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-5 py-2 rounded-full border border-black/5 bg-black/1 text-[10px] tracking-[0.15em] uppercase text-[#8A8A85] group-hover:border-[#A68936]/20 group-hover:text-[#A68936] transition-all font-bold"
                      style={fontJost}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
