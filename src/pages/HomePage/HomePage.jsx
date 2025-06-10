import React, { useEffect, useState } from "react";
import { loadTrendingMovies } from "../../api/MoviesApi";
import { Link } from "react-router-dom";

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
  });

  return (
    <div>
      <h1>Trending today</h1>

      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <p>{movie.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
