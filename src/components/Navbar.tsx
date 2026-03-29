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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-10 flex justify-center"
      style={{ top: 24 }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Fixed wrapper: 800px wide, centered */}
      <div className="w-[800px] max-w-[calc(100%-32px)] flex justify-center">
        {/* Nav Container (inner pill): white bg, 768px wide, 68px tall */}
        <div
          className="flex w-[768px] max-w-full items-center justify-between"
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            padding: "12px 8px 12px 16px",
            height: 68,
            borderRadius: 12,
            boxShadow:
              "rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.06) 0px 10px 10px -3.75px",
          }}
        >
          {/* Logo area: logo + divider */}
          <div className="flex items-center" style={{ gap: 16 }}>
            <Link href="/" aria-label="Home">
              <Image
                src="/images/nav-logo.svg"
                alt="Mindly logo"
                width={36}
                height={36}
                priority
              />
            </Link>
            {/* Nav Divider */}
            <div
              className="hidden md:block"
              style={{
                width: 1,
                height: 20,
                backgroundColor: "rgb(232, 232, 232)",
              }}
            />
          </div>

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex items-center justify-center"
            style={{ gap: 24, padding: "8px 0px" }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "var(--font-inter-tight), Inter Tight, sans-serif",
                  lineHeight: "16.8px",
                  color: "rgb(0, 0, 0)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: CTA + mobile hamburger */}
          <div className="flex items-center gap-2">
            {/* Mobile Hamburger */}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              style={{ color: "rgb(0, 0, 0)" }}
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
              className="flex items-center justify-between"
              style={{
                backgroundColor: "rgb(255, 111, 0)",
                padding: "4px 4px 4px 16px",
                height: 44,
                borderRadius: 8,
                boxShadow:
                  "rgba(255, 255, 255, 0.1) 0px 4px 10px 0px inset, rgba(255, 255, 255, 0.1) 0px -4px 8px 0px inset",
                overflow: "hidden",
                textDecoration: "none",
                gap: 12,
              }}
            >
              <span
                className="whitespace-nowrap"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "rgb(255, 255, 255)",
                  lineHeight: "20.8px",
                }}
              >
                Enroll now for $499
              </span>
              {/* Arrow Right icon container: WHITE background */}
              <span
                className="flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  width: 40,
                  height: 36,
                  borderRadius: 6,
                }}
              >
                <Image
                  src="/images/arrow-right.svg"
                  alt=""
                  width={16}
                  height={14}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="absolute left-1/2 -translate-x-1/2 md:hidden"
          style={{
            top: 78,
            width: "calc(100% - 32px)",
            maxWidth: 768,
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: 12,
            padding: 16,
            boxShadow:
              "rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.06) 0px 10px 10px -3.75px",
          }}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-black/5"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "rgb(0, 0, 0)",
                    textDecoration: "none",
                  }}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
