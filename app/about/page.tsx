import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full relative bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] text-white py-6">
        {/* decorative pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full opacity-15"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0 200 C150 120 350 280 600 200 C850 120 1050 280 1200 200"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="18"
              fill="none"
            />
            <path
              d="M0 260 C200 200 400 320 600 260 C800 200 1000 320 1200 260"
              stroke="rgba(255,255,255,0.025)"
              strokeWidth="14"
              fill="none"
            />
            <path
              d="M0 140 C180 80 380 200 600 140 C820 80 1020 200 1200 140"
              stroke="rgba(255,255,255,0.02)"
              strokeWidth="12"
              fill="none"
            />
          </svg>
          <div className="absolute inset-0 bg-linear-to-br from-black/20 to-black/40 pointer-events-none" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 mb-4">
            About
          </div>

          <h1 className="mx-auto max-w-4xl text-3xl font-sans leading-tight text-white md:text-5xl">
            About Insight Consultancy & Research
            <br />
            <span className="text-emerald-400">Who We Are</span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
            Insight Consultancy & Research (ICR) is an independent consultancy
            specialising in research-led advisory and evidence-based decision
            support. We work with organisations that operate in complex
            environments and require clear, defensible insight to inform policy,
            strategy, and implementation.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-slate-200 md:text-base">
            Our role is not to advocate predetermined solutions, but to help
            decision-makers understand realities on the ground, assess options
            objectively, and move forward with confidence.
          </p>

          <div className="mt-8">
            <Button className="bg-emerald-500 px-6 py-3 text-sm font-semibold hover:bg-emerald-600 rounded-md">
              Discuss Your Requirements »
            </Button>
          </div>
        </div>
      </section>

      {/* Positioning / Principles Zig-Zag */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 space-y-16">
          {[
            {
              title: "Our Positioning",
              img: "/images/expertise/expersite_2.jpeg",
              content: (
                <>
                  <p className="text-sm text-slate-600 mb-3">
                    ICR is positioned at the intersection of rigorous research
                    and practical decision-making. We operate as a trusted
                    analytical partner, supporting leaders who must balance
                    evidence, context, and constraints when making high-stakes
                    decisions.
                  </p>

                  <p className="text-sm text-slate-600">
                    We deliberately maintain a focused scope: research,
                    analysis, and advisory support that translate evidence into
                    clarity. This allows us to remain independent,
                    methodologically sound, and outcome-oriented across all
                    engagements.
                  </p>
                </>
              ),
            },
            {
              title: "Integrity and Independence",
              img: "/images/expertise/expersite_3.jpeg",
              content: (
                <>
                  <p className="text-sm text-slate-600 mb-3">
                    Integrity underpins all of ICR’s work. We maintain
                    independence in our analysis and recommendations, ensuring
                    that findings are guided by evidence rather than assumptions
                    or external pressures.
                  </p>

                  <p className="text-sm text-slate-600">
                    Our governance and quality assurance practices are designed
                    to safeguard objectivity, protect data confidentiality, and
                    ensure methodological robustness across all projects.
                  </p>
                </>
              ),
            },
            {
              title: "Experience Across Contexts",
              img: "/images/expertise/expersite_4.jpeg",
              content: (
                <>
                  <p className="text-sm text-slate-600 mb-3">
                    ICR has supported organisations operating across diverse
                    sectors and institutional contexts, including public sector
                    bodies, private enterprises, and international stakeholders.
                    While each engagement is unique, our work is consistently
                    grounded in an understanding of local realities, stakeholder
                    dynamics, and decision environments.
                  </p>

                  <p className="text-sm text-slate-600">
                    Rather than promoting generic frameworks, we adapt our
                    thinking to the specific context in which decisions are
                    being made.
                  </p>
                </>
              ),
            },
            {
              title: "Looking Ahead",
              img: "/images/expertise/expersite_1.jpeg",
              content: (
                <>
                  <p className="text-sm text-slate-600 mb-3">
                    As decision environments become more complex and data
                    availability increases, the need for structured,
                    responsible, and transparent analysis continues to grow. ICR
                    remains committed to evolving its tools and approaches while
                    maintaining its core principles of independence, rigour, and
                    clarity.
                  </p>

                  <p className="text-sm text-slate-600">
                    Our focus remains on supporting organizations as they
                    navigate uncertainty and make informed decisions with
                    confidence.
                  </p>
                </>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12"
            >
              {i % 2 === 0 ? (
                <>
                  <div className="md:order-1 md:max-w-xl">
                    <h4 className="text-2xl font-semibold text-slate-900 mb-4">
                      {item.title}
                    </h4>
                    <div className="prose max-w-none">{item.content}</div>
                  </div>

                  <div className="md:order-2 flex justify-center md:justify-end">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100 max-w-md w-80">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full aspect-square object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:order-1 flex justify-center md:justify-start">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100 max-w-md w-80">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full aspect-square object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="md:order-2 md:max-w-xl">
                    <h4 className="text-2xl font-semibold text-slate-900 mb-4">
                      {item.title}
                    </h4>
                    <div className="prose max-w-none">{item.content}</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 mb-8 bg-gradient-to-br from-[#0a1f2e] to-[#041a2e] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="max-w-md">
              <div className="inline-block rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-xs text-emerald-400 mb-4">
                How we work
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-4">
                How We Work with Clients
              </h3>

              <p className="text-md text-slate-300">
                We engage closely with clients throughout the lifecycle of an
                assignment, beginning with a clear understanding of decision
                needs and ending with outputs designed for real-world use.
              </p>
              <br />
              <p className="text-md text-slate-300">
                We value long-term partnerships built on trust, transparency,
                and consistent delivery.
              </p>

              <div className="mt-6 flex items-center space-x-3">
                <div className="h-1 w-20 rounded bg-emerald-400"></div>
                <div className="h-1 w-24 rounded bg-slate-600"></div>
                <div className="h-1 w-24 rounded bg-slate-600"></div>
                <div className="h-1 w-24 rounded bg-slate-600"></div>
              </div>
            </div>

            <div className="relative">
              <div className="inline-block rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-xs text-emerald-400 mb-4">
                Our approach emphasises:
              </div>
              <div className="space-y-8 pl-6">
                <div className="flex items-start gap-8">
                  <div className="flex flex-col items-center relative z-10">
                    <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold">
                      1
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Careful framing of questions before data collection begins
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center relative z-10">
                    <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold">
                      2
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Ongoing dialogue to ensure relevance and alignment
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center relative z-10">
                    <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold">
                      3
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Structured outputs that support decision-making, not just
                      reporting
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
