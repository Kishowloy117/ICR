"use client";

import { FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Linkedin, X } from "lucide-react";

export default function ContactUs() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data);
    alert("Thanks — message sent (demo).");
    form.reset();
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <section className="w-full relative  bg-linear-to-br from-[#041a2e] via-[#062944] to-[#041a2e] text-white py-6">
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

        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 mb-4">
            Contact
          </div>

          <h1 className="mx-auto max-w-4xl text-3xl font-sans leading-tight text-white md:text-5xl">
            Let’s discuss
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-emerald-200">
              your requirements
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80">
            Whether you are planning a study, assessing a market, or seeking
            research or advisory support, our team is available to discuss your
            requirements and how we can support informed decision-making.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="bg-emerald-500 px-6 py-3 text-sm font-semibold hover:bg-emerald-600">
              Request a Consultation »
            </Button>
            <Link href="/services">
              <Button className="bg-transparent border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: Contact info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Contact</h2>

            <div className="divide-y divide-slate-200 bg-white rounded-lg p-6 shadow-sm">
              <div className="flex gap-4 py-6 items-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Email
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Email For general enquiries, project discussions, and
                    partnership opportunities::{" "}
                    <a
                      href="mailto:info@icr-me.com"
                      className="text-emerald-600 font-medium"
                    >
                      info@icr-me.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-sm font-semibold text-slate-900">
                  Follow Us :
                </h3>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white border"
                  >
                    <Facebook className="h-4 w-4 text-blue-600" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white border"
                  >
                    <Linkedin className="h-4 w-4 text-blue-700" />
                  </a>
                  <a
                    href="#"
                    aria-label="X"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white border"
                  >
                    <X className="h-4 w-4 text-slate-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <form
              className="bg-[#071827] p-8 rounded-2xl shadow-lg text-white"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300">
                    Full Name
                  </label>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300">Phone</label>
                  <input
                    name="phone"
                    className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300">
                    Company
                  </label>
                  <input
                    name="company"
                    className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-slate-300">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-md bg-emerald-500 py-3 text-sm font-semibold hover:bg-emerald-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
