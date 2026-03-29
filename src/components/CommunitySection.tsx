import Image from "next/image";

const AVATAR_POSITIONS = [
  { src: "/images/student-1.jpg", top: "8%", left: "10%", size: 48 },
  { src: "/images/student-2.jpg", top: "15%", right: "8%", size: 44 },
  { src: "/images/student-3.png", bottom: "20%", left: "5%", size: 40 },
  { src: "/images/student-4.png", bottom: "12%", right: "10%", size: 46 },
  { src: "/images/student-1.jpg", top: "45%", left: "2%", size: 36 },
  { src: "/images/student-2.jpg", top: "40%", right: "3%", size: 38 },
] as const;

export default function CommunitySection() {
  return (
    <section className="bg-[#F2F1EE] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Section label */}
        <p className="mb-6 text-center text-[22px] font-medium leading-[26.4px] text-[rgb(117,117,117)]">
          Join Our Community
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-6 max-w-[800px] text-center text-[32px] leading-[57.6px] font-semibold tracking-[-1px] text-black md:text-[48px]">
          Join an{" "}
          <span className="italic text-[#FF6F00]">Exclusive</span> Network of
          AI Innovators
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-[640px] text-center text-[18px] font-medium leading-[23.4px] text-[#666]">
          Join our private community to access discussions, job opportunities,
          and insights you won&apos;t find on Twitter or any public forum.
        </p>

        {/* CTA button */}
        <div className="mb-16 flex justify-center">
          <a
            href="#community"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF6F00] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#E56300]"
          >
            Join Our Community - It&apos;s Free
            <Image
              src="/images/arrow-right.svg"
              alt=""
              width={16}
              height={16}
              className="brightness-0 invert"
            />
          </a>
        </div>

        {/* Globe visualization */}
        <div className="relative mx-auto mb-16 flex items-center justify-center">
          <div className="relative h-[320px] w-[320px] md:h-[420px] md:w-[420px]">
            {/* Globe sphere */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, #2A2A2A 0%, #111111 50%, #0A0A0A 100%)",
                boxShadow:
                  "0 0 80px rgba(255, 111, 0, 0.08), inset 0 0 60px rgba(0,0,0,0.5)",
              }}
            />

            {/* Dotted world map pattern overlay */}
            <div
              className="absolute inset-[10%] rounded-full opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />

            {/* Equator line */}
            <div
              className="absolute top-1/2 left-[8%] right-[8%] h-[1px] -translate-y-1/2 opacity-10"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
              }}
            />

            {/* Floating avatars */}
            {AVATAR_POSITIONS.map((avatar, i) => (
              <div
                key={i}
                className="absolute z-10"
                style={{
                  top: "top" in avatar ? avatar.top : undefined,
                  bottom: "bottom" in avatar ? avatar.bottom : undefined,
                  left: "left" in avatar ? avatar.left : undefined,
                  right: "right" in avatar ? avatar.right : undefined,
                }}
              >
                <div
                  className="overflow-hidden rounded-full border-2 border-white/20"
                  style={{
                    width: avatar.size,
                    height: avatar.size,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <Image
                    src={avatar.src}
                    alt="Community member"
                    width={avatar.size}
                    height={avatar.size}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company logos */}
        <div className="flex flex-col items-center">
          <p className="mb-6 text-sm font-medium text-[#999]">
            Our grads work here:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-[14px] font-medium text-[#999]">
              Top AI Companies
            </span>
            {[1, 2, 3, 4].map((n) => (
              <Image
                key={n}
                src="/images/company-logo.svg"
                alt="Partner company"
                width={100}
                height={32}
                className="h-8 w-auto opacity-40 grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
