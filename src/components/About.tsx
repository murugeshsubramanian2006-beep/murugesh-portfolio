export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[#1f242d] bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section label with coordinate glyph */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#c0392b]" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c0392b]">
            About
          </p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-16">
          Who I am
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Introduction (7 cols for generous reading room with protective backing) */}
          <div className="lg:col-span-7 space-y-6 bg-[#0c0f14]/85 border border-[#1f2734] p-8 rounded-sm backdrop-blur-[2px]">
            <p className="text-base sm:text-lg text-[#a3b5ca] leading-relaxed font-normal">
              I am a Computer Science student with a specialization in Cyber Security, currently pursuing my degree at Dr. N.G.P. Arts &amp; Science College in Coimbatore. I have a strong interest in understanding how systems work and how to secure them.
            </p>
            <p className="text-base sm:text-lg text-[#a3b5ca] leading-relaxed font-normal">
              My focus is on building practical software and security-related projects. I enjoy gaining hands-on experience across a variety of disciplines, including programming, web technologies, databases, networking, and modern cybersecurity tools.
            </p>
            <p className="text-base sm:text-lg text-[#a3b5ca] leading-relaxed font-normal">
              I believe in continuous learning through projects and practical challenges. I am actively looking for opportunities where I can apply what I have learned, contribute to meaningful work, and continue growing as a technology professional.
            </p>
          </div>

          {/* Quick facts with solid surface backing to prevent 3D collision */}
          <div className="lg:col-span-5 relative group perspective-1000">
            {/* Offset 3D depth plinth */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 bg-[#0c1017] border border-[#232b38]/60 rounded-sm transform translate-x-3 translate-y-3 -z-20 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
            />
            {/* Top-right crimson corner marker */}
            <div
              aria-hidden="true"
              className="absolute -top-2.5 -right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#c0392b]/70 -z-10"
            />

            {/* Main panel container */}
            <div className="border border-[#252f3e] border-t-[#3d4e68] bg-[#0c0f14] card-tilt-3d">
              <div className="border-b border-[#1f2734] px-6 py-4 flex justify-between items-center bg-[#10151f]">
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8ea3bf]" />
                  Quick Facts
                </span>
                <span className="text-[10px] text-[#c0392b] font-bold tracking-widest uppercase">Verified</span>
              </div>
              <div className="divide-y divide-[#18202b]">
                {[
                  { label: "Degree", value: "B.Sc. Computer Science" },
                  { label: "Specialization", value: "Cyber Security" },
                  { label: "Institution", value: "Dr. N.G.P. Arts & Science College" },
                  { label: "Academic %", value: "78.2%" },
                  { label: "Location", value: "Coimbatore, Tamil Nadu, India" },
                ].map(({ label, value }) => (
                  <div key={label} className="px-6 py-4 flex justify-between items-start gap-4 hover:bg-[#121620] transition-colors duration-150">
                    <span className="text-xs text-[#8ea3bf] uppercase tracking-wider font-semibold flex-shrink-0">{label}</span>
                    <span className="text-sm text-white font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
