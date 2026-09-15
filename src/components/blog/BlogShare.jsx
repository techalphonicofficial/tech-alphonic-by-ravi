"use client";

import { useState } from "react";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { FiLink, FiCheck } from "react-icons/fi";

export default function BlogShare({ title }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
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

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title || "");

  return (
    <section className="bg-white px-5 pb-16 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[760px] flex-col gap-6 border-t border-[#111827]/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#111827]">
            Enjoyed this article?
          </p>

          <p className="mt-1 text-xs text-[#9CA3AF]">
            Share this insight with your network.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {/* LinkedIn */}
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111827]/8 bg-[#F8FAFC] text-[#6B7280] transition-all duration-300 hover:-translate-y-1 hover:bg-[#111827] hover:text-white"
          >
            <FaLinkedinIn size={15} />
          </a>

          {/* X */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111827]/8 bg-[#F8FAFC] text-[#6B7280] transition-all duration-300 hover:-translate-y-1 hover:bg-[#111827] hover:text-white"
          >
            <FaXTwitter size={15} />
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111827]/8 bg-[#F8FAFC] text-[#6B7280] transition-all duration-300 hover:-translate-y-1 hover:bg-[#53AFBE] hover:text-white"
          >
            <FaWhatsapp size={16} />
          </a>

          {/* Copy Link */}
          <button
            type="button"
            onClick={copyLink}
            aria-label="Copy article link"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111827]/8 bg-[#F8FAFC] text-[#6B7280] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FE5C36] hover:text-white"
          >
            {copied ? (
              <FiCheck size={16} />
            ) : (
              <FiLink size={16} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}