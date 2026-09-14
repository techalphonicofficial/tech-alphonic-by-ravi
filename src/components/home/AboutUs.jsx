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
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <div className="absolute left-[-10%] top-[-30%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-[-30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-[100px]" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(17,24,39,0.98),rgba(17,24,39,0.88),rgba(83,175,190,0.12))]" />

        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/5 px-4 py-2 text-xs font-bold tracking-[0.2em] text-primary backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
              {data.hero.eyebrow}
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {data.hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              {data.hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={data.hero.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
              >
                {data.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href={data.hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10"
              >
                {data.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {data.introduction.eyebrow}
            </p>

            <h2 className="max-w-2xl text-3xl font-black leading-tight text-dark sm:text-4xl lg:text-5xl">
              {data.introduction.title}
            </h2>

            <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-muted">
              {data.introduction.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {data.introduction.highlights.map((item, index) => (
              <div
                key={item.label}
                className={`group rounded-2xl border border-slate-200 bg-background p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl ${
                  index === 0 || index === 3 ? "lg:translate-y-5" : ""
                }`}
              >
                <div className="text-3xl font-black text-dark sm:text-4xl">
                  {item.value}
                </div>

                <div className="mt-2 text-sm font-semibold text-muted">
                  {item.label}
                </div>

                <div className="mt-5 h-1 w-10 rounded-full bg-primary transition-all duration-500 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative overflow-hidden bg-background px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="absolute right-[-150px] top-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {data.values.eyebrow}
            </p>

            <h2 className="text-3xl font-black text-dark sm:text-4xl lg:text-5xl">
              {data.values.title}
            </h2>

            <p className="mt-5 leading-8 text-muted">
              {data.values.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.values.items.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/70 bg-white/75 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-3 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-dark">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-dark px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {data.capabilities.eyebrow}
            </p>

            <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              {data.capabilities.title}
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              {data.capabilities.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {data.capabilities.items.map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.07]"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

                  <div className="relative flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <span className="text-xs font-bold tracking-widest text-white/30">
                        0{index + 1}
                      </span>

                      <h3 className="mt-1 text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/55">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {data.process.eyebrow}
            </p>

            <h2 className="text-3xl font-black text-dark sm:text-4xl lg:text-5xl">
              {data.process.title}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {data.process.steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < data.process.steps.length - 1 && (
                  <div className="absolute left-14 top-6 hidden h-px w-[calc(100%-2rem)] bg-slate-200 lg:block" />
                )}

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dark text-sm font-black text-white shadow-lg">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-dark">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-background px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(83,175,190,0.15),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(254,180,73,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {data.cta.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-black text-dark sm:text-4xl lg:text-5xl">
            {data.cta.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
            {data.cta.description}
          </p>

          <Link
            href={data.cta.button.href}
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-dark px-7 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
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