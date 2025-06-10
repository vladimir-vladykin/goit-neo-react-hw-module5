import { useEffect, useState } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { loadMovieDetails } from "../../api/MoviesApi";
import styles from "./MovieDetailsPage.module.css";
import formatImageUrl from "../../api/ImageHelper";

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
    <div style={{ padding: "16px" }}>
      <Link to={backLinkHref}>← Back</Link>

      {movie != null && (
        <>
          <div className={styles.details}>
            <img
              width="200"
              height="300"
              src={formatImageUrl(movie.poster_path)}
              alt="Moview poster"
            />

            <div className={styles.info_layout}>
              <h2>{movie.title}</h2>
              <p>User score: {Math.round(movie.vote_average * 10)}%</p>

              <h3>Overview</h3>
              <p>{movie.overview}</p>

              <h3>Genres</h3>
              <div className={styles.genres}>
                {movie.genres.map((genre) => {
                  return <p key={genre.id}>{genre.name}</p>;
                })}
              </div>
            </div>
          </div>
        </>
      )}

      <div className={styles.divider}></div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <div className={styles.divider}></div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
