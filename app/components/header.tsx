"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
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
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-200 transition hover:text-white"
              >
                {item.label}
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
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0b2f4a] border-none">
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm font-medium text-slate-200"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white">
                    Get Started »
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
