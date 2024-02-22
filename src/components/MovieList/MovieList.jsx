import { Movie } from '../index'
import data from '../../../data.json'

function MovieList({ movies, onAddMovie, onDeleteMovie }) {
    return (
        <section>
            {data.map((movie) => (
                <Movie key={movie.Id} movie={movie} />
            ))}
        </section>
    )
}

export default MovieList
