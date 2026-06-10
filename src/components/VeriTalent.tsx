import {
  BadgeCheck,
  Search,
  Users,
  BarChart3,
} from "lucide-react";
import PhoneVideoDemo from "@/components/PhoneVideoDemo";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Credentials",
    description:
      "Instantly verify professional credentials, certifications, and qualifications with confidence.",
  },
  {
    icon: Search,
    title: "Smart Talent Discovery",
    description:
      "Find the right talent faster with intelligent search and filtering powered by real data.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description:
      "Connect employers, recruiters, and professionals in one unified platform.",
  },
  {
    icon: BarChart3,
    title: "Insights & Analytics",
    description:
      "Make data-driven hiring decisions with comprehensive talent analytics and reporting.",
  },
];

const platforms = ["iOS", "Android", "Web — Coming Soon"];

export default function VeriTalent() {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-4">Flagship Product</p>
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            VeriTalent
          </h2>
          <p className="body-text">
            A trusted platform for talent verification and discovery. VeriTalent
            empowers organizations to hire with confidence and helps
            professionals showcase verified credentials.
          </p>
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Phone demo */}
          <div className="flex flex-col items-center lg:sticky lg:top-28 lg:items-start">
            <PhoneVideoDemo src="/veritalent/v2.mp4" size="hero" />
            <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-center">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-slate-200/80 bg-white/60 px-4 py-1.5 text-sm font-medium text-slate-600 backdrop-blur-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="rounded-2xl bg-[#fafaf8]/90 px-6 py-8 backdrop-blur-sm md:px-8 md:py-10">
            <p className="section-label mb-8">Key capabilities</p>
            <ul className="divide-y divide-slate-200/70">
              {features.map((feature) => (
                <li key={feature.title} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                  <feature.icon
                    size={20}
                    className="mt-1 shrink-0 text-accent-600"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h4 className="mb-1.5 font-semibold text-slate-900">
                      {feature.title}
                    </h4>
                    <p className="text-base leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
