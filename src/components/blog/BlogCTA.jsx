"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="bg-[#F8FAFC] px-5 pb-24 pt-2 sm:px-8 lg:px-10 lg:pb-32">

      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[32px] bg-[#111827] px-7 py-14 sm:px-12 lg:px-16 lg:py-16">

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#53AFBE]/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#FE5C36]/15 blur-3xl" />

        <div className="relative max-w-2xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#53AFBE]/25 bg-[#53AFBE]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#53AFBE]">
            <Sparkles size={12} />
            Have a project in mind?
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            Let's turn your next idea into something remarkable.
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            From strategy and design to development and growth, let's build
            something that creates real business impact.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#FE5C36] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FE5C36]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Start a Conversation

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
              <ArrowRight size={15} />
            </span>
          </Link>

        </div>

      </div>

    </section>
  );
}