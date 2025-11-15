"use client";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="min-w-[150px] md:min-w-[180px] bg-surface rounded-lg overflow-hidden group cursor-pointer border border-zinc-800 hover:border-zinc-600 transition"
    >
      <div className="relative w-full h-[220px] md:h-[260px]">
        <Image
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <p className="p-2 text-sm text-zinc-300 group-hover:text-white line-clamp-1">
        {movie.title}
      </p>
    </Link>
  );
}