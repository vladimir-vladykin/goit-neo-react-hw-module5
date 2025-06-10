import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
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

  const location = useLocation();
  const backLinkHref = location.state ?? "/movies";

  return (
    <div>
      <Link to={backLinkHref}>← Back</Link>
      <p>Details of movie {movieId}</p>
      {movie !== null && <p>{movie.title}</p>}
    </div>
  );
};

export default MovieDetailsPage;
