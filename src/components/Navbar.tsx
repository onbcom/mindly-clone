"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why us", href: "#why-choose-us" },
  { label: "FAQs", href: "#faqs" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="flex w-full max-w-[900px] items-center justify-between gap-2 rounded-[100px] border border-white/10 px-4 py-2 pr-2 backdrop-blur-md transition-colors duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(10, 10, 10, 0.97)"
            : "rgba(10, 10, 10, 0.9)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1a1a1a]"
          aria-label="Home"
        >
          <Image
            src="/images/nav-logo.svg"
            alt="Mindly logo"
            width={35}
            height={36}
            className="invert"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 text-sm font-normal text-white/80 transition-opacity hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>

        {/* CTA Button */}
        <Link
          href="#pricing"
          className="hidden shrink-0 items-center gap-2 rounded-lg bg-[#FF6F00] py-2.5 pl-4 pr-2 text-sm font-medium text-white transition-colors hover:bg-[#E56300] sm:flex"
        >
          <span className="hidden sm:inline">Enroll now for $499</span>
          <span className="sm:hidden">Enroll</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-black/15">
            <Image
              src="/images/arrow-right.svg"
              alt=""
              width={16}
              height={14}
              className="brightness-0 invert"
            />
          </span>
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="absolute top-full left-4 right-4 mt-2 rounded-2xl border border-white/10 p-4 backdrop-blur-md md:hidden"
          style={{ backgroundColor: "rgba(10, 10, 10, 0.97)" }}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-normal text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-white/10 pt-3">
            <Link
              href="#pricing"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6F00] py-2.5 px-4 text-sm font-medium text-white transition-colors hover:bg-[#E56300]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enroll now for $499
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-black/15">
                <Image
                  src="/images/arrow-right.svg"
                  alt=""
                  width={16}
                  height={14}
                  className="brightness-0 invert"
                />
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
