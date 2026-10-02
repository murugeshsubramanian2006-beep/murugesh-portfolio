import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-[#1f242d] bg-transparent relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#c0392b]" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c0392b]">
            Contact
          </p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-16">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base sm:text-lg text-[#a3b5ca] leading-relaxed font-normal max-w-lg">
              Open to internship opportunities in software development, digital presentation, and technology roles.
              Feel free to reach out directly through email or connect on LinkedIn.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="border border-[#252f3e] border-t-[#3b4c64] bg-[#0c0f14] p-6 flex items-center justify-between transition-all duration-200 hover:border-[#8ea3bf]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8ea3bf] mb-1">Direct Email</p>
                  <a
                    href="mailto:murugeshsubramanian@gmail.com"
                    className="text-base sm:text-lg font-bold text-white hover:text-[#c0392b] transition-colors"
                  >
                    murugeshsubramanian@gmail.com
                  </a>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8ea3bf]">Send Mail &rarr;</span>
              </div>

              {/* LinkedIn & GitHub Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/murugesh-subramanian-810182316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#252f3e] border-t-[#3b4c64] bg-[#0c0f14] p-6 transition-all duration-200 hover:border-[#8ea3bf] hover:-translate-y-0.5 group"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8ea3bf] mb-1.5">Professional Network</p>
                  <p className="text-lg font-bold text-white group-hover:text-[#c0392b] transition-colors">
                    LinkedIn Profile
                  </p>
                  <span className="text-xs font-semibold text-[#8ea3bf] mt-3 inline-block">Connect &rarr;</span>
                </a>

                <a
                  href="https://github.com/murugeshsubramanian2006-beep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#252f3e] border-t-[#3b4c64] bg-[#0c0f14] p-6 transition-all duration-200 hover:border-[#8ea3bf] hover:-translate-y-0.5 group"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8ea3bf] mb-1.5">Code Repository</p>
                  <p className="text-lg font-bold text-white group-hover:text-[#c0392b] transition-colors">
                    GitHub Profile
                  </p>
                  <span className="text-xs font-semibold text-[#8ea3bf] mt-3 inline-block">Explore Code &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Summary & Availability Card (5 cols) */}
          <div className="lg:col-span-5 relative group perspective-1000">
            {/* Architectural back plinth */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 bg-[#0c1017] border border-[#232b38]/60 rounded-sm transform translate-x-3 translate-y-3 -z-20 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
            />
            {/* Top-right crimson registration accent */}
            <div
              aria-hidden="true"
              className="absolute -top-2.5 -right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#c0392b]/70 -z-10"
            />

            <div className="border border-[#252f3e] border-t-[#3f516a] bg-[#0c0f14] p-7 card-tilt-3d">
              <div className="flex items-center justify-between border-b border-[#1f2734] pb-4 mb-6">
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b] animate-pulse" />
                  Status Overview
                </span>
                <span className="text-[10px] text-[#c0392b] font-bold tracking-widest uppercase border border-[#c0392b]/40 bg-[#1a0f0d] px-2.5 py-0.5">
                  Available
                </span>
              </div>

              <div className="space-y-4 text-sm text-[#a3b5ca]">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8ea3bf] mb-0.5">Location</p>
                  <p className="text-white font-medium">Coimbatore, Tamil Nadu, India</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8ea3bf] mb-0.5">Primary Focus</p>
                  <p className="text-white font-medium">Software Development &bull; Practical Projects</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8ea3bf] mb-0.5">Academic Status</p>
                  <p className="text-white font-medium">B.Sc. Computer Science (Cyber Security)</p>
                </div>
              </div>

              <div className="border-t border-[#1f2734] pt-4 mt-6 flex justify-between items-center text-[10px] tracking-widest uppercase text-[#8ea3bf]">
                <span>Response Time: Direct</span>
                <span className="text-white font-semibold">2026 Edition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
