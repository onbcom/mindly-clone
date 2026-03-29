"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/** Fixed target date for countdown — 104 days from a reference point */
const TARGET_DATE = new Date("2026-08-10T00:00:00Z");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const diff = Math.max(TARGET_DATE.getTime() - now, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  const tick = useCallback(() => {
    setTimeLeft(getTimeLeft());
  }, []);

  useEffect(() => {
    tick();
    setMounted(true);
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [tick]);

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0A]">
      {/* Background layer 1: hero background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-image.png"
          alt=""
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
      </div>

      {/* Background layer 2: grid overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/hero-grid.svg"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </div>

      {/* Background layer 3: radial gradient vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-28 pb-0 sm:px-6 md:pt-36">
        {/* Countdown timer bar */}
        <div
          className="mb-8 flex items-center gap-3 rounded-full px-4 py-2 text-sm"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span className="text-white/70 text-xs sm:text-sm">
            Limited time offer ends in
          </span>
          <div className="flex items-center gap-1">
            {mounted ? (
              <>
                <CountdownDigit value={pad(timeLeft.days)} />
                <span className="text-white/50 text-xs font-medium mx-0.5">:</span>
                <CountdownDigit value={pad(timeLeft.hours)} />
                <span className="text-white/50 text-xs font-medium mx-0.5">:</span>
                <CountdownDigit value={pad(timeLeft.minutes)} />
                <span className="text-white/50 text-xs font-medium mx-0.5">:</span>
                <CountdownDigit value={pad(timeLeft.seconds)} />
              </>
            ) : (
              <>
                <CountdownDigit value="--" />
                <span className="text-white/50 text-xs font-medium mx-0.5">:</span>
                <CountdownDigit value="--" />
                <span className="text-white/50 text-xs font-medium mx-0.5">:</span>
                <CountdownDigit value="--" />
                <span className="text-white/50 text-xs font-medium mx-0.5">:</span>
                <CountdownDigit value="--" />
              </>
            )}
          </div>
        </div>

        {/* Main heading */}
        <h1 className="max-w-3xl text-center text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-[56px]">
          Master Prompt Engineering in 6 Weeks &{" "}
          <em className="not-italic italic text-[#FF6F00]">
            Supercharge your career.
          </em>
        </h1>

        {/* AI prompt mockup */}
        <div
          className="mt-10 w-full max-w-2xl rounded-2xl px-4 py-3"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex items-center gap-3">
            {/* Plus icon */}
            <button
              type="button"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/40 transition-colors hover:text-white/60"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              aria-label="Add attachment"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3.5V12.5M3.5 8H12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Prompt text */}
            <span className="flex-1 truncate text-sm text-white/40">
              Summarize these meeting notes into clear action items with ow...
            </span>

            {/* Tools dropdown */}
            <button
              type="button"
              className="flex shrink-0 items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-white/50 transition-colors hover:text-white/70"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 2L5.5 8H8.5L6.5 12"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Tools
            </button>

            {/* Microphone icon */}
            <button
              type="button"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/40 transition-colors hover:text-white/60"
              aria-label="Voice input"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1.5C7.17 1.5 6.5 2.17 6.5 3V8C6.5 8.83 7.17 9.5 8 9.5C8.83 9.5 9.5 8.83 9.5 8V3C9.5 2.17 8.83 1.5 8 1.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M4.5 7V8C4.5 9.93 6.07 11.5 8 11.5C9.93 11.5 11.5 9.93 11.5 8V7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 11.5V14"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Send / play button */}
            <button
              type="button"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FF6F00] text-white transition-colors hover:bg-[#E56300]"
              aria-label="Send prompt"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4L12 8L6 12V4Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          {/* Enroll button */}
          <a
            href="#enroll"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF6F00] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#E56300]"
          >
            Enroll now for $499
            <Image
              src="/images/arrow-right.svg"
              alt=""
              width={16}
              height={16}
              className="invert"
            />
          </a>

          {/* Avatars + handwritten text */}
          <div className="flex items-center gap-3">
            {/* Overlapping avatars */}
            <div className="flex -space-x-2">
              <Image
                src="/images/student-1.jpg"
                alt="Student"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border-2 border-[#0A0A0A] object-cover"
              />
              <Image
                src="/images/student-2.jpg"
                alt="Student"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border-2 border-[#0A0A0A] object-cover"
              />
              <Image
                src="/images/student-3.png"
                alt="Student"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border-2 border-[#0A0A0A] object-cover"
              />
            </div>

            {/* Handwritten text */}
            <p className="max-w-[200px] -rotate-2 font-[family-name:var(--font-gloria)] text-sm leading-tight text-white">
              2k+ professionals are already ahead of you.
            </p>
          </div>
        </div>

        {/* Hero bottom image */}
        <div className="relative mt-16 w-full max-w-5xl">
          {/* Gradient overlay fading to dark at top */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to bottom, #0A0A0A 0%, transparent 30%)",
            }}
          />
          <Image
            src="/images/hero-bg-texture.png"
            alt="Course preview"
            width={1200}
            height={600}
            className="w-full rounded-t-2xl object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function CountdownDigit({ value }: { value: string }) {
  return (
    <span
      className="inline-flex min-w-[28px] items-center justify-center rounded-md px-1.5 py-0.5 text-xs font-semibold tabular-nums text-white"
      style={{
        background: "rgba(255,255,255,0.08)",
      }}
    >
      {value}
    </span>
  );
}
