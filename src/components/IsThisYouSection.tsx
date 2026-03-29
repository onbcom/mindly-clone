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
    <section className="bg-[#F2F1EE] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Section label */}
        <p className="mb-6 text-center text-sm font-medium tracking-wide text-[#999]">
          Is this you?
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-16 max-w-[800px] text-center text-[32px] leading-[1.15] font-bold text-black md:text-[48px]">
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
              className="text-base leading-relaxed text-[#666]"
            >
              {point}
            </p>
          ))}
        </div>

        {/* Bottom label */}
        <p className="text-center text-sm font-medium italic text-[#FF6F00]">
          sounds familiar?
        </p>
      </div>
    </section>
  );
}
