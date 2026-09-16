"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

export default function BlogCard({ blog }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Image */}
      <Link href={`/blog/${blog.slug}`} className="block overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />

          {/* Category */}
          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-800 shadow-lg backdrop-blur-md">
              {blog.category}
            </span>
          </div>

          {/* Arrow */}
          <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white/95 text-slate-900 opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={19} />
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 sm:p-7">
        
        {/* Meta */}
        <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={14} />
            {blog.date}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${blog.slug}`}>
          <h2 className="text-xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#53AFBE] sm:text-2xl">
            {blog.title}
          </h2>
        </Link>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600 sm:text-base">
          {blog.excerpt}
        </p>

        {/* Read More */}
        <Link
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-all duration-300 hover:gap-3 hover:text-[#53AFBE]"
        >
          Read Article
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}