const BASE = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY || "e7843e5d3e8d4494c916b2626b6cb449";

async function request(url: string) {
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    console.error("TMDB API error:", res.status);
    throw new Error("Failed to fetch from TMDB");
  }

  return res.json();
}

export async function fetchPopular() {
  return request(`${BASE}/movie/popular?api_key=${API_KEY}`);
}

export async function fetchTopRated() {
  return request(`${BASE}/movie/top_rated?api_key=${API_KEY}`);
}

export async function fetchNowPlaying() {
  return request(`${BASE}/movie/now_playing?api_key=${API_KEY}`);
}

export async function fetchMovieById(id: string) {
  return request(`${BASE}/movie/${id}?api_key=${API_KEY}`);
}