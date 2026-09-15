"use client";

import { contactData } from "@/config/contactData ";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const iconMap = {
  phone: Phone,
  email: Mail,
  whatsapp: MessageCircle,
  location: MapPin,
};

export default function ContactInfo({
  items = contactData.contactInfo,
  title = "We'd love to hear from you.",
  description = "Have a question, project idea, or need help choosing the right service? Reach out to our team.",
  className = "",
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Get In Touch
          </span>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h3>

          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          {items.map((item, index) => {
            const Icon = iconMap[item.type] || MessageCircle;

            return (
              <a
                key={`${item.type}-${index}`}
                href={getContactHref(item)}
                target={item.type === "location" ? "_blank" : undefined}
                rel={item.type === "location" ? "noreferrer" : undefined}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-[0_14px_35px_rgba(15,23,42,0.08)]"
              >
                {/* Hover Accent */}
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1 -translate-x-full rounded-full bg-primary transition-transform duration-300 group-hover:translate-x-0" />

                {/* Icon */}
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>

                {/* Content */}
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </span>

                  <span className="mt-1 block truncate text-sm font-semibold text-foreground">
                    {item.value}
                  </span>

                  {item.description && (
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  )}
                </span>

                {/* Arrow */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-muted-foreground transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </div>

        {/* Response Time */}
        {contactData.responseTime && (
          <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3">
            <p className="text-xs leading-5 text-muted-foreground">
              <span className="font-semibold text-primary">
                Quick response:
              </span>{" "}
              {contactData.responseTime}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   CONTACT ACTION URL
========================================================= */

function getContactHref(item) {
  if (item.href) {
    return item.href;
  }

  switch (item.type) {
    case "phone":
      return `tel:${item.value.replace(/\s+/g, "")}`;

    case "email":
      return `mailto:${item.value}`;

    case "whatsapp": {
      const number = item.value.replace(/\D/g, "");
      return `https://wa.me/${number}`;
    }

    case "location":
      return item.mapUrl || "#";

    default:
      return "#";
  }
}