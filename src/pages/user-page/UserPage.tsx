import { useStore } from "../../store/store.ts";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import "./userPage.css"

function UserPage() {
    const { user, movies, addMovie, deleteMovie, setUser, apiKey } = useStore();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [trailerLink, setTrailerLink] = useState('');

    if (!user) {
        navigate('/login');
        return null;
    }

    const handleLogout = () => {
        setUser(null);
        navigate('/login');
    };

    const handleAddMovie = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/api/movies?key=${apiKey}`, {
                title,
                poster,
                trailer_link: trailerLink
            });
            addMovie(response.data.data);
            setTitle('');
            setPoster('');
            setTrailerLink('');
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    const handleDeleteMovie = async (imdbid: string) => {
        try {
            await axios.delete(`http://localhost:8080/api/movies/${imdbid}?key=${apiKey}`);
            deleteMovie(imdbid);
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    };

    return (
        <div className="user-page">
            <h1>My Movie Storage</h1>
            <div>
                <label>Username:</label>
                <input type="text" value={user.username} readOnly />
            </div>
            <button type="submit" onClick={handleLogout}>Logout</button>

            <h2>Add Movie</h2>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Poster:</label>
                <input type="text" value={poster} onChange={(e) => setPoster(e.target.value)} />
            </div>
            <div>
                <label>Trailer Link:</label>
                <input type="text" value={trailerLink} onChange={(e) => setTrailerLink(e.target.value)} />
            </div>
            <button type="submit" onClick={handleAddMovie}>Add Movie</button>

            <h2>Movies</h2>
            <div className="movie-list">
                {movies.map(movie => (
                    <div key={movie.imdbid} className="movie-item">
                        <h2>{movie.title}</h2>
                        <img src={movie.poster} alt={movie.title} />
                        <button type="submit" onClick={() => handleDeleteMovie(movie.imdbid)}>
                            Delete Movie
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserPage;
