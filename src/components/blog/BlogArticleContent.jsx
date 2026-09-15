"use client";

import { useEffect, useState } from "react";
import BlogTableOfContents from "./BlogTableOfContents";

export default function BlogArticleContent({ toc, content }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        documentHeight > 0
          ? Math.min((scrollTop / documentHeight) * 100, 100)
          : 0;

      setProgress(percentage);
    };

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      {/* Reading Progress */}

      <div className="fixed left-0 top-0 z-[100] h-[3px] w-full bg-transparent">
        <div
          className="h-full bg-[#53AFBE] transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[220px_minmax(0,760px)] lg:gap-20">

          <BlogTableOfContents toc={toc} />

          <article className="min-w-0">

            {content.map((block, index) => {

              if (block.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="mb-7 text-[16px] leading-[1.9] text-[#4B5563] sm:text-[17px]"
                  >
                    {block.text}
                  </p>
                );
              }

              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    id={block.id}
                    className="mb-6 mt-14 scroll-mt-28 text-2xl font-black tracking-tight text-[#111827] sm:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "image") {
                return (
                  <figure key={index} className="my-12">

                    <div className="overflow-hidden rounded-[24px] border border-[#111827]/8 bg-[#F8FAFC] p-1 shadow-xl">
                      <img
                        src={block.src}
                        alt={block.alt}
                        className="w-full rounded-[20px] object-cover"
                      />
                    </div>

                    {block.caption && (
                      <figcaption className="mt-3 text-center text-xs leading-5 text-[#9CA3AF]">
                        {block.caption}
                      </figcaption>
                    )}

                  </figure>
                );
              }

              if (block.type === "list") {
                return (
                  <ul
                    key={index}
                    className="my-8 space-y-3 rounded-2xl border border-[#53AFBE]/10 bg-[#53AFBE]/[0.035] p-6 sm:p-7"
                  >
                    {block.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex gap-3 text-sm leading-7 text-[#4B5563] sm:text-[16px]"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#53AFBE]" />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "quote") {
                return (
                  <blockquote
                    key={index}
                    className="my-12 border-l-4 border-[#FE5C36] bg-[#F8FAFC] px-6 py-7 text-xl font-bold leading-relaxed text-[#111827] sm:px-8 sm:text-2xl"
                  >
                    “{block.text}”
                  </blockquote>
                );
              }

              if (block.type === "callout") {
                return (
                  <div
                    key={index}
                    className="my-10 rounded-[24px] border border-[#53AFBE]/15 bg-gradient-to-br from-[#53AFBE]/10 to-[#FEB449]/5 p-6 sm:p-8"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#53AFBE]">
                      {block.title}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-[#374151] sm:text-base">
                      {block.text}
                    </p>
                  </div>
                );
              }

              return null;
            })}

          </article>

        </div>

      </section>
    </>
  );
}