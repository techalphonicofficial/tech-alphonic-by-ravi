"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DesktopMegaMenu({
  item,
  open,
  onNavigate,
}) {
  if (!open || !item?.children?.length) {
    return null;
  }

  /* =========================================================
     HANDLE NAVIGATION
  ========================================================== */

  const handleLinkClick = (href) => {
    if (onNavigate) {
      onNavigate(href);
    }
  };

  /* =========================================================
     VIEW ALL SERVICES URL
  ========================================================== */

  const viewAllHref = `/services/${item.label
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "and")}`;

  return (
    <div className="absolute left-0 top-full z-[90] hidden w-full xl:block">
      <div className="animate-mega-menu border-t border-primary/20 bg-white/95 shadow-2xl shadow-dark/10 backdrop-blur-2xl">
        <div className="mx-auto max-w-[1500px] px-6 py-8 lg:px-8">

          {/* =====================================================
              MEGA MENU HEADER
          ====================================================== */}

          <div className="mb-7 flex items-end justify-between border-b border-dark/10 pb-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Explore
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-dark ">
                {item.label}
              </h2>
            </div>

            {/* View All Services */}

            <button
              type="button"
              onClick={() => handleLinkClick(viewAllHref)}
              className="group cursor-pointer hidden items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white lg:flex"
            >
              View All Services

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* =====================================================
              DYNAMIC COLUMNS
          ====================================================== */}

          <div
            className={`grid gap-x-8 ${
              item.children.length === 1
                ? "grid-cols-1"
                : item.children.length === 2
                  ? "grid-cols-2"
                  : item.children.length === 3
                    ? "grid-cols-3"
                    : "grid-cols-4"
            }`}
          >
            {item.children.map((column, columnIndex) => (
              <div
                key={`${column.title}-${columnIndex}`}
                className={`group/column px-4 first:pl-0 ${
                  columnIndex !== item.children.length - 1
                    ? "border-r border-dark/10"
                    : ""
                }`}
              >

                {/* =================================================
                    COLUMN TITLE
                ================================================== */}

                <div className="mb-4 flex items-center gap-2">
                  <span className="h-5 w-[3px] rounded-full bg-primary transition-all duration-300 group-hover/column:h-7" />

                  <h3 className="text-[12px] font-bold tracking-[0.08em] text-dark">
                    {column.title}
                  </h3>
                </div>

                {/* =================================================
                    LINKS
                ================================================== */}

                <div className="space-y-1">
                  {column.items?.map((link, linkIndex) => (
                    <button
                      key={`${link.href}-${linkIndex}`}
                      type="button"
                      onClick={() =>
                        handleLinkClick(link.href)
                      }
                      className="group/link cursor-pointer relative flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[13px] font-medium text-text transition-all duration-300 hover:translate-x-1 hover:bg-primary/5 hover:text-primary"
                    >
                      <span className="relative">
                        {link.label}

                        {/* Underline */}

                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover/link:w-full" />
                      </span>

                      {/* Arrow */}

                      <ArrowRight
                        size={13}
                        className="-translate-x-2 opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* =====================================================
              BOTTOM ACCENT
          ====================================================== */}

          <div className="mt-8 flex items-center justify-between rounded-2xl border border-primary/10 bg-primary/[0.04] px-5 py-4">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                ✦
              </div>

              <div>
                <p className="text-sm font-semibold text-dark">
                  Need a custom solution?
                </p>

                <p className="mt-0.5 text-xs text-muted">
                  Let&apos;s discuss your project requirements.
                </p>
              </div>
            </div>

            {/* Let's Talk */}

            <button
              type="button"
              onClick={() =>
                handleLinkClick("/contact")
              }
              className="group flex  items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              Let&apos;s Talk

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}