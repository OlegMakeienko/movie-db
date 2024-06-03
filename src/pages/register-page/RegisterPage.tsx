import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "./registerPage.css"

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', {
                username,
                password
            });
            console.log('Registration successful:', response.data);
            navigate('/login');
        } catch (error : any) {
            console.error('Registration error:', error);
            setError(error.response ? error.response.data.message : 'Registration failed');
        }
    };

    return (
        <div className="register-page">
            <h1>Register</h1>
                <form onSubmit={ handleRegister }>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={ username }
                            onChange={ (e) => setUsername(e.target.value) }
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) }
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
                {error && <div className="error">{error}</div>}
        </div>
    );
}

export default RegisterPage;
