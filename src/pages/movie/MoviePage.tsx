import { useParams } from 'react-router-dom';
import "./moviePage.css";
import {useStore} from "../../store/store.ts";
import goldStar from "../../assets/gold-star.svg";
import grayStar from "../../assets/gray-star.svg";

function MoviePage() {
    const { imdbid } = useParams<{ imdbid: string }>();
    const { movies, toggleFavorite } = useStore();
    const movie = movies.find(movie => movie.imdbid === imdbid);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    const handleFavoriteClick = () => {
        console.log("Favorite icon clicked");
        console.log("Before toggle:", movie.is_favorite);
        toggleFavorite(movie.imdbid);
        console.log("After toggle:", movie.is_favorite);
    };


    return (
        <div className="movie-page">
            <h1>{movie.title}</h1>
            <img src={movie.poster} alt={movie.title}/>
            <p>IMDB ID: {movie.imdbid}</p>
            <a href={movie.trailer_link} target="_blank" rel="noopener noreferrer">
                Watch Trailer
            </a>
            <div className="favorite-icon" onClick={handleFavoriteClick}>
                <img
                    src={movie.is_favorite ? goldStar : grayStar}
                    alt="Favorite Icon"
                />
            </div>
        </div>
    );
}

export default MoviePage;
