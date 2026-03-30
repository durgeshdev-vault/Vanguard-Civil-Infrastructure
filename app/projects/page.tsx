"use client";

import Link from "next/link";
import Image from "next/image";

const PROJECTS = [
  {
    id: "PRJ-001",
    title: "Blackwall Tunnel Approach",
    category: "Civil Engineering",
    location: "London, UK",
    value: "£84M",
    image:
      "https://images.unsplash.com/photo-1487491424367-7571f9afbb30?q=85&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2026",
  },
  {
    id: "PRJ-002",
    title: "The Shard Utility Matrix",
    category: "Urban Infrastructure",
    location: "Southwark, London",
    value: "£140M",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=1169&auto=format&fit=crop",
    year: "2024",
  },
  {
    id: "PRJ-003",
    title: "HS2 Viaduct Section 4",
    category: "Transport & Rail",
    location: "Birmingham",
    value: "£112M",
    image:
      "https://images.unsplash.com/photo-1699786192866-09aa8e822a37?q=85&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2023",
  },
];

export default function ProjectsSection() {
  const fontJost = { fontFamily: "'Jost', sans-serif" };
  const fontSerif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

  return (
    <section className="bg-[#F2F2F0] py-24 lg:py-40 border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8"></div>
            <h2
              className="text-[#1A1A1A] text-[clamp(44px,6vw,90px)] leading-[0.85] font-light"
              style={fontSerif}
            >
              Engineering <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #A68936" }}
              >
                Landmarks
              </span>
            </h2>
          </div>
          <div className="hidden lg:block text-right">
            <p
              className="text-[#A68936] text-[10px] tracking-[0.6em] uppercase mb-3 font-bold"
              style={fontJost}
            >
              2023 — 2026
            </p>
            <p
              className="text-[#7A7A75] text-[14px] max-w-65 leading-relaxed font-semibold"
              style={fontJost}
            >
              A clinical record of high-complexity assets delivered to national
              specifications.
            </p>
          </div>
        </div>

        {/* Project List*/}
        <div className="flex flex-col gap-24 lg:gap-40">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex flex-col lg:flex-row gap-5 md:gap-16  items-center"
            >
              <p
                className="text-[#A68936] text-[12px] tracking-[0.4em] uppercase font-bold md:hidden"
                style={fontJost}
              >
                {project.category}
              </p>

              <div className="relative w-full lg:w-[60%] overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] border border-black/5 bg-[#E2E2DF] shadow-xl shadow-black/45 transition-all duration-700 group-hover:shadow-[0_40px_40px_rgba(166,137,54,0.15)] group-hover:-translate-y-2">
                <Image
                  src={project.image}
                  height={1600}
                  width={1200}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[0.3] brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A]/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-[40%] flex flex-col">
                <p
                  className="text-[#A68936] text-[12px] tracking-[0.4em] uppercase mb-6 font-bold hidden md:block"
                  style={fontJost}
                >
                  {project.category}
                </p>
                <h3
                  className="text-[#1A1A1A] text-4xl lg:text-6xl font-light mb-10 group-hover:translate-x-4 transition-transform duration-500"
                  style={fontSerif}
                >
                  {project.title}
                </h3>

                {/* Specs Tab */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-10 border-t border-black/10 pt-10 mb-12">
                  <div>
                    <p
                      className="text-[#8A8A85] text-[10px] tracking-[0.3em] uppercase mb-2 font-bold"
                      style={fontJost}
                    >
                      Location
                    </p>
                    <p
                      className="text-[#1A1A1A] text-base font-medium"
                      style={fontJost}
                    >
                      {project.location}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[#8A8A85] text-[10px] tracking-[0.3em] uppercase mb-2 font-bold"
                      style={fontJost}
                    >
                      Capital Value
                    </p>
                    <p
                      className="text-[#A68936] text-base font-bold"
                      style={fontJost}
                    >
                      {project.value}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[#8A8A85] text-[10px] tracking-[0.3em] uppercase mb-2 font-bold"
                      style={fontJost}
                    >
                      Completion
                    </p>
                    <p
                      className="text-[#1A1A1A] text-base font-medium"
                      style={fontJost}
                    >
                      {project.year}
                    </p>
                  </div>
                  <div className="flex items-end">
                    <Link
                      href={`/projects/${project.id.toLowerCase()}`}
                      className="group/link flex items-center gap-3"
                    >
                      <span
                        className="text-[#1A1A1A] text-[11px] tracking-[0.3em] uppercase font-bold underline underline-offset-12px decoration-[#A68936]/40 group-hover/link:decoration-[#A68936] transition-all"
                        style={fontJost}
                      >
                        Technical Case
                      </span>
                      <svg
                        className="w-4 h-4 text-[#A68936] transform transition-transform group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Large Background Text (Index) */}
              <div
                className="absolute -bottom-16 -right-10 text-[240px] font-bold text-black/3 pointer-events-none select-none"
                style={fontSerif}
              >
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
