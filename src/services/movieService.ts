import axios from "axios";
import type { Movie } from "../types/movie";

const myKey = import.meta.env.VITE_TMDB_TOKEN;
axios.defaults.baseURL = "https://api.themoviedb.org/3/search/movie";

interface MoviesHttpRequest {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const params = {
    query,
  };

  const headers = {
    Authorization: `Bearer ${myKey}`,
  };
  const response = await axios.get<MoviesHttpRequest>("", { params, headers });
  return response.data.results;
}
