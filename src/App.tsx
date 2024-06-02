import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { useEffect } from 'react';
import axios from 'axios';
import HomePage from "./pages/HomePage.tsx";
import MoviePage from "./pages/movie/MoviePage.tsx";
import { useStore } from './store/store.ts';

function App() {
    const { movies, setMovies, apiKey, setApiKey } = useStore();


    useEffect(() => {
        axios.get('http://localhost:8080/api/keys')
            .then(response => {
                console.log('API Key Response:', response.data);
                setApiKey(response.data.data); // Note the change here
            })
            .catch(error => {
                console.error('Error fetching API key:', error);
            });
    }, [setApiKey]);

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
    }, [apiKey, setMovies]);

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage movies={movies} />} />
                <Route path="/movie/:imdbid" element={<MoviePage movies={movies} />} />
            </Routes>
        </div>
    );
}

export default App;
