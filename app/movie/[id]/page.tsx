import { fetchMovieById } from "@/lib/tmdb";
import Image from "next/image";

export default async function MoviePage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const movie = await fetchMovieById(id);

  return (
    <div className="pb-10">
      <div className="relative w-full h-[60vh] rounded-xl overflow-hidden mb-10">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
      </div>

      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

      <p className="text-lg text-neutral-300 leading-relaxed mb-6">
        {movie.overview}
      </p>

      <div className="flex gap-4 text-sm text-neutral-400">
        <span>{movie.release_date}</span>
        <span>{movie.vote_average}</span>
        <span>{movie.runtime} min</span>
      </div>
    </div>
  );
}