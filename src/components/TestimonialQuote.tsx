import Image from "next/image";

export default function TestimonialQuote() {
  return (
    <section className="bg-black px-[48px] py-[100px]">
      <div className="mx-auto max-w-[800px] flex flex-col items-center">
        {/* Quote mark */}
        <div className="mb-8 text-[#FF6F00]">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M14 28C14 32.4183 10.4183 36 6 36V40C12.6274 40 18 34.6274 18 28V12H6V24H14V28Z"
              fill="currentColor"
            />
            <path
              d="M38 28C38 32.4183 34.4183 36 30 36V40C36.6274 40 42 34.6274 42 28V12H30V24H38V28Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Quote text */}
        <blockquote className="mb-10 text-center text-xl leading-relaxed font-normal italic text-white md:text-2xl md:leading-relaxed">
          &ldquo;My manager was blown away. I used a technique from Module 4 to
          generate a full marketing strategy in an afternoon. This course
          didn&rsquo;t just teach me AI, it got me noticed.&rdquo;
        </blockquote>

        {/* Person info */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/student-4.png"
            alt="Cooper Geidt"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-white">Cooper Geidt</p>
            <p className="text-sm font-medium text-[rgb(163,163,163)]">Senior Prompt Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
