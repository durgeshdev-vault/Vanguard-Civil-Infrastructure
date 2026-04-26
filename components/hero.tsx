"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HeroBase from "./herobase";
import Image from "next/image";

const STATS = [
  { value: "25+", label: "Years of Excellence", detail: "Est. 1999" },
  { value: "340+", label: "Projects Delivered", detail: "Across 14 sectors" },
  {
    value: "£2.4B",
    label: "Infrastructure Built",
    detail: "Total asset value",
  },
  { value: "98%", label: "Client Retention", detail: "Institutional rate" },
];

export default function HeroSection() {
  const [isAnimate, setIsAnimate] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setIsAnimate(true);
    });

    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - left) / width,
        y: (e.clientY - top) / height,
      });
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const getFade = (delay: number) => ({
    opacity: isAnimate ? 1 : 0,
    transform: isAnimate ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  });

  const fontJost = { fontFamily: "'Jost', sans-serif" };
  const fontSerif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

  return (
    <>
      <section
        ref={heroRef}
        className="relative flex flex-col overflow-hidden bg-[#E2E2DF] min-h-[110svh] lg:min-h-svh"
      >
        <div
          className="absolute inset-[-5%] will-change-transform brightness-[0.55] grayscale-[0.3] contrast-[1.1] z-0"
          style={{
            transform: `translate(${(mousePos.x - 0.5) * 25}px, ${(mousePos.y - 0.5) * 15}px) scale(1.05)`,
            transition: "transform 0.8s cubic-bezier(0.2, 0, 0.2, 1)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1487491424367-7571f9afbb30"
            alt="Engineering Background"
            fill
            priority
            quality={50}
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 z-1">
          <div className="absolute inset-0 bg-linear-to-r from-[#E2E2DF] via-[#E2E2DF]/80 to-transparent w-[60%] lg:w-[50%]" />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#E2E2DF] to-transparent" />

          <div className="absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-black/20 to-transparent" />
        </div>

        <div className="absolute top-0 right-0 w-200 h-200 pointer-events-none opacity-[0.2] z-2">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
            {[0, 60, 120, 180, 240, 300].map((o) => (
              <line
                key={o}
                x1="600"
                y1={o}
                x2={o}
                y2="600"
                stroke="#1A1A1A"
                strokeWidth="0.5"
              />
            ))}
            {[240, 380, 520].map((r, i) => (
              <circle
                key={r}
                cx="600"
                cy="0"
                r={r}
                stroke="#1A1A1A"
                strokeWidth={0.5 - i * 0.1}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-1 w-full flex-1 flex flex-col justify-center py-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-11 xl:col-span-7">
              <h1 className="my-20" style={getFade(300)}>
                <span
                  className="block text-[#1A1A1A] leading-[0.85] text-[clamp(54px,8.5vw,90px)] font-light"
                  style={fontSerif}
                >
                  Engineering
                </span>
                <span
                  className="block text-[#1A1A1A] leading-[0.85] text-[clamp(54px,8.5vw,130px)] font-light"
                  style={fontSerif}
                >
                  Sovereignty.
                </span>
              </h1>

              <p
                className="text-[#1A1A1A] text-[19px] leading-relaxed max-w-md mb-12 font-medium opacity-90"
                style={{ ...fontJost, ...getFade(420) }}
              >
                Delivering high-capital assets through mathematical precision
                and clinical project management. We build the skeleton of the
                nation.
              </p>

              <div className="flex flex-wrap gap-6" style={getFade(580)}>
                <Link
                  href="/contact"
                  className="group relative px-12 py-5 bg-[#1A1A1A] text-white rounded-full overflow-hidden transition-all shadow-2xl shadow-black/20"
                >
                  <div className="absolute inset-0 bg-[#A68936] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span
                    className="relative z-10 text-[11px] tracking-[0.4em] uppercase font-bold"
                    style={fontJost}
                  >
                    Initiate Tender
                  </span>
                </Link>
                <Link
                  href="/projects"
                  className="group px-10 py-5 border-2 border-black/10 bg-white/20 backdrop-blur-md hover:bg-white/60 hover:border-[#A68936] transition-all rounded-full"
                >
                  <span
                    className="text-[#1A1A1A] text-[11px] tracking-[0.3em] uppercase font-bold"
                    style={fontJost}
                  >
                    Our Projects
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full" style={getFade(720)}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-x border-black/5 bg-white/80 backdrop-blur-2xl shadow-[0_-20px_60px_rgba(0,0,0,0.1)] rounded-t-[3rem]">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`px-10 py-12 hover:bg-white rounded-[3rem] transition-all group ${i < 3 ? "border-r border-black/5" : ""}`}
                >
                  <div
                    className="text-[#A68936] text-5xl font-light leading-none mb-3 group-hover:scale-105 transition-transform origin-left"
                    style={fontSerif}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[#1A1A1A] text-[11px] tracking-[0.2em] uppercase font-black"
                    style={fontJost}
                  >
                    {stat.label}
                  </div>
                  <div
                    className="text-[#8A8A85] text-[10px] mt-2 font-medium"
                    style={fontJost}
                  >
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <HeroBase />
    </>
  );
}
