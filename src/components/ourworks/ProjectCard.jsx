"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function ProjectCard({
  project,
  index,
  activeProject,
  setActiveProject,
}) {
  const isActive = activeProject === project.id;

  return (
    <article
      onMouseEnter={() => setActiveProject(project.id)}
      onMouseLeave={() => setActiveProject(null)}
      className="group relative overflow-hidden rounded-[30px] border border-[#111827]/8 bg-[#F8FAFC] transition-all duration-700 hover:border-[#53AFBE]/20 hover:shadow-[0_30px_80px_rgba(17,24,39,0.10)]"
    >
      <div
        className={`grid min-h-[520px] ${
          index % 2 === 0
            ? "lg:grid-cols-[1.15fr_0.85fr]"
            : "lg:grid-cols-[0.85fr_1.15fr]"
        }`}
      >

        {/* IMAGE */}

        <div
          className={`relative min-h-[330px] overflow-hidden ${
            index % 2 !== 0 ? "lg:order-2" : ""
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ${
              isActive ? "scale-110" : "scale-100"
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 via-transparent to-transparent" />

          {/* Number */}

          <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 text-sm font-bold text-white backdrop-blur-xl">
            {project.number}
          </div>

          {/* Category */}

          <span className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl">
            {project.category}
          </span>

          {/* Floating Arrow */}

          <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#111827] shadow-xl transition-all duration-500 group-hover:rotate-45">
            <ArrowUpRight size={19} />
          </div>
        </div>

        {/* CONTENT */}

        <div
          className={`flex flex-col justify-between p-7 sm:p-10 lg:p-12 ${
            index % 2 !== 0 ? "lg:order-1" : ""
          }`}
        >

          <div>

            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">
                {project.category}
              </span>

              <span className="text-xs font-semibold text-[#53AFBE]">
                {project.result}
              </span>
            </div>

            <h3 className="mt-7 text-3xl font-black tracking-tight text-[#111827] sm:text-4xl">
              {project.title}
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#6B7280] sm:text-base">
              {project.description}
            </p>

            {/* Technologies */}

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#111827]/8 bg-white px-3 py-1.5 text-[10px] font-semibold text-[#6B7280]"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Bottom */}

          <div className="mt-10 flex items-center justify-between border-t border-[#111827]/8 pt-6">

            <span className="text-xs font-semibold text-[#9CA3AF]">
              Case Study
            </span>

            <Link
              href={project.href}
              className="group/link inline-flex items-center gap-2 text-sm font-bold text-[#111827] transition-colors hover:text-[#53AFBE]"
            >
              View Project

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] text-white transition-all duration-300 group-hover/link:rotate-45 group-hover/link:bg-[#53AFBE]">
                <ArrowRight size={14} />
              </span>
            </Link>

          </div>

        </div>
      </div>
    </article>
  );
}