import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#fdf8f2] min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-display text-6xl md:text-8xl font-bold text-[#1a120a] mb-4">
          404
        </h1>
        <h2 className="font-display text-xl md:text-2xl font-normal text-[#1a120a]/80 mb-4">
          This page doesn&apos;t exist
        </h2>
        <p className="font-sans text-sm text-[#1a120a]/60 mb-8 leading-relaxed">
          The page you&apos;re looking for may have been moved or doesn&apos;t
          exist. Let us help you find your way.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #0f6e5c 0%, #1a8f78 100%)",
            }}
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-[#1a120a]/15 text-[#1a120a] hover:border-[#D4A017]/30 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
