"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Our Journey", href: "#journey" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Sahyata
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#events"
            className="px-5 py-2 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Register
          </Link>
          <Link
            href="#get-involved"
            className="px-5 py-2 bg-primary text-white font-bold rounded-full hover:bg-opacity-90 transition-all"
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-40 flex flex-col items-center pt-10 space-y-6 md:hidden animate-in fade-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-semibold text-text hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-4 w-full px-10 pt-4">
            <Link
              href="#events"
              className="w-full py-3 text-center border-2 border-primary text-primary font-bold rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register
            </Link>
            <Link
              href="#get-involved"
              className="w-full py-3 text-center bg-primary text-white font-bold rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
