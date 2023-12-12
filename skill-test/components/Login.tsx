// components/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button, TextField, Typography, Checkbox, FormControlLabel, Paper, Container, Grid } from '@mui/material';

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
        <Container component="main" maxWidth="xs" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" gutterBottom>
            Login
            </Typography>
            <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 20 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    name="username"
                    InputLabelProps={ { shrink: true, htmlFor: 'Username' } }
                    placeholder= "Username*"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    InputLabelProps={ { shrink: true, htmlFor: 'Password' } }
                    placeholder="Password*"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox color="primary" value={showPassword} onChange={() => setShowPassword(!showPassword)} />}
                    label="Show password"
                />
            </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }}>
                Login
            </Button>
            </form>
        </Paper>
        </Container>
    );
};
export default Login;

