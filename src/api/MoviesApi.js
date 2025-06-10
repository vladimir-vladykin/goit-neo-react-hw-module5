import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const BASE_OPTIONS = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzEzNTk1MzhmZGNlZDgxYTZkNzYwN2RlMDRlMzc5MCIsIm5iZiI6MTc0OTUzMTQ0My42MzgsInN1YiI6IjY4NDdiYjMzZjA0YWFhZmI3ODNmY2RmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jHWcvPOOjA-fedDFE0gOZK3evxLT2Wisdt9cePO32wU",
  },
};

export async function loadTrendingMovies() {
  const url = `${BASE_URL}/trending/movie/day?language=en-US`;
  const response = await axios.get(url, BASE_OPTIONS);
  return response.data.results;
}

export async function loadMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?language=en-US`;
  const response = await axios.get(url, BASE_OPTIONS);
  return response.data;
}

export async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&query=${query}`;
  const response = await axios.get(url, BASE_OPTIONS);
  return response.data.results;
}
