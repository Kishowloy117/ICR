import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Database,
  BarChart2,
  FileText,
  Award,
  Zap,
  Wrench,
} from "lucide-react";

export default function Page() {
  return (
    <main>
      <section className="relative bg-[#071827] py-12">
        {/* subtle background pattern */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 400"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <defs>
              <pattern
                id="dots"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <rect width="4" height="4" fill="#07323f" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 mb-6">
            Why ICR
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Turning Research Into
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-emerald-200">
              Strategic Growth
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-300">
            ICR goes beyond data — we partner with you to drive better business
            outcomes through focused research, practical insights, and strategic
            recommendations.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/ContactUS"
              className="inline-block rounded-md bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Request a Consultation »
            </Link>

            <Link
              href="/services"
              className="inline-block rounded-md border border-emerald-400 px-6 py-3 text-sm font-medium text-emerald-200 hover:bg-emerald-600/10"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 space-y-16">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div>
              <div className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700 mb-4">
                Consulting
              </div>
              <h3 className="text-3xl font-semibold text-slate-900">
                Strategic Partnerships
              </h3>
              <p className="mt-4 text-slate-600">
                We go beyond one-time projects — ICR acts as a strategic ally.
                We manage research relationships, streamline vendor
                communication, and ensure insights are tied to your business
                KPIs.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/WhatsApp Image 2025-12-20 at 8.39.42 PM.jpeg"
                alt="Strategic Partnerships"
                width={860}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/WhatsApp Image 2025-12-20 at 8.39.39 PM (1).jpeg"
                alt="Marketing Strategy Support"
                width={860}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700 mb-4">
                Consulting
              </div>
              <h3 className="text-3xl font-semibold text-slate-900">
                Marketing Strategy Support
              </h3>
              <p className="mt-4 text-slate-600">
                We help shape your strategy by turning insights into action.
                From brand positioning to market entry planning, we focus on
                measurable tactics that deliver results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-linear-to-r from-[#f7fbfa] to-[#f1f8f6]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-block rounded-full bg-white/30 px-3 py-1 text-xs text-emerald-700 mb-4">
            Retail-Audit
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Retail Audit Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We help you get the most out of your retail audit programs by
            improving quality, speed, and actionability at every stage.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Agency Coordination
              </h4>
              <p className="text-sm text-slate-600">
                We act as your liaison — managing agency communication directly
                to speed up response times and ensure swift issue resolution.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <Database className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Data Accuracy
              </h4>
              <p className="text-sm text-slate-600">
                Our experts validate and enhance data coverage and consistency,
                helping you trust what the numbers say — every time.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <BarChart2 className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Advanced Analytics
              </h4>
              <p className="text-sm text-slate-600">
                We apply statistical and modeling techniques to uncover patterns
                and insights hidden in your retail data.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <FileText className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Actionable Reporting
              </h4>
              <p className="text-sm text-slate-600">
                No fluff, no overload — just focused, decision-ready outputs
                that help your teams move fast and execute better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-linear-to-r from-[#f7fbfa] to-[#f1f8f6]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-block rounded-full bg-white/30 px-3 py-1 text-xs text-emerald-700 mb-6">
            Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How We Work
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            We follow a simple, proven process to turn insight into action —
            from scoping and research to strategy and implementation support.
          </p>

          <div className="relative mt-12">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200 -translate-y-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 text-3xl  text-emerald-500">01</div>
                <div className="h-3 w-3 rounded-full bg-emerald-500 -mt-6 mb-3" />
                <h4 className="text-lg font-semibold text-slate-900">
                  Understand
                </h4>
                <p className="mt-2 text-sm text-slate-600">
                  Clarifying decisions, objectives, and evidence requirements
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 text-3xl  text-emerald-500">02</div>
                <div className="h-3 w-3 rounded-full bg-emerald-500 -mt-6 mb-3" />
                <h4 className="text-lg font-semibold text-slate-900">
                  Research
                </h4>
                <p className="mt-2 text-sm text-slate-600">
                  Structured field management and quality assurance
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 text-3xl  text-emerald-500">03</div>
                <div className="h-3 w-3 rounded-full bg-emerald-500 -mt-6 mb-3" />
                <h4 className="text-lg font-semibold text-slate-900">
                  Strategize
                </h4>
                <p className="mt-2 text-sm text-slate-600">
                  Continuous monitoring and validation for data integrity
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 text-3xl text-emerald-500">04</div>
                <div className="h-3 w-3 rounded-full bg-emerald-500 -mt-6 mb-3" />
                <h4 className="text-lg font-semibold text-slate-900">
                  Support
                </h4>
                <p className="mt-2 text-sm text-slate-600">
                  Decision-ready reporting focused on implications and next
                  steps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#071827] relative">
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 400"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <defs>
              <pattern
                id="dots2"
                width="36"
                height="36"
                patternUnits="userSpaceOnUse"
              >
                <rect width="4" height="4" fill="#062633" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots2)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 text-center text-white">
          <div className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 mb-4">
            Industries
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Industries We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            We support clients across:
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center max-w-4xl mx-auto">
            <div className="rounded-xl bg-emerald-50 p-6 flex flex-col items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md text-emerald-600">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium text-slate-900">
                Consumer Goods
              </div>
            </div>

            <div className="rounded-xl bg-emerald-50 p-6 flex flex-col items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md text-emerald-600">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M20 21v-2a4 4 0 00-3-3.87"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 21v-2a4 4 0 013-3.87"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11a4 4 0 100-8 4 4 0 000 8z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium text-slate-900">
                Healthcare &amp; Pharma
              </div>
            </div>

            <div className="rounded-xl bg-emerald-50 p-6 flex flex-col items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md text-emerald-600">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M5 12h14M12 5v14"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium text-slate-900">
                Telecom &amp; Tech
              </div>
            </div>

            <div className="rounded-xl bg-emerald-50 p-6 flex flex-col items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md text-emerald-600">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium text-slate-900">
                Automotive
              </div>
            </div>

            <div className="rounded-xl bg-emerald-50 p-6 flex flex-col items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md text-emerald-600">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium text-slate-900">
                Media &amp; Entertainment
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/ContactUS"
              className="inline-block rounded-md bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Request a Consultation »
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700 mb-4">
            Success
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why We Succeed
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            ICR delivers consistent value through six key strengths — built on
            trust, insight, and innovation.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm text-left">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-600 mb-3">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Strong Client Relationships
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                We collaborate closely with clients and regional partners —
                listening, adapting, and aligning with your goals.
              </p>
            </div>

            <div className="rounded-lg bg-emerald-50 p-6 shadow-md ring-1 ring-emerald-100 border border-emerald-200 text-left">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-emerald-600 mb-3">
                <Award className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Local Market Expertise
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                We translate broad strategies into local execution, ensuring
                relevance in every region we operate.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm text-left">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-600 mb-3">
                <Zap className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Continuous Innovation
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                We bring fresh thinking and introduce new methodologies, tools,
                and tech to improve every outcome.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm text-left">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-600 mb-3">
                <BarChart2 className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Smart Analytical Tools
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Our wide range of analytical capabilities uncovers patterns and
                insights that drive confident decisions.
              </p>
            </div>

            <div className="rounded-lg bg-emerald-50 p-6 shadow-md ring-1 ring-emerald-100 border border-emerald-200 text-left">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-emerald-600 mb-3">
                <Wrench className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Insight-Led Process
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Our research is designed for real-world action — from survey to
                strategy, we focus on impact, not just information.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm text-left">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-600 mb-3">
                <FileText className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Senior Research Talent
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                ICR teams blend marketing experience with core research skill —
                delivering clarity at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
