import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStore } from "../../store/store.ts";

import "./loginPage.css"

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { setIsLoggedIn, setUser } = useStore();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                username,
                password
            });
            console.log('Login successful:', response.data);
            setIsLoggedIn(true); // Update isLoggedIn state
            setUser({ username, password }); // Update user state
            navigate('/');
        } catch (error : any) {
            console.error('Login error:', error);
            setError(error.response ? error.response.data.message : 'Login failed');
        }
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default LoginPage;
