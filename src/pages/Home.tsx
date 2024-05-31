import { useState, useEffect } from 'react';
import axios from 'axios';
import {Movie} from "../models/model.ts";
import MovieItem from "../components/movieItem/MovieItem.tsx";


function HomePage() {
    const [apiKey, setApiKey] = useState<string | null>(null);
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/keys')
            .then(response => {
                console.log('API Key Response:', response.data);
                setApiKey(response.data.data); // Note the change here
            })
            .catch(error => {
                console.error('Error fetching API key:', error);
            });
    }, []);

    useEffect(() => {
        if (apiKey) {
            axios.get(`http://localhost:8080/api/movies?key=${apiKey}`)
                .then(response => {
                    console.log('Movies Response:', response.data);
                    setMovies(response.data.data); // Note the change here
                })
                .catch(error => {
                    console.error('Error fetching movies:', error);
                });
        }
    }, [apiKey]);

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
