// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function Home() {
//   return (
//     <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#041a2e] via-[#062944] to-[#041a2e]">
//       {/* Hero Content */}
//       <section className="mx-auto max-w-7xl px-4 pt-28 pb-24 text-center">
//         {/* Badge */}
//         <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs text-slate-200 backdrop-blur">
//           Research. Insight. Strategic Clarity
//         </div>

//         {/* Heading */}
//         <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
//           We turn complex data
//           <br />
//           into <span className="text-emerald-400">clear direction</span>
//         </h1>

//         {/* Description */}
//         <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
//           ICR helps you understand people, markets, and performance through
//           reliable research. With nationwide reach and strict quality checks,
//           you get insights you can trust and act on.
//         </p>

//         {/* CTA Buttons */}
//         <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
//           <Button className="bg-emerald-500 px-6 py-5 text-sm font-semibold hover:bg-emerald-600">
//             Request a Consultation »
//           </Button>
//           <Button
//             variant="outline"
//             className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black"
//           >
//             Explore Our Services
//           </Button>
//         </div>
//       </section>

//       {/* Image Grid */}
//       <section className="mx-auto max-w-7xl px-4 pb-24">
//         <div className="grid gap-6 md:grid-cols-3">
//           {/* Large Left Image */}
//           <div className="relative md:col-span-2">
//             <div className="overflow-hidden rounded-3xl">
//               <Image
//                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//                 alt="Team"
//                 width={800}
//                 height={500}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-xs text-white backdrop-blur">
//               ★ 16+ Years Experience
//             </div>
//           </div>

//           {/* Right Images */}
//           <div className="flex flex-col gap-6">
//             <div className="overflow-hidden rounded-3xl">
//               <Image
//                 src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
//                 alt="Meeting"
//                 width={400}
//                 height={240}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="overflow-hidden rounded-3xl">
//               <Image
//                 src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
//                 alt="Analysis"
//                 width={400}
//                 height={240}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import Carousel from "./Carousel";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#041a2e] via-[#062944] to-[#041a2e]">
      {/* Hero Content */}
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-12 text-center">
        <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
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
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            {/* Left: Content */}
            <div className="max-w-xl">
              <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50/40 px-4 py-1 text-sm text-emerald-600">
                About Us
              </div>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                A research partner focused on clarity, not complexity
              </h2>

              <p className="mt-6 text-base text-slate-600">
                Since 2009, ICR has supported organizations across the Middle
                East with high-quality market research and strategic consulting.
                Our mission is simple: turn data into clear, practical
                direction. With offices in Jeddah, Riyadh, and Dammam, we bring
                local expertise and international standards to every project.
              </p>

              <Button
                variant="outline"
                className="mt-8 border-emerald-400 text-emerald-600 hover:bg-emerald-50"
              >
                Explore Our Services »
              </Button>
            </div>

            {/* Right: Feature list */}
            <div className="space-y-6">
              {[
                {
                  title:
                    "We listen first and design research around your business questions.",
                },
                {
                  title:
                    "Nationwide field coverage with trained supervisors and quality teams.",
                },
                {
                  title:
                    "Real-time monitoring and strict validation for reliable data.",
                },
                {
                  title:
                    "Clear reporting with insights your teams can use immediately.",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl bg-slate-900/95 p-5 text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                    {/* simple icon placeholder */}
                    <svg
                      className="h-5 w-5 text-emerald-400"
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

                  <div className="text-sm text-slate-100">{f.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Services / What We Do Section */}
      <section className="w-full bg-white from-emerald-50/50 via-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50/40 px-4 py-1 text-sm text-emerald-600">
              What We Do
            </div>

            <h3 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Research services designed to guide your decisions
            </h3>

            <p className="mt-3 text-sm text-slate-500">
              Clear, focused solutions across key research areas
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Quantitative Research",
                desc: "Large-scale surveys, data modeling, and analytics to validate decisions with numbers.",
              },
              {
                title: "Qualitative Research",
                desc: "In-depth interviews, focus groups, and ethnographic studies to uncover human insights.",
                highlighted: true,
              },
              {
                title: "Tracking Studies",
                desc: "Ongoing monitoring of brand health, campaign performance, and consumer perception over time.",
              },
              {
                title: "Retail & Shopper Research",
                desc: "Store audits, shelf visibility, product freshness, and shopper behavior studies to improve in-store impact.",
              },
              {
                title: "Market Assessments & Opportunity Analysis",
                desc: "Market sizing, segmentation, and competitive analysis to reveal where and how to grow.",
              },
              {
                title: "Strategic Consulting",
                desc: "End-to-end guidance — from research design to actionable marketing and business strategies.",
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
    </main>
  );
}
