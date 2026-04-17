import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-3xl rounded-xl border border-slate-800 bg-slate-900/95 p-10 text-center">
        <p className="text-[120px] font-black leading-none text-slate-100/10 select-none sm:text-[160px]">
          404
        </p>
        <p className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-amber-200">
          Page not found
        </p>
        <h1 className="text-4xl font-black uppercase text-slate-100 sm:text-5xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-sm leading-7 text-slate-400">
          The page may have moved, or the link might be incorrect. Use the links below to continue browsing.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-amber-500 bg-amber-500 px-6 py-3 text-[11px] font-black uppercase tracking-widest text-slate-950 transition hover:bg-transparent hover:text-amber-500"
          >
            Back to Home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-100 transition hover:border-amber-400 hover:text-amber-200"
          >
            View Shop
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-100 transition hover:border-amber-400 hover:text-amber-200"
          >
            About
          </Link>
          <Link
            to="/auth/signin"
            className="inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-100 transition hover:border-amber-400 hover:text-amber-200"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
