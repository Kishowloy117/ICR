"use server";

import Carousel from "./Carousel";
import { Button } from "@/components/ui/button";

export default async function name() {
  // } Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#041a2e] via-[#062944] to-[#041a2e]">
      {/* Hero Content */}
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-12 text-center">
        <h1 className="mx-auto max-w-3xl text-3xl font-sans leading-tight text-white md:text-5xl">
          Turning Insight into
          <br />
          <span className="text-emerald-400">Informed Decisions</span>
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
          Insight Consultancy & Research (ICR) partners with organizations to
          deliver evidence-based research, strategic analysis, and actionable
          insights.
        </p>

        <p className="mx-auto mt-2 max-w-2xl text-sm font-semibold leading-relaxed text-slate-200 md:text-base">
          We help clients navigate complexity and make confident, informed
          decisions.
        </p>

        {/* Feature Row */}
        <div className="mt-6 mx-auto flex w-full max-w-3xl flex-col items-stretch gap-3 text-left text-slate-200 sm:flex-row sm:items-center">
          {/* Card 1 */}
          <div className="w-full sm:flex-1 rounded-lg p-4 sm:p-5 border-l-4 border-emerald-400/30">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md text-emerald-400">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-sm font-semibold text-white">Research</div>
                <div className="mt-1 text-xs text-slate-200">
                  Rigorous methodologies and reliable evidence
                </div>
              </div>
            </div>
          </div>

          {/* Arrow (visible on sm+) */}
          <div className="hidden sm:flex items-center justify-center px-2">
            <svg
              className="h-6 w-6 text-emerald-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:flex-1 rounded-lg p-4 sm:p-5 border-l-4 border-slate-200/10">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md text-emerald-400">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3v18h18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 14l4-4 4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-sm font-semibold text-white">Insight</div>
                <div className="mt-1 text-xs text-slate-200">
                  Clear analysis that explains what the data means
                </div>
              </div>
            </div>
          </div>

          {/* Arrow (visible on sm+) */}
          <div className="hidden sm:flex items-center justify-center px-2">
            <svg
              className="h-6 w-6 text-emerald-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:flex-1 rounded-lg p-4 sm:p-5 border-l-4 border-emerald-400/30">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md text-emerald-400">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 8v4l2 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-sm font-semibold text-white">
                  Strategic Clarity
                </div>
                <div className="mt-1 text-xs text-slate-200">
                  Actionable direction for confident decisions
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button className="bg-emerald-500 px-5 py-2.5 text-sm font-semibold hover:bg-emerald-600">
            Request a Consultation »
          </Button>
          <Button
            // variant="outline"
            className="bg-transparent border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black"
          >
            Explore Our Services
          </Button>
        </div>
      </section>

      {/* Image Carousel */}
      <Carousel
        interval={4500}
        heightClass="h-[360px] md:h-[420px]"
        images={[
          {
            src: "/images/WhatsApp Image 2025-12-20 at 8.39.39 PM (1).jpeg",
            alt: "Slide 1",
          },
          {
            src: "/images/WhatsApp Image 2025-12-20 at 8.39.39 PM (2).jpeg",
            alt: "Slide 2",
          },
          {
            src: "/images/WhatsApp Image 2025-12-20 at 8.39.39 PM.jpeg",
            alt: "Slide 3",
          },
          {
            src: "/images/WhatsApp Image 2025-12-20 at 8.39.40 PM.jpeg",
            alt: "Slide 4",
          },
          {
            src: "/images/WhatsApp Image 2025-12-20 at 8.39.42 PM.jpeg",
            alt: "Slide 5",
          },
        ]}
      />

      {/* About / Features Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 items-start md:items-center">
            {/* Left: Content */}
            <div className="max-w-lg">
              <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50/40 px-3 py-1 text-sm text-emerald-600">
                Expertise
              </div>

              <h2 className="mt-6 text-3xl font-sans leading-tight text-slate-900 sm:text-4xl">
                Our Expertise
              </h2>

              <p className="mt-4 text-sm text-slate-600">
                At Insight Consultancy & Research (ICR), we provide tailored
                research and advisory services designed to support strategic
                planning, policy development, and organizational growth.
              </p>

              <div className="mt-6 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Market &amp; Social Research:
                      </div>
                      <div className="mt-1 text-xs text-slate-600">
                        Generating reliable data and insights to understand
                        markets, communities, and stakeholders.
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Strategic Advisory:
                      </div>
                      <div className="mt-1 text-xs text-slate-600">
                        Supporting evidence-based decision-making through
                        analysis and foresight.
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Monitoring &amp; Evaluation:
                      </div>
                      <div className="mt-1 text-xs text-slate-600">
                        Measuring performance, impact, and effectiveness of
                        programs and initiatives.
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Data Analysis &amp; Reporting:
                      </div>
                      <div className="mt-1 text-xs text-slate-600">
                        Transforming complex data into clear, actionable
                        insights
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <Button
                variant="outline"
                className="mt-6 border-emerald-400 text-emerald-600 hover:bg-emerald-50 px-4 py-2"
              >
                Explore Our Services »
              </Button>
            </div>

            {/* Right: Feature list */}
            <div className="space-y-4">
              {[
                "We listen first and design research around your business questions.",
                "Nationwide field coverage with trained supervisors and quality teams.",
                "Real-time monitoring and strict validation for reliable data.",
                "Clear reporting with insights your teams can use immediately.",
              ].map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-slate-900 p-5 text-white shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-emerald-400">
                      <svg
                        className="h-5 w-5"
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
                      <div className="text-sm font-semibold text-slate-100">
                        {t}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services / What We Do Section */}
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
              At Insight Consultancy & Research (ICR), we help organizations
              move from evidence to insight and from insight to confident
              decision-making.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Quantitative Research",
                desc: "Large-scale surveys, modelling, and advanced analytics designed to provide robust evidence and reduce uncertainty in decision-making.",
              },
              {
                title: "Qualitative Research",
                desc: "In-depth interviews, focus groups, and ethnographic approaches that uncover the human context behind the data and explain why patterns exist.",
                highlighted: true,
              },
              {
                title: "Tracking Studies",
                desc: "Continuous measurement of brand health, performance, and perception to identify trends, monitor change, and support timely decisions.",
              },
              {
                title: "Retail & Shopper Research",
                desc: "Store audits, shelf visibility, and shopper behaviour analysis that translate in-store realities into practical commercial insight.",
              },
              {
                title: "Market Assessments & Opportunity Analysis",
                desc: "Market sizing, segmentation, and competitive analysis to identify where opportunities lie and how to prioritise growth.",
              },
              {
                title: "Strategic Consulting",
                desc: "End-to-end advisory support that transforms research findings into clear, actionable marketing and business strategies.",
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
      </section>

      {/* ICR in numbers */}
      <section className="w-full relative bg-[url('/images/globe.jpg')] bg-cover bg-center text-white py-20">
        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 mb-4">
            Our Impact
          </div>
          <h3 className="text-3xl font-sans text-white">ICR in numbers</h3>
          <p className="mt-2 max-w-2xl mx-auto text-sm text-white/80">
            Research and advisory expertise since 2009 — the scale and reach of
            our work speaks for itself.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center px-6">
              <div
                className="text-5xl md:text-6xl font-serif tracking-tight"
                style={{ textShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
              >
                100000+
              </div>
              <div className="mt-3 text-sm md:text-base font-medium">
                {" "}
                Interviews Conducted
              </div>
              <p className="mt-2 text-xs md:text-sm text-white/80 max-w-[22rem]">
                Face-to-face, telephone, and digital data collection — and
                counting.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-6">
              <div
                className="text-5xl md:text-6xl font-sans tracking-tight"
                style={{ textShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
              >
                100+
              </div>
              <div className="mt-3 text-sm md:text-base font-medium">
                Projects Delivered
              </div>
              <p className="mt-2 text-xs md:text-sm text-white/80 max-w-[22rem]">
                Completed across multiple sectors and industries.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-6">
              <div
                className="text-5xl md:text-6xl font-sans  tracking-tight"
                style={{ textShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
              >
                55+
              </div>
              <div className="mt-3 text-sm md:text-base font-medium">
                Years of Combined Team Experience
              </div>
              <p className="mt-2 text-xs md:text-sm text-white/80 max-w-[22rem]">
                Across research, analysis, and strategic advisory roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why organizations trust us Section */}
      <section className="w-full bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50/40 px-3 py-1 text-sm text-emerald-600 mb-4">
            Why ICR
          </div>
          <h3 className="mt-6 text-3xl font-sans text-slate-900 sm:text-4xl">
            Why organizations trust us
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Our work is grounded in robust research methodologies and analytical
            rigor.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-center text-center px-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 text-emerald-500">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h4 className="mt-4 text-sm font-semibold text-slate-900">
                Evidence-Driven Approach
              </h4>
              <p className="mt-2 text-xs text-slate-600 max-w-[18rem]">
                Our work is built on rigorous research design, strong analytical
                discipline, and a clear focus on evidence that supports real
                decisions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 text-emerald-500">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3v6l4 2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21H3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h4 className="mt-4 text-sm font-semibold text-slate-900">
                Client-Centric Solutions
              </h4>
              <p className="mt-2 text-xs text-slate-600 max-w-[18rem]">
                Every engagement is shaped around our clients’ objectives,
                operating context, and decision needs — not off-the-shelf
                frameworks
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 text-emerald-500">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2l2 4 4 .5-3 3 .7 4-3.7-2-3.7 2 .7-4-3-3L10 6l2-4z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h4 className="mt-4 text-sm font-semibold text-slate-900">
                Experienced Professionals
              </h4>
              <p className="mt-2 text-xs text-slate-600 max-w-[18rem]">
                Our team brings cross-sector expertise and practical experience
                across research, analysis, and strategic advisory work.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 text-emerald-500">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12h18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5v14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h4 className="mt-4 text-sm font-semibold text-slate-900">
                Actionable Insights
              </h4>
              <p className="mt-2 text-xs text-slate-600 max-w-[18rem]">
                We turn complex findings into clear, decision-ready insights
                that leaders can act on with confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Let's Work Together */}
      <section className="w-full relative bg-gradient-to-br from-[#0b2a36] via-[#082633] to-[#07202a] text-white py-20">
        {/* decorative pattern (subtle topographic lines) */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full opacity-20"
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/25 to-black/40 pointer-events-none" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans">
            Let’s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80">
            Whether you need reliable research, strategic insight, or evaluation
            support, Insight Consultancy & Research (ICR) is ready to help.
            Contact us today to discuss how our expertise can support your
            objectives and deliver meaningful results.
          </p>

          <div className="mt-8">
            <Button className="bg-emerald-500 px-6 py-3 text-sm font-semibold hover:bg-emerald-600 rounded-md">
              Request a Consultation »
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
