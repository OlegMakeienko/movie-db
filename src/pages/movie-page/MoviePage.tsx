import { useParams } from 'react-router-dom';
import "./moviePage.css";
import goldStar from "../../assets/gold-star.svg";
import grayStar from "../../assets/gray-star.svg";
import useStore from "../../store/store.ts";

function MoviePage() {
    const { imdbid } = useParams<{ imdbid: string }>();
    const { movies, toggleFavorite, } = useStore();
    const movie = movies.find((movie) => movie.imdbid === imdbid);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    const handleFavoriteClick = () => {
        toggleFavorite(movie.imdbid);
    };

    return (
        <div className="movie-page">
            <h1>{movie.title}</h1>
            <img src={movie.poster} alt={movie.title} />
            <p>IMDB ID: {movie.imdbid}</p>
            <div className="trailer-container">
                <iframe src={movie.trailer_link} title={movie.title} allowFullScreen />
            </div>
            <div className="favorite-icon" onClick={handleFavoriteClick}>
                <img src={movie.is_favorite ? goldStar : grayStar} alt="Favorite Icon" />
            </div>
        </div>
    );
}

export default MoviePage;
