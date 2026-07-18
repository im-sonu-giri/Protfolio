import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-display text-clamp-h1 tracking-tightest mb-8">
        Nothing here.
      </h1>
      <p className="text-gray-400 mb-10 max-w-md">
        Either this page moved, or it never existed. Either way, let&apos;s get
        you back somewhere useful.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
