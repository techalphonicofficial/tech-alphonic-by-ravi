"use client";

import Link from "next/link";
import { useState } from "react";
import {
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function MobileMenu({
  navigation = [],
  open,
  onClose,
}) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = (label) => {
    setExpandedMenu((current) =>
      current === label ? null : label
    );
  };

  const handleLinkClick = () => {
    setExpandedMenu(null);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-dark/40 backdrop-blur-sm transition-all duration-300 xl:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[110] flex h-dvh w-[min(92vw,430px)] flex-col overflow-hidden border-l border-primary/15 bg-white/95 shadow-2xl shadow-dark/20 backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-24 top-1/3 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-dark/10 px-5 py-4">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center gap-2.5"
          >
                                  <img className="h-12" src="logo.png" alt="Tech Alphonic Logo" />

          </Link>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-dark/10 bg-white text-dark shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary active:scale-95"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="relative flex-1 overflow-y-auto px-4 py-5">
          <div className="mb-4 px-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Navigation
            </p>

            <p className="mt-1 text-sm text-muted">
              Explore our services and solutions.
            </p>
          </div>

          <nav className="space-y-2">
            {navigation.map((item, index) => {
              const hasChildren =
                Array.isArray(item.children) &&
                item.children.length > 0;

              const isExpanded =
                expandedMenu === item.label;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    onClick={handleLinkClick}
                    className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 text-sm font-semibold text-text transition-all duration-300 hover:border-primary/10 hover:bg-primary/5 hover:text-primary"
                  >
                    <span>{item.label}</span>

                    <ArrowRight
                      size={16}
                      className="translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isExpanded
                      ? "border-primary/15 bg-primary/[0.035] shadow-sm"
                      : "border-transparent"
                  }`}
                >
                  {/* Main Accordion Button */}
                  <button
                    type="button"
                    onClick={() => toggleMenu(item.label)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-semibold transition-all duration-300 ${
                      isExpanded
                        ? "text-primary"
                        : "text-text hover:bg-primary/5 hover:text-primary"
                    }`}
                    aria-expanded={isExpanded}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          isExpanded
                            ? "scale-100 bg-primary shadow-sm shadow-primary/50"
                            : "scale-75 bg-dark/20"
                        }`}
                      />

                      {item.label}
                    </span>

                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`grid transition-all duration-400 ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="space-y-5 px-3 pb-4 pt-1">
                        {item.children.map(
                          (column, columnIndex) => (
                            <div
                              key={`${column.title}-${columnIndex}`}
                            >
                              {/* Column Heading */}
                              <div className="mb-2.5 flex items-center gap-2 px-2">
                                <span className="h-4 w-[3px] rounded-full bg-primary" />

                                <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                                  {column.title}
                                </h3>
                              </div>

                              {/* Links */}
                              <div className="space-y-0.5">
                                {column.items?.map(
                                  (link, linkIndex) => (
                                    <Link
                                      key={`${link.href}-${linkIndex}`}
                                      href={link.href}
                                      onClick={handleLinkClick}
                                      className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-medium text-text transition-all duration-200 hover:bg-white hover:text-primary hover:shadow-sm"
                                    >
                                      <span>
                                        {link.label}
                                      </span>

                                      <ArrowRight
                                        size={13}
                                        className="translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                                      />
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTA Area */}
        <div className="relative border-t border-dark/10 bg-white/80 p-4 backdrop-blur-xl">
          <div className="mb-3 flex items-center gap-3 rounded-2xl border border-dark/10 bg-background px-4 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-dark text-white shadow-md">
              <Sparkles size={16} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold text-dark">
                Need something custom?
              </p>

              <p className="mt-0.5 truncate text-[11px] text-muted">
                Let's build it together.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 active:translate-y-0"
          >
            Get a Free Proposal

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </aside>
    </>
  );
}