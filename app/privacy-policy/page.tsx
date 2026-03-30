"use client";

import Link from "next/link";

const POLICY_BLOCKS = [
  {
    title: "Data Acquisition",
    content:
      "We collect institutional data primarily through our Project Tendering Gateway and Corporate Enquiries. This includes principal names, corporate email addresses, and technical project scopes necessary for structural assessment and procurement.",
  },
  {
    title: "Information Utilization",
    content:
      "All acquired data is strictly utilized for the de-risking of infrastructure delivery, compliance with national engineering regulations, and the facilitation of professional communications regarding active or prospective commissions.",
  },
  {
    title: "Asset Protection",
    content:
      "Vanguard Infrastructure employs industry-standard encryption and secure server protocols to ensure the absolute integrity of your technical designs and corporate identity. We do not sell or trade institutional data to third-party entities.",
  },
  {
    title: "Legal Disclosures",
    content:
      "We reserve the right to disclose information when required by UK Law or industry regulators to maintain national safety standards, protect our intellectual property, or adhere to the UK Bribery Act 2010.",
  },
];

export default function PrivacyPolicy() {
  const fontJost = { fontFamily: "'Jost', sans-serif" };
  const fontSerif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

  return (
    <section className="bg-[#F2F2F0] py-20 lg:py-32 border-t border-black/5">
      <div className="max-w-5xl mx-auto px-6 pt-10 md:pt-5 lg:px-10">
        {/* Simple Header */}
        <div className="mb-24">
          <h2
            className="text-[#1A1A1A] text-5xl lg:text-7xl font-light mb-6"
            style={fontSerif}
          >
            Privacy Policy
          </h2>
        </div>

        {/* Info */}
        <div className="space-y-20">
          {POLICY_BLOCKS.map((block, index) => (
            <div
              key={index}
              className="grid md:grid-cols-12 gap-8 lg:gap-16 border-b border-black/5 pb-16 last:border-0"
            >
              <div className="md:col-span-4">
                <h3
                  className="text-[#1A1A1A] text-sm font-bold uppercase tracking-[0.2em]"
                  style={fontJost}
                >
                  {block.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p
                  className="text-[#4A4A45] text-base lg:text-lg leading-relaxed font-light"
                  style={fontJost}
                >
                  {block.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rights Section */}
        <div className="mt-24 p-12 bg-white/40 rounded-[2.5rem] border border-white/60 backdrop-blur-xl">
          <h4
            className="text-[#1A1A1A] text-lg font-bold mb-6"
            style={fontJost}
          >
            Institutional Rights
          </h4>
          <p
            className="text-[#7A7A75] text-sm leading-relaxed mb-8 max-w-2xl"
            style={fontJost}
          >
            Under the General Data Protection Regulation (GDPR), you retain the
            right to request access to, or correction of your
            institutional data within our Project Management systems.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-6"
          >
            <div className="w-12 h-12 rounded-full border border-[#A68936]/30 flex items-center justify-center group-hover:bg-[#A68936] group-hover:border-[#A68936] transition-all duration-500">
              <svg
                className="w-4 h-4 text-[#A68936] group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span
              className="text-[#1A1A1A] text-[10px] tracking-[0.3em] uppercase font-bold"
              style={fontJost}
            >
              Request Data Audit
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
