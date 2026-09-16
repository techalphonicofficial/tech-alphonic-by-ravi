"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Copy,
  Share2,
  Sparkles,
} from "lucide-react";

export default function BlogDetail({ post, relatedPosts = [] }) {
  const [activeSection, setActiveSection] = useState("");
  const [copied, setCopied] = useState(false);

  const articleScrollRef = useRef(null);

  /* =====================================================
     ACTIVE TOC SECTION
  ====================================================== */

  useEffect(() => {
    if (!post?.content?.length) return;

    const scrollContainer = articleScrollRef.current;

    if (!scrollContainer) return;

    const sections = post.content
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: scrollContainer,
        rootMargin: "-30px 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    // First section active initially
    if (sections[0]) {
      setActiveSection(sections[0].id);
    }

    return () => observer.disconnect();
  }, [post]);

  /* =====================================================
     SMOOTH TOC SCROLL
  ====================================================== */

  const handleTocClick = (event, id) => {
    event.preventDefault();

    const container = articleScrollRef.current;
    const target = document.getElementById(id);

    if (!container || !target) return;

    const containerTop = container.getBoundingClientRect().top;
    const targetTop = target.getBoundingClientRect().top;

    const scrollPosition =
      container.scrollTop + (targetTop - containerTop) - 28;

    container.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });

    setActiveSection(id);
  };

  /* =====================================================
     COPY LINK
  ====================================================== */

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Unable to copy link:", error);
    }
  };

  /* =====================================================
     SHARE
  ====================================================== */

  const handleShare = async () => {
    const shareData = {
      title: post?.title || "TechAlphonic Blog",
      text: post?.excerpt || "",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if (error?.name !== "AbortError") {
          console.error("Share failed:", error);
        }
      }
    } else {
      handleCopyLink();
    }
  };

  if (!post) return null;

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#53AFBE]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#FEB449]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-4 sm:px-8 lg:px-12 lg:pb-20">
          <Link
            href="/blog"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors duration-200 hover:text-[#53AFBE]"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />

            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#53AFBE]/20 bg-[#53AFBE]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#53AFBE]">
              <Sparkles size={14} />
              {post.category}
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#6B7280] sm:text-lg lg:text-xl">
              {post.excerpt}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
            {post.date && (
              <div className="flex items-center gap-2">
                <CalendarDays
                  size={16}
                  className="text-[#53AFBE]"
                />
                <span>{post.date}</span>
              </div>
            )}

            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock3
                  size={16}
                  className="text-[#53AFBE]"
                />
                <span>{post.readTime}</span>
              </div>
            )}

            {post.author?.name && (
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FEB449]" />
                <span>{post.author.name}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED IMAGE
      ====================================================== */}

      {post.image && (
        <section className="relative px-5 sm:px-8 lg:px-12">
          <div className="mx-auto -mt-5 max-w-7xl sm:-mt-8 lg:-mt-12">
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-xl shadow-slate-900/10">
              <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[260px] w-full object-cover sm:h-[400px] lg:h-[520px]"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          ARTICLE AREA
      ====================================================== */}

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
            {/* =================================================
                ARTICLE
            ================================================== */}

            <article className="min-w-0">
              <div
                ref={articleScrollRef}
                className="
                  h-auto
                  overflow-visible
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-8
                  shadow-sm

                  sm:px-10
                  sm:py-12

                  lg:h-[calc(100vh-190px)]
                  lg:max-h-[900px]
                  lg:overflow-y-auto
                  lg:px-14
                  lg:py-14

                  scroll-smooth
                  overscroll-contain

                  [scrollbar-width:thin]
                  [scrollbar-color:#cbd5e1_transparent]
                "
              >
                {/* =================================================
                    ARTICLE INTRO
                ================================================== */}

                {post.excerpt && (
                  <div className="mb-12 border-l-4 border-[#53AFBE] pl-5 sm:mb-14 sm:pl-7">
                    <p className="text-lg font-medium leading-8 text-slate-700 sm:text-xl sm:leading-9">
                      {post.excerpt}
                    </p>
                  </div>
                )}

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="space-y-14">
                  {post.content?.map((section, index) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-8"
                    >
                      {/* Section heading */}
                      <div className="mb-6">
                        <div className="mb-3 flex items-center gap-3">
                          <span className="text-xs font-extrabold tracking-[0.15em] text-[#53AFBE]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="h-px w-10 bg-[#53AFBE]/30" />
                        </div>

                        <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#1F2937] sm:text-3xl">
                          {section.heading}
                        </h2>
                      </div>

                      {/* Paragraphs */}
                      <div className="space-y-6">
                        {section.paragraphs?.map(
                          (paragraph, paragraphIndex) => (
                            <p
                              key={`${section.id}-${paragraphIndex}`}
                              className="text-[16px] leading-[1.95] text-slate-600 sm:text-[17px] lg:text-[18px]"
                            >
                              {paragraph}
                            </p>
                          )
                        )}
                      </div>
                    </section>
                  ))}
                </div>

                {/* =================================================
                    SHARE
                ================================================== */}

                <div className="my-14 h-px bg-slate-200" />

                <div className="flex flex-col gap-5 rounded-2xl bg-[#F8FAFC] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div>
                    <p className="text-sm font-bold text-[#1F2937]">
                      Found this useful?
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Share this article with your network.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleShare}
                      className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#53AFBE] px-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#53AFBE]/20"
                    >
                      <Share2 size={15} />
                      Share
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyLink}
                      aria-label="Copy article link"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-[#53AFBE]/30 hover:bg-[#53AFBE]/5 hover:text-[#53AFBE]"
                    >
                      {copied ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Bottom breathing space */}
                <div className="h-4" />
              </div>
            </article>

            {/* =================================================
                RIGHT STICKY TOC
            ================================================== */}

            {post.toc?.length > 0 && (
              <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
                <div
                  className="
                    max-h-[calc(100vh-140px)]
                    overflow-y-auto
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/95
                    p-5
                    shadow-sm
                    backdrop-blur-xl

                    [scrollbar-width:thin]
                    [scrollbar-color:#cbd5e1_transparent]
                  "
                >
                  {/* TOC Header */}
                  <div className="mb-5 border-b border-slate-100 pb-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#53AFBE]/10 text-[#53AFBE]">
                        <Sparkles size={15} />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#53AFBE]">
                        Reading Guide
                      </span>
                    </div>

                    <h2 className="text-lg font-extrabold text-[#1F2937]">
                      Table of Contents
                    </h2>
                  </div>

                  {/* TOC */}
                  <nav className="space-y-1">
                    {post.toc.map((item, index) => {
                      const isActive =
                        activeSection === item.id;

                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(event) =>
                            handleTocClick(event, item.id)
                          }
                          className={`group relative flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm leading-5 transition-all duration-200 ${
                            isActive
                              ? "bg-[#53AFBE]/10 font-semibold text-[#53AFBE]"
                              : "text-slate-600 hover:bg-[#53AFBE]/5 hover:text-[#53AFBE]"
                          }`}
                        >
                          {/* Active indicator */}
                          <span
                            className={`absolute bottom-2 left-0 top-2 w-0.5 rounded-full transition-all duration-300 ${
                              isActive
                                ? "bg-[#53AFBE]"
                                : "bg-transparent"
                            }`}
                          />

                          <span
                            className={`mt-0.5 shrink-0 text-[11px] font-bold ${
                              isActive
                                ? "text-[#53AFBE]"
                                : "text-slate-400 group-hover:text-[#53AFBE]"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span>{item.title}</span>
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE TOC
      ====================================================== */}

      {post.toc?.length > 0 && (
        <section className="px-5 pb-12 sm:px-8 lg:hidden">
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#53AFBE]/10 text-[#53AFBE]">
                <Sparkles size={15} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#53AFBE]">
                  Reading Guide
                </p>

                <h2 className="text-base font-extrabold text-[#1F2937]">
                  Table of Contents
                </h2>
              </div>
            </div>

            <nav className="grid gap-1 sm:grid-cols-2">
              {post.toc.map((item, index) => {
                const isActive =
                  activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(event) =>
                      handleTocClick(event, item.id)
                    }
                    className={`flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm leading-5 transition-all duration-200 ${
                      isActive
                        ? "bg-[#53AFBE]/10 font-semibold text-[#53AFBE]"
                        : "text-slate-600 hover:bg-[#53AFBE]/5"
                    }`}
                  >
                    <span
                      className={`mt-0.5 shrink-0 text-[11px] font-bold ${
                        isActive
                          ? "text-[#53AFBE]"
                          : "text-slate-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{item.title}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </section>
      )}

      {/* =====================================================
          AUTHOR
      ====================================================== */}

      {post.author && (
        <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                {/* Logo */}
                {post.author.image ? (
                  <div className="flex h-20 w-full shrink-0 items-center justify-center rounded-2xl bg-slate-50 p-3 sm:h-20 sm:w-28">
                    <img
                      src="/logo.png"
                      alt={post.author.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#53AFBE]/10 text-xl font-extrabold text-[#53AFBE]">
                    {post.author.name?.charAt(0)}
                  </div>
                )}

                {/* Author Info */}
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#53AFBE]">
                    Written by
                  </p>

                  <h3 className="mt-1 break-words text-lg font-extrabold text-[#1F2937] sm:text-xl">
                    {post.author.name}
                  </h3>

                  {post.author.role && (
                    <p className="mt-1 break-words text-sm leading-6 text-slate-500">
                      {post.author.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          RELATED POSTS
      ====================================================== */}

      {relatedPosts?.length > 0 && (
        <section className="border-t border-slate-200 bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#53AFBE]">
                  Keep Reading
                </span>

                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1F2937] sm:text-4xl">
                  More From Our Blog
                </h2>
              </div>

              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#53AFBE]"
              >
                View all articles

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] transition-all duration-300 hover:-translate-y-1 hover:border-[#53AFBE]/30 hover:shadow-xl hover:shadow-slate-900/5"
                >
                  {item.image && (
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-5">
                    {item.category && (
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#53AFBE]">
                        {item.category}
                      </span>
                    )}

                    <h3 className="mt-2 line-clamp-2 text-lg font-extrabold leading-7 text-[#1F2937] transition-colors duration-200 group-hover:text-[#53AFBE]">
                      {item.title}
                    </h3>

                    {item.excerpt && (
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                        {item.excerpt}
                      </p>
                    )}

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#53AFBE]">
                      Read article
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#111827] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#53AFBE]/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#FE5C36]/15 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#53AFBE] backdrop-blur-md">
            <Sparkles size={14} />
            Let's Build Something Great
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready to turn your next idea into reality?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Let's discuss your project and find the right technology,
            development and digital strategy for your business.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE5C36] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FE5C36]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#FE5C36]/30"
            >
              Start a Conversation
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            >
              Explore More Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}