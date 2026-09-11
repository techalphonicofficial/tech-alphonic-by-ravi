"use client";

import Link from "next/link";
import { serviceTicker } from "@/config/serviceTicker";

function ServiceTicker() {
  if (!serviceTicker?.length) return null;

  const items = [...serviceTicker, ...serviceTicker];

  return (
    <section
      aria-label="Our services"
      className="w-full overflow-hidden border-y border-white/10 bg-dark"
    >
      <div className="overflow-hidden">
        <div className="flex w-max animate-service-ticker hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {items.map((item, index) => (
            <Link
              key={`${item.label}-${index}`}
              href={item.href}
              className="group flex shrink-0 items-center gap-4 px-5 py-3 text-sm font-bold tracking-tight text-white transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:gap-5 sm:px-6 sm:py-3.5 sm:text-[15px]"
            >
              <span className="text-secondary transition-transform duration-300 group-hover:scale-125">
                •
              </span>

              <span className="whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-px">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceTicker;