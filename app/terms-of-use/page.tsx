"use client";

const TERMS = [
  {
    title: "Intellectual Property",
    content:
      "All designs, project images, and content on this website are the property of Vanguard Infrastructure. You may view and download material for personal, non-commercial use only.",
  },
  {
    title: "Accuracy of Information",
    content:
      "While we strive to keep our project data up to date, the information on this site is for general purposes. For specific project data or contract details, please contact our office directly.",
  },
  {
    title: "External Links",
    content:
      "Our website may contain links to third-party sites (such as partners or industry regulators). We are not responsible for the content or privacy practices of those external websites.",
  },
  {
    title: "Liability",
    content:
      "Vanguard Infrastructure is not liable for any damages arising from the use of this website. We do not guarantee that the site will be error-free or constantly available.",
  },
];

export default function TermsOfUse() {
  const fontJost = { fontFamily: "'Jost', sans-serif" };
  const fontSerif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

  return (
    <section className="bg-[#F2F2F0] py-20 lg:py-32 border-t border-black/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20">
          <h2
            className="text-[#1A1A1A] text-5xl lg:text-7xl font-light mb-6"
            style={fontSerif}
          >
            Terms of Use
          </h2>
          <p
            className="text-[#7A7A75] text-sm tracking-widest uppercase font-medium"
            style={fontJost}
          >
            Last Updated: February 2026
          </p>
        </div>

        {/* List Layout */}
        <div className="space-y-16">
          {TERMS.map((item, index) => (
            <div key={index} className="grid md:grid-cols-12 gap-6 group">
              <div className="md:col-span-4">
                <h3
                  className="text-[#1A1A1A] text-lg font-bold uppercase tracking-wider group-hover:text-[#A68936] transition-colors"
                  style={fontJost}
                >
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p
                  className="text-[#4A4A45] text-base leading-relaxed"
                  style={fontJost}
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Note */}
        <div className="mt-24 p-10 bg-white/50 rounded-3xl border border-black/5">
          <p className="text-[#1A1A1A] text-sm text-center" style={fontJost}>
            If you have any questions regarding these terms, please reach out to
            us at{" "}
            <a
              href="mailto:durgesh@durgeshdev.in"
              className="text-[#A68936] underline underline-offset-4 font-bold"
            >
              durgesh@durgeshdev.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
