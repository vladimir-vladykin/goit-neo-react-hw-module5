import { useEffect, useState } from "react";
import { loadTrendingMovies } from "../../api/MoviesApi";

import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const movies = await loadTrendingMovies();
        setMovies(movies);
      } catch {
        console.log("Cannot load trending movies");
      }
    }

    fetch();
  }, []);

  return (
    <div style={{ padding: "16px" }}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
