"use client";

import { useState, useEffect } from "react";

export default function ContactSection() {
  const fontJost = { fontFamily: "'Jost', sans-serif" };
  const fontSerif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

  const [isPending, setIsPending] = useState(false);
  const [showToast, setShowToast] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsPending(true);

    setTimeout(() => {
      setIsPending(false);
      setShowToast(true);
    }, 2000);
  }

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const inputClasses =
    "w-full bg-transparent border-b border-black/10 py-4 outline-none focus:border-[#A68936] transition-all text-[#1A1A1A] placeholder:text-[#8A8A85] text-base font-medium";

  const labelClasses =
    "text-[#8A8A85] text-[11px] tracking-[0.3em] uppercase font-black block mb-1";

  return (
    <section className="bg-[#F2F2F0] py-24 lg:py-40 relative overflow-hidden border-t border-black/5">
      <div
        className={`fixed top-10 left-1/2 -translate-x-1/2 z-100 transition-all duration-700 ease-out flex items-center gap-4 px-8 py-4 bg-[#0d7818] border border-[#A68936]/30 shadow-2xl rounded-4xl ${
          showToast
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-12 pointer-events-none"
        }`}
      >
        <span
          className="text-white text-center text-[10px] md:text-[11px] md:tracking-[0.3em] uppercase font-bold"
          style={fontJost}
        >
          Thanks!
          <br className="block md:hidden" /> Our Director will contact you
          briefly.
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Company Details */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex items-center gap-4 my-8 md:mb-8 md:-mt-12.5">
              <span
                className="text-[#A68936] text-[11px] tracking-[0.5em] uppercase font-black"
                style={fontJost}
              >
                Let&apos;s get connected.
              </span>
            </div>

            <h2
              className="text-[#1A1A1A] text-[clamp(44px,5vw,82px)] leading-[0.9] font-light mb-12"
              style={fontSerif}
            >
              Initiate <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #A68936" }}
              >
                A Commission.
              </span>
            </h2>

            <div className="space-y-12">
              <div>
                <p className={labelClasses} style={fontJost}>
                  Headquarters
                </p>
                <p
                  className="text-[#1A1A1A] text-xl font-light leading-snug"
                  style={fontSerif}
                >
                  12 Vanguard House, Canary Wharf
                  <br />
                  London, United Kingdom, E14 5AB
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-black/10">
                <div>
                  <p className={labelClasses} style={fontJost}>
                    Enquiries
                  </p>
                  <a
                    href="mailto:durgesh@durgeshdev.in"
                    className="text-[#1A1A1A] text-base hover:text-[#A68936] transition-colors font-bold border-b border-black/5 pb-1"
                    style={fontJost}
                  >
                    durgesh@durgeshdev.in
                  </a>
                </div>
                <div>
                  <p className={labelClasses} style={fontJost}>
                    Direct Line
                  </p>
                  <a
                    href="tel:+442071234567"
                    className="text-[#1A1A1A] text-base hover:text-[#A68936] transition-colors font-bold border-b border-black/5 pb-1"
                    style={fontJost}
                  >
                    +44 (0) 20 7946 0851
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="relative bg-white/50 backdrop-blur-2xl p-10 lg:p-16 rounded-[2.5rem] border border-white shadow-[0_30px_70px_rgba(0,0,0,0.05)] transition-all hover:bg-white/70">
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group">
                    <label className={labelClasses} style={fontJost}>
                      Principal Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Legal Name"
                      className={inputClasses}
                      style={fontJost}
                    />
                  </div>
                  <div className="group">
                    <label className={labelClasses} style={fontJost}>
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.co"
                      className={inputClasses}
                      style={fontJost}
                    />
                  </div>
                </div>

                <div className="group">
                  <label className={labelClasses} style={fontJost}>
                    Infrastructure Sector
                  </label>
                  <select
                    className={`${inputClasses} cursor-pointer`}
                    style={fontJost}
                  >
                    <option>Civil Engineering</option>
                    <option>Urban Infrastructure</option>
                    <option>Transport & Rail</option>
                    <option>Industrial Assets</option>
                  </select>
                </div>

                <div className="group">
                  <label className={labelClasses} style={fontJost}>
                    Brief Project Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Summarize technical requirements..."
                    className={`${inputClasses} resize-none`}
                    style={fontJost}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="group relative w-full py-6 bg-[#1A1A1A] overflow-hidden rounded-full transition-all duration-500 shadow-xl hover:shadow-[#A68936]/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-[#A68936] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span
                    className="relative z-10 text-white text-[8px] md:text-[11px] tracking-[0.5em] uppercase font-black transition-colors"
                    style={fontJost}
                  >
                    {isPending ? "processing inquiry.." : "Submit Inquiry"}
                  </span>
                </button>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <p
                    className="text-[#8A8A85] text-[10px] text-center tracking-[0.2em] uppercase font-bold"
                    style={fontJost}
                  >
                    {isPending
                      ? "Processing your data submission"
                      : "Direct Principal Engineer assessment within 48h"}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
