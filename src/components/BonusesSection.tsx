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
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <h2 className="mx-auto mb-14 max-w-[600px] text-center text-[24px] font-medium leading-[28.8px] text-white">
          Sign up before Friday and get{" "}
          <span className="font-medium">$396</span> in bonuses
        </h2>

        {/* Bonus cards */}
        <div className="flex flex-col gap-[16px] md:flex-row">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.title}
              className="flex flex-1 flex-col items-center rounded-[12px] px-[32px] py-[20px] text-center gap-[20px]"
              style={{
                backgroundColor: "rgba(20, 20, 20, 0.5)",
              }}
            >
              <GiftIcon />
              <p className="text-[18px] font-medium leading-[23.4px] text-white">
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
