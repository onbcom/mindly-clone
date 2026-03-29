"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much time do I need each week?",
    answer:
      "Plan for 3-4 hours per week. Each module is designed for busy professionals with on-demand lessons you can complete at your own pace.",
  },
  {
    question: "Do I need a tech or coding background?",
    answer:
      "Not at all. This course is designed for professionals from all backgrounds. No coding experience required \u2014 just a willingness to learn.",
  },
  {
    question: "What makes this better than free tutorials?",
    answer:
      "Free tutorials give you fragments. This course gives you a complete system with structured learning, expert feedback, and a professional portfolio.",
  },
  {
    question: "Can I take a break if life gets busy?",
    answer:
      "Absolutely! You have lifetime access to all materials. Take a break whenever you need and pick up right where you left off.",
  },
  {
    question: "Will I get all course updates for free?",
    answer:
      "Yes, the course is fully updated on a rolling basis and all future updates are included with your purchase at no additional cost.",
  },
];

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-200"
    >
      <path
        d="M12 5V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className={`origin-center transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}
      />
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="bg-[rgb(10,10,10)] px-[48px] py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section label */}
        <p className="mb-6 text-center text-[22px] font-medium leading-[26.4px] text-[rgb(186,186,186)]">
          FAQ
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-16 max-w-[700px] text-center text-[32px] leading-[57.6px] font-semibold tracking-[-1px] text-white md:text-[48px]">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div className="mx-auto flex max-w-[800px] flex-col gap-2">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-none bg-[rgb(26,26,26)] px-[24px]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex h-[80px] w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[20px] font-medium leading-[20px] text-white">
                    {item.question}
                  </span>
                  <span className="text-white/60">
                    <PlusMinusIcon isOpen={isOpen} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[16px] font-normal leading-[24px] text-white">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom help text */}
        <div className="mt-12 text-center">
          <p className="text-[22px] font-medium leading-[26.4px] text-[rgb(209,209,209)]">
            Still got questions? Reach out, we&apos;re here to help.{" "}
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex h-[44px] items-center rounded-[8px] bg-[rgb(255,111,0)] py-[4px] pr-[4px] pl-[16px] font-medium text-white transition-colors hover:bg-[#E56300]"
          >
            Reach out to us
          </a>
        </div>
      </div>
    </section>
  );
}
