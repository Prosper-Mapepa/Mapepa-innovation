"use client";

import { useState } from "react";
import { Smartphone } from "lucide-react";

interface PhoneVideoDemoProps {
  src: string;
  size?: "default" | "hero";
}

export default function PhoneVideoDemo({
  src,
  size = "default",
}: PhoneVideoDemoProps) {
  const [hasError, setHasError] = useState(false);

  const widthClass =
    size === "hero"
      ? "w-[280px] sm:w-[300px] md:w-[320px]"
      : "w-[280px] md:w-[300px]";

  return (
    <div className={`relative mx-auto ${widthClass}`}>
      <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-slate-900/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2.25rem] border-[5px] border-slate-900 bg-slate-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_12px_24px_-8px_rgba(0,0,0,0.2)]">
        <div className="flex justify-center bg-slate-900 pt-2.5 pb-1">
          <div className="h-[18px] w-[84px] rounded-full bg-slate-800" />
        </div>

        <div className="relative aspect-[9/19.5] bg-black">
          {!hasError ? (
            <video
              key={src}
              src={src}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onError={() => setHasError(true)}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
              <Smartphone size={28} className="text-slate-500" strokeWidth={1.5} />
              <p className="text-sm text-slate-400">Video unavailable</p>
            </div>
          )}
        </div>

        <div className="flex justify-center bg-slate-900 py-1.5">
          <div className="h-1 w-20 rounded-full bg-slate-700" />
        </div>
      </div>
    </div>
  );
}
