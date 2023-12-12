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
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 p-4 bg-white rounded-md shadow-md">
                <h2 className="text-3xl font-extrabold text-center">Login</h2>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username" className="sr-only">
                            Username:
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password:
                        </label>
                        <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                <div className="flex items-center">
                <input
                    id="show-password"
                    name="show-password"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="show-password" className="ml-2 block text-sm text-gray-900">
                Show Password
                </label>
            </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;
