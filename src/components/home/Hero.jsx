"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  MousePointer2,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import { heroData } from "@/config/heroData";

const iconMap = {
  ArrowRight,
  CheckCircle2,
  Eye,
  MousePointer2,
  Sparkles,
  Target,
  TrendingUp,
};

const themeMap = {
  yellow: {
    icon: "bg-secondary text-dark",
    value: "text-[#a47700]",
  },
  blue: {
    icon: "bg-[#1670c4] text-white",
    value: "text-[#1769aa]",
  },
};

function Hero() {
  const Icon = ({ name, ...props }) => {
    const Component = iconMap[name];

    if (!Component) return null;

    return <Component {...props} />;
  };

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}

      <div className="absolute inset-0 -z-30 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroData.video.poster || undefined}
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={heroData.video.src} type="video/mp4" />
        </video>

        {/* Main white wash */}
        <div className="absolute inset-0 bg-white/75" />

        {/* Center readability */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.64)_42%,rgba(255,255,255,0.78)_100%)]" />

        {/* Top fade to connect with navbar */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/75 to-transparent" />

        {/* Side fade */}
        <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-white/80 to-transparent" />

        <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-white/80 to-transparent" />
      </div>

      {/* =====================================================
          DECORATIVE GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[28%] -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-[18%] top-[25%] -z-10 h-32 w-32 rounded-full bg-secondary/10 blur-[70px]" />

      <div className="pointer-events-none absolute right-[18%] top-[35%] -z-10 h-32 w-32 rounded-full bg-primary/10 blur-[70px]" />

      {/* =====================================================
          HERO WRAPPER
      ====================================================== */}

      <div className="relative mx-auto flex min-h-[calc(100svh-108px)] w-full max-w-[1600px] flex-col px-4 pb-7 pt-12 sm:px-6 sm:pt-14 lg:px-10 xl:px-14">
        {/* ===================================================
            LEFT FLOATING CARD
        ==================================================== */}

        <div className="hero-float absolute left-5 top-[11%] z-20 hidden lg:block xl:left-10 2xl:left-16">
          {(() => {
            const card = heroData.floatingCards.find(
              (item) => item.position === "left"
            );

            if (!card) return null;

            return (
              <div className="group flex items-center gap-3 rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-[0_18px_50px_rgba(17,24,39,0.11)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(17,24,39,0.16)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-dark shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon
                    name={card.icon}
                    size={20}
                    strokeWidth={2.4}
                  />
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted">
                    {card.label}
                  </p>

                  <p className="mt-0.5 text-[16px] font-extrabold tracking-tight text-dark">
                    {card.value}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>

        {/* ===================================================
            RIGHT FLOATING CARD
        ==================================================== */}

        <div className="hero-float-delayed absolute right-5 top-[43%] z-20 hidden lg:block xl:right-10 2xl:right-16">
          {(() => {
            const card = heroData.floatingCards.find(
              (item) => item.position === "right"
            );

            if (!card) return null;

            return (
              <div className="group flex items-center gap-3 rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-[0_18px_50px_rgba(17,24,39,0.11)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(17,24,39,0.16)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-dark shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <Icon
                    name={card.icon}
                    size={20}
                    strokeWidth={2.4}
                  />
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted">
                    {card.label}
                  </p>

                  <p className="mt-0.5 text-[16px] font-extrabold tracking-tight text-dark">
                    {card.value}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>

        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <div className="relative z-10 mx-auto flex w-full max-w-[1050px] flex-1 flex-col items-center justify-center text-center">
          {/* Badge */}

          <div className="hero-fade-in hero-delay-1 inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-secondary/95 px-5 py-2.5 text-[10px] font-extrabold tracking-[0.07em] text-dark shadow-[0_10px_30px_rgba(254,180,73,0.2)] backdrop-blur-md sm:px-6 sm:text-xs">
            <Icon
              name={heroData.badge.icon}
              size={14}
              strokeWidth={2.5}
            />

            <span>{heroData.badge.text}</span>
          </div>

          {/* Heading */}

          <h1 className="hero-fade-in hero-delay-2 mt-6 max-w-[1000px] text-[clamp(3rem,6.5vw,6.4rem)] font-black leading-[0.88] tracking-[-0.06em] text-dark">
            <span className="hero-gradient-text inline-block">
              {heroData.heading.highlight}
            </span>

            <br />

            <span className="inline-block">
              {heroData.heading.title}
            </span>
          </h1>

          {/* Subtitle */}

          <p className="hero-fade-in hero-delay-3 mt-6 max-w-[720px] text-[clamp(1rem,1.8vw,1.35rem)] font-bold leading-tight tracking-[-0.025em] text-dark/80 sm:mt-7">
            {heroData.subtitle}
          </p>

          {/* CTA */}

          <div className="hero-fade-in hero-delay-4 mt-7 sm:mt-9">
            <Link
              href={heroData.cta.href}
              className="hero-cta group relative inline-flex min-h-[58px] items-center gap-3 overflow-hidden rounded-full border border-dark/80 bg-white/95 px-2 pr-6 text-sm font-bold text-dark shadow-[0_15px_40px_rgba(17,24,39,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(17,24,39,0.18)] sm:min-h-[62px] sm:pr-7 sm:text-[15px]"
            >
              <span className="hero-cta-fill" />

              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-dark shadow-sm transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                <Icon
                  name={heroData.cta.icon}
                  size={20}
                  strokeWidth={2.5}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </span>

              <span className="relative z-10 whitespace-nowrap">
                {heroData.cta.text}
              </span>

              <span className="relative z-10 text-dark/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-dark">
                →
              </span>
            </Link>
          </div>

          {/* Rating */}

          <div className="hero-fade-in hero-delay-5 mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold text-dark/60 sm:mt-7 sm:text-sm">
            <span>{heroData.rating.text}</span>

            <span
              className="flex items-center gap-0.5"
              aria-label={`${heroData.rating.value} star rating`}
            >
              {Array.from({
                length: heroData.rating.value,
              }).map((_, index) => (
                <span
                  key={index}
                  className="hero-star text-secondary"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  ★
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* ===================================================
            STATS
        ==================================================== */}

        <div className="hero-fade-in hero-delay-6 relative z-20 mx-auto mt-8 grid w-full max-w-[1320px] grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-9 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          {heroData.stats.map((item, index) => {
            const theme = themeMap[item.theme];

            return (
              <div
                key={`${item.label}-${index}`}
                className="group relative min-h-[145px] overflow-hidden rounded-[20px] border border-white/80 bg-white/88 p-5 shadow-[0_10px_35px_rgba(17,24,39,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:bg-white/95 hover:shadow-[0_22px_50px_rgba(17,24,39,0.12)] sm:min-h-[155px] sm:p-5 lg:min-h-[160px]"
              >
                {/* Decorative circle */}

                <span className="absolute -bottom-12 -right-10 h-32 w-32 rounded-full bg-secondary/10 transition-transform duration-700 group-hover:scale-125" />

                {/* Moving shine */}

                <span className="pointer-events-none absolute -inset-y-full -left-[100%] w-[45%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/80 to-transparent transition-all duration-700 group-hover:left-[140%]" />

                {/* Icon */}

                <div
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 ${theme.icon}`}
                >
                  <Icon
                    name={item.icon}
                    size={20}
                    strokeWidth={2.3}
                  />
                </div>

                {/* Content */}

                <div className="relative z-10 mt-4">
                  <p className="text-[10px] font-bold tracking-[0.04em] text-muted sm:text-[11px]">
                    {item.label}
                  </p>

                  <p
                    className={`mt-1.5 text-xl font-black tracking-tight ${theme.value}`}
                  >
                    {item.value}
                  </p>

                  <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;