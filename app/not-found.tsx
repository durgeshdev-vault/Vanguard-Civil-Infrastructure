"use client";

import Link from "next/link";

export default function NotFound() {
  const fontJost = { fontFamily: "'Jost', sans-serif" };
  const fontSerif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

  return (
    <section className="bg-[#F2F2F0] min-h-svh flex items-center justify-center relative overflow-hidden">
      {/* Background Architectural Markings */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="errorGrid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="40" cy="40" r="1" fill="#1A1A1A" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#errorGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
        {/* Bg - No.  */}
        <h1
          className="text-[#1A1A1A] text-[clamp(120px,20vw,300px)] leading-none font-light opacity-[0.08] select-none"
          style={fontSerif}
        >
          404
        </h1>

        <div className="-mt-10 lg:-mt-25">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className="text-[#A68936] text-[11px] tracking-[0.5em] uppercase font-bold"
              style={fontJost}
            >
              Technical Fault
            </span>
            <div className="w-12 h-px bg-[#A68936]" />
          </div>

          <h2
            className="text-[#1A1A1A] text-4xl lg:text-6xl font-light mb-8"
            style={fontSerif}
          >
            Coordinates{" "}
            <span className="italic text-[#A68936]">Not Found.</span>
          </h2>

          <p
            className="text-[#7A7A75] text-base leading-relaxed max-w-md mx-auto mb-12 font-medium"
            style={fontJost}
          >
            The requested data does not exist at this location. It might have
            been decommissioned or relocated by our developer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/"
              className="group relative px-12 py-5 bg-[#1A1A1A] text-[#F2F2F0] rounded-full overflow-hidden transition-all shadow-xl shadow-black/10"
            >
              <div className="absolute inset-0 bg-[#A68936] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <span
                className="relative z-10 text-[11px] tracking-[0.4em] uppercase font-bold"
                style={fontJost}
              >
                Return to Site
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
