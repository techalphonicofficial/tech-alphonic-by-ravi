"use client";

import { ArrowUpRight } from "lucide-react";

export default function WorkIndustries({ industries }) {
  return (
    <section className="relative overflow-hidden bg-[#111827] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">

      {/* Glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#53AFBE]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#FE5C36]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">

        {/* Header */}

        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr]">

          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#53AFBE]">
              Industries
            </span>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Experience across
              <span className="text-[#53AFBE]"> industries.</span>
            </h2>
          </div>

          <p className="self-end text-sm leading-7 text-gray-400">
            Different industries have different challenges. Our approach
            combines business understanding, technology and design to
            create solutions that actually fit.
          </p>

        </div>

        {/* Industries */}

        <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry) => (
            <div
              key={industry.number}
              className="group relative min-h-[220px] border-b border-r border-white/10 p-7 transition-all duration-500 hover:bg-white/[0.04] sm:p-9"
            >

              <div className="flex items-center justify-between">

                <span className="text-xs font-bold text-[#53AFBE]">
                  {industry.number}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#53AFBE]"
                />

              </div>

              <h3 className="mt-12 text-xl font-bold">
                {industry.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                {industry.description}
              </p>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#53AFBE] transition-all duration-500 group-hover:w-full" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}