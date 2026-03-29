const PAIN_POINTS = [
  "Spending hours trying to \"trick\" the AI into giving you what you want.",
  "Your AI-generated content sounds robotic and lacks strategic depth.",
  "Worrying that your skills are becoming obsolete in the age of AI?",
  "Do you have a growing fear of being left behind?",
  "Are you overwhelmed by the sheer number of AI tools?",
  "Do you waste hours rewriting and tweaking prompts?",
] as const;

export default function IsThisYouSection() {
  return (
    <section className="bg-white px-[48px] py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section label */}
        <p className="mb-6 text-center text-[22px] font-medium leading-[26.4px] text-[#757575]">
          Is this you?
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-16 max-w-[800px] text-center text-[32px] leading-[57.6px] font-semibold tracking-[-1px] text-black md:text-[48px]">
          Does Your Experience with AI Feel More{" "}
          <span className="italic text-[#FF6F00]">
            Frustrating Than Futuristic?
          </span>
        </h2>

        {/* Pain points grid */}
        <div className="mx-auto mb-16 grid max-w-[960px] grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-3">
          {PAIN_POINTS.map((point) => (
            <p
              key={point}
              className="text-[18px] font-medium leading-[23.4px] text-black"
            >
              {point}
            </p>
          ))}
        </div>

        {/* Bottom label */}
        <p className="text-center text-[13px] leading-[16.9px] tracking-[1px] uppercase text-black font-[family-name:var(--font-gloria)]">
          sounds familiar?
        </p>
      </div>
    </section>
  );
}
