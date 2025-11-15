"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-primary tracking-wide">
        Streamio
      </Link>

      <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
        <Link href="/">Home</Link>
        <Link href="/">Movies</Link>
        <Link href="/">TV Shows</Link>
      </nav>

      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        <Menu size={26} />
      </button>

      {open && (
        <nav className="absolute top-full right-6 mt-3 bg-surface border border-zinc-800 rounded-lg p-4 flex flex-col gap-3 md:hidden">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            Movies
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            TV Shows
          </Link>
        </nav>
      )}
    </header>
  );
}