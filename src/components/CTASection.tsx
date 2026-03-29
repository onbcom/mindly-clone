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
    <section className="bg-white px-[48px] pt-[100px] pb-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[48px] md:flex-row md:items-start md:justify-center">
        {/* Left column — text content */}
        <div className="flex w-full max-w-[530px] flex-col gap-[32px]">
          {/* Section label */}
          <p className="text-[22px] font-medium leading-[26.4px] text-[rgb(117,117,117)]">
            <span className="mr-1" role="img" aria-label="Rocket">
              🚀
            </span>
            Registrations Ongoing!
          </p>

          {/* Main heading */}
          <h2 className="text-[48px] font-semibold leading-[57.6px] tracking-[-1px] text-black">
            Enroll Now &amp; Get{" "}
            <span className="text-[rgb(255,111,0)]">Instant Access</span> for
            $497
          </h2>

          {/* Description */}
          <p className="text-[18px] font-medium leading-[23.4px] text-[rgb(72,72,72)]">
            Graduates report promotions, raises, or new opportunities within 3
            months.
          </p>

          {/* Social proof + avatars */}
          <div className="flex items-center gap-3">
            {/* Overlapping avatars */}
            <div className="flex -space-x-2">
              <Image
                src="/images/student-1.jpg"
                alt="Student"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/images/student-2.jpg"
                alt="Student"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/images/student-3.png"
                alt="Student"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            </div>

            {/* Handwritten text */}
            <p className="-rotate-2 font-[family-name:var(--font-gloria)] text-[13px] uppercase leading-[16.9px] tracking-[1px] text-black">
              2k+ professionals are already ahead of you
            </p>
          </div>

          {/* Feature list */}
          <ul className="flex flex-col gap-3">
            {FEATURE_BADGES.map((badge) => (
              <li
                key={badge.text}
                className="flex items-center gap-2 text-[18px] font-medium leading-[23.4px] text-black"
              >
                <span className="shrink-0 text-black/50">{badge.icon}</span>
                {badge.text}
              </li>
            ))}
          </ul>

          {/* Orange CTA button */}
          <a
            href="#enroll"
            className="inline-flex h-[44px] w-fit items-center gap-2 rounded-[8px] bg-[rgb(255,111,0)] py-[4px] pr-[4px] pl-[16px] text-[16px] font-medium text-white transition-colors hover:bg-[#E56300]"
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
        </div>

        {/* Right column — placeholder for image/visual */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
