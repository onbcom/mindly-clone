import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

const BRANDS: Brand[] = [
  { name: "Bitwise", logo: "/images/brand-1.svg" },
  { name: "LogiTech", logo: "/images/brand-2.svg" },
  { name: "BluePeak", logo: "/images/brand-3.svg" },
  { name: "BuildPro", logo: "/images/brand-4.svg" },
  { name: "Bitwise", logo: "/images/brand-1.svg" },
];

const BRANDS_ROW_1 = [...BRANDS, ...BRANDS];
const BRANDS_ROW_2 = [...BRANDS].reverse().concat([...BRANDS].reverse());

function BrandItem({ brand }: { brand: Brand }) {
  return (
    <div className="flex items-center gap-3 px-6">
      <Image
        src={brand.logo}
        alt={brand.name}
        width={130}
        height={38}
        className="h-[38px] w-auto opacity-80"
      />
    </div>
  );
}

function MarqueeRow({
  brands,
  reverse = false,
}: {
  brands: Brand[];
  reverse?: boolean;
}) {
  const items = [...brands, ...brands];

  return (
    <div className="overflow-hidden">
      <div
        className={reverse ? "animate-marquee-reverse" : "animate-marquee"}
        style={{ display: "flex", width: "max-content" }}
      >
        {items.map((brand, i) => (
          <div key={i} className="flex items-center">
            <BrandItem brand={brand} />
            <span className="mx-4 text-[20px] text-white/20">&#8226;</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GradsWorkHereSection() {
  return (
    <section
      style={{
        backgroundColor: "rgb(10, 10, 10)",
        padding: "100px 48px 120px",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Heading area */}
        <div className="relative mb-16 flex flex-col items-center">
          <h2 className="text-center text-[32px] font-semibold leading-[57.6px] tracking-[-1px] text-white md:text-[48px]">
            Our grads work here:
          </h2>

          {/* "Top AI Companies" annotation */}
          <span
            className="absolute right-0 top-0 font-[family-name:var(--font-gloria)] text-[13px] uppercase tracking-[1px] text-white md:right-[10%]"
            style={{ transform: "rotate(-6deg)" }}
          >
            Top AI Companies
          </span>
        </div>

        {/* Brand logos marquee */}
        <div className="flex flex-col gap-6">
          <MarqueeRow brands={BRANDS_ROW_1} />
          <MarqueeRow brands={BRANDS_ROW_2} reverse />
        </div>
      </div>
    </section>
  );
}
