import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { useEffect } from 'react';
import axios from 'axios';
import { useStore } from './store/store.ts';
import HomePage from "./pages/home-page/HomePage.tsx";
import MoviePage from "./pages/movie-page/MoviePage.tsx";
import LoginPage from "./pages/login-page/LoginPage.tsx";
import RegisterPage from "./pages/register-page/RegisterPage.tsx";
import UserPage from "./pages/user-page/UserPage.tsx";

function App() {
    const { setMovies, apiKey, setApiKey } = useStore();

    useEffect(() => {
        axios.get('http://localhost:8080/api/keys')
            .then(response => {
                console.log('API Key Response:', response.data);
                setApiKey(response.data.data);
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
                    setMovies(response.data.data);
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
                <Route path="/" element={<HomePage />} />
                <Route path="/movie/:imdbid" element={<MoviePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<UserPage />} />
            </Routes>
        </div>
    );
}

export default App;
