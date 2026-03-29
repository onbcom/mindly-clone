"use client";

import { useState } from "react";
import Image from "next/image";

interface Lesson {
  number: string;
  title: string;
}

interface Week {
  title: string;
  weekLabel: string;
  lessons: Lesson[];
}

const WEEKS: Week[] = [
  {
    title: "The Generative AI Landscape",
    weekLabel: "Week 01",
    lessons: [
      {
        number: "01",
        title:
          "Decoding the AI Alphabet: LLMs, GANs, & Beyond",
      },
      {
        number: "02",
        title:
          "The Modern AI Toolkit: Choosing Your Model (ChatGPT vs. Claude vs. Gemini & More)",
      },
      {
        number: "03",
        title:
          "Beyond Text: An Introduction to AI Image & Video Generation",
      },
      {
        number: "04",
        title:
          "Thinking in Tokens: How AI Understands and Predicts Language",
      },
      {
        number: "05",
        title:
          'Your First "Aha!" Moment: Generating Valuable Output in Under 5 Minutes',
      },
    ],
  },
  {
    title: "The Anatomy of a Perfect Prompt",
    weekLabel: "Week 02",
    lessons: [
      { number: "01", title: "The Prompt Framework: Role, Task, Format" },
      { number: "02", title: "Context is King: Feeding AI the Right Information" },
      { number: "03", title: "Output Shaping: Controlling Length, Tone & Style" },
      { number: "04", title: "The Art of Constraints: Guardrails for Better Results" },
      { number: "05", title: "Iterative Refinement: From Good to Great Outputs" },
      { number: "06", title: "Hands-On Lab: Building Your First Prompt Library" },
    ],
  },
  {
    title: "Advanced Prompting Techniques",
    weekLabel: "Week 03",
    lessons: [
      { number: "01", title: "Chain-of-Thought Prompting: Making AI Reason Step-by-Step" },
      { number: "02", title: "Few-Shot Learning: Teaching by Example" },
      { number: "03", title: "Role-Based Prompting: Creating Expert AI Personas" },
      { number: "04", title: "Meta-Prompting: Using AI to Write Better Prompts" },
      { number: "05", title: "Prompt Chaining: Building Complex Multi-Step Workflows" },
      { number: "06", title: "Hands-On Lab: Advanced Technique Showdown" },
    ],
  },
  {
    title: "AI for Creativity & Content",
    weekLabel: "Week 04",
    lessons: [
      { number: "01", title: "AI-Powered Copywriting: From Headlines to Full Articles" },
      { number: "02", title: "Visual Content Creation: Mastering Image Generation Prompts" },
      { number: "03", title: "Brand Voice Replication: Training AI to Sound Like You" },
      { number: "04", title: "Content Strategy with AI: Ideation to Calendar in Minutes" },
      { number: "05", title: "Social Media Mastery: AI-Driven Content at Scale" },
      { number: "06", title: "Hands-On Lab: Build a Full Marketing Campaign" },
    ],
  },
  {
    title: "AI for Productivity & Workflow",
    weekLabel: "Week 05",
    lessons: [
      { number: "01", title: "Email & Communication: Draft, Refine, and Send with AI" },
      { number: "02", title: "Data Analysis: Turning Spreadsheets into Insights" },
      { number: "03", title: "Meeting Prep & Summarization: Never Miss an Action Item" },
      { number: "04", title: "Research & Synthesis: Accelerating Deep Work" },
      { number: "05", title: "Hands-On Lab: Build Your Personal AI Workflow" },
    ],
  },
  {
    title: "The Responsible AI Operator",
    weekLabel: "Week 06",
    lessons: [
      { number: "01", title: "AI Ethics 101: Bias, Fairness, and Accountability" },
      { number: "02", title: "Fact-Checking AI: Avoiding Hallucinations and Misinformation" },
      { number: "03", title: "Privacy & Security: Protecting Data When Using AI Tools" },
      { number: "04", title: "The Human-in-the-Loop: Knowing When AI Needs Oversight" },
      { number: "05", title: "Future-Proofing Your Skills: Staying Ahead of the AI Curve" },
      { number: "06", title: "Final Capstone: Your AI-Powered Portfolio Project" },
    ],
  },
];

