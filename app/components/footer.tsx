"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left */}
          <div>
            <Link href="/" className="inline-block">
              <div className="relative">
                {/* Glow effect */}
                {/* <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 blur-lg rounded-full" /> */}
                <Image
                  src="/images/logo1.png"
                  alt="ICR Logo"
                  width={100}
                  height={100}
                  className="object-contain relative z-10"
                />
              </div>
            </Link>
            <div className="mt-4 text-sm text-slate-600">
              Research • Insight • Strategic Clarity
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
              <li>
                <Link
                  href="/services"
                  className="hover:text-emerald-600 transition-colors block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise"
                  className="hover:text-emerald-600 transition-colors block"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="/why-icr"
                  className="hover:text-emerald-600 transition-colors block"
                >
                  Why ICR
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-600 transition-colors block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-emerald-600 transition-colors block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/ContactUS"
                  className="hover:text-emerald-600 transition-colors block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">
              Contact
            </h4>
            <div className="text-sm text-slate-700">
              <a
                href="mailto:info@icr-me.com"
                className="hover:text-emerald-600 transition-colors"
              >
                info@icr-me.com
              </a>
            </div>

            <p className="mt-3 text-sm text-slate-600">
              For general enquiries, project discussions, and partnership
              opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-slate-600">
            © 2025 Insight Consultancy & Research. All rights reserved.
          </div>

          <div className="mt-3 sm:mt-0 text-sm text-slate-700">
            <Link
              href="/privacy"
              className="hover:text-emerald-600 transition-colors mr-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-emerald-600 transition-colors mr-4"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-emerald-600 transition-colors"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
