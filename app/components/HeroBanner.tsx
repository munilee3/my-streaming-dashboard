import Image from "next/image";
import { Movie } from "@/types/movie";

export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] rounded-xl overflow-hidden shadow-xl">
      <div className="absolute inset-0">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

      <div className="absolute bottom-10 left-8 space-y-4 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          {movie.title}
        </h1>

        <p className="text-zinc-300 hidden md:block line-clamp-3">
          {movie.overview}
        </p>

        <button className="px-6 py-2 bg-primary rounded-lg text-white font-medium hover:bg-primary/80 transition">
          Watch Now
        </button>
      </div>
    </section>
  );
}