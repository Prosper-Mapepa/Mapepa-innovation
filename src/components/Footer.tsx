const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  Products: [{ label: "VeriTalent", href: "#products" }],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white/50 py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
                M
              </div>
              <span className="text-base font-semibold text-slate-900">
                Mapepa Innovation
              </span>
            </div>
            <p className="max-w-sm text-base text-slate-600">
              Building B2B and B2C software products and services that drive
              real-world impact.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-slate-900">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-slate-600 hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 border-t border-slate-200 pt-8 text-base text-slate-500">
          &copy; {new Date().getFullYear()} Mapepa Innovation LLC. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
