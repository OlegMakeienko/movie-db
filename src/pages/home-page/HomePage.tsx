import MovieItem from "../../components/movieItem/MovieItem.tsx";
import { useStore } from "../../store/store.ts";
import { useNavigate } from 'react-router-dom';

import "./homePage.css"

function HomePage () {
    const { movies, isLoggedIn } = useStore();
    const navigate = useNavigate();

    const handleMovieClick = (imdbid: string) => {
        if (isLoggedIn) {
            navigate(`/movie/${imdbid}`);
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="home-page">
            <h1>Movie List</h1>
            <div className="movie-list">
                {movies.map(movie => (
                    <MovieItem key={movie.imdbid} movie={movie} onClick={() => handleMovieClick(movie.imdbid)} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
