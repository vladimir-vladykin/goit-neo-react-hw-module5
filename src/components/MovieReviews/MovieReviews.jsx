import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadReviews } from "../../api/MoviesApi";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setRewiews] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const reviews = await loadReviews(movieId);
        setRewiews(reviews);
      } catch {
        console.log("Cannot load reviews information");
      }
    }

    fetch();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieReviews;
