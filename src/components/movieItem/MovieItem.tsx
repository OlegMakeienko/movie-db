import { Link } from 'react-router-dom';
import {Movie} from "../../models/model.ts";
import goldStar from "../../assets/gold-star.svg";
import grayStar from "../../assets/gray-star.svg";

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
            <div className="icon">
                <img
                    src={movie.is_favorite ? goldStar : grayStar}
                    alt="Favorite Icon"
                />
            </div>
        </div>
    );
}

export default MovieItem;
