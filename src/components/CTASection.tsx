import Image from "next/image";

const FEATURE_BADGES = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    text: "6 Weeks of Career-Oriented Training",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    text: "Learn by Doing, Not Watching",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    text: "Lifetime Access with All Future Updates",
  },
] as const;

export default function CTASection() {
  return (
    <section className="bg-[#F2F1EE] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[800px] text-center">
        {/* Section label */}
        <p className="mb-6 text-sm font-medium tracking-wide text-black/50">
          <span className="mr-1" role="img" aria-label="Rocket">
            🚀
          </span>
          Registrations Ongoing!
        </p>

        {/* Main heading */}
        <h2 className="mb-4 text-[32px] font-bold leading-[1.15] text-black md:text-[48px]">
          Enroll Now &amp; Get Instant Access for $497
        </h2>

        {/* Description */}
        <p className="mb-6 text-base leading-relaxed text-black/60 md:text-lg">
          Graduates report promotions, raises, or new opportunities within 3
          months.
        </p>

        {/* Social proof + avatars */}
        <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          {/* Overlapping avatars */}
          <div className="flex -space-x-2">
            <Image
              src="/images/student-1.jpg"
              alt="Student"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full border-2 border-[#F2F1EE] object-cover"
            />
            <Image
              src="/images/student-2.jpg"
              alt="Student"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full border-2 border-[#F2F1EE] object-cover"
            />
            <Image
              src="/images/student-3.png"
              alt="Student"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full border-2 border-[#F2F1EE] object-cover"
            />
          </div>

          {/* Handwritten text */}
          <p className="-rotate-2 font-[family-name:var(--font-gloria)] text-sm leading-tight text-black">
            2k+ professionals are already ahead of you
          </p>
        </div>

        {/* Orange CTA button */}
        <a
          href="#enroll"
          className="inline-flex items-center gap-2 rounded-full bg-[#FF6F00] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#E56300]"
        >
          Enroll Today - Save $169
          <Image
            src="/images/arrow-right.svg"
            alt=""
            width={16}
            height={16}
            className="invert"
          />
        </a>

        {/* Feature badges */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          {FEATURE_BADGES.map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2.5 text-xs font-medium text-black/70 sm:text-sm"
            >
              <span className="shrink-0 text-black/50">{badge.icon}</span>
              {badge.text}
            </span>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="mt-10 text-base leading-relaxed text-black/50">
          Learn the skill that turns everyday AI into extraordinary results.
        </p>
      </div>
    </section>
  );
}
