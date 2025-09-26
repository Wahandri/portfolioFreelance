"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/siteData";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-base/90 backdrop-blur border-b border-accent/20 shadow-header" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#inicio" className="relative text-xl font-semibold tracking-widest text-light">
          <span className="glow-border rounded-full px-4 py-2 text-accent">Wahandri</span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm uppercase tracking-[0.2em] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative transition-all duration-300 hover:text-accent"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          aria-label="Abrir menú"
          className="rounded-md border border-accent/30 p-2 text-accent transition hover:border-accent/80 hover:shadow-glow md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-accent/20 bg-base/95 backdrop-blur md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-sm uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-md px-4 py-3 transition hover:bg-accent/10"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
