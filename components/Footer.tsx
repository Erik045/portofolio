"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] text-gray-500 px-6 sm:px-10 md:px-20 pt-6 pb-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs sm:text-sm">
          © {new Date().getFullYear()} Erik Dev Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
