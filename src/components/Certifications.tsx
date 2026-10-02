import React from "react";

const certifications = [
  {
    name: "Joy of Computing Using Python",
    issuer: "NPTEL",
    meta: [{ label: "Score", value: "60%" }, { label: "Result", value: "Elite" }],
  },
  {
    name: "Aptis General English Proficiency",
    issuer: "British Council",
    meta: [{ label: "Level", value: "B2" }],
  },
  {
    name: "Introduction to Cyber Security",
    issuer: "Cisco Networking Academy",
    meta: [],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 border-t border-[#1f242d] bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#c0392b]" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c0392b]">
            Certifications
          </p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-16">
          Credentials
        </h2>

        <div className="max-w-3xl space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="relative group border border-[#252f3e] border-t-[#3b4c64] bg-[#0c0f14] p-6 transition-all duration-300 hover:border-[#8ea3bf] hover:-translate-y-0.5"
            >
              {/* Document corner notch */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#c0392b]/70"
              />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8ea3bf]">
                      SPECIMEN 0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm font-bold text-[#c0392b] mt-1">{cert.issuer}</p>
                </div>
                {cert.meta.length > 0 && (
                  <div className="flex gap-2 flex-shrink-0">
                    {cert.meta.map(({ label, value }) => (
                      <span
                        key={label}
                        className="border border-[#263447] border-t-[#3b4c64] bg-[#10151f] text-[#8ea3bf] text-xs px-3.5 py-1.5 tracking-wide font-semibold"
                      >
                        {label}: {value}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
