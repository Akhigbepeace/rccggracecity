"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Give", href: "/give" },
  // { label: "Sermons", href: "/sermons" },
  // { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 bg-white rounded-full p-1 flex-shrink-0"
          >
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-8 text-sm">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative transition duration-300 font-medium ${!scrolled
                    ? "text-white hover:text-gray-200"
                    : "text-black hover:text-primary"
                    } group`}
                // className={`relative transition duration-300 font-medium ${
                //   isHome && !scrolled
                //     ? "text-white hover:text-gray-200"
                //     : "text-black hover:text-primary"
                // } group`}
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              href="/workers-corner"
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${scrolled
                ? "bg-primary text-white hover:bg-primary/90 shadow-md"
                : "bg-white text-primary hover:bg-gray-100 shadow-lg"
                }`}
            >
              Worker&apos;s Corner
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 ${scrolled ? "text-black" : "text-white"
              }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-800 hover:text-primary transition-colors duration-200 border-b border-gray-100 last:border-b-0"
              >
                {label}
              </Link>
            ))}

            {/* Mobile Donate Button */}
            <div className="pt-4 pb-2">
              <Link
                href="/workers-corner"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 px-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                Worker&apos;s Corner
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
