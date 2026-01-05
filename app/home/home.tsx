"use server";

import Carousel from "./Carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function name() {
  // } Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e]">
      {/* Hero Content */}
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-12 text-center">
        <h1 className="mx-auto max-w-3xl text-3xl font-sans leading-tight text-white md:text-5xl">
          Turning Evidence into
          <br />
          <span className="text-emerald-400">Confident Decisions</span>
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
          Insight Consultancy & Research (ICR) is an independent research and
          advisory firm supporting public sector, corporate, and international
          organisations with decision-focused research, evaluation, and insight.
        </p>

        <p className="mx-auto mt-2 max-w-2xl text-sm font-semibold leading-relaxed text-slate-200 md:text-base">
          We design and deliver rigorous evidence and clear analysis to support
          strategic, operational, and policy decisions in complex environments.
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
                  Rigorous, defensible methodologies designed for real-world
                  decisions
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
                  Clear interpretation of evidence, grounded in context
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
                  Decision-ready guidance for senior leaders and stakeholders
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/ContactUS">
            <Button className="bg-emerald-500 px-5 py-2.5 text-sm font-semibold hover:bg-emerald-600">
              Request a Consultation »
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              className="bg-transparent border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black"
            >
              Explore Our Services
            </Button>
          </Link>
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
                        <circle
                          cx="12"
                          cy="12"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"
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
                          d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <polyline
                          points="7.5 4.21 12 6.81 16.5 4.21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline
                          points="7.5 19.79 7.5 14.6 3 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline
                          points="21 12 16.5 14.6 16.5 19.79"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline
                          points="3.27 6.96 12 12.01 20.73 6.96"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line
                          x1="12"
                          y1="22.08"
                          x2="12"
                          y2="12"
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
                        <polyline
                          points="22 12 18 12 15 21 9 3 6 12 2 12"
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
                        <line
                          x1="18"
                          y1="20"
                          x2="18"
                          y2="10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line
                          x1="12"
                          y1="20"
                          x2="12"
                          y2="4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line
                          x1="6"
                          y1="20"
                          x2="6"
                          y2="14"
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

              <Link href="/services">
                <Button
                  variant="outline"
                  className="mt-6 border-emerald-400 text-emerald-600 hover:bg-emerald-50 px-4 py-2"
                >
                  Explore Our Services »
                </Button>
              </Link>
            </div>

            {/* Right: Feature list */}
            <div className="space-y-4">
              {[
                {
                  text: "We listen first and design research around your business questions.",
                  icon: (
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 10v2a7 7 0 01-14 0v-2M12 19v3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 22h8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  text: "Nationwide field coverage with trained supervisors and quality teams.",
                  icon: (
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  text: "Real-time monitoring and strict validation for reliable data.",
                  icon: (
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 11.08V12a10 10 0 11-5.93-9.14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="22 4 12 14.01 9 11.01"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  text: "Clear reporting with insights your teams can use immediately.",
                  icon: (
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="14 2 14 8 20 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="16"
                        y1="13"
                        x2="8"
                        y2="13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="16"
                        y1="17"
                        x2="8"
                        y2="17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="10 9 9 9 8 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-slate-900 p-5 text-white shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-emerald-400">
                      {item.icon}
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-slate-100">
                        {item.text}
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
              At Insight Consultancy & Research (ICR), we support organisations
              to move from evidence to insight — and from insight to clear,
              defensible decisions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Evidence-Driven Decisions",
                desc: "We ensure every decision is grounded in robust quantitative data, providing confidence in your choices.",
              },
              {
                title: "Contextual Insights",
                desc: "Our qualitative research uncovers the human context behind the data, enriching your strategic understanding.",
                highlighted: true,
              },
              {
                title: "Continuous Monitoring",
                desc: "We provide ongoing tracking to keep you informed of trends and changes as they happen.",
              },
              {
                title: "Practical Market Insights",
                desc: "Our retail research turns in-store observations into actionable insights for your business.",
              },
              {
                title: "Strategic Market Clarity",
                desc: "We help you identify and prioritise opportunities with clear, data-backed assessments.",
              },
              {
                title: "Actionable Strategies",
                desc: "We turn complex research into straightforward, actionable strategies for decision-makers.",
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
          <h3 className="text-4xl font-sans text-white">ICR in numbers</h3>
          <p className="mt-2 max-w-2xl mx-auto text-md text-white/80">
            Research and advisory expertise since 2009 — the scale and reach of
            our work speaks for itself.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center px-6">
              <div
                className="text-5xl md:text-6xl font-sans tracking-tight"
                style={{ textShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
              >
                100,000+
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

      {/* Why organisations trust ICR Section */}
      <section className="w-full bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50/40 px-3 py-1 text-sm text-emerald-600 mb-4">
            Why ICR
          </div>
          <h3 className="mt-6 text-3xl font-sans text-slate-900 sm:text-4xl">
            Why organisations trust ICR
          </h3>
          <p className="mt-3 text-base text-slate-600">
            Our work is grounded in methodological rigour, independence, and a
            clear focus on decision-maker needs.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3">
            <div className="flex flex-col items-center text-center px-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border-2 border-emerald-200">
                <svg
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 11l3 3L22 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Evidence-Led Delivery
              </h4>
              <p className="mt-2 text-sm text-slate-600 max-w-[20rem]">
                Robust research design, quality assurance, and defensible
                findings.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border-2 border-emerald-200">
                <svg
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Decision-Focused Engagements
              </h4>
              <p className="mt-2 text-sm text-slate-600 max-w-[20rem]">
                Structured around governance and decision needs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border-2 border-emerald-200">
                <svg
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Experienced Research & Advisory Team
              </h4>
              <p className="mt-2 text-sm text-slate-600 max-w-[20rem]">
                Public, corporate, and international experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Let's Work Together */}

      {/* CTA: Let's Work Together */}
      <section className="w-full relative bg-linear-to-br from-[#0b2a36] via-[#082633] to-[#07202a] text-white py-20">
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
          <div className="absolute inset-0 bg-linear-to-br from-black/25 to-black/40 pointer-events-none" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans">
            Let’s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80">
            If you require independent research, evaluation, or decision
            support, ICR can support your objectives with rigorous evidence and
            clear insight.
          </p>

          <div className="mt-8">
            <Link href="/ContactUS">
              <Button className="bg-emerald-500 px-6 py-3 text-sm font-semibold hover:bg-emerald-600 rounded-md">
                Request a Consultation »
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
