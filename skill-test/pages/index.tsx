// pages/App.tsx or pages/index.tsx
import React from 'react';
import Login from '../components/Login';

const IndexPage: React.FC = () => {
  const handleLoginSuccess = () => {
    // Handle the logic when login is successful
    console.log('Login successful! Redirect or update state as needed.');
  };

  return (
    <div>
      <Login onLoginSuccess={handleLoginSuccess} />
      {/* Add other components or content as needed */}
    </div>
  );
};

export default IndexPage;

