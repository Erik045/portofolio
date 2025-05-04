// app/layout.tsx
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Erik Dev Solutions | Fullstack Developer",
  description:
    "Premium web development services crafted with modern stack and elegant design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-tr from-[#020617] via-[#0a0f1c] to-[#111827] text-gray-100 antialiased selection:bg-sky-500 selection:text-white`}
      >
        {/* Background Glow Layer */}
        <div className="fixed inset-0 -z-10 bg-noise opacity-[0.04]" />

        {/* Optional Gradient Accent */}
        <div className="pointer-events-none fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-sky-500/10 to-transparent z-0" />

        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
