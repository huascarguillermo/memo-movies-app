import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Movie } from "../index";

function MovieList({ movies, onAddMovie, onDeleteMovie }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [selectCategories, setSelectCategories] = useState("");

  const categories = [
    { label: "Romance", value: "romance" },
    { label: "Mecha", value: "mecha" },
    { label: "Sci-Fi", value: "sci-fi" },
    { label: "Historical", value: "historical" },
    { label: "Action", value: "action" },
    { label: "Slice of Life", value: "slice of life" },
    { label: "Fantasy", value: "fantasy" },
  ];

  const handleSelectedCategory = (e) => {
    setSelectCategories(e.target.value);
  };

  const handleOpen = () => {
    setMovieTitle("");
    setMovieDescription("");
    setSelectCategories("");
    onOpen();
  };

  const handleOnAddMovie = () => {
    onAddMovie(movieTitle, movieDescription, selectCategories);
    onClose();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="flat"
          color="warning"
          onClick={handleOpen}
          className="capitalize"
        >
          Add Movie
        </Button>
      </div>
      <section>
        {movies.map((movie) => (
          <Movie key={movie.Id} movie={movie} onDeleteMovie={onDeleteMovie} />
        ))}
      </section>

      <Modal placement="top" backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                🎬 Add your favorite movie 🎥
              </ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input
                    type="text"
                    label="Movie Title"
                    value={movieTitle}
                    onChange={(e) => setMovieTitle(e.target.value)}
                  />
                  <Textarea
                    label="Description"
                    placeholder="Enter your description"
                    value={movieDescription}
                    onChange={(e) => setMovieDescription(e.target.value)}
                  />
                  <Select
                    label="Select a category"
                    className="max-w-xs"
                    selectedKeys={[selectCategories]}
                    onChange={handleSelectedCategory}
                  >
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleOnAddMovie}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default MovieList;
