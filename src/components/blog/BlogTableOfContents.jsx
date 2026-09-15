"use client";

import { List } from "lucide-react";

export default function BlogTableOfContents({ toc = [] }) {
  return (
    <aside className="hidden lg:block">

      <div className="sticky top-28">

        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#111827]">
          <List size={15} className="text-[#53AFBE]" />
          In this article
        </div>

        <div className="mt-5 border-l border-[#111827]/10">

          {toc.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative block border-l-2 border-transparent px-4 py-2.5 text-xs leading-5 text-[#9CA3AF] transition-all duration-300 hover:border-[#53AFBE] hover:text-[#111827]"
            >
              <span className="mr-2 text-[9px] text-[#53AFBE]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {item.label}
            </a>
          ))}

        </div>

      </div>

    </aside>
  );
}