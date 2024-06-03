import {Movie} from "../../models/model.ts";
import goldStar from "../../assets/gold-star.svg";
import grayStar from "../../assets/gray-star.svg";

import "./movieItem.css"

interface MovieItemProps {
    movie: Movie;
    onClick: () => void;
}

function MovieItem ({ movie, onClick } : MovieItemProps) {
    return (
        <div className="movie-item" onClick={onClick}>
            <h2>
                {movie.title}
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
