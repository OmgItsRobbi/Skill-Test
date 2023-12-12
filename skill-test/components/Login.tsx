// components/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface LoginProps {
    onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
    try {
        const response = await axios.post('https://run.mocky.io/v3/a640a277-6211-433c-9390-36066dbb2b33', {
            username,
            password,
        });

    if (response.data.success) {
        onLoginSuccess();
    } else {
        console.error('Login failed');
    }
    } catch (error) {
        console.error('Error during login:', error);
    }
    };

    return (
    <div>
        <label>
            Username:
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <br />
        <label>
            Password:
            <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
            </label>
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
