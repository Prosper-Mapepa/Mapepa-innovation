"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl"
          : "border-b border-slate-200/50 bg-white/60 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
            M
          </div>
          <span className="text-base font-semibold text-slate-900">
            Mapepa Innovation
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !px-5 !py-2.5 !text-sm">
            Contact
          </a>
        </nav>

        <button
          className="text-slate-800 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200/80 bg-white/90 px-6 py-5 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-center"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
