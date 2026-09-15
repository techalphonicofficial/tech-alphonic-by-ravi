"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Code2,
  Lightbulb,
  Palette,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

import { aboutUsData } from "@/config/aboutUsData";

const iconMap = {
  Target,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Code2,
  TrendingUp,
  Palette,
  Bot,
};

function AboutUs() {
  const data = aboutUsData;

  return (
    <div className="overflow-hidden bg-background text-text">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden bg-dark">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />

          <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(17,24,39,0.98),rgba(17,24,39,0.9),rgba(83,175,190,0.1))]" />

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-xl">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />

              {data.hero.eyebrow}
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {data.hero.title}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              {data.hero.description}
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={data.hero.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
              >
                {data.hero.primaryCta.label}

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href={data.hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10"
              >
                {data.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================== */}
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Content */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              {data.introduction.eyebrow}
            </p>

            <h2 className="max-w-xl text-3xl font-black leading-tight text-dark sm:text-4xl">
              {data.introduction.title}
            </h2>

            <div className="mt-5 max-w-2xl space-y-3 text-sm leading-7 text-muted">
              {data.introduction.paragraphs
                .slice(0, 2)
                .map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-3">
            {data.introduction.highlights.slice(0, 4).map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-slate-200 bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="text-2xl font-black text-dark sm:text-3xl">
                  {item.value}
                </div>

                <div className="mt-1 text-xs font-semibold text-muted sm:text-sm">
                  {item.label}
                </div>

                <div className="mt-4 h-1 w-8 rounded-full bg-primary transition-all duration-300 group-hover:w-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================== */}
      <section className="relative overflow-hidden bg-background px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute -right-32 top-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              {data.capabilities.eyebrow}
            </p>

            <h2 className="text-3xl font-black text-dark sm:text-4xl">
              {data.capabilities.title}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              {data.capabilities.description}
            </p>
          </div>

          {/* Cards */}
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.capabilities.items.slice(0, 4).map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  {/* Number */}
                  <span className="absolute right-4 top-4 text-xs font-bold text-slate-200 transition-colors duration-300 group-hover:text-primary/30">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-base font-bold text-dark">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-dark px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* Glow */}
        <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              {data.cta.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              {data.cta.title}
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/55">
              {data.cta.description}
            </p>
          </div>

          <Link
            href={data.cta.button.href}
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
          >
            {data.cta.button.label}

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;