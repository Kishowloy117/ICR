import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
        <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50/40 px-3 py-1 text-sm text-emerald-600 mb-4">
          Services
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
          Our Services
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
          At Insight Consultancy & Research (ICR), we deliver independent
          research and advisory services designed to support strategic planning,
          policy development, and evidence-based decision-making.
        </p>

        {/* Services list */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Quantitative Research
            </h3>
            <p className="mt-2 text-xs text-slate-600">
              Survey design, modelling, and analytical techniques to generate
              robust evidence and support defensible strategic, operational, and
              policy decisions.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Qualitative Research
            </h3>
            <p className="mt-2 text-xs text-slate-600">
              In-depth interviews and qualitative methods to understand
              behaviours, perceptions, and contextual drivers behind observed
              outcomes.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Tracking Studies
            </h3>
            <p className="mt-2 text-xs text-slate-600">
              Ongoing tracking and monitoring frameworks to measure performance,
              identify trends, and support timely operational and strategic
              decision-making.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Retail &amp; Shopper Research
            </h3>
            <p className="mt-2 text-xs text-slate-600">
              Structured field audits and observational research to generate
              reliable insight from real-world environments.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Market Assessments &amp; Opportunity Analysis
            </h3>
            <p className="mt-2 text-xs text-slate-600">
              Market assessments, segmentation, and comparative analysis to
              inform prioritisation, strategy, and investment decisions.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Strategic Consulting
            </h3>
            <p className="mt-2 text-xs text-slate-600">
              Advisory and decision-support services that translate research
              findings into clear options, implications, and recommendations for
              decision-makers.
            </p>
          </div>
        </div>

        {/* How We Work */}
        <div className="mt-16 max-w-3xl mx-auto text-left">
          <h3 className="text-xl font-semibold text-slate-900">How we work</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Decision clarification first</li>
            <li>Structured field &amp; QA processes</li>
            <li>Continuous validation</li>
            <li>Decision-ready reporting</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button className="bg-emerald-500 px-6 py-3 text-sm font-semibold hover:bg-emerald-600">
            Discuss Your Research or Evaluation Requirements
          </Button>
          <Link href="/ContactUS" className="inline-block text-sm">
            <Button className="bg-transparent border border-emerald-400 text-emerald-600 hover:bg-emerald-50">
              Request an Initial Discussion
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
