import MovieItem from "../components/movieItem/MovieItem.tsx";

import "./homePage.css"
import {useStore} from "../store/store.ts";


function HomePage () {
    const { movies } = useStore();

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
