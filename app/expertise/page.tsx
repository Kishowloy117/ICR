"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  const expertiseItems = [
    {
      title: t("expertise.government.title"),
      img: "/images/expertise/expersite_2.jpeg",
      content: (
        <>
          <p className="text-sm text-slate-600 mb-4">
            {t("expertise.government.desc1")}
          </p>
          <p className="text-sm text-slate-600 mb-4">
            {t("expertise.government.desc2")}
          </p>

          <h5 className="mt-4 text-sm font-semibold text-slate-900">
            {t("expertise.government.includes")}
          </h5>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li>{t("expertise.government.item1")}</li>
            <li>{t("expertise.government.item2")}</li>
            <li>{t("expertise.government.item3")}</li>
            <li>{t("expertise.government.item4")}</li>
          </ul>
        </>
      ),
    },
    {
      title: t("expertise.corporate.title"),
      img: "/images/expertise/expersite_3.jpeg",
      content: (
        <>
          <p className="text-sm text-slate-600 mb-4">
            {t("expertise.corporate.desc1")}
          </p>
          <p className="text-sm text-slate-600 mb-4">
            {t("expertise.corporate.desc2")}
          </p>

          <h5 className="mt-4 text-sm font-semibold text-slate-900">
            {t("expertise.corporate.includes")}
          </h5>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li>{t("expertise.corporate.item1")}</li>
            <li>{t("expertise.corporate.item2")}</li>
            <li>{t("expertise.corporate.item3")}</li>
            <li>{t("expertise.corporate.item4")}</li>
          </ul>
        </>
      ),
    },
    {
      title: t("expertise.methodological.title"),
      img: "/images/expertise/expersite_4.jpeg",
      content: (
        <>
          <p className="text-sm text-slate-600 mb-4">
            {t("expertise.methodological.desc1")}
          </p>
          <p className="text-sm text-slate-600 mb-4">
            {t("expertise.methodological.desc2")}
          </p>

          <h5 className="mt-4 text-sm font-semibold text-slate-900">
            {t("expertise.methodological.includes")}
          </h5>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li>{t("expertise.methodological.item1")}</li>
            <li>{t("expertise.methodological.item2")}</li>
            <li>{t("expertise.methodological.item3")}</li>
            <li>{t("expertise.methodological.item4")}</li>
          </ul>
        </>
      ),
    },
    {
      title: t("expertise.ai.title"),
      img: "/images/expertise/expersite_1.jpeg",
      content: (
        <>
          <p className="text-sm text-slate-600 mb-4">
            {t("expertise.ai.desc1")}
          </p>
          <p className="text-sm text-slate-600 mb-4">
            {t("expertise.ai.desc2")}
          </p>

          <h5 className="mt-4 text-sm font-semibold text-slate-900">
            {t("expertise.ai.includes")}
          </h5>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li>{t("expertise.ai.item1")}</li>
            <li>{t("expertise.ai.item2")}</li>
            <li>{t("expertise.ai.item3")}</li>
            <li>{t("expertise.ai.item4")}</li>
          </ul>
        </>
      ),
    },
    {
      title: t("expertise.decision.title"),
      img: "/images/expertise/expersite_5.jpeg",
      content: (
        <>
          <p className="text-sm text-slate-600 mb-4">
            {t("expertise.decision.desc1")}
          </p>
          <p className="text-sm text-slate-600 mb-4">
            {t("expertise.decision.desc2")}
          </p>

          <h5 className="mt-4 text-sm font-semibold text-slate-900">
            {t("expertise.decision.includes")}
          </h5>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li>{t("expertise.decision.item1")}</li>
            <li>{t("expertise.decision.item2")}</li>
            <li>{t("expertise.decision.item3")}</li>
          </ul>
        </>
      ),
    },
    {
      title: t("expertise.closing.title"),
      img: "/images/expertise/expersite_6.jpeg",
      content: (
        <>
          <p className="text-sm text-slate-600 mb-4">
            {t("expertise.closing.desc1")}
          </p>
          <p className="text-sm text-slate-600">
            {t("expertise.closing.desc2")}
          </p>

          <h5 className="mt-4 text-sm font-semibold text-slate-900">
            {t("expertise.section.whatitincludes")}
          </h5>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li>{t("expertise.closing.item1")}</li>
            <li>{t("expertise.closing.item2")}</li>
            <li>{t("expertise.closing.item3")}</li>
          </ul>
        </>
      ),
    },
  ];

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
          {/* <div className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 mb-4">
            Expertise
          </div> */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans leading-tight text-white">
            {/* Our */}
            {/* <br /> */}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-emerald-200">
              {t("expertise.hero.title")}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-slate-200 md:text-base">
            {t("expertise.hero.description1")}
          </p>
          <p className="mx-auto mt-2 max-w-4xl text-sm leading-relaxed text-slate-200 md:text-base">
            {t("expertise.hero.description2")}
          </p>
          <p className="mx-auto mt-2 max-w-4xl text-sm leading-relaxed text-slate-200 md:text-base">
            {t("expertise.hero.description3")}
          </p>

          <div className="mt-8">
            <Link href="/ContactUS">
              <Button className="bg-emerald-500 px-6 py-3 text-sm font-semibold hover:bg-emerald-600 rounded-md">
                {t("expertise.cta.discuss")} »
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise list (zig-zag) */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 space-y-16">
          {expertiseItems.map((item, i) => (
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

      {/* CTA */}
      <section className="relative w-full bg-linear-to-br from-[#04182a] via-[#06213a] to-[#041827] text-white py-16">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full opacity-10"
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
              stroke="rgba(255,255,255,0.02)"
              strokeWidth="12"
              fill="none"
            />
          </svg>
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans">
            {t("expertise.final.title")}
          </h2>

          <div className="mt-8">
            <Link href="/services">
              <Button className="bg-emerald-500 px-6 py-3 text-sm font-semibold hover:bg-emerald-600">
                {t("expertise.final.cta")} »
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
