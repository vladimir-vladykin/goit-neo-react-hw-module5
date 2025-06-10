import { useEffect, useRef, useState } from "react";
import { searchMovies } from "../../api/MoviesApi";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const searchQuery = searchParams.get("query");

  useEffect(() => {
    async function fetch() {
      try {
        const movies = await searchMovies(searchQuery);
        setMovies(movies);
      } catch {
        console.log("Cannot perorm movies search");
      }
    }

    if (searchQuery !== null && searchQuery !== "") {
      fetch();
    }
  }, [searchQuery]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const query = event.target.elements.search.value;
    if (query === "") {
      return;
    }

    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("query", query);

    setSearchParams(updatedSearchParams);
  };

  // prefill input with search param, if exists
  const searchInputRef = useRef();
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.value = searchQuery || "";
    }
  }, [searchQuery]);

  return (
    <div style={{ padding: "16px" }}>
      <form onSubmit={handleFormSubmit}>
        <input
          ref={searchInputRef}
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
