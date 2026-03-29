interface StatCard {
  value: string;
  title: string;
  description: string;
  orangeValue: boolean;
}

const STATS: StatCard[] = [
  {
    value: "10+",
    title: "Hours Saved Weekly",
    description:
      "On average, students reclaim a full workday using AI-powered workflows.",
    orangeValue: true,
  },
  {
    value: "88%",
    title: "Career Acceleration",
    description:
      "Graduates report promotions, raises, or new opportunities within 3 months.",
    orangeValue: true,
  },
  {
    value: "4.9/5",
    title: "Course Rating",
    description:
      "Consistently rated 'Excellent' across thousands of verified reviews.",
    orangeValue: true,
  },
  {
    value: "92%",
    title: "Course Completion Rate",
    description:
      "This industry-leading completion rate is a testament to our engaging.",
    orangeValue: true,
  },
  {
    value: "88%",
    title: "Career Acceleration",
    description:
      "Graduates report promotions, raises, or new opportunities within 3 months.",
    orangeValue: true,
  },
  {
    value: "5+",
    title: "Portfolio-Ready Projects",
    description:
      "Graduate with a professional portfolio of over 5 completed projects.",
    orangeValue: true,
  },
];

export default function ResultsSection() {
  return (
    <section id="why-choose-us" className="bg-[#F2F1EE] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Section labels */}
        <p className="mb-2 text-center text-sm font-medium tracking-wide text-[#999]">
          Why choose us?
        </p>
        <p className="mb-6 text-center font-[family-name:var(--font-gloria)] text-lg text-[#FF6F00] -rotate-2">
          This can be you
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-16 max-w-[700px] text-center text-[32px] leading-[1.15] font-bold text-black md:text-[48px]">
          The{" "}
          <span className="italic text-[#FF6F00]">Results</span> Speak for
          Themselves
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat, index) => (
            <div
              key={`${stat.title}-${index}`}
              className="rounded-xl border border-black/8 bg-white p-6"
            >
              <p
                className={`mb-2 text-[32px] font-bold leading-tight ${
                  stat.orangeValue ? "text-[#FF6F00]" : "text-black"
                }`}
              >
                {stat.value}
              </p>
              <p className="mb-2 text-lg font-semibold text-black">
                {stat.title}
              </p>
              <p className="text-sm leading-relaxed text-[#666]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
