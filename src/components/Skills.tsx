import React from "react";

const skillCategories = [
  {
    title: "Programming",
    glyph: (
      <svg className="w-3.5 h-3.5 text-[#c0392b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    skills: ["Python", "C", "C++", "Java", "JavaScript", "Dart"],
  },
  {
    title: "Web Development",
    glyph: (
      <svg className="w-3.5 h-3.5 text-[#8ea3bf]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="1" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    skills: ["HTML", "CSS", "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Cybersecurity & Networking",
    glyph: (
      <svg className="w-3.5 h-3.5 text-[#c0392b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    skills: [
      "Cybersecurity Fundamentals", "Network Fundamentals", "TCP/IP", "OSI Model",
      "Web Application Security", "SQL Injection", "XSS", "WAF Concepts",
      "Nmap", "Wireshark", "Burp Suite", "Nikto",
    ],
  },
  {
    title: "Databases",
    glyph: (
      <svg className="w-3.5 h-3.5 text-[#8ea3bf]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: ["PostgreSQL", "SQLite", "SQL", "Database Design Fundamentals"],
  },
  {
    title: "Tools & Platforms",
    glyph: (
      <svg className="w-3.5 h-3.5 text-[#c0392b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    skills: ["Git", "GitHub", "VS Code", "Postman", "Streamlit", "Vercel", "Render", "Railway"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[#1f242d] bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="bg-[#0c0f14]/85 border border-[#1f2734] p-8 rounded-sm mb-12 backdrop-blur-[2px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#c0392b]" />
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c0392b]">
              Skills
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Technical Toolkit
          </h2>
          <p className="text-base sm:text-lg text-[#a3b5ca] max-w-2xl font-normal leading-relaxed">
            Technologies and concepts I have worked with through coursework, projects, internships, and hands-on learning.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="relative group">
              {/* Category row with dimensional indicator */}
              <div className="flex items-center gap-6 mb-5">
                <div className="flex items-center gap-2.5 flex-shrink-0 w-60">
                  <span className="p-1.5 rounded-sm bg-[#131922] border border-[#273549]">
                    {category.glyph}
                  </span>
                  <h3 className="text-xs font-bold tracking-[0.16em] uppercase text-slate-300 group-hover:text-white transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#2a3648] via-[#1c2432] to-transparent" />
              </div>

              {/* Dimensional Skill badges */}
              <div className="flex flex-wrap gap-2.5 pl-0 sm:pl-64">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#253245] border-t-[#3b4b63] bg-[#0f141d] text-[#8ea3bf] hover:text-white text-xs px-3.5 py-1.5 tracking-wide font-medium hover:border-[#8ea3bf] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
