import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "56px" }}
    >
      {/* Subtle page frame on large screens */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-3 bottom-3 top-14 border border-[#1f242d] rounded-sm hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT: Identity (7 columns on desktop for strong dominance) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c0392b]" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c0392b]">
                Computer Science Student
              </p>
            </div>

            <h1 className="leading-tight tracking-tight mb-6">
              <span className="block text-slate-400 font-medium text-2xl sm:text-3xl mb-2">
                Hi, I&apos;m
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl font-black text-white">
                Murugesh S
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#a3b5ca] font-normal leading-relaxed max-w-xl mb-10">
              I build practical software and security-focused projects while developing my skills
              in computer science, networking, and cybersecurity.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="#projects"
                className="inline-flex items-center px-7 py-3 text-sm font-bold tracking-wider uppercase border border-[#c0392b] bg-[#c0392b]/10 text-white hover:bg-[#c0392b] hover:text-white transition-all duration-200"
              >
                View Projects
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3 text-sm font-bold tracking-wider uppercase border border-[#2a3547] bg-[#0c1017]/80 text-[#8ea3bf] hover:border-[#8ea3bf] hover:text-white transition-all duration-200"
              >
                Download Resume
              </a>
            </div>

            {/* Social links - with exact verified LinkedIn URL */}
            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/murugeshsubramanian2006-beep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-wider uppercase text-[#8ea3bf] hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>
              <span className="text-[#2a3547] select-none">|</span>
              <a
                href="https://www.linkedin.com/in/murugesh-subramanian-810182316/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-wider uppercase text-[#8ea3bf] hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>

            {/* Cinematic Scroll Cue */}
            <div className="mt-12 flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#64748b]">
              <span className="w-5 h-px bg-[#c0392b]" />
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* RIGHT: Computational Software Visual Zone (5 columns on desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] h-[360px] sm:h-[400px] mx-auto lg:mx-0 lg:ml-auto flex flex-col justify-between p-6 select-none pointer-events-none">
              {/* Corner registration accents */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#c0392b]/70"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#263448]"
              />

              {/* Top Specification Header */}
              <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase pb-3 border-b border-[#202938]/60">
                <span className="flex items-center gap-2 text-white font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b] animate-pulse" />
                  Software System
                </span>
                <span className="text-[#8ea3bf] text-[10px]">system.ts // Visual Sequence</span>
              </div>

              {/* Center space is open to let the 3D computational structure be the direct visual subject */}
              <div className="flex-1" />

              {/* Bottom Editorial Caption */}
              <div className="pt-3 border-t border-[#202938]/60 flex items-center justify-between text-[10px] tracking-[0.16em] uppercase text-[#64748b] font-medium">
                <span>Code Sequence</span>
                <span className="text-[#8ea3bf]">Scroll to construct &darr;</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
