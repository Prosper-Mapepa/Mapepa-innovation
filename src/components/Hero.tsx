import { ArrowRight } from "lucide-react";

const stats = [
  { value: "B2B", label: "Enterprise Solutions" },
  { value: "B2C", label: "Consumer Products" },
  { value: "1+", label: "Products in Market" },
  { value: "US", label: "Based & Operating" },
];

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-6 text-slate-500 font-bold tracking-wide uppercase ">Technology · Innovation · Impact</p>

          <h1 className="mb-7 text-5xl leading-tight font-semibold tracking-tight text-slate-900 md:text-6xl">
            Building software that scales with ambition
          </h1>

          <p className="body-text mx-auto mb-10 max-w-2xl">
            Mapepa Innovation LLC develops B2B and B2C software products and
            services - engineered for reliability, designed for growth.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#products" className="btn-primary group">
              View VeriTalent
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a href="#contact" className="btn-secondary">
              Partner With Us
            </a>
          </div>
        </div>

        <div className="glass-panel mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/70 px-6 py-8 text-center backdrop-blur-sm md:py-10"
            >
              <div className="mb-1 text-2xl font-semibold text-slate-900 md:text-3xl">
                {stat.value}
              </div>
              <div className="text-base text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
