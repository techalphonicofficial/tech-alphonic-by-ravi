import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Ghost,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100svh-110px)] overflow-hidden bg-background px-5 py-16 sm:px-8 lg:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-[8%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-primary" />
      <div className="pointer-events-none absolute right-[12%] top-[28%] h-3 w-3 animate-pulse rounded-full bg-secondary" />
      <div className="pointer-events-none absolute bottom-[18%] left-[16%] h-2 w-2 animate-pulse rounded-full bg-primary" />

      <div className="relative mx-auto flex min-h-[calc(100svh-190px)] max-w-6xl items-center justify-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT — Animated illustration */}
          <div className="relative flex min-h-[390px] items-center justify-center">
            
            {/* Orbit */}
            <div className="absolute h-[310px] w-[310px] rounded-full border border-primary/15 sm:h-[370px] sm:w-[370px]" />
            <div className="absolute h-[230px] w-[230px] rounded-full border border-dashed border-secondary/25 sm:h-[280px] sm:w-[280px]" />

            {/* Orbiting dot */}
            <div className="absolute h-[310px] w-[310px] animate-spin-slow rounded-full sm:h-[370px] sm:w-[370px]">
              <span className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_20px_rgba(83,175,190,0.7)]" />
            </div>

            {/* Floating glass card — top */}
            <div className="absolute left-[10%] top-[4%] animate-float rounded-2xl border border-white/70 bg-white/65 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
              <Sparkles className="text-secondary" size={21} />
            </div>

            {/* Floating glass card — right */}
            <div className="absolute right-[7%] top-[22%] animate-float-delayed rounded-2xl border border-white/70 bg-white/65 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
              <Zap className="text-primary" size={21} />
            </div>

            {/* Floating glass card — bottom */}
            <div className="absolute bottom-[8%] left-[12%] animate-float-slow rounded-2xl border border-white/70 bg-white/65 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
              <Search className="text-muted" size={20} />
            </div>

            {/* Main illustration */}
            <div className="relative flex h-[250px] w-[250px] items-center justify-center sm:h-[290px] sm:w-[290px]">
              
              {/* Main glass circle */}
              <div className="absolute inset-0 rounded-full border border-white/80 bg-white/45 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl" />

              {/* Gradient inner circle */}
              <div className="absolute inset-[18px] rounded-full bg-gradient-to-br from-primary/15 via-white/20 to-secondary/15" />

              {/* 404 */}
              <div className="relative z-10 text-center">
                <div className="text-[82px] font-black leading-none tracking-[-0.08em] text-dark sm:text-[96px]">
                  4<span className="relative inline-block text-primary">0</span>4
                </div>

                <div className="mt-2 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-muted">
                  <span className="h-px w-5 bg-primary/40" />
                  Lost in Space
                  <span className="h-px w-5 bg-primary/40" />
                </div>
              </div>

              {/* Ghost */}
              <div className="absolute -bottom-2 left-1/2 flex h-12 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-primary shadow-lg backdrop-blur-xl">
                <Ghost size={25} />
              </div>
            </div>

            {/* Tiny floating 404 badge */}
            <div className="absolute bottom-[13%] right-[8%] animate-bounce rounded-xl border border-white/80 bg-white/75 px-3 py-2 text-xs font-black text-dark shadow-lg backdrop-blur-xl">
              404
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Error 404
            </div>

            <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.045em] text-dark sm:text-5xl lg:text-6xl">
              Looks like you&apos;ve
              <br />
              <span className="text-primary">lost your way.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-muted lg:mx-0 lg:text-lg">
              The page you&apos;re looking for doesn&apos;t exist, has been
              moved, or is temporarily unavailable. Let&apos;s get you back
              to somewhere useful.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/"
                className="btn-premium group inline-flex items-center justify-center gap-2 rounded-full bg-dark px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition-all duration-300 hover:-translate-y-1"
              >
                <ArrowLeft
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back to Home
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-7 py-3.5 text-sm font-bold text-dark shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                Contact Us
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Small status */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted lg:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>TechAlphonic</span>
              <span className="text-slate-300">•</span>
              <span>Digital solutions that keep you moving</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}