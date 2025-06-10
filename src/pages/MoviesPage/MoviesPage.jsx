import { useEffect, useState } from "react";
import { searchMovies } from "../../api/MoviesApi";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const movies = await searchMovies(searchQuery);
        setMovies(movies);
      } catch {
        console.log("Cannot perorm movies search");
      }
    }

    if (searchQuery !== "") {
      fetch();
    }
  }, [searchQuery]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const query = event.target.elements.search.value;
    if (query === "") {
      return;
    }

    setSearchQuery(query);
  };

  return (
    <div style={{ padding: "16px" }}>
      <form onSubmit={handleFormSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button type="submit">Search</button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
