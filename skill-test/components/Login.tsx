// components/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface LoginProps {
    onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  // State for input fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

  // useRouter for programmatic navigation
    const router = useRouter();

  // Event handler for form submission
    const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation check
    if (!username.trim() || !password.trim()) {
        console.error('Username and password are required.');
        return;
    }

    try {
      // Simulate API request using Axios
        const response = await axios.post('https://run.mocky.io/v3/a640a277-6211-433c-9390-36066dbb2b33', {
        username,
        password,
        });

    if (response.data.success) {
        // If login is successful, trigger the onLoginSuccess callback
        onLoginSuccess();

        // Redirect to the dashboard page
        router.push('/dashboard');
    } else {
        console.error('Login failed');
    }
    } catch (error) {
        console.error('Error during login:', error);
    }
};

    return (
    // Outer container with flex and centering styles
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Inner container with padding, background, and shadow styles */}
        <div className="p-4 bg-white rounded-md shadow-md">
        {/* Login title */}
        <h2 className="text-3xl font-extrabold text-center mb-4">Login</h2>

        {/* Form with space between elements */}
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Username input field */}
            <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username:
            </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
            />
            </div>

          {/* Password input field */}
            <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password:
            </label>
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
            />
            </div>

          {/* Checkbox for showing password */}
            <div className="flex items-center">
            <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
            />
            <label htmlFor="showPassword" className="text-sm">
                Show Password
            </label>
        </div>

          {/* Login button */}
        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
            Login
        </button>
        </form>
        </div>
    </div>
);
};

export default Login;

