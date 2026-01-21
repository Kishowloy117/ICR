"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function PrivacyPage() {
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
            Privacy Policy
          </div>
          <h1 className="mx-auto max-w-3xl text-3xl font-sans leading-tight text-white md:text-5xl">
            Privacy Policy
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              Your Data, Our Commitment
            </span>
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-base text-slate-200">
            Last Updated: January 22, 2026
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="w-full bg-gradient-to-b from-[#f7fafc] to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-slate-700 leading-relaxed">
              At ICR (&quot;ICR,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;), we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">1</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Information We Collect
              </h2>
            </div>
            <div className="ml-13 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  1.1 Personal Information
                </h3>
                <p className="text-slate-600 mb-2">
                  We may collect personal information that you voluntarily
                  provide to us, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                  <li>
                    Name and contact information (email address, phone number,
                    mailing address)
                  </li>
                  <li>Company name and job title</li>
                  <li>Professional credentials and experience</li>
                  <li>Resume/CV information when applying for positions</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  1.2 Automatically Collected Information
                </h3>
                <p className="text-slate-600 mb-2">
                  When you visit our website, we may automatically collect
                  certain information, including:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">2</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                How We Use Your Information
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Providing, maintaining, and improving our services</li>
                <li>Responding to your inquiries and requests</li>
                <li>Processing job applications and recruitment activities</li>
                <li>Sending administrative information and updates</li>
                <li>Conducting business operations and analysis</li>
                <li>Complying with legal obligations and regulations</li>
                <li>Preventing fraud and enhancing security</li>
                <li>
                  Marketing and promotional communications (with your consent)
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">3</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Information Sharing and Disclosure
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600 mb-2">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  <strong>Service Providers:</strong> With third-party vendors
                  who perform services on our behalf
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with
                  mergers, acquisitions, or asset sales
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights and interests
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly
                  authorize us to share your information
                </li>
              </ul>
              <p className="text-slate-600 mt-3">
                We do not sell your personal information to third parties.
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
                Data Security
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                These measures include:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-slate-600 mt-3">
                However, no method of transmission over the internet or
                electronic storage is 100% secure. While we strive to protect
                your information, we cannot guarantee absolute security.
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
                Your Rights and Choices
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600 mb-2">
                You have certain rights regarding your personal information,
                including:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> Request access to your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain processing of
                  your information
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to
                  another service
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw consent for
                  processing where applicable
                </li>
              </ul>
              <p className="text-slate-600 mt-3">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@icr-me.com"
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  privacy@icr-me.com
                </a>
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
                Cookies and Tracking Technologies
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                We use cookies and similar tracking technologies to enhance your
                browsing experience and analyze website usage. You can control
                cookie preferences through your browser settings. Note that
                disabling cookies may affect website functionality.
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
                Data Retention
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required by law or legitimate
                business purposes.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">8</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                International Data Transfers
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                Your information may be transferred to and processed in
                countries other than your country of residence. We ensure
                appropriate safeguards are in place to protect your information
                in accordance with applicable data protection laws.
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
                Children&apos;s Privacy
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                Our services are not directed to individuals under the age of
                18. We do not knowingly collect personal information from
                children. If you believe we have collected information from a
                child, please contact us immediately.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">10</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Changes to This Privacy Policy
              </h2>
            </div>
            <div className="ml-13 space-y-3">
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new Privacy
                Policy on this page and updating the &quot;Last Updated&quot;
                date. We encourage you to review this Privacy Policy
                periodically.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 bg-emerald-50 rounded-xl border border-emerald-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Contact Us
            </h2>
            <p className="text-slate-700 mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
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
