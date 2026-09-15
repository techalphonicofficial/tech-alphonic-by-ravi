"use client";

import { Sparkles } from "lucide-react";
import { contactData } from "@/config/contactData ";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo"

export default function ContactSection({
  title,
  description,
  showInfo = false,
  showBadge = true,
  className = "",
  formProps = {},
  infoProps = {},
}) {
  const sectionTitle = title || contactData.title;
  const sectionDescription = description || contactData.description;

  return (
    <section
      className={`relative overflow-hidden bg-background px-5 py-20 sm:px-8 lg:px-12 lg:py-28 ${className}`}
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cta/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/5 blur-3xl" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

     

        {/* ===================================================
            CONTACT CONTENT
        ==================================================== */}

        <div
          className={`grid gap-7 lg:items-stretch ${
            showInfo
              ? "lg:grid-cols-[0.85fr_1.15fr]"
              : "mx-auto max-w-3xl"
          }`}
        >
          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

          {showInfo && (
            <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/65 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 sm:p-8">
              {/* Card Glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-700 group-hover:bg-primary/15" />

              <div className="relative h-full">
                <ContactInfo {...infoProps} />
              </div>
            </div>
          )}

          {/* =================================================
              CONTACT FORM
          ================================================== */}

          <ContactForm {...formProps} />
        </div>

        {/* ===================================================
            BOTTOM TRUST MESSAGE
        ==================================================== */}

        {contactData.bottomMessage && (
          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-xs leading-6 text-muted-foreground sm:text-sm">
              {contactData.bottomMessage}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}