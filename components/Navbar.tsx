"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Outlet", href: "#outlet" },
  { label: "Promo", href: "#promo" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // 🔥 Scroll Spy
  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#5D2B21] backdrop-blur-sm">
        <div className="mx-auto px-6 h-[89px] flex items-center justify-between relative">
          {/* LEFT: Hamburger */}
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* RIGHT spacer */}
          <div className="w-[26px] md:hidden"></div>

          {/* Desktop Nav */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-[75px]">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={`font-lora text-[20px] transition-all duration-200 ${active === link.href ? "text-white underline font-semibold" : "text-white/70 hover:text-white"}`}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setOpen(false)} />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#5D2B21]/95 backdrop-blur-xl z-50 shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 h-[89px] border-b border-white/10">
          <span className="text-white font-semibold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={26} className="text-white" />
          </button>
        </div>

        <div className="flex flex-col px-6 py-6 gap-2">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`group flex items-center justify-between text-lg py-3 px-3 rounded-xl transition-all duration-200 ${active === link.href ? "text-white bg-white/10" : "text-white/80 hover:bg-white/10"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
              <span className="opacity-0 group-hover:opacity-100 transition">→</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
