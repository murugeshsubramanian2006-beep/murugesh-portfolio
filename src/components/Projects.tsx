"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [proj1Visible, setProj1Visible] = useState(false);
  const [proj2Visible, setProj2Visible] = useState(false);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const obs1 = new IntersectionObserver(([entry]) => {
      setProj1Visible(entry.isIntersecting);
    }, observerOptions);

    const obs2 = new IntersectionObserver(([entry]) => {
      setProj2Visible(entry.isIntersecting);
    }, observerOptions);

    if (ref1.current) obs1.observe(ref1.current);
    if (ref2.current) obs2.observe(ref2.current);

    return () => {
      obs1.disconnect();
      obs2.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="py-24 border-t border-[#1f242d] bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#c0392b]" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c0392b]">
            Projects
          </p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-20">
          Selected Work
        </h2>

        <div className="space-y-36">
          {/* Project 1: Threat Intelligence Aggregator */}
          <div
            ref={ref1}
            className="relative transition-all duration-700 ease-out"
            style={{
              transform: proj1Visible
                ? "perspective(1200px) translateZ(0) translateY(0) scale(1)"
                : "perspective(1200px) translateZ(-40px) translateY(24px) scale(0.96)",
              opacity: proj1Visible ? 1 : 0.5,
            }}
          >
            {/* Project Header */}
            <div className="flex items-baseline gap-4 mb-8 border-b border-[#252f3e] pb-4">
              <span className="text-xs text-[#c0392b] font-bold tracking-widest">01</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Threat Intelligence Aggregator
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Info Column (5 cols, high-contrast readable surface) */}
              <div className="lg:col-span-5 space-y-6 bg-[#0c0f14]/90 border border-[#252f3e] p-7 rounded-sm backdrop-blur-[2px]">
                <p className="text-base sm:text-lg text-[#a3b5ca] leading-relaxed font-normal">
                  A non-AI threat intelligence platform built with Python and Streamlit that collects,
                  processes, validates, correlates, and analyzes Indicators of Compromise from threat
                  intelligence feeds.
                </p>

                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.16em] mb-3">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Streamlit", "Pandas", "Plotly", "Requests", "SQLite"].map((tech) => (
                      <span
                        key={tech}
                        className="border border-[#263447] border-t-[#3b4c64] bg-[#0e131b] text-[#8ea3bf] text-xs px-3.5 py-1.5 tracking-wide font-medium hover:border-[#8ea3bf] hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.16em] mb-3">
                    Core Functionality
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300 font-normal">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[#c0392b] mt-1.5 flex-shrink-0" />
                      <span>Collect and process TXT, CSV, JSON, and URL-based feeds</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[#c0392b] mt-1.5 flex-shrink-0" />
                      <span>Extract IOC types: IP addresses, domains, URLs, hashes, email addresses</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[#c0392b] mt-1.5 flex-shrink-0" />
                      <span>Normalize, validate, and correlate indicators</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[#c0392b] mt-1.5 flex-shrink-0" />
                      <span>Classify risk and severity levels</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[#c0392b] mt-1.5 flex-shrink-0" />
                      <span>Interactive security analytics dashboard</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-[#1f2734] pt-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.16em] mb-1">
                    Project Result
                  </p>
                  <p className="text-sm font-medium text-white">
                    Processed 563 IOCs from live feeds, including 305 malicious domains and 33 hashes.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-3">
                  <a
                    href="https://threat-intel-aggregator.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-xs font-bold tracking-wider uppercase border border-[#c0392b] bg-[#c0392b]/10 text-white hover:bg-[#c0392b] transition-all duration-200"
                  >
                    View Demo &rarr;
                  </a>
                  <a
                    href="https://github.com/murugeshsubramanian2006-beep/threat-intel-aggregator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-xs font-bold tracking-wider uppercase border border-[#2a3547] bg-[#0c1017] text-[#8ea3bf] hover:border-[#8ea3bf] hover:text-white transition-all duration-200"
                  >
                    View Repository
                  </a>
                </div>
              </div>

              {/* Dimensional Visual Showcase: Dominant, Sharp Real Screenshot (7 cols) */}
              <div className="lg:col-span-7 perspective-1200">
                <div className="relative group">
                  {/* Layer 0: Architectural Back Plinth */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-2 bg-[#07090d] border border-[#202938] rounded-sm transform translate-x-3 translate-y-3 -z-20 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"
                  />

                  {/* Layer 1: Crimson focal registration tick */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#c0392b]/70 -z-10"
                  />

                  {/* Layer 2: Main Elevated Screenshot Viewport */}
                  <div className="relative border border-[#253245] border-t-[#3f516a] bg-[#0a0c10] overflow-hidden card-tilt-3d shadow-2xl">
                    <Image
                      src="/projects/threat-intelligence-aggregator.png"
                      alt="Threat Intelligence Aggregator dashboard interface showing threat feed processing and indicator analysis"
                      width={1024}
                      height={483}
                      className="w-full h-auto object-contain block transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      priority
                    />
                  </div>

                  {/* Layer 3: Editorial technical caption */}
                  <div className="relative mt-4 flex justify-between items-center text-[10px] tracking-[0.16em] uppercase text-[#8ea3bf] border-t border-[#1b222d] pt-3 font-medium">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b]" />
                      FIG. 01: Application Interface (Feed Ingestion &amp; IOC Analysis)
                    </span>
                    <span className="text-slate-400">Streamlit Engine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: SentinelShield */}
          <div
            ref={ref2}
            className="relative transition-all duration-700 ease-out"
            style={{
              transform: proj2Visible
                ? "perspective(1200px) translateZ(0) translateY(0) scale(1)"
                : "perspective(1200px) translateZ(-40px) translateY(24px) scale(0.96)",
              opacity: proj2Visible ? 1 : 0.5,
            }}
          >
            {/* Project Header */}
            <div className="flex items-baseline gap-4 mb-8 border-b border-[#252f3e] pb-4">
              <span className="text-xs text-[#c0392b] font-bold tracking-widest">02</span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  SentinelShield
                </h3>
                <p className="text-xs text-[#8ea3bf] mt-1 tracking-wider font-semibold">
                  Web Application Firewall Dashboard
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Info Column (5 cols, high-contrast readable surface) */}
              <div className="lg:col-span-5 space-y-6 bg-[#0c0f14]/90 border border-[#252f3e] p-7 rounded-sm backdrop-blur-[2px]">
                <p className="text-base sm:text-lg text-[#a3b5ca] leading-relaxed font-normal">
                  A web-based Web Application Firewall dashboard designed to detect suspicious requests
                  and provide security monitoring and analytics.
                </p>

                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.16em] mb-3">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "HTML", "CSS", "JavaScript", "Chart.js"].map((tech) => (
                      <span
                        key={tech}
                        className="border border-[#263447] border-t-[#3b4c64] bg-[#0e131b] text-[#8ea3bf] text-xs px-3.5 py-1.5 tracking-wide font-medium hover:border-[#8ea3bf] hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.16em] mb-3">
                    Core Functionality
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300 font-normal">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[#c0392b] mt-1.5 flex-shrink-0" />
                      <span>SQL injection pattern detection</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[#c0392b] mt-1.5 flex-shrink-0" />
                      <span>Suspicious request detection and rate limiting</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[#c0392b] mt-1.5 flex-shrink-0" />
                      <span>Attack and request logging with IP tracking</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[#c0392b] mt-1.5 flex-shrink-0" />
                      <span>Security analytics dashboard</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[#c0392b] mt-1.5 flex-shrink-0" />
                      <span>Request classification</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-[#1f2734] pt-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.16em] mb-1">
                    Practical Purpose
                  </p>
                  <p className="text-sm font-medium text-white">
                    A security-focused web application for monitoring and analyzing web traffic patterns
                    and potential threats.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-3">
                  <a
                    href="https://sentinel-waf.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-xs font-bold tracking-wider uppercase border border-[#c0392b] bg-[#c0392b]/10 text-white hover:bg-[#c0392b] transition-all duration-200"
                  >
                    View Demo &rarr;
                  </a>
                  <a
                    href="https://github.com/murugeshsubramanian2006-beep/sentinel-waf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-xs font-bold tracking-wider uppercase border border-[#2a3547] bg-[#0c1017] text-[#8ea3bf] hover:border-[#8ea3bf] hover:text-white transition-all duration-200"
                  >
                    View Repository
                  </a>
                </div>
              </div>

              {/* Dimensional Visual Showcase: Dominant Real Screenshots (7 cols) */}
              <div className="lg:col-span-7 perspective-1200 space-y-10">
                {/* Primary Visual: Dashboard Stage */}
                <div className="relative group">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-2 bg-[#07090d] border border-[#202938] rounded-sm transform translate-x-3 translate-y-3 -z-20 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#c0392b]/70 -z-10"
                  />
                  <div className="relative border border-[#253245] border-t-[#3f516a] bg-[#0a0c10] overflow-hidden card-tilt-3d shadow-2xl">
                    <Image
                      src="/projects/sentinelshield-dashboard.png"
                      alt="SentinelShield Web Application Firewall dashboard showing request statistics, attack type donut chart, and IP ranking bar chart"
                      width={1024}
                      height={489}
                      className="w-full h-auto object-contain block transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] tracking-[0.16em] uppercase text-[#8ea3bf] border-t border-[#1b222d] pt-3 mt-4 font-medium">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b]" />
                      FIG. 02-A: Primary Analytics Dashboard (Request &amp; Attack Breakdown)
                    </span>
                    <span className="text-slate-400">Chart.js Analytics</span>
                  </div>
                </div>

                {/* Secondary Visual: Stepped Event Logs Stage */}
                <div className="relative group ml-0 lg:ml-6">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-2 bg-[#07090d] border border-[#202938]/60 rounded-sm transform translate-x-2.5 translate-y-2.5 -z-20 transition-transform duration-500 group-hover:translate-x-3.5 group-hover:translate-y-3.5"
                  />
                  <div className="relative border border-[#253245] border-t-[#3f516a] bg-[#0a0c10] overflow-hidden card-tilt-3d shadow-2xl">
                    <Image
                      src="/projects/sentinelshield-logs.png"
                      alt="SentinelShield security logs interface displaying detected SQL injection and rate limit events with timestamps and payload data"
                      width={1024}
                      height={482}
                      className="w-full h-auto object-contain block transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] tracking-[0.16em] uppercase text-[#8ea3bf] border-t border-[#1b222d] pt-3 mt-4 font-medium">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8ea3bf]" />
                      FIG. 02-B: Audit Logs View (Event Stream &amp; Pattern Inspection)
                    </span>
                    <span className="text-slate-400">Express.js Logger</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
