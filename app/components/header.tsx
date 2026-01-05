"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Expertise", href: "/expertise" },
    { label: "Why ICR", href: "/why-icr" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/ContactUS" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  return (
    <header className="w-full bg-linear-to-r from-[#061b2d] to-[#0b2f4a]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Multiple glow layers for better visibility */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-cyan-400/30 to-emerald-400 blur-2xl rounded-full animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-br from-white/20 to-emerald-300/20 blur-xl rounded-full" />

              <Image
                src="/images/logo1.png"
                alt="ICR Logo"
                width={120}
                height={120}
                className="object-contain relative z-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-slate-200 px-4 py-2 rounded-lg transition-all duration-300 hover:text-white group overflow-hidden"
              >
                {/* Glass effect background */}
                <span className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20" />

                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Text */}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Language Selector */}
          <div className="hidden md:block relative">
            <Button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300"
            >
              <Globe className="h-4 w-4 mr-2" />
              <span className="text-sm">EN</span>
              <svg
                className={`ml-2 h-4 w-4 transition-transform ${
                  langMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>

            {/* Language Dropdown */}
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg border border-slate-200 overflow-hidden z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 transition-colors"
                    onClick={() => {
                      // Language change logic will be added later
                      setLangMenuOpen(false);
                    }}
                  >
                    {/* <span className="text-2xl">{lang.flag}</span> */}
                    <span className="font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu (ShadCN Sheet) */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 h-12 w-12"
                >
                  <Menu size={32} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-gradient-to-b from-[#061b2d] to-[#0b2f4a] border-l border-white/10 p-0"
              >
                {/* Header with Logo and Close */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/25 to-cyan-400/25 blur-lg rounded-full" />
                      <Image
                        src="/images/logo1.png"
                        alt="ICR Logo"
                        width={55}
                        height={55}
                        className="object-contain relative z-10 drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                      />
                    </div>
                  </Link>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10 h-8 w-8"
                    >
                      <X size={20} />
                    </Button>
                  </SheetClose>
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col p-6 space-y-1">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="group relative flex items-center py-3 px-4 rounded-lg text-sm font-medium text-slate-200 transition-all duration-300 overflow-hidden"
                        onClick={() => setIsOpen(false)}
                      >
                        {/* Glass effect background */}
                        <span className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20" />

                        {/* Shine effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                        {/* Content */}
                        <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {item.label}
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Language Selector in Mobile */}
                <div className="absolute bottom-20 left-0 right-0 p-6 border-t border-white/10">
                  <div className="text-xs text-slate-400 mb-3">Language</div>
                  <div className="grid grid-cols-3 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="flex flex-col items-center gap-1 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                        onClick={() => {
                          // Language change logic will be added later
                        }}
                      >
                        {/* <span className="text-2xl">{lang.flag}</span> */}
                        <span className="text-xs text-slate-300">
                          {lang.code.toUpperCase()}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-gradient-to-t from-[#061b2d]/50">
                  <SheetClose asChild>
                    <Link href="/ContactUS"></Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
