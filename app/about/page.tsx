"use client";

import Image from "next/image";

export default function AboutSection() {
  const fontJost = { fontFamily: "'Jost', sans-serif" };
  const fontSerif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

  return (
    <section className="bg-[#F2F2F0] py-32 lg:py-48 relative overflow-hidden border-t border-black/5 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="mb-32 lg:mb-48">
          <div className="flex items-center gap-6 mb-12">
            <span
              className="text-[#A68936] text-[12px] tracking-[0.6em] uppercase font-black"
              style={fontJost}
            >
              Company Profile
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <p
              className="text-2xl lg:text-3xl leading-snug font-light italic border-l-4 border-[#A68936] pl-10"
              style={fontSerif}
            >
              Vanguard was not founded to fulfill contracts. It was engineered
              to solve the structural bottlenecks that define the nation’s
              survival.
            </p>
            <p
              className="text-[#4A4A45] text-lg leading-relaxed pt-2 font-medium"
              style={fontJost}
            >
              From our origins as a specialized civil consultancy in 1999, we
              have transitioned into a vertically integrated infrastructure
              powerhouse. We eliminate the volatility of traditional
              sub-contracting by maintaining absolute sovereign control over the
              engineering lifecycle.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-18 lg:mb-24">
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-white">
              <Image
                height={1600}
                width={1200}
                src="https://plus.unsplash.com/premium_photo-1681074963633-0e91aa0676ab?q=85&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Construction Site"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3
                className="text-3xl font-medium tracking-tight"
                style={fontSerif}
              >
                Technical Precision
              </h3>
              <p
                className="text-[#7A7A75] text-base leading-relaxed"
                style={fontJost}
              >
                Our methodology is purely clinical. We de-risk multi-billion
                pound capital investments through proprietary stress-testing and
                predictive structural modeling. Every metric is governed by a
                zero-failure mandate.
              </p>
            </div>
            <div className="space-y-6">
              <h3
                className="text-3xl font-medium tracking-tight"
                style={fontSerif}
              >
                A Century of Resilience
              </h3>
              <p
                className="text-[#7A7A75] text-base leading-relaxed"
                style={fontJost}
              >
                We do not build for the next fiscal year. We engineer for
                centuries. Our focus remains on the absolute permanence of the
                built environment, ensuring that the legacy of our clients
                remains unyielding against the passage of time.
              </p>
            </div>
          </div>
        </div>

        {/* Data Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-8 border-y border-black/10 bg-white/30 backdrop-blur-sm rounded-3xl px-12 shadow-sm">
          {[
            { label: "Aggregate Value", val: "£2.4B+" },
            { label: "Possession Sites", val: "14 Active" },
            { label: "Liability Cover", val: "£50M" },
            { label: "Asset Lifespan", val: "100yr Min" },
          ].map((item) => (
            <div key={item.label}>
              <p
                className="text-[#A68936] text-[10px] tracking-[0.3em] uppercase font-black mb-3"
                style={fontJost}
              >
                {item.label}
              </p>
              <p
                className="text-[#1A1A1A] text-4xl font-light"
                style={fontSerif}
              >
                {item.val}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
