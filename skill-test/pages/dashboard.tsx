import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import Navbar from '../components/Navbar'

const Dashboard: React.FC = () => {
const [dashboardData, setDashboardData] = useState({
    tables: [],
    barChartData: [],
    pieChartData: [],
    anotherPieChartData: [],
    anotherBarChartData: [],
    });

useEffect(() => {
    // Fetch data from mocky.io
    const fetchData = async () => {
    try {
        const response = await fetch('https://run.mocky.io/v3/35f8433d-b1fc-4698-83cc-afed942a5633');
        const data = await response.json();
        console.log('Fetched data:', data);
        setDashboardData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };

    fetchData();
}, []);

return (
    <div>
        <Navbar />
        <Grid container spacing={2} style={{ paddingTop: 20, paddingLeft: 10, paddingRight: 10, }}>
        <Grid item xs={12} md={6}>
            <Paper
                elevation={3}
                style={{
                    padding: 20,
                    marginBottom: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: 800,
                    backgroundColor: '#DDDDDD',
                    border: '3px solid black',
                }}
            >
            <Typography variant="h6" gutterBottom style={{ color: '#333333', fontFamily: 'Arial, sans-serif', fontSize: 30, fontWeight: 'bold' }}>
                Bar Chart
            </Typography>
            <BarChart
                width={400}
                height={300}
                data={dashboardData.barChartData}
                margin={{ top: 20, right: 40, left: 10, bottom: 5 }}
                style={{ backgroundColor: "#EEEEEE", border: '1px solid black' }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#FF5733" />
            </BarChart>
            </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
            <Paper
                elevation={3}
                style={{
                    padding: 20,
                    marginBottom: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: 800,
                    backgroundColor: '#DDDDDD',
                    border: '3px solid black',
                }}
            >
            <Typography variant="h6" gutterBottom style={{ color: '#333333', fontFamily: 'Arial, sans-serif', fontSize: 30, fontWeight: 'bold' }}>
                Pie Chart
            </Typography>
            <PieChart
                width={400}
                height={300}
                style={{ backgroundColor: "#EEEEEE", border: '1px solid black' }}
            >
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={dashboardData.pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                >
                <Cell key="cell-0" fill="#FFD369" />
                <Cell key="cell-1" fill="#FF0000" />
                <Cell key="cell-2" fill="#03506F" />
                </Pie>
            </PieChart>
            </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
            <Paper
                elevation={3}
                style={{
                    padding: 20,
                    marginBottom: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: 800,
                    backgroundColor: '#DDDDDD',
                    border: '3px solid black',
                }}
            >
            <Typography variant="h6" gutterBottom style={{ color: '#333333', fontFamily: 'Arial, sans-serif', fontSize: 30, fontWeight: 'bold' }}>
                Another Pie Chart
            </Typography>
            <PieChart
                width={400}
                height={300}
                style={{ backgroundColor: "#EEEEEE", border: '1px solid black' }}
            >
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={dashboardData.anotherPieChartData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
            >
                <Cell key="cell-0" fill="#FFD369" />
                <Cell key="cell-1" fill="#FF0000" />
                <Cell key="cell-2" fill="#03506F" />
            </Pie>
            </PieChart>
            </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
            <Paper
                elevation={3}
                style={{
                    padding: 20,
                    marginBottom: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: 800,
                    backgroundColor: '#DDDDDD',
                    border: '3px solid black',
                }}
            >
            <Typography variant="h6" gutterBottom style={{ color: '#333333', fontFamily: 'Arial, sans-serif', fontSize: 30, fontWeight: 'bold' }}>
                Another Bar Chart
            </Typography>
            <BarChart
                width={400}
                height={300}
                data={dashboardData.anotherBarChartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                style={{ backgroundColor: "#EEEEEE", border: '1px solid black' }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
            </Paper>
        </Grid>
    </Grid>
</div>
);
};

export default Dashboard;

