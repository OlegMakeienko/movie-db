import { Link } from 'react-router-dom';
import {Movie} from "../../models/model.ts";

import "./movieItem.css"

interface MovieItemProps {
    movie: Movie;
}

function MovieItem ({ movie } : MovieItemProps) {
    return (
        <div className="movie-item">
            <h2>
                <Link to={`/movie/${movie.imdbid}`}>{movie.title}</Link>
            </h2>
            <img src={movie.poster} alt={movie.title} />
            <p>IMDB ID: {movie.imdbid}</p>
            <a href={movie.trailer_link} target="_blank" rel="noopener noreferrer">
                Watch Trailer
            </a>
            <p>Favorite: {movie.is_favorite ? "Yes" : "No"}</p>
        </div>
    );
}

export default MovieItem;
