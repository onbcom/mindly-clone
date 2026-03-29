import Image from "next/image";

interface PricingFeature {
  text: string;
}

interface PricingCard {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
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
      { text: "Lifetime access" },
    ],
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
      { text: "Lifetime access + Bonuses" },
    ],
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
      className="relative flex flex-col rounded-2xl p-8"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Popular badge */}
      {card.popular && (
        <span className="absolute top-6 right-6 rounded-full bg-[#FF6F00] px-3.5 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      )}

      {/* Plan name */}
      <p className="text-sm font-medium text-white/60">{card.name}</p>

      {/* Price */}
      <p className="mt-3 text-[48px] leading-none font-bold text-white">
        ${card.price}
      </p>

      {/* Description */}
      <p className="mt-4 text-base leading-relaxed text-white/50">
        {card.description}
      </p>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-white/10" />

      {/* What's included */}
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
        What&apos;s included
      </p>

      {/* Feature list */}
      <ul className="flex flex-col gap-3.5">
        {card.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-sm leading-relaxed text-white/70">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-col gap-3">
        <a
          href="#enroll"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6F00] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#E56300]"
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
          className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium text-white/70 transition-colors hover:text-white"
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
    <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[900px]">
        {/* Section label */}
        <p className="mb-4 text-center text-sm font-medium tracking-wide text-white/50">
          Our Pricing
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-14 max-w-[600px] text-center text-[32px] leading-[1.15] font-bold text-white md:text-[48px]">
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
