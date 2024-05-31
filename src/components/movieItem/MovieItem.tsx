import './movieItem.css'
import { Link } from 'react-router-dom';

interface MovieItemProps {
    imdbid: string;
    title: string;
    poster: string;
    isLoggedIn: boolean;
}

function MovieItem ({ imdbid, title, poster, isLoggedIn }: MovieItemProps) {
    return (
        <div className="movie">
            <img src={poster} alt={title} />
            <h2>{title}</h2>
            {isLoggedIn ? (
                <Link to={`/movies/${imdbid}`}>View Details</Link>
            ) : (
                <p>Login to view details</p>
            )}
        </div>
    );
}

export default MovieItem;