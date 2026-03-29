import Image from "next/image";

interface PricingFeature {
  text: string;
}

interface PricingCard {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  bottomLabel: string;
  installment: string;
  popular?: boolean;
}

const PRICING_CARDS: PricingCard[] = [
  {
    name: "Basic",
    price: 169,
    description: "Get ahead of the game by mastering generative AI.",
    features: [
      { text: "Instant access to the full 6-week curriculum" },
      { text: "All future updates and bonus content included" },
      { text: "Private community access" },
      { text: "Certificate of completion" },
    ],
    bottomLabel: "Lifetime access",
    installment: "or 3 payments of $50",
  },
  {
    name: "All Access",
    price: 459,
    description: "Get ahead of the game by mastering generative AI.",
    features: [
      { text: "Instant access to the full 6-week curriculum" },
      { text: "All future updates and bonus content included" },
      { text: "Private community access" },
      { text: "Certificate of completion" },
    ],
    bottomLabel: "Lifetime access + Bonuses",
    installment: "or 3 payments of $149",
    popular: true,
  },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <path
        d="M5 10.5L8.5 14L15 7"
        stroke="#FF6F00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingCardComponent({ card }: { card: PricingCard }) {
  return (
    <div
      className="relative flex flex-col rounded-[12px] p-[4px]"
      style={{
        backgroundColor: "rgba(20, 20, 20, 0.3)",
      }}
    >
      {/* Popular badge */}
      {card.popular && (
        <span className="absolute top-6 right-6 font-[family-name:var(--font-gloria)] text-[13px] leading-[16.9px] tracking-[1px] font-medium uppercase text-white">
          Most popular
        </span>
      )}

      {/* Plan name */}
      <p className="text-[18px] font-medium leading-[23.4px] text-white">{card.name}</p>

      {/* Price */}
      <p className="mt-3 text-[56px] font-semibold leading-[56px] tracking-[-1px] text-white">
        ${card.price}
      </p>

      {/* Description */}
      <p className="mt-4 text-[18px] font-medium leading-[23.4px] text-[rgb(163,163,163)]">
        {card.description}
      </p>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-white/10" />

      {/* What's included */}
      <p className="mb-4 text-[14px] font-medium leading-[16.8px] text-[rgb(209,209,209)] uppercase">
        WHAT&apos;S INCLUDED
      </p>

      {/* Feature list */}
      <ul className="flex flex-col gap-3.5">
        {card.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-[18px] font-medium leading-[23.4px] text-white">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Bottom label */}
      <p className="mt-6 text-[24px] font-medium leading-[28.8px] text-white">
        {card.bottomLabel}
      </p>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-col gap-3">
        <a
          href="#enroll"
          className="inline-flex h-[44px] items-center justify-center gap-2 rounded-[8px] bg-[rgb(255,111,0)] pl-[16px] pr-[4px] pt-[4px] pb-[4px] text-[16px] font-medium leading-[20.8px] text-white transition-colors hover:bg-[#E56300]"
        >
          Enroll now for ${card.price}
          <Image
            src="/images/arrow-right.svg"
            alt=""
            width={16}
            height={16}
            className="invert"
          />
        </a>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[8px] bg-transparent px-[24px] py-[12px] text-[16px] font-medium leading-[20.8px] text-white transition-colors hover:text-white"
          style={{ border: "1px solid rgba(255,255,255,0.15)" }}
        >
          {card.installment}
        </button>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="bg-black px-[48px] py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section label */}
        <p className="mb-4 text-center text-[22px] font-medium leading-[26.4px] text-[rgb(186,186,186)]">
          Our Pricing
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-14 max-w-[600px] text-center text-[32px] leading-[57.6px] font-semibold tracking-[-1px] text-white md:text-[48px]">
          Choose Your Path to{" "}
          <em className="italic text-[#FF6F00]">AI Mastery</em>
        </h2>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PRICING_CARDS.map((card) => (
            <PricingCardComponent key={card.name} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
