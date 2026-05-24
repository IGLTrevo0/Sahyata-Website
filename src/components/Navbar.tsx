"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Scheherazade_New } from "next/font/google";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const scheherazade = Scheherazade_New({ weight: ["400", "700"], subsets: ["latin"] });

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
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "bg-white backdrop-blur-md shadow-md" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className={cn("shrink-0 inline-flex flex-col items-start", isScrolled ? "text-[#000000]" : "text-[#FFFFFF]")}>
            <span
              className={cn(
                scheherazade.className,
                "text-3xl font-bold tracking-widest uppercase leading-none w-full border-b pb-1 mb-1",
                isScrolled ? "text-[#000000] border-[#000000]" : "text-[#FFFFFF] border-[#FFFFFF]"
              )}
            >
              SAHAYATA
            </span>
            <span className={cn("w-full text-left text-[10px] font-normal tracking-wider leading-tight", isScrolled ? "text-[#000000]" : "text-[#FFFFFF]")}>
              Shubh-Hith Foundation
            </span>
          </Link>

          {/* Desktop: links + CTAs in one aligned row */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-5 xl:gap-7 min-w-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "inline-flex h-10 items-center whitespace-nowrap text-sm xl:text-base font-medium transition-colors",
                  isScrolled ? "text-[#000000] hover:text-primary" : "text-[#FFFFFF] hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#get-involved"
              className={cn(
                "inline-flex h-10 items-center justify-center px-4 border-2 font-bold rounded-full transition-all text-sm xl:text-base whitespace-nowrap",
                isScrolled
                  ? "border-primary text-primary hover:bg-primary hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-text"
              )}
            >
              Get Involved
            </Link>
            <Link
              href="#donate"
              className="inline-flex h-10 items-center justify-center px-5 bg-primary text-white font-bold rounded-full hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all shadow-[0_4px_10px_rgba(233,30,140,0.2)] text-sm xl:text-base whitespace-nowrap"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden transition-colors",
              isScrolled || isMobileMenuOpen ? "text-text" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-40 flex flex-col items-center pt-10 space-y-6 lg:hidden animate-in fade-in slide-in-from-top duration-300">
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
              href="#get-involved"
              className="w-full py-3 text-center border-2 border-primary text-primary font-bold rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Involved
            </Link>
            <Link
              href="#donate"
              className="w-full py-3 text-center bg-primary text-white font-bold rounded-full shadow-[0_4px_10px_rgba(233,30,140,0.2)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
