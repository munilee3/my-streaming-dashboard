import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import { fetchPopular, fetchTopRated, fetchNowPlaying } from "@/lib/tmdb";

export default async function HomePage() {
  const popular = await fetchPopular();
  const topRated = await fetchTopRated();
  const nowPlaying = await fetchNowPlaying();

  const heroMovie = popular.results[0];

  return (
    <div className="space-y-10">
      <HeroBanner movie={heroMovie} />

      <MovieRow
        movies={popular.results}
        categoryTitle="Popular Movies"
      />

      <MovieRow
        movies={topRated.results}
        categoryTitle="Top Rated"
      />

      <MovieRow
        movies={nowPlaying.results}
        categoryTitle="Now Playing"
      />
    </div>
  );
}