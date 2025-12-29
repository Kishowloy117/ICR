import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Users,
  TrendingUp,
  ShoppingCart,
  Globe,
  Briefcase,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full relative bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] text-white py-12">
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
            Services
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans leading-tight text-white">
            Explore Our
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-emerald-200">
              services
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-slate-200 md:text-base">
            Our services are designed to support complex decisions through
            rigorous research, structured analysis, and clear, decision-ready
            outputs.
          </p>
        </div>
      </section>

      <section className="w-full bg-white from-emerald-50/50 via-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50/40 px-4 py-1 text-sm text-emerald-600">
              What We Do
            </div>

            <h3 className="mt-6 text-3xl font-sans text-slate-900 sm:text-4xl ">
              Why Choose Insight Consultancy & Research
            </h3>

            <p className="mt-3 text-sm text-slate-500">
              At Insight Consultancy & Research (ICR), we support organisations
              to move from evidence to insight — and from insight to clear,
              defensible decisions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Quantitative Research",
                desc: "Survey design, modelling, and analytical techniques used to generate robust evidence and support defensible strategic, operational, and policy decisions at scale. Includes large-scale surveys, performance measurement, and analytical modelling designed to address complex decision requirements.",
              },
              {
                title: "Qualitative Research",
                desc: "In-depth interviews and qualitative methods to understand behaviours, perceptions, and contextual drivers behind observed outcomes, informing interpretation and decision-making. Approaches include stakeholder interviews, focus groups, and contextual enquiry to explain not just what is happening, but why.",
                highlighted: true,
              },
              {
                title: "Tracking Studies",
                desc: "Ongoing tracking frameworks designed to monitor performance over time, identify emerging trends, and support timely operational and strategic decisions. Used for brand, programme, or performance tracking where consistency, comparability, and timely insight are critical.",
              },
              {
                title: "Retail & Shopper Research",
                desc: "Structured field audits and observational research designed to generate reliable evidence from real-world environments and operating contexts. Covers store audits, shelf visibility, and in-store behaviour to translate on-the-ground realities into actionable findings.",
              },
              {
                title: "Market Assessments & Opportunity Analysis",
                desc: "Market assessments, segmentation, and comparative analysis to inform prioritisation, strategy, and investment decisions in complex and evolving markets. Applied in market entry, expansion planning, and investment assessment contexts.",
              },
              {
                title: "Strategic Consulting",
                desc: "Advisory and decision-support services that translate research findings into clear options, implications, and recommendations for decision-makers. Focused on helping leadership teams evaluate trade-offs, risks, and implications before committing resources.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-white p-6 shadow-sm transition-all ${
                  s.highlighted
                    ? "bg-emerald-50 border border-emerald-200 scale-100"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50">
                    <svg
                      className="h-5 w-5 text-emerald-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-500">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Work Process */}
        <section className="mt-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="max-w-md">
                <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50/40 px-3 py-1 text-xs text-emerald-600 mb-4">
                  How we work
                </div>

                <h3 className="text-4xl font-extrabold text-slate-900 mb-4">
                  4 Step Work Process
                </h3>

                <p className="text-sm text-slate-600">
                  We combine rigorous methods and practical experience to
                  deliver research that informs confident decisions.
                </p>

                <div className="mt-6 flex items-center space-x-3">
                  <div className="h-1 w-20 rounded bg-emerald-400"></div>
                  <div className="h-1 w-24 rounded bg-slate-200"></div>
                  <div className="h-1 w-24 rounded bg-slate-200"></div>
                  <div className="h-1 w-24 rounded bg-slate-200"></div>
                </div>
              </div>

              <div className="relative">
                <div
                  className="absolute left-11 top-10 bottom-0 w-0.75 bg-emerald-200 pointer-events-none"
                  aria-hidden
                />

                <div className="space-y-8 pl-6">
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center relative z-10">
                      <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold">
                        1
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-emerald-600">
                        Clear Decisions
                      </h4>
                      <p className="mt-2 text-sm text-slate-600">
                        Decision requirements clarified upfront
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center relative z-10">
                      <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold">
                        2
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-emerald-600">
                        Structured Delivery
                      </h4>
                      <p className="mt-2 text-sm text-slate-600">
                        Structured delivery and quality assurance processes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center relative z-10">
                      <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold">
                        3
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-emerald-600">
                        Continuous Oversight
                      </h4>
                      <p className="mt-2 text-sm text-slate-600">
                        Ongoing validation and oversight
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center relative z-10">
                      <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold">
                        4
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-emerald-600">
                        Actionable Reporting
                      </h4>
                      <p className="mt-2 text-sm text-slate-600">
                        Clear, decision-ready reporting
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center relative z-10">
                      <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold">
                        5
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-emerald-600">
                        Governed Engagements
                      </h4>
                      <p className="mt-2 text-sm text-slate-600">
                        Engagements scoped and governed to meet client,
                        regulatory, and stakeholder requirements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center py-4">
          <Button className="bg-emerald-500 px-6 py-6 text-sm font-semibold hover:bg-emerald-600">
            Discuss Your Research or Evaluation Requirements
          </Button>
          <Link href="/ContactUS" className="inline-block text-sm">
            <Button className="bg-transparent border px-6 py-6 border-emerald-400 text-emerald-600 hover:bg-emerald-50">
              Request an Initial Discussion
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
