"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const dismissed = sessionStorage.getItem("mobile_notice_dismissed");
      if (!dismissed) {
        setShowNotice(true);
      }
    }
  }, []);

  const handleDismissNotice = () => {
    setShowNotice(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("mobile_notice_dismissed", "true");
    }
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-[#1f1f1f]"
      style={{ background: "rgba(13,13,13,0.92)", backdropFilter: "blur(6px)" }}
    >
      {/* Mobile Professional Notice */}
      {showNotice && (
        <div className="md:hidden border-b border-[#232b38] bg-[#0c1017] px-4 py-2 text-slate-300">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b] flex-shrink-0 animate-pulse" />
              <p className="text-[11px] leading-tight">
                <span className="font-bold tracking-wider uppercase text-white mr-1.5">
                  Optimized for Desktop
                </span>
                <span className="text-[#8ea3bf]">
                  Best experienced on a larger screen for the full interactive presentation.
                </span>
              </p>
            </div>
            <button
              onClick={handleDismissNotice}
              aria-label="Dismiss viewing recommendation"
              className="text-[#8ea3bf] hover:text-white text-base leading-none p-1 flex-shrink-0"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="#home"
            className="text-sm font-bold tracking-[0.12em] uppercase text-[#f0ece4] hover:text-[#c0392b] transition-colors duration-200"
          >
            Murugesh S
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium tracking-wider uppercase text-[#8ea3bf] hover:text-[#c0392b] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center gap-[5px] w-7 h-7 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className="block h-px w-full bg-[#f0ece4] transition-transform duration-200"
              style={{ transform: isOpen ? "translateY(6px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-px w-full bg-[#f0ece4] transition-opacity duration-200"
              style={{ opacity: isOpen ? 0 : 1 }}
            />
            <span
              className="block h-px w-full bg-[#f0ece4] transition-transform duration-200"
              style={{ transform: isOpen ? "translateY(-6px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#1f1f1f]" style={{ background: "#0d0d0d" }}>
          <div className="px-5 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-[#8ea3bf] hover:text-[#c0392b] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
