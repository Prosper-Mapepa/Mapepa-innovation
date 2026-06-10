"use client";

import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="section-label mb-4">Contact</p>
              <h2 className="mb-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Let&apos;s build something great
              </h2>
              <p className="body-text mb-10">
                Interested in VeriTalent, a custom software solution, or a
                strategic partnership? We&apos;d welcome the conversation.
              </p>

              <div className="space-y-5">
                <a
                  href="mailto:hello@mapepainnovation.com"
                  className="flex items-center gap-4 text-slate-700 transition-colors hover:text-accent-700"
                >
                  <Mail size={20} className="text-slate-400" strokeWidth={1.5} />
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="text-base font-medium text-slate-900">
                      hello@mapepainnovation.com
                    </div>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-slate-700">
                  <MapPin size={20} className="text-slate-400" strokeWidth={1.5} />
                  <div>
                    <div className="text-sm text-slate-500">Location</div>
                    <div className="text-base font-medium text-slate-900">
                      United States
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200/60 bg-white/50 p-8 md:p-12 lg:border-t-0 lg:border-l">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-slate-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-slate-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-slate-400"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="veritalent">VeriTalent</option>
                    <option value="investment">Investment</option>
                    <option value="b2b">B2B Services</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your inquiry..."
                    className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-slate-400"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
