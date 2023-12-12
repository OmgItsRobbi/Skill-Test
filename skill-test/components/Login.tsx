// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Checkbox, FormControlLabel, Paper, Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';

// Define the interface for the Login component
interface LoginProps {
  onLoginSuccess: () => void;
}

// Define the Login component
const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  // Initialize the router from Next.js
  const router = useRouter();
  // Initialize state variables for username, password, and showPassword
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Define the function to handle the login process
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if both username and password are provided
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

  // Render the component
  return (
    <Container component="main" maxWidth="xs" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#333333', fontFamily: 'Rethink Sans, sans-serif' }}>
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
                InputLabelProps={{ shrink: true, htmlFor: 'Username' }}
                placeholder="Username*"
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
                InputLabelProps={{ shrink: true, htmlFor: 'Password' }}
                placeholder="Password*"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox style={{ color: '#333333' }} value={showPassword} onChange={() => setShowPassword(!showPassword)} />}
                label="Show password"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20, backgroundColor: '#333333', color: '#f5f5f5' }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

// Export the Login component
export default Login;
