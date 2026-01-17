"use client";

import { FormEvent, useRef, useState, ChangeEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Facebook, Linkedin, X, Upload, FileText } from "lucide-react";

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showIndicator, setShowIndicator] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        e.target.value = "";
        return;
      }
      // Check file type
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF and DOCX files are allowed");
        e.target.value = "";
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    // Get Power Automate URL from environment variable
    const powerAutomateUrl = process.env.NEXT_PUBLIC_POWER_AUTOMATE_URL;

    if (!powerAutomateUrl) {
      alert(
        "Form submission is not configured. Please contact the administrator."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // Convert file to base64 if exists
      let fileBase64 = "";
      let fileName = "";
      let fileType = "";

      if (selectedFile) {
        const reader = new FileReader();
        fileBase64 = await new Promise<string>((resolve, reject) => {
          reader.onload = () => {
            const base64 = reader.result as string;
            // Remove data URL prefix (e.g., "data:application/pdf;base64,")
            resolve(base64.split(",")[1]);
          };
          reader.onerror = reject;
          reader.readAsDataURL(selectedFile);
        });
        fileName = selectedFile.name;
        fileType = selectedFile.type;
      }

      // Prepare data for Power Automate
      const submitData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        company: formData.get("company") as string,
        message: formData.get("message") as string,
        file: fileBase64
          ? {
              name: fileName,
              content: fileBase64,
              contentType: fileType,
            }
          : null,
        submittedAt: new Date().toISOString(),
      };

      // Submit to Power Automate
      const response = await fetch(powerAutomateUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        alert(
          "Thank you for your enquiry! We will review your submission and respond within 24-48 hours."
        );
        form.reset();
        setSelectedFile(null);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "There was an error submitting your form. Please try again or contact us directly at info@icr-me.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setShowIndicator(true);
    setTimeout(() => setShowIndicator(false), 3000);
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
          <p className="mx-auto mt-2 max-w-2xl text-sm text-white/80">
            We work with public sector bodies, corporate organisations, and
            international stakeholders.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={scrollToForm}
              className="bg-emerald-500 px-6 py-3 text-sm font-semibold hover:bg-emerald-600"
            >
              Discuss Your Requirements »
            </Button>
            <Link href="/services">
              <Button className="bg-transparent border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: Contact info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>

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
          <div className="relative">
            {/* Pulse indicator */}
            {showIndicator && (
              <div className="absolute -inset-4 rounded-3xl animate-pulse">
                <div className="absolute inset-0 rounded-3xl bg-emerald-400/20 animate-ping" />
                <div className="absolute inset-0 rounded-3xl bg-emerald-400/30 border-2 border-emerald-400" />
              </div>
            )}

            <form
              ref={formRef}
              className="relative bg-[#071827] p-8 rounded-2xl shadow-lg text-white transition-all duration-300"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-300">
                    Company
                  </label>
                  <input
                    name="company"
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-slate-300">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50"
                ></textarea>
              </div>

              {/* File Upload */}
              <div className="mt-4">
                <label className="block text-sm text-slate-300 mb-2">
                  Upload a brief (optional)
                </label>
                <div
                  onClick={() => !isSubmitting && fileInputRef.current?.click()}
                  className={`w-full rounded-md border-2 border-dashed ${
                    selectedFile
                      ? "border-emerald-400 bg-emerald-400/5"
                      : "border-slate-700 bg-transparent"
                  } px-4 py-8 text-center cursor-pointer hover:border-emerald-400 transition-colors ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="document"
                    accept=".pdf,.docx,.doc"
                    onChange={handleFileChange}
                    disabled={isSubmitting}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center justify-center">
                    {selectedFile ? (
                      <>
                        <FileText className="h-8 w-8 text-emerald-400 mb-2" />
                        <span className="text-emerald-400 text-sm font-medium">
                          {selectedFile.name}
                        </span>
                        <span className="text-slate-500 text-xs mt-1">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFile(null);
                            if (fileInputRef.current) {
                              fileInputRef.current.value = "";
                            }
                          }}
                          className="mt-2 text-xs text-red-400 hover:text-red-300"
                        >
                          Remove file
                        </button>
                      </>
                    ) : (
                      <>
                        <Upload className="h-8 w-8 text-emerald-400 mb-2" />
                        <span className="text-slate-400 text-sm">
                          Click to upload or drag and drop
                        </span>
                        <span className="text-slate-500 text-xs mt-1">
                          You may upload a brief, TOR, or background document
                        </span>
                        <span className="text-slate-500 text-xs mt-1">
                          PDF or DOCX (Max 10MB)
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-md bg-emerald-500 py-3 text-sm font-semibold hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>

              {/* Confidentiality Notice */}
              <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-emerald-50/10 border border-emerald-400/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <p className="text-xs text-slate-300">
                  All enquiries are treated confidentially.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="w-full py-12 bg-gradient-to-br from-[#0a1f2e] to-[#041a2e]">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-emerald-500/20 border border-emerald-400/30 px-4 py-1 text-sm text-emerald-400 font-semibold mb-4 shadow-sm">
              Next Steps
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Happens Next
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              All enquiries are reviewed by our consulting team, and we respond
              where there is a clear fit with our expertise.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - vertical on mobile, hidden on desktop */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-400/30 md:hidden" />

            {/* Timeline line - horizontal on desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-emerald-400/30" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {/* Step 1 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg flex-shrink-0">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div className="ml-6 md:ml-0 md:mt-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Review
                  </h3>
                  <p className="text-sm text-slate-300">
                    Our team reviews your enquiry within 24-48 hours to
                    understand your needs and requirements.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg flex-shrink-0">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="ml-6 md:ml-0 md:mt-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Initial Contact
                  </h3>
                  <p className="text-sm text-slate-300">
                    If there&apos;s a clear fit, we&apos;ll reach out to
                    schedule an initial consultation to discuss your objectives.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shrink-0">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <div className="ml-6 md:ml-0 md:mt-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Proposal
                  </h3>
                  <p className="text-sm text-slate-300">
                    We prepare a tailored proposal outlining our approach,
                    timeline, and how we can support your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400 mb-4">
              Need urgent assistance? Reach out directly at{" "}
              <a
                href="mailto:info@icr-me.com"
                className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
              >
                info@icr-me.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
