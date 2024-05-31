// MoviePage.tsx
import { useParams } from 'react-router-dom';
import {Movie} from "../../models/model.ts";

interface MoviePageProps {
    movies: Movie[];
}

const MoviePage: React.FC<MoviePageProps> = ({ movies }) => {
    const { imdbid } = useParams<{ imdbid: string }>();
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
