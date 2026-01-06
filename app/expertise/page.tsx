import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
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
            Expertise
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans leading-tight text-white">
            {/* Our */}
            {/* <br /> */}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-emerald-200">
              Our Expertise
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-4xl text-sm font-semibold leading-relaxed text-slate-200 md:text-base">
            At Insight Consultancy & Research (ICR), our expertise is built on
            delivering rigorous research and analysis to support complex
            decision-making across public, corporate, and international
            contexts. We combine sector knowledge, methodological rigour, and
            advanced analytical capabilities to address strategic, operational,
            and policy challenges. Our approach integrates established research
            practices with modern analytical tools, including the responsible
            use of AI-enabled techniques, to enhance accuracy, efficiency, and
            insight generation.
          </p>

          <div className="mt-8">
            <Button className="bg-emerald-500 px-6 py-3 text-sm font-semibold hover:bg-emerald-600 rounded-md">
              Discuss Your Requirements »
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise list (zig-zag) */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 space-y-16">
          {[
            {
              title: "Governmental & Public Sector Projects",
              img: "/images/expertise/expersite_2.jpeg",
              content: (
                <>
                  <p className="text-sm text-slate-600 mb-4">
                    We have extensive experience supporting governmental and
                    public sector entities through research, evaluation, and
                    advisory engagements. Our work reflects a strong
                    understanding of governance frameworks, accountability
                    requirements, and the need for evidence that can withstand
                    public and regulatory scrutiny.
                  </p>

                  <h5 className="mt-4 text-sm font-semibold text-slate-900">
                    What It Includes:
                  </h5>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600">
                    <li>Policy research and programme monitoring</li>
                    <li>Public service performance assessment</li>
                    <li>Stakeholder and beneficiary research</li>
                    <li>
                      Impact studies to inform policy and programme improvement
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "Corporate & Market-Focused Expertise",
              img: "/images/expertise/expersite_3.jpeg",
              content: (
                <>
                  <p className="text-sm text-slate-600 mb-4">
                    Alongside public sector work, we support corporate
                    organisations operating in complex and competitive
                    environments. Our expertise helps clients understand market
                    dynamics, customer behaviour, and operational performance to
                    inform strategic planning and investment decisions.
                  </p>

                  <h5 className="mt-4 text-sm font-semibold text-slate-900">
                    What It Includes:
                  </h5>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600">
                    <li>Market and opportunity assessments</li>
                    <li>Consumer and shopper research</li>
                    <li>Brand and performance tracking</li>
                    <li>Market entry and competitive analysis</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Methodological & Analytical Strengths",
              img: "/images/expertise/expersite_4.jpeg",
              content: (
                <>
                  <p className="text-sm text-slate-600 mb-4">
                    Our expertise is underpinned by strong methodological
                    capability across quantitative, qualitative, and
                    mixed-method approaches. Each study is designed to align
                    closely with the decision it is intended to inform, ensuring
                    methodological fit, reliability, and clarity.
                  </p>

                  <h5 className="mt-4 text-sm font-semibold text-slate-900">
                    What It Includes:
                  </h5>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600">
                    <li>Large-scale quantitative surveys</li>
                    <li>Qualitative interviews and focus groups</li>
                    <li>Longitudinal tracking frameworks</li>
                    <li>Integrated analysis across multiple data sources</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Use of AI in the Research Process",
              img: "/images/expertise/expersite_1.jpeg",
              content: (
                <>
                  <p className="text-sm text-slate-600 mb-4">
                    We incorporate AI-enabled tools within our research and
                    analytical processes to enhance efficiency, consistency, and
                    insight generation, while maintaining full methodological
                    oversight and human judgement.
                  </p>

                  <h5 className="mt-4 text-sm font-semibold text-slate-900">
                    What It Includes:
                  </h5>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600">
                    <li>AI-supported data preparation and cleaning</li>
                    <li>Pattern identification and trend analysis</li>
                    <li>Text & qualitative data processing</li>
                    <li>AI-assisted analytical modelling with human review</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Decision-Focused Application",
              img: "/images/expertise/expersite_5.jpeg",
              content: (
                <>
                  <p className="text-sm text-slate-600 mb-4">
                    Across all areas of expertise, our work is guided by a clear
                    focus on decision-making. We prioritise clarity, relevance,
                    and practical application, ensuring outputs are accessible
                    to senior stakeholders and aligned with organisational
                    objectives.
                  </p>

                  <h5 className="mt-4 text-sm font-semibold text-slate-900">
                    What It Includes:
                  </h5>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600">
                    <li>Policy development and programme evaluation support</li>
                    <li>Strategic prioritisation and investment planning</li>
                    <li>Executive-ready reporting and recommendations</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Closing Statement",
              img: "/images/expertise/expersite_6.jpeg",
              content: (
                <>
                  <p className="text-sm text-slate-600">
                    Our expertise reflects a balance of sector knowledge,
                    methodological rigour, and analytical innovation. By
                    combining experience across governmental and corporate
                    projects with advanced research capabilities, we support
                    organisations in making informed, confident, and defensible
                    decisions.
                  </p>

                  <h5 className="mt-4 text-sm font-semibold text-slate-900">
                    What It Includes:
                  </h5>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600">
                    <li>Sector knowledge and methodological rigour</li>
                    <li>Analytical innovation and integrated insight</li>
                    <li>Decision-ready delivery for senior stakeholders</li>
                  </ul>
                </>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12"
            >
              {/* for odd indexes show text left, image right (i%2===0) */}
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
            Let’s explore how we can support your goals
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm  text-white/80">
            Whether it’s a new product, a brand shift, or market entry — we’re
            here to guide with clarity.
          </p>

          <div className="mt-8">
            <Link href="/services">
              <Button className="bg-emerald-500 px-6 py-3 text-sm font-semibold hover:bg-emerald-600">
                Explore our services »
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
