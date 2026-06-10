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
        <div className="mb-14 max-w-2xl">
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

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col items-center lg:items-start">
            <PhoneVideoDemo src="/veritalent/v2.mp4" size="hero" />

            <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-600"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50">
                  <feature.icon
                    size={20}
                    className="text-accent-600"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h4 className="mb-1 text-base font-semibold text-slate-900">
                    {feature.title}
                  </h4>
                  <p className="text-base leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
