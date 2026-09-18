import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-lg">
        <p className="font-heading font-bold text-white/10 text-[120px] leading-none mb-0 select-none">
          404
        </p>
        <h1 className="font-heading font-bold text-white text-display-md -mt-6 mb-5">
          Page Not Found
        </h1>
        <p className="text-white/50 text-body-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-navy-900 rounded-xl font-semibold text-sm hover:bg-surface transition-colors"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white rounded-xl font-semibold text-sm hover:border-white/40 hover:bg-white/6 transition-all"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
