import {
  Building2,
  ShoppingBag,
  Code2,
  Cloud,
  Palette,
  HeadphonesIcon,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    category: "B2B",
    title: "Enterprise Software",
    description:
      "Custom enterprise solutions, SaaS platforms, and integrations built to scale.",
  },
  {
    icon: ShoppingBag,
    category: "B2C",
    title: "Consumer Products",
    description:
      "Mobile and web applications designed for end users — intuitive and polished.",
  },
  {
    icon: Code2,
    category: "B2B",
    title: "Custom Development",
    description:
      "Full-stack development from concept to deployment.",
  },
  {
    icon: Cloud,
    category: "B2B",
    title: "Cloud & Infrastructure",
    description:
      "Cloud architecture, DevOps, and infrastructure for reliable systems.",
  },
  {
    icon: Palette,
    category: "B2B & B2C",
    title: "Product Design",
    description:
      "UI/UX design from wireframes to high-fidelity prototypes.",
  },
  {
    icon: HeadphonesIcon,
    category: "B2B",
    title: "Consulting & Support",
    description:
      "Technical consulting, code audits, and ongoing support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-alt py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="section-label mb-4">What We Do</p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Products &amp; services
            </h2>
            <p className="body-text">
              From our own product portfolio to custom client engagements, we
              deliver end-to-end technology solutions.
            </p>
          </div>
          <p className="text-sm font-medium text-slate-500 md:pb-1 md:text-right">
            B2B &amp; B2C · End to end
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="card group flex flex-col p-6 transition-all hover:border-slate-300/80 hover:shadow-md"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-accent-50">
                  <service.icon
                    size={22}
                    className="text-slate-700 transition-colors group-hover:text-accent-600"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="rounded-full border border-slate-200/80 bg-white/60 px-2.5 py-1 text-xs font-medium text-slate-500">
                  {service.category}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-auto text-[0.95rem] leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
