import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TableChartIcon from '@mui/icons-material/TableChart';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
    const router = useRouter();

    const goToTablePage = () => {
        router.push('/table'); // Adjust the path based on your folder structure
    };

    const signOut = () => {
        // Implement sign-out logic, such as clearing authentication token, etc.
    router.push('/'); // Adjust the path based on your folder structure
    };

    return (
    <AppBar position="static" style={{ backgroundColor: "#20262E", borderBottom: '2px solid #DDDDDD' }}>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="back" onClick={signOut}>
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Sign out
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="table" onClick={goToTablePage}>
            <Typography variant="h6" sx={{ marginRight: '8px' }}>
                    Table
                </Typography>
                <TableChartIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
    );
};

export default Navbar;
