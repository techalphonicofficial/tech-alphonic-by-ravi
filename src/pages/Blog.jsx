"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Sparkles,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const categories = [
  "All",
  "Web Development",
  "Digital Marketing",
  "SEO",
  "AI & Automation",
  "Business",
];

const featuredPost = {
  category: "Web Development",
  title: "Building Digital Experiences That Actually Move Businesses Forward",
  excerpt:
    "A modern website is more than a digital presence. Discover how strategy, technology and experience come together to create products people remember.",
  date: "September 12, 2026",
  readTime: "8 min read",
  image:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
};

const posts = [
  {
    category: "Digital Marketing",
    title: "Why Your Digital Strategy Needs More Than Just Social Media",
    excerpt:
      "A practical look at building a digital ecosystem that connects content, performance and conversion.",
    date: "Sep 10, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "AI & Automation",
    title: "Where AI Automation Fits Into a Modern Business",
    excerpt:
      "Explore practical ways businesses can automate repetitive processes without losing the human touch.",
    date: "Sep 07, 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "SEO",
    title: "The New Rules of Search Visibility in 2026",
    excerpt:
      "Search is evolving rapidly. Here is how brands can build sustainable visibility across modern discovery channels.",
    date: "Sep 04, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Business",
    title: "Turning Website Visitors Into Real Customers",
    excerpt:
      "Traffic is only the beginning. Learn the principles behind high-performing digital experiences.",
    date: "Aug 30, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Web Development",
    title: "React, Performance & The Future of Modern Websites",
    excerpt:
      "How modern frontend architecture can create faster, smoother and more scalable digital products.",
    date: "Aug 27, 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Digital Marketing",
    title: "From Brand Awareness to Measurable Growth",
    excerpt:
      "Why modern marketing needs to connect creativity with measurable business outcomes.",
    date: "Aug 23, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Blog() {
  return (
    <main className="overflow-hidden bg-background text-text">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-dark">
        {/* Background glow */}
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cta/15 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 lg:px-10 lg:pb-20 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              Insights & Ideas
            </div>

            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Ideas that move
              <span className="block text-primary">business forward.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Insights, strategies and ideas from the world of technology,
              digital marketing, design and business growth.
            </p>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {[
              ["500+", "Services"],
              ["100+", "Ideas & Insights"],
              ["10+", "Industries"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl"
              >
                <div className="text-xl font-black text-white">{value}</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wider text-white/40">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}
      <section className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 scrollbar-none sm:px-8 lg:px-10">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                index === 0
                  ? "bg-dark text-white shadow-lg"
                  : "bg-slate-100 text-muted hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* =====================================================
          FEATURED ARTICLE
      ===================================================== */}
      <section className="px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Featured
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-dark sm:text-4xl">
                Worth reading.
              </h2>
            </div>

            <div className="hidden items-center gap-2 text-xs font-semibold text-muted sm:flex">
              Latest insight
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[2rem] bg-dark"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Image */}
              <div className="relative min-h-[330px] overflow-hidden lg:min-h-[520px]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-dark" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xl">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary transition-all duration-500 group-hover:rotate-45 group-hover:bg-primary group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Editor&apos;s Pick
                </span>

                <h3 className="mt-5 max-w-xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                  {featuredPost.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-white/40">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {featuredPost.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-primary" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link
                  href="#"
                  className="group/link mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* =====================================================
          ARTICLE GRID
      ===================================================== */}
      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Latest Articles
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-dark sm:text-4xl">
                Explore our thinking.
              </h2>
            </div>

            <button className="hidden items-center gap-1 text-sm font-bold text-dark transition-colors hover:text-primary sm:flex">
              View all
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                variants={itemVariants}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-70" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xl">
                    {post.category}
                  </span>

                  <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-dark shadow-lg transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[11px] font-medium text-muted">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-primary" />
                      {post.date}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5 text-primary" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 line-clamp-2 text-xl font-bold leading-snug text-dark transition-colors duration-300 group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
                    {post.excerpt}
                  </p>

                  <Link
                    href="#"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-dark transition-all duration-300 group-hover:gap-3 group-hover:text-primary"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER / CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-dark px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cta/15 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Stay Ahead
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Ideas worth knowing.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50">
            Get practical insights about technology, digital marketing,
            business growth and everything in between.
          </p>

          <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-12 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-primary focus:bg-white/10 focus:ring-4 focus:ring-primary/10"
            />

            <button className="group relative h-12 overflow-hidden rounded-xl bg-primary px-6 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20">
              <span className="absolute inset-0 translate-x-[-105%] skew-x-[-18deg] bg-cta transition-transform duration-500 group-hover:translate-x-[-5%]" />

              <span className="relative flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-cta" />
    </main>
  );
}