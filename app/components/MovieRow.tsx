"use client";

import MovieCard from "./MovieCard";
import { Movie } from "@/types/movie";

export default function MovieRow({
  movies,
  categoryTitle
}: {
  movies: Movie[];
  categoryTitle: string;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-wide">
        {categoryTitle}
      </h2>

      <div className="flex overflow-x-auto gap-4 pb-2 scroll-smooth">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}