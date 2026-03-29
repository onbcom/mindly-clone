interface Bonus {
  title: string;
  value: string;
}

const BONUSES: Bonus[] = [
  {
    title: "The 'AI for Productivity' Bundle",
    value: "$99 Value",
  },
  {
    title: "The Ultimate Prompt Library",
    value: "$199 Value",
  },
  {
    title: "Live Q&A Recordings Vault",
    value: "$98 Value",
  },
];

function GiftIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-4"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="14"
        width="24"
        height="14"
        rx="2"
        stroke="#FF6F00"
        strokeWidth="2"
      />
      <rect
        x="6"
        y="8"
        width="20"
        height="6"
        rx="2"
        stroke="#FF6F00"
        strokeWidth="2"
      />
      <path d="M16 8V28" stroke="#FF6F00" strokeWidth="2" />
      <path
        d="M16 10C16 10 13 6 10 8C7 10 16 10 16 10Z"
        stroke="#FF6F00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 10C16 10 19 6 22 8C25 10 16 10 16 10Z"
        stroke="#FF6F00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BonusesSection() {
  return (
    <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1000px]">
        {/* Heading */}
        <h2 className="mx-auto mb-14 max-w-[600px] text-center text-[24px] leading-[1.3] font-bold text-white md:text-[32px]">
          Sign up before Friday and get{" "}
          <span className="font-extrabold">$396</span> in bonuses
        </h2>

        {/* Bonus cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.title}
              className="flex flex-col items-center rounded-2xl px-6 py-8 text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <GiftIcon />
              <p className="text-base font-semibold leading-snug text-white">
                {bonus.title}
              </p>
              <p className="mt-2 text-sm font-medium text-[#FF6F00]">
                ({bonus.value})
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
