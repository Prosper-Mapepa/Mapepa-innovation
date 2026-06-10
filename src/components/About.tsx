import { Target, Lightbulb, Shield, Rocket } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We invest in technology that solves real problems — turning bold ideas into products with clear market value.",
  },
  {
    icon: Shield,
    title: "Built on Trust",
    description:
      "Security, reliability, and transparency are foundational to every product we ship and every partnership we build.",
  },
  {
    icon: Target,
    title: "User-Centered Design",
    description:
      "Enterprise-grade engineering meets consumer-grade experience — intuitive, elegant, and built to retain users.",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    description:
      "From MVP to market leader, our architecture and processes are designed for sustainable, long-term growth.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-alt py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="section-label mb-4">About</p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Technology with purpose and vision
            </h2>
            <p className="body-text mb-5">
              Mapepa Innovation LLC is a technology company building software
              products and services that create lasting value. We operate at the
              intersection of enterprise engineering and consumer experience
              design.
            </p>
            <p className="body-text">
              Our flagship product, VeriTalent, represents our commitment to
              solving high-impact problems — with more products and B2B
              engagements on the horizon.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="card p-6">
                <value.icon
                  size={22}
                  className="mb-4 text-accent-600"
                  strokeWidth={1.5}
                />
                <h3 className="mb-2 text-base font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
