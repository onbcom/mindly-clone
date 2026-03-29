const FOR_YOU_ITEMS = [
  "You want to master AI for professional work",
  "You're tired of guessing what prompts to write",
  "You value practical skills over academic theory",
  "You need AI skills to stay ahead in your field",
  "You're ready to become your team's AI expert",
] as const;

const NOT_FOR_YOU_ITEMS = [
  "You want a free course with basic AI tips",
  "You prefer theory over practical application",
  "You dislike structured, step-by-step training",
  "You just want to explore AI without purpose",
  "You're seeking a math-heavy AI deep dive",
] as const;

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4 10.5L8 14.5L16 6.5"
        stroke="#FF6F00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M6 6L14 14M14 6L6 14"
        stroke="#DC2626"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PerfectFitSection() {
  return (
    <section className="bg-[#F2F1EE] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Section label */}
        <p className="mb-6 text-center text-sm font-medium tracking-wide text-[#999]">
          Is this for you?
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-16 max-w-[800px] text-center text-[32px] leading-[1.15] font-bold text-black md:text-[48px]">
          This Course Is a Perfect Fit If You&apos;re Ready to ...
        </h2>

        {/* Two columns */}
        <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left - For you */}
          <div className="overflow-hidden rounded-2xl">
            <div className="rounded-t-2xl bg-[#FF6F00] px-6 py-4">
              <h3 className="text-sm font-bold tracking-wider text-white uppercase">
                This is for you if:
              </h3>
            </div>
            <div className="rounded-b-2xl bg-white px-6 py-6">
              <ul className="flex flex-col gap-4">
                {FOR_YOU_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-base leading-relaxed text-[#333]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Not for you */}
          <div className="overflow-hidden rounded-2xl">
            <div className="rounded-t-2xl bg-[#1A1A1A] px-6 py-4">
              <h3 className="text-sm font-bold tracking-wider text-white uppercase">
                This is not for you if:
              </h3>
            </div>
            <div className="rounded-b-2xl bg-white px-6 py-6">
              <ul className="flex flex-col gap-4">
                {NOT_FOR_YOU_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XIcon />
                    <span className="text-base leading-relaxed text-[#333]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
