"use client";

import Image from "next/image";
import { useRef } from "react";

interface Testimonial {
  name: string;
  title: string;
  company: string;
  photo: string;
  before: string;
  after: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Cooper Geidt",
    title: "Senior Prompt Engineer",
    company: "EcoPure",
    photo: "/images/student-1.jpg",
    before:
      "I kept copying random prompts from Twitter threads, hoping one would finally work.",
    after:
      "I now have my own prompt system that consistently delivers high-quality outputs tailored to any project\u2014no more guesswork or rewrites.",
  },
  {
    name: "Ruben Gouse",
    title: "Senior Prompt Engineer",
    company: "EcoPure",
    photo: "/images/student-2.jpg",
    before:
      "I kept copying random prompts from Twitter threads, hoping one would finally work.",
    after:
      "I now have my own prompt system that consistently delivers high-quality outputs tailored to any project\u2014no more guesswork or rewrites.",
  },
  {
    name: "Rayna Mango",
    title: "Senior Prompt Engineer",
    company: "EcoPure",
    photo: "/images/student-3.png",
    before:
      "I kept copying random prompts from Twitter threads, hoping one would finally work.",
    after:
      "I now have my own prompt system that consistently delivers high-quality outputs tailored to any project\u2014no more guesswork or rewrites.",
  },
  {
    name: "Jack Cooper",
    title: "Senior Prompt Engineer",
    company: "EcoPure",
    photo: "/images/student-4.png",
    before:
      "I kept copying random prompts from Twitter threads, hoping one would finally work.",
    after:
      "I now have my own prompt system that consistently delivers high-quality outputs tailored to any project\u2014no more guesswork or rewrites.",
  },
];

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10.667 18.667H6.667L9.334 10.667H13.334L10.667 18.667ZM21.334 18.667H17.334L20 10.667H24L21.334 18.667Z"
        fill="#FF6F00"
      />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="flex min-w-[300px] shrink-0 flex-col rounded-2xl bg-white p-6"
      style={{ border: "1px solid rgba(0,0,0,0.08)" }}
    >
      {/* Quote icon */}
      <QuoteIcon />

      {/* Person info */}
      <div className="mt-4 flex items-center gap-3">
        <Image
          src={testimonial.photo}
          alt={testimonial.name}
          width={60}
          height={60}
          className="h-[60px] w-[60px] rounded-full object-cover"
        />
        <div>
          <p className="text-base font-semibold text-black">
            {testimonial.name}
          </p>
          <p className="text-sm text-[#666]">{testimonial.title}</p>
          <span className="mt-1 inline-block rounded-full bg-[#E8F5E9] px-2.5 py-0.5 text-xs font-medium text-[#2E7D32]">
            {testimonial.company}
          </span>
        </div>
      </div>

      {/* Before section */}
      <div className="mt-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#999]">
          Before
        </p>
        <p className="text-sm italic leading-relaxed text-[#666]">
          &ldquo;{testimonial.before}&rdquo;
        </p>
      </div>

      {/* After section */}
      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#333]">
          After
        </p>
        <p className="text-sm leading-relaxed text-[#333]">
          &ldquo;{testimonial.after}&rdquo;
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#F2F1EE] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Section label */}
        <p className="mb-4 text-center text-sm font-medium tracking-wide text-[#999]">
          Testimonials
        </p>

        {/* Handwritten "This can be you" */}
        <p className="mb-3 text-center font-[family-name:var(--font-gloria)] text-lg text-[#999]">
          This can be you
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-14 max-w-[700px] text-center text-[32px] leading-[1.15] font-bold text-black md:text-[48px]">
          Our Graduates Don&apos;t Just Learn, They Achieve.
        </h2>

        {/* Desktop: 3 cards in a row */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-5 overflow-x-auto md:hidden"
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
