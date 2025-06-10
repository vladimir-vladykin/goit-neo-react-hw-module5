import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadMovieDetails } from "../../api/MoviesApi";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const movie = await loadMovieDetails(movieId);
        setMovie(movie);
      } catch {
        console.log("Cannot load movie details");
      }
    }

    fetch();
  }, [movieId]);

  return (
    <div>
      <p>Details of movie {movieId}</p>
      {movie !== null && <p>{movie.title}</p>}
    </div>
  );
};

export default MovieDetailsPage;
