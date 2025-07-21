"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent backdrop-blur-sm"
        // scrolled ? "bg-white shadow-md" : "bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
        <Link
          href="/"
          className="flex items-center gap-2 bg-white rounded-full"
        >
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </Link>

        <nav className="hidden md:flex justify-around w-full gap-6 text-sm">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`relative transition duration-300 font-medium ${
                scrolled ? "text-black" : "text-white"
              } group`}
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[color:var(--color-primary)] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 py-3">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-black border-b"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
