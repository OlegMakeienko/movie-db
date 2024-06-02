import { useParams } from 'react-router-dom';
import "./moviePage.css"
import {useStore} from "../../store/store.ts";

function MoviePage() {
    const { imdbid } = useParams<{ imdbid: string }>();
    const { movies } = useStore();
    const movie = movies.find(movie => movie.imdbid === imdbid);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="movie-page">
            <h1>{movie.title}</h1>
            <img src={movie.poster} alt={movie.title} />
            <p>IMDB ID: {movie.imdbid}</p>
            <a href={movie.trailer_link} target="_blank" rel="noopener noreferrer">
                Watch Trailer
            </a>
            <p>Favorite: {movie.is_favorite ? "Yes" : "No"}</p>
        </div>
    );
};

export default MoviePage;