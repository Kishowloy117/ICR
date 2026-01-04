import { Button } from "@/components/ui/button";

export default function CareerPage() {
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

        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 mb-6">
            Careers at ICR
          </div>
          <h1 className="mx-auto max-w-3xl text-3xl font-sans leading-tight text-white md:text-5xl">
            Join a team turning
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              data into decisions
            </span>
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-base text-slate-200">
            At ICR, we believe insight starts with people. We’re always looking
            for thoughtful, curious professionals who want to do work that
            matters.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="w-full bg-gradient-to-b from-[#f7fafc] to-[#eef4f7] py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-[#e6f6f3] px-4 py-1 text-sm text-emerald-600 font-semibold mb-6 shadow-sm">
              Why Work With Us
            </div>
            <h3 className="mt-6 text-3xl font-sans font-semibold text-slate-900 sm:text-4xl">
              Real projects. Smart people.
              <br /> Growth that matters
            </h3>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              At ICR, you won’t just do a job — you’ll contribute to work that
              informs real decisions across industries and regions. We offer a
              culture built on purpose, collaboration, learning, and impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col items-start h-full">
              <div className="mb-4">
                {/* Icon: Purpose-Driven Work */}
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="#1cc6a6"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 2" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Purpose-Driven Work
              </h3>
              <p className="text-slate-500 text-sm">
                Help leading brands solve real business challenges through
                research, insight, and strategy that make a difference.
              </p>
            </div>
            <div className="bg-[#e6f6f3] border border-emerald-200 rounded-2xl shadow-md p-7 flex flex-col items-start h-full">
              <div className="mb-4">
                {/* Icon: Collaborative Environment */}
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="#1cc6a6"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="8" cy="8" r="3" />
                  <circle cx="16" cy="8" r="3" />
                  <circle cx="12" cy="16" r="3" />
                  <path d="M8 11v1a4 4 0 004 4v0a4 4 0 004-4v-1" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Collaborative Environment
              </h3>
              <p className="text-slate-500 text-sm">
                Work closely with a regional team of researchers, consultants,
                and analysts who share ideas, not just tasks.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col items-start h-full">
              <div className="mb-4">
                {/* Icon: Continuous Learning */}
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="#1cc6a6"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M16 3v4M8 3v4M3 10h18" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Continuous Learning
              </h3>
              <p className="text-slate-500 text-sm">
                Grow through hands-on experience, mentorship, and structured
                development designed to sharpen your skills.
              </p>
            </div>
            {/* Row 2 */}
            <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col items-start h-full">
              <div className="mb-4">
                {/* Icon: Regional Exposure */}
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="#1cc6a6"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a10 10 0 010 20" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Regional Exposure
              </h3>
              <p className="text-slate-500 text-sm">
                Gain experience across projects in Saudi Arabia, GCC, and MENA —
                from local launches to multi-market studies.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col items-start h-full">
              <div className="mb-4">
                {/* Icon: Flexible Culture */}
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="#1cc6a6"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8M12 8v8" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Flexible Culture
              </h3>
              <p className="text-slate-500 text-sm">
                We focus on results, not rigid rules. Take ownership, share
                ideas, and work in a space that values adaptability.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col items-start h-full">
              <div className="mb-4">
                {/* Icon: Meaningful Impact */}
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="#1cc6a6"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 2" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Meaningful Impact
              </h3>
              <p className="text-slate-500 text-sm">
                Your work shapes real decisions — from product launches to
                strategy pivots. We don’t collect data, we guide action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CV Submission Section */}
      <section className="w-full py-12 md:py-20 bg-[#071829] relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <svg
            width="100%"
            height="100%"
            className="opacity-20"
            style={{ minHeight: "100%" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="pattern-bg"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="40" height="40" fill="#071829" />
                <rect x="8" y="8" width="8" height="8" rx="2" fill="#0e253a" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern-bg)" />
          </svg>
        </div>
        <div className="mx-auto max-w-2xl px-2">
          <div className="text-center mb-8">
            <div className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 mb-4">
              Submit Your CV
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              We want to hear from you
            </h2>
            <p className="text-slate-200 text-base max-w-lg mx-auto">
              Use the form below to submit your CV. We review every submission
              and keep qualified profiles for future roles.
            </p>
          </div>
          <form className="bg-white/90 border border-slate-200 rounded-3xl shadow-xl p-8 md:p-10 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </div>
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder=""
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </div>
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </div>
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-1">
                  Area of Interest / Position
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </div>
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-1">
                  Upload Resume
                </label>
                <label className="block">
                  <div className="w-full rounded-md border-2 border-dashed border-emerald-200 bg-emerald-50/60 px-4 py-8 text-center cursor-pointer hover:bg-emerald-100 transition">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-emerald-400 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      <span className="text-slate-500 text-base">
                        Click to select file or drag to upload
                      </span>
                      <span className="text-slate-400 text-xs mt-1">
                        PDF or DOC format, max file size 5MB
                      </span>
                    </div>
                  </div>
                </label>
              </div>
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-1">
                  Cover Note / Message (optional)
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-400 hover:bg-emerald-500 text-white font-semibold py-3 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* How We Process Your Application Section */}
      <section className="w-full bg-gradient-to-b from-[#f7fafc] to-[#eef4f7] py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-10">
            <div className="inline-block rounded-full bg-[#e6f6f3] px-4 py-1 text-sm text-emerald-600 font-semibold mb-6 shadow-sm">
              Process
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
              How We Process Your
              <br />
              Application
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Clear steps from submission to selection.
            </p>
          </div>
          <div className="relative flex flex-col items-center">
            {/* SVG connectors - zigzag diagonal flow */}
            <svg
              className="absolute left-1/2 -translate-x-1/2 top-0 z-0 hidden md:block"
              width="800"
              height="700"
              fill="none"
              viewBox="0 0 800 700"
              style={{ pointerEvents: "none" }}
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="8"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#1cc6a6" />
                </marker>
              </defs>
              {/* Resume Review -> Initial Screening */}
              <path
                d="M280 80 Q 400 110, 520 80"
                stroke="#1cc6a6"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              {/* Initial Screening -> Interviews */}
              <path
                d="M520 180 Q 400 210, 280 280"
                stroke="#1cc6a6"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              {/* Interviews -> Final Review */}
              <path
                d="M280 380 Q 400 250, 520 350"
                stroke="#1cc6a6"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              {/* Final Review -> Offer & Onboarding */}
              <path
                d="M520 380 Q 450 450, 400 540"
                stroke="#1cc6a6"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
            </svg>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 gap-y-30 z-10">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl shadow-md flex flex-col justify-center items-center w-full max-w-[320px] min-h-[160px] text-center p-7">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Resume Review
                </h3>
                <p className="text-slate-500 text-sm">
                  We evaluate your resume for role fit and experience.
                </p>
              </div>
              {/* Step 2 */}
              <div className="bg-white rounded-2xl shadow-md flex flex-col justify-center items-center w-full max-w-[320px] min-h-[160px] text-center p-7">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Initial Screening
                </h3>
                <p className="text-slate-500 text-sm">
                  Shortlisted candidates are contacted for a quick phone or
                  video screen.
                </p>
              </div>
              {/* Step 3 */}
              <div className="bg-white rounded-2xl shadow-md flex flex-col justify-center items-center w-full max-w-[320px] min-h-[160px] text-center p-7">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Interviews
                </h3>
                <p className="text-slate-500 text-sm">
                  You’ll meet with relevant team leads and managers (1–2
                  rounds).
                </p>
              </div>
              {/* Step 4 */}
              <div className="bg-white rounded-2xl shadow-md flex flex-col justify-center items-center w-full max-w-[320px] min-h-[160px] text-center p-7">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Final Review
                </h3>
                <p className="text-slate-500 text-sm">
                  We assess skills, fit, and culture alignment before making an
                  offer.
                </p>
              </div>
              {/* Step 5 (centered below) */}
              <div className="bg-white rounded-2xl shadow-md flex flex-col justify-center items-center w-full max-w-[320px] min-h-[160px] text-center col-span-1 md:col-span-2 mx-auto p-7">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Offer & Onboarding
                </h3>
                <p className="text-slate-500 text-sm">
                  Selected candidates receive a formal offer and onboarding
                  plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
