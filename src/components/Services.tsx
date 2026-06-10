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
        <div className="mb-14 max-w-2xl">
          <p className="section-label mb-4">What We Do</p>
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Products &amp; services
          </h2>
          <p className="body-text">
            From our own product portfolio to custom client engagements, we
            deliver end-to-end technology solutions.
          </p>
        </div>

        <div className="glass-panel grid gap-px overflow-hidden rounded-xl md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-white/70 p-7 backdrop-blur-sm">
              <div className="mb-5 flex items-center justify-between">
                <service.icon
                  size={22}
                  className="text-slate-700"
                  strokeWidth={1.5}
                />
                <span className="text-sm text-slate-400">{service.category}</span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
