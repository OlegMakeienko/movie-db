import {Movie} from "../models/model.ts";
import MovieItem from "../components/movieItem/MovieItem.tsx";

import "./homePage.css"

interface HomePageProps {
    movies: Movie[];
}

function HomePage ({ movies } : HomePageProps) {
    return (
        <div className="home-page">
            <h1>Movie List</h1>
            <div className="movie-list">
                {movies.map(movie => (
                    <MovieItem key={movie.imdbid} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
