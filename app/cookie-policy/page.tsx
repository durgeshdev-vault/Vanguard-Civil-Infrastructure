"use client";

const COOKIE_TYPES = [
  {
    title: "Essential Cookies",
    desc: "These are necessary for the website to function properly, such as enabling secure log-ins for the Project Gateway or managing your privacy preferences.",
    status: "Always Active",
  },
  {
    title: "Analytics Cookies",
    desc: "We use these to understand how visitors interact with our project archives and service pages. This data is anonymized and helps us improve our digital infrastructure.",
    status: "Optional",
  },
  {
    title: "Preference Cookies",
    desc: "These allow the site to remember choices you make (such as your region or font size preferences) to provide a more personalized experience.",
    status: "Optional",
  },
];

export default function CookiePolicy() {
  const fontJost = { fontFamily: "'Jost', sans-serif" };
  const fontSerif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

  return (
    <section className="bg-[#F2F2F0] py-20 lg:py-32 border-t border-black/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20 mt-11">
          <h2
            className="text-[#1A1A1A] text-5xl lg:text-7xl font-light mb-6"
            style={fontSerif}
          >
            Cookie Policy
          </h2>
          <p
            className="text-[#7A7A75] text-sm tracking-widest uppercase font-medium"
            style={fontJost}
          >
            Last Updated: March 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-stone max-w-none mb-20">
          <p
            className="text-[#4A4A45] text-lg leading-relaxed mb-6"
            style={fontJost}
          >
            Vanguard Infrastructure uses cookies to enhance your browsing
            experience and analyze our website traffic. By using our site, you
            agree to our use of cookies as outlined in this policy.
          </p>
          <p
            className="text-[#7A7A75] text-sm leading-relaxed"
            style={fontJost}
          >
            Cookies are small text files stored on your device. They help us
            recognize you on future visits and ensure our technical designs and
            project data load efficiently.
          </p>
        </div>

        {/* Cookie Categories */}
        <div className="space-y-6">
          {COOKIE_TYPES.map((item, index) => (
            <div
              key={index}
              className="bg-white/40 border border-black/5 p-8 lg:p-10 rounded-3xl transition-all hover:bg-white/60"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                <h3
                  className="text-[#1A1A1A] text-xl font-bold tracking-tight"
                  style={fontJost}
                >
                  {item.title}
                </h3>
                <span
                  className={`text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border ${item.status === "Always Active" ? "border-[#A68936] text-[#A68936]" : "border-black/10 text-[#8A8A85]"} font-bold`}
                  style={fontJost}
                >
                  {item.status}
                </span>
              </div>
              <p
                className="text-[#4A4A45] text-base leading-relaxed max-w-3xl"
                style={fontJost}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Management Note */}
        <div className="mt-20 border-t border-black/10 pt-12">
          <h4
            className="text-[#1A1A1A] text-sm font-bold uppercase tracking-widest mb-4"
            style={fontJost}
          >
            Managing Your Preferences
          </h4>
          <p
            className="text-[#7A7A75] text-sm leading-relaxed mb-8"
            style={fontJost}
          >
            You can choose to disable cookies through your individual browser
            settings. Please note that disabling essential cookies may affect
            the functionality of our Project Tendering portals.
          </p>
        </div>
      </div>
    </section>
  );
}
