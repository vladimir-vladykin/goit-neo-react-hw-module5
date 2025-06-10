import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadCast } from "../../api/MoviesApi";
import { formatCastImageUrl } from "../../api/ImageHelper";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const cast = await loadCast(movieId);
        setCast(cast);
      } catch {
        console.log("Cannot load cast information");
      }
    }

    fetch();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.length === 0 && (
          <p>We don't have cast information for this movie.</p>
        )}
        {cast.map((castItem) => {
          return (
            <li key={castItem.id}>
              <p>{castItem.name}</p>
              <p>Character: {castItem.character}</p>
              <img
                width="100"
                height="200"
                src={formatCastImageUrl(castItem.profile_path)}
                alt="Actor image"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
