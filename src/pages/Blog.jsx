"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, SlidersHorizontal } from "lucide-react";

import BlogCard from "@/components/blog/BlogCard";
import { blogData } from "@/config/blogData";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  /* =========================================================
     CATEGORIES
  ========================================================== */

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        blogData
          .map((blog) => blog.category)
          .filter(Boolean)
      ),
    ];

    return ["All", ...uniqueCategories];
  }, []);

  /* =========================================================
     FILTERED BLOGS
  ========================================================== */

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") {
      return blogData;
    }

    return blogData.filter(
      (blog) => blog.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden px-5 pb-10 pt-28 sm:px-8 sm:pb-12 lg:px-12">

        {/* Background decoration */}

        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#53AFBE]/15 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#FEB449]/15 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#53AFBE]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#53AFBE]/20 bg-white/80 px-4 py-2 text-sm font-semibold text-[#53AFBE] shadow-sm backdrop-blur-md"
          >
            <Sparkles size={16} />
            Tech & Digital Insights
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl"
          >
            Insights That Help Your

            <span className="block text-[#53AFBE]">
              Business Move Forward
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B7280] sm:text-lg"
          >
            Discover practical insights, trends and strategies across
            technology, digital marketing, development and business growth.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          CATEGORY FILTER
      ====================================================== */}

      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-3 shadow-sm backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-4"
          >

            {/* Filter Label */}

            <div className="flex shrink-0 items-center gap-3 px-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#53AFBE]/10 text-[#53AFBE]">
                <SlidersHorizontal size={16} />
              </div>

              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#53AFBE]">
                  Explore
                </p>

                <p className="text-sm font-semibold text-[#1F2937]">
                  Browse by category
                </p>
              </div>
            </div>

            {/* Categories */}

            <div className="flex w-full gap-1.5 overflow-x-auto pb-1 sm:w-auto sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className="relative shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold outline-none transition-colors duration-300"
                  >

                    {/* Sliding Active Background */}

                    {isActive && (
                      <motion.span
                        layoutId="active-blog-category"
                        className="absolute inset-0 rounded-xl bg-[#53AFBE]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover Background */}

                    {!isActive && (
                      <span className="absolute inset-0 rounded-xl bg-slate-100 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    )}

                    {/* Label */}

                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-slate-600 hover:text-[#53AFBE]"
                      }`}
                    >
                      {category}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* =================================================
              RESULT COUNT
          ================================================== */}

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-[#6B7280]">
              Showing{" "}
              <span className="font-bold text-[#1F2937]">
                {filteredBlogs.length}
              </span>{" "}
              {filteredBlogs.length === 1 ? "article" : "articles"}
            </p>

            <AnimatePresence mode="wait">
              <motion.span
                key={activeCategory}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-semibold text-[#53AFBE]"
              >
                {activeCategory}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG GRID
      ====================================================== */}

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <motion.div
            layout
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* =================================================
              EMPTY STATE
          ================================================== */}

          {filteredBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[2rem] border border-slate-200 bg-white px-6 py-20 text-center shadow-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#53AFBE]/10 text-[#53AFBE]">
                <Sparkles size={22} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F2937]">
                No articles found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-[#6B7280]">
                There are currently no articles available in this
                category. Try exploring another category.
              </p>

              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="mt-6 rounded-xl bg-[#53AFBE] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#53AFBE]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#53AFBE]/25"
              >
                View All Articles
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}