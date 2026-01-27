"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer
      className="bg-slate-50 text-slate-900 border-t border-slate-200"
      dir="ltr"
    >
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left */}
          <div>
            <Link href="/" className="inline-block">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute " />
                <Image
                  src="/images/logo1.png"
                  alt="ICR Logo"
                  width={100}
                  height={100}
                  className="object-contain relative z-10 drop-shadow-md"
                />
              </div>
            </Link>
            <div className="mt-4 text-sm text-slate-600">
              {t("footer.tagline")}
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h4
              // className="text-lg font-semibold text-slate-900 mb-4"
              className={`text-lg font-semibold text-slate-900 mb-4 ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("footer.quicklinks")}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
              <li>
                <Link
                  href="/services"
                  className="hover:text-emerald-600 transition-colors block"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise"
                  // className="hover:text-emerald-600 transition-colors block text-right"
                  className={`hover:text-emerald-600 transition-colors block ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {t("nav.expertise")}
                </Link>
              </li>
              <li>
                <Link
                  href="/why-icr"
                  className="hover:text-emerald-600 transition-colors block"
                >
                  {t("nav.whyicr")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  // className="hover:text-emerald-600 transition-colors block text-right"
                  className={`hover:text-emerald-600 transition-colors block ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-emerald-600 transition-colors block"
                >
                  {t("nav.careers")}
                </Link>
              </li>
              <li>
                <Link
                  href="/ContactUS"
                  // className="hover:text-emerald-600 transition-colors block text-right"
                  className={`hover:text-emerald-600 transition-colors block ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Right - Contact */}
          <div>
            <h4
              // className="text-lg font-semibold text-slate-900 mb-4"
              className={`text-lg font-semibold text-slate-900 mb-4 ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("nav.contact")}
            </h4>
            <div
              // className="text-sm text-slate-700"
              className={`text-sm text-slate-700 ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <a
                href="mailto:info@icr-me.com"
                // className="hover:text-emerald-600 transition-colors"
              >
                info@icr-me.com
              </a>
            </div>

            <p
              className={`mt-3 text-sm text-slate-600 ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("contact.email.desc")}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-slate-600">
            © 2026 Insight Consultancy & Research. All rights reserved.
          </div>

          <div className="mt-3 sm:mt-0 text-sm text-slate-700">
            <Link
              href="/privacy"
              className="hover:text-emerald-600 transition-colors mr-4"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/terms"
              className="hover:text-emerald-600 transition-colors mr-4"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
