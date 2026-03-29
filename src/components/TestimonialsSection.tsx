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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex min-w-[300px] shrink-0 flex-col gap-[20px] rounded-[16px] bg-[rgb(242,241,238)] p-[16px]">
      {/* Person info */}
      <div className="flex items-center gap-3">
        <Image
          src={testimonial.photo}
          alt={testimonial.name}
          width={60}
          height={60}
          className="h-[60px] w-[60px] rounded-full object-cover"
        />
        <div>
          <p className="text-[22px] font-medium leading-[26.4px] text-black">
            {testimonial.name}
          </p>
          <p className="text-[16px] font-medium leading-[20.8px] text-[rgb(118,118,118)]">
            {testimonial.title}
          </p>
        </div>
      </div>

      {/* Before section */}
      <div>
        <p className="mb-2 text-[14px] font-medium leading-[16.8px] text-black uppercase">
          Before
        </p>
        <p className="text-[16px] font-medium leading-[20.8px] text-[rgb(118,118,118)]">
          &ldquo;{testimonial.before}&rdquo;
        </p>
      </div>

      {/* After section */}
      <div className="flex flex-col gap-[16px] rounded-[12px] bg-[rgb(26,26,26)] p-[14px]">
        <p className="text-[14px] font-medium leading-[16.8px] text-[rgb(209,209,209)] uppercase">
          After
        </p>
        <p className="text-[18px] font-medium leading-[23.4px] text-white">
          &ldquo;{testimonial.after}&rdquo;
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white px-[48px] py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section label */}
        <p className="mb-4 text-center text-[22px] font-medium leading-[26.4px] text-[rgb(117,117,117)]">
          Testimonials
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-14 max-w-[700px] text-center text-[32px] leading-[57.6px] font-semibold tracking-[-1px] text-black md:text-[48px]">
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
