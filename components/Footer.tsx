import Link from "next/link";
import { navLinks } from "@/data/siteData";

const Footer = () => (
  <footer className="border-t border-accent/20 bg-base/80 py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
      <p className="text-sm text-light/60">© 2025 Wahandri - Desarrollador Web Freelance</p>
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.3em] text-light/50">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="transition hover:text-accent">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
