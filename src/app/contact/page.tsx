import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero area with dark background */}
        <section className="bg-[#0A0A0A] pt-32 pb-16">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Get in touch with us
            </h1>
            <p className="text-white/60 mt-4 text-lg">
              Unlock the secret sauce behind world&#8209;class products.
            </p>
          </div>
        </section>

        {/* Contact form + testimonial */}
        <section className="bg-[#0A0A0A] pb-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left: Contact form */}
              <div>
                <h2 className="text-white text-2xl font-semibold mb-8">
                  Send us a message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/60 text-sm mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Smith"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6F00] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white/60 text-sm mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@framer.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6F00] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white/60 text-sm mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your message..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6F00] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#FF6F00] hover:bg-[#E56300] text-white font-medium px-8 py-3 rounded-lg transition-colors"
                  >
                    Enroll now for $499
                    <span className="bg-black/15 rounded-md p-1">
                      <Image
                        src="/images/arrow-right.svg"
                        alt=""
                        width={14}
                        height={14}
                        className="invert"
                      />
                    </span>
                  </button>
                </form>
              </div>

              {/* Right: Testimonial card */}
              <div className="flex items-start justify-center lg:justify-end">
                <div className="bg-white rounded-2xl p-6 max-w-[400px] w-full shadow-lg">
                  {/* Person header */}
                  <div className="flex items-center gap-3 mb-6">
                    <Image
                      src="/images/student-3.png"
                      alt="Jack Cooper"
                      width={56}
                      height={56}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-black">Jack Cooper</p>
                      <p className="text-sm text-gray-500">
                        Senior Prompt Engineer
                      </p>
                    </div>
                    <span className="ml-auto bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                      EcoPure
                    </span>
                  </div>

                  {/* Before */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Before
                    </span>
                    <p className="text-gray-600 text-sm italic mt-1">
                      &ldquo;I kept copying random prompts from Twitter threads,
                      hoping one would finally work.&rdquo;
                    </p>
                  </div>

                  {/* After */}
                  <div className="bg-[#0A0A0A] rounded-xl p-4">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                      After
                    </span>
                    <p className="text-white text-sm mt-1">
                      &ldquo;I now have my own prompt system that consistently
                      delivers high-quality outputs tailored to any
                      project&mdash;no more guesswork or rewrites.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
