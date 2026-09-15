"use client";

import { ArrowDown, Clock, CalendarDays, Sparkles } from "lucide-react";

export default function BlogArticleHero({ post }) {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 pb-16 pt-20 sm:px-8 lg:px-10 lg:pb-24 lg:pt-28">

      <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#53AFBE]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#FEB449]/10 blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] text-center">

        <div className="animate-[fadeInUp_0.7s_ease-out_forwards] opacity-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#53AFBE]/25 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#53AFBE] shadow-sm backdrop-blur-xl">
            <Sparkles size={13} />
            {post.category}
          </span>
        </div>

        <h1 className="mx-auto mt-7 max-w-5xl animate-[fadeInUp_0.8s_0.1s_ease-out_forwards] text-4xl font-black leading-[1.03] tracking-[-0.04em] text-[#111827] opacity-0 sm:text-5xl lg:text-6xl xl:text-7xl">
          {post.title}
        </h1>

        <p className="mx-auto mt-7 max-w-3xl animate-[fadeInUp_0.8s_0.2s_ease-out_forwards] text-base leading-8 text-[#6B7280] opacity-0 sm:text-lg">
          {post.excerpt}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#9CA3AF]">

          <span className="flex items-center gap-2">
            <CalendarDays size={14} className="text-[#53AFBE]" />
            {post.date}
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-[#53AFBE] sm:block" />

          <span className="flex items-center gap-2">
            <Clock size={14} className="text-[#53AFBE]" />
            {post.readTime}
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-[#53AFBE] sm:block" />

          <span>{post.author.name}</span>

        </div>

        <div className="mt-14 hidden items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#9CA3AF] sm:flex">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#111827]/10 bg-white">
            <ArrowDown size={14} />
          </span>

          Start reading
        </div>

      </div>

      {/* FEATURE IMAGE */}

      <div className="relative mx-auto mt-14 max-w-[1450px] overflow-hidden rounded-[28px] border border-white bg-white p-1 shadow-[0_30px_100px_rgba(17,24,39,0.14)] sm:mt-20 sm:rounded-[36px] sm:p-2">

        <div className="relative aspect-[16/8] overflow-hidden rounded-[23px] sm:rounded-[30px]">

          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/30 via-transparent to-transparent" />

        </div>

      </div>

    </section>
  );
}