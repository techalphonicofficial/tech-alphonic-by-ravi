"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function RelatedBlogs({ posts = [] }) {
  if (!posts.length) return null;

  return (
    <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

      <div className="mx-auto max-w-[1200px]">

        <div className="flex items-end justify-between gap-6">

          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#53AFBE]">
              Continue Reading
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#111827] sm:text-4xl">
              You might also like.
            </h2>
          </div>

          <span className="hidden text-[10px] font-bold uppercase tracking-[0.15em] text-[#9CA3AF] sm:block">
            More insights
          </span>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-[24px] border border-[#111827]/8 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#53AFBE]/20 hover:shadow-xl"
            >

              <div className="relative aspect-[1.45/1] overflow-hidden">

                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-xl">
                  {post.category}
                </div>

                <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111827] transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>

              </div>

              <div className="p-6">

                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#9CA3AF]">
                  {post.date}
                </p>

                <h3 className="mt-3 line-clamp-2 text-lg font-black leading-snug text-[#111827] transition-colors group-hover:text-[#53AFBE]">
                  {post.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6B7280]">
                  {post.excerpt}
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}