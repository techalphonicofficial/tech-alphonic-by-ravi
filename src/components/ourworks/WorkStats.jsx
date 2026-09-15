"use client";

export default function WorkStats({ stats }) {
  return (
    <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

      <div className="mx-auto max-w-[1500px]">

        <div className="grid overflow-hidden rounded-[30px] border border-[#111827]/8 bg-white sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative p-8 sm:p-10 lg:p-12 ${
                index !== stats.length - 1
                  ? "border-b border-[#111827]/8 sm:border-r lg:border-b-0"
                  : ""
              }`}
            >

              <span className="text-4xl font-black tracking-tight text-[#111827] transition-colors duration-300 group-hover:text-[#53AFBE] sm:text-5xl">
                {stat.value}
              </span>

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#9CA3AF]">
                {stat.label}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#53AFBE] transition-all duration-500 group-hover:w-full" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}