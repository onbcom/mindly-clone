"use client";

import Image from "next/image";
import Link from "next/link";

const ROLE_BADGES = [
  { label: "AI Content Strategist", icon: "/images/role-icon-1.png" },
  { label: "Prompt Engineer", icon: "/images/role-icon-2.png" },
  { label: "Automation Expert", icon: "/images/role-icon-3.png" },
] as const;

const FEATURE_CARDS = [
  {
    tag: "PROMPT LIBRARY",
    icon: "/images/icon-prompt-library.svg",
    title: "Save 10+ Hours a Week",
    description:
      "with our Prompt Library of 200+ copy-paste-ready commands.",
  },
  {
    tag: "ADVANCED METHODS",
    icon: "/images/icon-advanced-methods.svg",
    title: "Master Advanced Techniques",
    description:
      "that 99% of users don't know, giving you a powerful competitive edge.",
  },
  {
    tag: "STRATEGIC OUTPUT",
    icon: "/images/icon-strategic-output.svg",
    title: "Deliver Higher Quality Work",
    description:
      "by learning to use AI for deep strategic thinking, not just surface-level tasks.",
  },
] as const;

function RoleBadge({ label, icon }: { label: string; icon: string }) {
  return (
    <span className="mr-4 inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
      <Image src={icon} alt="" width={20} height={20} className="rounded-full" />
      {label}
    </span>
  );
}

function Marquee() {
  const badges = [...ROLE_BADGES, ...ROLE_BADGES, ...ROLE_BADGES];
  return (
    <div className="mt-4 overflow-hidden">
      <div className="animate-marquee flex w-max">
        {badges.map((badge, i) => (
          <RoleBadge key={`${badge.label}-${i}`} label={badge.label} icon={badge.icon} />
        ))}
        {badges.map((badge, i) => (
          <RoleBadge key={`dup-${badge.label}-${i}`} label={badge.label} icon={badge.icon} />
        ))}
      </div>
    </div>
  );
}

export default function IntroducingMindlySection() {
  return (
    <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Section label */}
        <p className="mb-6 text-center text-sm font-medium tracking-wide text-white/50">
          Introducing Mindly
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-16 max-w-[800px] text-center text-[32px] leading-[1.15] font-bold text-white md:text-[48px]">
          The A-to-Z System for{" "}
          <span className="italic text-[#FF6F00]">High-Value</span> AI Results
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left column - CTA card */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8">
            {/* Pill badge */}
            <div>
              <span className="mb-6 inline-block rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
                Get Ahead
              </span>

              <p className="mb-6 text-lg leading-relaxed text-white/80">
                Introducing our generative AI masterclass for all working
                professionals.
              </p>

              {/* CTA button */}
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF6F00] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#E56300]"
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

              <p className="mt-6 text-sm leading-relaxed text-white/50">
                Mastering prompt engineering unlocks a new wave of roles that
                blend creativity,
              </p>
            </div>

            {/* Marquee */}
            <Marquee />
          </div>

          {/* Right column - Feature cards */}
          <div className="flex flex-col gap-4">
            {FEATURE_CARDS.map((card) => (
              <div
                key={card.tag}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <p className="mb-3 text-[11px] font-semibold tracking-widest text-white/40">
                  {card.tag}
                </p>
                <Image
                  src={card.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="mb-3"
                />
                <p className="text-lg leading-snug text-white">
                  <span className="font-bold">{card.title}</span>{" "}
                  <span className="text-sm text-white/60">
                    {card.description}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
