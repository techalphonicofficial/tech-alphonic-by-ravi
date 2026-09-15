"use client";

export default function BlogAuthor({ author }) {
  return (
    <section className="bg-white px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">

      <div className="mx-auto max-w-[760px]">

        <div className="rounded-[26px] border border-[#111827]/8 bg-[#F8FAFC] p-6 sm:p-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#111827] text-sm font-black text-white shadow-lg">
              {author.avatar}
            </div>

            <div>

              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#53AFBE]">
                Written by
              </p>

              <h3 className="mt-1 text-lg font-black text-[#111827]">
                {author.name}
              </h3>

              <p className="mt-1 text-xs font-medium text-[#9CA3AF]">
                {author.role}
              </p>

            </div>

          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#6B7280]">
            {author.bio}
          </p>

        </div>

      </div>

    </section>
  );
}