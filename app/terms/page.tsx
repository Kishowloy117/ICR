"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
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

        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 mb-4">
            Terms of Service
          </div>
          <h1 className="mx-auto max-w-3xl text-3xl font-sans leading-tight text-white md:text-5xl">
            Terms of Service
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              Terms & Conditions
            </span>
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-base text-slate-200">
            Last Updated: January 22, 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="w-full bg-gradient-to-b from-[#f7fafc] to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-slate-700 leading-relaxed">
              Welcome to ICR (&quot;ICR,&quot; &quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;)
              govern your access to and use of our website, services, and any
              related applications (collectively, the &quot;Services&quot;). By
              accessing or using our Services, you agree to be bound by these
              Terms. If you do not agree to these Terms, please do not use our
              Services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">1</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Acceptance of Terms
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                By accessing or using our Services, you acknowledge that you
                have read, understood, and agree to be bound by these Terms and
                our Privacy Policy. These Terms constitute a legally binding
                agreement between you and ICR.
              </p>
              <p className="text-slate-600">
                If you are using our Services on behalf of an organization, you
                represent and warrant that you have the authority to bind that
                organization to these Terms.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">2</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Use of Services
              </h2>
            </div>
            <div className="ml-13 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  2.1 Eligibility
                </h3>
                <p className="text-slate-600">
                  You must be at least 18 years old to use our Services. By
                  using our Services, you represent and warrant that you meet
                  this age requirement and have the legal capacity to enter into
                  these Terms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  2.2 License to Use
                </h3>
                <p className="text-slate-600">
                  Subject to your compliance with these Terms, we grant you a
                  limited, non-exclusive, non-transferable, revocable license to
                  access and use our Services for lawful business purposes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  2.3 Prohibited Activities
                </h3>
                <p className="text-slate-600 mb-2">You agree not to:</p>
                <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                  <li>
                    Use the Services for any illegal or unauthorized purpose
                  </li>
                  <li>
                    Violate any applicable laws, regulations, or third-party
                    rights
                  </li>
                  <li>Interfere with or disrupt the Services or servers</li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    Services
                  </li>
                  <li>
                    Use automated systems or software to extract data from the
                    Services
                  </li>
                  <li>Transmit viruses, malware, or other malicious code</li>
                  <li>
                    Impersonate any person or entity or misrepresent your
                    affiliation
                  </li>
                  <li>
                    Engage in any activity that could harm ICR&apos;s reputation
                    or interests
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">3</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Intellectual Property Rights
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                All content, features, and functionality of the Services,
                including but not limited to text, graphics, logos, images,
                software, and design, are owned by ICR or our licensors and are
                protected by international copyright, trademark, patent, trade
                secret, and other intellectual property laws.
              </p>
              <p className="text-slate-600">
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, republish, download, store, or
                transmit any of our content without our prior written consent,
                except as necessary for your authorized use of the Services.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">4</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                User Content and Submissions
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                If you submit any content, information, or materials to us
                through the Services (including job applications, inquiries, or
                feedback), you grant ICR a non-exclusive, worldwide,
                royalty-free, perpetual, irrevocable license to use, reproduce,
                modify, adapt, publish, and display such content for business
                purposes.
              </p>
              <p className="text-slate-600">
                You represent and warrant that you own or have the necessary
                rights to any content you submit and that such content does not
                violate any third-party rights or applicable laws.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">5</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Professional Services
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                Any professional services provided by ICR are subject to
                separate written agreements. These Terms do not create any
                client-advisor relationship or obligation to provide services.
                The provision of information through our Services does not
                constitute professional advice and should not be relied upon as
                such.
              </p>
              <p className="text-slate-600">
                For specific advisory services, please contact us directly to
                discuss your requirements and enter into a formal engagement
                agreement.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">6</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Third-Party Links and Services
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                Our Services may contain links to third-party websites or
                services that are not owned or controlled by ICR. We have no
                control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party websites or
                services.
              </p>
              <p className="text-slate-600">
                You acknowledge and agree that ICR shall not be responsible or
                liable for any damage or loss caused by your use of any
                third-party websites or services.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">7</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Disclaimer of Warranties
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600 uppercase font-semibold mb-2">
                THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER
                EXPRESS OR IMPLIED.
              </p>
              <p className="text-slate-600">
                To the fullest extent permitted by law, ICR disclaims all
                warranties, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement. We do not warrant that:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>
                  The Services will be uninterrupted, timely, secure, or
                  error-free
                </li>
                <li>
                  The results obtained from using the Services will be accurate
                  or reliable
                </li>
                <li>Any errors in the Services will be corrected</li>
                <li>
                  The Services will meet your requirements or expectations
                </li>
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">8</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Limitation of Liability
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600 uppercase font-semibold mb-2">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ICR AND ITS AFFILIATES,
                OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE
                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
                DATA, USE, OR GOODWILL.
              </p>
              <p className="text-slate-600">
                In no event shall our total liability to you for all claims
                arising out of or relating to these Terms or the Services exceed
                the amount you paid us, if any, in the twelve (12) months
                preceding the claim, or one hundred dollars ($100), whichever is
                greater.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">9</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Indemnification
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                You agree to indemnify, defend, and hold harmless ICR and its
                affiliates, officers, directors, employees, agents, and
                licensors from and against any claims, liabilities, damages,
                losses, costs, or expenses (including reasonable attorneys&apos;
                fees) arising out of or relating to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>Your use or misuse of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Any content you submit or transmit through the Services</li>
              </ul>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">10</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Modifications to Services and Terms
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                We reserve the right to modify, suspend, or discontinue the
                Services (or any part thereof) at any time without notice. We
                may also modify these Terms at any time by posting the revised
                Terms on our website. Your continued use of the Services after
                such modifications constitutes your acceptance of the updated
                Terms.
              </p>
              <p className="text-slate-600">
                We will not be liable to you or any third party for any
                modification, suspension, or discontinuation of the Services.
              </p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">11</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Termination</h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                We may terminate or suspend your access to the Services
                immediately, without prior notice or liability, for any reason,
                including if you breach these Terms. Upon termination, your
                right to use the Services will immediately cease.
              </p>
              <p className="text-slate-600">
                All provisions of these Terms that by their nature should
                survive termination shall survive, including ownership
                provisions, warranty disclaimers, indemnity, and limitations of
                liability.
              </p>
            </div>
          </div>

          {/* Section 12 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">12</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Governing Law and Dispute Resolution
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                These Terms shall be governed by and construed in accordance
                with the laws of the United Arab Emirates, without regard to its
                conflict of law provisions.
              </p>
              <p className="text-slate-600">
                Any disputes arising out of or relating to these Terms or the
                Services shall be resolved through good faith negotiations. If a
                resolution cannot be reached, disputes shall be subject to the
                exclusive jurisdiction of the courts of Dubai, UAE.
              </p>
            </div>
          </div>

          {/* Section 13 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">13</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                General Provisions
              </h2>
            </div>
            <div className="ml-13 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  13.1 Entire Agreement
                </h3>
                <p className="text-slate-600">
                  These Terms, together with our Privacy Policy, constitute the
                  entire agreement between you and ICR regarding the Services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  13.2 Severability
                </h3>
                <p className="text-slate-600">
                  If any provision of these Terms is found to be invalid or
                  unenforceable, the remaining provisions shall remain in full
                  force and effect.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  13.3 Waiver
                </h3>
                <p className="text-slate-600">
                  Our failure to enforce any right or provision of these Terms
                  shall not constitute a waiver of such right or provision.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  13.4 Assignment
                </h3>
                <p className="text-slate-600">
                  You may not assign or transfer these Terms or your rights
                  hereunder without our prior written consent. We may assign
                  these Terms without restriction.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 bg-emerald-50 rounded-xl border border-emerald-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Contact Us
            </h2>
            <p className="text-slate-700 mb-4">
              If you have any questions, concerns, or requests regarding these
              Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-slate-700">
              <p>
                <strong>ICR</strong>
              </p>
              <p>
                General Inquiries:{" "}
                <a
                  href="mailto:info@icr-me.com"
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  info@icr-me.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
