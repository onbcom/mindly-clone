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
    <section id="why-choose-us" className="bg-white px-[48px] py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section labels */}
        <p className="mb-2 text-center text-[22px] font-medium leading-[26.4px] text-[rgb(117,117,117)]">
          Why choose us?
        </p>
        <p className="mb-6 text-center font-[family-name:var(--font-gloria)] text-[13px] leading-[16.9px] tracking-[1px] uppercase text-black -rotate-2">
          This can be you
        </p>

        {/* Main heading */}
        <h2 className="mx-auto mb-16 max-w-[700px] text-center text-[32px] leading-[57.6px] font-semibold tracking-[-1px] text-black md:text-[48px]">
          The{" "}
          <span className="italic text-[#FF6F00]">Results</span> Speak for
          Themselves
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] bg-[rgb(242,241,238)] p-[24px] sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat, index) => (
            <div
              key={`${stat.title}-${index}`}
              className="p-6"
            >
              <p
                className={`mb-2 text-[32px] font-bold leading-tight ${
                  stat.orangeValue ? "text-[#FF6F00]" : "text-black"
                }`}
              >
                {stat.value}
              </p>
              <p className="mb-2 text-[22px] font-medium leading-[26.4px] text-black">
                {stat.title}
              </p>
              <p className="text-[18px] font-medium leading-[23.4px] text-[rgb(72,72,72)]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
