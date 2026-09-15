"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function OurWorkCTA({ data }) {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 pb-24 pt-8 sm:px-8 lg:px-10 lg:pb-32">

      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[35px] bg-[#111827] px-7 py-16 sm:px-12 lg:px-20 lg:py-20">

        {/* Glow */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#53AFBE]/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#FE5C36]/15 blur-3xl" />

        {/* Decorative Circle */}

        <div className="pointer-events-none absolute right-10 top-10 hidden h-40 w-40 rounded-full border border-white/10 lg:block" />

        <div className="pointer-events-none absolute right-20 top-20 hidden h-20 w-20 rounded-full border border-[#53AFBE]/20 lg:block" />

        <div className="relative max-w-3xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#53AFBE]/30 bg-[#53AFBE]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#53AFBE]">
            <Sparkles size={12} />
            {data.eyebrow}
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {data.title}
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            {data.description}
          </p>

          <Link
            href={data.href}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#FE5C36] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FE5C36]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FE5C36]/30"
          >
            {data.button}

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
              <ArrowRight size={15} />
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
}