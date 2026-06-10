export default function TechBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#f8f9fb]" />

      {/* Fine dot matrix */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Major grid lines */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Circuit network SVG */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="circuit-grid"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 100 80 M 100 120 L 100 200 M 0 100 L 80 100 M 120 100 L 200 100"
              stroke="#059669"
              strokeWidth="0.5"
              fill="none"
            />
            <circle cx="100" cy="100" r="3" fill="#059669" opacity="0.6" />
            <circle cx="100" cy="0" r="2" fill="#059669" opacity="0.4" />
            <circle cx="100" cy="200" r="2" fill="#059669" opacity="0.4" />
            <circle cx="0" cy="100" r="2" fill="#059669" opacity="0.4" />
            <circle cx="200" cy="100" r="2" fill="#059669" opacity="0.4" />
            <path
              d="M 100 80 L 160 40 M 100 80 L 40 40 M 100 120 L 160 160 M 100 120 L 40 160"
              stroke="#059669"
              strokeWidth="0.4"
              fill="none"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-grid)" />
      </svg>

      {/* Large decorative circuit paths */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M0 200 H400 L500 300 H900 L1000 200 H1440"
          stroke="#059669"
          strokeWidth="1"
          strokeOpacity="0.12"
        />
        <path
          d="M0 500 H300 L450 650 H750 L900 500 H1440"
          stroke="#059669"
          strokeWidth="1"
          strokeOpacity="0.1"
        />
        <path
          d="M0 700 H250 L400 550 H700 L850 700 H1440"
          stroke="#18181b"
          strokeWidth="1"
          strokeOpacity="0.06"
        />
        <path
          d="M200 0 V350 L350 500 V900"
          stroke="#059669"
          strokeWidth="1"
          strokeOpacity="0.08"
        />
        <path
          d="M1200 0 V250 L1050 400 V900"
          stroke="#059669"
          strokeWidth="1"
          strokeOpacity="0.08"
        />
        <circle cx="500" cy="300" r="4" fill="#059669" fillOpacity="0.25" />
        <circle cx="900" cy="500" r="4" fill="#059669" fillOpacity="0.2" />
        <circle cx="400" cy="550" r="4" fill="#059669" fillOpacity="0.2" />
        <circle cx="1050" cy="400" r="4" fill="#059669" fillOpacity="0.2" />
        <circle cx="350" cy="500" r="3" fill="#18181b" fillOpacity="0.1" />
      </svg>

      {/* Ambient glow orbs */}
      <div className="tech-orb tech-orb-1 absolute top-[5%] left-[8%] h-[520px] w-[520px] rounded-full bg-accent-100/50 blur-[100px]" />
      <div className="tech-orb tech-orb-2 absolute top-[35%] right-[5%] h-[440px] w-[440px] rounded-full bg-slate-200/60 blur-[90px]" />
      <div className="tech-orb tech-orb-3 absolute bottom-[5%] left-[25%] h-[380px] w-[380px] rounded-full bg-accent-50/70 blur-[80px]" />

      {/* Center spotlight — keeps content readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_0%,#f8f9fb_100%)]" />

      {/* Top fade for header */}
      <div className="absolute top-0 right-0 left-0 h-32 bg-gradient-to-b from-[#f8f9fb] to-transparent" />
    </div>
  );
}
