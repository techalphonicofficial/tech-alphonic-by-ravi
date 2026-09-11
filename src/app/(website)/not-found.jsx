import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100svh-110px)] items-center justify-center bg-background px-5 py-20">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-secondary/15 text-secondary shadow-sm">
          <SearchX size={38} strokeWidth={1.8} />
        </div>

        <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-primary">
          Page Not Found
        </p>

        <h1 className="mt-3 text-5xl font-black tracking-[-0.04em] text-dark sm:text-6xl">
          404
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="btn-premium mt-8 inline-flex rounded-full bg-dark px-6 py-3.5 text-sm font-bold text-white"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}