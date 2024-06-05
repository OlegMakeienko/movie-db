import { useStore } from "../../store/store.ts";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import goldStar from "../../assets/gold-star.svg";
import grayStar from "../../assets/gray-star.svg";
import basket from "../../assets/korg.png"

import "./userPage.css"

function UserPage() {
    const { user, movies, addMovie, deleteMovie, setUser, apiKey, toggleFavorite } = useStore();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [trailerLink, setTrailerLink] = useState('');

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

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
            <div className="user-container">
                <div className='container'>
                    <label className='label'>Username:</label>
                    <input className='input' type='text' value={user.username} readOnly/>
                </div>
                <button type="submit" onClick={handleLogout}>Logout</button>

                <h2>Add Movie</h2>
                <div className="container">
                    <label className="label">Title:</label>
                    <input className='input' type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="container">
                    <label className="label">Poster:</label>
                    <input className='input' type="text" value={poster} onChange={(e) => setPoster(e.target.value)}/>
                </div>
                <div className="container">
                    <label className="label">Trailer Link:</label>
                    <input className='input' type="text" value={trailerLink}
                           onChange={(e) => setTrailerLink(e.target.value)}/>
                </div>
                <button type="submit" onClick={handleAddMovie}>Add Movie</button>
            </div>

            <h2>Movies</h2>
            <div className='movie-list'>
                {movies.map((movie) => (
                    <div key={movie.imdbid} className='movie-item'>
                        <Link to={`/movie/${movie.imdbid}`}>
                            <h2>{movie.title}</h2>
                        </Link>
                        <div className='movie-content'>
                            <img src={movie.poster} alt={movie.title} className='movie-poster'/>
                            <div className='icon-container'>
                                <div className='icon' onClick={() => toggleFavorite(movie.imdbid)}>
                                    <img src={movie.is_favorite ? goldStar : grayStar} alt='Favorite Icon'/>
                                </div>
                                <div className='icon' onClick={() => handleDeleteMovie(movie.imdbid)}>
                                    <img src={basket} alt='Delete Movie'/>
                                </div>
                            </div>
                        </div>
                        <div className='trailer-container'>
                            <iframe src={movie.trailer_link} title={movie.title} allowFullScreen/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserPage;