const SIDEBAR_FEATURES = [
  { icon: "beginner", label: "Beginner Friendly" },
  { icon: "clock", label: "21 Hours" },
  { icon: "certificate", label: "Completion Certificate" },
  { icon: "lifetime", label: "Full lifetime access" },
] as const;

const SIDEBAR_BULLETS = [
  "Instant access to the full 6-week curriculum",
  "All future updates and bonus content included",
  "Weekly live workshops",
  "1 on 1 Mentorship",
] as const;

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "beginner":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10 2L12.09 7.26L18 8.27L14 12.14L14.82 18.02L10 15.27L5.18 18.02L6 12.14L2 8.27L7.91 7.26L10 2Z" stroke="#FF6F00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "clock":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="10" cy="10" r="8" stroke="#FF6F00" strokeWidth="1.5" />
          <path d="M10 6V10L13 12" stroke="#FF6F00" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "certificate":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="2" width="14" height="12" rx="2" stroke="#FF6F00" strokeWidth="1.5" />
          <path d="M7 7H13M7 10H11" stroke="#FF6F00" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 14V18M7 17L10 14L13 17" stroke="#FF6F00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "lifetime":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#FF6F00" strokeWidth="1.5" />
          <path d="M2 10H18" stroke="#FF6F00" strokeWidth="1.5" />
          <path d="M10 2C12.21 4.39 13.5 7.11 13.5 10C13.5 12.89 12.21 15.61 10 18C7.79 15.61 6.5 12.89 6.5 10C6.5 7.11 7.79 4.39 10 2Z" stroke="#FF6F00" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccordionItem({
  week,
  isOpen,
  onToggle,
}: {
  week: Week;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-black/8 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-black md:text-lg">
          {week.title}
        </span>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm font-medium text-[#999] sm:inline">
            {week.weekLabel}
          </span>
          <ChevronDown open={isOpen} />
        </div>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <ul className="space-y-3 pb-5 pl-1">
            {week.lessons.map((lesson) => (
              <li
                key={lesson.number}
                className="flex gap-3 text-sm leading-relaxed text-[#666]"
              >
                <span className="shrink-0 font-medium text-[#999]">
                  {lesson.number}
                </span>
                <span>{lesson.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="curriculum" className="bg-[#F2F1EE] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Section label */}
        <p className="mb-6 text-center text-sm font-medium tracking-wide text-[#999]">
          Curriculum Overview
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-16 max-w-[700px] text-center text-[32px] leading-[1.15] font-bold text-black md:text-[48px]">
          Unlock the secret sauce behind{" "}
          <span className="italic text-[#FF6F00]">world-class</span> products.
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Left: Accordion */}
          <div className="flex-1 min-w-0">
            {WEEKS.map((week, index) => (
              <AccordionItem
                key={week.weekLabel}
                week={week}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              />
            ))}
          </div>

          {/* Right: Sidebar card */}
          <div className="w-full shrink-0 lg:w-[360px]">
            <div className="sticky top-28 rounded-2xl bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
              {/* Money-back guarantee badge */}
              <div className="mb-5 flex items-center justify-center gap-2 rounded-full border border-black/8 px-4 py-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M8 1L10.09 5.26L15 6.27L11.5 9.64L12.18 14.52L8 12.27L3.82 14.52L4.5 9.64L1 6.27L5.91 5.26L8 1Z" fill="#FF6F00" />
                </svg>
                <span className="text-xs font-medium text-[#666]">
                  30 day money back guarantee
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-5 text-center text-xl font-bold text-black md:text-2xl">
                Join Mindly Today
              </h3>

              {/* Feature list */}
              <div className="mb-5 space-y-3">
                {SIDEBAR_FEATURES.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3"
                  >
                    <FeatureIcon type={feature.icon} />
                    <span className="text-sm text-black">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <hr className="my-5 border-black/8" />

              {/* Course overview label */}
              <p className="mb-4 text-[10px] font-semibold tracking-widest text-[#999] uppercase">
                A quick overview of the course
              </p>

              {/* Bullet list */}
              <ul className="mb-6 space-y-3">
                {SIDEBAR_BULLETS.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#666]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 8L6.5 11L12.5 5"
                        stroke="#FF6F00"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <a
                href="#pricing"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6F00] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#E56300]"
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
              </a>

              {/* Curriculum partners */}
              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="text-xs font-bold text-black">AI</span>
                <span className="text-xs text-[#999]">Curriculum partners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
