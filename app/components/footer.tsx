"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#071829] text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left */}
          <div>
            <div className="text-2xl font-extrabold tracking-tight">
              INSIGHT
            </div>
            <div className="mt-1 text-sm text-slate-300">
              Consultancy & Research
            </div>
            <div className="mt-4 text-sm text-slate-400">
              Research • Insight • Strategic Clarity
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              <li>
                <Link href="/services" className="hover:underline block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:underline block">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/why-icr" className="hover:underline block">
                  Why ICR
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline block">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/ContactUS" className="hover:underline block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="text-sm text-slate-300">
              <a href="mailto:info@icr-me.com" className="hover:underline">
                info@icr-me.com
              </a>
            </div>

            <p className="mt-3 text-sm text-slate-400">
              For general enquiries, project discussions, and partnership
              opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-slate-400">
            © 2025 Insight Consultancy & Research. All rights reserved.
          </div>

          <div className="mt-3 sm:mt-0 text-sm text-slate-300">
            <Link href="/privacy" className="hover:underline mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline mr-4">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:underline">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
