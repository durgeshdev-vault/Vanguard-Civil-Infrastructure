"use client";

import Image from "next/image";

const STRATEGY = [
  {
    rank: "I",
    title: "Structural Sovereignty",
    desc: "We maintain absolute control over the engineering lifecycle. By eliminating sub-contractor volatility, we guarantee that every ton of concrete and every bolt meets our zero-failure mandate.",
  },
  {
    rank: "II",
    title: "Fiscal Precision",
    desc: "Capital infrastructure is a game of margins. Our proprietary cost-modeling ensures that multi-million pound investments are delivered with 99% budgetary accuracy, every single time.",
  },
  {
    rank: "III",
    title: "Generational Legacy",
    desc: "We do not build for the next decade; we build for the next century. Our assets are engineered to withstand shifting environmental and urban demands for over 100 years.",
  },
];

export default function HeroBase() {
  const fontJost = { fontFamily: "'Jost', sans-serif" };
  const fontSerif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

  return (
    <section className="bg-[#EAEAEA] py-24 lg:py-48 relative overflow-hidden border-y border-black/5">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="heavyGrid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#000"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#heavyGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="mb-24 lg:mb-40">
          <h2
            className="text-[#1A1A1A] text-[clamp(40px,7vw,90px)] leading-[0.9] font-light italic mb-12"
            style={fontSerif}
          >
            Architecting <br />
            <span className="not-italic font-medium">Permanence.</span>
          </h2>

          <p
            className="text-[#1A1A1A] text-xl lg:text-2xl leading-relaxed max-w-3xl font-light border-l-2 border-[#A68936] pl-8"
            style={fontSerif}
          >
            &quot;In an era of disposable infrastructure, we provide the
            unyielding backbone of the nation. We are the architects of what
            remains.&quot;
          </p>
        </div>

        {/* Mobile View */}
        <div className="relative lg:hidden">
          <div className="relative aspect-video overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-white">
            <Image
              src="https://images.unsplash.com/photo-1699786192866-09aa8e822a37"
              alt="Infrastructure Sovereign"
              fill
              className="object-cover transition-all duration-1000 scale-105"
              sizes="100vw"
              quality={50}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <p
                className="text-white text-sm font-light leading-none"
                style={fontSerif}
              >
                Viaduct <br /> Section 04
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24 lg:mb-40">
          <div className="space-y-20">
            {STRATEGY.map((item) => (
              <div key={item.rank} className="group">
                <div className="flex items-baseline gap-6 my-4">
                  <span className="text-[#A68936] text-2xl font-serif italic opacity-40 group-hover:opacity-100 transition-all">
                    {item.rank}
                  </span>
                  <h3
                    className="text-[#1A1A1A] text-2xl lg:text-3xl font-medium tracking-tight"
                    style={fontSerif}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className="text-[#4A4A45] text-base lg:text-lg leading-relaxed pl-10 border-l border-black/10 group-hover:border-[#A68936] transition-colors"
                  style={fontJost}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="relative hidden lg:block lg:sticky lg:top-32">
            <div className="relative  lg:aspect-4/5 overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-white">
              <Image
                src="https://images.unsplash.com/photo-1699786192866-09aa8e822a37?q=85&w=1331&auto=format&fit=crop"
                priority
                width={800}
                height={1600}
                alt="Infrastructure Sovereign"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full object-cover transition-all duration-1000 scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[#A68936] text-[9px] tracking-[0.4em] uppercase font-bold"
                    style={fontJost}
                  >
                    Operational Asset
                  </span>
                </div>
                <p
                  className="text-white text-3xl font-light leading-none"
                  style={fontSerif}
                >
                  Viaduct <br /> Section 04
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
