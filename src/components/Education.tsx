import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-[#1f242d] bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#c0392b]" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c0392b]">
            Education
          </p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-16">
          Academic Background
        </h2>

        <div className="max-w-4xl space-y-12">
          {/* Undergraduate degree: Elevated Geometric Stage */}
          <div className="relative group perspective-1000">
            <div
              aria-hidden="true"
              className="absolute -inset-2 bg-[#0c1017] border border-[#232b38]/60 rounded-sm transform translate-x-3 translate-y-3 -z-20 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
            />
            <div
              aria-hidden="true"
              className="absolute -top-2.5 -right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#c0392b]/70 -z-10"
            />

            <div className="border border-[#252f3e] border-t-[#3f516a] bg-[#0c0f14] p-8 card-tilt-3d">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b]" />
                    <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#8ea3bf]">Primary Degree</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5">
                    B.Sc. Computer Science specialized in Cyber Security
                  </h3>
                  <p className="text-[#c0392b] font-bold text-sm sm:text-base mb-2">Dr. N.G.P. Arts &amp; Science College</p>
                  <p className="text-sm font-medium text-[#8ea3bf]">Coimbatore, Tamil Nadu, India</p>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <span className="inline-block text-xs font-bold tracking-[0.14em] uppercase border border-[#c0392b]/60 bg-[#1a0f0d] text-[#c0392b] px-4 py-1.5 mb-3">
                    Currently Pursuing
                  </span>
                  <p className="text-base font-bold text-white">Current Percentage: 78.2%</p>
                </div>
              </div>
            </div>
          </div>

          {/* School: Dimensional Score Cards */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8ea3bf]" />
              <h3 className="text-lg sm:text-xl font-black text-white">
                Sindhi Vidyalaya Matriculation Higher Secondary School
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-6">School Education</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { label: "HSC II", value: "64%" },
                { label: "HSC I", value: "54.8%" },
                { label: "SSLC", value: "72.6%" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="relative group border border-[#252f3e] border-t-[#3b4c64] bg-[#0c0f14] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8ea3bf]"
                >
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2 flex justify-between items-center">
                    <span>{label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b]" />
                  </p>
                  <p className="text-2xl font-black text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
