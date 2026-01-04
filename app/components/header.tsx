"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
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

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Expertise", href: "/expertise" },
    { label: "Why ICR", href: "/why-icr" },
    { label: "Careers", href: "/careers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/ContactUS" },
  ];

  return (
    <header className="w-full bg-linear-to-r from-[#061b2d] to-[#0b2f4a]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-cyan-400/80" />
            <span className="text-lg font-semibold tracking-wide text-white">
              INSIGHT
            </span>
          </div>

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

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Get Started »
            </Button>
          </div>

          {/* Mobile Menu (ShadCN Sheet) */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-gradient-to-b from-[#061b2d] to-[#0b2f4a] border-l border-white/10 p-0"
              >
                {/* Header with Logo and Close */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-cyan-400/80" />
                    <span className="text-base font-semibold tracking-wide text-white">
                      INSIGHT
                    </span>
                  </div>
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

                {/* CTA Button */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-gradient-to-t from-[#061b2d]/50">
                  <SheetClose asChild>
                    <Button
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-6 rounded-lg shadow-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started →
                    </Button>
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
