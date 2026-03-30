"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M4.5 3A1.5 1.5 0 103 4.5 1.5 1.5 0 004.5 3zM3.1 7h2.8v10H3.1zM13 7c-2 0-3.1 1-3.4 1.7V7H6.8v10h2.8v-5.3c0-1.4.6-2.2 1.8-2.2s1.8.8 1.8 2.2V17H16v-5.8C16 8.4 14.8 7 13 7z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M15.3 2h2.5L11.6 8.6 19 18h-5.2l-4.4-5.8L4.2 18H1.7l6.6-7.1L1 2h5.3l4 5.3L15.3 2zm-.9 14.4h1.4L5.7 3.4H4.2l10.2 13z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const fontJost = { fontFamily: "'Jost', sans-serif" };
  const fontSerif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

  return (
    <footer className="bg-[#E2E2DF] border-t border-[#A68936]/30 ">
      <div className="max-w-7xl  px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 lg:gap-32">
          {/* Compnay details */}
          <div className="md:col-span-6 lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-4 group w-fit mb-10"
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
                    className="transition-colors duration-300 group-hover:stroke-[#1A1A1A]"
                  />
                  <polygon
                    points="16,8 24,12.5 24,19.5 16,24 8,19.5 8,12.5"
                    fill="#A68936"
                    opacity="0.25"
                    className="transition-all duration-300 group-hover:opacity-40"
                  />
                </svg>
              </div>
              <div className="leading-none">
                <span
                  className="block text-[#1A1A1A] text-[20px] tracking-[0.12em] uppercase font-medium transition-colors duration-300 group-hover:text-[#A68936]"
                  style={fontSerif}
                >
                  Vanguard
                </span>
                <span
                  className="block text-[#A68936] text-[11px] tracking-[0.32em] uppercase mt-0.75 font-bold"
                  style={fontJost}
                >
                  Infrastructure
                </span>
              </div>
            </Link>

            <p
              className="text-[#4A4A45] text-[16px] leading-relaxed max-w-sm mb-12 font-medium"
              style={fontJost}
            >
              Engineering national landmarks with clinical precision and
              absolute fiscal accountability. Building for the century, not the
              contract.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 flex items-center justify-center border-2 border-[#A68936]/40 text-[#4A4A45] hover:bg-[#A68936] hover:text-white transition-all duration-500 rounded-lg shadow-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16 lg:pl-20">
            {/* Nav links */}
            <div>
              <p
                className="text-[#A68936] text-[12px] tracking-[0.4em] uppercase mb-10 font-black"
                style={fontJost}
              >
                Directory
              </p>
              <ul className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-4 text-[#4A4A45] hover:text-[#1A1A1A] transition-colors duration-300"
                    >
                      <span
                        className="text-[15px] tracking-wide font-bold uppercase hover:border-b"
                        style={fontJost}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p
                className="text-[#A68936] text-[12px] tracking-[0.4em] uppercase mb-10 font-black"
                style={fontJost}
              >
                Headquarters
              </p>
              <div className="space-y-10">
                <div>
                  <p
                    className="text-[#1A1A1A] text-[16px] leading-relaxed mb-2 font-bold"
                    style={fontJost}
                  >
                    12 Vanguard House, Canary Wharf
                  </p>
                  <p
                    className="text-[#7A7A75] text-[14px] uppercase tracking-widest font-bold"
                    style={fontJost}
                  >
                    London, E14 5AB
                  </p>
                </div>
                <div className="flex flex-col gap-4 pt-4">
                  <a
                    href="mailto:durgesh@durgeshdev.in"
                    className="text-[#4A4A45] hover:text-[#A68936] text-[15px] font-bold border-b border-black/5 w-fit pb-1 transition-all"
                    style={fontJost}
                  >
                    durgesh@durgeshdev.in
                  </a>
                  <a
                    href="tel:+442071234567"
                    className="text-[#4A4A45] hover:text-[#A68936] text-[15px] font-bold border-b border-black/5 w-fit pb-1 transition-all"
                    style={fontJost}
                  >
                    +44 (0) 20 7946 0851
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom (copyright and all)*/}
      <div className="border-t-2 border-[#A68936]/10 bg-black/3">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-10 gap-y-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1A1A1A] hover:text-[#A68936] text-[12px] tracking-widest uppercase font-black transition-colors"
                style={fontJost}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p
            className="text-[#7A7A75] text-[12px] tracking-widest uppercase font-bold"
            style={fontJost}
          >
            © {year} Vanguard Infrastructure Ltd.{" "}
            <span className="hidden md:inline mx-3">|</span> Built for
            Permanence.
          </p>
        </div>
      </div>
    </footer>
  );
}
