"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const fontJost = { fontFamily: "'Jost', sans-serif" };
  const fontSerif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border-b border-[#A68936]/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
              : "bg-white py-8"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4 group"
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative w-10 h-10 shrink-0">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <polygon
                  points="16,2 30,10 30,22 16,30 2,22 2,10"
                  fill="none"
                  stroke="#A68936"
                  strokeWidth="1.8"
                  className="transition-all duration-300 group-hover:stroke-[#1A1A1A]"
                />
                <polygon
                  points="16,8 24,12.5 24,19.5 16,24 8,19.5 8,12.5"
                  fill="#A68936"
                  className="transition-all duration-300 group-hover:fill-[#1A1A1A]"
                  opacity="0.25"
                />
              </svg>
            </div>
            <div className="leading-none">
              <span
                className="block text-[#1A1A1A] text-[18px] font-medium tracking-[0.15em] uppercase transition-all"
                style={{ ...fontSerif }}
              >
                Vanguard
              </span>
              <span
                className="block text-[#A68936] text-[11px] tracking-[0.3em] uppercase mt-0.5 font-bold"
                style={{ ...fontJost }}
              >
                Infrastructure
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-5 py-3 group"
              >
                <span
                  className="text-[#1A1A1A] text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 font-bold"
                  style={{ ...fontJost }}
                >
                  {link.label}
                </span>
                <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-[#A68936] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA*/}
          <div className="hidden lg:flex items-center gap-6">
            <div className="w-px h-6 bg-[#A68936]/30" />
            <Link
              href="/contact"
              className="group relative flex items-center gap-3 px-8 py-3.5 overflow-hidden border-2 border-[#A68936] hover:border-[#1A1A1A] rounded-full transition-all duration-300 bg-white shadow-sm"
            >
              <span className="absolute inset-0 bg-[#A68936] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span
                className="relative text-[#A68936] group-hover:text-white text-[12px] tracking-[0.2em] uppercase transition-colors duration-300 font-black"
                style={fontJost}
              >
                Get in Touch
              </span>
              <svg
                className="relative w-4 h-4 text-[#A68936] group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M2 6h8M7 3l3 3-3 3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-end gap-1.25 w-8 h-8 relative z-50 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {/* Top Line*/}
            <span
              className={`h-0.5 w-full bg-[#1A1A1A] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.75" : ""
              }`}
            />

            {/* Middle Line */}
            <span
              className={`h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-3/4 group-hover:w-full"
              }`}
            />

            {/* Bottom Line: Reduced translation from -9px to -7px */}
            <span
              className={`h-0.5 w-full bg-[#1A1A1A] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.75" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-[#F2F2F0] flex flex-col justify-between
          transition-all duration-700 cubic-bezier(0.85, 0, 0.15, 1)
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#A68936]/30 to-transparent" />

        <nav className="flex flex-col justify-center flex-1 px-10 pt-28 pb-10 gap-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between py-6 border-b border-[#A68936]/20"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(20px)",
                transitionProperty: "all",
                transitionDuration: "600ms",
                transitionTimingFunction: "ease",
                transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
              }}
            >
              <span
                className="text-[#1A1A1A] text-2xl font-light tracking-tight group-hover:text-[#A68936] transition-colors"
                style={fontSerif}
              >
                {link.label}
              </span>
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-12 flex items-center justify-center py-4 bg-[#A68936] rounded-2xl text-white text-[11px] tracking-[0.3em] uppercase font-black shadow-lg"
            style={{
              ...fontJost,
              opacity: menuOpen ? 1 : 0,
              transition: "opacity 0.8s ease 400ms",
            }}
          >
            Consultation
          </Link>
        </nav>

        {/* Nav - Footer Mobile Menu */}
        <div
          className="px-10 pb-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-[#1A1A1A] text-[12px] tracking-widest uppercase font-bold"
          style={fontJost}
        >
          <span>© {new Date().getFullYear()} Vanguard Infrastructure</span>
        </div>
      </div>
    </>
  );
}
