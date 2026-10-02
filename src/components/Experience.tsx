import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[#1f242d] bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#c0392b]" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c0392b]">
            Experience
          </p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-16">
          Internship
        </h2>

        <div className="max-w-4xl relative group perspective-1000">
          {/* Layered offset 3D depth plate */}
          <div
            aria-hidden="true"
            className="absolute -inset-2 bg-[#0c1017] border border-[#232b38]/60 rounded-sm transform translate-x-3 translate-y-3 -z-20 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
          />
          {/* Top-right registration notch */}
          <div
            aria-hidden="true"
            className="absolute -top-2.5 -right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#c0392b]/70 -z-10"
          />

          <div className="border border-[#252f3e] border-t-[#3f516a] bg-[#0c0f14] p-8 card-tilt-3d">
            {/* Header row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#1f2734] pb-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rotate-45 bg-[#c0392b]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#8ea3bf]">Practical Exposure</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5">
                  Cybersecurity and Ethical Hacking Intern
                </h3>
                <p className="text-[#c0392b] text-sm sm:text-base font-bold tracking-wide">Innov8 Edu Tech Solutions</p>
              </div>
              <div className="md:text-right">
                <p className="text-sm font-semibold text-white">07 May 2026 - 08 June 2026</p>
                <p className="text-sm text-[#8ea3bf] mt-1 font-medium">Coimbatore, Tamil Nadu</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">30-day internship</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#a3b5ca] leading-relaxed mb-10 max-w-2xl font-normal">
              Completed a structured 30-day internship focused on gaining foundational and practical exposure
              to cybersecurity concepts, network analysis, and ethical hacking principles.
            </p>

            {/* Two columns: learning areas + tools */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-[0.16em] mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8ea3bf]" />
                  Key Learning Areas
                </p>
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-300 font-normal">
                  {[
                    "Cybersecurity fundamentals and CIA Triad",
                    "Computer networking and network protocols",
                    "Network traffic analysis using Wireshark",
                    "Linux and Windows operating system security",
                    "Information security and risk management",
                    "Cryptography and secure communication",
                    "Malware analysis and reconnaissance",
                    "Web application security and testing",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#c0392b] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-[0.16em] mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b]" />
                  Tools Explored
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Nmap", "Wireshark", "Burp Suite", "Nikto"].map((tool) => (
                    <span
                      key={tool}
                      className="border border-[#263447] border-t-[#3b4c64] bg-[#0e131b] text-[#8ea3bf] text-xs px-3.5 py-1.5 tracking-wide font-medium hover:border-[#8ea3bf] hover:text-white transition-colors duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
