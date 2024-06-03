import { useStore } from "../../store/store.ts";
import { useNavigate } from 'react-router-dom';

import "./userPage.css"

function UserPage() {
    const { user, movies, toggleFavorite, setUser, setMovies, setIsLoggedIn } = useStore();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    const handleLogout = () => {
        setUser(null);
        setIsLoggedIn(false);
        navigate('/login');
        const updatedMovies = movies.map(movie => ({ ...movie, is_favorite: false }));
        setMovies(updatedMovies);
    };

    return (
        <div className="user-page">
            <h1>User Profile</h1>
            <div>
                <label>Username:</label>
                <input type="text" value={user.username} readOnly />
            </div>
            <button onClick={handleLogout}>Logout</button>

            <h2>Favorite Movies</h2>
            <div className="movie-list">
                {movies.filter(movie => movie.is_favorite).map(movie => (
                    <div key={movie.imdbid} className="movie-item">
                        <h2>{movie.title}</h2>
                        <img src={movie.poster} alt={movie.title} />
                        <button onClick={() => toggleFavorite(movie.imdbid)}>
                            Unfavorite
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserPage;
