import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

const TablePage: React.FC = () => {
const router = useRouter();

const [tableData, setTableData] = useState([]);
const [isButtonHovered, setIsButtonHovered] = useState(false);

useEffect(() => {
    // Fetch data from mocky.io
    const fetchData = async () => {
        try {
            const response = await axios.get('https://run.mocky.io/v3/2d01336f-9c88-49ce-b62a-e1af6c7e396e');
            setTableData(response.data.tables[0].data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);

const handleBackToDashboard = () => {
    router.push('/dashboard');
};

return (
    <div style={{ padding: 20 }}>
        <Button 
            variant="contained" 
            onClick={handleBackToDashboard} 
            style={{ marginBottom: 20, backgroundColor: isButtonHovered ? '#A9A9A9' : '#20262E'}}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
        >
            Back to Dashboard
        </Button>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center', color: '#DDDDDD', marginBottom: '20px' }}>
            Table Page
        </Typography>
    <TableContainer component={Paper}>
        <Table 
            style={{ borderCollapse: 'collapse', minWidth: 650, border: 'solid black 4px'}}
        >
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>  
            </TableHead>
        <TableBody>
            {tableData.map((row) => (
                <TableRow key={row.id} style={{ border: '1px solid black'}}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
);
};

export default TablePage;

