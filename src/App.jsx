import { useState, useCallback, useEffect } from "react";
import { MovieList } from "./components/index";
import { Input } from "@nextui-org/react";
import data from "../data.json";
import { uniqueID } from "../helper/uniqueid";

// const initialState = () => {
//   const movies = localStorage.getItem("moviesList");

//   if (!movies) {
//     localStorage.setItem("moviesList", JSON.stringify(data));
//   }

//   return movies;
// };

const initialState = () => {
  const storedMovies = localStorage.getItem("moviesList");

  return storedMovies ? JSON.parse(storedMovies) : data;
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState(initialState);

  const handleSearchTerm = useCallback(
    (value) => {
      setSearchTerm(value);
    },
    [searchTerm]
  );

  useEffect(() => {
    localStorage.setItem("moviesList", JSON.stringify(movies));
  }, [movies]);

  const handleFilterMovies = () => {
    // const moviesParse = JSON.parse(movies);

    if (!searchTerm) {
      return movies;
    } else {
      return movies.filter((movie) => {
        return movie.Title.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  };

  const onAddMovie = (title, description, category) => {
    const newMovie = {
      Id: uniqueID(),
      Title: title,
      Description: description,
      Category: category,
    };

    const previousMoviesList = JSON.parse(localStorage.getItem("moviesList"));
    const newMovieList = [...previousMoviesList, newMovie];
    setMovies(newMovieList);
  };

  const onDeleteMovie = (id) => {
    const deleteMovie = movies.filter((movie) => movie.Id !== id);

    setMovies(deleteMovie);
  };

  return (
    <>
      <h1>Memo Movie App</h1>
      <Input
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => handleSearchTerm(e.target.value)}
      />
      <MovieList
        movies={handleFilterMovies()}
        onAddMovie={onAddMovie}
        onDeleteMovie={onDeleteMovie}
      />
    </>
  );
}

export default App;
