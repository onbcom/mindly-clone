import Image from "next/image";

function YouTubeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33Z"
        fill="currentColor"
      />
      <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54Z" fill="#F2F1EE" />
    </svg>
  );
}

function XTwitterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM6.89 20.452H3.58V9h3.31v11.452Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function InstructorSection() {
  return (
    <section className="bg-white px-[48px] pt-[100px] pb-[120px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section label */}
        <p className="mb-6 text-center text-[22px] font-medium leading-[26.4px] text-[rgb(117,117,117)]">
          Meet Your Instructor
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-16 max-w-[800px] text-center text-[32px] leading-[57.6px] font-semibold tracking-[-1px] text-black md:text-[48px]">
          Your Guide to the{" "}
          <span className="italic text-[#FF6F00]">AI Revolution</span>
        </h2>

        {/* Two-column layout */}
        <div className="mx-auto grid max-w-[960px] grid-cols-1 items-start gap-10 md:grid-cols-[2fr_3fr] lg:gap-16">
          {/* Left: Instructor photo */}
          <div className="mx-auto w-full max-w-[320px] md:mx-0">
            <Image
              src="/images/instructor.png"
              alt="Cooper Geidt — Senior Prompt Engineer"
              width={400}
              height={500}
              className="w-full rounded-2xl object-cover"
              sizes="(max-width: 768px) 320px, 400px"
            />
          </div>

          {/* Right: Bio info card */}
          <div className="flex flex-col gap-[32px] rounded-[16px] bg-[rgb(10,10,10)] p-[24px]">
            <div>
              <h3 className="text-[22px] font-medium leading-[26.4px] text-white">
                Cooper Geidt
              </h3>
              <p className="mt-1 text-[16px] font-medium leading-[20.8px] text-[rgb(163,163,163)]">
                Senior Prompt Engineer
              </p>
            </div>

            <div>
              <p className="text-[14px] font-medium leading-[16.8px] text-white">
                BIO
              </p>
              <p className="mt-3 text-[18px] font-medium leading-[23.4px] text-[rgb(232,232,232)]">
                My work has been featured in{" "}
                <span className="font-semibold text-white">Forbes</span>,{" "}
                <span className="font-semibold text-white">TechCrunch</span> and
                I&apos;ve helped teams at{" "}
                <span className="font-semibold text-white">Salesforce</span> build
                their AI strategies. I&apos;ve distilled everything I&apos;ve
                learned into this single program. My success is measured by your
                success. Let&apos;s get started.
              </p>
            </div>

            {/* Stats */}
            <p className="text-[18px] font-medium leading-[23.4px] text-[rgb(209,209,209)]">
              240K+ Followers
            </p>
          </div>
        </div>

        {/* As Featured On — outside the card */}
        <div className="mx-auto mt-10 max-w-[960px]">
          <p className="text-[22px] font-medium leading-[26.4px] text-[rgb(26,26,26)]">
            As Featured On
          </p>
          <div className="mt-4 flex items-center gap-5">
            <a
              href="#"
              className="text-[#666] transition-colors hover:text-black"
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </a>
            <a
              href="#"
              className="text-[#666] transition-colors hover:text-black"
              aria-label="X (Twitter)"
            >
              <XTwitterIcon />
            </a>
            <a
              href="#"
              className="text-[#666] transition-colors hover:text-black"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              className="text-[#666] transition-colors hover:text-black"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
