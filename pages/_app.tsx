// pages/_app.tsx
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  // Check if the current component is not the Login component
    const isLoginComponent = router.pathname === '/login';

    return (
    <div style={{ backgroundColor: '#20262E', minHeight: '100vh', margin: 0, padding: 0, boxSizing: 'border-box' }}>
        <Component {...pageProps} />
    </div>
    );
}

export default MyApp;
