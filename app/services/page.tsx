"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.quantitative.title"),
      desc: t("services.quantitative.desc"),
    },
    {
      title: t("services.qualitative.title"),
      desc: t("services.qualitative.desc"),
      highlighted: true,
    },
    {
      title: t("services.tracking.title"),
      desc: t("services.tracking.desc"),
    },
    {
      title: t("services.retail.title"),
      desc: t("services.retail.desc"),
    },
    {
      title: t("services.market.title"),
      desc: t("services.market.desc"),
    },
    {
      title: t("services.strategic.title"),
      desc: t("services.strategic.desc"),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="w-full relative bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] text-white py-8">
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
          {/* <div className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 mb-4">
            Services
          </div> */}

          <h1 className="mx-auto max-w-3xl text-3xl font-sans leading-tight text-white md:text-5xl">
            {t("services.hero.title")}
            <br />
            <span className="text-emerald-400">
              {t("services.hero.subtitle")}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-slate-200 md:text-base">
            {t("services.hero.description")}
          </p>
        </div>
      </section>

      <section className="w-full bg-white from-emerald-50/50 via-white">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50/40 px-4 py-1 text-sm text-emerald-600">
              {t("services.section.whatwedo")}
            </div> */}

            <h3 className="mt-6 text-3xl font-sans text-slate-900 sm:text-4xl ">
              {t("services.why.title")}
            </h3>

            <p className="mt-3 text-sm text-slate-500">
              {t("services.why.description")}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((s, i) => (
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
                    <h4 className="text-md font-semibold text-slate-900">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-md text-slate-500">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Work Process */}
        <section className="mt-12 bg-gradient-to-br from-[#0a1f2e] to-[#041a2e] py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="max-w-md">
                {/* <div className="inline-block rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-xs text-emerald-400 mb-4">
                  {t("services.section.howwework")}
                </div> */}

                <h3 className="text-4xl font-extrabold text-white mb-4">
                  {t("services.process.title")}
                </h3>

                <p className="text-sm text-slate-300">
                  {t("services.process.description")}
                </p>

                <div className="mt-6 flex items-center space-x-3">
                  <div className="h-1 w-20 rounded bg-emerald-400"></div>
                  <div className="h-1 w-24 rounded bg-slate-600"></div>
                  <div className="h-1 w-24 rounded bg-slate-600"></div>
                  <div className="h-1 w-24 rounded bg-slate-600"></div>
                </div>
              </div>

              <div className="relative">
                <div
                  className="absolute left-11 top-10 bottom-0 w-0.75 bg-emerald-400/30 pointer-events-none"
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
                      <h4 className="text-lg font-semibold text-white">
                        {t("services.process.step1")}
                      </h4>
                      <p className="mt-2 text-sm text-slate-300">
                        {t("services.process.step1.desc")}
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
                      <h4 className="text-lg font-semibold text-white">
                        {t("services.process.step2")}
                      </h4>
                      <p className="mt-2 text-sm text-slate-300">
                        {t("services.process.step2.desc")}
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
                      <h4 className="text-lg font-semibold text-white">
                        {t("services.process.step3")}
                      </h4>
                      <p className="mt-2 text-sm text-slate-300">
                        {t("services.process.step3.desc")}
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
                      <h4 className="text-lg font-semibold text-white">
                        {t("services.process.step4")}
                      </h4>
                      <p className="mt-2 text-sm text-slate-300">
                        {t("services.process.step4.desc")}
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
                      <h4 className="text-lg font-semibold text-white">
                        {t("services.process.step5")}
                      </h4>
                      <p className="mt-2 text-sm text-slate-300">
                        {t("services.process.step5.desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center py-4 bg-gradient-to-br from-[#0a1f2e] to-[#041a2e]">
          <Link href="/ContactUS">
            <Button className="bg-emerald-500 px-6 py-6 text-sm font-semibold hover:bg-emerald-600">
              {t("services.cta.discuss")}
            </Button>
          </Link>
          <Link href="/ContactUS" className="inline-block text-sm">
            <Button className="bg-transparent border px-6 py-6 border-emerald-400 text-white hover:bg-emerald-50/10">
              {t("services.cta.request")}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
